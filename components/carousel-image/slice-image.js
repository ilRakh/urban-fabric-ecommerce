'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function SliceImage() {
    return (
        <div className='w-full h-[500px]'>
            <Carousel className='rounded-none' slideInterval={5000} pauseOnHover>
                <Image
                    width={1200}
                    height={500}
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                />
                <Image
                    width={1200}
                    height={500}
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                />
                <Image
                    width={1200}
                    height={500}
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                />
            </Carousel>
        </div>
    )
}


