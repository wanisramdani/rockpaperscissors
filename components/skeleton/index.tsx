import React from 'react'

type Props = {}

const Skeleton = (props: Props) => {
  return (

    <div className={"bg-black opacity-20 p-20 translate-y-3 rounded-full w-fit "}> 
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
    </div> 

  )
}

export default Skeleton