import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';
import List from './routes/List';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
    </div>
  );
}

export default App;
