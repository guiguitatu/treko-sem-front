import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";

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

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const percentage = Math.min(
    (campaign.current_value / campaign.goal) * 100,
    100
  );
  const startDate = new Date(campaign.start_date);
  const endDate = new Date(campaign.end_date);
  const statusLabel = campaign.isExpired
    ? "Expirada"
    : campaign.estatus === "active"
    ? "Ativa"
    : "Inativa";

  return (
    <Card
      key={campaign.id}
      className="rounded-2xl shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      data-slot="card"
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl">{campaign.campain_name}</CardTitle>
          <Badge variant={campaign.isExpired ? "destructive" : "outline"}>
            {statusLabel}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">
          {format(startDate, "PPP")} - {format(endDate, "PPP")}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {campaign.description}
        </p>
        <div className="text-sm">Meta: R${campaign.goal.toLocaleString()}</div>
        <div className="text-sm">
          Arrecadado: R${campaign.current_value.toLocaleString()}
        </div>
        <Progress value={percentage} className="h-4" />
        <div className="text-right text-xs text-muted-foreground">
          {percentage.toFixed(2)}% atingido da meta
        </div>
        <div className="text-xs text-muted-foreground">
          Aceita doações em: <strong>{campaign.accepted}</strong>
        </div>
      </CardContent>
    </Card>
  );
}
