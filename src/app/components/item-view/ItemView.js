import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { editItem, deleteItem } from '../../redux/actions';

class ItemView extends Component {

    render() {
        const item = this.props.items.find(i => i.id === this.props.chosenItemId);

        if (item === undefined) return null;

        return(
            <div className="d-flex flex-column overflow-auto" style={{flexBasis:"80vh"}}>
                <Link to="/product" style={{textDecoration:"none", color:"#2c3033"}}>Back</Link>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        chosenItemId: state.common.chosenItemId,
        items: state.products.items
    }
}

export default connect(mapStateToProps, { editItem, deleteItem })(ItemView);
