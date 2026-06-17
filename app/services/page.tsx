import { Hero, Section, ServiceCards } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("Services");
export default function Page() {
  return (
    <>
      <Hero
        title="Premium Event Services"
        subtitle="DJ services, sound reinforcement, entertainment, rentals, event coverage, and corporate event production."
      />
      <Section title="What We Deliver">
        <ServiceCards />
      </Section>
    </>
  );
}
