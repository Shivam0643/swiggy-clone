import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const [data, setData] = useState([]);
  const [restaurantChains, setRestaurant] = useState([]);

  const [card, setCard] = useState(0);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
    setRestaurant(apiData);
  };

  const nextCard = () => {
    console.log("true")
    setCard(card + 1);
  };

  const prevCard = () => {
    console.log("false")
    setCard(card - 1);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <>
    <div className="max-w-[1200px] mx-auto mb-4 px-2 ">
      <div className="my-5 flex items-center justify-between">
        <div className="text-[25px] font-semibold">
          Top restaurant chains in Maharashtra
        </div>
        <div className="flex">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={prevCard}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={nextCard}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {data.map((d, i) => {
          return <Card width="w-full md:w-[273px]" {...d} key={i} />;
        })}
        <div className='flex overflow-hidden'>
          {restaurantChains.map((Mat, index) => {
            return (
              <div
                style={{
                  transform: `translateX(-${card * 50}%)`,
                }}
                key={index}
                className="w-[170px] shrink-0 duration-500"
              >
                <img src={`/images/${Mat.image}`} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <hr className='my-6 border-[2px]' />
    </div>
    </>
  );
}

export default TopRest;
