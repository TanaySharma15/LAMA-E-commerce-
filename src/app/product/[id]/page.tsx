import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Images */}
      <div className="w-full lg:w-1/2 lg:sticky t-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div>
        <div>
          <h1 className="text-4xl font-semibold py-5">Digital Incense</h1>
          <p className="font-normal flex-wrap pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veniam voluptatum facere commodi aliquam, assumenda eveniet
            laboriosam exercitationem tempore similique esse sed dicta eos
            maiores incidunt quaerat perferendis! Sequi, eligendi.
          </p>
        </div>
        <hr className="py-3" />
        <h1 className="font-bold text-xl pb-4">$40.5</h1>
        <hr />
        <div>
          <div className="flex items-center gap-4 pb-4">
            <h1 className="font-semibold text-xl ">Quantity</h1>
            <h1 className="text-sm text-red-500">Only 6 left in stock</h1>
          </div>
          <div className="flex w-24 justify-between font-semibold    px-4 py-2 bg-gray-200 rounded-2xl">
            <button>-</button>2<button>+</button>
          </div>
        </div>
        <hr className="pb-4 mt-2" />

        <button className="ring-2 ring-pink-400 rounded-2xl p-2 hover:bg-pink-400 hover:text-white">
          Add to Cart
        </button>

        <hr className="pb-4 mt-2" />
        <div>
          <h1 className="text-xl pb-4">Return and Refund Policy</h1>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eaque
            molestiae tenetur, fuga veritatis error modi eos soluta iste
            deleniti, at accusantium laudantium sunt aperiam libero odit
            doloremque? Assumenda dignissimos voluptatibus corrupti mollitia
            doloremque dolorem recusandae alias deserunt adipisci provident nam,
            labore, numquam repellendus architecto consectetur laborum dolor
            illo harum quae natus praesentium? Dicta porro corporis eum! Iusto,
            aperiam enim.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
