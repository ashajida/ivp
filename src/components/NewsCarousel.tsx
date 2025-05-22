"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import NewsCard from "./NewsCard";

const NewsCarousel = () => {
  return (
    <section className="py-10 w-full overflow-hidden">
      <div className="container px-4 mx-auto overflow-visible">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Featuring News</h2>
          <div className="flex items-center gap-1">
            <button
              className="arrow-left arrow cursor-pointer "
              aria-label="Previous"
            >
              <MdArrowBackIos />
            </button>
            <button
              className="arrow-right arrow cursor-pointer"
              aria-label="Next"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={1}
          className="flex w-full !overflow-visible"
          onSlideChange={() => console.log("slide change")}
          watchSlidesProgress={true}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-4.jpg"
              url="/news/1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-5.jpg"
              url="/news/1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-5.jpg"
              url="/news/3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-4.jpg"
              url="/news/1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-5.jpg"
              url="/news/1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="/images/img-5.jpg"
              url="/news/3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default NewsCarousel;
