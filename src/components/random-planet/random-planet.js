import React from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';
import './random-planet.css';
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {
    constructor(){
        super();

        this.swapiService = new SwapiService();

        this.state = {
            planet: {},
            loading: true,
            error: false
        }
        this.onPlanetLoaded = (planet) => {
            this.setState({planet, loading:false});
        }
        this.onError = (err) => {
            this.setState({error: true,loading: false});
        }

        this.updatePlanet = () => {
            const id = Math.floor((Math.random() * 25) + 3);
            this.swapiService.getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);
        }
    }
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        const {planet,loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
};
RandomPlanet.defaultProps = {
    updateInterval: 10000
}
RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}
const PlanetView = ({planet}) => {
    const {id,name,population,rotationPeriod,diameter } = planet;
    return (
        <React.Fragment>
            <img className="random-planet__img"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"
            />
            <div className="random-planet__description">
                <h1 className="random-planet__title">{ name }</h1>
                <ul className="random-planet__stats">
                    <li className="random-planet__stats-item">
                        <span className="term">Population: </span>
                        <span>{ population }</span>
                    </li>
                    <li className="random-planet__stats-item">
                        <span className="term">Rotation period: </span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="random-planet__stats-item">
                        <span className="term">Diameter: </span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};