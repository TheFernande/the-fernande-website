import Image, { type StaticImageData } from "next/image";

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

interface ProductDataT {
  category: string;
  product: string;
}

const delay = async (ms: number) =>
  await new Promise(resolve => setTimeout(resolve, ms));

async function productData(category: string, product: string) {
  const dummyData: Record<
    string,
    Record<
      string,
      {
        image: StaticImageData;
        imageAlt: string;
        title: string;
        buttonLabel: string;
        link: string;
      }
    >
  > = {
    paintings: {
      lisbon: {
        image: Lisbon,
        imageAlt: "The city of Lisbon as an art drawing",
        title: "Lisboa Dreams",
        buttonLabel: "View more",
        link: "lisbon"
      },
      amazonia: {
        image: Amazonia,
        imageAlt: "The Amazonia forest as an art drawing",
        title: "Amazonia",
        buttonLabel: "View more",
        link: "amazonia"
      },
      amsterdam: {
        image: Amsterdam,
        imageAlt: "The city of Amsterdam as an art drawing",
        title: "Amsterdam",
        buttonLabel: "View more",
        link: "amsterdam"
      },
      coco: {
        image: Coco,
        imageAlt: "A coconut tree as an art drawing",
        title: "Coco",
        buttonLabel: "View more",
        link: "coco"
      },
      break: {
        image: Break,
        imageAlt: "A beach as an art drawing",
        title: "Break",
        buttonLabel: "View more",
        link: "break"
      },
      iceland: {
        image: Iceland,
        imageAlt: "The country of Iceland as an art drawing",
        title: "Iceland",
        buttonLabel: "View more",
        link: "iceland"
      },
      lanzarotte: {
        image: Lanzarotte,
        imageAlt: "The island of Lanzarotte as an art drawing",
        title: "Lanzarotte",
        buttonLabel: "View more",
        link: "lanzarotte"
      },
      leopard: {
        image: Leopard,
        imageAlt: "A leopard as an art drawing",
        title: "Leopard",
        buttonLabel: "View more",
        link: "leopard"
      },
      montorgueil: {
        image: Montorgueil,
        imageAlt: "The street of Montorgueil as an art drawing",
        title: "Montorgueil",
        buttonLabel: "View more",
        link: "montorgueil"
      },
      paris: {
        image: Paris,
        imageAlt: "The city of Paris as an art drawing",
        title: "Paris",
        buttonLabel: "View more",
        link: "paris"
      },
      portofino: {
        image: Portofino,
        imageAlt: "The city of Portofino as an art drawing",
        title: "Portofino",
        buttonLabel: "View more",
        link: "portofino"
      },
      sahara: {
        image: Sahara,
        imageAlt: "The Sahara desert as an art drawing",
        title: "Sahara",
        buttonLabel: "Add to cart",
        link: "sahara"
      }
    }
  };

  await delay(0);

  return (
    dummyData[category]?.[product] || {
      image: "",
      imageAlt: "No image available",
      title: "Unknown",
      buttonLabel: "N/A",
      link: ""
    }
  );
}

const ProductPage = async ({ params }: { params: ProductDataT }) => {
  const { category = "paintings", product } = params;

  const data = await productData(category, product);

  // console.log("Hello from the server!", data);

  return (
    <div>
      <h1>{data.title}</h1>

      <Image
        src={data.image.src}
        placeholder='blur'
        blurDataURL={data.image.blurDataURL}
        width={568}
        height={568}
        alt={data.imageAlt}
      />
      <p>{data.imageAlt}</p>
      <button>{data.buttonLabel}</button>
    </div>
  );
};

export default ProductPage;
