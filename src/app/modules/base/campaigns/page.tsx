// src/app/modules/base/donation/page.tsx
"use client";

import CampaignCard from "@/components/campaign-card";
import campains from "@/lib/campains.js";
import React, { useMemo } from "react";

type Campaign = {
  id: number;
  campain_name: string;
  description: string;
  start_date: string;
  end_date: string;
  estatus: string;
  goal: number;
  current_value: number;
  accepted: string;
  isExpired: boolean;
};

export default function CampaignsPages() {
  const campaigns = useMemo<Campaign[]>(
    () => [...(campains as Campaign[])],
    []
  );

  const sortedCampaigns = useMemo(
    () =>
      [...campaigns].sort((a, b) => {
        if (a.isExpired !== b.isExpired) {
          return a.isExpired ? 1 : -1;
        }
        return (
          new Date(a.end_date).getTime() - new Date(b.end_date).getTime()
        );
      }),
    [campaigns]
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {sortedCampaigns.map((campaign: Campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
