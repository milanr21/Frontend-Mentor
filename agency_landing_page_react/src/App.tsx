import { useEffect, useState } from 'react';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import useMediaQuery from './hooks/useMediaQuery';
import Gallery from './components/Gallery/Gallery';
import FeatureSection from './components/Features/FeatureSection';
import ServiceSection from './components/Features/ServiceSection';
import Testimonials from './components/Testimonials/Testimonials';

// Feature images
import standOutMobile from './assets/images/mobile/image-stand-out.jpg';
import transformMobile from './assets/images/mobile/image-transform.jpg';
import standOutDesktop from './assets/images/desktop/image-stand-out.jpg';
import transformDesktop from './assets/images/desktop/image-transform.jpg';

// Service images
import photoMobile from './assets/images/mobile/image-photography.jpg';
import photoDesktop from './assets/images/desktop/image-photography.jpg';
import graphicMobile from './assets/images/mobile/image-graphic-design.jpg';
import graphicDesktop from './assets/images/desktop/image-graphic-design.jpg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  return (
    <div id='home' className='app-container'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main>
        <Hero />

        <div id='services'>
          <FeatureSection
            id='transform'
            title='Transform your brand'
            description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
            imageMobile={transformMobile}
            imageDesktop={transformDesktop}
            buttonColor='bg-primary-yellow-500'
            reverse={true}
          />

          <FeatureSection
            title='Stand out to the right audience'
            description='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
            imageMobile={standOutMobile}
            imageDesktop={standOutDesktop}
            buttonColor='bg-primary-red-400'
          />

          <div id='about' className='grid grid-cols-1 md:grid-cols-2'>
            <ServiceSection
              title='Graphic Design'
              description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
              imageMobile={graphicMobile}
              imageDesktop={graphicDesktop}
              textColor='text-primary-green-800'
            />
            <ServiceSection
              title='Photography'
              description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
              imageMobile={photoMobile}
              imageDesktop={photoDesktop}
              textColor='text-primary-blue-800'
            />
          </div>
        </div>

        <Testimonials />
        <div id='projects'>
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
