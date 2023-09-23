export default function Card({ product }) {
    return (
        <div className="flex flex-col w-[280px] h-[330px]">
            <img src={product.image} alt="product picture" className="w-[280px] h-[280px] object-cover" />
            <div className="flex flex-row w-full h-[60px] relative ">
                <span className="absolute left-0 w-2/3">{product.name}</span>
                <span className="absolute right-0">${product.price}</span>
            </div>
        </div>
    );
}
