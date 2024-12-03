import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecentPosts from "./components/RecentPosts";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <RecentPosts/>
    <FeaturedWork/>
    <Footer/>
   </div>
   
  );
}
