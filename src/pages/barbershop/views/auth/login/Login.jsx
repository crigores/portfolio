import {
  Input,
  Button,
  Typography
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo from '../../../../../assets/barbershop/Logo.jpg'

export default function Login() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-2/3 flex justify-center items-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="bg-white w-1/3 p-5">
        <Typography variant="h4" color="blue-gray">
          Iniciar sesión
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Un gusto tenerte de vuelta! Ingresa con tus credenciales.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Correo
            </Typography>
            <Input
              size="lg"
              placeholder="correo@prueba.es"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Link to="/barbershop/panel">
            <Button className="mt-6" fullWidth>
              Ingresar
            </Button>
          </Link>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Aún no tienes una cuenta?{" "}
            <a href="#" className="font-medium text-gray-900">
              Registrarme
            </a>
          </Typography>
        </form>
      </div>
    </div>
  );
}