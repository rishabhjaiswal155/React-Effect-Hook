import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouseMove from './components/ClassMouseMove';
import HookMouseMove from './components/HookMouseMove';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import FetchingIndidvidualPost from './components/FetchingIndidvidualPost';


function App() {
  return (
    <div className="App">
      {/* {/* <ClassCounterOne/><br/>
      <HookCounterOne/><br/>
      <ClassMouseMove/><br/>
      <HookMouseMove/> */}
      {/* <MouseContainer/><br/>
      <IntervalClassCounter/><br/>
      <IntervalHookCounter/><br/> */}
      {/* <DataFetching/> */}
      <FetchingIndidvidualPost/>
    </div>
  );
}

export default App;
