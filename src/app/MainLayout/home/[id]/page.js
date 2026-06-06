import React from 'react'

const page = async ({params}) => {
    const data = await params
    console.log(data)
  return (
    <div>
      This is the home page with dynamic routing. The id is: {data.id}
    </div>
  )
}

export default page
