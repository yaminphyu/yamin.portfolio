const { createContext, useState } = require("react");

const ActiveHashContentContext = createContext({
    activeHash: '',
    setActiveHash: () => {}
});

const ActiveHashContentProvider = ({ children }) => {
    const [activeHash, setActiveHash] = useState('');

    return (
        <ActiveHashContentContext.Provider value={{ activeHash, setActiveHash }}>
            {children}
        </ActiveHashContentContext.Provider>
    );
};

export { ActiveHashContentContext, ActiveHashContentProvider };