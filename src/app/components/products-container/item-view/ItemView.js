import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { editItem, deleteItem } from '../../../redux/actions';
import Modal from '../../../utilities/Modal';

class ItemView extends Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {item} = this.props;

        return(
            <div className="d-flex justify-content-around wrap align-items-center">
                <div className="mx-2" style={{width:"100px"}}>
                    <span>{item.name}</span>
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

export default connect(null, { editItem, deleteItem })(ItemView);
