import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const marketData = [
  { category: 'ТВ', share: 55, growth: 15 },
  { category: 'Digital', share: 25, growth: 35 },
  { category: 'Радио', share: 10, growth: 20 },
  { category: 'OOH', share: 7, growth: 5 },
  { category: 'Пресса', share: 3, growth: -10 }
];

export const MarketAnalysisCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Анализ рынка Узбекистана</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Ключевые показатели рынка</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Население</p>
                <p className="text-xl font-bold">37.1 млн</p>
                <p className="text-sm text-gray-500">82% моложе 50 лет</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Рост рынка</p>
                <p className="text-xl font-bold">30-35%</p>
                <p className="text-sm text-gray-500">ежегодно</p>
              </div>
            </div>
          </div>

          <div className="h-80">
            <h3 className="text-lg font-semibold mb-2">Распределение медиа-каналов</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="share" fill="#2563eb" name="Доля рынка (%)" />
                <Bar dataKey="growth" fill="#10b981" name="Рост (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Тренды рынка</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Рост e-commerce (Uzum, Wildberries)</li>
              <li>Высокая инфляция в рекламных ценах</li>
              <li>Переход на EqGRP с 2025 года</li>
              <li>Популярность Telegram и Instagram</li>
              <li>Растущий спрос на GenAI решения</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};