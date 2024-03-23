import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
const SilderFile = () => {
  //   useEffect(() => {
  //     new Swiper(".swiper-container", {
  //       direction: "horizontal",
  //       loop: true,
  //       Navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //     });
  //   }, []);
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-black overflow-hidden">
      <div className=" container mx-auto px-3 ">
        {/* <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide text-white  text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 1
            </div>
            <div className="swiper-slide text-white text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 2
            </div>
            <div className="swiper-slide text-white text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 3
            </div>
            <div className="swiper-slide text-white text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 4
            </div>
            <div className="swiper-slide text-white text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 5
            </div>
            <div className="swiper-slide text-white text-center bg-red-500 py-5 px-10 mx-3 ">
              Slide 6
            </div>
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev text-white">{"<"}</div>
          <div class="swiper-button-next text-white">{">"}</div>
        </div> */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={true}
          loop={true}
          slidesPerView={3}
          speed={300}
          autoplay={true}
        >
          <SwiperSlide>
            {
              <div className="bg-red-600 text-white text-center ">
                Slide one
              </div>
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <div className="bg-green-600 text-white text-center ">
                Slide Two
              </div>
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <div className="bg-blue-600 text-white text-center ">
                Slide Three
              </div>
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              <div className="bg-yellow-600 text-white text-center ">
                Slide Four
              </div>
            }
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SilderFile;
