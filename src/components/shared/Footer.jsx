import Link from "next/link";
import Container from "./Container";

const navItem = [
  { name: "  Privacy Policy" },
  { name: "Terms and Conditions" },
  { name: "Rules and Regulations" },
  { name: "Responsible Gaming" },
  { name: "Self-exclusion Policy" },
  { name: "Underage Policy" },
];

const Footer = () => {
  return (
    <div className="w-full border-t border-secondary pt-8 md:mb-0 mb-24">
      <Container>
        <div className="flex flex-wrap item-center justify-center gap-2 text-secondary">
          {navItem.map((item, i) => (
            <Link
              key={i}
              href="/"
              className="border-b border-secondary hover:text-[#000] duration-300"
            >
              {item.name} -
            </Link>
          ))}
        </div>
        <p className="text-center text-secondary mt-5">&copy; All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
