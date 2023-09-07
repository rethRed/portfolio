import NextNProgress from 'nextjs-progressbar';

export const ProgressBar = () => {
    return (
        <NextNProgress color={'linear-gradient( 135deg, var(--green) 0%, var(--cian) 100%)'} startPosition={0.3} stopDelayMs={200} height={3} />
    )
}