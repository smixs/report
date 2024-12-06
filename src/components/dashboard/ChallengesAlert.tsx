import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export const ChallengesAlert = () => {
  return (
    <Alert className="mt-6">
      <AlertTitle>Ключевые вызовы 2024</AlertTitle>
      <AlertDescription>
        <ul className="list-disc pl-4 mt-2">
          <li>Низкая маржинальность и высокая стоимость услуг (45% от продаж)</li>
          <li>Высокие операционные расходы (66% от продаж)</li>
          <li>Нестабильность выручки (значительные сезонные колебания)</li>
          <li>Отсутствие крупных подписных услуг</li>
        </ul>
      </AlertDescription>
    </Alert>
  );
};