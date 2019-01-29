import { takeEvery, call, put,select } from 'redux-saga/effects';
import { fetchImages, fetchCompleted, fetchFailed } from './action';
import types from './types'

const getPage = (state) => state.gallery.nextPage;

function* imageFetcher() {
    try {
        let page = yield select(getPage);
        let data = yield call(getImages, page)
        yield put(fetchCompleted(data))
    } catch (error) {
        yield put(fetchFailed())
    }

}

export default function* gallleryWatcherSaga() {
    yield takeEvery(types.FETCH_IMAGES, imageFetcher);
}




// api calls
const getImages = async (page = 1) => {
    let response = await fetch('https://api.unsplash.com/photos?client_id=1e2064d83ab19e9cc8bea301bd8716b3f30fb90ec46ce3343e09f9a05ca4ce30&page=' + page)
    let data = await response.json()
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}