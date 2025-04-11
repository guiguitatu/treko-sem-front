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

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-12-01", totalDonations: 400000, type: 'academic_center' },
  { date: "2024-12-02", totalDonations: 300000, type: 'academic_center' },
  { date: "2024-12-03", totalDonations: 500000, type: 'athletic' },
  { date: "2024-12-04", totalDonations: 200000, type: 'athletic' },
  { date: "2024-12-05", totalDonations: 600000, type: 'central_directory' },
  { date: "2024-12-06", totalDonations: 700000, type: 'central_directory' },
  { date: "2024-11-01", totalDonations: 800000, type: 'academic_center' },
  { date: "2024-11-02", totalDonations: 100000, type: 'academic_center' },
  { date: "2024-11-03", totalDonations: 300000, type: 'athletic' },
  { date: "2024-11-04", totalDonations: 500000, type: 'athletic' },
  { date: "2024-11-05", totalDonations: 700000, type: 'central_directory' },
  { date: "2024-11-06", totalDonations: 900000, type: 'central_directory' },
  { date: "2024-10-01", totalDonations: 200000, type: 'academic_center' },
  { date: "2024-10-02", totalDonations: 400000, type: 'academic_center' },
  { date: "2024-10-03", totalDonations: 600000, type: 'athletic' },
  { date: "2024-10-04", totalDonations: 800000, type: 'athletic' },
  { date: "2024-10-05", totalDonations: 1000000, type: 'central_directory' },
  { date: "2024-10-06", totalDonations: 300000, type: 'central_directory' },
  { date: "2024-09-01", totalDonations: 500000, type: 'academic_center' },
  { date: "2024-09-02", totalDonations: 750000, type: 'academic_center' },
  { date: "2024-09-03", totalDonations: 250000, type: 'athletic' },
  { date: "2024-09-04", totalDonations: 300000, type: 'athletic' },
  { date: "2024-09-05", totalDonations: 450000, type: 'central_directory' },
  { date: "2024-09-06", totalDonations: 600000, type: 'central_directory' },
  { date: "2025-01-01", totalDonations: 500000, type: 'academic_center' },
  { date: "2025-01-02", totalDonations: 300000, type: 'academic_center' },
  { date: "2025-01-03", totalDonations: 700000, type: 'athletic' },
  { date: "2025-01-04", totalDonations: 200000, type: 'athletic' },
  { date: "2025-01-05", totalDonations: 400000, type: 'central_directory' },
  { date: "2025-01-06", totalDonations: 600000, type: 'central_directory' },
  { date: "2025-02-01", totalDonations: 800000, type: 'academic_center' },
  { date: "2025-02-02", totalDonations: 100000, type: 'academic_center' },
  { date: "2025-02-03", totalDonations: 300000, type: 'athletic' },
  { date: "2025-02-04", totalDonations: 500000, type: 'athletic' },
  { date: "2025-02-05", totalDonations: 700000, type: 'central_directory' },
  { date: "2025-02-06", totalDonations: 900000, type: 'central_directory' },
  { date: "2025-03-01", totalDonations: 200000, type: 'academic_center' },
  { date: "2025-03-02", totalDonations: 400000, type: 'academic_center' },
  { date: "2025-03-03", totalDonations: 600000, type: 'athletic' },
  { date: "2025-03-04", totalDonations: 800000, type: 'athletic' },
  { date: "2025-03-05", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-03-06", totalDonations: 300000, type: 'central_directory' },
  { date: "2025-04-01", totalDonations: 1000000, type: 'academic_center' },
  { date: "2025-04-02", totalDonations: 1000, type: 'academic_center' },
  { date: "2025-04-03", totalDonations: 1000000, type: 'academic_center' },
  { date: "2025-04-04", totalDonations: 10000, type: 'academic_center' },
  { date: "2025-04-05", totalDonations: 1000000, type: 'athletic' },
  { date: "2025-04-06", totalDonations: 10000, type: 'athletic' },
  { date: "2025-04-07", totalDonations: 1000000, type: 'athletic' },
  { date: "2025-04-08", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-09", totalDonations: 100000, type: 'central_directory' },
  { date: "2025-04-10", totalDonations: 500000, type: 'central_directory' },
  { date: "2025-04-11", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-12", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-13", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-14", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-15", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-16", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-17", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-18", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-19", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-20", totalDonations: 10000, type: 'central_directory' },
  { date: "2025-04-21", totalDonations: 1000000, type: 'central_directory' },
  { date: "2025-04-22", totalDonations: 500000, type: 'academic_center' },
  { date: "2025-04-23", totalDonations: 750000, type: 'academic_center' },
  { date: "2025-04-24", totalDonations: 250000, type: 'athletic' },
  { date: "2025-04-25", totalDonations: 300000, type: 'athletic' },
  { date: "2025-04-26", totalDonations: 450000, type: 'central_directory' },
  { date: "2025-04-27", totalDonations: 600000, type: 'central_directory' },
  { date: "2025-04-28", totalDonations: 800000, type: 'academic_center' },
  { date: "2025-04-29", totalDonations: 200000, type: 'academic_center' },
  { date: "2025-04-30", totalDonations: 100000, type: 'athletic' },
  { date: "2025-05-01", totalDonations: 400000, type: 'athletic' },
  { date: "2025-05-02", totalDonations: 900000, type: 'central_directory' },
  { date: "2025-05-03", totalDonations: 700000, type: 'central_directory' },
  { date: "2025-05-04", totalDonations: 300000, type: 'academic_center' },
  { date: "2025-05-05", totalDonations: 500000, type: 'academic_center' },
  { date: "2025-05-06", totalDonations: 600000, type: 'athletic' },
  { date: "2025-05-07", totalDonations: 1000000, type: 'athletic' },
  { date: "2025-05-08", totalDonations: 200000, type: 'central_directory' },
  { date: "2025-05-09", totalDonations: 300000, type: 'central_directory' },
  { date: "2025-05-10", totalDonations: 400000, type: 'academic_center' },
  { date: "2025-05-11", totalDonations: 500000, type: 'academic_center' },
];

const chartConfig = {
  totalDonations: {
    label: "Doações totais: R$",
    color: "var(--primary)",
  },
  
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date();
    let daysToSubtract = 365;

    if (timeRange === "90d") {
      daysToSubtract = 90;
    } else if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const totalDonations = React.useMemo(
    () =>
      filteredData.reduce((acc, { totalDonations }) => acc + totalDonations, 0),
    [filteredData]
  );

  const formatBRL = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0, // remove decimals, keep if you need them
    }).format(value);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Doações</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total de doações no período: {formatBRL(totalDonations)}
          </span>
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
              aria-label="Select a value"
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
              <linearGradient
                id="fillTotalDonations"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="totalDonations"
              type="natural"
              fill="url(#fillTotalDonations)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
