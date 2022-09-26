import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const result = useSelector((state) => state.cartData);
	const navigate = useNavigate();
	console.warn("redux data in header", result);
	return (
		<div className='header'>
			<Link to='/'>
				<h1 className='logo'>Redux-Saga</h1>
			</Link>
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
