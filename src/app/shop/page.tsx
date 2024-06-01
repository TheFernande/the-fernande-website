"use client";

import { css } from "styled-components";

import { abstractPaintings } from "./page.data";

import { CategoryCarousel } from "@/components/category-carousel/category-carousel";
import PageLayout from "@/layouts/page-layout/page-layout";
import { theme } from "@/styles/theme";
import { ProductsListing } from "@/widgets/products-listing/products-listing";
import { WeAreHereToHelpBlock } from "@/widgets/we-are-here-to-help/we-are-here-to-help";

export default function Shop() {
  return (
    <PageLayout>
      <ProductsListing
        title='Abstract paintings'
        productsListing={abstractPaintings}
      />

      <div // CategoriesCarousels
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 896px;
          width: 100%;
          gap: 48px;
          background-color: ${theme.colors.base.lighter};
        `}
      >
        <CategoryCarousel
          cardsToRender={abstractPaintings}
          title='Carousel Title'
        />
      </div>
      <WeAreHereToHelpBlock />
    </PageLayout>
  );
}
