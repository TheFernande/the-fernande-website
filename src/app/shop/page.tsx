"use client";

import { css } from "styled-components";

import { abstractPaintings } from "./page.data";

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
          background-color: ${theme.colors.blue.dark};
        `}
      >
        <div // CategoryCarousel
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 396px;
            width: calc(100% - 96px);
            padding: 48px;
            border-radius: 8px;
            background-color: ${theme.colors.pink.light};
          `}
        >
          <h2>Categories carousel A</h2>
        </div>
        <div // CategoryCarousel
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 396px;
            width: calc(100% - 96px);
            padding: 48px;
            border-radius: 8px;
            background-color: ${theme.colors.pink.light};
          `}
        >
          <h2>Categories carousel B</h2>
        </div>
      </div>
      <WeAreHereToHelpBlock />
    </PageLayout>
  );
}
