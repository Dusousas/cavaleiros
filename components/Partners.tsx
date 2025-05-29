import React from 'react';


export default function Partners() {
    return (
        <section className='py-20 bg-[#F7F1DE] overflow-hidden'>
            <div className=''>
                <p className='uppercase tracking-widest text-center'>Accato</p>
                <h1 className='font-Belleza text-center text-4xl uppercase'>
                    Nossos Patrocinadores
                </h1>

                {/* LOGOS */}
                <div className='relative w-full overflow-hidden mt-12'>
                    <div className='flex animate-slide gap-10 whitespace-nowrap'>
                        {Array(2).fill(0).map((_, i) => (
                            <React.Fragment key={i}>
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 1" />
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 2" />
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 3" />
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 4" />
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 5" />
                                <img className='w-[200px]' src="/logoipsum.png" alt="Logo 6" />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
