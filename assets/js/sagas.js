import * as app from './App/appSagas';


export default function* rootSaga() {
  yield [
    app.watchIncrementAsync(),
    app.watchDecrementAsync()
  ]
}