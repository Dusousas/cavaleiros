import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp() {
    return (
        <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 lg:bottom-10 lg:right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
        >
            <FaWhatsapp size={24} />
        </a>
    );
}
