import React from 'react'

const Services = () => {
  return (
    <section className="service mt-20 w-full bg-gradient-to-r from-blue-300 to-blue-400 mb-10 ">
        <div className=" grid h-[30vh] md:grid-cols-3 border-2 border-black p-5 gap-5  ">    
            <div className="grid1 flex justify-center md:grid border-2 border-black row-span-3 place-items-center bg-blue-100 rounded-md ">
            <i className="fa-solid fa-truck-fast fa-lg"></i>
            <h3>Super Fast Delivery</h3>
            </div>
            <div className="grid2 flex items-center justify-center border-2 border-black bg-blue-100 rounded-md">
            <i className="fa-solid fa-shield-halved fa-lg"></i>
            <h3>Non-contact delivery</h3>
            </div>
            <div className="grid3 flex justify-center md:grid border-2 border-black row-span-3 place-items-center bg-blue-100 rounded-md">
            <i className="fa-solid fa-file-shield fa-lg"></i>
                <h3>Super Secure Payemnt System</h3>
            </div>
            <div className="grid4 flex justify-center border-2 border-black row-span-2 place-items-center bg-blue-100 rounded-md">
            <i className="fa-solid fa-hand-holding-hand fa-lg"></i>
            <h3>Money Back Guarantee</h3>
            </div>
        </div>
    </section>
  )
}

export default Services