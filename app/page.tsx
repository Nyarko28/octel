import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
