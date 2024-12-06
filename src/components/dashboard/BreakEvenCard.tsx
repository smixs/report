import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const BreakEvenCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Точка безубыточности и антикризисный план</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Точка безубыточности</h3>
            <p className="text-xl font-bold mb-2">$40,000 / месяц</p>
            <div className="space-y-2">
              <p className="text-sm font-medium">План достижения:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>Привлечение 5 новых постоянных клиентов</li>
                <li>Оптимизация затрат на $30,000 в год</li>
                <li>Фокус на услугах с маржинальностью выше 50%</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Стабилизация доходов</h3>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li>Увеличение доли крупных проектов</li>
                <li>Развитие абонентского обслуживания</li>
                <li>Фокус на высокомаржинальных услугах</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Оптимизация расходов</h3>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li>Сокращение ФОТ на 10-15%</li>
                <li>Переход в IT Park</li>
                <li>Оптимизация работы с подрядчиками</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Антикризисный план (Plan B)</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">Сокращение расходов:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Сокращение затрат на 15%</li>
                  <li>Закрытие низкомаржинальных проектов</li>
                  <li>Минимизация аренды</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Фокус на ключевых клиентах:</p>
                <ul className="list-disc pl-4 text-sm">
                  <li>Индивидуальные предложения для IBT, PepsiCo, OQ</li>
                  <li>Увеличение доли проектов с высокой лояльностью</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};