
import './Portfolio.css';
import { projects} from "../../utils/videoProjects.js";
import {useEffect, useState } from 'react';
import { AnimatePresence, motion} from 'framer-motion';
import BallScene from '../threeScene/threeScene.jsx';
import ProjectContent from '../ProjectContent/ProjectContent.jsx';
import { append } from 'three/tsl';

function Portfolio () {
    const [project, setProject] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(null);
    const total = projects.length;
    const height = 400;
    const history = [];
    const forwardHistory = [];
    function handleClick(index, project) {
        setSelectedIndex(index);
        setProject(project);   
};    


    return(
            <motion.div className='Portfolio'>
                <motion.div
                className='Portfolio__projects'>
                    {projects.map((project, index) => {
                        const isActive = selectedIndex === index;
                        return (
                            <motion.div 
                              className='Portfolio__nav'
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
                    <motion.div className="Portfolio__header">
                        <motion.h1 className='Portfolio__subtitle'>portfolio</motion.h1>
                        <BallScene/>
                    </motion.div>
                    <ProjectContent className="Portfolio__main" project={project}/>
                </motion.div>
            </motion.div>
    )

}
export default Portfolio;
