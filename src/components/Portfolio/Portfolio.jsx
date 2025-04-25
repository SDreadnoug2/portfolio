
import './Portfolio.css';
import { projects} from "../../utils/videoProjects.js";
import { useEffect, useRef, useState } from 'react';
import Card from "../Card/Card.jsx";
import { AnimatePresence, motion, usePresenceData, wrap, useAnimation} from 'framer-motion';
function Portfolio () {


    const heightRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const total = projects.length;
    const height = 400;

    console.log(height);
    const clicked = {color: "black"};

    const controls = useAnimation();
    function handleClick(index) {
        setSelectedIndex(index);
};    
    
    return(
        <AnimatePresence>
            <motion.div className='Portfolio'>
                <motion.div className='Portfolio__info'></motion.div>
                <motion.div
                className='Portfolio__items'               >
                    {projects.map((project, index) => {
                        const isActive = selectedIndex === index;
                        return (
                            <motion.div 
                              className='Portfolio__box'
                              key={index}
                              onClick={() => handleClick(index)}
                              animate={isActive ? "clicked" : "rest"}
                              initial="rest"
                              variants={{
                                rest: {
                                  height: `${height / total}px`,
                                  backgroundColor: "black",
                                  y: 0
                                },
                                clicked: {
                                  height: `${height / total + 30}px`,
                                  backgroundColor: "white",
                                }
                              }}
                              transition={{ duration: 1, type: "spring", stiffness: 80, damping: 5}}
                              style={{overflow: 'hidden', transformOrigin: 'top' }}
                            >
                              <motion.h2
                                variants={{
                                  rest: { y: -20, color: "white" },
                                  clicked: { y: -25, color: "black" }
                                }}
                                animate={isActive ? "clicked" : "rest"}
                                transition={{ type: "spring", stiffness: 500, damping: 10 }}
                              >
                                {project.title.toUpperCase()}
                              </motion.h2>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <motion.div className='Portfolio__content'>
                    
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )

}
export default Portfolio;
    /*
    const [activeIndex, setActiveIndex] = useState(3);
    const cardWidth = 700;
    const total = projects.length;
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    }

    return (
        <AnimatePresence>
        <div className="Portolio">
            <div className="Portfolio__wrapper">
            <div className="Portfolio__carousel">
                <div className="Portfolio__carousel-inner">
                {projects.map((project, index) => {
                    let relativeX = index - activeIndex;
                    const opacity = () => {
                        if(activeIndex !== 0 || activeIndex !== total){
                            return Math.max(0, 1 - Math.abs(relativeX) * 0.5);
                        }
                        else {
                            return 1;
                        }
                    }
                    if(relativeX < -total / 2) relativeX += total;
                    if(relativeX > total / 2) relativeX -= total;
                    return (
                    <motion.div
                    key={index}
                    animate={{
                        x: relativeX * cardWidth,
                        y: activeIndex === index ? -10 : 0,
                        opacity: activeIndex === index ? 1 : opacity(),
                        scale: activeIndex === index ? 1.3 : 0.8,
                        zIndex: activeIndex === index ? 1: 0
                    }}
                    transition={{type: "spring", stiffness: 120, damping: 30}}
                    className='Portfolio__card'
                    style= {{width: `${cardWidth}px`}}
                    ><Card {...project}></Card></motion.div>
                    )

                })}
            </div>
            </div>
            </div>
            <div className="Portfolio__button_container">
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div>
        </div>
        </AnimatePresence>
    )

}





I think it would probably work at this point. You need to get the CSS looking right to 
even try it though, so do that now. THEN worry about animations.

FRAMER
- To get this to work, you have to apply an animate presence to the container.
- This allows each component that's rendered to have an initial, animate, and exit animation.
- You need to find the direction that is clicked on the button, and then tell the non-active cards
to move in the right direction 
- You just need to figure out how to have them move, rather than disappear.


*/