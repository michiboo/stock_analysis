import './App.css';
import SearchAppBar from './components/SearchAppBar';
import Home from './pages/Home';
import Stock from './pages/Stock'
// import {withRouter} from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Router>
                <SearchAppBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/stock" component={Stock} />
                     <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
