"use client";
export default function Page(){
  return(
    <div style={{minHeight:'100vh',background:'#0f0f2a',padding:'0'}}>
      <div style={{maxWidth:'400px',margin:'0 auto',minHeight:'100vh',background:'linear-gradient(180deg,#6b6bb8 0%,#2a2a5a 40%,#121230 100%)',padding:'16px'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
          <div><h1 style={{fontSize:'24px',fontWeight:'900',margin:0,color:'#fff'}}>শুভ সন্ধ্যা রাহিম</h1><p style={{fontSize:'13px',color:'#a8a8d0',margin:'4px 0 0'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'10px'}}><div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>🌙</div><div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#1a1a3a',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
        </div>

        <div style={{background:'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'20px',padding:'18px',marginBottom:'18px'}}>
          <div style={{display:'inline-block',padding:'6px 14px',borderRadius:'20px',background:'rgba(255,255,255,0.15)',fontSize:'12px',color:'#e0e0ff',marginBottom:'12px'}}>মোট ব্যালেন্স</div>
          <h2 style={{fontSize:'38px',fontWeight:'900',margin:'0 0 8px',color:'#fff'}}>৳24,580.50</h2>
          <p style={{color:'#7CFFB2',fontSize:'13px',margin:'0 0 16px',fontWeight:'600'}}>↑ +2,140.00 এই মাসে</p>
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'12px',padding:'12px 14px'}}>
            <div><div style={{fontSize:'11px',color:'#9a9ac0'}}>কার্ড ••••</div><b style={{fontSize:'14px',color:'#fff',marginTop:'4px',display:'block'}}>8847</b></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'24px'}}><div style={{fontSize:'11px',color:'#9a9ac0'}}>মেয়াদ</div><b style={{fontSize:'14px',color:'#fff',marginTop:'4px',display:'block'}}>12/27</b></div>
            <div style={{fontWeight:'900',fontStyle:'italic',color:'#fff',fontSize:'18px'}}>VISA</div>
          </div>
        </div>

        <div style={{fontSize:'14px',fontWeight:'700',color:'#fff',marginBottom:'12px'}}>মোবাইল ব্যাংকিং</div>
        
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px',marginBottom:'10px'}}>
          <div style={{background:'#E2136E',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}><img src="https://seeklogo.com/images/B/bkash-logo-DDD71DB875-seeklogo.com.png" alt="bKash" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>bKash</div>
          </div>
          <div style={{background:'#FF6A00',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}><img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Nagad_Logo.png" alt="Nagad" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>Nagad</div>
          </div>
          <div style={{background:'#8A2BE2',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}><img src="https://winwin777-bd.com/wp-content/uploads/2026/03/rocket.png" alt="Rocket" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>Rocket</div>
          </div>
          <div style={{background:'#00B4D8',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}><img src="https://www.moumachi.com.bd//images/payments/20256-1067030547_upay-logo-png-hd-image-480x480.png" alt="Upay" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>Upay</div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px',marginBottom:'18px'}}>
          <div style={{background:'#26A17B',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'5px'}}><img src="https://images.seeklogo.com/logo-png/45/1/tether-usd-usdt-logo-png_seeklogo-452461.png" alt="USDT" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>USDT</div>
          </div>
          <div style={{background:'#D00000',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}><img src="https://thefe-bd.sgp1.cdn.digitaloceanspaces.com/posts/142242/mcash.png" alt="mCash" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>mCash</div>
          </div>
          <div style={{background:'#003CA9',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',padding:'5px'}}><img src="https://rsf-bd.org/wp-content/uploads/2025/05/DBBL-Logo.png" alt="DBBL" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
            <div style={{fontSize:'10px',marginTop:'8px',fontWeight:'700',color:'#fff'}}>DBBL</div>
          </div>
          <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'16px',padding:'12px 6px',textAlign:'center',border:'1px solid rgba(255,255,255,0.12)'}}>
            <div style={{width:'44px',height:'44px',borderRadius:'10px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>➕</div>
            <div style={{fontSize:'11px',marginTop:'8px',fontWeight:'600',color:'#d0d0f0'}}>আরও</div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px',marginBottom:'20px'}}>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'14px',padding:'14px 4px',textAlign:'center'}}><div style={{fontSize:'22px'}}>✈️</div><div style={{fontSize:'11px',marginTop:'6px',color:'#d0d0f0',fontWeight:'600'}}>পাঠান</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'14px',padding:'14px 4px',textAlign:'center'}}><div style={{fontSize:'22px'}}>🏛️</div><div style={{fontSize:'11px',marginTop:'6px',color:'#d0d0f0',fontWeight:'600'}}>রিচার্জ</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'14px',padding:'14px 4px',textAlign:'center'}}><div style={{fontSize:'22px'}}>🧾</div><div style={{fontSize:'11px',marginTop:'6px',color:'#d0d0f0',fontWeight:'600'}}>বিল পেমেন্ট</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.
