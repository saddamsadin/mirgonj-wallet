"use client";
export default function Page(){
  return(
    <div style={{minHeight:'100vh',background:'#0f0f2a',padding:'0'}}>
      <div style={{maxWidth:'400px',margin:'0 auto',minHeight:'100vh',background:'linear-gradient(180deg,#6b6bb8,#2a2a5a 40%,#121230 100%)',padding:'16px'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><h1 style={{color:'#fff',fontSize:'22px',fontWeight:'900',margin:0}}>শুভ সন্ধ্যা রাহিম</h1><p style={{color:'#a8a8d0',fontSize:'12px',margin:'4px 0 0'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'8px'}}><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>🌙</div><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#1a1a3a',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
        </div>

        <div style={{background:'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'20px',padding:'18px',marginTop:'16px'}}>
          <div style={{display:'inline-block',padding:'5px 12px',borderRadius:'20px',background:'rgba(255,255,255,0.15)',fontSize:'11px',color:'#e0e0ff'}}>মোট ব্যালেন্স</div>
          <div style={{color:'#fff',fontSize:'36px',fontWeight:'900',marginTop:'8px'}}>৳24,580.50</div>
          <div style={{color:'#7CFFB2',fontSize:'12px',marginTop:'4px'}}>↑ +2,140.00 এই মাসে</div>
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(0,0,0,0.2)',borderRadius:'12px',padding:'12px',marginTop:'14px'}}>
            <div><div style={{fontSize:'11px',color:'#9a9ac0'}}>কার্ড ••••</div><b style={{color:'#fff',fontSize:'14px'}}>8847</b></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'20px'}}><div style={{fontSize:'11px',color:'#9a9ac0'}}>মেয়াদ</div><b style={{color:'#fff'}}>12/27</b></div>
            <div style={{color:'#fff',fontWeight:'900',fontStyle:'italic',fontSize:'18px'}}>VISA</div>
          </div>
        </div>

        <div style={{color:'#fff',fontSize:'14px',fontWeight:'700',margin:'18px 0 12px'}}>মোবাইল ব্যাংকিং</div>
        
        {/* REAL LOOKING LOGOS - CSS ONLY, NEVER BREAKS */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px',marginBottom:'10px'}}>
          
          <div style={{background:'#E2136E',borderRadius:'16px',padding:'12px 6px',textAlign:'center',boxShadow:'0 6px 14px rgba(226,19,110,0.4)'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',fontSize:'13px'}}>
              <span style={{color:'#E2136E'}}>b</span><span style={{color:'#222'}}>Kash</span>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>bKash</div>
          </div>

          <div style={{background:'#FF6A00',borderRadius:'16px',padding:'12px 6px',textAlign:'center',boxShadow:'0 6px 14px rgba(255,106,0,0.4)'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{width:'24px',height:'24px',background:'#FF6A00',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:'900',fontSize:'14px'}}>N</div>
              <div style={{fontSize:'9px',fontWeight:'900',color:'#FF6A00',marginTop:'2px'}}>নগদ</div>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>নগদ</div>
          </div>

          <div style={{background:'#8A2BE2',borderRadius:'16px',padding:'12px 6px',textAlign:'center',boxShadow:'0 6px 14px rgba(138,43,226,0.4)'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{fontWeight:'900',color:'#8A2BE2',fontSize:'16px',lineHeight:'1'}}>R🚀</div>
              <div style={{fontSize:'8px',fontWeight:'900',color:'#8A2BE2'}}>রকেট</div>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>রকেট</div>
          </div>

          <div style={{background:'#00B4D8',borderRadius:'16px',padding:'12px 6px',textAlign:'center',boxShadow:'0 6px 14px rgba(0,180,216,0.4)'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{fontWeight:'900',fontSize:'20px',color:'#00B4D8',lineHeight:'1'}}>u<span style={{color:'#FFD700'}}>•</span></div>
              <div style={{fontSize:'8px',fontWeight:'900',color:'#333'}}>উপায়</div>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>উপায়</div>
          </div>

          <div style={{background:'#4A5A6A',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'32px',height:'32px',background:'#26A17B',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:'900'}}>₮</div>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>USDT</div>
          </div>

          <div style={{background:'#E2136E',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{fontWeight:'900',color:'#D00000',fontSize:'12px'}}>mCash</div>
              <div style={{fontSize:'7px',color:'#D00000'}}>এম ক্যাশ</div>
            </div>
            <div style={{color:'#fff',fontSize:'11px',marginTop:'7px',fontWeight:'700'}}>mCash</div>
          </div>

          <div style={{background:'#003CA9',borderRadius:'16px',padding:'12px 6px',textAlign:'center'}}>
            <div style={{background:'#fff',width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'32px',height:'8px',background:'linear-gradient(90deg,#003CA9,#FF0000,#00A651)',borderRadius:'4px',transform:'skewX(-15deg)'}}></div>
            </div>
            <div style={{color:'#fff',fontSize:'10px',marginTop:'7px',fontWeight:'700'}}>DBBL</div>
          </div>

          <div style={{background:'rgba(255,255,255,0.08)',borderRadius:'16px',padding:'12px 6px',textAlign:'center',border:'1px solid rgba(255,255,255,0.1)'}}>
            <div style={{width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px'}}>➕</div>
            <div style={{color:'#d0d0f0',fontSize:'11px',marginTop:'7px'}}>আরও</div>
          </div>

        </div>

       
