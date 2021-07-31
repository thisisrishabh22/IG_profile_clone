import React from 'react';
import pfp from '../img/pfp.png';
import '../App.css';
import Info from './Info.js';
import Post from './Post'

export const Main = () => {
    return (
        <>
            < Info pfpimg = {pfp} />
            <Post/>
        </>
    )
}

export default Main;