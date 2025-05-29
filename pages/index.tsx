import About from "@/components/About";
import Contact from "@/components/Contact";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Testimonials />
      <Partners />
      <Galery />
      <Contact />
    </>
  );
}
