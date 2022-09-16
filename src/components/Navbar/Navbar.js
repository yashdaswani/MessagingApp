import React ,{ useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { Authcontext } from '../../context/Authcontext'
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const {currentUser} = useContext(Authcontext)
  return (
    <div className='navbar'>
    <span className="logo">Messager</span>
    <div className="user">
    <img src={currentUser.photoURL} alt="" />
        <span >{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>
          <LogoutIcon/>
        </button>
    </div>
  </div>
  )
}

export default Navbar
