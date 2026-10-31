"use client";
import { useState } from "react";

export default function Page() {
  const [a, setA] = useState<string | null>(null);

  const Item = (props: {id:string, t:string, b:string, l:React.ReactNode, s:string, e?:string}) => (
    <div onMouseDown={()=>setA(props.id)} onMouseUp={()=>setA(null)} onTouchStart={()=>setA(props.id)} onTouchEnd={()=>setA(null)} style={{height:"92px", position:"relative", transform: a===props.id ? "translateY(5px)" : "none", transition:"0.12s", cursor:"pointer"}}>
      <div style={{position:"absolute", bottom:0, width:"100%", height:"62px", background:props.b, borderRadius:"18px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", paddingBottom:"5px", boxShadow:"0 5px 0 rgba(0,0,0,0.25)"}}>
        <span style={{color:"#fff", fontSize:"12px", fontWeight:700}}>{props.s}</span>
        {props.e && <span style={{color:"#fff", fontSize:"8px", opacity:0.7}}>{props.e}</span>}
      </div>
      <div style={{position:"absolute", top:0, width:"100%", height:"56px", background:`linear-gradient(180deg, ${props.t}, ${props.t}dd)`, borderRadius:"18px", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(255,255,255,0.2)", boxShadow:"inset 0 2px 0 rgba(255,255,255,0.5)", overflow:"hidden"}}>
        <div style={{position:"absolute", top:0, left:0, right:0, height:"50%", background:"linear-gradient(180deg, rgba(255,255,255,0.4), transparent)"}}/>
        <div style={{position:"relative", color:"#fff", fontWeight:800}}>{props.l}</div>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh", background:"#0e0b25", display:"flex", justifyContent:"center", padding:"10px"}}>
      <div style={{width:"380px", background:"radial-gradient(at top, #2a1c5a, #18123a)", borderRadius:"32px", padding:"14px", border:"1px solid rgba(255,255,255,0.1)"}}>
        <h1 style={{textAlign:"center", color:"#fff", fontSize:"30px", fontWeight:900, margin:"8px 0 0"}}>মোবাইল ওয়ালেট</h1>
        <p style={{textAlign:"center", color:"#b9a5e8", fontSize:"13px", marginBottom:"14px"}}>আপনার পছন্দের পেমেন্ট বেছে নিন</p>
        <div style={{background:"rgba(255,255,255,0.1)", borderRadius:"20px", padding:"14px", textAlign:"center", border:"1px solid rgba(255,255,255,0.15)"}}>
          <div style={{color:"#c9b8ff", fontSize:"13px"}}>মোট ব্যালেন্স</div>
          <div style={{color:"#fff", fontSize:"36px", fontWeight:900}}>৳১২,৪৫০.০০</div>
        </div>
        <div style={{color:"#fff", fontWeight:700, margin:"16px 0 12px"}}>পেমেন্ট অপশন</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"14px 10px"}}>
          <Item id="1" t="#ff4d98" b="#b92e64" l={<>bKash</>} s="bKash"/>
          <Item id="2" t="#ff9a2e" b="#c96e18" l={<>নগদ</>} s="Nagad"/>
          <Item id="3" t="#8a5cff" b="#5e36bb" l={<>🚀 Rocket</>} s="Rocket"/>
          <Item id="4" t="#2f7bff" b="#1f4fb5" l={<>Upay⚡</>} s="Upay"/>
          <Item id="5" t="#1fb86a" b="#147a44" l={<>USDT</>} s="USDT" e="চাপ দেওয়া"/>
          <Item id="6" t="#ff8a24" b="#c26112" l={<>mCash</>} s="mCash"/>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"14px"}}>
          <div style={{width:"33%"}}><Item id="7" t="#111f2f" b="#0a1622" l={<><span style={{color:"#e6c165"}}>DBBL</span> 🏛️</>} s="DBBL"/></div>
        </div>
      </div>
    </div>
  );
}
