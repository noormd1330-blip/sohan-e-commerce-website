

const Herosection = () => {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-gray-50 p-4 sm:p-6 lg:min-h-[80vh] lg:flex-row lg:gap-8 lg:p-10">

      <div className="w-full rounded-2xl bg-white p-5 text-black sm:p-8 lg:w-1/2 lg:p-10">
        <h1 className="text-3xl leading-tight text-black sm:text-5xl lg:text-6xl">
          Discover Yours
          <span className="block font-bold text-4xl sm:text-6xl lg:text-7xl">
            <br />
            Styles & Products
          </span>
        </h1>
        <p className="mt-4 text-base italic sm:text-lg">
         E-commerce attracts customers with exciting offers, huge discounts, and exclusive deals. Limited-time sales, coupon codes, and festive offers create urgency, encouraging smart shopping. With affordable prices, cashback, and free delivery, online stores make every purchase rewarding for shoppers.
        </p>

        <button className="m-2 mt-5 cursor-pointer rounded-2xl bg-black px-4 py-2 text-white active:scale-95 sm:m-5">
          Shop Now
        </button>
        <button className="m-2 cursor-pointer rounded-2xl border bg-white px-4 py-2 text-black active:scale-95 sm:m-5">
          Lookbook
        </button>

        <span className=" flex text-gray-300 border"></span>
      </div>

      <div className="h-80 w-full overflow-hidden rounded-2xl sm:h-105 lg:h-120 lg:w-96 lg:shrink-0">
    
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=1759287349197116"
          className="w-full h-full"
           
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
};

export default Herosection;
