import { useState, useContext, useEffect } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
function Header({setActivePanel}){

    const buttonColor = {
        initial: {
            backgroundColor: "rgba(39,138,218,1)",
        },
        hover: {
            backgroundColor: "rgba(255,255,255,1)",
        },
    }

    const largeText = {
        initial: {
            opacity: 0,
            y: -20,
        },
        hover: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <motion.section className="Header">
            {["editing", "software", "contact", "store"].map((panel) => {
                return (
                <motion.div
                key={panel}
                className='Header__box'
                variants={buttonColor}
                whileHover="hover"
                initial="initial"
                onClick={() => setActivePanel(panel)}>
                    <motion.h5 className='Header__title'>{panel}</motion.h5>
                    <motion.h1 className='Header__massive' variants={largeText}>{panel.toUpperCase()}</motion.h1>
                </motion.div>)
            })}
        </motion.section>

    )
}

export default Header;

/*
On hovering the button:
The div should turn white (color)
- The small text should fade out (opacity)
- The large text should fade in (opacity)

div.on hover
    animate button box white
    fade out small text
    fade in large text
    */