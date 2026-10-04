

const ProductsSection = () => {
  const Carts = [
    {id:1, name:"oversized wool coat", images:"https://i.pinimg.com/736x/91/b8/84/91b88443aaae45508fe58240299f7b5e.jpg", count:"items 3000"},
    {id:2, name:"Air Structure Sneaker", images:"https://i.pinimg.com/1200x/5d/e2/10/5de210fc1ae46f8a0d55c5f44e99825b.jpg", count:"items 4000"},
    {id:3, name:"Leather Bag", images:"https://i.pinimg.com/1200x/23/82/0c/23820ccbd6b11aa0215c98aae18fac06.jpg", count:"items 600"},
    {id:4, name:"wireless head set", images:"https://i.pinimg.com/736x/04/39/12/043912cd6242988f7c426bd9870333c2.jpg", count:"items 250"},
    {id:5, name:"Sunglases", images:"https://i.pinimg.com/736x/63/60/2b/63602b06d258b8830129131aa689ec94.jpg", count:"items 5000"},
    {id:6, name:"Stylish Black Hoodie", images:"https://i.pinimg.com/736x/78/dc/28/78dc28d5f290d186bdfb10048a3b5b89.jpg", count:"items 440"},
    {id:7, name:"Trending Shirts", images:"https://i.pinimg.com/736x/d9/15/c8/d915c8465bff2f4eaec32054888a432c.jpg", count:"items 600"},
    {id:8, name:"Trending Jeans", images:"https://i.pinimg.com/736x/2b/3e/a8/2b3ea863c15c640a92441a356f819256.jpg", count:"items 10000"}
  ]
  
  return (
    <section className='w-full px-2 py-8 sm:px-6 sm:py-12 lg:px-10'>

      <h1 className='mb-5 text-2xl font-bold sm:text-3xl'>Trending Products</h1>

      <div className='grid w-full grid-cols-1 gap-3 bg-gray-50 p-2 shadow-sm transition hover:shadow-md sm:grid-cols-2 sm:p-3 lg:grid-cols-4'>

        {Carts.map((items) => {
          return <div key={items.id} className='w-full min-w-0 rounded-2xl p-3 shadow-sm sm:p-4'>
            <img className='aspect-[4/3] w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 hover:scale-105' src={items.images} alt={items.name} />
            <div className='mt-3 flex flex-wrap items-center justify-between gap-2'>
            <h2 className='text-lg font-bold sm:text-xl'>{items.name}</h2>
              <span className='text-sm'>{items.count}</span>
            </div>
          </div>
        })}
      
        
      </div>
    </section>
  )
}

export default ProductsSection
