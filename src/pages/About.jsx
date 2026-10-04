const About = () => {
  return (
    <section className="w-full bg-amber-400 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="text-4xl font-bold text-red-500 sm:text-5xl">About Us</h1>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">Sohan Ecommerce</h2>
          <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
            Sohan is modern essentials crafted with care. Designed globally, worn everywhere. We blend minimal design, premium quality and everyday comfort to create timeless pieces. No trends, just simple, durable and effortlessly stylish clothing made for everyone, every day.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <img className="aspect-3/4 w-full rounded-2xl object-cover" src="https://i.pinimg.com/736x/0c/62/60/0c6260b6ee78857f703c363e6118939e.jpg" alt="Sohan clothing collection" />
          <img className="aspect-3/4 w-full rounded-2xl object-cover" src="https://i.pinimg.com/736x/42/e8/bd/42e8bd155197f6fc293fa588de63b705.jpg" alt="Sohan everyday style" />
        </div>
      </div>
    </section>
  );
};

export default About;
