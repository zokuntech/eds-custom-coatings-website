import { FaHome, FaHandshake, FaSmile } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";

export default function Introduction() {
    return (
        <section className='my-40 w-full flex px-36 items-center'>
            <div className='w-1/2 h-full '>
                <h4 className='text-base font-medium text-[#0094FE] cursor-default'>Introduction</h4>
                <h1 className='cursor-default text-4xl font-semibold text-[#2A2A2A] my-2'>Painting Dreams, Creating Realities Your Space, Perfected</h1>
                <h2 className='text-[#4b4b4b] cursor-default text-lg'>At our painting company, we pride ourselves on using high-quality materials and eco-friendly paints to deliver exceptional results. Whether you're a homeowner or a business owner, we have the expertise to transform your space and create a fresh, vibrant look.</h2>
            </div>
            <div className='w-1/2 h-full grid grid-cols-2 gap-10 ml-14'>
                <div>
                    <FaHome className='text-5xl mb-2 text-[#0094FE]' />
                    <h3 className='text-xl text-[#2A2A2A] my-1 font-semibold cursor-default'>Residential</h3>
                    <p className='cursor-default text-base text-[#4b4b4b]'>Interior & exterior painting, bringing vibrant color and lasting quality to your home.</p>
                </div>

                <div>
                    <IoMdBusiness className='text-5xl mb-2 text-[#0094FE]' />
                    <h3 className='text-xl text-[#2A2A2A] my-1 font-semibold cursor-default'>Commercial</h3>
                    <p className='cursor-default text-base text-[#4b4b4b]'>Top-tier commercial painting solutions, elevating your  space with a professional touch.</p>
                </div>
                <div>
                    <FaHandshake className='text-5xl mb-2 text-[#0094FE]' />
                    <h3 className='text-xl text-[#2A2A2A] my-1 font-semibold cursor-default'>Onsite Estimates</h3>
                    <p className='cursor-default text-base text-[#4b4b4b]'>Choose the time to meet with our experts. Your vision begins with a personalized onsite estimate.</p>
                </div>
                <div>
                    <FaSmile className='text-5xl mb-2 text-[#0094FE]' />
                    <h3 className='text-xl text-[#2A2A2A] my-1 font-semibold cursor-default'>Quality Services</h3>
                    <p className='cursor-default text-base text-[#4b4b4b]'>Every transformed space tells of the quality & care we bring to your home and business.</p>
                </div>
            </div>
        </section>
    )

}