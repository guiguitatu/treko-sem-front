"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type DataPoint = {
  date: string;
  /** One or more numeric metric fields */
  [key: string]: number | string;
};

interface MetricDashboardProps {
  title: string;
  data: DataPoint[];
  metricKey: string;
  label: string;
  color?: string;
  gradientId?: string;
  aggregation?: "sum" | "avg";
  formatValue?: (value: number) => string;
  description?: string;
}

const defaultFormat = (v: number) => v.toLocaleString();

export function ChartMetricInteractive({
  title,
  data,
  metricKey,
  label,
  color = "var(--primary)",
  gradientId = `fill-${metricKey}`,
  aggregation = "sum",
  formatValue = defaultFormat,
  description,
}: MetricDashboardProps) {
  const isMobile = useIsMobile();

  const aggregatedValue = React.useMemo(() => {
    if (!data.length) return 0;
    const total = data.reduce(
      (acc, d) => acc + (d[metricKey] as number),
      0
    );
    return aggregation === "avg" ? total / data.length : total;
  }, [data, aggregation, metricKey]);

  const chartConfig: ChartConfig = React.useMemo(
    () => ({
      [metricKey]: {
        label,
        color,
      },
    }),
    [metricKey, label, color]
  );

  const descriptionText =
    description ??
    (aggregation === "sum"
      ? `Total: ${formatValue(aggregatedValue)}`
      : `Média: ${formatValue(aggregatedValue)}`);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{descriptionText}</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey={metricKey}
              type="natural"
              fill={`url(#${gradientId})`}
              stroke={color}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
