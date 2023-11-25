import { Button, Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const BannerSlide = () => {
  return (
    <div >
      <Carousel loop={true} className="overflow-hidden">
        <div className="relative md:h-[380px] h-280px w-full ">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Smart Living, Smarter Savings
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Transform your home into a Smart Haven - Upgrade Today!
              </Typography>
              <Button  color="white"  className="py-2 hover:shadow-md  hover:shadow-yellow-500">
              <Link to='/shop' >Shop Now</Link>
            </Button>
            </div>
          </div>
        </div>
        <div className="relative md:h-[380px] h-280px w-full ">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="md:h-[380px] h-280px w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Our Best Sellers Showcase
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
              A handpicked selection of the most popular electronics.
              </Typography>
              <Button color="white"  className="py-2 hover:shadow-md  hover:shadow-yellow-500">
              <Link to='/best-seller' >View Now</Link>
            </Button>
            </div>
        
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlide;
