import React, { useId } from 'react'
import useFilters from '../hooks/useFilters'

export const Filters = () => {

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const { filters, setFilters } = useFilters()
    const { minPrice, category } = filters

    const handleChangeMinPrice = e => {
        setFilters(filters => ({
            ...filters,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = e => {
        setFilters(filters => ({
            ...filters,
            category: e.target.value
        }))
    }

    return (
        <section className='flex items-center justify-between container mx-auto my-10 font-bold'>
            <div className='flex gap-5'>
                <label htmlFor="price">Minimo</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={minPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div className='flex gap-5'>
                <label htmlFor="category">Category</label>
                <select
                    id={categoryFilterId}
                    onChange={handleChangeCategory}
                >
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}
