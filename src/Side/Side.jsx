import './Side.css';
import titleStar from '../assets/titlestar.svg';
import { useState } from 'react';
import {motion} from "framer-motion";
function Side(){

    const [locked, setLocked] = useState(true);

    const titleStagger = {
        initial: {},
        animate: {transition: {
            delayChildren: 0,
            staggerChildren: 0.08,
        },},
    };

    const letterAnimation = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95], 
                duration: 1,
            },
        },
    }
    const AnimatedLetters = ({title}) => {
        return (
            <motion.span
            className='Side__title'
            variants={titleStagger}
            initial='initial'
            animate='animate'>
                {[...title].map((letter, index) => (
                    <motion.span
                    key={index}
                    className='Side__letter'
                    variants={letterAnimation}
                    >    
                    {letter}
                    </motion.span>
                ))}
            </motion.span>
        )

    }
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

