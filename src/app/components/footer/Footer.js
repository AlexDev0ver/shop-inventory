// @flow
import * as React from 'react';

export default function Footer (): React.Element<any> {
    return (
        <footer className="container-fluid py-3"
                style={{background: "linear-gradient(63deg, rgba(5,242,219,1) 0%, rgba(83,230,75,0.7483368347338936) 100%", flexBasis:"10vh"}}
        >
            <div className="d-flex align-items-center jutify-content-center flex-column">
                <a style={{textDecoration:"none", color: "#23272B"}} href="https://github.com/AlexDev0ver">
                    Made by Alex Dan
                </a>
                <a style={{textDecoration:"none", color: "#23272B"}} href="mailto:salaris9315@gmail.com">
                    salaris9315@gmail.com
                </a>
            </div>
        </footer>
    )
}
