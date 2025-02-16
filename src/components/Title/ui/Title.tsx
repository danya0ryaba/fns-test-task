import style from './Title.module.scss'

type TitleProps = {
    className?: string
    children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
    children,
    className = ''
}) => {
    return (
        <h1 className={`${style.title} ${className}`}>{children}</h1>
    )
}