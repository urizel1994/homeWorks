import React from 'react';
import { StarshipList } from '../sw-components';
import {withRouter} from 'react-router-dom';
const StarshipsPage = ({history}) => {
    return(
        <StarshipList onItemSelected={(id) => history.push(id)}>
            {(item) => (item.name)}
        </StarshipList>
    )
}

export default withRouter(StarshipsPage);