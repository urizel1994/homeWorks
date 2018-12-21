import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends React.Component {   
    constructor(){
        super();

        this.swapiService = new SwapiService();

        this.state = {
            showRandomPlanet: true,
            selectedPerson: null,
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({ hasError: true});
    };
    render(){              
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="star-db-app">
                            <Header />
                            <RandomPlanet />
                            <div className="container">
                                <Switch>
                                    <Route path="/" render={() => <h1 className="welcome-text">Welcome to StarDB!</h1>} exact/>
                                    <Route path="/people/:id?" component={PeoplePage}/>
                                    <Route path="/planets/" component={PlanetsPage}/>
                                    <Route path="/starships/" exact component={StarshipsPage}/>
                                    <Route path="/starships/:id" 
                                        render={({match}) => {
                                            const {id} = match.params;
                                            return <StarshipDetails itemId={id} />
                                    }} />
                                    <Redirect to="/" />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>    
            </ErrorBoundry>
        );
    }
};
