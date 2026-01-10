import { useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  // Extract number and suffix (e.g., "15.5M" -> 15.5 and "M")
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const decimalPlaces = value.includes(".") ? value.split(".")[1].length : 0;

  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      springValue.set(numValue);
    }
  }, [isInView, numValue, springValue]);

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimalPlaces));
    });
  }, [springValue, decimalPlaces]);

  return (
    <span ref={nodeRef} className="text-md">
      {displayValue}
      {suffix}
    </span>
  );
}
