import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* Count-up to a numeric value when it scrolls into view. Preserves decimal
   places from the target string ("3.862" → 3 decimals). Reduced-motion shows
   the final value immediately. */
export default function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = parseFloat(value);
  const decimals = (String(value).split(".")[1] || "").length;
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf, start;
    const dur = 1100;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return (
    <b ref={ref}>
      {n.toFixed(decimals)}
      <span className="suffix">{suffix}</span>
    </b>
  );
}
