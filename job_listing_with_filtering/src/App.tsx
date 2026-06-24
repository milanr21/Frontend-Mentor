import './App.css';
import Footer from './components/Footer';
import JobList from './components/JobList';

function App() {
  return (
    <div className='relative min-h-screen  flex flex-col justify-between'>
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
