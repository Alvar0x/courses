'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function LikeButton() {
    const [status, setStatus] = useState<boolean>(false);

    return (
        <button type='button' onClick={() => setStatus(!status)} className='w-[42px] h-[42px] flex justify-center items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity duration-200 hover:opacity-80'>
            <Heart strokeWidth={status ? 3 : 1.25} fill={status ? '#fff' : '#fff0'} />
        </button>
    );
}
