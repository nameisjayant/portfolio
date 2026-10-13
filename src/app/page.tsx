import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Works from "@/components/Works";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Works />
        <About />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
