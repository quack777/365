import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';
import List from './routes/List';
import Trash from './routes/Trash';
import Login from './routes/Login';
import Signup from './routes/Sign';
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/write" component={Write}/>
        <Route path="/list" component={List}/>
        <Route path="/trash" component={Trash}/>
        <Route path="/login" component={Login}/>
      </HashRouter>
    </div>
  );
}

export default App;
