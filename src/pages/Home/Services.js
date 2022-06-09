import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div>
           <h1 className='d-flex justify-content-center text-white'>Our Services</h1>

            <div class="container mt-4 d-flex justify-content-center mt-5">

                <div class="row g-5 ">

                    <div class="col-md-4 border-right ">
                        <div class="cards">


                            <div class="first bg-white p-4 text-center">
                                <img src="https://img.icons8.com/clouds/100/000000/box.png" />

                                <h5>Backend Support</h5>
                                <p class="line1">No limitation - Its got everything that you 'll need as you grow</p>

                            </div>

                        </div>

                    </div>



                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <div class=" second bg-white p-4 text-center">
                                <img src="https://img.icons8.com/clouds/100/000000/groups.png" />

                                <h5>Web design</h5>
                                <p class="line2">$50/month gets you 10 users, and you can add more $10 pe user</p>

                            </div>
                        </div>

                    </div>




                    <div class="col-md-4">

                        <div class="cards">
                            <div class=" third bg-white p-4 text-center">
                                <img src="https://img.icons8.com/fluent/100/000000/trophy.png" />
                                <h5>World Class Support</h5>
                                <p class="line3">We'll help you get started and be there when you have questions</p>
                            </div>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;