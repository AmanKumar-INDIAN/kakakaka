import React from 'react'

function Container({children,classname}:{children:React.ReactNode,classname?:string}):React.ReactNode {
  return <div className={` container p-6 mx-auto xl:px-0 ${classname} `}>

{children}
  </div>
}

export default Container
