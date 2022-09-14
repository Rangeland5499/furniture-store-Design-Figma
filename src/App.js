import './App.css';
import Header from './sections/header';
import Products from './sections/ourProduct';
import Services from './sections/Services';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services/>  
      <Products></Products>
      
    </div>
  );
}

export default App;
