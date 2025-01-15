import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      <div className="hidden md:flex bg-pink-100  items-center gap-8 justify-between ">
        {/* Text */}
        <div className="flex flex-col items-center justify-center gap-8 w-2/3">
          <h1 className="font-bold text-4xl text-slate-700 leading-[48px]">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-3xl text-sm">
            Buy Now
          </button>
        </div>

        {/* image */}
        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="woman" height={250} width={250} />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      <h1 className="text-2xl font-semibold py-10">All Products for you!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
