"use client";
import { useState } from "react";

export default function Wallet() {
  const [press, setPress] = useState<string | null>(null);

  const Btn = ({ id, name, top, bottom, logo }: any) => {
    const down = press === id;
    return (
      <div
        onMouseDown={() => setPress(id)}
        onMouseUp={() => setPress(null)}
        onTouchStart={() => setPress(id)}
        onTouchEnd={() => setPress(null)}
        onMouseLeave={() => setPress(null)}
        style={{ 
          cursor: "pointer", 
          transform: down ? "translateY(8px) scale(0.96)" : "translateY(0)",
          transition: "all 0.15s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* BOTTOM THICK LAYER */}
        <div style={{
          background: bottom,
          borderRadius: "20px",
          height: "84px",
          marginTop: "-52px",
          paddingTop: "48px",
          boxShadow: down ? "0 2px 6px rgba(0,0,0,0.3)" : "0 8px 0 rgba(0,0,0,0.2), 0 12px 20px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.15)",
          textAlign: "center",
        }}>
          <span style={{ color: "#fff", fontSize: "11px", fontWeight: "800", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>{name}</span>
        </div>

        {/* TOP GLOSSY LAYER */}
        <div style={{
          background: `linear-gradient(180deg, ${top} 0%, ${top}dd 100%)`,
          borderRadius: "18px",
          height: "58px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          boxShadow: down 
            ? "inset 0 2px 6px rgba(0,0,0,0.3)" 
            : `inset 0 2.5px 0 rgba(255,255,255,0.65), inset 0 -3px 8px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.25)`,
          border: "1px solid rgba(255,255,255,0.25)",
          overflow: "hidden"
        }}>
          {/* Strong White Highlight */}
          <div style={{
            position: "absolute", top: "2px", left: "6%", right: "6%", height: "18px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)",
            borderRadius: "14px"
          }}/>
          <div style={{ position: "relative", zIndex: 3, fontWeight: "900", color: "#fff", fontSize: "18px", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
            {logo}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0e0a2a", display: "flex", justifyContent: "center", padding: "12px" }}>
      <div style={{ width: "100%", maxWidth: "380px", background: "linear-gradient(180deg, #2a1b5a 0%, #1a103a 100%)", borderRadius: "32px", padding: "18px", border: "1px solid rgba(168,129,255,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1 style={{ color: "#fff", fontSize: "32px", fontWeight: "900", margin: 0, textShadow: "0 2px 10px rgba(168,129,255,0.5)" }}>মোবাইল ওয়ালেট</h1>
          <p style={{ color: "#c5aaff", fontSize: "13px", marginTop: "4px" }}>আপনার পছন্দের পেমেন্ট বেছে নিন</p>
        </div>

        {/* BALANCE CARD */}
        <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)", borderRadius: "20px", padding: "16px", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)", textAlign: "center" }}>
          <div style={{ color: "#c5aaff", fontSize: "13px" }}>মোট ব্যালেন্স</div>
          <div style={{ color: "#fff", fontSize: "36px", fontWeight: "900", margin: "4px 0" }}>৳১২,৪৫০.০০</div>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "6px" }}>
            <span style={{ background: "rgba(0,0,0,0.3)", padding: "4px 10px", borderRadius: "20px", color: "#7CFFB2", fontSize: "11px" }}>↑ আজ আয় ৮৫০.০০</span>
            <span style={{ color: "#a78bfa", fontSize: "11px" }}>•• 1234</span>
          </div>
        </div>

        <div style={{ color: "#fff", fontWeight: "700", margin: "18px 0 22px", fontSize: "15px" }}>পেমেন্ট অপশন</div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "18px 12px" }}>
          <Btn id="bk" name="bKash" top="#ff2a7a" bottom="#c81a5a" logo={<span><span style={{fontStyle:"italic"}}>b</span> bKash</span>} />
          <Btn id="ng" name="Nagad" top="#ff8c1a" bottom="#d96e00" logo={<span style={{display:"flex",alignItems:"center",gap:"4px"}}><span style={{background:"#fff",color:"#ff6a00",width:"20px",height:"20px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"}}>৳</span> নগদ</span>} />
          <Btn id="rk" name="Rocket" top="#7c4dff" bottom="#5a2fcf" logo={<span>🚀 Rocket</span>} />
          <Btn id="up" name="Upay" top="#2d7bff" bottom="#1a5fcc" logo={<span>Upay⚡</span>} />
          <Btn id="us" name="USDT" top="#22b86d" bottom="#178a4f" logo={<span>USDT</span>} />
          <Btn id="mc" name="mCash" top="#ff8c1a" bottom="#d96e00" logo={<span>mCash</span>} />
          <div style={{ gridColumn: "2" }}>
            <Btn id="db" name="DBBL" top="#1a2a3a" bottom="#0f1c28" logo={<span style={{color:"#d4af37"}}>DBBL 🏛️</span>} />
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div style={{ marginTop: "24px", background: "rgba(0,0,0,0.4)", borderRadius: "24px", display: "flex", justifyContent: "space-around", padding: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ textAlign: "center", color: "#a78bfa" }}><div>🏠</div><div style={{ fontSize: "10px" }}>হোম</div></div>
          <div style={{ textAlign: "center", color: "#666" }}><div>🕒</div><div style={{ fontSize: "10px" }}>ইতিহাস</div></div>
          <div style={{ textAlign: "center", color: "#666" }}><div>👤</div><div style={{ fontSize: "10px" }}>প্রোফাইল</div></div>
        </div>

      </div>
    </div>
  );
}
