import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Replies from './replies';
function BlogPostReplies() {
	const [ blogPostReplies, setBlogPostReplies ] = useState([]);
	useEffect(() => {
		axios.get('https://www.spatialardhi.com/estate/replies/?format=json').then((res) => {
			setBlogPostReplies(res.data);
		});
	}, []);
	return (
		<div>
			<h1>Blog Post Replies</h1>
			{blogPostReplies.map((reply) => <Replies data={reply} key={reply.id} />)}
		</div>
	);
}

export default BlogPostReplies;
