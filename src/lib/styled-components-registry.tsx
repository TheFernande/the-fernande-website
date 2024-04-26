"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState, type ReactNode } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { usePropsFilter } from "@/hooks/use-props-filter";

const StyledComponentsRegistry = ({ children }: { children: ReactNode }) => {
  const propsFilter = usePropsFilter();
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  /* istanbul ignore next */
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={propsFilter}
      >
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      enableVendorPrefixes
      shouldForwardProp={propsFilter}
    >
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
