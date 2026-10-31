"use client";

const img = {
  bkash: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><text x='50' y='62' text-anchor='middle' font-family='Arial Black' font-size='30'><tspan fill='%23E2136E'>b</tspan><tspan fill='black'>Kash</tspan></text></svg>",
  nagad: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><circle cx='50' cy='38' r='18' fill='%23FF6A00'/><text x='50' y='44' text-anchor='middle' fill='white' font-weight='900' font-size='20'>N</text><text x='50' y='78' text-anchor='middle' fill='%23FF6A00' font-weight='900' font-size='18'>নগদ</text></svg>",
  rocket: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><text x='50' y='40' text-anchor='middle' font-size='28'>🚀</text><text x='50' y='75' text-anchor='middle' fill='%238A2BE2' font-weight='900' font-size='16'>রকেট</text></svg>",
  upay: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><text x='50' y='45' text-anchor='middle' fill='%2300B4D8' font-weight='900' font-size='22'>Upay</text><text x='50' y='68' text-anchor='middle' font-weight='700' font-size='16'>উপায়</text></svg>",
  usdt: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><path d='M50 15 L85 32 L85 68 L50 85 L15 68 L15 32 Z' fill='%2326A17B'/><text x='50' y='65' text-anchor='middle' fill='white' font-weight='900' font-size='36'>T</text></svg>",
  mcash: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><text x='50' y='68' text-anchor='middle' fill='%23E2136E' font-weight='900' font-size='18'>এম ক্যাশ</text><text x='50' y='38' text-anchor='middle' fill='%23FF6A00' font-weight='900' font-size='28'>M</text></svg>",
  dbbl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='white'/><g transform='rotate(-15 50 50)'><rect x='15' y='42' width='70' height='10' rx='5' fill='%230068B5'/><rect x='15' y='56' width='70' height='10' rx='5' fill='%23E2136E'/><rect x='15' y='70' width='70' height='10' rx='5' fill='%2300A651'/></g></svg>"
};

export default function Page() {
  return (
    <div style={{minHeight:"100vh",background:"#0f0f2a",paddingBottom:"40px"}}>
      <div style={{maxWidth:"400px",margin:"0 auto",minHeight:"100vh",background:"linear-gradient(180deg,#6b6bb8 0%,#2a2a5a 40%,#121230 100%)",padding:"16px"}}>
        <h1 style={{color:"#fff",fontSize:"22px",fontWeight:"900",margin:0}}>শুভ সন্ধ্যা রাহিম</h1>
        <p style={{color:"#a8a8d0",fontSize:"12px",marginTop:"4px"}}>আপনার ডিজিটাল ওয়ালেট</p>
        <div style={{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"20px",padding:"16px",marginTop:"16px"}}>
          <div style={{color:"#fff",fontSize:"34px",fontWeight:"900"}}>৳24,580.50</div>
          <div style={{color:"#7CFFB2",fontSize:"12px"}}>↑ +2,140.00 এই মাসে</div>
          <div style={{display:"flex",justifyContent:"space-between",background:"rgba(0,0,0,0.15)",borderRadius:"12px",padding:"10px",marginTop:"12px",color:"#fff"}}>
            <div><div style={{fontSize:"11px",color:"#9a9ac0"}}>কার্ড ••••</div><b>8847</b></div>
            <div style={{borderLeft:"1px solid rgba(255,255,255,0.1)",paddingLeft:"16px"}}><div style={{fontSize:"11px",color:"#9a9ac0"}}>মেয়াদ</div><b>12/27</b></div>
            <div style={{fontWeight:"900",fontStyle:"italic"}}>VISA</div>
          </div>
        </div>
        <div style={{color:"#fff",fontSize:"14px",fontWeight:"700",margin:"18px 0 10px"}}>মোবাইল ব্যাংকিং</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"10px"}}>
          <div style={{background:"#E2136E",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.bkash} width={52} height={52} style={{borderRadius:"12px"}} alt="bKash" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px",fontWeight:"700"}}>bKash</div></div>
          <div style={{background:"#FF6A00",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.nagad} width={52} height={52} style={{borderRadius:"12px"}} alt="Nagad" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px",fontWeight:"700"}}>নগদ</div></div>
          <div style={{background:"#8A2BE2",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.rocket} width={52} height={52} style={{borderRadius:"12px"}} alt="Rocket" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px",fontWeight:"700"}}>রকেট</div></div>
          <div style={{background:"#00B4D8",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.upay} width={52} height={52} style={{borderRadius:"12px"}} alt="Upay" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px",fontWeight:"700"}}>উপায়</div></div>
          <div style={{background:"#4a5a6a",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.usdt} width={52} height={52} style={{borderRadius:"12px"}} alt="USDT" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px"}}>USDT</div></div>
          <div style={{background:"#FF6A00",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.mcash} width={52} height={52} style={{borderRadius:"12px"}} alt="mCash" /><div style={{color:"#fff",fontSize:"11px",marginTop:"6px"}}>mCash</div></div>
          <div style={{background:"#4a5a6a",borderRadius:"16px",padding:"10px",textAlign:"center"}}><img src={img.dbbl} width={52} height={52} style={{borderRadius:"12px"}} alt="DBBL" /><div style={{color:"#fff",fontSize:"10px",marginTop:"6px"}}>DBBL</div></div>
        </div>
      </div>
    </div>
  );
}
