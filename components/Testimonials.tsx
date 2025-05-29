import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Eduardo Sousa',
        role: 'Web Designer',
        image: 'perfil-1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi quia perspiciatis tenetur autem molestias sequi voluptatibus dignissimos dicta, cumque eaque quibusdam voluptate culpa nihil saepe quaerat vero aspernatur a!',
    },
    {
        name: 'Mariana Lima',
        role: 'Desenvolvedora Front-end',
        image: 'perfil-1.jpg',
        text: 'Mariana é muito dedicada e fez um trabalho impecável no projeto. Sempre entregando antes do prazo.',
    },
    {
        name: 'Carlos Oliveira',
        role: 'UI/UX Designer',
        image: 'perfil-1.jpg',
        text: 'Carlos trouxe ótimas ideias de layout e usabilidade para nossa aplicação. Excelente parceiro de equipe.',
    },
    {
        name: 'Ana Beatriz',
        role: 'Gerente de Projetos',
        image: 'perfil-1.jpg',
        text: 'Ana coordenou tudo com muita organização e clareza. Seu trabalho fez total diferença no sucesso do projeto.',
    }
];

export default function Testimonials() {
    return (
        <section className='bgDepo relative'>
            <div className="absolute top-0 left-0 w-full h-full bg-[#132C2A]/65 z-0" />
            <div className='relative z-10 flex flex-col lg:flex-row'>

                {testimonials.map((testimonial, index) => (
                    <article
                        key={index}
                        className='group px-4 pb-10 flex flex-col border-t last:border-r-0 transition-all duration-300 hover:backdrop-blur-md lg:w-1/4 lg:pt-70 lg:border-r lg:last:border-r-0 lg:border-white/40'>
                        {/* DEPOIMENTO */}
                        <div>
                            <p className='text-white mb-20 mt-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:mt-0'>
                                {testimonial.text}
                            </p>
                        </div>

                        {/* FOTO E PROFISSÃO NO FINAL */}
                        <div className='flex items-center gap-4 mt-auto '>
                            <img className='rounded-full w-[20%]' src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <h1 className='font-Belleza text-xl text-white'>{testimonial.name}</h1>
                                <h2 className='text-sm text-white'>{testimonial.role}</h2>
                                <FaStar className='text-[#E1B648] mt-1' />
                            </div>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    );
}
