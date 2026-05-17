import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Product", href: "/product" },
  { name: "User", href: "/user" },
  { name: "Basic", href: "basic" },
];

const Links = () => {
  return (
    <nav className=" shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 py-4">
        {links.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-white font-medium tracking-wide transition-all duration-300 hover:text-yellow-300"
          >
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Links;