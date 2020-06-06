import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export default function (props) {
    const [ status, setStatus] = useState('noop');
    return(
        <AppContext.Provider value={{
            status, setStatus
        }}>
            {props.children}
        </AppContext.Provider>
    )
}