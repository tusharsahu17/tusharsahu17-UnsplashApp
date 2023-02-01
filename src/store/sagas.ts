import { all, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_DATA } from "../scenes/home/redux/homeAction";
import { ProductSaga } from "../scenes/home/redux/homeSagas";

export default function* sagas() {
    yield all([takeLatest(FETCH_PRODUCT_DATA, ProductSaga)]);
}

