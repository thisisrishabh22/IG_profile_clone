import React from 'react';
import pfp from '../img/pfp.png';
import '../App.css';
import Info from './Info.js';

export const Main = () => {
    return (
        <>
            < Info pfpimg = {pfp} />
        </>
    )
}

export default Main;