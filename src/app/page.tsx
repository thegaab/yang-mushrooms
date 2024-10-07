import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import Recipes from "@/components/recipes";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <About/>
      <Products/>
      <Recipes/>
      <Footer/>
    </div>
  );
}
