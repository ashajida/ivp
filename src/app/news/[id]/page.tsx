import Container from "@/components/Container";
import Image from "next/image";

const SingleNews = () => {
    return (
        <section>
            <Container>
                <h1 className="text-3xl font-bold mb-4">News Title</h1>
                <Image
                    src="/images/img-4.jpg"
                    alt="News Image"
                    className="h-[500px] object-cover object-center mb-4"
                    height={640}
                    width={800}
                />
                <p className="mb-4 lg:max-w-[900px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Container>
        </section>
    );
}

export default SingleNews;