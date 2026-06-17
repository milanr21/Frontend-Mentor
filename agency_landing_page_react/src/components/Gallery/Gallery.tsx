import React from 'react';

// Desktop images
import milkDesktop from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeDesktop from '../../assets/images/desktop/image-gallery-orange.jpg';
import coneDesktop from '../../assets/images/desktop/image-gallery-cone.jpg';
import sugarDesktop from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';

// Mobile images
import milkMobile from '../../assets/images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from '../../assets/images/mobile/image-gallery-orange.jpg';
import coneMobile from '../../assets/images/mobile/image-gallery-cone.jpg';
import sugarMobile from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg';

const galleryItems = [
  { id: 1, desktop: milkDesktop, mobile: milkMobile, alt: 'Milk bottles' },
  { id: 2, desktop: orangeDesktop, mobile: orangeMobile, alt: 'Orange slice' },
  { id: 3, desktop: coneDesktop, mobile: coneMobile, alt: 'Waffle cone' },
  { id: 4, desktop: sugarDesktop, mobile: sugarMobile, alt: 'Sugar cubes' },
];

const Gallery: React.FC = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {galleryItems.map((item) => (
        <picture key={item.id}>
          <source media="(min-width: 768px)" srcSet={item.desktop} />
          <img
            src={item.mobile}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </picture>
      ))}
    </section>
  );
};

export default Gallery;
