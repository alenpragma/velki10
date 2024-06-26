import Container from "@/components/shared/Container";
import Image from "next/image";

const GameGalleryApi = [
  { image: "https://skyexcchange.com/assets/images/matchbox/banner_evo.png" },
  { image: "https://skyexcchange.com/assets/images/matchbox/banner_ezugi.png" },
  { image: "https://skyexcchange.com/assets/images/matchbox/Aviatrix.png" },
  { image: "https://skyexcchange.com/assets/images/matchbox/oneplay.png" },
  { image: "https://skyexcchange.com/assets/images/matchbox/onetouch.png" },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_horsebook-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/minesweeper.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_horsebook-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/blackjack.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/rummy.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/betgames.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/sicbo.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_7up7down-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_andarBaharVR-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/coin-toss.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_TeenPatti2020-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_NumberKing-half.webp",
  },
  {
    image:
      "https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/banner_NumberKing-half.webp",
  },
];
const GameGallery = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="grid grid-cols-12 gap-3">
          {GameGalleryApi.map((item, i) => (
            <div
              key={i}
              className="md:col-span-4 col-span-6 md:h-[300px] h-[150px] relative"
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
                  <div className="bg-primary py-2 flex justify-end medium-game-path">
                    <button className="font-semibold md:text-[18px] text-[12px] md:pr-4 pr-1">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GameGallery;
