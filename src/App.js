import { useState } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Samples from './components/samples/samples';
import Contact from './components/contact/contact'
import Work from './components/work/work'
import Menu from './components/Menu/menu';
function App() {
  const [state,setstate]=useState(false);
  return (
    <div className="App">
      <Topbar state={state} setstate={setstate}/>
      <Menu state={state}/>
      <div className="sections">
      <Intro/>
      <Work/>
      <Samples/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
