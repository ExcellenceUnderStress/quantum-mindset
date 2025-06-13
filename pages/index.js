import About from "@/src/components/About";
import Contacts from "@/src/components/Contacts";
import Started from "@/src/components/Started";
import Layout from "@/src/layouts/Layout";
import { useEffect } from "react";
import BookOverview from "@/src/components/BookOverview";

const Index = () => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax-video"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);
  return (
    <Layout>
      {/* Background */}
      <div
        className="background-bg jarallax-video"
        data-jarallax-video="https://youtu.be/S4L8T2kFFck"
      />
      {/* sections */}
      <Started />
      <BookOverview />
      <About />
      <Contacts />
    </Layout>
  );
};
export default Index;
