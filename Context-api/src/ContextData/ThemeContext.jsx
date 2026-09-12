import { createContext } from 'react';

export const ThemeContext = createContext('light'); 

<ThemeContext.Provider value='{ThemeContext}'>
    <App></App>
</ThemeContext.Provider>