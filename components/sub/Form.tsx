import React from 'react';

export default function Form() {
    return (
        <>
            <form action="" className='px-10 py-10 border-t border-white lg:border-l lg:border-white lg:border-t-0'>
                <h1 className='text-white text-xl text-center lg:text-left'>Preencha e aguarde o retorno de um especialista.</h1>

                <div className='mt-8 flex flex-col gap-6 lg:w-[80%]'>
                    <input className='border-b border-white w-full text-white outline-none' type="text" placeholder='Seu Nome' name="" id="" />
                    <input className='border-b border-white w-full text-white outline-none' type="text" placeholder='Seu Telefone' name="" id="" />
                    <input className='border-b border-white w-full text-white outline-none' type="text" placeholder='Seu E-mail' name="" id="" />
                    <textarea className='border-b border-white w-full text-white resize-none outline-none' rows={4} placeholder='Sua mensagem' name="" id=""></textarea>
                        <div className='mt-2 flex justify-center lg:justify-start'>
                            <a className='bg-white px-6 py-3 uppercase font-Outfit' href="">Enviar</a>
                        </div>
                </div>
            </form>
        </>
    );
}