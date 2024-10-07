import React from 'react'

type Props = {
  name: string;
  isBeam: boolean
  containerClass: string
}

const Button = ({ name, isBeam=false, containerClass }: Props) => {
  return (
    <button className={`btn $${containerClass}`}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-notif' />
          <span className='btn-notif_dot' />
        </span>
      )}
      {name}
    </button>
  )
}

export default Button