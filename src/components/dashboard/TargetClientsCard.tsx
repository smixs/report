import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const targetSegments = [
  {
    category: 'Автомобили',
    clients: ['Roodel (Haval, Cherry)'],
  },
  {
    category: 'Фарма',
    clients: ['Bionorica', 'Eigis'],
  },
  {
    category: 'Ритейл',
    clients: ['Корзинка'],
  },
  {
    category: 'Телеком и Финтех',
    clients: ['Hambi', 'Humans', 'Anorbank', 'Avo Bank', 'TBC/Payme'],
  },
  {
    category: 'Продукты питания',
    clients: ['Rozmetov', 'Sherin', 'Musafo', 'Сочная долина', 'Evos', 'Oqtepa Lavash', 'Nestle'],
  },
  {
    category: 'Техника',
    clients: ['Honor', 'Samsung', 'LG'],
  },
  {
    category: 'Платежные системы',
    clients: ['PayNet', 'Click', 'Visa', 'Mastercard'],
  },
];

export const TargetClientsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Целевые клиенты 2025</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {targetSegments.map((segment) => (
            <div key={segment.category} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">{segment.category}</h3>
              <div className="flex flex-wrap gap-2">
                {segment.clients.map((client) => (
                  <span
                    key={client}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};