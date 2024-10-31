import ContactForm from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Services from "@/components/services";
import SideBarSocialMedia from "@/components/sideBar";
import Testimonials from "@/components/Testimonial";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="bg-white font-poppinsExtraLight">
      {/* <SideBarSocialMedia /> */}
      <Header />
      <Hero />
      <Welcome />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
