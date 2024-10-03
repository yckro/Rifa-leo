
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import {Input} from "./_components/ui/input";
import {SearchIcon} from "lucide-react";
import Image from "next/image";

const Home  = () => {
  return (
    <div>
      {/* header */}
      <Header/>

      <div className="p-5">
    <h2 className="text-xl font-bold">Olá, Mundo!</h2>
    <p>Segunda-feira, 05 de maio de 2022.</p>

    <div className="mt-6 flex items-center gap-2">
    <Input placeholder="Faça sua busca..." />
    <Button>
      <SearchIcon />
    </Button>
    </div>

    <div className="relative h-[100px] w-full mt-6">
    <Image src="/banner.png" alt="Banner" fill className="object-cover border-2"/>
    </div>

      </div>
    </div>
  )
}

export default Home;