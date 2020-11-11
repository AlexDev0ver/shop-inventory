import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { editItem, deleteItem, chooseItemId } from '../../../redux/actions';
import Modal from '../../../utilities/Modal';

class ListItem extends Component {

    chooseItem(item) {
        this.props.chooseItemId(item.id);
    }

    render() {
        const { item } = this.props;

        return(
            <div className="d-flex justify-content-around wrap align-items-center">
                <div className="mx-2" style={{width:"100px", cursor:"pointer"}} onClick={() => this.chooseItem(item)}>
                    <Link to="/item" style={{textDecoration:"none", color:"#2c3033"}}>
                        <span>{item.name}</span>
                    </Link>
                </div>
                <div className="mx-2" style={{width:"70px"}}>
                    <span style={{wordWrap:"break-word"}}>{item.quantity}</span>
                </div>
                <Modal setItem={this.props.editItem} editOrCreate="edit" item={item}/>
                <button style={{
                            border:"none",
                            backgroundColor:"rgba(0,0,0,0)",
                            outline:"none",
                            color:"red"}}
                        className="mx-2" onClick={() => this.props.deleteItem(item)}>

                            <FontAwesomeIcon size="lg" icon = {faTimesCircle}/>

                </button>
            </div>
        )
    }


}

export default connect(null, { editItem, deleteItem, chooseItemId })(ListItem);
