import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Panel1 from './components/Panel1/Panel1';
import Panel2 from './components/Panel2/Panel2';
import Panel3 from './components/Panel3/Panel3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
