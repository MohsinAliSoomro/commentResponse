import styles from './../blogpostreplies/replies.module.css';
import ReactStarsRating from 'react-awesome-stars-rating';
function Response({ data }) {
	console.log(data);
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ width: '100px' }}>
				<img
					className={styles.profileImage}
					src={data.review.merchant.profile.avatar}
					alt={data.review.merchant.profile.avatar}
				/>
				<p className={styles.name}> {data.review.merchant.profile.name}</p>
			</div>
			<div>
				<ReactStarsRating isEdit={false} size={18} value={parseInt(data.stars.slice(0, 1))} />
				<h4> {data.merchant_response}</h4>
			</div>
		</div>
	);
}

export default Response;
