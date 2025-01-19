import ContactForm from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Services from "@/components/services";
import SideBarSocialMedia from "@/components/sideBar";
import Testimonials from "@/components/Testimonial";
import Welcome from "@/components/Welcome";
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <div className="bg-white font-poppinsExtraLight">
      {/* <SideBarSocialMedia /> */}
      {/* <Header /> */}
      <div id="hero">
        <Hero />
      </div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <Testimonials /> */}
      <div id="contact">
        <ContactForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
}