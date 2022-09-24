import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";

const Home = () => {
	const dispatch = useDispatch();
	const product = {
		name: "i Phone",
		category: "mobile",
		price: 10000,
		color: "red",
	};
	return (
		<div>
			<button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
			<div>
				<button onClick={() => dispatch(removeFromCart(product.name))}>
					Remove from Cart
				</button>
			</div>
			<div>
				<button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
			</div>
		</div>
	);
};

export default Home;
