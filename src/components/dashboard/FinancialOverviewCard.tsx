import { DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const FinancialOverviewCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="h-5 w-5 mr-2" />
          Финансовый обзор 2024
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-500">Выручка</span>
            <div className="text-2xl font-bold">$504,000</div>
            <div className="text-sm text-red-500">78% от цели ($650,000)</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Валовая прибыль</span>
            <div className="text-2xl font-bold">$264,000</div>
            <div className="text-sm text-red-500">68% от цели ($390,000)</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Чистая прибыль</span>
            <div className="text-2xl font-bold text-red-500">-$62,000</div>
            <div className="text-sm text-red-500">-103% от цели ($60,000)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};