// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import { editItem, deleteItem } from '../../redux/actions';

import type { ItemType } from '../../types/ItemType';
import type { AppStateType } from '../../types/AppStateType';

type State = {
    description: string | null
}

type Props = {
    editItem: ItemType => void,
    deleteItem: ItemType => void,
    chosenItemId: string | null,
    items: Array<ItemType>
}

class ItemView extends React.Component<Props, State> {

    state = {
        description: null
    }

    editDescription() {
        const { items } = this.props;

        const item = items.find(i => i.id === this.props.chosenItemId);
        if (item === undefined) return;

        this.props.editItem({...item, description: this.state.description});
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
                                   onKeyPress={(e) => {if (e.key === "Enter") {this.editDescription(); e.target.blur()} }}
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

const mapStateToProps = (state: AppStateType) => {
    return {
        chosenItemId: state.common.chosenItemId,
        items: state.products.items
    }
}

export default (connect(mapStateToProps, { editItem, deleteItem })(ItemView): React.AbstractComponent<{}, State>);
