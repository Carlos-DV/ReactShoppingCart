import { useContext } from "react";
import FiltersContext from "../context/FiltersProvider";


const useFilters = () => {
    return useContext(FiltersContext)
}

export default useFilters