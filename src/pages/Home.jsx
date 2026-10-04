
import Herosection from '../components/Herosection'
import Categories from '../components/Categories'
import ProductsSection from '../components/ProductsSection'
import PromotionalBanner from '../components/PromotionalBanner'

const Home = () => {
  return (
    <div>
     <main className='flex flex-col gap-8 p-3 sm:gap-12 sm:p-4'>
        <Herosection />
        <Categories />
        <ProductsSection />
        <PromotionalBanner />

        
      </main>
    </div>
  )
}

export default Home
