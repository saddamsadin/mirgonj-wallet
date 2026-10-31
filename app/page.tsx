"use client";
import { useState } from "react";

export default function MobileWallet() {
  const [active, setActive] = useState<string | null>(null);

  const Btn = ({ id, top, bottom, main, sub, extra }: any) => {
    const p = active === id;
    return (
      <div
        onMouseDown={() => setActive(id)}
        onMouseUp={() => setActive(null)}
        onTouchStart={() => setActive(id)}
        onTouchEnd={() => setActive(null)}
        onMouseLeave={() => setActive(null)}
        style={{
          position: "relative",
          height: "92px",
          transform: p ? "translateY(5px) scale(0.97)" : "translateY(0)",
          transition: "transform 0.12s ease",
          cursor: "pointer",
        }}
      >
        {/* Bottom Label Plate */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "64px",
            background: bottom,
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: p ? "0 2px 0 rgba(0,0,0,0.2)" : "0 5px 0 rgba(0,0,0,0.25), 0 10px 18px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "6px",
          }}
        >
          <div style={{ color: "#fff", fontSize: "12px", fontWeight: "700" }}>{sub}</div>
          {extra && <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "8px", marginTop: "1px" }}>{extra}</div>}
        </div>

        {/* Top Glossy Button */}
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "58px
