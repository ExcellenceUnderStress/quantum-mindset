
import About from "@/src/components/About";
import Contacts from "@/src/components/Contacts";
import Started from "@/src/components/Started";
import Layout from "@/src/layouts/Layout";
import BookOverview from "@/src/components/BookOverview";

const Index = () => {
  return (
    <Layout>
      {/* Background */}
      <div className="background-bg">
        <div className="background-filter gradient">
          <div
            className="background-img"
            style={{ backgroundImage: "url(images/Untitled-1.png)" }}
          />
        </div>
      </div>
      {/* sections */}
      <Started />
      <BookOverview />
      <About />
      <Contacts />
    </Layout>
  );
};
export default Index;
