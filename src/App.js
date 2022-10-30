
import './App.css';
import Content from './components/Content/Content';
import Employees from './components/Data/Employees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      
    <Header />
    <Employees/>
    <Content />
    <Footer />
      
    </div>
  );
}

export default App;
