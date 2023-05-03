import "./App.css";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import PromoSection from "./components/promoSection/PromoSection";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <br></br>
      <PromoSection />
      <ProductOverview />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
