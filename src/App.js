import logo from './logo.svg';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouseMove from './components/ClassMouseMove';
import HookMoseMove from './components/HookMoseMove';

function App() {
  return (
    <div className="App">
      <ClassCounterOne/><br/>
      <HookCounterOne/><br/>
      <ClassMouseMove/><br/>
      <HookMoseMove/>
    </div>
  );
}

export default App;
