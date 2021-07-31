import React,{ useState } from 'react';
import highlightsImgUrl from '../img/highlights.jpg';

export const Info = (props) => {

    const [follow , setFollow] = useState(false);
    const [dotclick, setdotclick] = useState(false);

    const message = () =>{
        return(
        <div className="box">Message</div>
    )}

    return (
        <div className="info">
            <div className="wrapper">
                <div className="pp-div">
                    <div className="border">
                        <div className="white">
                            <img src={props.pfpimg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="details-div">
                    <div className="user-div">
                        <h2>thefrontendrish</h2>
                        {
                            follow ? <div className="box">Message</div>  : null
                        }
                        <div className={follow ? "box": "box follow"} onClick={() => setFollow(!follow)}>
                            { follow ? "Unfollow" : "Follow" }
                        </div>
                        <div className="box Arrow">
                            <span className="rotate">
                              <svg aria-label="Down Chevron Icon"  fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
                            </span>
                        </div>
                        <div className="dots">
                        <svg aria-label="Options"  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                        </div>
                    </div>
                    <div className="FollowDiv">
                        <p><span className="FollowBold">6</span>posts</p>
                        <p><span className="FollowBold">283</span>followers</p>
                        <p><span className="FollowBold">293</span>following</p>
                    </div>
                    <div className="Name">Rishabh Singh | Frontend Dev</div>
                    <div className="Position">Web Designer</div>
                    <div className="Bio">
                    Frontend developer 👨‍💻👨‍💻 <br/>Freelancer 👨‍💼✨ <br/>Engineering student 👨‍🎓📒 <br/>Tracing my journey and helping you to learn 🙂🤞 <br/>Watch my recent works ⬇️👇 <br/>
                    </div>
                    <a className="WebLink" href="https://thisisrishabh-stayfit.netlify.app/" target="_blank">thisisrishabh-stayfit.netlify.app</a>
                </div>

            </div>

            <div className="Highlights">
                 <div className="Highlight">
                   <div className="HighlightsImg">
                       <img src={highlightsImgUrl} alt=""/>
                     </div>
                     <p>Designs 😕</p>
                 </div>
            </div>
            {
                dotclick ? 'Hello' : null
            }
        </div>
    )
}

export default Info;