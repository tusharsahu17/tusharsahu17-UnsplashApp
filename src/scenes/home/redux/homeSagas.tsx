import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { HomeResponse } from './../../../../src/models/response/HomeResponse';

import {
    fetchingProductDataFail,
    fetchingProductDataStarted,
    fetchingProductDataSuccess,
} from './homeReducer';
import { API_URL } from '../../../services/webConstant';
import { apiClient } from '../../../services/httpServices';

export function* ProductSaga(action) {
    const { payload } = action;
    const client_id = 'client_id=50-tqPpgyyQT9O3vPSNZp0f2cQxpoW8E8uVzgPcEDB0';
    yield put(fetchingProductDataStarted({}));
    const { data, ok }: ApiResponse<HomeResponse> = yield call(
        apiClient.get,
        `${API_URL.PRODUCT}`,
        `${API_URL.PRODUCT}/?${client_id}`,
    );
    console.log('data')
    if (ok && data) {
        yield put(fetchingProductDataSuccess(data));
    } else if (!ok && data) {
        yield put(fetchingProductDataFail({}));
    }
}
