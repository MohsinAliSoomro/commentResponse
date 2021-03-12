
import './App.css';
import BlogPostReplies from './components/blogpostreplies';
import ProductsReviews from './components/products';
import MerchantReviews from './components/merchant'
function App() {

	return (
		<div>
		<MerchantReviews />
      <ProductsReviews />
      <BlogPostReplies />
		</div>
	);
}

export default App;
