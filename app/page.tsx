import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma "
import RaffleItem from "./_components/ui/raffle-item"

const Home = async () => {
  const raffle = await db.raffle.findMany({})
  console.log({ raffle })
  return (
    <div>
      {/* header */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Mundo!</h2>
        <p>Segunda-feira, 05 de maio de 2022.</p>

        {/* buscar */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* imagem */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/logo4.png"
            alt="Banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* agendamento */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-1 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Suas Rifas</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Rifa da Moto</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">25</p>
              <p className="text-sm">20:22</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {raffle.map((raffle) => (
            <RaffleItem key={raffle.id} raffle={raffle} />
          ))}
        </div>
      </div>

      {/* footer */}

      <Card>
        <CardContent className="px-5 py-6">
        <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">UTFS</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
