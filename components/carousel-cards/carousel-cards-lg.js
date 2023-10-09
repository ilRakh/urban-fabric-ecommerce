"use client"
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Card from "../card/card";

export default function CarouselCardsLG({ product, title }) {
    const [spaceCard, setSpaceCard] = useState(0);
    const myRefs = product.map(() => useRef());
    const sliceShow = useRef(null);

    useEffect(() => {
        const element1 = myRefs[0].current.getBoundingClientRect();
        const element2 = myRefs[1].current.getBoundingClientRect();

        setSpaceCard(element2.left - element1.left - 280);
    }, []);

    const handleNext = () => {
        if (sliceShow.current.children.length > 0) {
            const firstElement = sliceShow.current.children[0];

            sliceShow.current.style.transition = `1000ms ease-out all`;

            const sizeSlice = spaceCard + sliceShow.current.children[0].offsetWidth;

            sliceShow.current.style.transform = `translateX(-${sizeSlice}px)`;

            const transitionEvent = () => {
                sliceShow.current.style.transition = `none`;
                sliceShow.current.style.transform = `translateX(0)`;

                sliceShow.current.appendChild(firstElement);
                sliceShow.current.removeEventListener("transitionend", transitionEvent);
            };

            sliceShow.current.addEventListener("transitionend", transitionEvent);
        }
    };
    const handlePrev = () => {
        if (sliceShow.current.children.length > 0) {
            const index = sliceShow.current.children.length - 1;
            const lastElement = sliceShow.current.children[index];

            sliceShow.current.insertBefore(lastElement, sliceShow.current.firstChild);

            sliceShow.current.style.transition = `none`;

            const sizeSlice = spaceCard + sliceShow.current.children[0].offsetWidth;

            sliceShow.current.style.transform = `translateX(-${sizeSlice}px)`;

            setTimeout(() => {
                sliceShow.current.style.transition = `1000ms ease-out all`;
                sliceShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    return (
            <div className="w-full flex justify-center flex-row">
                <div className="overflow-hidden text-uf-white relative w-[924px]">
                    <div className="flex flex-row justify-between items-center w-full h-[60px]">
                        <h1 className="text-uf-white text-4xl">{title}</h1>
                        <div className="flex">
                            <button onClick={handlePrev} className="flex flex-row justify-center items-center border-none text-uf-white text-4xl outline-none cursor-pointer">
                                <IoIosArrowBack />
                            </button>
                            <button onClick={handleNext} className="flex flex-row justify-center items-center border-none text-uf-white text-4xl outline-none cursor-pointer">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>

                    <div ref={sliceShow} className="flex flex-nowrap gap-[42px]">
                        {product.map((product, index) => (
                            <div
                                id={"slice" + index}
                                ref={myRefs[index]}
                                key={index}
                                className="z-10 max-h-[500px] transition-all duration-300 ease-linear"
                            >
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}
