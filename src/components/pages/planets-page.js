import React from 'react';
import { PlanetList,PlanetDetails, } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedItem: null
        };
        this.onItemSelected = (selectedItem) => {
            this.setState({selectedItem});
        }
    }
    render(){
        const {selectedItem} = this.state;
        const planetList =  <PlanetList onItemSelected={this.onItemSelected}>
                                {(item) => (item.name)}
                            </PlanetList>
        return(
            <Row left={planetList} right={<PlanetDetails itemId={selectedItem}/>} />
        )
    }
}