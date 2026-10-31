"use client";

export default function Page(){
  return(
    <div style={{minHeight:'100vh',background:'radial-gradient(900px at 50% 0%, #8b8de8 0%, #1e1e40 30%, #080810 100%)',padding:'12px',fontFamily:'system-ui, Hind Siliguri'}}>
      <div style={{maxWidth:'380px',margin:'0 auto',background:'rgba(255,255,255,0.08)',backdropFilter:'blur(40px)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'28px',padding:'16px',boxShadow:'0 30px 80px rgba(0,0,0,0.7)'}}>
        
        {/* Header - আপনার Screenshot এর মতো */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
          <div><h1 style={{fontSize:'22px',fontWeight:'900',margin:0,color:'#fff'}}>শুভ সন্ধ্যা রাহিম</h1><p style={{fontSize:'12px',color:'#9ea0d0',margin:'4px 0 0'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'8px'}}><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>🌙</div><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#222',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
        </div>

        <div style={{background:'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'20px',padding:'16px',marginBottom:'16px'}}>
          <div style={{display:'inline-block',padding:'5px 12px',borderRadius:'12px',background:'rgba(255,255,255,0.12)',fontSize:'11px',color:'#d0d0f0',marginBottom:'10px'}}>মোট ব্যালেন্স</div>
          <h2 style={{fontSize:'36px',fontWeight:'900',margin:0,color:'#fff'}}>৳24,580.50</h2>
          <p style={{color:'#6ee7b7',fontSize:'12px',margin:'6px 0 14px'}}>↑ +2,140.00 এই মাসে</p>
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'12px',padding:'10px 12px'}}>
            <div><div style={{fontSize:'10px',color:'#9ea0d0'}}>কার্ড ••••</div><b style={{fontSize:'13px',color:'#fff'}}>8847</b></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.12)',paddingLeft:'16px'}}><div style={{fontSize:'10px',color:'#9ea0d0'}}>মেয়াদ</div><b style={{fontSize:'13px',color:'#fff'}}>12/27</b></div>
            <div style={{fontWeight:'900',fontStyle:'italic
