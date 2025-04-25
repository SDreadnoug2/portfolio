
import './Portfolio.css';
import { projects} from "../../utils/videoProjects.js";
import { useEffect, useRef, useState } from 'react';
import Card from "../Card/Card.jsx";
import { AnimatePresence, motion, usePresenceData, wrap, useAnimation} from 'framer-motion';
import bg from "../../assets/Y2KShape49.svg";
function Portfolio () {


    const heightRef = useRef(null);
    const [project, setProject] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(null);
    const total = projects.length;
    const height = 400;

    console.log(height);
    const clicked = {color: "black"};

    const controls = useAnimation();
    function handleClick(index, project) {
        setSelectedIndex(index);
        setProject(project);   
};    
    
    return(
        <AnimatePresence>
            <motion.div className='Portfolio'>
                <motion.div
                className='Portfolio__items'>
                    {projects.map((project, index) => {
                        const isActive = selectedIndex === index;
                        return (
                            <motion.div 
                              className='Portfolio__box'
                              key={index}
                              onClick={() => handleClick(index, {...project})}
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
                              className='Portfolio__text'
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
                    <img className="Portfolio__image" src={project.src}></img>
                    <img className='Portfolio__back' src={bg}></img>
                    <div className="Portfolio__text-wrapper">
                        <a className="Portfolio__link"href={project.link} target='blank'>{project.title}</a>
                    </div>                  

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )

}
export default Portfolio;
