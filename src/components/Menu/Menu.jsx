import './Menu.css';
import { motion} from 'framer-motion';
import { useContext } from 'react';
import ActivePanelContext from '../../contexts/ActivePanelContext';

function Menu() {

    const buttons = ["portfolio", "downloads", "store", "about"];
    const {setActivePanel, activePanel} = useContext(ActivePanelContext);

    return (
        <nav className="Menu">
            {buttons.map((button) => (
            <motion.button
                key={button}
                transition={{ type: "spring", stiffness: 2000, damping: 71, mass: 1.9}}
                animate= {{x: button === activePanel ? 40 : 0}} 
                onClick={() => setActivePanel(button)}
                className={button === activePanel ? 'Menu__button selected' : 'Menu__button'}>
                {button}
            </motion.button>                
            ))}
        </nav>
    )
}

export default Menu;