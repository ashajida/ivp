import Col from "./Col";
import Container from "./Container";
import SpotifyEmbed from "./SpotifyEmbed";

const Hero = () => {
    return (
      <section className="w-full container mx-auto flex justify-center py-10 items-center">
        <Container>
          <div className="flex flex-col gap-[28px]">
            <Col extraClasses="gap-[0]">
              <h1 className="text-7xl">Infinite Visionaries Podcast</h1>
              <p className="text-2xl">The Home of Mozambique’s Voices, Stories, and Soundscapes</p>
            </Col>
            <Col extraClasses="gap-[0]">
              <SpotifyEmbed />
            </Col>
            </div>
        </Container>
      </section>
    );
}

export default Hero;