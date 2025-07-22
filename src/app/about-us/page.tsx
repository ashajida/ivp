import Col from "@/components/Col";
import Container from "@/components/Container";
import Image from "next/image";

export default function OurMission() {
  return (
    <div>
      <section id="about-us">
        <Container>
          <div>
            <Col extraClasses="mb-10">
              <Image
                src="/images/about-us.jpg"
                alt=""
                height={640}
                width={800}
                className="h-96 w-full object-cover object-center"
              />
            </Col>
            <Col extraClasses="gap-5 xl:max-w-3xl">
              <h2 className="text-2xl">About IVP</h2>
              <div>
                <p>
                  Infinite Visionaries Podcast (IVP) is more than just a podcast
                  station it&apos;s a cultural awakening. Born out of a moment
                  of reflection and emotional urgency, IVP was created by a
                  group of Mozambican storytellers and changemakers who
                  recognized the fading echoes of our indigenous languages,
                  traditions, and heritage. Inspired by the vibrant
                  multicultural communities we&apos;ve lived in where diversity
                  is celebrated, yet African voices remain underrepresented we
                  knew it was time to reclaim our narrative.
                  <br></br>
                  <br></br>
                  As Media Ambassadors of Mozambique, we bring stories, songs,
                  documentaries, and conversations to life in the very languages
                  that shaped our people from Emakhuwa to Ronga, Yao to Ndau.
                  With over 40 languages spoken across Mozambique, each podcast
                  episode becomes a vessel for cultural memory, celebration, and
                  resistance.
                  <br></br>
                  <br></br>
                </p>
                <h3 className="text-[18px] mb-5">Reclaiming What Was Lost </h3>
                <p className="mb-5">
                  The colonial era left deep marks — not just in our history
                  books, but in the very way we speak, think, and relate to our
                  identities. Today, many of Mozambique&apos;s languages are
                  endangered, spoken by fewer and fewer people. Traditions that
                  once bonded generations are slowly disappearing, often
                  replaced by dominant, foreign narratives that do not reflect
                  who we are. IVP was born as a response to this silence — to
                  counter the cultural erosion with creativity, and to remind
                  Mozambicans and the world that our roots matter.
                </p>
                <h3 className="text-[18px] mb-5">
                  Our Roots, Our Languages, Our Power
                </h3>
                <p>
                  Mozambique is a country of rich linguistic diversity. From the
                  coastal islands of Cabo Delgado to the bustling streets of
                  Maputo, our tongues carry unique histories, philosophies, and
                  rhythms. Emakhuwa, Gitonga, Chindau, Xichangana, Chiyao —
                  these are not just means of communication, they are carriers
                  of wisdom, humor, values, and spiritual knowledge. They are
                  the soul of who we are. Infinite Visionaries Podcast serves as
                  a bridge between generations, giving voice to elders, youth,
                  artists, poets, and everyday citizens — all speaking in their
                  authentic language. By preserving these expressions in audio
                  format, we are building an archive of cultural continuity for
                  future generations.
                </p>
              </div>
              <div></div>
            </Col>
          </div>
        </Container>
      </section>
    </div>
  );
}
