import { PRODUCT_LIST } from "./constants";

export const productList = async() => {
	let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json()
	console.warn("addToCart Action called", data);
	return {
		type: PRODUCT_LIST,
		data,
	};
};
