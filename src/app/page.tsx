"use client";
import Col from "@/components/Col";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import NewsCarousel from "@/components/NewsCarousel";
import Schedule from "@/components/Schedule";
import SplitGrid from "@/components/SplitGrid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

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
      <section>
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
              <motion.h2
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 500, opacity: 0 }}
                className="text-4xl font-bold"
              >
                About IVP
              </motion.h2>
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 500, opacity: 0 }}
              >
                sed e do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi
              </motion.p>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 500, opacity: 0 }}
              >
                <Link
                  href="https://www.instagram.com/ivp/"
                  className="bg-gradient-to-r w-fit bg-transparent text-white underline flex  items-center gap-2 border-1 px-4 py-2 rounded-full"
                >
                  Read More
                  <MdArrowForward />
                </Link>
              </motion.div>
            </Col>
          </SplitGrid>
        </Container>
      </section>
    </div>
  );
}
