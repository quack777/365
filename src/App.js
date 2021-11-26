import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';

function App() {
  return (
    <div className="App">
      <Nav />
      <Write />
    </div>
  );
}

export default App;
