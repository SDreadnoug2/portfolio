import './Menu.css';
import { motion} from 'framer-motion';
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
                initial={{ boxShadow: "0px 15px 0px rgba(0,0,0,1)" }} 
                whileHover={{ boxShadow: "0px 12px 0px rgba(0,0,0,1)", y: 5 }} 
                whileTap={{ y: 8, boxShadow: "0px 10px 0px, rgb(0,0,0,1)" ,backgroundColor: '#002bff', color: "#ffffff"}}
                animate={{y: activePanel === button ? 6 : 0, backgroundColor: activePanel === button ? "#94C8F2" : "#ffffff", color: activePanel === button ? "#ffffff" : "#000000", boxShadow: activePanel === button ? "0px 8px 0px rgba(0,0,0,1)" : "0px 15px 0px rgba(0,0,0,1)" }}
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