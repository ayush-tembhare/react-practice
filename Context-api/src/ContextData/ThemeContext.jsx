import { createContext } from 'react';

export const ThemeDataContext = createContext('light');

const ThemeContext = (props) => {
   return (
      <ThemeDataContext.Provider value="dark">
         {props.children}
      </ThemeDataContext.Provider>
   )
}

export default ThemeContext;

