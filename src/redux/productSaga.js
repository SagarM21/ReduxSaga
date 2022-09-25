import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
	let data = yield fetch("http://localhost:8000/product");
	data = yield data.json();
	console.warn("addToCart Action called", data);
	yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
	yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
