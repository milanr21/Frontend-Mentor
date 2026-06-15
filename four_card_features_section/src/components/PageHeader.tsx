interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <header className='max-w-xs md:max-w-md text-center space-y-2 mb-12 mt-8'>
      <h1 className='flex flex-col  text-2xl md:text-3xl'>
        <span className='text-neutral-grey-400 font-thin'> {title}</span>

        <span className='font-semibold'>{subtitle}</span>
      </h1>
      <p className='text-neutral-grey-400'>{description}</p>
    </header>
  );
};

export default PageHeader;
