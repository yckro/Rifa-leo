import Image from 'next/image';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const Header = () => {
    return (
        <Card>
            <CardContent className='flex flex-row items-center justify-between p-0'>
                <Image src="/logo.png" alt="Logo" width={200} height={50} />
                <Button className='mr-2' size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
    );
};

export default Header;