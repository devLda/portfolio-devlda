import { Link } from 'react-router-dom'
import ListNav from '../../utils/listNav'

const WebNav = () => {
  return (
    <nav className='flex'>
        {ListNav?.map((item, index) => {
            return <Link key={index} to={item.path}>
                {item.name}
            </Link>
        })}
    </nav>
  )
}

export default WebNav