'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () =>{
    const router = useRouter();

    return (
        <Image
        onClick={()=>router.push('/')} //if i click on the logo i go to the main page without any selections
        alt = "Logo"
        className='hidden md:block cursor-pointer'
        height="100"
        width="100"
        src = "/images/logo.png"
        />
    )
}
export default Logo;