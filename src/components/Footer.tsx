import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[72vh] p-24 bg-gray-100">
      {/* Top Div */}
      <div className="flex gap-8 mb-6">
        {/* Left */}
        <div className=" w-1/4 h-max">
          <div className="text-2xl tracking-wider font-semibold p-4 ">LAMA</div>
          <div className="p-4 w-2/3">
            3252 Winding Way, Central Plaza, Willobrook, CA 90210, United State
          </div>
          <div className="tracking-wide font-medium p-4">hello@lama.dev</div>
          <div className="tracking-wide font-medium p-4">+1 234 567 890</div>
          <div className="p-4 flex gap-4">
            <img src="./facebook.png" alt="facebook" className="h-6 w-6" />
            <img src="./instagram.png" alt="instagram" className="h-6 w-6" />
            <img src="./youtube.png" alt="youtube" className="h-6 w-6" />
            <img src="./pinterest.png" alt="pinterest" className="h-6 w-6" />
            <img src="./x.png" alt="x" className="h-6 w-6" />
          </div>
        </div>
        {/* Middle */}
        <div className="w-2/4 h-max flex justify-between  p-4">
          <div>
            <h1 className="text-xl mb-14 font-semibold">COMPANY</h1>
            <div className="mt-16 flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Carrers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl mb-14 font-semibold">SHOP</h1>
              <div className="mt-16 flex flex-col gap-6">
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Accessories</Link>
                <Link href={""}>Men</Link>
                <Link href={""}>Women</Link>
                <Link href={""}>All Products</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl mb-14 font-semibold">HELP</h1>
              <div className="mt-16 flex flex-col gap-6">
                <Link href={""}>Customer Service</Link>
                <Link href={""}>My Account</Link>
                <Link href={""}>Find a Store</Link>
                <Link href={""}>Legal & Privacy</Link>
                <Link href={""}>Gift Card</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" w-1/4 p-4">
          <h1 className="text-xl  font-semibold mb-8">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotion and much
            more!
          </p>
          <div className="flex h-1/4 justify-center items-center">
            <input
              type="text"
              placeholder="Email address "
              className="w-full p-3.5 mt-8"
            />
            <button className=" bg-red-400 px-4 py-0 translate-y-3.5 h-12">
              JOIN
            </button>
          </div>
          <h1 className="mt-6 font-bold">Secure Payments</h1>
          <div className="flex justify-between items-center mt-4">
            <img src="./discover.png" alt="discover" className="h-12 w-12" />
            <img src="./skrill.png" alt="skrill" className="h-8 w-8" />
            <img src="./mastercard.png" alt="mastercard" className="h-8 w-8" />
            <img src="./visa.png" alt="visa" className="h-8 w-8" />
            <img src="./paypal.png" alt="paypal" className="h-8 w-8" />
          </div>
        </div>
      </div>
      {/* Bottom div */}
      <div className="flex justify-between mt-4 mb-4 pb-4">
        <div className="font-medium">© 2024 Lama Shop</div>
        <div className="flex gap-4">
          <h1 className="text-slate-500">Language</h1>
          <h1 className="font-medium">United State | English</h1>
          <h1 className="text-slate-500">Currency</h1>
          <h1 className="font-medium">$USD</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
