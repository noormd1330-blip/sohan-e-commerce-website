

const Shop = () => {
  const Cards = [
    {id:1, name:"Hoodie", images:"https://i.pinimg.com/1200x/a1/86/83/a18683de4e1728082a91ae706b5d76ab.jpg",text:"category: men-collection",span:"$29:99"},
    {id:2, name:"T-shirts", images:"https://i.pinimg.com/736x/c3/6a/72/c36a72328a4d32fe9b5d796eae7ed875.jpg",text:"category offer",span:"$35:00"},
    {id:3, name:"Bag", images:"https://i.pinimg.com/1200x/8b/3e/45/8b3e45446e540ca6d06633ea4b9faaf1.jpg",text:"category: Discounts",span:"$10:00"},
    {id:4, name:"Sun-Glasses", images:"https://i.pinimg.com/736x/f5/67/16/f56716fedabd977d3b81acdcb01bba96.jpg",text:"category: Stylish",span:"$5:00"},
    {id:5, name:"Rolex", images:"https://i.pinimg.com/736x/a8/4a/01/a84a01855b5c7511bc6b5ec8bcd1ba3a.jpg",text:"category: Electronics",span:"$100:00"},
    {id:6, name:"long-wool Coat", images:"https://i.pinimg.com/1200x/01/b2/92/01b292fb3f487c0b5ca02873e03cddcd.jpg",text:"category: Weddings",span:"$300:00"}
  ]
  return (
    <section className="w-full bg-cyan-700 px-4 py-10 sm:px-8 sm:py-16">
      <h1 className="mb-6 text-3xl font-bold text-white sm:mb-10 sm:text-4xl">Our Collection</h1>

  <div className="flex flex-col items-start justify-between gap-4 px-1 py-4 sm:flex-row sm:items-center sm:px-3">
  {/* Left - Categories */}
  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-lg text-black sm:gap-6 sm:text-2xl">
    <li className="relative font-bold">
      <a href="">All</a>
      {/* Blue underline */}
      <span className="absolute -bottom-1 left-0 h-1 w-full rounded bg-blue-600"></span>
    </li>
    <li className="cursor-pointer text-white hover:text-black"><a href="">T-Shirts</a></li>
    <li className="cursor-pointer text-white hover:text-black"><a href="">Hoodies</a></li>
    <li className="cursor-pointer text-white hover:text-black"><a href="">Accessories</a></li>
  </ul>

  {/* Right - Sort by */}
  <div className="flex items-center gap-2">
    <span className="text-base font-semibold text-white sm:text-xl">Sort by:</span>
    <div className="bg-white border border-gray-300 rounded-md px-3 py-1.5 flex items-center">
      <select className="max-w-full cursor-pointer bg-transparent text-sm outline-none">
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>
    </div>
  </div>
</div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {Cards.map((items) => {
         return<div key={items.id} className="flex w-full min-w-0 flex-col items-center rounded-2xl border border-black bg-gray-500 p-4 shadow-lg sm:p-6">
           <img className="mb-3 w-full rounded-2xl object-cover" src={items.images} alt={items.name} />
           <h2 className="text-center text-xl font-bold text-white sm:text-2xl">{items.name}</h2>
           <span className="text-center text-base text-white sm:text-xl">{items.text}</span>
           <span className="block text-xl text-white">{items.span}</span>
           <button className="mt-3 w-full cursor-pointer rounded-2xl border bg-blue-700 px-5 py-2 text-black active:scale-105">Add Cart</button>
          </div>
        })}


      </div>



    </section>
  )
}

export default Shop
