<<<<<<< HEAD
import './App.css';
import Nav from './components/Nav';
import Home from './routes/Home';
import Write from './routes/Write';
import List from './routes/List';
import Trash from './routes/Trash';
import Login from './routes/Login';
import Signup from './routes/Sign';
import Modify from './routes/Modify';
import OAuth2RedirectHandler from './routes/OAuth2RedirectHandeler';
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Introduce from './routes/Introduce';
=======
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Write from "./components/Write";
import List from "./components/List";
import Trash from "./components/Trash";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Sign";
import Modify from "./components/Modify";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandeler";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Introduce from "./components/Introduce";
import WriteUpdate from "./components/WriteUpdate";
>>>>>>> 79815462ce8030b6d4a0231ddceae70c6603fcb4

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
<<<<<<< HEAD
        <Route path="/365" exact={true} component={Home}/>
        <Route path="/write" component={Write}/>
        <Route path="/list" component={List}/>
        <Route path="/trash" component={Trash}/>
        <Route path="/login" component={Login}/>
        <Route path="/introduce" component={Introduce} />
        <Route path="/365/login/oauth_kakao" component={OAuth2RedirectHandler}></Route>
=======
        <Route path="/365" exact={true} component={Home} />
        <Route exact path="/write" component={Write} />
        <Route path="/write/:id" component={WriteUpdate} />
        <Route path="/list" component={List} />
        <Route path="/trash" component={Trash} />
        <Route path="/login" component={Login} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/365/login/oauth_kakao"
          component={OAuth2RedirectHandler}
        ></Route>
>>>>>>> 79815462ce8030b6d4a0231ddceae70c6603fcb4
      </BrowserRouter>
    </div>
  );
}

export default App;
