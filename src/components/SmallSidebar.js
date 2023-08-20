import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/UserSlice';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
const dispatch = useDispatch()
const {isSidebarOpen} = useSelector((store) => store.user)
const toggle = () => {
  dispatch(toggleSidebar())
}
  return (
    <Wrapper>
        <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
          <div className='content'>
            <button className='close-btn' onClick={toggle}>
              <FaTimes/>
            </button>
            <header>
              <Logo/>
            </header>
            <NavLinks toggleSidebar={toggle}/>

          </div>
        </div>
    </Wrapper>
  )
}

export default SmallSidebar