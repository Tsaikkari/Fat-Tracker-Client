import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import LifeStyles from '../../components/LifeStyles'
import AddLifeStyles from '../../components/AddLifeStyles'
import { AppState } from '../../redux/types'
import { getUserProfileRequest } from '../../redux/actions'

const About = () => {
  const auth = useSelector((state: AppState) => state.auth)
  const {_id, name, lifeStyles, loading } = auth

  const dispatch = useDispatch()

  // TODO: fix
  useEffect(() => {
    if (!name && _id !== undefined) {
      dispatch(getUserProfileRequest(_id))
    } 
  }, [
    dispatch,
    _id,
    name,
    loading
  ])
  return (
    <div>
      <h1 className='text-center m-4'>Hello {name} 🧡</h1>
          <section>
            {/* {weeks.length === 0 &&  */}
            <p>
              Create your week plan(s) at the <span>Week</span> page. But first,
              you might want to specify the life style changes that you are
              taking on:
            </p>
            {/* }  */}
            <LifeStyles lifeStyles={lifeStyles} />
            <AddLifeStyles />
          </section>
    </div>
  )
}

export default About