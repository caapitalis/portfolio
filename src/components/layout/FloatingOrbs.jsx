import { FLOATING_ORBS } from "../../data/content.js";

export default function FloatingOrbs() {
  return (
    <>
      {FLOATING_ORBS.map((o, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            width: o.w,
            height: o.h,
            borderRadius: "50%",
            background: "var(--bg)",
            boxShadow: `${o.w * 0.04}px ${o.w * 0.04}px ${o.w * 0.12}px var(--shd), -${o.w * 0.04}px -${o.w * 0.04}px ${o.w * 0.12}px var(--shl)`,
            top: o.top,
            right: o.right,
            left: o.left,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.45,
            animation: `flt ${o.dur} ease-in-out ${o.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}
