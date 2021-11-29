import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';
import List from './routes/List';
import Trash from './routes/Trash';

function App() {
  return (
    <div className="App">
      <Nav />
      <Trash />
    </div>
  );
}

export default App;
