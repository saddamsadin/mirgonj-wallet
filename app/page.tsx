"use client";
import { useState, useEffect } from "react";

type Tx = { id:number; title:string; time:string; amount:number; type:'income'|'expense'; icon:string; color:string; };

export default function Page(){
  const [balance,setBalance] = useState(24580.50);
  const [list,setList] = useState<Tx[]>([
    {id:1,title:"Amazon কেনাকাটা",time:"আজ · 05:42 PM",amount:1250,type:'expense',icon:"🛍️",color:"#8b5cf6"},
    {id:2,title:"সলারি জমা",time:"গতকাল · 09:15 AM",amount:12000,type:'income',icon:"↓",color:"#10b981"},
    {id:3,title:"বিদ্যুৎ বিল",time:"১৯ অক্ট · 06:30 PM",amount:1180,type:'expense',icon:"⚡",color:"#f59e0b"},
  ]);
  const [name,setName]=useState(""); const [amount,setAmount]=useState("");

  useEffect(()=>{ const b=localStorage.getItem("mirgonj_balance_v2"); if(b) setBalance(Number(b)); const l=localStorage.getItem("mirgonj_list_v2"); if(l) setList(JSON.parse(l)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_balance_v2",String(balance)); localStorage.setItem("mirgonj_list_v2",JSON.stringify(list)); },[balance,list]);

  const add = (type:'income'|'expense') => {
    if(!name||!amount) return alert("নাম ও টাকা দিন");
    const a=Number(amount);
    const t:Tx={id:Date.now(),title:name,time:`আজ · ${new Date().toLocaleTimeString('bn-BD',{hour:'2-digit',minute:'2-digit'})}`,amount:a,type,icon:type==='income'?'↓':'🛍️',color:type==='income'?'#10b981':'#ef4444'};
    setList([t,...list]); setBalance(type==='income'?balance+a:balance-a); setName(""); setAmount("");
  };

  const glass = {
    background:'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
    backdropFilter:'blur(20px)', border:'1.5px solid rgba(255,255,255,0.2)', borderTop:'1.5px solid rgba(255,255,255,0.35)',
    boxShadow:'0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
  } as any;

  return(
    <div style={{minHeight:'100vh',background:'radial-gradient(900px at 50% -10%, #6d6fd1 0%, #1a1a35 30%, #0a0a15 100%)',color:'white',padding:'14px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'400px',margin:'0 auto'}}>

        {/* Header */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 4px 18px'}}>
          <div>
            <h1 style={{fontSize:'24px',fontWeight:'900',margin:0}}>শুভ সন্ধ্যা রাহিম</h1>
            <p style={{margin:'4px 0 0',fontSize:'13px',opacity:0.6,color:'#a5b4fc'}}>আপনার ডিজিটাল ওয়ালেট</p>
          </div>
          <div style={{display:'flex',gap:'10px'}}>
            <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,0.15)'}}>🌙</div>
            <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#222',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div>
          </div>
        </div>

        {/* Main Balance Card - EXACT LIKE IMAGE */}
        <div style={{...glass,borderRadius:'22px',padding:'18px',position:'relative',overflow:'hidden',marginBottom:'16px'}}>
          <div style={{position:'absolute',top:'-30px',right:'-30px',width:'180px',height:'180px',background:'rgba(255,255,255,0.08)',borderRadius:'50%',filter:'blur(20px)'}}></div>
          <div style={{display:'inline-block',padding:'5px 12px',borderRadius:'20px',background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',fontSize:'12px',marginBottom:'12px'}}>মোট ব্যালেন্স</div>
          <h2 style={{fontSize:'38px',fontWeight:'900',margin:0,letterSpacing:'-1px'}}>৳{balance.toLocaleString('en-IN',{minimumFractionDigits:2})}</h2>
          <p style={{color:'#4ade80',fontSize:'13px',margin:'6px 0 18px'}}>↑ +2,140.00 এই মাসে</p>
          
          <div style={{display:'flex',justifyContent:'space-between',background:'rgba(0,0,0,0.22)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'14px',padding:'12px 14px'}}>
            <div><div style={{fontSize:'11px',opacity:0.6}}>কার্ড ••••</div><div style={{fontWeight:'600',fontSize:'14px'}}>8847</div></div>
            <div style={{borderLeft:'1px solid rgba(255,255,255,0.15)',borderRight:'1px solid rgba(255,255,255,0.15)',padding:'0 22px'}}><div style={{fontSize:'11px',opacity:0.6}}>মেয়াদ</div><div style={{fontWeight:'600',fontSize:'14px'}}>12/27</div></div>
            <div style={{fontWeight:'900',fontStyle:'italic',fontSize:'20px'}}>VISA</div>
          </div>
        </div>

        {/* 4 Actions */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'10px',marginBottom:'20px'}}>
          {[
            {t:'পাঠান',i:'✈️'},{t
