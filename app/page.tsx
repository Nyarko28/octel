import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
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
      <Services />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
