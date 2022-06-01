import React from "react";
import productImg1 from "../img/product1.png";
import productImg2 from "../img/product2.png";
import productImg3 from "../img/product3.png";
import productImg4 from "../img/product1.png";
export default function MainContent(){
    return(
        <main className="App-body">
            <div className="container">
                <div className="heading">
                    <h2>Online Experiences</h2>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
                <div className="App-sell">
                        <div className="App-sell-item">
                            <a href="#" className="App-item-link">
                            <div className="App-sell-item-img">
                                <img src={productImg1} className="item-img" alt="product1"></img>
                                <div className="App-sell-item-img-badge">
                                    <span class="badge bg-light">Sold out</span>
                                </div>
                            </div>
                            <div className="App-sell-item-dec">
                                <div className="rating">
                                    <div className="rattings">
                                        <div class="rattings-given"></div>
                                    </div>
                                    <p className="total-ratting">5.0 <span className="total-sell text-light">(6)</span> <sup><strong className="text-light">.</strong></sup> <span className="which-country-sell text-light">USA</span></p>
                                </div>
                                <div className="title"><p>Life lessons with Katie Zaferes</p></div>
                                <div className="price">$136/<span className="price-for-what text-light">person</span></div>
                            </div>
                            </a> 
                        </div>
                        <div className="App-sell-item">
                            <a href="#" className="App-item-link">
                            <div className="App-sell-item-img">
                                <img src={productImg2} className="item-img" alt="product1"></img>
                                <div className="App-sell-item-img-badge">
                                    <span class="badge bg-light">Online</span>
                                </div>
                            </div>
                            <div className="App-sell-item-dec">
                                <div className="rating">
                                    <div className="rattings">
                                        <div class="rattings-given" style={{width:'20px'}}></div>
                                    </div>
                                    <p>5.0 <span className="total-sell text-light">(30)</span> <sup><strong className="text-light">.</strong></sup> <span className="which-country-sell text-light">USA</span></p>
                                </div>
                                <div className="title"><p>Learn wedding photography</p></div>
                                <div className="price">$125/<span className="price-for-what text-light">person</span></div>
                            </div>
                            </a> 
                        </div> 
                        <div className="App-sell-item">
                            <a href="#" className="App-item-link">
                            <div className="App-sell-item-img">
                                <img src={productImg3} className="item-img" alt="product1"></img>
                                <div className="App-sell-item-img-badge">
                                    <span class="badge bg-light">New</span>
                                </div>
                            </div>
                            <div className="App-sell-item-dec">
                                <div className="rating">
                                    <div className="rattings">
                                        <div class="rattings-given" style={{width:'12px'}}></div>
                                    </div>
                                    <p>4.9 <span className="total-sell text-light">(8)</span> <sup><strong className="text-light">.</strong></sup> <span className="which-country-sell text-light">USA</span></p>
                                </div>
                                <div className="title"><p>Group Mountain Biking</p></div>
                                <div className="price">$50/<span className="price-for-what text-light">person</span></div>
                            </div>
                            </a> 
                        </div>
                        <div className="App-sell-item">
                            <a href="#" className="App-item-link">
                            <div className="App-sell-item-img">
                                <img src={productImg4} className="item-img" alt="product1"></img>
                                <div className="App-sell-item-img-badge">
                                    <span class="badge bg-light">New</span>
                                </div>
                            </div>
                            <div className="App-sell-item-dec">
                                <div className="rating">
                                    <div className="rattings">
                                        <div class="rattings-given"></div>
                                    </div>
                                    <p>5.0 <span className="total-sell text-light">(6)</span> <sup><strong className="text-light">.</strong></sup> <span className="which-country-sell text-light">USA</span></p>
                                </div>
                                <div className="title"><p>Life lessons with Katie Zaferes</p></div>
                                <div className="price"><del className="text-light discount">$136 </del>$125/<span className="price-for-what text-light">person</span></div>
                            </div>
                            </a> 
                        </div>
                </div>
            </div>
        </main>
    )
}