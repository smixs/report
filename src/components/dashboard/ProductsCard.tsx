import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Rocket, Bot, ChartBar } from 'lucide-react';

const products = [
  {
    name: 'AI-генерация визуалов',
    description: 'Автоматизированная генерация визуального контента с помощью AI',
    plan: 'Разработка и внедрение в SMM проекты',
    budget: 20000,
    icon: Bot,
  },
  {
    name: 'Аналитика digital-кампаний',
    description: 'Платформа для анализа эффективности рекламных кампаний',
    plan: 'Создание аналитической платформы',
    budget: 25000,
    icon: ChartBar,
  },
  {
    name: 'Telegram боты и веб-сервисы',
    description: 'Интерактивные боты и мини-приложения',
    plan: 'Разработка шаблонных решений',
    budget: 12000,
    icon: Rocket,
  },
];

export const ProductsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Новые продукты 2025</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {products.map((product) => (
            <div key={product.name} className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <product.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">План действий</p>
                      <p className="text-sm">{product.plan}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Инвестиции</p>
                      <p className="text-sm">${product.budget.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">Риски</h3>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Ограниченная команда разработки</li>
              <li>Зависимость от одного специалиста по GenAI</li>
              <li>Высокая конкуренция на рынке</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};