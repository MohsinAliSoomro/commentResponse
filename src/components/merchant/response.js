
import styles from './../blogpostreplies/replies.module.css';
function Response({ data }) {
	
	console.log('responseData', data);
	return (
        <div style={{ display:'flex'}}>
			<div style={{width:'100px'}}>
				<img
					className={styles.profileImage}
					src={data.review.merchant.profile.avatar}
					alt={data.review.merchant.profile.avatar}
				/>
				<p className={styles.name}> {data.review.merchant.profile.name}</p>
				
            </div>
            <h4> {data.merchant_response}</h4>
		</div>
	);
}

export default Response;
