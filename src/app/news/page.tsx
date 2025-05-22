import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";

const News = () => {
  return (
    <section>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NewsCard
            title="News Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/images/img-4.jpg"
             url="/news/1"
          />
           <NewsCard
            title="News Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/images/img-4.jpg"
             url="/news/1"
          />
           <NewsCard
            title="News Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/images/img-4.jpg"
             url="/news/1"
          />
           <NewsCard
            title="News Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/images/img-4.jpg"
            url="/news/1"
          />
           <NewsCard
            title="News Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/images/img-4.jpg"
             url="/news/1"
          />
        </div>
      </Container>
    </section>
  );
};

export default News;
