import { createContext, useState } from "react";

const MobileToggleContext = createContext({
    toggle: false,
    setToggle: () => {},
});

const MobileToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <MobileToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </MobileToggleContext.Provider>
    );
};

export { MobileToggleContext, MobileToggleProvider }
