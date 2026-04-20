import Footer from "@/components/footer/page";
import NavBar from "@/components/nav-bar/page";
import Home from "@/contents/home/page";

export default function App() {
  return (
    <div className="relative max-w-300 mx-auto px-5">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
