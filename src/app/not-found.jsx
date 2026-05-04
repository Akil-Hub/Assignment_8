
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Notfound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <DotLottieReact 
        src='/errorLottie.lottie'
        loop
        autoplay
        className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]'
      />
    </div>
  )
}

export default Notfound