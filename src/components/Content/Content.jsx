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

    const sectionRefs = {
    portfolio: portfolioRef,
    downloads: downloadsRef,
    store: storeRef,
    about: aboutRef,
    };

    const {activePanel} = useContext(ActivePanelContext);

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
        <div className="Content__welcome">
            <p> Welcome to nanos garage</p>
        </div>
        <div className='Content__page' ref={portfolioRef}><Portfolio /></div>
        <div className='Content__page' ref={downloadsRef}><Downloads /></div>
        <div className='Content__page' ref={storeRef}><Store /></div>
        <div className='Content__page' ref={aboutRef}><About /></div>
      </div>
    );
}

export default Content;