import redux, { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise-middleware';
import reduxLogger, { createLogger } from 'redux-logger';
import reduxSaga from 'redux-saga';
import reducers from './reducers';

const getDog = () => ({
  type: 'GET_DOG',
  payload: fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json())
})

const store = createStore(reducers, applyMiddleware(reduxPromise(), createLogger()))

const render = () => {

}

const init = () => {
  const $imageWraper = document.querySelector('.image-wraper');
  const $button = document.querySelector('.btn');

  store.dispatch(getDog());
  $button.onclick = () => {
    store.dispatch(getDog());
  }

  store.subscribe(() => {
    $imageWraper.innerHTML = `<img src="${store.getState().image}">`
  })
}

init();