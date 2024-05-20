"use client";

import Image1 from "../../public/images/homepage/image-placeholder-1.jpeg";
import Image2 from "../../public/images/homepage/image-placeholder-2.jpeg";
import Image3 from "../../public/images/homepage/image-placeholder-3.jpeg";
import Image4 from "../../public/images/homepage/image-placeholder-4.jpeg";

import PageLayout from "@/layouts/page-layout/page-layout";
import CategoriesShowcase from "@/widgets/categories-showcase/categories-showcase";
import HeroHomepage from "@/widgets/hero-homepage/hero-homepage";
import { WeAreHereToHelpBlock } from "@/widgets/we-are-here-to-help/we-are-here-to-help";

export default function Home() {
  return (
    <PageLayout>
      <HeroHomepage />
      <CategoriesShowcase
        left={{
          imageSrc: Image1,
          imageSize: { width: 568, height: 568 },
          imageAlt: "hero-image",
          title: "My new design",
          buttonLabel: "Click Me",
          link: "/"
        }}
        right={{
          imageSrc: Image2,
          imageSize: { width: 568, height: 568 },
          imageAlt: "hero-image",
          title: "My new design",
          buttonLabel: "Click Me",
          link: "/"
        }}
      />
      <CategoriesShowcase
        left={{
          imageSrc: Image3,
          imageSize: { width: 568, height: 568 },
          imageAlt: "hero-image",
          title: "My new design",
          buttonLabel: "Click Me",
          link: "/"
        }}
        right={{
          imageSrc: Image4,
          imageSize: { width: 568, height: 568 },
          imageAlt: "hero-image",
          title: "My new design",
          buttonLabel: "Click Me",
          link: "/"
        }}
      />

      <WeAreHereToHelpBlock />
    </PageLayout>
  );
}
