import { animate, useIsomorphicLayoutEffect } from "framer-motion"
import { useRef } from "react"

const NumberCounter = ({from, to, fixed}) => {
    const refNumber = useRef(null)

    useIsomorphicLayoutEffect(() => {
        const element = refNumber.current

        if(!element) return 

        element.textContent = from
        
        animate(from, to, {
            duration: 3.6,
            ease: "easeOut",
            onUpdate(value) {
                element.textContent = value.toFixed(fixed)
            }
        })
    }, [refNumber])
  return (
    <span ref={refNumber}></span>
  )
}

export default NumberCounter