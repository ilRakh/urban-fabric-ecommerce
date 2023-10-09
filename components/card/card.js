export default function Card({ product }) {
    return (
        <div className="flex flex-col w-[150px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[210px] md:h-[270px] lg:w-[280px] lg:h-[330px]">
            <img src={product.image} alt="product picture" className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] lg:w-[280px] lg:h-[280px] object-cover" />
            <div className="flex flex-row w-full h-[50px] relative lg:mt-1">
                <span className="absolute left-0 w-1/2 text-xs sm:text-sm md:w-2/3">{product.name}</span>
                <span className="absolute right-0 text-xs ">${product.price}</span>
            </div>
        </div>
    );
}
