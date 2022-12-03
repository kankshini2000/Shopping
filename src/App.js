
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2'
import Sidebar3 from './components/Sidebar3'
import Navbar from './components/Navbar'
import Tool from './components/Tool'




function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Sidebar2/>
      <Sidebar3/>
      <Navbar/>
      <Tool></Tool>
    </div>
  );
}

export default App;
