import { DonationsDataTable } from "@/components/donations-data-table";
import donations from "@/lib/donations";

export default function DonationsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Donations</h1>
      <DonationsDataTable data={donations} />
    </div>
  );
}