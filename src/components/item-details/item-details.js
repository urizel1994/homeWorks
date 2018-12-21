import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './item-details.css';

const Record = ({item,field,label}) => {
    return(
        <li>
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Record
};
    
export default class ItemDetails extends React.Component {
    constructor(){
        super();
        this.swapiService = new SwapiService();
        this.state = {
            item: null,
            image: null,
            loading: true,
            error: false
        }
        this.onItemLoaded = (item) => {
            const {getImageUrl} = this.props;
            this.setState({item, loading:false,image: getImageUrl(item)});
        }
        this.onError = (err) => {
            this.setState({error: true,loading: false});
        }
        this.updateItem = () => {
            const {itemId,getData} = this.props;

            if(!itemId){
                return;
            }
            getData(itemId)
                .then(this.onItemLoaded)
                .catch(this.onError);
        }
        this.throwErr = () => {
            this.foo.bar = 0;
        }
    }

    componentDidMount(){
        this.updateItem();
    }
    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }
    render(){
        const { item, error, loading, image} = this.state;
        const children = React.Children.map(this.props.children,(child) =>{ 
            return React.cloneElement(child,{item});
        })
        if(!this.state.item){
            return <h1>Select a person from a list</h1>
        }
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <ItemView item={item} image={image} stats={children}/> : null;
        return(
            <div className="item-details">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
};

const ItemView = ({item,image,stats}) => {
    const { name } = item;
    return (
        <React.Fragment>
            <img className="item-image" src={image} alt="item"/>
            <div className="item-description">
                <h3 className="item-name">{name}</h3>
                <ul className="item-list-group">
                    {stats}
                </ul>
            </div>
        </React.Fragment>
    );
};