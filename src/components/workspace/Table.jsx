import React from 'react'
import Card from './Card'

const Table = ({buttonText="Created",data}) => {
  return (
    <section className='flex flex-col items-center rounded-t-xl  sm:border-primary sm:border-8 sm:rounded-lg my-8 w-full h-fit '>
    <div className='flex  items-center  sm:border-white sm:border-2 justify-between py-5 px-5 sm:px-8 w-full text-white text-lg font-semibold rounded-t-lg bg-[#390A75] h-fit '>
        Workspaces

        <button className=' flex bg-[#FFC728] font-bold sm:font-semibold text-sm sm:text-lg px-6 sm:px-3 sm:py-1 py-2 text-primary rounded-full'> {buttonText}<br className='sm:hidden'></br> Workspace</button>
    </div>
    {
      data.map((val)=>{
        return (
          <div>
            <Card val={val}></Card>
          </div>
        )
      })
    }
</section>
  )
}

export default Table
