import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='py-20 bg-GreenD'>
                <div className='maxW flex flex-col gap-10 lg:flex-row'>
                    <article className='lg:w-1/2'>
                        <p className='uppercase tracking-widest text-white'>Accato</p>
                        <h1 className='font-Belleza text-white text-4xl uppercase'>Associacao do Clube dos Cavaleiros de Torrinha</h1>
                        <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi ipsam explicabo qui reiciendis? Facilis aut fugiat, distinctio harum dolore eos maxime sequi blanditiis ad nostrum facere tempora labore consequuntur.</p>
                        <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi ipsam explicabo qui reiciendis? Facilis aut fugiat, distinctio harum dolore eos maxime sequi blanditiis ad nostrum facere tempora labore consequuntur.</p>

                        <div className='mt-10 flex flex-wrap'>
                            <div className='w-1/2 border bg-white border-white py-14'>
                                <h1 className='font-Belleza  text-5xl text-center text-GreenD font-black'>300</h1>
                                <p className='text-GreenD text-center text-2xl mt-2'>Eventos Realizados</p>
                            </div>
                            <div className='w-1/2 border border-white py-14'>
                                <h1 className='font-Belleza  text-5xl text-center text-white font-black'>300</h1>
                                <p className='text-white text-center text-2xl mt-2'>Eventos Realizados</p>
                            </div>
                            <div className='w-1/2 border border-white py-14'>
                                <h1 className='font-Belleza  text-5xl text-center text-white font-black'>300</h1>
                                <p className='text-white text-center text-2xl mt-2'>Eventos Realizados</p>
                            </div>
                            <div className='w-1/2 border bg-white border-white py-14'>
                                <h1 className='font-Belleza  text-5xl text-center text-GreenD font-black'>300</h1>
                                <p className='text-GreenD text-center text-2xl mt-2'>Eventos Realizados</p>
                            </div>
                        </div>
                        <div className='mt-8 flex justify-center lg:justify-start'>
                            <a className='bg-white px-6 py-3 uppercase font-Outfit' href="">Entre em contato</a>
                        </div>
                    </article>

                    <article className='lg:w-1/2'>
                        <div className='flex items-center justify-center'>
                            <img className='lg:w-[70%]' src="/about-1.jpg" alt="" />
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}