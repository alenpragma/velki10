import { getAccessToken } from "@/service/auth.service";
import TopGameData from "./TopGameData";
import { cookies } from "next/headers";

const TopGame = async () => {
  const username = cookies().get("username");
  const password = cookies().get("password")?.value;

  return (
    <div className="my-3">
      <TopGameData username={username} password={password} />
    </div>
  );
};

export default TopGame;
