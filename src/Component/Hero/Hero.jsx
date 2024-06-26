import React from 'react'

function Hero() {
  return (


<section className='bg-yellow-500 pt-28'>
  <div className="text-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="flex flex-col justify-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-4xl font-bold leading-10 tracking-normal text-pretty sm:text-4xl ">Give Your <span className='bg-pink-400 '>Kids</span> the Skills to <br />Prepare them for the <span className='bg-green-300 '>Future.</span></h2>

        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
          iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
          minima aliquid tempora. Obcaecati, autem.
        </p>

        <a
          href="/"
          className="inline-block px-12 py-3 mt-8 font-bold text-white transition bg-pink-500 rounded-full botext-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
      <div>
       <img src="/Animation - 1719084703823.json" alt="" />
      </div>

          
     
    
    </div>
  </div>
</section>

)

}

export default Hero