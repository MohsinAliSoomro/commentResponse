import React, { useEffect, useState } from 'react';
import styles from './../blogpostreplies/replies.module.css';
import axios from 'axios';
import Response from './response';
function Reviews({ data }) {
	const [ merchantResponse, setMerchantResponse ] = useState([]);
	useEffect(
		() => {
			axios.get('https://www.spatialardhi.com/estate/MerchantReviewResponse/?format=json').then((res) => {
				let filterResult = res.data.filter((i) => i.review.id === data.id);
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
							{data.buyer.profile.avatar ? (
								<img
									className={styles.profileImage}
									src={data.buyer.profile.avatar}
									alt={data.buyer.profile.avatar}
								/>
							) : (
								<img
									className={styles.profileImage}
									src="https://images.unsplash.com/photo-1488406016221-ec4788beab3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
									alt="source"
								/>
							)}
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

export default Reviews;
