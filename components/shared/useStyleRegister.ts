import { useState, useEffect } from "react";

export const useStyleRegister = (component, styles) => {
  const [registeredStyles, setRegisteredStyles] = useState(null);

  useEffect(() => {
    if (registeredStyles !== styles) {
      setRegisteredStyles(styles);
    }
  }, [styles]);

  return registeredStyles;
};