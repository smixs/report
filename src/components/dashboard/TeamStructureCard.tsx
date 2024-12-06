import { Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const teamStructure = [
  { role: 'Директор/GenAI', count: 1 },
  { role: 'Аккаунт-менеджеры', count: 4 },
  { role: 'SMM', count: 2 },
  { role: 'Креаторы', count: 3 },
  { role: 'Арт-директор', count: 1 },
  { role: 'Дизайнеры', count: 7 },
];

export const TeamStructureCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Структура команды
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {teamStructure.map((item) => (
            <div key={item.role} className="flex justify-between">
              <span>{item.role}</span>
              <span className="font-bold">{item.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};