import { Inter } from "next/font/google";
import { Formulario } from "@/components/formulario";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div
      className={`${inter.className} ${inter.style.fontFamily} flex justify-center items-center w-full h-screen bg-auth`}
    >
      <div className="flex justify-center items-center p-4 bg-green-300">
        <Formulario />
      </div>
    </div>
  );
};

export default Home;
