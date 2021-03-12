import React from 'react';
import styles from '../blogpostreplies/replies.module.css';
function ProductReview({ data }) {
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
					{/* {data.buyer ? (
                    <div>
                        <img
                            className={styles.profileImage}
                            src={data.buyer.profile.avatar}
                            alt={data.buyer.profile.avatar}
                        />
                        <p className={styles.name}> {data.buyer.profile.name}</p>
                        <p> {data.buyer.content}</p>
                    </div>
                ) : (
                    <p>No Buyer Comments yet</p>
                )} */}
				</div>
			</div>
		</div>
	);
}

export default ProductReview;
