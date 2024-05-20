import { type ProductCardListingProps } from "@/components/product-card-listing/product-card-listing.types";
import Amazonia from "@/public/images/homepage/dump-sgt-pepper/amazonie.webp";
import Amsterdam from "@/public/images/homepage/dump-sgt-pepper/amsterdam.webp";
import Coco from "@/public/images/homepage/dump-sgt-pepper/coconut.webp";
import Break from "@/public/images/homepage/dump-sgt-pepper/escale.webp";
import Iceland from "@/public/images/homepage/dump-sgt-pepper/iceland.webp";
import Lanzarotte from "@/public/images/homepage/dump-sgt-pepper/lanzarotte.webp";
import Leopard from "@/public/images/homepage/dump-sgt-pepper/leopard.webp";
import Lisbon from "@/public/images/homepage/dump-sgt-pepper/lisbonne.webp";
import Montorgueil from "@/public/images/homepage/dump-sgt-pepper/montorgueil.webp";
import Paris from "@/public/images/homepage/dump-sgt-pepper/paris.webp";
import Portofino from "@/public/images/homepage/dump-sgt-pepper/portofino.webp";
import Sahara from "@/public/images/homepage/dump-sgt-pepper/sahara.webp";

const abstractPaintings: ProductCardListingProps[] = [
  {
    image: Lisbon,
    imageAlt: "The city of Lisbon as an art drawing",
    title: "Lisboa Dreams",
    buttonLabel: "View more",
    link: "shop/product/lisbon"
  },
  {
    image: Amazonia,
    imageAlt: "The Amazonia forest as an art drawing",
    title: "Amazonia",
    buttonLabel: "View more",
    link: "shop/product/amazonia"
  },
  {
    image: Amsterdam,
    imageAlt: "The city of Amsterdam as an art drawing",
    title: "Amsterdam",
    buttonLabel: "View more",
    link: "shop/product/amsterdam"
  },
  {
    image: Coco,
    imageAlt: "A coconut tree as an art drawing",
    title: "Coco",
    buttonLabel: "View more",
    link: "shop/product/coco"
  },
  {
    image: Break,
    imageAlt: "A beach as an art drawing",
    title: "Break",
    buttonLabel: "View more",
    link: "shop/product/break"
  },
  {
    image: Iceland,
    imageAlt: "The country of Iceland as an art drawing",
    title: "Iceland",
    buttonLabel: "View more",
    link: "shop/product/iceland"
  },
  {
    image: Lanzarotte,
    imageAlt: "The island of Lanzarotte as an art drawing",
    title: "Lanzarotte",
    buttonLabel: "View more",
    link: "shop/product/lanzarotte"
  },
  {
    image: Leopard,
    imageAlt: "A leopard as an art drawing",
    title: "Leopard",
    buttonLabel: "View more",
    link: "shop/product/leopard"
  },
  {
    image: Montorgueil,
    imageAlt: "The street of Montorgueil as an art drawing",
    title: "Montorgueil",
    buttonLabel: "View more",
    link: "shop/product/montorgueil"
  },
  {
    image: Paris,
    imageAlt: "The city of Paris as an art drawing",
    title: "Paris",
    buttonLabel: "View more",
    link: "shop/product/paris"
  },
  {
    image: Portofino,
    imageAlt: "The city of Portofino as an art drawing",
    title: "Portofino",
    buttonLabel: "View more",
    link: "shop/product/portofino"
  },
  {
    image: Sahara,
    imageAlt: "The Sahara desert as an art drawing",
    title: "Sahara",
    buttonLabel: "Add to cart",
    link: "/product/sahara"
  }
];

export { abstractPaintings };