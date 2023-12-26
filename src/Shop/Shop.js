import './Shop.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
