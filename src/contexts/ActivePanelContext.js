import React, {useContext} from "react";

const ActivePanelContext = React.createContext({
    activePanel: null,
    setActivePanel: () => {},
});

export default ActivePanelContext;