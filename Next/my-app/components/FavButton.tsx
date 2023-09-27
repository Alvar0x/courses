'use client';

import { Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function FavButton() {
    const [status, setStatus] = useState<boolean>(false);

    return (
        <button type='button' onClick={() => setStatus(!status)} className='w-[42px] h-[42px] flex justify-center items-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-opacity duration-200 hover:opacity-80'>
            <Star strokeWidth={status ? 3 : 1.25} fill={status ? '#fff' : '#fff0'} />
        </button>
    );
}
