import Hero from "../components/landing/Hero";
import Products from "../components/landing/products";
import About from "../components/landing/about";
import Brands from "../components/landing/brands";
import Contact from "../components/landing/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Brands />
      <Contact />
    </>
  );
}
