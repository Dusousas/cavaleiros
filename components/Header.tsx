import React from 'react';
import Navbar from './sub/Navbar';

export default function Header() {
    return (
        <>
            <section className='py-6 bg-transparent absolute z-20 w-full'>
                <div className='maxW flex items-center justify-between'>
                    <div>
                        <a className='text-white uppercase text-2xl' href="">Logotipo</a>
                    </div>
                    <Navbar />
                </div>
            </section>
        </>
    );
}