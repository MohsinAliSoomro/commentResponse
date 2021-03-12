import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
function ProductsReviews() {
    const [ products, setProducts ] = useState([]);
	useEffect(() => {
		axios
			.get('https://www.spatialardhi.com/estate/productreviews/?format=json')
			.then((res) => console.log(res.data));
	}, []);
    return (
        <div>
            Products Reviews
        </div>
    )
}

export default ProductsReviews
