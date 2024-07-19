"use client";

import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimateNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  //   useEffect(
  //     () =>
  //       springValue.onChange((latest) => {
  //         if (ref.current) {
  //           ref.current.textContent = latest.toFixed(0);
  //         }
  //       }),
  //     [springValue]
  //   );

  useMotionValueEvent(springValue, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = `${latest.toFixed(0)}${suffix}`;
    }
  });

  return <span ref={ref} />;
}
