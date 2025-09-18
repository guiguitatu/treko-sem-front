"use client";

import { useMemo } from "react";
import { DonationsDataTable } from "@/components/donations-data-table";
import donations from "@/lib/donations.js";

interface Donation {
  id: number;
  donation_name: string;
  name: string;
  donated: number;
  type: string;
  date: string;
}

export default function DonationsPage() {
  const donationData = useMemo<Donation[]>(() => {
    return [...(donations as Donation[])].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Doações</h1>
      <DonationsDataTable data={donationData} />
    </div>
  );
}
