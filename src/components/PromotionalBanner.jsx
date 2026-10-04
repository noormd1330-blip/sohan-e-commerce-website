
import Banner from '../images/Banner.png'

const PromotionalBanner = () => {
  return (
    <section className='w-full'>
      <img className='aspect-[16/7] w-full cursor-pointer rounded-2xl object-cover' src={Banner} alt="Featured collection promotion" />
    </section>
  )
}

export default PromotionalBanner
