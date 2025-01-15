import Image from "next/image";
const ProductList = () => {
  return (
    <div className="">
      <div className="w-1vw h-[66vh]  flex justify-around gap-8  flex-col sm:flex-row ">
        <div className=" w-[20%] h-full rounded-md  justify-between sm:w-[45%] md:w-[30%]">
          <div className="ml-2">
            <Image
              src={"/./test1.jpg"}
              alt="test"
              className="object-cover rounded-xl"
              width={225}
              height={225}
            />
          </div>
          <div className=" flex justify-between w-[12vw] m-2">
            <span className="font-semibold">Name</span>
            <span className="font-bold">Price</span>
          </div>
          <div className="m-2 w-fit ">Description</div>
          <button className="m-2 ring-2  ring-red-400 rounded-full px-2 hover:bg-red-400 hover:text-white ">
            Add to Cart
          </button>
        </div>
        <div className=" w-[20%] h-full rounded-md  justify-between sm:w-[45%] md:w-[30%] ">
          <div className="ml-2">
            <Image
              src={"/./test1.jpg"}
              alt="test"
              className="object-cover rounded-xl"
              width={225}
              height={225}
            />
          </div>
          <div className=" flex justify-between w-[12vw] m-2">
            <span className="font-semibold">Name</span>
            <span className="font-bold">Price</span>
          </div>
          <div className="m-2 w-fit ">Description</div>
          <button className="m-2 ring-2  ring-red-400 rounded-full px-2 hover:bg-red-400 hover:text-white ">
            Add to Cart
          </button>
        </div>
        <div className=" w-[20%] h-full rounded-md  justify-between sm:w-[45%] md:w-[30%] ">
          <div className="ml-2">
            <Image
              src={"/./test1.jpg"}
              alt="test"
              className="object-cover rounded-xl"
              width={225}
              height={225}
            />
          </div>
          <div className=" flex justify-between w-[12vw] m-2">
            <span className="font-semibold">Name</span>
            <span className="font-bold">Price</span>
          </div>
          <div className="m-2 w-fit ">Description</div>
          <button className="m-2 ring-2  ring-red-400 rounded-full px-2 hover:bg-red-400 hover:text-white ">
            Add to Cart
          </button>
        </div>
        <div className=" w-[20%] h-full rounded-md  justify-between  sm:w-[45%] md:w-[30%]">
          <div className="ml-2">
            <Image
              src={"/./test1.jpg"}
              alt="test"
              className="object-cover rounded-xl"
              width={225}
              height={225}
            />
          </div>
          <div className=" flex justify-between w-[12vw] m-2">
            <span className="font-semibold">Name</span>
            <span className="font-bold">Price</span>
          </div>
          <div className="m-2 w-fit ">Description</div>
          <button className="m-2 ring-2  ring-red-400 rounded-full px-2 hover:bg-red-400 hover:text-white ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
