import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => {
    const { data,onItemSelected,children } = props;
    const items = data.map((item) => {
            const { id } = item;
    
            return (
                <li key={id} className="list-item"
                    onClick={() => {onItemSelected(id)}}>
                    {children(item)}
                </li>
            );
    });
    return(
        <ul className="item-list">
            {items}
        </ul>
    )
};

ItemList.defaultProps = {
    onItemSelected: () => {}
}
ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}
export default ItemList;