import { useContext } from "react";
import SpecieContext, { SpecieContextProps } from "../../context/SpecieContext";

const useSpecieContext = (): SpecieContextProps => {
    const specieContext = useContext<SpecieContextProps>(SpecieContext);
    return specieContext;
}

export default useSpecieContext;