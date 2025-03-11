import './Side.css';
import titleStar from '../../assets/titlestar.svg';
import React, { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
function Side(){

        return (

                <div className="Side">
                    <div className="Side__title_wrapper">
                        <AnimatedLetters title={"nanos"}/>
                        <img src={titleStar} alt="Nanosgarage star accent" className="Side__star" />
                        <AnimatedLetters title={"garage"}/>    
                    </div>
                    <h3 className="Side__about">about</h3>
                    <p className="Side__text">“nanosgarage” is a project run by me, Nicholas! I’ve designed it to be an output for all of my creative projects, from video editing, to web and software development. All of my future projects will also be hosted here, so stay tuned!</p>
                    <p className="Side__text">If you’d like to work together, head over to the contact tab and I’ll be in touch.</p>
                </div>
 
        )

}

export default Side;

