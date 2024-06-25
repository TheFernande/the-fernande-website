"use client";

import { css } from "styled-components";

import { abstractPaintings } from "./page.data";

import { CategoryCarousel } from "@/components/category-carousel/category-carousel";
import PageLayout from "@/layouts/page-layout/page-layout";
import { theme } from "@/styles/theme";
import HeroShop from "@/widgets/hero-shop/hero-shop";
import { ProductsListing } from "@/widgets/products-listing/products-listing";
import { WeAreHereToHelpBlock } from "@/widgets/we-are-here-to-help/we-are-here-to-help";

export default function Shop() {
  return (
    <>
      <HeroShop />
      <div // ShopNavigation
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 96px;
          width: 100%;
          max-width: ${theme.maxWidths.desktop};
          margin: 0 auto;
        `}
      >
        <div // SearchBar
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 96px;
            width: 100%;
            /* background-color: ${theme.colors.pink.light}; */
          `}
        >
          <span>Searchbar</span>
        </div>
        <div // BreadCrumbs
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 96px;
            width: 100%;
            /* background-color: ${theme.colors.pink.light}; */
          `}
        >
          <span>Breadcrumbs</span>
        </div>
      </div>
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
    </>
  );
}
