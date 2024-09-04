import { companies, testimonials } from '@/data/index'
import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards'

function Clients() {
  return (
    <div className="py-20" id="clients">
        <h1 className="heading">
            kinds words from
            <span className="text-purple" >satisfied clients</span>

        </h1>
        <div className='flex flex-col items-center'>
            <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="slow"
            />

            <div className='flex items-center  flex-wrap justify-content gap-4 md:gap-16 max-16 max:mt-10'>
                {
                    companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className="md:w-10 w-5"/>
                        <img src={nameImg} alt={name} className="md:w-24 w-20"/>

                    </div>))
                }
            </div>

            </div>
        

        </div>

    </div>
  )
}

export default Clients