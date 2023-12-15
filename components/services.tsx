import CabinentPainting from '@/public/cabinentpainting.png'
import ExteriorPainting from '@/public/exteriorpainting.png'
import InteriorPainting from '@/public/interiorpainting.png'
import Image from 'next/image'
export default function Services() {
    return (
        <section className='py-32 w-full h-full px-36'>
            <div className='w-full h-1/3 '>
                <h4 className='text-base font-medium text-[#0094FE] cursor-default'>Services</h4>
                <h1 className='cursor-default text-4xl font-semibold text-[#2A2A2A] my-2'>Transform Your Space with Premium Painting Services</h1>
                <h2 className='text-[#4b4b4b] cursor-default text-lg'>Elevate Your Surroundings: Experience the Difference with Our Premium Painting Services, Tailored for Homes, Offices, and Every Space In Between.</h2>
            </div>
            <div className='flex w-full mt-8 justify-between'>
                <div className='w-[30%] flex flex-col'>
                    <Image
                        src={InteriorPainting}
                        alt='a room prepared for interior painting'
                        className='w-full h-[200px] rounded-3xl mb-4 object-cover'
                    />
                    <h3 className='cursor-default text-xl font-semibold text-[#2a2a2a] '>Interior Painting</h3>
                    <p className='text-[#4b4b4b] cursor-default'>Precision painting for walls, ceilings, and trim. Color consultations for personalized choices.
                    </p>
                </div>
                <div className='w-[30%] flex flex-col'>
                    <Image
                        src={ExteriorPainting}
                        alt='a team of professional painters painting the outside of a 2 story home'
                        className='w-full h-[200px] rounded-3xl mb-4 object-cover'
                    />
                    <h3 className='cursor-default text-xl font-semibold text-[#2a2a2a] '>Exterior Painting</h3>
                    <p className='text-[#4b4b4b] cursor-default'>Weather-resistant exterior paints. Thorough surface preparation for longevity.</p>
                </div>
                <div className='w-[30%] flex flex-col'>
                    <Image
                        src={CabinentPainting}
                        alt='man painting the cabinents of a kitchen'
                        className='w-full h-[200px] rounded-3xl mb-4 object-cover'
                    />
                    <h3 className='cursor-default text-xl font-semibold text-[#2a2a2a] '>Cabinent Painting</h3>
                    <p className='text-[#4b4b4b] cursor-default'>Professional cabinet preparation and painting. Custom finishes for a personalized touch.</p>
                </div>
            </div>
        </section>
    )

}