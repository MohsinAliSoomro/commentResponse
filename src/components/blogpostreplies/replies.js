import React from 'react';
import styles from './replies.module.css';
function Replies({ data }) {
	return (
		<div>
			<div className={styles.repliesContainer}>
				<div style={{ margin: '20px', padding: '20px',textAlign:'center' }}>
					<img
						className={styles.profileImage}
						src={data.merchant.profile.avatar}
						alt={data.merchant.profile.avatar}
					/>
					<p className={styles.name}>{data.merchant.profile.name}</p>
				</div>
				<div>
					<h2>{data.content}</h2>
					{data.buyer ? (
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
					)}
				</div>
			</div>
		</div>
	);
}

export default Replies;
