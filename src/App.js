import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Reccomandation from './Reccomandation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./SearchPage"
function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
       <Route path="/search/:searchterm">
       <div className="app_page">
       <Sidebar/>
       <SearchPage/>
       </div>
       </Route>
       <Route path="/">
       <div className="app_page">
       <Sidebar/>
       <Reccomandation/>
       </div>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
