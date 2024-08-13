// AnhOctKnow
// Variants #FarmerMotion: là các trạng thái trực quan được thiết lập trước của một motion component 
// Là key bên trong Object gắn với thuộc tính"variants" trong motion component,
// Tên do người dùng tự định nghĩa và thường được sử dụng trong thuộc tính "initial" và "animate" của motion component
// Kế thừa: nếu component con có variants giống cha và không định nghĩa lại thì ở mặc định thẻ con sẽ được kế thừa lại variants giống cha

import {motion} from 'framer-motion'

const PageTransition = () => {
  return (
    <motion.div
        className='z-20 absolute top-0 w-screen h-screen bg-black'
        variants={{
            // variants sử dụng giá trị css thuần
            open: {
                display: "none",
            },
            closed: {
                display: "flex"
            }
        }}
        initial={"closed"}
        animate={"open"}

    >
    </motion.div>
  )
}

export default PageTransition