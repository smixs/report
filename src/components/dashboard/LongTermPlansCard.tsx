import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const LongTermPlansCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Долгосрочные планы развития</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">2025 год</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Финансовые цели:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Выручка: $750,000</li>
                  <li>Валовая прибыль: $450,000</li>
                  <li>Чистая прибыль: $100,000</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Позиционирование:</p>
                <p className="text-sm">Топ-3 агентство в Узбекистане</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">3-летняя перспектива (2027)</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Финансовые цели:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Выручка: $1.5M</li>
                  <li>Валовая прибыль: $900,000</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Стратегические цели:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Топ-2 агентство в Узбекистане</li>
                  <li>Развитие AI-направления</li>
                  <li>Выход на рынки соседних стран</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">5-летняя перспектива (2029)</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Позиционирование:</p>
                <p className="text-sm">Лидер рынка Узбекистана</p>
              </div>
              <div>
                <p className="font-medium">Стратегические цели:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Создание сети офисов в регионе</li>
                  <li>Запуск собственных технологических продуктов</li>
                  <li>Развитие образовательного направления</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};