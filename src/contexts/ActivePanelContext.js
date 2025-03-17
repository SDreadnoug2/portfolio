import React, {useContext} from "react";

const ActivePanelContext = React.createContext({
    activePanel: "",
    setActivePanel: () => {},
});

export default ActivePanelContext;