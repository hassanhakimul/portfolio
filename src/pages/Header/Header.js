import React from 'react';
import './Header.css'
import hi from '../../images/hi.jpg'
const Header = () => {
    return (
        <div>
        <div class="header-blue">
            <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div class="container-fluid"><a class="navbar-brand" href="#">Portfolio</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only"></span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">About</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Services</a></li>
                        </ul>
                        <form class="form-inline mr-auto" target="_self">
                            <div class="form-group"><label for="search-field"><i class="fa fa-search text-white"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"/></div>
                        </form><span class="navbar-text"> <a class="login" href="">Log In</a></span><a class="btn btn-light action-button" role="button" href="">Signup</a></div>
                </div>
            </nav>
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>Hakimul Hassan</h1>
                        <p>My name is Hakimul Hasan. I am an easy guy to work with. I work hard on the task at hand until you are completely satisfied.
I've survived in this world of development and will help you Achieve the same. Looking forward to work with you, It's Gonna be Great!
<br/></p>
                        <button
                            class="btn btn-light btn-lg action-button" type="button">Learn More<i class="fa fa-long-arrow-right ml-2"></i></button>
                    </div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="iphone-mockup">
						<img className='img-fluid' src={hi}/>
                           <div class="screen">
							</div>
							
						
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;