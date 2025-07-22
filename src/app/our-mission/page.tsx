import Col from "@/components/Col";
import Container from "@/components/Container";
import Image from "next/image";

export default function OurMission() {
  return (
    <div>
      <section id="our-mission">
        <Container>
          <div>
            <Col extraClasses="mb-10">
              <Image
                src="/images/our-mission.jpg"
                alt=""
                height={553}
                width={1280}
                className="h-96 w-full object-cover object-center"
              />
            </Col>
            <Col extraClasses="xl:max-w-3xl">
              <h2 className="text-2xl mb-5">Our Mission</h2>
              <div>
                <p className="mb-5">
                  Our mission is to preserve, amplify, and pass down
                  Mozambique&apos;s rich cultural and linguistic heritage
                  through the power of media. We stand against the erasure that
                  colonial history left behind where even foreign embassies have
                  forgotten our mother tongues and we respond by using digital
                  storytelling as a tool of revival.
                  <br /> <br />
                  We believe every language carries a worldview. By spotlighting
                  Mozambique&apos;s diverse dialects, traditions, music, and
                  lived experiences, we aim to inspire a new generation to take
                  pride in their roots and ensure that our social fabric remains
                  vibrant, connected, and unbroken.
                </p>
                <h3 className="mb-5 text-[18px]">Rebuilding Cultural </h3>
                <p>
                  Confidence At the heart of our mission is the restoration of
                  confidence in our cultural identity. For far too long, African
                  traditions and languages have been undervalued or
                  misrepresented, seen as barriers to progress instead of
                  bridges to collective strength. We reject this narrative. We
                  believe that the future of Mozambique is stronger when it
                  stands firmly on the foundation of its ancestral wisdom,
                  expressed in the voices of its people. IVP seeks to normalize
                  and celebrate the use of indigenous languages in everyday
                  media — not as relics of the past, but as vital components of
                  who we are today and who we aspire to be tomorrow.
                </p>
              </div>
            </Col>
          </div>
        </Container>
      </section>
    </div>
  );
}
