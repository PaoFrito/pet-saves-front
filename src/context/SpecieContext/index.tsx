import React, { createContext, useState } from "react";

export type SpecieContextProps = {
    specieState: string;
    setSpecieState: React.Dispatch<React.SetStateAction<string>>;
};

type specieContextProviderProps = {
    children: React.ReactNode;
};

const DEFAULT_VALUES = {
    specieState: '',
    setSpecieState: () => {}
};

const SpecieContext = createContext<SpecieContextProps>(DEFAULT_VALUES);

const SpecieContextProvider = ({ children }: specieContextProviderProps) => {
    
    const [specieState, setSpecieState] = useState<string>('');
    
    return (
        <SpecieContext.Provider
            value={{
                specieState,
                setSpecieState
            }}
        >
            {children}
        </SpecieContext.Provider>
    );
};

export default SpecieContext;
export { SpecieContextProvider };