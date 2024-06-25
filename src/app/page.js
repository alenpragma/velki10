import Banner from "@/components/ui/Home/Banner";
import ContactUs from "@/components/ui/Home/ContactUs";
import GameGallery from "@/components/ui/Home/GameGallery";
import TopGame from "@/components/ui/Home/TopGame";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGame />
      <GameGallery />
      <ContactUs />
    </div>
  );
}
