type Props = { children: React.ReactNode }

const SplitGrid = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
        </div>
    );
}

export default SplitGrid;