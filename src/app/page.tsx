"use client";

import Image1 from "../../public/images/homepage/image-placeholder-1.jpeg";
import Image2 from "../../public/images/homepage/image-placeholder-2.jpeg";
import Image3 from "../../public/images/homepage/image-placeholder-3.jpeg";
import Image4 from "../../public/images/homepage/image-placeholder-4.jpeg";

import CategoriesShowcase from "@/components/categories-showcase-block/categories-showcase-block";
import HeroHomepage from "@/components/hero-homepage-block/hero-homepage-block";
import PageLayout from "@/layouts/page-layout/page-layout";
import { theme } from "@/styles/theme";

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

      {/* WeAreHereToHelp Block ✅ */}
      <div
        style={{
          background: `${theme.colors.blue.light}`,
          marginTop: "20px", // Adds a 20px top margin
          width: "100%",
          display: "flex",
          padding: `${theme.spacings.xxxl}`,
          flexDirection: "column",
          justifyContent: "center", // Centers the content horizontally in this div
          alignItems: "center" // Centers the content vertically in this div
        }}
      >
        <h4
          style={{
            width: "100%",
            fontSize: theme.fontSizes.xl,
            lineHeight: theme.lineHeights.xl,
            textAlign: "center"
          }}
        >
          Need help? We are here for you!
        </h4>
        <button
          style={{
            background: "transparent",
            fontSize: theme.fontSizes.m,
            fontWeight: theme.fontWeights.bold,
            color: `${theme.colors.base.black}`,
            padding: `${theme.spacings.xxs} ${theme.spacings.xs}`,
            border: "1px solid black",
            borderRadius: `${theme.borderRadiuses.s}`,
            cursor: "pointer"
          }}
        >
          Click Me
        </button>
      </div>
    </PageLayout>
  );
}
