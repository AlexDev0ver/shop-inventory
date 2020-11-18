// @flow
import * as React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

export default function Header (): React.Element<any> {
    return (
        <header className="d-flex p-3 align-items-center"
            style={{background: "linear-gradient(63deg, rgba(83,230,75,0.7483368347338936) 0%, rgba(5,242,219,1) 100%", flexBasis:"10vh"}}
        >
            <div className="d-flex align-items-center">
                <FontAwesomeIcon size="lg" style={{color:"#e77f0f"}} icon={ faBoxOpen }/>
                <h1 style={{fontSize: "20px", fontWeight:700, marginLeft:"10px"}}>
                    <Link to="/product" style={{textDecoration:"none", color:"#2c3033"}}>You're Shop Inventory</Link>
                </h1>
            </div>
        </header>
    )
}
