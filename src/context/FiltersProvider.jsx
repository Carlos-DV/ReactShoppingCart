import { createContext, useState } from "react";

const FiltersContext = createContext()

const FiltersProvider = ({children}) => {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })
    
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && 
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }
                
    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilters,
                filterProducts,
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}
export {
    FiltersProvider
}

export default FiltersContext