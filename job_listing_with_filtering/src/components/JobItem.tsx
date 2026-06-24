const JobItem = ({ item }) => {
  console.log(item);

  return (
    <div className='bg-white rounded-xl border-l-4 border-primary'>
      <div className='flex flex-row justify-between items-center gap-32 py-4 px-8 mb-4'>
        <div className='flex flex-row gap-8'>
          <img src={item.logo} alt='' className='h-16 w-16 object-cover' />

          <div className='flex flex-col gap-1'>
            <p className='flex flex-row gap-4'>
              <span>{item.company}</span>
              {item.new && (
                <span className='uppercase bg-primary text-white rounded-xl flex items-center justify-center px-2 text-xs'>
                  New!
                </span>
              )}
              {item.featured && (
                <span className='uppercase bg-black text-white rounded-xl px-2 py-1 flex items-center justify-center  text-xs'>
                  features
                </span>
              )}
            </p>
            <p>{item.position}</p>
            <p className='space-x-4'>
              <span>{item.postedAt}</span>
              <span>{item.contract}</span>
              <span>{item.location}</span>
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          {item.languages.map((lan) => (
            <p className='text-primary bg-background p-1 rounded-md'>{lan}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
