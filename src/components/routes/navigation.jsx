
import { Outlet, Link } from "react-router-dom"

const Navigation = () => {
    return (
      <>
       <div className="navigation h-16 w-full flex justify-between mb-6">
       <Link className="logo-container h-full w-16 p-6" to={'/'}>
        <div> Logo</div>
       </Link>
       
       <div className="nav-links-container  w-1/2 h-full flex items-center justify-end text-sm cursor-pointer"> 

        <Link to='/shop'className="nav-links py-2.5 px-2.5">SHOP</Link>
        <Link to='' className="nav-links py-2.5 px-2.5">CONTACT </Link>
        <Link to='/sign-in' className="nav-links py-2.5 px-2.5">SIGN IN</Link>
        

        </div>
      </div>
      <Outlet />
      </> 
    )
  }

  export default Navigation