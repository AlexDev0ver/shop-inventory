import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Preloader, Oval } from 'react-preloader-icon';
import { getItems, createItem } from './redux/actions';

import Header from './components/header/Header';
import ProductsContainer from './components/products-container/ProductsContainer';
import Footer from './components/footer/Footer';

export default function App () {
    return(
        <div className="d-flex flex-column" style={{maxHeight:"100vh"}}>
            <Header />
            <ProductsContainer />
            <Footer />
        </div>
    )
}
