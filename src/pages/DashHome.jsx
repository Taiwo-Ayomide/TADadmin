import React from 'react'

const DashHome = () => {
  return (
    <>
    <div className="bg-transparent border-2 rounded-lg w-full h-auto px-12 py-12 border-blue-900">
      <h1 className='text-xl xl:text-3xl lg:text-3xl text-blue-900' style={{ fontFamily: 'impact' }}>
        YOU ARE WELCOME TO THE ADMIN PANEL.
      </h1>
    </div>
    <div className='block xl:flex lg:flex md:flex gap-4'>
      <div className='bg-transparent border-2 border-blue-900 w-full xl:h-96 lg:h-96 h-40 rounded-lg mt-3'>
        <div className='text-center xl:pt-32 lg:pt-32 pt-12'>
          <h1 className='uppercase text-blue-900 text-xl' style={{ fontFamily: 'impact' }}>T.A.D MASTERCLASS</h1>
          <p className='px-12'>The application for T.A.D Masterclass is in few week, How prepare are we?</p>
        </div>
      </div>
      <div className='bg-transparent border-2 border-blue-900 w-full xl:h-96 lg:h-96 h-40 rounded-lg mt-3'>
        <div className='text-center xl:pt-32 lg:pt-32 pt-12'>
          <h1 className='uppercase text-blue-900 text-xl' style={{ fontFamily: 'impact' }}>MASTERCLASS</h1>
          <p className='px-12'>The application for T.A.D Masterclass in few week, How prepare are we?</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashHome