import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { marketGrowthData } from '@/lib/data/dashboard';

export const MarketGrowthChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Рост рынка (тыс. $)</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={marketGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year"
              padding={{ left: 0, right: 0 }}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <YAxis
              padding={{ top: 20, bottom: 20 }}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value: number) => [`$${(value / 1000).toFixed(0)}k`, 'Выручка']}
              labelFormatter={(label) => `Год: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: '#2563eb', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#2563eb' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};