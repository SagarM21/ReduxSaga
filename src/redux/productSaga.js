import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
	let data = yield fetch("http://localhost:8000/product");
	data = yield data.json();
	console.warn("addToCart Action called", data);
	yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
	let result = yield fetch(`http://localhost:8000/product?q=${data.query}`);
	result = yield result.json();
	console.warn("search product Action called from saga file", result);
	yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
	yield takeEvery(PRODUCT_LIST, getProducts);
	yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
