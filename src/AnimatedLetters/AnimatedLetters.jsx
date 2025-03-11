
import { motion } from 'framer-motion';
import './AnimatedLetters.css';

const titleStagger = {
    initial: {},
    animate: {transition: {
        delayChildren: 0,
        staggerChildren: 0.08,
    },},
};

const letterAnimation = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 1,
        },
    },
}
const AnimatedLetters = ({title}) => {
    return (
            <motion.span
            className='Side__title'
            variants={titleStagger}
            initial='initial'
            animate='animate'>
                {[...title].map((letter, index) => (
                    <motion.span
                    key={index}
                    className='Side__letter'
                    variants={letterAnimation}
                    >    
                    {letter}
                    </motion.span>
                ))}
            </motion.span>
    )

}

export default AnimatedLetters;