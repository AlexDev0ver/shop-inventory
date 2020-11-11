import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from './components/header/Header';
import ProductsContainer from './components/products-container/ProductsContainer';
import ItemView from './components/item-view/ItemView';
import Footer from './components/footer/Footer';

export default function App () {
    return(
        <div className="d-flex flex-column" style={{maxHeight:"100vh"}}>
            <Header />
            <Switch>
                <Route path="/product">
                    <ProductsContainer />
                </Route>
                <Route path="/item">
                    <ItemView />
                </Route>
                <Redirect to="/product" />
            </Switch>
            <Footer />
        </div>
    )
}
