

const Categories = () => {
  const catogery = [
    { id: 1, name: "fashion", image: "https://i.pinimg.com/736x/b3/5c/c5/b35cc5b74e16f05716afe1a051e62c3c.jpg", count:"item 114"},
     { id: 2, name: "style", image: "https://i.pinimg.com/736x/85/c5/f7/85c5f79cd99211e4410125819c649e6f.jpg", count:"item 200" },
     { id: 3, name: "shoes", image: "https://i.pinimg.com/736x/03/68/08/036808f50e0dc0bca1dba721638c43cb.jpg", count: "item 322"},
     { id: 4, name: "Electronics", image: "https://i.pinimg.com/736x/85/4a/b1/854ab1a1398e358a35a29ebd94570b48.jpg", count: "item 224"},
     { id: 5, name: "Food", image: "https://i.pinimg.com/1200x/70/2d/e6/702de6afe94266e6fd4da0d1dc7caf24.jpg", count: "item 226"},
     { id: 6, name: "Phones", image: "https://i.pinimg.com/736x/25/7a/e3/257ae37b125853599f57cf8f0052653c.jpg", count: "item 228"},
     { id: 7, name: "Gym", image: "https://i.pinimg.com/1200x/de/8f/57/de8f579651b2e0a6cddbd359182f95ad.jpg", count: "item 300"},
     { id: 8, name: "Snacks", image: "https://i.pinimg.com/736x/aa/ee/32/aaee32626991f0c1ada0c8ee9a0cb1fa.jpg", count: "item 500"}
   ]
  return (
    <section className='w-full px-2 py-8 sm:px-6 sm:py-12'>
      <div className='mb-4 flex flex-wrap items-center justify-between gap-2'>
        <h2 className='text-xl font-bold sm:text-2xl'>Shop by Categories</h2>
        <span className='text-base sm:text-xl' >View all Categories</span>
        </div>

      <div className='grid w-full grid-cols-2 gap-3 bg-gray-50 p-3 sm:grid-cols-3 sm:gap-4 sm:p-4 lg:grid-cols-4'>
      {catogery.map((items) => {
        return <div key={items.id} className='mx-auto w-full min-w-0 rounded-xl bg-white p-2'>
          <img className='aspect-square w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 hover:scale-105' src={items.image} alt={items.name} />
          <div className='flex flex-wrap items-center justify-between gap-1 pt-2'>
            <h3 className='text-base font-bold sm:text-xl'>{items.name}</h3>
            <span className='text-sm sm:text-base'>{items.count}</span>
          </div>
        </div> 
      })}
      </div>
    </section>
    
  )
}

export default Categories
