import { BarbershopContextProvider } from "./context/BarbershopContext";
import Main from "./views/main/Main";

export default function Barbershop() {
  return (
    <BarbershopContextProvider>
      <Main />
    </BarbershopContextProvider>
  )
}
