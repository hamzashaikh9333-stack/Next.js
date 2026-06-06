import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <html lang="en" className={`bg-black h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 text-5xl">{children}</div>
      </body>
    </html>
  )
}

export default layout
