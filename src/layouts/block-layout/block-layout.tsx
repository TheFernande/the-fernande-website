"use client";

import { Container, LeftBlock, RightBlock } from "./block-layout.styles";

export default function BlockLayout({
  left,
  right
}: Readonly<{
  left: React.ReactNode;
  right: React.ReactNode;
}>) {
  return (
    <Container>
      <LeftBlock>{left}</LeftBlock>
      <RightBlock>{right}</RightBlock>
    </Container>
  );
}
