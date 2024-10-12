import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma "
import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
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
            <h1 className="text-3xl font-bold">{raffle?.title}</h1>
            <p className="text-sm text-gray-400">{raffle?.description}</p>
        </div>
    )
}

export default RaffleshopPage
