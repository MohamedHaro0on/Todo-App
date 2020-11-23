import ClassNames from './App.module.scss';
import MainContent from './Todo/Todo.jsx';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <main className = {ClassNames.App}>
      <SideBar/>
      <MainContent/>
    </main>
  );
}

export default App;