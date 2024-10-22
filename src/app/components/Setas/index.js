
export default function Setas({direction}) {
    return (
        <svg className="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path
                className={`${direction === 'crescent' ? 'text-blue-600' : 'text-gray-400 dark:text-neutral-500'}`}
                d="m7 15 5 5 5-5"
            />
            <path
                className={`${direction === 'descending' ? 'text-blue-600' : 'text-gray-400 dark:text-neutral-500'}`}
                d="m7 9 5-5 5 5"
            />
        </svg>
    )
}