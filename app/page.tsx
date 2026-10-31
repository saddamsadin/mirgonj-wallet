"use client";
import { useState, useEffect } from "react";
type Tx={id:number; title:string; time:string; amount:number; type:'income'|'expense'; icon:string; bg:string};

export default function Page(){
  const [balance,setBalance]=useState(24580.50);
  const [list,setList]=useState<Tx[]>([
    {id:1,title:"Amazon কেনাকাটা",time:"আজ · 05:42 PM",amount:1250,type:'expense',icon:"🛍️",bg:"#ede9fe"},
    {id:2,title:"সলারি জমা",time:"গতকাল · 09:15 AM",amount:12000,type:'income',icon:"↓",bg:"#d1fae5"},
    {id:3,title:"বিদ্যুৎ বিল",time:"১৯ অক্ট · 06:30 PM",amount:1180,type:'expense',icon:"⚡",bg:"#fef3c7"},
  ]);
  const [name,setName]=useState(""); const [amount,setAmount]=useState("");
  const [isDark,setIsDark]=useState(false);

  useEffect(()=>{ const b=localStorage.getItem("mirgonj_b_light"); if(b) setBalance(Number(b)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_b_light",String(balance)); },[balance]);

  const add=(t:'income'|'expense')=>{
    if(!name||!amount) return alert("নাম ও টাকা দিন");
    const a=Number(amount);
    setList([{id:Date.now(),title:name,time:`আজ · ${new Date().toLocaleTimeString('bn-BD')}`,amount:a,type:t,icon:t==='income'?'↓':'🛍️',bg:t==='income'?'#d1fae5':'#fee2e2'},...list]);
    setBalance(t==='income'?balance+a:balance-a); setName(""); setAmount("");
  };

  return(
    <div style={{minHeight:'100vh',background:isDark ? 'radial-gradient(800px at 50% 0%, #8b8de8 0%, #1e1e40 35%, #080810 100%)' : 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',color:isDark?'#fff':'#0f172a',padding:'16px',fontFamily:'system-ui',transition:'0.3s'}}>
      <div style={{maxWidth:'380px',margin:'0 auto',background:isDark?'rgba(255,255,255,0.08)':'#ffffff',backdropFilter:isDark?'blur(40px)':'none',border:isDark?'1px solid rgba(255,255,255,0.15)':'1px solid #e2e8f0',borderRadius:'28px',padding:'16px',boxShadow:isDark?'0 30px 80px rgba(0,0,0,0.6)':'0 20px 60px rgba(0,0,0,0.08)',transition:'0.3s'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'18px'}}>
          <div><h1 style={{fontSize:'22px',fontWeight:'900',margin:0}}>শুভ সন্ধ্যা রাহিম</h1><p style={{fontSize:'12px',opacity:0.6,margin:'4px 0 0',color:isDark?'#c7c5ff':'#64748b'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button onClick={()=>setIsDark(!isDark)} style={{width:'32px',height:'32px',borderRadius:'50%',background:isDark?'rgba(255,255,255,0.15)':'#f1f5f9',border:'1px solid #e2e8f0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}}>{isDark?'☀️':'🌙'}</button>
            <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#e2e8f0',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div>
          </div>
        </div>

        <div style={{background:isDark?'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 100%)':'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',border:isDark?'1px solid rgba(255,255,255,0.25)':'none',borderRadius:'20px',padding:'16px',marginBottom:'14px',color:'#fff',boxShadow:'0 10px 30px rgba(99,102,241,0.3)'}}>
          <div style={{display:'inline-block',padding:'4px 10px',borderRadius:'12px',background:'rgba(255,255,255,0.2)',fontSize:'11px',marginBottom:'10px'}}>মোট ব্যালেন্স</div>
          <h2 style={{fontSize:'36px',fontWeight:'900',margin:0}}>৳{balance.toLocaleString('en-IN',{minimumFractionDigits:2})}</h2>
          <p style={{color:'#bbf7d0',fontSize:'12px',margin:'4px 0 14px'}}>↑ +2,140.00 এই মাসে</p>
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'12px',padding:'10px 12px'}}>
            <div><div style={{fontSize:'10px',opacity:0.8}}>কার্ড ••••</div><b style={{fontSize:'12px'}}>8847</b></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.2)',paddingLeft:'16px'}}><div style={{fontSize:'10px',opacity:0.8}}>মেয়াদ</div><b style={{fontSize:'12px'}}>12/27</b></div>
            <div style={{fontWeight:'900',fontStyle:'italic'}}>VISA</div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'8px',marginBottom:'18px'}}>
          {[
            {n:'পাঠান',i:'✈️'},{n:'রিচার্জ',i:'🏛️'},{n:'বিল পেমেন্ট',i:'🧾'},{n:'ক্যাশআউট',i:'💵'},
          ].map(b=>(
            <div key={b.n} style={{background:isDark?'rgba(255,255,255,0.1)':'#f8fafc',border:isDark?'1px solid rgba(255,255,255,0.15)':'1px solid #e2e8f0',borderRadius:'12px',padding:'10px 2px',textAlign:'center'}}>
              <div style={{fontSize:'18px'}}>{b.i}</div><div style={{fontSize:'10px',marginTop:'4px',fontWeight:'600'}}>{b.n}</div>
            </div>
          ))}
        </div>

        <div style={{display:'flex',gap:'6px',marginBottom:'18px'}}>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="নাম" style={{flex:1,padding:'10px',borderRadius:'10px',background:isDark?'rgba(0,0,0,0.3)':'#f1f5f9',border:'1px solid #e2e8f0',color:isDark?'white':'#0f172a',outline:'none',fontSize:'12px'}}/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="৳" style={{width:'70px',padding:'10px',borderRadius:'10px',background:isDark?'rgba(0,0,0,0.3)':'#f1f5f9',border:'1px solid #e2e8f0',color:isDark?'white':'#0f172a',outline:'none'}}/>
          <button onClick={()=>add('income')} style={{padding:'10px 14px',borderRadius:'10px',border:'none',background:'#22c55e',color:'white',fontWeight:'700',fontSize:'12px'}}>যোগ</button>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}><b style={{fontSize:'14px'}}>সাম্প্রতিক লেনদেন</b><span style={{fontSize:'11px',color:'#6366f1'}}>সব দেখুন &gt;</span></div>
        {list.map(c=>(
          <div key={c.id} style={{background:isDark?'rgba(255,255,255,0.08
