import React from 'react'
import useFilters from '../hooks/useFilters'

const Footer = () => {


    const {filters} = useFilters()

    return (
        <footer className='mt-5 bg-slate-400'>
            <div className='container mx-auto p-10'>
                {JSON.stringify(filters)}
            </div>
        </footer>
    )
}

export default Footer