import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Preloader, Oval } from 'react-preloader-icon';
import { getItems, createItem } from '../../redux/actions';

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { itemsFakeFetching } = this.props.items;

        return(
            <main className="d-flex flex-column overflow-auto" style={{flexBasis:"80vh"}}>
                {this.props.items.itemsFakeFetching &&
                    <div className="d-flex justify-content-center my-2">
                        <Preloader use={Oval}
                            size={60}
                            strokeWidth={6}
                            strokeColor="#262626"
                            duration={1000}
                        />
                    </div>
                }

                {!this.props.items.itemsFakeFetching &&
                    <div>
                        <ul className = "d-flex flex-column align-items-center p-0 m-0" style={{listStyle:"none"}}>
                            <li>some goods</li>
                            <li>some goods</li>
                            <li>some goods</li>
                        </ul>
                    </div>
                }
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { getItems, createItem })(ProductsContainer);
