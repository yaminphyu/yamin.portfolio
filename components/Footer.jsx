import React from 'react';
import indexStyles from '@/styles/Index.module.css';

export default function Footer() {
    return (
        <section
            className={`!h-full bg-[#2a1756] ${indexStyles.container}`}
        >
            <div className={`!mt-0 ${indexStyles.wrapper}`}>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h3 className='text-base md:text-lg'>© Copyright <span className='font-bold'>YaminPhyu</span> All Rights Reserved</h3>
                    <p className='text-sm md:text-base'>Designed by <span className='font-bold'>YaminPhyu</span></p>
                </div>
            </div>
        </section>
    )
}
