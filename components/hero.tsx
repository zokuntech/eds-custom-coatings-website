import Image from 'next/image'
import hero from '@/public/hero.png'
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="h-[700px] w-full bg-red-100">
            <Image
                src={hero}
                quality={100}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                className='h-[700px] w-full absolute'
                alt="painters working on painting a wall while they finished prepping the room"
            />
            <div className='w-full h-full bg-black bg-opacity-30 relative flex items-center justify-center flex-col'>
                <h1 className='text-white text-5xl font-bold text-center w-[50%] cursor-default'>Brushing Brilliance Into Every Corner of Your Space.</h1>
                <h2 className='text-white font-normal mt-4 my-6 text-2xl text-center w-[40%] cursor-default'>Schedule a Free Onsite Estimate for Expert Commercial & Residential Painting Services!</h2>
                <Button className='w-[30%] h-16 text-xl bg-primary-500'>Schedule Free Onsite Estimate</Button>
            </div>
        </div>
    )
}