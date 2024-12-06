import { Target } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const TargetsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Цели на 2025
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-500">Целевая выручка</span>
            <div className="text-2xl font-bold">$750,000</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Целевая валовая прибыль</span>
            <div className="text-2xl font-bold">$450,000</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Целевая чистая прибыль</span>
            <div className="text-2xl font-bold">$100,000</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};