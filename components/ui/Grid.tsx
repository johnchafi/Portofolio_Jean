import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data/index'

export const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className="w-full py-20">{
            gridItems.map(({title, description , id , className , img , imgClassName, titleClassName, spareImg}) =>(
            <BentoGridItem 
            key={id} 
            title={title} 
            description={description} 
            id={id}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            />)) 

        }</BentoGrid></section>
  )
}
