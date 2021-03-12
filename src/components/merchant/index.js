import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './reviews';
function MerchantReviews() {
	const [ merchantReviews, setMerchantReviews ] = useState([]);
	useEffect(() => {
		axios.get('https://www.spatialardhi.com/estate/reviews/?format=json').then((res) => {
			setMerchantReviews(res.data);
		});
	}, []);
	return (
		<div>
			<h5>Merchant reviews from buyer & Merchant Response from buyer</h5>
			{merchantReviews.map((review) => <Reviews data={review} key={review.id} />)}
		</div>
	);
}

export default MerchantReviews;
