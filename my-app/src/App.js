
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';
import Footer from "./components/Footer";
import Images from "./components/Images";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Projects from "./components/Projects";



function App() {

  

  return (
    <Router>
    <div className="App">
     <NavigationBar/>

    <Route path = "/" exact render = {(props) => (
      <>
      <Images/>
      <Home/>
      <Footer/>
      </>
      )}></Route> 

     <Route path = "/projects"  render = {(props) => (
      <>
      <Projects/>
      </>
      )}></Route> 
      
    </div>
    </Router>
  );
}

export default App;
