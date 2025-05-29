import React from 'react';
import Form from './sub/Form';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <section id='contact' className='py-20 bg-GreenD'>
                <div className='maxW flex flex-col gap-10 lg:flex-row'>
                    <article className='lg:w-1/2'>
                        <p className='uppercase tracking-widest text-white text-center lg:text-left' >Accato</p>
                        <h1 className='font-Belleza text-white text-4xl uppercase text-center lg:text-left'>Entre em contato</h1>
                        <p className='text-white mt-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi ipsam explicabo qui reiciendis? Facilis aut fugiat, distinctio harum dolore eos maxime sequi blanditiis ad nostrum facere tempora labore consequuntur.</p>
                        <p className='text-white mt-2 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi ipsam explicabo qui reiciendis? Facilis aut fugiat, distinctio harum dolore eos maxime sequi blanditiis ad nostrum facere tempora labore consequuntur.</p>
                        <div className="flex justify-center gap-4 mt-6 lg:justify-start">
                            <a href=""><FaInstagram className="text-white text-2xl" /></a>
                            <a href=""><FaFacebookF className="text-white text-2xl" /></a>
                            <a href=""><FaTwitter className="text-white text-2xl" /></a>
                            <a href=""><FaLinkedinIn className="text-white text-2xl" /></a>
                        </div>

                    </article>

                    <article className='lg:w-1/2'>
                        <Form />
                    </article>
                </div>
            </section>
        </>
    );
}