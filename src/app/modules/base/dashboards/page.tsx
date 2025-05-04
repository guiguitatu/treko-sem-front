import { ChartMetricInteractive } from "@/components/chart-metric-interactive";
import { SectionCards } from "@/components/section-cards";


export default function DashboardPage() {
  const retentionData = [
    { date: "2025-04-29", retentionRate: 0.96 },
    { date: "2025-04-22", retentionRate: 0.96 },
    { date: "2025-04-15", retentionRate: 0.95 },
  ];

  const churnData = [
    { date: "2025-04-29", churnRate: 0.04 },
    { date: "2025-04-22", churnRate: 0.04 },
    { date: "2025-04-15", churnRate: 0.05 },
  ];

  const totalDonationsData = [
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
              color="var(--red)" />
          </div>
        </div>
      </div>
    </div>
  );
}
