import Footer from './common/Footer';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className='min-h-screen bg-(--bg-main) flex flex-col p-4'>
      <main className='flex-1 flex items-center justify-center'>
        <Calculator />
      </main>

      <Footer />
    </div>
  );
};

export default App;
