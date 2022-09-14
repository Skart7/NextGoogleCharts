import React from 'react'

interface ProviderProps {
    children: React.ReactNode;
}

interface ContextProps {
    isValue: string;
    onChangeValue: (newValue:string) => void;
}

const ContextStore:ContextProps = {
    isValue: "1",
    onChangeValue: (newValue) => {}
}

const TabContext = React.createContext<ContextProps>(ContextStore)

export const useTabContext = () => React.useContext(TabContext)

export const TabProvider:React.FC<ProviderProps> = ({children}) => {

    const [isValue, setValue] = React.useState(ContextStore.isValue)

    const onChangeValue = (newValue:string) => setValue(newValue) 

    const store = {
        isValue, onChangeValue
    }

    return <TabContext.Provider value={store}>{children}</TabContext.Provider>

}
