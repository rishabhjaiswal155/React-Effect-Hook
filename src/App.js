import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouseMove from './components/ClassMouseMove';
import HookMouseMove from './components/HookMouseMove';
import MouseContainer from './components/MouseContainer';


function App() {
  return (
    <div className="App">
      <ClassCounterOne/><br/>
      <HookCounterOne/><br/>
      <ClassMouseMove/><br/>
      {/* <HookMouseMove/> */}
      <MouseContainer/>
    </div>
  );
}

export default App;
