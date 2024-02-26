import Admin from "./components/admin/admin"
import './App.css';
import Routes from './components/routes/Routes';
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Routes />
      <Footer/>  
    </div>
  );
}

export default App;
