"use client";
import { useState } from "react";

export default function Page(){
  const [balance,setBalance]=useState(24580.50);
  const [list,setList]=useState([
    {id:1,title:"Amazon কেনাকাটা",time:"আজ · 05:42 PM",amount:1250,type:'expense',icon:"🛍️",bg:"#7c3aed"},
    {id:2,title:"স্যালারি জমা",time:"গতকাল · 09:15 AM",amount:12000,type:'income',icon:"↓",bg:"#10b981"},
    {id:3,title:"বিদ্যুৎ বিল",time:"১৯ অক্ট · 06:30 PM",amount:1180,type:'expense',icon:"⚡",bg:"#f59e0b"},
  ]);

  return(
    <div style={{minHeight:'100vh',background:'radial-gradient(800px at 50% 0%, #8b8de8 0%, #1e1e40 35%, #080810 100%)',color:'#fff',padding:'16px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'380px',margin:'0 auto',background:'rgba(255,255,255,0.08)',backdropFilter:'blur(40px)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'28px',padding:'16px',boxShadow:'0 30px 80px rgba(0,0,0,0.6)'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'18px'}}>
          <div><h1 style={{fontSize:'22px',fontWeight:'900',margin:0}}>শুভ সন্ধ্যা রাহিম</h1><p style={{fontSize:'12px',opacity:0.6,margin:'4px 0 0',color:'#c7c5ff'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'8px'}}><div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>🌙</div><div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#333',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
        </div>

        <div style={{background:'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 100%)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:'20px',padding:'16px',marginBottom:'16px'}}>
          <div style={{display:'inline-block',padding:'4px 10px',borderRadius:'12px',background:'rgba(255,255,255,0.15)',fontSize:'11px',marginBottom:'10px'}}>মোট ব্যালেন্স</div>
          <h2 style={{fontSize:'36px',fontWeight:'900',margin:0}}>৳{balance.toLocaleString('en-IN',{minimumFractionDigits:2})}</h2>
          <p style={{color:'#86efac',fontSize:'12px',margin:'4px 0 14px'}}>↑ +2,140.00 এই মাসে</p>
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'12px',padding:'10px 12px'}}>
            <div><div style={{fontSize:'10px',opacity:0.6}}>কার্ড ••••</div><b style={{fontSize:'12px'}}>8847</b></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.15)',paddingLeft:'16px'}}><div style={{fontSize:'10px',opacity:0.6}}>মেয়াদ</div><b style={{fontSize:'12px'}}>12/27</b></div>
            <div style={{fontWeight:'900',fontStyle:'italic'}}>VISA</div>
          </div>
        </div>

        {/* bKash / Nagad / Rocket - NEW */}
        <div style={{marginBottom:'16px'}}>
          <div style={{fontSize:'12px',fontWeight:'700',marginBottom:'8px',opacity:0.8}}>মোবাইল ব্যাংকিং</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px'}}>
            <div style={{background:'#E2136E',borderRadius:'14px',padding:'12px 4px',textAlign:'center',boxShadow:'0 8px 20px rgba(226,19,110,0.4)'}}><div style={{background:'#fff',width:'32px',height:'32px',borderRadius:'8px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',color:'#E2136E',fontSize:'14px'}}>b</div><div style={{fontSize:'10px',marginTop:'6px',fontWeight:'700'}}>bKash</div></div>
            <div style={{background:'#F15A22',borderRadius:'14px',padding:'12px 4px',textAlign:'center',boxShadow:'0 8px 20px rgba(241,90,34,0.4)'}}><div style={{background:'#fff',width:'32px',height:'32px',borderRadius:'8px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',color:'#F15A22',fontSize:'12px'}}>N</div><div style={{fontSize:'10px',marginTop:'6px',fontWeight:'700'}}>Nagad</div></div>
            <div style={{background:'#8A2BE2',borderRadius:'14px',padding:'12px 4px',textAlign:'center',boxShadow:'0 8px 20px rgba(138,43,226,0.4)'}}><div style={{background:'#fff',width:'32px',height:'32px',borderRadius:'8px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',color:'#8A2BE2',fontSize:'12px'}}>R</div><div style={{fontSize:'10px',marginTop:'6px',fontWeight:'700'}}>Rocket</div></div>
            <div style={{background:'#00B4D8',borderRadius:'14px',padding:'12px 4px',textAlign:'center',boxShadow:'0 8px 20px rgba(0,180,216,0.4)'}}><div style={{background:'#fff',width:'32px',height:'32px',borderRadius:'8px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',color:'#00B4D8',fontSize:'10px'}}>U</div><div style={{fontSize:'10px',marginTop:'6px',fontWeight:'700'}}>Upay</div></div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'8px',marginBottom:'18px'}}>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'12px',padding:'10px 2px',textAlign:'center'}}><div>✈️</div><div style={{fontSize:'10px',marginTop:'4px'}}>পাঠান</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'12px',padding:'10px 2px',textAlign:'center'}}><div>🏛️</div><div style={{fontSize:'10px',marginTop:'4px'}}>রিচার্জ</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'12px',padding:'10px 2px',textAlign:'center'}}><div>🧾</div><div style={{fontSize:'10px',marginTop:'4px'}}>বিল পেমেন্ট</div></div>
          <div style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'12px',padding:'10px 2px',textAlign:'center'}}><div>💵</div><div style={{fontSize:'10px',marginTop:'4px'}}>ক্যাশআউট</div></div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}><b style={{fontSize:'14px'}}>সাম্প্রতিক লেনদেন</b><span style={{fontSize:'11px',color:'#93c5fd'}}>সব দেখুন &gt;</span></div>
        {list.map(c=>(
          <div key={c.id} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'14px',padding:'10px 12px',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}><div style={{width:'36px',height:'36px',borderRadius:'10px',background:c.bg,display:'flex',alignItems:'center',justifyContent:'center'}}>{c.icon}</div><div><div style={{fontSize:'12px',fontWeight:'700'}}>{c.title}</div><div style={{fontSize:'10px',opacity:0.6}}>{c.time}</div></div></div>
            <b style={{fontSize:'12px',color:c.type==='income'?'#4ade80':'#fb7185'}}>{c.type==='income'?'+':'-'}৳{c.amount.toLocaleString()}</b>
          </div>
        ))}

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'0',background:'rgba(0,0,0,0.2)',borderRadius:'16px',padding:'8px',marginTop:'14px'}}>
          <div style={{textAlign:'center'}}><div>🏠</div><div style={{fontSize:'10px',color:'#60a5fa'}}>হোম</div></div>
          <div style={{textAlign:'center',opacity:0.5}}><div>👛</div><div style={{fontSize:'10px'}}>ওয়ালেট</div></div>
          <div style={{textAlign:'center',opacity:0.5}}><div>🕒</div><div style={{fontSize:'10px'}}>লেনদেন</div></div>
          <div style={{textAlign:'center',opacity:0.5}}><div>👤</div><div style={{fontSize:'10px'}}>প্রোফাইল</div></div>
        </div>
      </div>
    </div>
  );
      }
