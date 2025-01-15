import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] mb-4 md:w-[60vw] md:ml-[20vw]  lg:ml-0 lg:w-[40vw] xl:w-[30vw] lg:mb-8 relative xl:ml-0 -0">
        <Image src={"/test1.jpg"} alt="test" fill sizes="40vw" />
      </div>
      <div className="flex flex-row gap-16 md:ml-[20vw] md:gap-16 lg:ml-0 md:w-fit lg:w-fit lg:gap-16 ">
        <Image src={"/test1.jpg"} alt="test" height={60} width={60}></Image>
        <Image src={"/test1.jpg"} alt="test" height={60} width={60}></Image>
        <Image src={"/test1.jpg"} alt="test" height={60} width={60}></Image>
        <Image src={"/test1.jpg"} alt="test" height={60} width={60}></Image>
      </div>
    </div>
  );
};

export default ProductImages;
