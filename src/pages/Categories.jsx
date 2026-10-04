const Categories = () => {
  const Cards = [
    {id: 1, name:"Men", images:"https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 2, name:"Women", images:"https://images.unsplash.com/photo-1651828855248-343042ecc906?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 3, name:"Accessories", images:"https://i.pinimg.com/1200x/c1/e3/bc/c1e3bcd472072fb798aaea73f0da5dcb.jpg"},
    {id: 4, name:"Winter Collection", images:"https://i.pinimg.com/1200x/ef/9c/7f/ef9c7ff7d783a2cf5b7ab5c3d166cbf8.jpg"},
    {id: 5, name:"Best Sellers", images:"https://i.pinimg.com/736x/dd/ae/59/ddae59112b3d24593a71ca05be91e820.jpg"},
    {id: 6, name:"Lifestyle", images:"https://i.pinimg.com/1200x/bc/73/e9/bc73e93103aa90620075c1777619110b.jpg"}
  ]



  return (
    <section className="w-full bg-gray-500 px-4 py-12 sm:px-8 sm:py-16">
     
        <h1 className="text-3xl text-center mb-10   text-white font-bold">Shop By Category</h1>
      
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
        {Cards.map((items) => {
          return <div key={items.id} className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl bg-zinc-500 sm:h-80 lg:h-96">
            <img className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500" src={items.images} alt="" />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-al"></div>

            
            <div className="absolute inset-0 flex justify-center items-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg text-center px-2">
                {items.name}
              </h2>

            </div>

          </div>
        })}
          
          
        </div>
    </section>
   

  );
};

export default Categories;
