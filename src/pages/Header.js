import '../css/Header.css'
import head from '../img/hang2.png'
import duahau from '../img/duahau.jpg'
import ship from '../img/ship.png'
import hang4 from '../img/hang4.png'
import cam from '../img/cam.png'
import React, { useState } from "react";
function Header() {
    const [activeCart, setActiveCart] = useState(false);
    const [activeInput, setActiveInput] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);
    const handleCartClick = () => {
        setActiveCart(!activeCart);
        console.log(activeCart);
        setActiveInput(false)
        setActiveLogin(false)
    }
    const handleInputClick = () => {
        setActiveInput(!activeInput);
        setActiveCart(false)
        setActiveLogin(false)
    }
    const handleLoginClick = () => {
        setActiveLogin(!activeLogin);
        setActiveCart(false)
        setActiveInput(false)
    }
    return (
        <>
            <div className='header'>
                <a href="#" className="logo"><i className="fa-solid fa-basket-shopping"></i> groco</a>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#products">Products</a>
                    <a href="#categories">Categories</a>
                    <a href="#review">Review</a>
                    <a href="#blogs">Blogs</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn"></div>
                    <div className="fas fa-search" id="search-btn" onClick={handleInputClick}></div>
                    <div className="fas fa-shopping-cart" id="cart-btn" onClick={handleCartClick}></div>
                    <div className="fas fa-user" id="login-btn" onClick={handleLoginClick}></div>
                </div>
                <form action="" className={`search-form ${activeInput ? 'active' : ''}`} >
                    <input type="search" id="search-box" placeholder="Search here..." />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
                <div className={`shopping-cart ${activeCart ? 'active' : ''}`}>
                    <div className="box">
                        <i className="fas fa-trash"></i>
                        <img src={duahau} alt="" />
                        <div className="content">
                            <h3>Dưa hấu</h3>
                            <span className="price">$4.99</span>
                            <span className="quantity">qty: 1</span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-trash"></i>
                        <img src={duahau} alt="" />
                        <div className="content">
                            <h3>Dưa hấu</h3>
                            <span className="price">$4.99</span>
                            <span className="quantity">qty: 1</span>
                        </div>
                    </div>
                    <div className="total">total : $19.69/- </div>
                    <a href="#" className="btn">Checkout</a>
                </div>
                <form className={`login-form ${activeLogin ? 'active' : ''}`} >
                    <h3>login now</h3>
                    <input type="email" placeholder="your email" className="box" />
                    <input type="password" placeholder="your password" className="box" />
                    <p>forget your password <a href="#">click here</a></p>
                    <p>don't have an account <a href="#">create now</a></p>
                    <input type="submit" value="login now" className="btn" />
                </form>
            </div>
            <section className="home" id="home">
                <div className="content">
                    <h3>fresh and <span>organic</span> products for your</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis fugit earum quis temporibus tempora, esse mollitia ratione dolorem dolores deleniti facilis consequatur doloribus quos, ea, necessitatibus architecto? Velit, cum.</p>
                    <a href="#" className="btn">shop now</a>
                </div>
            </section>
            <section className="features" id="features">
                <h1 className="heading">our <span>features</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={head} alt="" />
                        <h3>fresh and organic</h3>
                        <p>Lorem ipsum dolor sit ametggxbxdbxbxdxbxdbxdbxbbdxxbxbxbbd consectetur adipisicing elit. Aut ducimus molestiae ad doloremque assumenda delectus sunt corporis eius deleniti, sapiente soluta ea quos, veniam adipisci incidunt laboriosam autem omnis repellat?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                    <div className="box">
                        <img src={ship} alt="" />
                        <h3>fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus molestiae ad doloremque assumenda delectus sunt corporis eius deleniti, sapiente soluta ea quos, veniam adipisci incidunt laboriosam autem omnis repellat?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                    <div className="box">
                        <img src={hang4} alt="" />
                        <h3>fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus molestiae ad doloremque assumenda delectus sunt corporis eius deleniti, sapiente soluta ea quos, veniam adipisci incidunt laboriosam autem omnis repellat?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>
            </section>
            <section className="products" id="products">
                <h1 className="heading">our <span>products</span></h1>
                <div className="product-slider">
                    <div className="wrapper">
                        <div className="box">
                            <img src={cam} alt="" />
                            <h3>fresh orange</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <a href="#" className="btn">add to cart</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories" id="categories">
                <h1 className="heading">product <span>categories</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={cam} alt="" />
                        <h3>vegitables</h3>
                        <p>updto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src={cam} alt="" />
                        <h3>vegitables</h3>
                        <p>updto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src={cam} alt="" />
                        <h3>vegitables</h3>
                        <p>updto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src={cam} alt="" />
                        <h3>vegitables</h3>
                        <p>updto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                </div>
            </section>
            <section className="review" id="review">
                <h1 className="heading">customer's <span>review</span></h1>
                <div className="review-slider">
                    <div className="wrapper">
                        <div className="box">
                            <img src={cam} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo pariatur maiores dolore sed? Odit est modi, sapiente quasi sequi ipsum, debitis perferendis obcaecati exercitationem a explicabo cupiditate porro unde velit!</p>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogs" id="blogs">
                <h1 className="heading">our <span>blogs</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={cam} alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href="#"><i className="fas fa-user"></i> by user</a>
                                <a href="#"><i className="fas fa-calendar"></i> 1st may, 2023</a>
                            </div>
                            <h3>fresh and organic vegiatables and fruits</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere ex nobis dignissimos accusantium soluta odit repellat in perferendis. Minima atque tenetur libero numquam architecto dicta officiis sint quod odio.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cam} alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href="#"><i className="fas fa-user"></i> by user</a>
                                <a href="#"><i className="fas fa-calendar"></i> 1st may, 2023</a>
                            </div>
                            <h3>fresh and organic vegiatables and fruits</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere ex nobis dignissimos accusantium soluta odit repellat in perferendis. Minima atque tenetur libero numquam architecto dicta officiis sint quod odio.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cam} alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href="#"><i className="fas fa-user"></i> by user</a>
                                <a href="#"><i className="fas fa-calendar"></i> 1st may, 2023</a>
                            </div>
                            <h3>fresh and organic vegiatables and fruits</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere ex nobis dignissimos accusantium soluta odit repellat in perferendis. Minima atque tenetur libero numquam architecto dicta officiis sint quod odio.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3> groco <i className="fas fa-shoppong-basket"></i></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur, dolorem, voluptatibus culpa eum officia obcaecati cupiditate, nisi deserunt recusandae tempore non ea consequatur possimus accusantium a qui minima error.</p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#" className="links"><i className="fas fa-phone"></i>+123-456-7890</a>
                        <a href="#" className="links"><i className="fas fa-phone"></i>+111-222-3333</a>
                        <a href="#" className="links"><i className="fas fa-envelope"></i>tma@gmail.co </a>
                        <a href="#" className="links"><i className="fas fa-map-marker-alt"></i>VietNam</a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>home</a>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>features</a>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>products</a>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>categories</a>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>review</a>
                        <a href="#" className="links"><i className="fas fa-arrow-right"></i>blogs</a>
                    </div>
                    <div className="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="email" />
                        <input type="submit" value="subcribe" className="btn" />
                    </div>
                </div>
                <div className="credit">created by <span>mr. web designer</span>| all rights reserved</div>
            </section>
        </>
    );
}

export default Header;