   "use client"
import React from "react";
import { usePathname } from "next/navigation"
import Link from "next/link"
const products = [
  {
    id: 1,
    title: "Next.js SaaS Dashboard",
    description:
      "A modern admin dashboard built with Next.js, TypeScript, and Tailwind CSS.",
    price: "$49",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "Portfolio Website Template",
    description:
      "Clean developer portfolio template with animations and responsive design.",
    price: "$29",
    tag: "Popular",
  },
  {
    id: 3,
    title: "E-Commerce Starter Kit",
    description:
      "Full-stack e-commerce starter with cart, auth, and checkout system.",
    price: "$59",
    tag: "New",
  },
  {
    id: 4,
    title: "Blog Platform UI",
    description:
      "Modern blog UI with markdown support and SEO optimization.",
    price: "$19",
    tag: "Trending",
  },
];

const ProductPage = () => {
  const pathname=usePathname()
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-700 px-6 py-16">
      
      {/* HEADER */}
      <div className="text-center text-white mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Our Products </h1>
        <p className="text-gray-200 mt-3">
          High-quality templates and tools for developers
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition"
          >
            {/* TAG */}
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
              {product.tag}
            </span>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mt-4">
              {product.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-200 text-sm mt-2">
              {product.description}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-6">
              <span className="text-lg font-bold">{product.price}</span>

              <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
          <div className="flex gap-4 text-white px-4 mt-4">

      <Link
        className={pathname === "/" ? "text-red-500" : ""}
        href="/"
      >
        Home
      </Link>

      <Link
        className={pathname === "/about" ? "text-red-500" : ""}
        href="/about"
      >
        About
      </Link>
       <Link
        className={pathname === "/contact" ? "text-red-500" : ""}
        href="/contact"
      >
        contact
      </Link>
       <Link
        className={pathname === "/product" ? "text-red-500" : ""}
        href="/product"
      >
        About
      </Link>
       <Link
        className={pathname === "/user" ? "text-red-500" : ""}
        href="/user"
      >
        user
      </Link>

    </div>
    </div>
  );
};

export default ProductPage;