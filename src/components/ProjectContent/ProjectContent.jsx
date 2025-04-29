import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import "./ProjectContent.css";
import Marquee from 'react-fast-marquee';
import arrow from "../../assets/arrowout.svg";
const ProjectContent = ({project}) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
      setInputValue(e.target.value);
    }
    return(
      <>
        <motion.div className="ProjectContent">
        <div className="ProjectContent__media">
         <motion.img key={project.src} className='ProjectContent__image' src={project.src}/>
        </div>
          </motion.div>
          <div className="ProjectContent__info">
            <div className="ProjectContent__info_side">
              <p className='ProjectContent__subtext'>{project.company}</p>
              <p className='ProjectContent__subtext'>Type: {project.type}</p>
            </div>
              <button className='ProjectContent__button'>
                <p>View</p>
                <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="ProjectContent__arrow"
              >
                <path d="M246.67-244 200-290.67l402.67-402.66H236V-760h480v480h-66.67v-366.67L246.67-244Z"/>
              </motion.svg>
                </button>
          </div>
        </>
    )
  }

export default ProjectContent;
