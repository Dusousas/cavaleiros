import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { LuMoveRight } from 'react-icons/lu';

export default function Main() {
    return (
        <section className="relative h-[100vh] ">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/main.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Conteúdo por cima do vídeo */}
            <div className="relative z-10 maxW flex items-center justify-center h-full">
                {/* REDES */}
                <article className="flex gap-x-6 gap-y-8 absolute bottom-4 left-0 w-full justify-center lg:top-1/2 lg:left-6 lg:bottom-auto lg:translate-y-[-50%] lg:w-auto lg:flex-col lg:justify-start">
                    <a href=""><FaInstagram className="text-white text-2xl" /></a>
                    <a href=""><FaFacebookF className="text-white text-2xl" /></a>
                    <a href=""><FaTwitter className="text-white text-2xl" /></a>
                    <a href=""><FaLinkedinIn className="text-white text-2xl" /></a>
                </article>

                <article className="flex flex-col gap-y-4">
                    <h1 className="text-center font-Belleza text-white text-4xl lg:text-7xl">Clube dos Cavaleiros de Torrinha</h1>
                    <p className="text-center text-white lg:px-64">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium cumque corrupti placeat,
                        nihil architecto mollitia earum nisi error pariatur fugit! Perferendis libero cum obcaecati
                        fugiat reiciendis sed impedit tempore possimus?
                    </p>
                    <div className="flex justify-center mt-4">
                        <a className="bg-white px-8 py-3 font-Outfit rounded-bl-2xl flex items-center gap-2" href="">
                            Saiba mais <LuMoveRight className="mt-1 text-lg" />
                        </a>
                    </div>
                </article>
            </div>

            {/* Camada escura opcional por cima do vídeo */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#132C2A]/65 z-0"></div>
        </section>
    );
}
