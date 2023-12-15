import AboutImg from '@/public/about.png'
import VeteranOwned from '@/public/SDVOSB_Banner.png'
import ShareTheWarmth from '@/public/sharethewarmth.jpg'
import Veteran from '@/public/download.png'
import Image from 'next/image'

export default function About() {
    return (
        <section className="py-32 w-full h-full px-36">
            <div className='flex items-center'>
                <Image
                    src={AboutImg}
                    alt='team of painter working on painting and prepping an interior of a home'
                    className='w-1/2 h-full rounded-2xl mr-10'
                />

                <div className='w-1/2 h-full '>
                    <h4 className='text-base font-medium text-[#0094FE] cursor-default'>About Us</h4>
                    <h1 className='cursor-default text-4xl font-semibold text-[#2A2A2A] my-2'>Bringing Your Visions to Life</h1>
                    <h2 className='text-[#4b4b4b] cursor-default text-lg mt-4'>At EDS Custom Coatings, we blend creativity with expertise, turning your visions into vibrant realities. Discover the team dedicated to enhancing homes and businesses with precision and flair.</h2>
                    <h3 className='cursor-default font-semibold text-[#2a2a2a] text-2xl mt-10'>Trusted Professionals</h3>
                    <p className='cursor-default text-[#4b4b4b] mt-2 text-lg'>As a fully licensed and insured painting company, we prioritize your peace of mind above all else. Our commitment to professionalism, backed by comprehensive licensing and insurance, ensures that your project is not just a job but a worry-free experience.</p>
                    <h3 className='cursor-default text-[#FE0000] mt-5 text-4xl font-semibold'>ROC #328758</h3>
                </div>
            </div>
            <div className='flex w-full items-center mt-32'>
                <div className='w-3/4'>
                    <h1 className="cursor-default text-4xl font-semibold text-[#2A2A2A] my-2">Proudly Veteran Owned</h1>
                    <h2 className='mt-4 text-[#4b4b4b] cursor-default text-lg'>EDS Custom Coatings is more than a business; it's a testament to dedication and service. As a Service Disabled Veteran Owned Small Business, we bring the same level of commitment and precision to our painting services.</h2>
                </div>
                <Image className='w-1/4' src={VeteranOwned} alt='Service disabled veteran Owned business emblem or badge' />
            </div>
            <div className='flex w-full items-center mt-32'>
                <div className='w-1/2 flex'>
                    <Image className='w-3/5 mr-4' src={ShareTheWarmth} alt='Share the warmth logo: a charity organization that helps homeless veterans get warm clothing in the winter' />
                    <Image className='w-2/5 ml-4' src={Veteran} alt='a man wearing a warm coat and hat' />
                </div>
                <div className='w-1/2 ml-10'>
                    <h1 className="cursor-default text-4xl font-semibold text-[#2A2A2A] my-2">Making a difference in our community </h1>
                    <h2 className='mt-4 text-[#4b4b4b] cursor-default text-lg'>At EDS Custom Coatings, community is not just a place; it's our purpose. Explore our initiatives as we contribute to causes close to our hearts, from supporting homeless shelters to aiding veterans. Together, we make a meaningful impact, one brushstroke at a time.</h2>
                </div>
            </div>
        </section>
    )

}