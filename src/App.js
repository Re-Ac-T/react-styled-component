import React from 'react';
import {HomePage} from 'pages';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SubPage from "./pages/SubPage";

const Nav = () => (
    <div>
        <ul>
            <li><Link to="/">메인페이지</Link></li>
            <li><Link to="/sub">서브페이지</Link></li>
        </ul>
    </div>
);

function App() {
    return (
        <div className="App">
            {/*<HomePage/>*/}
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/sub" component={SubPage}/>
                    <Nav/>
                </div>
            </Router>
        </div>
    );
}

export default App;
