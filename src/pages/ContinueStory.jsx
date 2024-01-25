import React from "react";
import "./../css/continue_story.css"
import img1 from "../assets/images/img1.jpeg"
import back from "../assets/images/next_b.png";
import {useNavigate} from 'react-router-dom';
const ContinueStory = () =>{
    const navigate = useNavigate();
return(
    <div className="main-container">
        <button className="back-button">  {/* Button to go back to profile page */}
                    <img className="next-cont" src={back} alt="" onClick={()=>navigate('/profile')}/>
                </button>

            <div className='img-container'>
                <img className="img1-cont" src={img1} alt=""/>
            </div>
            <div className="buttons-cont">
                <button className="restartBtn"><h2>Restart</h2></button>
                <button className="continueBtn"><h2>Continue</h2></button>
            </div>

            <div className="txt-container">
                <h1>Vampire</h1>
                <br></br>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                </h3>
            </div>
    </div>
)
}
export default ContinueStory;
