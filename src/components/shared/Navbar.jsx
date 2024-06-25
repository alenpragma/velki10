import Link from "next/link";
import Container from "./Container";

<nav className="flex items-center">
  <Link href="#" className="px-2 py-1 text-[10px] border-r border-secondary">
    Home
  </Link>
  <Link href="#">In-Play</Link>
  <Link href="#">Football</Link>
  <Link href="#">Cricket</Link>
  <Link href="#">Baseball</Link>
  <Link href="#">Casino</Link>
  <Link href="#">Election 0</Link>
</nav>;

const navItem = [
  { name: "Home" },
  { name: "In-Play" },
  { name: "Football" },
  { name: "Cricket" },
  { name: "Casino" },
  { name: "Election" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="flex justify-between items-center py-3 px-5">
        <div className="flex items-center gap-4 py-[2px]">
          <h3 className="font-semibold text-[20px] text-primary ">Velki</h3>
          <form>
            {" "}
            <input
              type="text"
              placeholder="Search..."
              className=" px-5  text-black md:w-[250px] w-[100px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
            />
          </form>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-primary px-2 py-1 rounded w-[100px]">
            Login
          </button>
          <button className="bg-primary px-2  py-1  rounded  w-[100px] ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-primary px-5">
        <nav className="flex items-center">
          {navItem.map((item, i) => (
            <Link
              key={i}
              href="#"
              className="px-3 py-1 text-[14px]  border-r border-secondary font-semibold text-black "
            >
              <span className="hover:border-b border-black duration-300">
                {" "}
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
