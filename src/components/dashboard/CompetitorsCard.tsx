import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const competitors = [
  { name: 'Синтез', strengths: ['Сильный креатив', 'Большой портфель'], weaknesses: ['Высокие цены'] },
  { name: 'Locals', strengths: ['Локальная экспертиза', 'SMM'], weaknesses: ['Ограниченный охват'] },
  { name: 'We Digital', strengths: ['Digital expertise', 'Инновации'], weaknesses: ['Новый игрок'] },
  { name: 'FCB', strengths: ['Международный бренд', 'Ресурсы'], weaknesses: ['Бюрократия'] },
  { name: '605', strengths: ['Креатив', 'PR'], weaknesses: ['Узкая специализация'] },
  { name: 'Vse Budet', strengths: ['Локальные связи', 'Цены'], weaknesses: ['Качество'] }
];

export const CompetitorsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Конкурентный анализ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {competitors.map((competitor) => (
              <div key={competitor.name} className="border p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{competitor.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-green-600 mb-1">Сильные стороны:</p>
                    <ul className="list-disc pl-4 text-sm">
                      {competitor.strengths.map((strength) => (
                        <li key={strength}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-600 mb-1">Слабые стороны:</p>
                    <ul className="list-disc pl-4 text-sm">
                      {competitor.weaknesses.map((weakness) => (
                        <li key={weakness}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Наши цели по позиционированию</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">2024:</span>
                <span>Топ-3 агентство</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">2025:</span>
                <span>Топ-2 агентство</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">2026:</span>
                <span>Лидер рынка Узбекистана</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};