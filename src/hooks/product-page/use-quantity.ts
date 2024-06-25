import { useCallback, useState } from "react";

const useQuantity = (initialQuantity: number) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleQuantityChange = useCallback((newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  }, []);

  return { quantity, handleQuantityChange };
};

export { useQuantity };
