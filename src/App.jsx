import './App.css';
import Login from './components/login';
import Menu from './components/menu';
import List from './components/List';

function App() {
  return (
<div>
  <Menu/>
  <Login/>
  <List teste1="Daniel"/>
</div>
  );
}

export default App;
