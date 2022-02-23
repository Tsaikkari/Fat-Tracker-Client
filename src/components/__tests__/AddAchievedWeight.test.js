import AddAchievedWeight from '../AddAchievedWeight'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const mockStore = configureStore(middlewares)
const initState = {
  week: {
    achievedWeight: null,
    weights: {
      currentWeight: null,
      goalWeight: null,
    },
  },
  loading: true,
}
const store = mockStore(initState)
let wrapped

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <AddAchievedWeight />
    </Provider>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has an input and a button', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
