import './Content.css';
import ActivePanelContext from '../../contexts/ActivePanelContext';
import { use, useContext, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion, useSpring } from 'framer-motion';
import Portfolio from '../Portfolio/Portfolio';

function Content() {
    const portfolioRef = useRef(null);
    const downloadsRef = useRef(null);
    const storeRef = useRef(null);
    const aboutRef = useRef(null);
    const welcomeRef = useRef(null);

    const sectionRefs = {
    portfolio: portfolioRef,
    downloads: downloadsRef,
    store: storeRef,
    about: aboutRef,
    welcome: welcomeRef,
    };

    const {activePanel, setActivePanel} = useContext(ActivePanelContext);

    useEffect(() => {
        const section = sectionRefs[activePanel.toLowerCase()];
        if (section?.current) {
            section.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [activePanel]);



    const Downloads = () => {
        return (
            <div className="downloads">
                <p> This is an example</p>              
                <img src='https://images.pexels.com/photos/26746959/pexels-photo-26746959/free-photo-of-close-up-of-a-person-holding-a-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>  
            </div>
        )
    }
    const Store = () => {
        return (
            <div className="store">
                 <p> This is an example</p>       
                 <img src='https://images.pexels.com/photos/26746959/pexels-photo-26746959/free-photo-of-close-up-of-a-person-holding-a-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>        
            </div>
        )
    }
    const About = () => {
        return (
            <div className="about">
                   <p> This is an example</p>        
                   <img src='https://images.pexels.com/photos/26746959/pexels-photo-26746959/free-photo-of-close-up-of-a-person-holding-a-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>     
            </div>
        )
    }   

    return (
        <div className="Content">
        <div className="Content__welcome" onMouseEnter={() => setActivePanel("welcome")} ref={welcomeRef}>
            <p> Welcome to nanos garage</p>
        </div>
        <div className='Content__page' ref={portfolioRef} onMouseEnter={()=> setActivePanel("portfolio")} ><Portfolio /></div>
        <div className='Content__page' ref={downloadsRef} onMouseEnter={()=> setActivePanel("downloads")}><Downloads /></div>
        <div className='Content__page' ref={storeRef} onMouseEnter={()=> setActivePanel("store")}><Store /></div>
        <div className='Content__page' ref={aboutRef} onMouseEnter={()=> setActivePanel("about")}><About /></div>
      </div>
    );
}

export default Content;