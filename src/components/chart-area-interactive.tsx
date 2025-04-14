"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

function filterByRange(data: DataPoint[], days: number): DataPoint[] {
  const ref = new Date();
  const start = new Date(ref);
  start.setDate(start.getDate() - days);
  return data.filter((d) => new Date(d.date) >= start);
}

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
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) setTimeRange("7d");
  }, [isMobile]);

  const days = React.useMemo(() => {
    switch (timeRange) {
      case "7d":
        return 7;
      case "30d":
        return 30;
      case "90d":
        return 90;
      default:
        return 365;
    }
  }, [timeRange]);

  const filteredData = React.useMemo(
    () => filterByRange(data, days),
    [data, days]
  );

  const aggregatedValue = React.useMemo(() => {
    if (!filteredData.length) return 0;
    const total = filteredData.reduce(
      (acc, d) => acc + (d[metricKey] as number),
      0
    );
    return aggregation === "avg" ? total / filteredData.length : total;
  }, [filteredData, aggregation, metricKey]);

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
      ? `Total no período: ${formatValue(aggregatedValue)}`
      : `Média no período: ${formatValue(aggregatedValue)}`);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">{descriptionText}</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="365d">Todo o ano</ToggleGroupItem>
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select time range"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
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
