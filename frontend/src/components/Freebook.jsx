import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards';
export default function Freebook() {

    const filterData = list.filter((item) => item.category === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //    console.log(filterData)


    
    return (
        <div>
            <div className="bg-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col ">

                <div>
                    <h1 className="font-semibold text-x pb-2 mt-16">Free Offers Course</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur perspiciatis tempora voluptas blanditiis libero eaque ut laboriosam sapiente ipsa?</p>
                </div>

                <div className="mt-10">
                    <Slider {...settings}>

                        {filterData.map((item) => (
                            <Cards item={item} key={item.id} />
                            
                        ))}

                    </Slider>
                </div>

            </div>

        </div>
    )
}
