import './Menu.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ActivePanelContext from '../../contexts/ActivePanelContext';
function Menu() {

    const buttons = ["editing", "software", "contact", "about"];
    const {setActivePanel, activePanel} = useContext(ActivePanelContext);

    return (
        <nav className="Menu">
            {buttons.map((button) => (
            <motion.button
                key={button}
                initial={{ boxShadow: "7px 8px 0px rgba(0,0,0,1)" }} 
                whileHover={{ boxShadow: "7px 15px 0px rgba(0,0,0,1)", y: -10 }} 
                whileTap={{scale: 0.9, backgroundColor: '#000000', duration: 0}}
                animate={{backgroundColor: activePanel === button ? "#94C8F2" : "white", color: activePanel === button ? "white" : "black"}}
                transition={{ duration: 0.1 }} 
                onClick={() => setActivePanel(button)}
                className={'Menu__button'}>
                {button}
            </motion.button>                
            ))}
        </nav>
    )
}

export default Menu;