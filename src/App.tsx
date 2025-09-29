import { ThemeProvider } from '@/components/ThemeProvider';
import { SimpleHeader } from '@/components/SimpleHeader';
import { HomeSection } from '@/components/HomeSection';
import { AcademicSection } from '@/components/AcademicSection';
import { SimpleProjectsSection } from '@/components/SimpleProjectsSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { SimpleContactSection } from '@/components/SimpleContactSection';
import { SimpleFooter } from '@/components/SimpleFooter';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <SimpleHeader />
        <main className="flex-1">
          <HomeSection />
          <AcademicSection />
          <SimpleProjectsSection />
          <ActivitiesSection />
          <SimpleContactSection />
        </main>
        <SimpleFooter />
      </div>
    </ThemeProvider>
  );
}
