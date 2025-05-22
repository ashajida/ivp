"use client";

import Image from 'next/image'
import { MotionDiv } from './FramerUtils';

const Schedule = () => {
    return (
           <div>
             <h3 className='mb-6 text-center text-xl font-bold'>Schedule</h3>
        <div className="flex items-center justify-center overflow-x-auto lg:overflow-x-hidden snap-mandatory snap-x lg:snap-none">
            <UpNextCard image='img-1.jpg' name="Sam Smith" extraClasses='ml-[200%] lg:ml-0' />
            <UpNextCard extraClasses='lg:border-l-1 lg:border-r-1 lg:border-dashed lg:border-gray-400' image='img-3.jpg' name="Troy Ben" />
            <UpNextCard image='img-2.jpg' name="John Smith" />
        </div>
           </div>
    );
}
export default Schedule;

type UpNextCardProps = {
    extraClasses?: string;
    image: string;
    name: string;
}

const UpNextCard = ({extraClasses, image, name}: UpNextCardProps) => {


    return (
        <MotionDiv whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}  className={`snap-start min-w-[100%] lg:min-w-auto inline-flex lg:flex gap-3 items-center p-2 px-6 ${extraClasses}`}>
            <Image alt="Event Image"
                src={`/images/${image}`} width={200} height={300} className='w-28 h-28 rounded-full object-cover object-center' />
           <div>
             <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-700">Name of show</p>
            <p className="text-gray-700">Now: 18:00 - 19:00</p>
           </div>
        </MotionDiv>
    );
}