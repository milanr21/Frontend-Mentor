import bgDesktopImg from '/images/bg-header-desktop.svg';
import bgMobileImg from '/images/bg-header-mobile.svg';

import jobDataList from '../data/jobData.json';
import JobItem from './JobItem';

const JobList = () => {
  return (
    <div className=' top-0 left-0 w-full bg-background'>
      <img
        src={bgDesktopImg}
        alt=''
        className='hidden w-full h-3/4 md:block object-cover bg-primary'
      />

      <img
        src={bgMobileImg}
        alt=''
        className='block md:hidden w-full object-cover bg-primary'
      />

      <section className='relative z-10 h-full flex flex-1 items-center justify-center'>
        <div className='py-6'>
          {jobDataList.map((item) => (
            <JobItem item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobList;
