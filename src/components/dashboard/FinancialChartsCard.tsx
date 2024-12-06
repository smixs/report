import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
  '#D4A5A5', '#9E579D', '#7FB3D5', '#E8DAEF', '#F5CBA7',
  '#A2D9CE', '#D7BDE2', '#F9E79F', '#F5B7B1', '#D5F5E3'
];

const expensesData = [
  { name: 'Расходы', value: 314446 },
  { name: 'Себестоимость услуг', value: 218534 }
] as const;

const servicesCostData = [
  { name: 'Креативная концепция', value: 26.12 },
  { name: 'Блогеры', value: 22.64 },
  { name: 'СММ', value: 16.32 },
  { name: 'Фотосессия', value: 7.54 },
  { name: 'Дизайн POSM', value: 6.35 },
  { name: 'КВ + адаптации', value: 5.19 },
  { name: 'Продакшн ролика', value: 4.45 },
  { name: 'Адаптация роликов', value: 3.00 },
  { name: 'Ресайзы визуалов', value: 2.81 },
  { name: 'Ивенты/БТЛ', value: 2.50 },
  { name: 'Производство рекламных конструкций', value: 1.89 },
  { name: 'Абонентское обслуживание', value: 1.19 }
] as const;

const expensesCategoriesData = [
  { name: 'Расходы по заработной плате', value: 66.85 },
  { name: 'Операционная прибыль', value: 19.64 },
  { name: 'Налоги на зарплату', value: 5.13 },
  { name: 'Прочие расходы (бонусы)', value: 3.57 },
  { name: 'Прочие расходы (офис)', value: 3.03 },
  { name: 'Маркетинг', value: 1.40 },
  { name: 'Командировки', value: 0.32 },
  { name: 'Представительские', value: 0.04 },
  { name: 'Подарки клиентам', value: 0.01 }
] as const;

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: { name: string; value: number };
  }>;
  unit?: string;
}

const CustomTooltip = ({ active, payload, unit }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg border text-xs">
        <p className="font-semibold">{payload[0].payload.name}</p>
        <p className="text-gray-600">
          {payload[0].value.toLocaleString()}
          {unit === 'currency' ? ' тыс $' : '%'}
        </p>
      </div>
    );
  }
  return null;
};

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: CustomLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (value < 3) return null;

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="middle"
      className="text-[9px]"
    >
      {`${value}%`}
    </text>
  );
};

export const FinancialChartsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Общие расходы и себестоимость (тыс $)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={({ value }) => `$${value.toLocaleString()}`}
                >
                  {expensesData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip unit="currency" />} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Структура себестоимости услуг</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={servicesCostData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {servicesCostData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="vertical" 
                  align="right" 
                  verticalAlign="middle"
                  wrapperStyle={{ fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Структура расходов</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesCategoriesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {expensesCategoriesData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="vertical" 
                  align="right" 
                  verticalAlign="middle"
                  wrapperStyle={{ fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 