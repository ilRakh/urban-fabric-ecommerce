"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function CarouselImages() {
    const arrayFlyers = [
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-adidas-ttoe2.jpg",
            id: 0,
            link: ""
        },
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-kappaDres.jpg",
            id: 1,
            link: ""
        },
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-munichDRESS.jpg",
            id: 2,
            link: ""
        },
    ];
    const [content, setContent] = useState(arrayFlyers[0]);
    const Next = () => {
        if (content.id === 0) {
            setContent(arrayFlyers[1]);
        }
        if (content.id === 1) {
            setContent(arrayFlyers[2]);
        }
        if (content.id === 2) {
            setContent(arrayFlyers[0]);
        }
    };
    const Back = () => {
        if (content.id === 0) {
            setContent(arrayFlyers[2]);
        }
        if (content.id === 1) {
            setContent(arrayFlyers[0]);
        }
        if (content.id === 2) {
            setContent(arrayFlyers[1]);
        }
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            arrayFlyers.forEach(e => {
                if (content.id === e.id) {
                    setContent(arrayFlyers[e.id + 1]);
                }
                if (content.id === arrayFlyers.length - 1) {
                    setContent(arrayFlyers[0]);
                }
            });
        }, 4000);

        return () => clearInterval(intervalId);
    }, [content]);

    return (
        <Link href={content.link ? content.link : "#"}>
            <div className="relative flex flex-col justify-center items-center w-full h-[500px]">
                <Image width={1300} height={450} alt="Image" src={content.image} className="w-full h-full object-cover" />
                <button onClick={Back} className="h-full w-[50px]  flex flex-row justify-center items-center text-uf-white text-4xl bg-transparent outline-none cursor-pointer absolute left-0">
                    <IoIosArrowBack />
                </button>
                <div className="flex absolute bottom-1 gap-[5px]">
                    {arrayFlyers ? arrayFlyers.map(e => (
                        <button key={e.id}
                            onClick={() => setContent(arrayFlyers[e.id])}
                            className={content.id === e.id ? "w-[13px] h-[13px] rounded-[50%] border-none cursor-auto bg-uf-opacity-white" : "w-[13px] h-[13px] rounded-[50%] border-none cursor-pointer bg-uf-opacity-black"}
                        ></button>
                    )) : <h1>PIola</h1>}
                </div>
                <button onClick={Next} className="h-full w-[50px]  flex flex-row justify-center items-center text-uf-white text-4xl bg-transparent outline-none cursor-pointer absolute right-0">
                    <IoIosArrowForward />
                </button>
            </div>
        </Link>
    );
}
