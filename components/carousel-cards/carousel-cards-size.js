"use client"
import React, { useState } from 'react'
import CarouselCardsSM from './carousel-cards-sm';
import CarouselCardsMD from './carousel-cards-md';
import CarouselCardsLG from './carousel-cards-lg';
import CarouselCardsXL from './carousel-cards-xl';
import CarouselCardsXS from './carousel-cards-xs';

export default function CarouselCardsSize({product, title}) {
    
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    if(screenSize >= 1280) return <CarouselCardsXL product={product} title={title} />
    if(screenSize >= 1024) return <CarouselCardsLG product={product} title={title} />
    if(screenSize >= 768) return <CarouselCardsMD product={product} title={title} />
    if(screenSize >= 640) return <CarouselCardsSM product={product} title={title} />
    else return <CarouselCardsXS product={product} title={title} />
}
