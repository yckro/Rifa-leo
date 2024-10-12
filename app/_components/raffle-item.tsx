import { Raffle } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { FlameIcon } from "lucide-react"
import Link from "next/link"

interface RaffleItemProps {
    raffle: Raffle
}

const RaffleItem = ({ raffle }: RaffleItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                {/* {imagem} */}
                <div className="relative h-[159px] w-full">
                    <Image
                        fill
                        className="rounded-2xl object-cover"
                        src={raffle.imageUrl}
                        alt={raffle.title}
                    />

                    <Badge className="absolute left-2 top-2" variant="secondary">
                        <FlameIcon size={12} className="fill-primary text-primary" />
                    </Badge>
                </div>
                {/* {text} */}
                <div className="px-1 py-3">
                    <h3 className="truncate font-semibold">{raffle.title}</h3>
                    <p className="truncate text-sm text-gray-400">{raffle.description}</p>
                    <Button
                        variant="secondary"
                        className="mt-3 w-full font-bold uppercase"
                        asChild
                    >
                        <Link href={`/raffleshops/${raffle.id}`}>Detalhes</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default RaffleItem
