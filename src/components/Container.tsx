type Props = {
    children: React.ReactNode;
}

const Container = ({children}: Props) => {
    return (
        <div className="container mx-auto py-10 px-4">
            {children}
        </div>
    );
}

export default Container;