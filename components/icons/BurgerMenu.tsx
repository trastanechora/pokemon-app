import * as React from 'react'

function BurgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 80" width="22" height="25" {...props}>
      <rect fill={props.color} width="100" height="12" rx="8"></rect>
      <rect fill={props.color} y="30" width="100" height="12" rx="8"></rect>
      <rect fill={props.color} y="60" width="100" height="12" rx="8"></rect>
  </svg>
  )
}

export default BurgerMenu
