import useFilters from "../hooks/useFilters"
import { Filters } from "./Filters"

const Header = () => {

    const { changeFilters } = useFilters()

    return (
    <header>
        <h1 className="text-center font-bold text-3xl mt-5">React Shop </h1>
        <Filters changeFilters={changeFilters}/>
    </header>
    )
}

export default Header