import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='text-white'>
<section class="deneb_cta">
	<div class="container">
		<div class="cta_wrapper">
			<div class="row align-items-center">
				<div class="col-lg-7">
					<div class="cta_content">
						<h3>Have Any Project in Mind ?</h3>
						<p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="button_box">
						<a href="#" class="btn btn-warning">Hire Us</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<footer class="deneb_footer">
	<div class="widget_wrapper" style={{ backgroundImage: `url(${require("http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png")})` }}>
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<div class="widget_title">
							<img src="assets/images/logo_1.png" class="img-fluid" alt=""/>
						</div>
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						<ul class="social">
							<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_link">
						<div class="widget_title">
							<h4>Links</h4>
						</div>
						<ul>
							<li><a href="#" className='text-white'>About Us</a></li>
							<li><a href="#" className='text-white'>Services</a></li>
							<li><a href="#" className='text-white'>Portfolio</a></li>
							<li><a href="#" className='text-white'>Blog</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div class="contact_info">
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-phone-alt"></i>
								</div>
								<div class="info">
									<p><a href="tel:+919246147999" className='text-white'>1800-121-3637</a></p>
									<p><a href="tel:+919246147999" className='text-white'>+91 924-614-7999</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-envelope"></i>
								</div>
								<div class="info">
									<p><a href="mailto:info@deneb.com" className='text-white'>info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com" className='text-white'>services@deneb.com</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p>Copyright &copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer> 
        </div>
    );
};

export default Footer;