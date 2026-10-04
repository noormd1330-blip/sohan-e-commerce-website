const Footer = () => {
  return (
    <footer className="w-full bg-black p-5 sm:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <h1 className="text-2xl font-bold text-white">Sohan</h1>
          <p className="mr-10 text-sm text-white">
            Modern essentials crafted with care. Designed in Berlin, worn everywhere.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-400   text-2xl">Shop</h2>

          <ul className="text-gray-300 mr-10">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Men</li>
            <li>Women</li>
            <li>Sale</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-400">Company</h3>

          <ul className="text-gray-300 mr-10">
            <li>About</li>
            <li>Journal</li>
            <li>Stores</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 text-2xl font-semibold mr-10">
            Stay In The Loop
          </h4>
          <span className="text-base font-semibold text-white sm:text-lg">
            Get early access to drops and 15% off your first order.
          </span>
          <br /> <br />
          <div className="relative ">
            <input
              className="w-full rounded-2xl border border-white/30 bg-transparent px-4 py-3 pr-24 text-white focus:border-white focus:outline-none"
              type="text"
              placeholder="Enter your email...."
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-xl bg-white px-4 py-2 font-semibold text-black active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
