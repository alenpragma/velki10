"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "../Login/Login";

const imageApi = [
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/virtual.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/kabaddi.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/sports.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/live-casino.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/blog.webp",
  },
];

const TopGameData = ({ username, password }) => {
  console.log(username?.value);
  //   console.log(username);
  const [isLoginShow, setIsLoginShow] = useState(false);
  const handleLoginToggle = () => {
    setIsLoginShow(!isLoginShow);
  };
  return (
    <div className="my-3">
      <div className={`${username?.value === undefined ? "show" : "hidden"}`}>
        <Login
          isLoginShow={isLoginShow}
          handleLoginToggle={handleLoginToggle}
        />
      </div>
      <Container>
        <div className="grid grid-cols-12 md:gap-3 gap-2 ">
          {imageApi.map((item, i) => (
            <Link
              href={`${username?.value === undefined ? "" : "/school"}`}
              key={i}
              className="md:col-span-6 col-span-6 md:h-[300px] h-[150px] relative"
              onClick={handleLoginToggle}
            >
              <Image
                className="w-full h-full"
                src={item.image}
                alt="card"
                width={500}
                height={500}
              />
              <div className="bg-[#0000005b] absolute bottom-0 right-0 left-0">
                <div className="relative">
                  <h3 className="font-semibold absolute text-white py-2 left-3 top-0 bottom-0 my-auto md:text-[18px] text-[12px]">
                    Rummy
                  </h3>
                  <div className="bg-primary py-2 flex justify-end top-game-path">
                    <button className="font-semibold md:text-[18px] text-[12px] md:pr-4 pr-1">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="md:col-span-3 col-span-6 md:h-[300px] h-[150px] relative">
            <Image
              className="w-full h-full"
              src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/banner_7mojos-half.webp"
              alt="card"
              width={500}
              height={500}
            />
            <div className="bg-[#0000005b] absolute bottom-0 right-0 left-0">
              <div className="relative">
                <h3 className="font-semibold absolute text-white py-2 left-3 top-0 bottom-0 my-auto md:text-[18px] text-[12px]">
                  Rummy
                </h3>
                <div className="bg-primary py-2 flex justify-end small-game-path ">
                  <button className="font-semibold md:text-[18px] text-[12px] pr-2">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 col-span-6 md:h-[300px] h-[150px] relative">
            <Image
              className="w-full h-full"
              src="https://skyexcchange.com/assets/images/matchbox/Aviator.png"
              alt="card"
              width={500}
              height={500}
            />
            <div className="bg-[#0000005b] absolute bottom-0 right-0 left-0">
              <div className="relative">
                <h3 className="font-semibold absolute text-white py-2 left-3 top-0 bottom-0 my-auto md:text-[18px] text-[12px]">
                  Rummy
                </h3>
                <div className="bg-primary py-2 flex justify-end small-game-path">
                  <button className="font-semibold md:text-[18px] text-[12px] pr-2">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopGameData;
