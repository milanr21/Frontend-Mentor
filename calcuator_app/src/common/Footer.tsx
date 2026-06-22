const Footer = () => {
  return (
    <footer className={`text-center text-(--text-primary)`}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
        className='underline font-semibold text-(--key-accent)'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.frontendmentor.io/profile/milanr21'
        target='_blank'
        rel='noreferrer'
        className='underline font-semibold  text-(--key-accent)'
      >
        Milan Rawal
      </a>
      .
    </footer>
  );
};

export default Footer;
