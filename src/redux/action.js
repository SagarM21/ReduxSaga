import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const addToCart = (data) => {
	console.warn("addToCart Action called", data);
	return {
		type: ADD_TO_CART,
		data,
	};
};

export const removeFromCart = (data) => {
	console.warn("removeFromCart Action called", data);
	return {
		type: REMOVE_FROM_CART,
		data,
	};
};

export const emptyCart = () => {
	console.warn("emptyCarT Action called");
	return {
		type: EMPTY_CART,
	};
};
