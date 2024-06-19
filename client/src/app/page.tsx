import Advantages from "@/components/Advantages/Advantages";
import Hello from "@/components/Hello/Hello";
import Staps from "@/components/Staps/Staps";
import Banner from "@/components/Banner/Banner";
// import Vacancy from "@/components/Vacancy/Vacancy";
// import Catalog from "@/components/Catalog/Catalog";
// import Partners from "@/components/Partners/Partners";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hello />
      <Advantages />
      {/* <Vacancy /> */}
      <Banner />
      {/* <Catalog /> */}
      <Staps />
      {/* <Partners/> */}
      <Footer />
    </main>
  );
}
