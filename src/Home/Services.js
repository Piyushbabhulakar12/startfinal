import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";

function Services() {
    return (
      <div>
       
          
       <div class="container section_margin_top">
            <h2 class="heading_text_about">Services</h2>
        </div>

        <div class="container gallary_margin_top">
        <Swiper
        style={{"--swiper-navigation-color": "#FFF" , "--swiper-navigation-size": "39px" }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} 
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
       
        className="mySwiper"
      >
        <SwiperSlide>
             
             <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>

        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>

        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>
            
        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>

        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>
          
        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>

        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>

        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
        <SwiperSlide>
             
        <p class="card_para">Lorem Ipsum </p>
             <h4 class="card_head">Wedding Video Editor </h4>
             <p class="cart_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </SwiperSlide>
      </Swiper>
           

        </div>

       


      </div>
    );
  }
  
  export default Services;