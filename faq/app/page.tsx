import Faq from './components/faq';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col bg-purple-100'>
      <Faq />
      <Footer />
    </main>
  );
}
