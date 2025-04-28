import React, {useContext} from "react";

const ActivePanelContext = React.createContext({
    activePanel: "welcome",
    setActivePanel: () => {},
});

export default ActivePanelContext;