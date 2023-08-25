import React from 'react'
import '../../styles/components/PopPup/PopPup.scss'

type Props = {
    children: any,
    showMessage: any
}

const PopPup = (props: Props) => {
  return (
    props.showMessage && (
        <div className='popPup'>
            {props.children}
        </div>
    )
  )
}

export default PopPup