import React from 'react'

type LifeStyleProps = {
  lifeStyles: string
}

const LifeStyles = ({ lifeStyles }: LifeStyleProps) => {
  return <div>{lifeStyles && <p>{lifeStyles}</p>}</div>
}

export default LifeStyles
