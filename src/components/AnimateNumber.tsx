"use client";

import { useMotionValue, useSpring, useMotionValueEvent, useInView } from "framer-motion";
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
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 80 });
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView)
      motionValue.set(value);
  }, [motionValue, value, isInView]);

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
