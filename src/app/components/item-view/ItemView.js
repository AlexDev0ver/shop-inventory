import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import { editItem, deleteItem } from '../../redux/actions';

class ItemView extends Component {

    state = {
        description: null
    }

    editDescription() {
        const item = this.props.items.find(i => i.id === this.props.chosenItemId);

        this.props.editItem({...item, description: this.state.description})
    }

    render() {
        const item = this.props.items.find(i => i.id === this.props.chosenItemId);

        if (item === undefined) return null;

        return(
            <div className={`${window.innerWidth>700 ? "border-left border-right" : ""} overflow-auto`} style={{flexBasis:"80vh", maxWidth:"50%", marginLeft:"25%"}}>
                <Link to="/product" style={{textDecoration:"none", color:"#2c3033"}}>
                    <button className={`d-flex align-items-center my-4 mx-4`}
                            style={{backgroundColor:"lightGreen", borderRadius:"50%", width:"26px", height:"26px", borderColor:"rgba(0,0,0,0)", outline:"none"}}>
                                &#171;
                    </button>
                </Link>

                <div className="d-flex flex-column justify-content-center px-5">
                    <div className="d-flex justify-content-center mb-5">
                        <h2>{item.name}</h2>
                    </div>
                    <div className="d-flex justify-content-between mb-5 border-bottom">
                        <span>Quantity:</span>
                        <span>{item.quantity}</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <TextField onChange={(e) => this.setState({description:e.target.value})}
                                   onKeyPress={(e) => {if (e.key === "Enter") e.target.blur() && this.editDescription() }}
                                   defaultValue={item.description === null ? "" : item.description}
                                   id="outlined-textarea"
                                   placeholder={item.description === null ? "Type description here..." : item.description}
                                   style={{minWidth:"40vw"}}
                                   />
                    </div>
                </div>
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
