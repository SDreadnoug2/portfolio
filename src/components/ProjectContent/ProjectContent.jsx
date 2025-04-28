import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import "./ProjectContent.css";
const ProjectContent = ({project}) => {
    const [inputValue, setInputValue] = useState('');
    console.log(project);

    function handleChange(e) {
      setInputValue(e.target.value);
    }
    return(
      <>
        <motion.div className='PortfolioContent__Webbar'>
          <button className='PortfolioContent__button'>back</button>
          <button className='PortfolioContent__button'>forward</button>
          <button className='PortfolioContent__button'>?</button>
          <input placeholder='enter a URL...' type='text' value={inputValue} className='PortfolioContent__input' onChange={handleChange}/>
        </motion.div>
        <motion.div className="ProjectContent">
          <div className="ProjectContent__media">
            <motion.img key={project.src} className='ProjectContent__image' src={project.src}/>
          </div>
          </motion.div>
          <div className="ProjectContent__info">
            <p className='ProjectContent__subtext'>{project.company}</p>
            <p className='ProjectContent__subtext'>Type: {project.type}</p>
            <a target='blank' href={project.link}>{project.title}</a>
            <button type='button'>VIEW</button>
          </div>
        </>
    )
  }

export default ProjectContent;