import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"




const BookingItem = () => {
    return (
        <>

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
        </>
    )
}

export default BookingItem
