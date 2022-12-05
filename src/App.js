import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;