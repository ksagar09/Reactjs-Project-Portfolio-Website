// https://www.youtube.com/watch?v=C7DUBc1_xMA&list=PLQKg8mIgoxKop9l92Zjd-Pmxkf-HQmclQ&index=2


import React from 'react';
import Portfolio_navbar from './Portfolio_navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Portfolio_sidebar";
import About from '../PortfolioComponents/About/Portfolio_about';
import Resume from '../PortfolioComponents/Resume/Portfolio_resume';
// import Resume from './Portfolio_resumeTmp';
import Projects from '../PortfolioComponents/Projects/Portfolio_projects';

const App = () => {
    return (
        <Router>
            <>
                <div className='app'>
                    <div className='container app__container'>
                        <div className='row app__row'>
                            <div className='col-lg-3'>
                                {/* sidebar */}
                                <Sidebar />
                            </div>
                            <div className='col-lg-9 app__main-content'>
                                {/* navbar */}
                                <Portfolio_navbar />

                                <Switch>
                                    <Route exact path='/'>
                                        <About />
                                    </Route>
                                    <Route path='/Resume'>
                                        <Resume />
                                    </Route>
                                    <Route path='/Projects'>
                                        <Projects />
                                    </Route>

                                    <Route>
                                        <Redirect to='/' />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Router>
    )
}
export default App;
