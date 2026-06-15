import KarmaIcon from '../assets/images/icon-karma.svg';
import SupervisorIcon from '../assets/images/icon-supervisor.svg';
import CalculatorIcon from '../assets/images/icon-calculator.svg';
import TeamBuilderIcon from '../assets/images/icon-team-builder.svg';

interface CardProps {
  title: string;
  description: string;
  icon: string;
  borderColor: string;
  className?: string;
}

const Card = ({
  title,
  description,
  icon,
  borderColor,
  className,
}: CardProps) => (
  <div
    className={`border-t-4 ${borderColor} shadow-xl py-6 px-5 bg-neutral-white rounded-lg ${className}`}
  >
    <div className='flex flex-col h-full justify-between'>
      <p className='text-xl font-semibold'>{title}</p>
      <p className='text-neutral-grey-400 text-sm mt-2'>{description}</p>
      <div className='self-end py-4'>
        <img src={icon} alt={title} />
      </div>
    </div>
  </div>
);

const cardData = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: SupervisorIcon,
    borderColor: 'border-t-primary-cyan',
    wrapperClass:
      'md:row-span-2 flex items-center justify-center md:justify-end',
    cardClass: 'w-87.5',
  },
  {
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    icon: TeamBuilderIcon,
    borderColor: 'border-t-primary-red',
    wrapperClass: '',
    cardClass: 'w-87.5',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: KarmaIcon,
    borderColor: 'border-t-primary-orange',
    wrapperClass: '',
    cardClass: 'w-87.5',
  },
  {
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    icon: CalculatorIcon,
    borderColor: 'border-t-primary-blue',
    wrapperClass:
      'md:row-span-2 flex justify-center md:justify-start items-center',
    cardClass: 'h-56 w-3/4',
  },
];

const CardGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-x-8 md:gap-y-0'>
      {/* first column */}
      <div className={cardData[0].wrapperClass}>
        <Card {...cardData[0]} className={cardData[0].cardClass} />
      </div>

      {/* second column */}
      <div className='inline-flex flex-col  space-y-8 items-center'>
        <Card {...cardData[1]} className={cardData[1].cardClass} />
        <Card {...cardData[2]} className={cardData[2].cardClass} />
      </div>

      {/* third Column */}
      <div className={cardData[3].wrapperClass}>
        <Card {...cardData[3]} className={cardData[3].cardClass} />
      </div>
    </div>
  );
};

export default CardGrid;
