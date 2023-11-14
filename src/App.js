import './App.css';
import { Header } from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auction } from './components/Auction';
import { Discover } from './components/Discover';



function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Auction/>
    <Discover/>
    <Footer/>
    </>
  );
}

export default App;
