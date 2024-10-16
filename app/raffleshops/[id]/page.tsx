import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma "
import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, FlameIcon } from "lucide-react"
import { MenuIcon } from "lucide-react"
interface RaffleshopPageProps {
    params: {
        id: string
    }
}

const RaffleshopPage = async ({ params }: RaffleshopPageProps) => {
    const raffle = await db.raffle.findUnique({
        where: {
            id: params.id,
        },
    })
    return (
        <div>
            <div className="relative h-[250px] w-full">
                <Image
                    src={raffle?.imageUrl}
                    alt={raffle?.title}
                    fill
                    className="object-cover"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-4 top-4"
                >
                    <Link href="">
                        <MenuIcon />
                    </Link>
                </Button>
            </div>

            <div className="border-b border-solid p-5 flex  justify-between">
            <h1 className="text-3xl font-bold">{raffle?.title}</h1>
            <FlameIcon size={30} className="fill-primary text-primary " />
            </div>


            <div className="p-5 border-solid border-b space-y-3">
                <h2 className="font-bold uppercase text-gray-400">Descricão</h2>
                <p>{raffle?.description}</p>
            </div>

        </div>
    )
}

export default RaffleshopPage ;
