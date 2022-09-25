import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Home = () => {
	const productData = useSelector((state) => state.productData);
	console.warn("Data in main component", productData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productList());
	}, []);
	return (
		<div>
			<div>
				<button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
			</div>

			<div className='product-container'>
				{productData.map((item) => (
					<div className='product-item'>
						<img src={item.photo} alt='' className='product_img' />
						<div>Name: {item.name}</div>
						<div>Color: {item.color}</div>
						<div>Price: {item.price}</div>
						<div>Category: {item.category}</div>
						<div className='cart_btn'>
							<button onClick={() => dispatch(addToCart(item))}>
								Add to cart
							</button>
							<button onClick={() => dispatch(removeFromCart(item.name))}>
								Remove from cart
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
