import './Content.css';
import ActivePanelContext from '../../contexts/ActivePanelContext';
import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion, useSpring } from 'framer-motion';

function Content() {

    const {activePanel} = useContext(ActivePanelContext);
    const variants = {
        hidden: {opacity: 0, y: 40},
        visible: {opacity: 1, y: 0, transition: {duration: 0.2, type: "spring", damping: "10", stiffness: "200"}},
        exit: {opacity: 1, y: -40, transition: {duration: 0.4}}
    }

    const editing = {text: `Over the past 6 years I’ve edited for content creators, comic book companies, businesses, and even my cat.
                            Currently all my work is done in Davinci Resolve, having switched off of Premiere 2 years ago. I combine that alongside After Effects, and Blender for 3D work to deliver more advanced special effects.
                            Head to the contact tab if you’re interested in having me put together your video.`,
                    name: 'editing'}
    const software = {text: `I’m a full-stack developer with experience building React applications and developing servers using Node.js. I offer web development services on commission, delivering tailored solutions for clients. Beyond web development, I’ve built several small-scale applications in Python and have a strong understanding of C++.`,
                    name: 'software'}
    const contact = {text: `I'm available at the following locations, feel free to reach out to me via any of these:`,
                    name: 'contact'}
    const about = {text: `"nanosgarage" is a project made by me, Nicholas M. It encompasses all the things I'd like to pursue creatively, and was created in order to better localize all my projects, as well as create a proper brand identity for my business!
                            Currently, I offer video editing and web development services, with plans to open a digital assets store for editors, streamers and creatives in the near future. Also, nano is yet to appear! She will likely be shown off early this summer, so I hope you stick around to see!`,
                    name: 'about'}

                     
    const textBox = (item) => {
        return (
            <motion.p
            key={item.name}
            className='Content__text'
            initial="hidden"
            animate="visible"
            
            exit="exit"
            variants={variants}>
                {item.text}
            </motion.p>
        )
    }

    const contentBox = (item) => {
        console.log(item);
        if(item === "editing"){
            return (
                <motion.div
                className='Content__main'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}>
                    <p>isdoif</p>
                </motion.div>
            )
        }
    }

    return(
        <div className="Content">
            <AnimatePresence mode="wait">
                <div className="Content__box">
                    {
                        activePanel === "editing" && (textBox(editing))
                    }
                    {
                        activePanel === "software" && (textBox(software))
                    }
                    {
                        activePanel === "contact" && (textBox(contact))
                    }
                                    {
                        activePanel === "about" && (textBox(about))
                    }
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Content;