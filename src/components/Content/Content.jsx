import './Content.css';
import ActivePanelContext from '../../contexts/ActivePanelContext';
import { useContext } from 'react';

function Content() {

    const {activePanel} = useContext(ActivePanelContext);

    return(
        <div className="Content">
            <div className="Content__box">
                {
                    activePanel === "editing" && (
                        <p className='Content__text'>Over the past 6 years I’ve edited for content creators, comic book companies, businesses, and even my cat.<br></br>
                        Currently all my work is done in Davinci Resolve, having switched off of Premiere 2 years ago. I combine that alongside After Effects, and Blender for 3D work to deliver more advanced special effects.<br></br>
                        Head to the contact tab if you’re interested in having me put together your video.</p>
                    )
                }
            </div>
        </div>
    )
}

export default Content;