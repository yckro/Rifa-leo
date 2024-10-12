import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card } from "./_components/ui/card"
import { db } from "./_lib/prisma "
import RaffleItem from "./_components/raffle-item"
import BookingItem from "./_components/booking-item"

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

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {raffle.map((raffle) => (
            <RaffleItem key={raffle.id} raffle={raffle} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">UTFS</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
