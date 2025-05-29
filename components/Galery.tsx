'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/galeria-1.jpg',
  '/galeria-2.jpg',
  '/galeria-2.jpg',
];

export default function Galery() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const openModal = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section id='galery' className='py-20'>
        <div className='maxW flex flex-col items-center justify-center'>
          <p className='uppercase tracking-widest text-black'>Accato</p>
          <h1 className='font-Belleza text-black text-4xl uppercase'>Galeria</h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae
            corporis at dignissimos doloremque? Molestiae esse perferendis minus sunt in.
          </p>

          <article className='flex flex-wrap gap-4 mt-20'>
            {images.map((src, index) => (
              <img
                key={index}
                className='w-[400px] h-[400px] object-cover cursor-pointer select-none'
                src={src}
                alt={`Imagem ${index + 1}`}
                onClick={() => openModal(index)}
              />
            ))}
          </article>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>

          <button
            ref={prevRef}
            className="absolute left-4 text-white text-4xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 text-white text-4xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <FaChevronRight />
          </button>

          <Swiper
            initialSlide={startIndex}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              // atribui os elementos ANTES da inicialização
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation, Pagination]}
            className="w-full max-w-6xl"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-[80vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="max-h-full max-w-full object-contain select-none"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
