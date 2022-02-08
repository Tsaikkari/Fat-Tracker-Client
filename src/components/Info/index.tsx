import React from 'react'

import styles from './Info.module.css'

const Info = () => {
  return (
    <div className={styles.container}>
      <h4 className='my-3'>Creating Your Weekly Plans</h4>
      <p>
        The best way to loose weight is to eat less fatty foods and exercise
        more. Adding the day(s) into your plan when you are going to / when you
        have eaten fatty foods will help you reduce the habit. Adding the day(s)
        you are going to exercise during the week will help you to increase that
        habit and fasten the weight loss as well as make your body fit.
      </p>
      <p>
        <span>
          <i className='fas fa-play-circle'></i>
        </span>{' '}
        Start by clicking on the <span>New Week</span> button to add your week
        plan. Add your current and goal weight for the week by clicking the{' '}
        <span><i className='fas fa-weight'></i></span> button. It's wise to set a moderate goal; normally,
        people can loose around <span>0.5 - 1 kg in a week</span>.
      </p>
      <p>
        <i className='fas fa-cookie'></i> Add your fatty foods and exercise days
        into the plan. At the end of the week, add your new weight by clicking
        the yellow button.
      </p>
      <p>
        <i className='fas fa-chart-pie'></i> You can monitor your progress at
        the <b>Chart</b> page.
      </p>
    </div>
  )
}

export default Info
