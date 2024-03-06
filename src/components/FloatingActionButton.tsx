import { useCallback, useEffect, useMemo, useState } from "react";
import MaterialSymbol from "./MaterialSymbol";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FABProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon: string;
  className?: string,
};

const FloatingActionButton = ({
  onClick,
  icon,
  className,
}: FABProps) => {
  const [y, setY] = useState(window.scrollY);
  const [visible, setVisisble] = useState(true);

  const handleNavigation = useCallback(
    (e: Event) => {
      const window = e.currentTarget as Window;
      setVisisble(y > window.scrollY);
      // if (y > window.scrollY) {
      //   console.log("scrolling up");
      // } else if (y < window.scrollY) {
      //   console.log("scrolling down");
      // }
      setY(window.scrollY);
    },
    [y]
  );

  const visibilityNumber = useMemo(() => (visible ? 1 : 0), [visible]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <motion.button
      onClick={onClick}
      animate={{ scale: visibilityNumber, opacity: visibilityNumber }}
      className={twMerge(
        "fixed text-on-primary bottom-0 right-0 bg-primary rounded-3xl aspect-square m-8 p-8",
        className
      )}
    >
      <MaterialSymbol className="text-4xl">{icon}</MaterialSymbol>
    </motion.button>
  );
};

export default FloatingActionButton;
