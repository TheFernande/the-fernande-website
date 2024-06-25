import { useCallback, useEffect, useState } from "react";

interface Format {
  size: string;
  price: number;
}

const useFormat = (
  initialFormat: Format,
  formats: Format[],
  quantity: number
) => {
  const [selectedFormat, setSelectedFormat] = useState<string>(
    initialFormat.size
  );
  const [currentPrice, setCurrentPrice] = useState<number>(
    initialFormat.price * quantity
  );

  const handleFormatChange = useCallback(
    (newFormat: string) => {
      const selectedFormat = formats.find(format => format.size === newFormat);
      if (selectedFormat) {
        setSelectedFormat(newFormat);
        setCurrentPrice(selectedFormat.price * quantity);
      }
    },
    [formats, quantity]
  );

  useEffect(() => {
    const foundFormat = formats.find(format => format.size === selectedFormat);

    if (foundFormat) {
      setCurrentPrice(foundFormat.price * quantity);
    }
  }, [quantity, selectedFormat, formats]);

  return { selectedFormat, currentPrice, handleFormatChange };
};

export { useFormat };
