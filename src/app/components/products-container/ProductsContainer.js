import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Preloader, Oval } from 'react-preloader-icon';
import { getItems, createItem } from '../../redux/actions';

import Modal from '../../utilities/Modal';
import ListItem from './list-item/ListItem';

class ProductsContainer extends Component {

    state = {
        searching: false,
        searchValue: ""
    }

    componentDidMount() {
        this.props.getItems();
    }

    searchItems(value) {
        if (value === "") {
            this.setState({searching:false});
            return
        };

        this.setState({searching:true});
        this.setState({
            searchValue: value
        })
    }

    render() {
        const { itemsFakeFetching, items } = this.props.products;
        const { searching, searchValue } = this.state;

        return(
            <main className="d-flex flex-column overflow-auto" style={{flexBasis:"80vh"}}>
                {itemsFakeFetching &&
                    <div className="d-flex justify-content-center" style={{marginTop:"30vh"}}>
                        <Preloader use={Oval}
                            size={60}
                            strokeWidth={6}
                            strokeColor="green"
                            duration={3000}
                        />
                    </div>
                }

                {!itemsFakeFetching &&
                    <div className="d-flex flex-column my-5 col-12 offset-sm-2 col-sm-8">
                        <div className="d-flex justify-content-around py-2 align-items-center border-bottom">
                            <span>{items.length ? `You have ${items.length} items in inventory` : "Oh, here so empty... add something!"}</span>
                            <Modal setItem={this.props.createItem} editOrCreate="create"/>
                        </div>
                        <ul className = "d-flex flex-column my-4 p-4 overflow-auto" style={{listStyle:"none", maxHeight:"300px"}}>
                            {!searching && this.props.products.items.map(i =>
                                <li key={`product-list-item-${i.id}`} className="border-bottom pt-2 pl-3 text-end">
                                    <ListItem key={`product-item-${i.id}`} item={i}/>
                                </li>)}
                            {searching && this.props.products.items.filter(i => i.name.toLowerCase().includes(searchValue)).map(i =>
                                <li key={`product-list-item-${i.id}`} className="border-bottom pt-2 pl-3 text-end">
                                    <ListItem key={`product-item-${i.id}`} item={i}/>
                                </li>)}
                        </ul>
                        <input placeholder={items.length ? "Type to search here..." : "Nothing to search, sadly..."}
                               className="form-control flex-end align-self-center col-8 col-sm-4"
                               onChange={(e) => this.searchItems(e.target.value.toLowerCase())}
                        />
                    </div>
                }
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        item: state.common.chosenItem
    }
}

export default connect(mapStateToProps, { getItems, createItem })(ProductsContainer);
