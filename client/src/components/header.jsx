import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {

  const [isChecked,setIsChecked]=useState(false)
  const handleCheck = ()=>{
  setIsChecked(!isChecked);
  };


    const categoriesData = [
        {
          title: 'Topwear',
          links: [
            { label: 'Printed T-Shirts', to: '/category/topwear/printed-tshirts' },
            { label: 'Oversized T-Shirts', to: '/category/topwear/oversized-tshirts' },
            { label: 'Plain T-Shirts', to: '/category/topwear/plain-tshirts' },
            { label: 'Fashion T-Shirts', to: '/category/topwear/fashion-tshirts' },
            { label: 'Activewear T-Shirts', to: '/category/topwear/activewear-tshirts' },
            { label: 'Full Sleeve T-Shirts', to: '/category/topwear/full-sleeve-tshirts' },
            { label: 'Half Sleeve T-Shirts', to: '/category/topwear/half-sleeve-tshirts' }
          ]
        },
        {
          title: 'Topwear', // Example repeated for clarity
          links: [
            { label: 'Printed T-Shirts', to: '/category/topwear/printed-tshirts' },
            { label: 'Oversized T-Shirts', to: '/category/topwear/oversized-tshirts' },
            { label: 'Plain T-Shirts', to: '/category/topwear/plain-tshirts' },
            { label: 'Fashion T-Shirts', to: '/category/topwear/fashion-tshirts' },
            { label: 'Activewear T-Shirts', to: '/category/topwear/activewear-tshirts' },
            { label: 'Full Sleeve T-Shirts', to: '/category/topwear/full-sleeve-tshirts' },
            { label: 'Half Sleeve T-Shirts', to: '/category/topwear/half-sleeve-tshirts' }
          ]
        },
        {
          title: 'Topwear', // Another example repeated
          links: [
            { label: 'Printed T-Shirts', to: '/category/topwear/printed-tshirts' },
            { label: 'Oversized T-Shirts', to: '/category/topwear/oversized-tshirts' },
            { label: 'Plain T-Shirts', to: '/category/topwear/plain-tshirts' },
            { label: 'Fashion T-Shirts', to: '/category/topwear/fashion-tshirts' },
            { label: 'Activewear T-Shirts', to: '/category/topwear/activewear-tshirts' },
            { label: 'Full Sleeve T-Shirts', to: '/category/topwear/full-sleeve-tshirts' },
            { label: 'Half Sleeve T-Shirts', to: '/category/topwear/half-sleeve-tshirts' }
          ]
        }
      ];
      

  return (
    <header className="main-header" style={{ width: '100%', zIndex: 100, position: 'fixed' }}>
      <nav className="upper-nav">
        <ul className="left flex">
          <li><Link to="/offer">Offer</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <nav className="main-nav">
        {/* <div className="panda1" style={{ position: 'absolute' }}>
          <img className="panda11" src="/assets/gif/croppedpanda.gif" alt="" style={{ height: '55px' }} />
        </div>
        <div className="panda2" style={{ position: 'absolute', left: 'calc(100% - 41px)' }}>
          <img className="panda22" src="/assets/gif/flippedpandafinal.gif" alt="" style={{ height: '55px' }} />
        </div> */}
        <ul className="main-ul flex">
          <div className="logo-to-search flex vwlogo">
            <li><Link to="/"><img className="logo-logini" src="" alt="" />logo</Link></li>
            <li className="index-search">
              <form action="" method="get" className="index-search-engine">
                <input type="text" className="ss" />
                <button type="submit" className="dd">
                  
                  <Link to="/findprods"><img className="ddd" src="/assets/img/s.png" alt="" /></Link>
                </button>
              </form>
            </li>
          </div>
          <div className="profile-to-language">
            <li className="profile">
              <i className="fa fa-user-circle-o" style={{ fontSize: '25px', height: '40px' }}>
                <div className="profile-dropdown">
                  <ul className="dropdown-to-profile">
                    <div>
                      <li>WELCOME TO</li>
                      <li>To access account and manage orders</li>
                      <li>
                        <Link to="/login">
                          <button className="btn-login" type="submit" style={{ size: '2em', color: 'red' }}>
                            SIGN IN
                          </button>
                        </Link>
                      </li>
                    </div>
                    <div>
                      <li><Link to="/orders">Orders</Link></li>
                      <li><Link to="/wishlist">Wishlist</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </div>
                    <div>
                      <li><Link to="/account">My Account</Link></li>
                      <li><Link to="/settings">Settings</Link></li>
                      <li><Link to="/change-password">Change Password</Link></li>
                    </div>
                    <li>
                      <button className="btn-logout" type="submit" style={{ size: '2em', color: 'red' }}>
                        LOG OUT
                      </button>
                    </li>
                  </ul>
                </div>
              </i>
            </li>
            <li className="wishlist">
              <Link to="/wishlist">
                <i id="wishlist-icon" className="fa fa-heart" style={{ fontSize: '25px' }}></i>
              </Link>
            </li>
            <li className="bag">
              <Link to="/bag">
                <i className="fa fa-shopping-bag" style={{ fontSize: '25px' }}></i>
              </Link>
            </li>
          </div>
          <label className="hamburgerlable">
            <input type="checkbox" onChange={handleCheck} />
            <span className="menu">
              <span className="hamburger"></span>
            </span>
            <ul style={{ height: '28%%', width: '90%', display: isChecked ?  'block' : 'none' }}>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/login"><li>SIGN IN</li></Link>
             
            </ul>
          </label>
        </ul>
      </nav>
      <nav className="lowerNav z1">
        <div className="lowerNavObjects">
          <ul className="flex left marginLowerNav">
            <li className="cursorPointer">LIVE NOW!</li>
            <li className="man cursorPointer" style={{ height: '28px' }}>
              BOY
              <div className="manDropdown">
              <ul className="dropDown flex">

      {categoriesData.map((category, index) => (
        <div key={index} style={{ paddingLeft: index === 0 ? '0' : index === 1 ? '23px' : '26px' }}>
          <h4><Link to={`/category/${category.title}`}>{category.title}</Link></h4>
          {category.links.map((link, idx) => (
            <li key={idx}><Link to={link.to}>{link.label}</Link></li>
          ))}
        </div>
      ))}

           </ul>
              </div>
            </li>
            <li className="woman cursorPointer" style={{ height: '28px' }}>
              GIRL
              <div className="womanDropdown">
              <ul className="dropDown flex">

              {categoriesData.map((category, index) => (
        <div key={index} style={{ paddingLeft: index === 0 ? '0' : index === 1 ? '23px' : '26px' }}>
          <h4><Link to={`/category/${category.title}`}>{category.title}</Link></h4>
          {category.links.map((link, idx) => (
            <li key={idx}><Link to={link.to}>{link.label}</Link></li>
          ))}
        </div>
      ))}
            </ul>
              </div>
            </li>
            <li className="kid cursorPointer" style={{ height: '28px' }}>
              FOR ALL
              <div className="kidDropdown">
              <ul className="dropDown flex">
                 {categoriesData.map((category, index) => (
        <div key={index} style={{ paddingLeft: index === 0 ? '0' : index === 1 ? '23px' : '26px' }}>
          <h4><Link to={`/category/${category.title}`}>{category.title}</Link></h4>
          {category.links.map((link, idx) => (
            <li key={idx}><Link to={link.to}>{link.label}</Link></li>
          ))}
        </div>
      ))}
      </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
