import { useRef } from 'react'
import imgPage404 from '../../assets/page-404.png'

const Page404 = () => {
  const refInnerWidth = useRef(window.innerWidth)
  const refInnerHeight = useRef(window.innerHeight)
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img src={imgPage404} alt="404 not found" className={`${refInnerWidth.current > refInnerHeight.current ? "h-full" : "w-full"}`} />
    </div>
  )
}

export default Page404