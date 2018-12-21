import React from 'react';
import { PersonList,PersonDetails, } from '../sw-components';
import {withRouter} from 'react-router-dom';
import Row from '../row';

const PeoplePage = ({history,match}) => {
    const personList =  <PersonList onItemSelected={(id) => history.push(id)}>
                            {(item) => (item.name)}
                        </PersonList>;
    const {id} = match.params;                    
    return(
            <Row left={personList} right={<PersonDetails itemId={id}/>} />
    );
}

export default withRouter(PeoplePage);