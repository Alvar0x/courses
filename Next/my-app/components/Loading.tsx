import styles from './Loading.module.css';

export default function Loading({ delay }: { delay: number }) {
    return (
        <div className='loading-icon h-[100px] flex justify-center items-center gap-x-3'>
            <i style={{ animationDelay: delay * 0 + 'ms' }} className={styles.jumpingSquare + ` w-[20px] h-[20px] rounded bg-purple-800 border-2 border-purple-900`}></i>
            <i style={{ animationDelay: delay * 1 + 'ms' }} className={styles.jumpingSquare + ` w-[20px] h-[20px] rounded bg-rose-600 border-2 border-rose-800`}></i>
            <i style={{ animationDelay: delay * 2 + 'ms' }} className={styles.jumpingSquare + ` w-[20px] h-[20px] rounded bg-lime-600 border-2 border-lime-700`}></i>
            <i style={{ animationDelay: delay * 3 + 'ms' }} className={styles.jumpingSquare + ` w-[20px] h-[20px] rounded bg-yellow-500 border-2 border-yellow-600`}></i>
        </div>
    );
}
