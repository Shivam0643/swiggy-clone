import React, { useEffect, useState,useRef } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
  const [data, setData] = useState([]);

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const topOffset = componentRef.current.getBoundingClientRect().top;
        setIsAtTop(topOffset <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <>
    <div className="max-w-[1200px] mx-auto px-2 ">
      <div className="my-5 flex items-center justify-between">
        <div className="text-[25px] font-semibold">
        Restaurants with online food delivery in Nagpur
        </div>
      </div>
      <div  ref={componentRef}
      className={isAtTop ? "fixed top-0 z-[9999999] bg-white w-full left-0" : ''}>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-6 ">
            <div className="p-3 rounded-full shadow border-[1px]">filter</div>
            <div className="p-3 rounded-full shadow border-[1px]">Sort By</div>
            <div className="p-3 rounded-full shadow border-[1px]">New on Swiggy</div>
            <div className="p-3 rounded-full shadow border-[1px]">Pure Veg</div>
            <div className="p-3 rounded-full shadow border-[1px]">Offers</div>
            <div className="p-3 rounded-full shadow border-[1px]">Rs. 300-rs.600</div>
            <div className="p-3 rounded-full shadow border-[1px]">Less than Rs.300</div>
            
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {
            data.map(
                (d,i) => {
                    return < Card {...d}/>
                }
            )
        }
      </div>
      <hr className='my-6 border-[1px]' />
    </div>
    </>
  );
}
