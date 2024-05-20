"use client";

import { css } from "styled-components";

import { theme } from "@/styles/theme";
import HeroShop from "@/widgets/hero-shop/hero-shop";

export default function ShopLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      {children}
      <div // Pagination
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 96px;
          width: 100%;
          background-color: ${theme.colors.pink.light};
        `}
      >
        <span>Pagination</span>
      </div>
    </>
  );
}
