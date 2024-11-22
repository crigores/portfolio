import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import BarbershopContext from "../../context/BarbershopContext";

export default function Main() {
  const { isLogged } = useContext(BarbershopContext)

  useEffect(() => {
    console.log(isLogged)
  }, [isLogged])

  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}
