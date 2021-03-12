import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductReview from './review';
function ProductsReviews() {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		axios.get('https://www.spatialardhi.com/estate/productreviews/?format=json').then((res) => {
			setProducts(res.data);
		});
	}, []);
	return (
		<div>
			<h1>Product Reviews </h1>
			{products.map((product) => <ProductReview data={product} key={product.id} />)}
		</div>
	);
}

export default ProductsReviews;
