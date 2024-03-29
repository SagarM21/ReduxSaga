import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
	switch (action.type) {
		case SET_PRODUCT_LIST:
			console.warn("SET_PRODUCT_LIST reducer called", action);
			return [...action.data];

		default:
			return data;
	}
};
