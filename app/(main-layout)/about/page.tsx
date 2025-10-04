import AboutTabs from "@/components/AboutTabs";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nabil Siddik Portfolio",
  description: "Nabil Siddik portfolio about page.",
};

const AboutPage = () => {
  return (
    <section className="container mx-auto px-5 max-w-6xl py-20">
      <SectionHeader
        title="About Me"
        subtitle="Passionate software developer crafting scalable, user-friendly solutions. I turn complex challenges into clean, efficient code while constantly learning and innovating."
      />

      <div className="flex items-center gap-10 flex-col md:flex-row">
        <div className="flex-1">
          <Image
            className="rounded-md"
            src={"/images/nabil-siddik.jpg"}
            width={400}
            height={500}
            alt="nabil siddik about image"
          />
        </div>
        <div className="flex-3">
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
