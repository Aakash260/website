import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow=(props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black"}}
        onClick={onClick}
      />
    );
  }
 
const CommonComponent=({pageName})=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    };
    return <>

        <Slider {...settings} className="shadow-lg">
            <div className="common flex justify-center mt-5">
                <div className="container w-full shadow-lg grid md:grid-flow-col p-20 ">
                    <div className="container_info grid ">
                        <h4 className='text-2xl '>Welcome to {pageName}</h4>
                        <h1 className='font bold text-4xl'>ComfyEats</h1>
                        <h5 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dicta velit tempore quos. Libero, qui sequi iure quo nulla doloribus!</h5>
                        <div className="button flex flex-start"><button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button></div>
                    </div>
                    <div className="contain_img">
                        <img className='h-56 border-r-[40px] border-t-[40px] border-t-blue-400 border-r-blue-400 drop-shadow-lg rounded-md' src="https://www.wallpaperflare.com/static/842/447/760/family-food-supermarket-shop-wallpaper.jpg" alt="img" />
                    </div>
                </div>
            </div>
            <div className="common   flex justify-center mt-5 ">
                <div className="container w-full shadow-lg grid md:grid-flow-col p-20 ">
                    <div className="container_info grid ">
                        <h4 className='text-2xl '>Welcome to Home Page</h4>
                        <h1 className='font bold text-4xl'>ComfyEats</h1>
                        <h5 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dicta velit tempore quos. Libero, qui sequi iure quo nulla doloribus!</h5>
                        <div className="button flex flex-start"><button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button></div>
                    </div>
                    <div className="contain_img">
                        <img className='h-56 border-r-[40px] border-t-[40px] border-t-blue-400 border-r-blue-400 drop-shadow-lg rounded-md' src="https://monocromatico.info/wp-content/uploads/2018/12/happy-family-shopping-happy-family.jpg" alt="img" />
                    </div>
                </div>
            </div>
            <div className="common   flex justify-center mt-5 ">
                <div className="container  shadow-lg grid md:grid-flow-col p-20 ">
                    <div className="container_info grid ">
                        <h4 className='text-2xl '>Welcome to Home Page</h4>
                        <h1 className='font bold text-4xl'>ComfyEats</h1>
                        <h5 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dicta velit tempore quos. Libero, qui sequi iure quo nulla doloribus!</h5>
                        <div className="button flex flex-start"><button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button></div>
                    </div>
                    <div className="contain_img">
                        <img className='h-56 border-r-[40px] border-t-[40px] border-t-blue-400 border-r-blue-400 drop-shadow-lg rounded-md' src="https://www.shopaholicmommy.com/wp-content/uploads/2011/11/120621185.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </Slider>
 
    </>

}

export default CommonComponent