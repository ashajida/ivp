type Props = {
    children: React.ReactNode;
    extraClasses?: string;
}

const Col = ({children, extraClasses}: Props) => {
    return(
        <div className={`${extraClasses} flex flex-col gap-4`}>
            {children}
        </div>
    )
}

export default Col;