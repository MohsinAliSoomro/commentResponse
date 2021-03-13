import React, { useEffect, useState } from 'react';
import styles from '../blogpostreplies/replies.module.css';
import Response from './response';
import axios from 'axios';
function ProductReview({ data }) {
	const [ merchantResponse, setMerchantResponse ] = useState([]);
	useEffect(
		() => {
			axios.get('https://www.spatialardhi.com/estate/MerchantReviewResponse/?format=json').then((res) => {
				let filterResult = res.data.filter((i) => i.review.product === data.product);
				setMerchantResponse(filterResult);
			});
		},
		[ data ]
	);
	return (
		<div>
			<div className={styles.repliesContainer}>
				<div style={{ margin: '20px', padding: '20px', textAlign: 'center' }}>
					{data.buyer ? (
						<div>
							<img
								className={styles.profileImage}
								src={data.buyer.profile.avatar}
								alt={data.buyer.profile.avatar}
							/>
							<p className={styles.name}>{data.buyer.profile.name}</p>
						</div>
					) : (
						<p>Buyer</p>
					)}
				</div>
				<div>
					<h2>{data.buyer_comment}</h2>
					{merchantResponse.map((response) => <Response data={response} key={response.id} />)}
				</div>
			</div>
		</div>
	);
}

export default ProductReview;
