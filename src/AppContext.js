import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [isAuth,setIsAuth] = useState(false);
    const toggleAuth = ()=>{
        setIsAuth(!isAuth);
    }
    return <AppContext.Provider value={{isAuth,toggleAuth}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider