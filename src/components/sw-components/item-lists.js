import ItemList from '../item-list';
import {withData,withSwapiService} from '../hoc-helpers';

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};
const PersonList = withSwapiService(mapPersonMethodsToProps)(withData(ItemList));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(ItemList));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(ItemList));

export {
    PersonList,
    StarshipList,
    PlanetList
};