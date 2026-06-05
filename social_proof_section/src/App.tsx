import './App.css';
import { Container } from './components/Container';
import ReviewsCarousel from './components/ReviewsCarousel';
import ReviewsSummaryHeader from './components/ReviewsSummaryHeader';

function App() {
  return (
    <Container>
      <ReviewsSummaryHeader />
      <ReviewsCarousel />
    </Container>
  );
}

export default App;
