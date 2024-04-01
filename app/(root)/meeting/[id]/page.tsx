import React from 'react'

function Meeting({params}:{params:{ id: string}}) {
  return (
    <div>
      <div className="">Meeting Room: #{params.id}</div>
    </div>
  )
}

export default Meeting
