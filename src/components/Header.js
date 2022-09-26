import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
	const result = useSelector((state) => state.cartData);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.warn("redux data in header", result);
	return (
		<div className='header'>
			<Link to='/'>
				<h1 className='logo'>Redux-Saga</h1>
			</Link>
			<div className='search-box'>
				<input
					type='text'
					placeholder='Search product'
					onChange={(event) => dispatch(productSearch(event.target.value))}
				/>
			</div>
			<div className='cart-div'>
				<span>{result.length}</span>
				<img
					src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
					style={{ cursor: "pointer" }}
					alt=''
					onClick={() => navigate("/cart")}
				/>
			</div>
		</div>
	);
};

export default Header;
