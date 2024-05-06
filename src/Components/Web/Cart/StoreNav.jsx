import React, { useContext } from 'react';
import { BsCart3, BsHeart, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CategoriesNav from './CategoriesNav.jsx';

import './Store.css';
import './StoreMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Context/FeatureUser.jsx';
import { CartContext } from '../Context/FeatureCart.jsx';


export default function StoreNav() {
    let { userToken, setUserToken, userData, setUserData } = useContext(UserContext);
    let { count } = useContext(CartContext);

    const logOut = () => {
        localStorage.removeItem('userToken');
        setUserToken(null);
        setUserData(null);
        navigate('/');
    }

    return (
        <section className='store '>
            <div className='container-fluid '>



                <div className='row d-flex  bg-light shadow-bottom '>

                    <div className='col-lg-2 d-flex align-items-center '>
                        <div className=" d-flex ">
                            <Link className='d-flex align-items-center' to='/products/cart'>
                                <span className="badge badge-info text-white bg-color rounded-circl">{count}</span>
                                <div className="store-icon  ms-1">
                                    <BsCart3 />
                                </div>
                            </Link>

                            <div className='d-flex align-items-center ms-3'>
                                <span className="badge badge-info text-white bg-color rounded-circl">{count}</span>
                                <div className="store-icon  ms-1">
                                    <BsHeart />
                                </div>
                            </div>

                            <div className='d-flex align-items-center ms-3'>
                                <li className="dropdown d-flex align-self-start justify-content-center">
                                    <a href="#" role="button" id="hoverDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="store-icon w-100">
                                            <BsPerson className='person-icon '/>
                                        </div>
                                    </a>

                                    <ul className="dropdown-menu  ml-5 drop-ul  "> 
                                        {!userToken ? <>
                                            <li><Link className="dropdown-item" to="/register">إنشاء حساب</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/login">تسجيل الدخول</Link></li>
                                        </>
                                            : <>
                                                <li><Link className="dropdown-item" to="/profile">{userData ? userData.userName : 'شارك معنا'}
                                                </Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" onClick={logOut}>تسجيل خروج</Link></li>
                                            </>

                                        }

                                    </ul>
                                </li>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-8 department-store pe-5 pt-3 '>
                        <CategoriesNav />
                    </div>
                    <Link className="navbar-brand mb-0 h1 font-style col-lg-2 d-flex align-items-center" to='/'>
                        CYCLING IN PALESTINE
                        <FontAwesomeIcon icon={faRoute} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
