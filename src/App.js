import './App.css';
import Dropdown from './components/Dropdown';
import LeftBar from './components/LeftBar';
import MiddleBar from './components/MiddleBar';
import RightBar from './components/RightBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
    <Dropdown year={'Year Ending'} dropName={'VASY'} />
    <TopBar />
    <LeftBar />
    <MiddleBar />
    <RightBar />
    </>
  );
}

export default App;
