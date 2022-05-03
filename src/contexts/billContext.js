import { createContext, useState, useEffect } from 'react';


export const BillContext = createContext({
    currentBills: null,
    setCurrentBills: ()=> {}
});

export const BillProvider = ({ children }) => {
    const [currentBills, setCurrentBills] = useState([])
    const value = { currentBills, setCurrentBills}

	return <BillContext.Provider value={value}>{children}</BillContext.Provider>;
};
