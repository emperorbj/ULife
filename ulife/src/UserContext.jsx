import { createContext,useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({children})=> {
    const [height,setHeight] = useState('')
    const [weight,setWeight] = useState('')

    return (
        <UserContext.Provider value={{height,setHeight,weight,setWeight}}>
            {children}
        </UserContext.Provider>
    )
}
