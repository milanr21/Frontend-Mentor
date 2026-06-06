import CardGrid from './components/CardGrid';
import PageHeader from './components/PageHeader';

const App = () => {
  return (
    <div className='flex flex-col  items-center justify-center my-auto w-full mx-auto '>
      <PageHeader
        title='Reliable, efficient delivery'
        subtitle='Powered by Technology'
        description='Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful'
      />
      <CardGrid />
    </div>
  );
};

export default App;
