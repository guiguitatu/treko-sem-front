"use client";

import { ChartMetricInteractive } from "@/components/chart-metric-interactive";
import { SectionCards } from "@/components/section-cards";
import donations from "@/lib/donations.js";
import { useMemo } from "react";

type Donation = {
  id: number;
  donation_name: string;
  name: string;
  donated: number;
  type: string;
  date: string;
};

export default function DashboardPage() {
  const donationData = useMemo<Donation[]>(
    () => donations as Donation[],
    []
  );

  const monetaryDonations = useMemo(
    () => donationData.filter((donation) => donation.type === "money"),
    [donationData]
  );

  const totalDonationsData = useMemo(
    () => {
      const totalsByDate = monetaryDonations.reduce(
        (acc, donation) => {
          const currentTotal = acc.get(donation.date) ?? 0;
          acc.set(donation.date, currentTotal + donation.donated);
          return acc;
        },
        new Map<string, number>()
      );

      return Array.from(totalsByDate.entries())
        .map(([date, totalDonations]) => ({
          date,
          totalDonations,
        }))
        .sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    },
    [monetaryDonations]
  );

  const monthlyDonorSets = useMemo(
    () => {
      const donorsByMonth = new Map<string, Set<string>>();

      donationData.forEach((donation) => {
        const monthKey = donation.date.slice(0, 7);
        if (!donorsByMonth.has(monthKey)) {
          donorsByMonth.set(monthKey, new Set());
        }
        donorsByMonth.get(monthKey)!.add(donation.name);
      });

      return Array.from(donorsByMonth.entries()).sort(
        (a, b) =>
          new Date(`${a[0]}-01`).getTime() - new Date(`${b[0]}-01`).getTime()
      );
    },
    [donationData]
  );

  const { retentionData, churnData } = useMemo(() => {
    if (!monthlyDonorSets.length) {
      return { retentionData: [], churnData: [] };
    }

    const retention = monthlyDonorSets.map(([month, donors], index) => {
      if (index === 0) {
        return {
          date: `${month}-01`,
          retentionRate: 1,
        };
      }

      const [, previousDonors] = monthlyDonorSets[index - 1];
      const retainedCount = Array.from(donors).filter((donor) =>
        previousDonors.has(donor)
      ).length;
      const rate =
        previousDonors.size === 0
          ? 0
          : Number((retainedCount / previousDonors.size).toFixed(2));

      return {
        date: `${month}-01`,
        retentionRate: rate,
      };
    });

    const churn = retention.map((entry) => ({
      date: entry.date,
      churnRate: Number((1 - entry.retentionRate).toFixed(2)),
    }));

    return { retentionData: retention, churnData: churn };
  }, [monthlyDonorSets]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartMetricInteractive
              title="Total de Doações"
              data={totalDonationsData}
              metricKey="totalDonations"
              label="Total de doações: "
              aggregation="sum"
              color="var(--primary)"
            />

            <ChartMetricInteractive
              title="Retenção de Doadores"
              data={retentionData}
              metricKey="retentionRate"
              label="Taxa de retenção: "
              aggregation="avg"
              color="var(--primary)"
            />
            <ChartMetricInteractive
              title="Churn de Doadores"
              data={churnData}
              metricKey="churnRate"
              label="Taxa de churn: "
              aggregation="avg"
              color="var(--red)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
