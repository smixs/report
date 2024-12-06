import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FinancialOverviewCard } from '@/components/dashboard/FinancialOverviewCard';
import { TeamStructureCard } from '@/components/dashboard/TeamStructureCard';
import { TargetsCard } from '@/components/dashboard/TargetsCard';
import { MarketGrowthChart } from '@/components/dashboard/MarketGrowthChart';
import { ClientDistributionChart } from '@/components/dashboard/ClientDistributionChart';
import { ChallengesAlert } from '@/components/dashboard/ChallengesAlert';
import { StrategyCard } from '@/components/dashboard/StrategyCard';
import { MarketAnalysisCard } from '@/components/dashboard/MarketAnalysisCard';
import { CompetitorsCard } from '@/components/dashboard/CompetitorsCard';
import { ProductsCard } from '@/components/dashboard/ProductsCard';
import { TargetClientsCard } from '@/components/dashboard/TargetClientsCard';
import { BreakEvenCard } from '@/components/dashboard/BreakEvenCard';
import { LongTermPlansCard } from '@/components/dashboard/LongTermPlansCard';
import { FinancialChartsCard } from '@/components/dashboard/FinancialChartsCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">TDI AI Креативное Агентство</h1>
            <p className="text-gray-600 mt-2">Ташкент, Узбекистан</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="flex justify-center gap-4 w-full">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="market">Рынок</TabsTrigger>
            <TabsTrigger value="clients">Клиенты</TabsTrigger>
            <TabsTrigger value="financials">Финансы</TabsTrigger>
            <TabsTrigger value="strategy">Стратегия</TabsTrigger>
            <TabsTrigger value="products">Продукты</TabsTrigger>
            <TabsTrigger value="plans">Планы</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-3 gap-6">
              <FinancialOverviewCard />
              <TeamStructureCard />
              <TargetsCard />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <MarketGrowthChart />
              <ClientDistributionChart />
            </div>
            <ChallengesAlert />
          </TabsContent>

          <TabsContent value="market">
            <div className="grid grid-cols-1 gap-6">
              <MarketAnalysisCard />
              <CompetitorsCard />
            </div>
          </TabsContent>

          <TabsContent value="clients">
            <div className="grid grid-cols-1 gap-6">
              <ClientDistributionChart />
              <TargetClientsCard />
            </div>
          </TabsContent>

          <TabsContent value="financials">
            <div className="grid grid-cols-1 gap-6">
              <FinancialChartsCard />
              <BreakEvenCard />
            </div>
          </TabsContent>

          <TabsContent value="strategy">
            <StrategyCard />
          </TabsContent>

          <TabsContent value="products">
            <ProductsCard />
          </TabsContent>

          <TabsContent value="plans">
            <LongTermPlansCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;