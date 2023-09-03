import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { total_item } = useCartContext()
    const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
    console.log("🚀 ~ file: Header.jsx:9 ~ Header ~ user:", user)
    const menu_button = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Products',
            link: '/products'
        },
        {
            name: 'Contact',
            link: '/contact'
        },

    ]
    const [menu, setMenu] = useState(false)

    return (
        <nav className='top-0 fixed left-0 w-full z-50'>
            {/* leftside */}
            <div className='bg-gradient-to-r from-blue-600 to-blue-400 w-full  left-0 p-2 flex justify-between md:items-center'>
                <div className="leftside w-20 h-10 flex">
                    <Link to='/'><img src="https://tse4.mm.bing.net/th?id=OIP.t0Z7dfyadoYtTCszkckC4wHaE7&pid=Api&P=0&h=180" className='w-full h-full' alt="logo" /></Link>
                    <div className="handlemenu absolute right-1.5 cursor-pointer" onClick={() => setMenu(!menu)}>
                        {menu ? <i className=" sm:hidden fa-solid fa-xmark"></i> : <i className="sm:hidden fa-solid fa-bars"></i>}
                    </div>
                </div>
                {/* rightmenu */}
                <div className={`rightsection ${menu ? ' mt-5 grid place-items-center w-full  ' : 'hidden'} sm:flex gap-4`}>
                    {menu_button.map((item, i) => {
                        return <NavLink to={item.link} key={i}>{item.name}</NavLink>
                    })}

                    <Link to='/cart'><div className="relative">
                        <i className="fas fa-shopping-cart text-3xl"></i>
                        <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                            {total_item}
                        </div>
                    </div></Link>

                    {
                        isAuthenticated ?
                        <div className=' shadow-lg rounded-sm border p-2 border-black bg-gradient-to-r from-blue-600 to-blue-400'>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    </div> : <div className=' shadow-lg rounded-sm border p-2 border-black bg-gradient-to-r from-blue-600 to-blue-400'>
                                <button onClick={() => loginWithRedirect()}>Log In</button>
                            </div>
                            
                    }



        { isAuthenticated && 
         <div className='grid'>
             <img
                src={user.picture}
                className="rounded-full w-[30px] h-[30px] "
             
                alt=""
                loading="lazy" />
                <span className='text-[8px]'>{user.given_name}</span>
         </div>
            
            }
            </div>
                </div>

        </nav>
    )
}

export default Header