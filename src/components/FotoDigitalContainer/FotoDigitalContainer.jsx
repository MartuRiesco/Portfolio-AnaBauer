// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import getCategories from './getCategories';
import FotoDigitalList from '../FotoDigitalList/FotoDigitalList';

function FotoDigitalContainer() {

    const [categories, setCategories] = useState([]);
    
    useEffect(() =>{
        getCategories()
            .then((res) => {
                setCategories(res);
            })
    }, [])

    return (
        <div>
            <FotoDigitalList categories = {categories}/>
        </div>
    )
}

export default FotoDigitalContainer