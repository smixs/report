import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SWOTSection = () => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h3 className="font-semibold mb-2 text-blue-600">Сильные стороны</h3>
      <ul className="list-disc pl-4">
        <li>Международный опыт</li>
        <li>Интеграция GenAI</li>
        <li>Опыт работы с крупными брендами</li>
        <li>Креативные возможности</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-red-600">Слабые стороны</h3>
      <ul className="list-disc pl-4">
        <li>Низкая узнаваемость на рынке</li>
        <li>Слабая локальная команда</li>
        <li>Отсутствие выделенных продаж</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-green-600">Возможности</h3>
      <ul className="list-disc pl-4">
        <li>Растущий цифровой рынок</li>
        <li>Спрос на AI-сервисы</li>
        <li>Развитие электронной коммерции</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-orange-600">Угрозы</h3>
      <ul className="list-disc pl-4">
        <li>Конкуренция с крупными агентствами</li>
        <li>Экономическая нестабильность</li>
        <li>Давление рынка</li>
      </ul>
    </div>
  </div>
);

export const StrategyCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Стратегическое видение</CardTitle>
      </CardHeader>
      <CardContent>
        <SWOTSection />
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Стратегические цели</h3>
          <div className="space-y-2">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold">2025</h4>
              <p>Выручка: $750,000 | Позиция: Топ-3 агентство</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold">3-летняя цель</h4>
              <p>Выручка: $1.5M | Позиция: Топ-2 агентство</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">5-летняя цель</h4>
              <p>Позиция: #1 агентство в Узбекистане</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};