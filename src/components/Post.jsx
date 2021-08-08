import React, { useState } from 'react';
import Menu from './Menu';
import post1Img from '../img/post-1.png';
import post2Img from '../img/post-2.png';
import post3Img from '../img/post-3.png';
import post4Img from '../img/post-4.png';
import post5Img from '../img/post-5.png';
import post6Img from '../img/post-6.png';


export const Post = () => {
    return (
        <div className="post">
            <Menu></Menu>
            <div className="postContainer">
                <div className="post-row">
                    <div className="postWrapper">
                        <img src={post6Img} alt="" />
                    </div>
                    <div className="postWrapper">
                        <img src={post5Img} alt="" />
                    </div>
                    <div className="postWrapper">
                        <img src={post4Img} alt="" />
                    </div>
                </div>
                <div className="post-row">
                    <div className="postWrapper">
                        <img src={post3Img} alt="" />
                    </div>
                    <div className="postWrapper">
                        <img src={post2Img} alt="" />
                    </div>
                    <div className="postWrapper">
                        <img src={post1Img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;