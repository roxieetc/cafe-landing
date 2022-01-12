import './App.css';
import Nav from './Components/Navbar'
import Heading from './Components/Heading'
import About from './Components/About'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import * as mdb from 'mdb-ui-kit';

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
