import { mount } from 'enzyme'

import AddAchievedWeight from '../AddAchievedWeight'
import Root from '../../Root'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <AddAchievedWeight />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has an input and a button', () => {
  expect(wrapped.find('input').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
