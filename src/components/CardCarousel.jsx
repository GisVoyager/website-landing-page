// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
    {
      imageSrc: "/images/passport.png",
      title: "Visa Application",
      description: "Learn More>>"
    },
    {
      imageSrc: "/images/student.png",
      title: "Scholarship Guidance",
      description: "Learn More>>"
    },
    {
      imageSrc: "/images/school.png",
      title: "University Admissions",
      description: "Learn More>>"
    },
    {
      imageSrc: "/images/conversation.png",
      title: "Educational Counselling",
      description: "Learn More>>"
    },
    {
      imageSrc: "/images/exam.png",
      title: "Test Preparation",
      description: "Learn More>>"
    },
    // Add more data for additional slides if needed
  ];

function CardCarousel() {

    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        <div>
        {slidesData.map((slide, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <SwiperSlide className="bg-[#74E291] p-4 flex flex-col items-center">
                <img
                src={slide.imageSrc}
                alt="Icon"
                className="h-auto w-[85px] text-white mb-6" // Change the width here
                />
                <p className=" text-xl text-white font-bold">{slide.title}</p>
                <p className=" text-white py-1 mb-12"><a href="">{slide.description}</a></p>
            </SwiperSlide>
            </div>
        ))}
        </div>
        
      </Swiper>

    
    )
  }
  
  export default CardCarousel