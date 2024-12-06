import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { clientData, CHART_COLORS } from '@/lib/data/dashboard';

export const ClientDistributionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Распределение выручки по клиентам 2024</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={clientData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percentage }) => `${name} (${percentage}%)`}
              labelLine={{ stroke: '#666', strokeWidth: 1 }}
            >
              {clientData.map((entry, index) => (
                <Cell 
                  key={`cell-${entry.name}`} 
                  fill={CHART_COLORS[index % CHART_COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Выручка']}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};