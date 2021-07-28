
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer";
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
