import NavBar from './component/navbar';
import Hero from './component/heroSection';
import Content from './component/mainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Content/>
    </div>
  );
}

export default App;
