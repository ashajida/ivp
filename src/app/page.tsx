"use client";
import Col from "@/components/Col";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import NewsCarousel from "@/components/NewsCarousel";
import Schedule from "@/components/Schedule";
import SplitGrid from "@/components/SplitGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <Container>
          <Schedule />
        </Container>
      </section>
      <NewsCarousel />
      <section id="about-us">
        <Container>
          <SplitGrid>
            <Col>
              <Image
                src="/images/img-4.jpg"
                alt=""
                height={640}
                width={800}
                className="h-96 object-cover object-center"
              />
            </Col>
            <Col extraClasses="flex flex-col justify-center lg:px-20 gap-4 overflow-hidden">
              <h2 className="text-2xl">About IVP</h2>
              <p>
                Infinite Visionaries Podcast (IVP) is more than just a podcast
                station it's a cultural awakening. Born out of a moment of
                reflection and emotional urgency, IVP was created by a group of
                Mozambican storytellers and changemakers who recognized the
                fading echoes of our indigenous languages, traditions, and
                heritage. Inspired by the vibrant multicultural communities
                we've lived in where diversity is celebrated, yet African voices
                remain underrepresented we knew it was time to reclaim our
                narrative.
                <br></br>
                <br></br>
                As Media Ambassadors of Mozambique, we bring stories, songs,
                documentaries, and conversations to life in the very languages
                that shaped our people from Emakhuwa to Ronga, Yao to Ndau. With
                over 40 languages spoken across Mozambique, each podcast episode
                becomes a vessel for cultural memory, celebration, and
                resistance.
              </p>
              <div>
                {/* <Link
                  href="https://www.instagram.com/ivp/"
                  className="bg-gradient-to-r w-fit bg-transparent text-white underline flex  items-center gap-2 border-1 px-4 py-2 rounded-full"
                >
                  Read More
                  <MdArrowForward />
                </Link> */}
              </div>
            </Col>
          </SplitGrid>
        </Container>
      </section>
      <section id="our-mission">
        <Container>
          <SplitGrid>
            <Col extraClasses="flex flex-col justify-center gap-4 overflow-hidden">
              <h2 className="text-2xl">Our Mission</h2>
              <p>
                Our mission is to preserve, amplify, and pass down Mozambique’s
                rich cultural and linguistic heritage through the power of
                media. We stand against the erasure that colonial history left
                behind where even foreign embassies have forgotten our mother
                tongues and we respond by using digital storytelling as a tool
                of revival.
                <br /> <br />
                We believe every language carries a worldview. By spotlighting
                Mozambique’s diverse dialects, traditions, music, and lived
                experiences, we aim to inspire a new generation to take pride in
                their roots and ensure that our social fabric remains vibrant,
                connected, and unbroken.
              </p>
              <div>
                {/* <Link
                  href="https://www.instagram.com/ivp/"
                  className="bg-gradient-to-r w-fit bg-transparent text-white underline flex  items-center gap-2 border-1 px-4 py-2 rounded-full"
                >
                  Read More
                  <MdArrowForward />
                </Link> */}
              </div>
            </Col>
            <Col extraClasses="lg:px-20 order-first lg:order-last">
              <Image
                src="/images/kids-in-africa.jpg"
                alt=""
                height={640}
                width={969}
                className="h-96 object-cover object-center"
              />
            </Col>
          </SplitGrid>
        </Container>
      </section>
      <section>
        <Container>
          <SplitGrid>
            <Col>
              <Image
                src="/images/mozambique.jpg"
                alt=""
                height={322}
                width={600}
                className="h-96 object-cover object-center"
              />
            </Col>
            <Col extraClasses="flex flex-col justify-center lg:px-20 gap-4 overflow-hidden">
              <h2 className="text-2xl">How We Can Help</h2>
              <p>
                Whether you’re part of the Mozambican diaspora, a language
                lover, a cultural researcher, or simply someone who believes in
                the power of identity Infinite Visionaries Podcast offers:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  Culturally rooted storytelling in native Mozambican languages
                </li>
                <li>
                  Music and documentaries that capture our rhythms, rituals, and
                  realities
                </li>
                <li>News and narratives from the communities who live them</li>
                <li>
                  A platform for intergenerational dialogue to preserve
                  traditions and knowledge
                </li>
                <li>
                  Educational content to help revive and learn endangered
                  languages
                </li>
                <li>
                  Join us as we speak in the voices of our ancestors, for the
                  sake of our future.
                </li>
              </ul>
              <div>
                {/* <Link
                  href="https://www.instagram.com/ivp/"
                  className="bg-gradient-to-r w-fit bg-transparent text-white underline flex  items-center gap-2 border-1 px-4 py-2 rounded-full"
                >
                  Read More
                  <MdArrowForward />
                </Link> */}
              </div>
            </Col>
          </SplitGrid>
        </Container>
      </section>
    </div>
  );
}

