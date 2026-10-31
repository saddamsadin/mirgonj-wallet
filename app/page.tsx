"use client";
import { useState } from "react";

const btn3D = (color: string) => ({
  background: `linear-gradient(180deg, ${color} 0%, ${color}dd 100%)`,
  borderRadius: "20px",
  padding: "12px 8px 8px",
  textAlign: "center" as const,
  position: "relative" as const,
  boxShadow: `0 8px 0 ${color}99, 0 12px 20px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.3)`,
  transform: "translateY(0px)",
  transition: "all 0.15s ease",
  cursor: "pointer",
  userSelect: "none" as const,
});

export default function Page(){
  const [pressed, setPressed] = useState<string | null>(null);

  const LogoCard = ({id, name, color, children}: any) => (
    <div
      onMouseDown={()=>setPressed(id)}
      onMouseUp={()=>setPressed(null)}
      onTouchStart={()=>setPressed(id)}
      onTouchEnd={()=>setPressed(null)}
      style={{
        ...btn3D(color),
        transform: pressed===id ? "translateY(6px)" : "translateY(0px)",
        boxShadow: pressed===id 
          ? `0 2px 0 ${color}99, 0 4px 10px rgba(0,0,0,0.3)` 
          : `0 8px 0 ${color}99, 0 12px 20px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.3)`,
      }}
    >
      <div style={{background:"#fff",width:"56px",height:"56px",borderRadius:"14px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 2px 6px rgba(0,0,0,0.15)"}}>
        {children}
      </div>
      <div style={{color:"#fff",fontSize:"12px",fontWeight:"800",marginTop:"8px",textShadow:"0 1px 2px rgba(0,0,0,0.3)"}}>{name}</div>
    </div>
  );

  return(
    <div style={{minHeight:"100vh",background:"#0f0f2a",padding:"16px"}}>
      <div style={{maxWidth:"400px",margin:"0 auto"}}>
        <h1 style={{color:"#fff",fontSize:"22px",fontWeight:"900"}}>শুভ সন্ধ্যা রাহিম</h1>
        <p style={{color:"#a8a8d0",fontSize:"12px"}}>আপনার ডিজিটাল ওয়ালেট</p>
        <div style={{background:"rgba(255,255,255,0.12)",borderRadius:"20px",padding:"16px",marginTop:"16px",border:"1px solid rgba(255,255,255,0.2)"}}>
          <div style={{color:"#fff",fontSize:"32px",fontWeight:"900"}}>৳24,580.50</div>
        </div>
        <div style={{color:"#fff",fontWeight:"700",margin:"18px 0 10px"}}>মোবাইল ব্যাংকিং</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px"}}>
          <LogoCard id="bk" name="bKash" color="#E2136E"><span style={{fontWeight:"900"}}><span style={{color:"#E2136E"}}>b</span>Kash</span></LogoCard>
          <LogoCard id="ng" name="নগদ" color="#FF6A00"><div style={{textAlign:"center"}}><div style={{background:"#FF6A00",color:"#fff",width:"22px",height:"22px",borderRadius:"50%",margin:"0 auto",fontWeight:"900",fontSize:"12px"}}>N</div><div style={{fontSize:"11px",color:"#FF6A00",fontWeight:"900"}}>নগদ</div></div></LogoCard>
          <LogoCard id="rk" name="রকেট" color="#8A2BE2"><div>🚀<div style={{fontSize:"9px",fontWeight:"900",color:"#8A2BE2"}}>রকেট</div></div></LogoCard>
          <LogoCard id="up" name="উপায়" color="#00B4D8"><span style={{fontWeight:"900",color:"#00B4D8"}}>Upay</span></LogoCard>
          <LogoCard id="us" name="USDT" color="#26A17B"><div style={{width:"28px",height:"28px",background:"#26A17B",borderRadius:"6px",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900"}}>T</div></LogoCard>
          <LogoCard id="mc" name="mCash" color="#FF6A00"><span style={{fontWeight:"900",color:"#E2136E"}}>mCash</span></LogoCard>
          <LogoCard id="db" name="DBBL" color="#4a5a6a"><div style={{fontWeight:"900",color:"#4a5a6a"}}>DBBL</div></LogoCard>
        </div>
      </div>
    </div>
  );
}
