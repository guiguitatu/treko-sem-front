"use client";

import { DataTable } from "@/components/data-table";
import data from "./data.json";
import { useRouter } from "next/navigation";


export default function RepresentativesPage() {
  const router = useRouter();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable
            data={data}
            showNewButton
            onNew={() => router.push("/representatives/new")}
          />
        </div>
      </div>
    </div>
  );
}
