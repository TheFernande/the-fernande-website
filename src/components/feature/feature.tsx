import Image from "next/image";

import { type FeatureProps } from "../features-block/features-block.types";

import { FeatureContainer, Subtitle, Title } from "./feature.styles";

const Feature = ({ icon, title, subtitle }: FeatureProps) => (
  <FeatureContainer>
    <Image
      src={`/icons/${icon}.svg`}
      width={32}
      height={32}
      alt={icon}
    />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </FeatureContainer>
);

export default Feature;
