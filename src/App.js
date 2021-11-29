import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';
import List from './routes/List';
import Trash from './routes/Trash';
import Login from './routes/Login';
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/write" exact={true} component={Write}/>
        <Route path="/list" exact={true} component={List}/>
        <Route path="/trash" exact={true} component={Trash}/>
        <Route path="/login" exact={true} component={Login}/>
      </HashRouter>
    </div>
  );
}

export default App;
