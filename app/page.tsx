"use client";
import { useState, useEffect } from "react";
type Tx = { id:number; name:string; amount:number; method:string; type:'income'|'expense'; time:string; };

export default function Page(){
  const [balance,setBalance]=useState(24580.50);
  const [list,setList]=useState<Tx[]>([
    {id:1,name:"Amazon কেনাকাটা",amount:1250,type:'expense',method:'bKash',time:"আজ · 05:42 PM"},
    {id:2,name:"সলারি জমা",amount:12000,type:'income',method:'Nagad',time:"গতকাল · 09:15 AM"},
    {id:3,name:"বিদ্যুৎ বিল",amount:1180,type:'expense',method:'Cash',time:"১৯ অক্ট · 06:30 PM"},
  ]);
  const [name,setName]=useState(""); const [amount,setAmount]=useState("");
  const [method,setMethod]=useState("bkash"); const [type,setType]=useState<'income'|'expense'>('income');

  useEffect(()=>{ const b=localStorage.getItem("mirgonj_balance"); const l=localStorage.getItem("mirgonj_customers"); if(b)setBalance(Number(b)); if(l)setList(JSON.parse(l)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_balance",String(balance)); localStorage.setItem("mirgonj_customers",JSON.stringify(list)); },[balance,list]);

  const add=()=>{
    if(!name||!amount)return alert("নাম ও টাকা দিন");
    const a=Number(amount);
    const t:Tx={id:Date.now(),name,amount:a,method,type,time:`আজ · ${new Date().toLocaleTimeString('bn-BD')}`};
    setList([t,...list]); setBalance(type==='income'?balance+a:balance-a); setName(""); setAmount("");
  };

  return(
    <div style={{minHeight:'100vh',background:'radial-gradient(800px at 50% -20%, #4f46e5 0%, #0f0f1e 60%), #050510',color:'white',padding:'16px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'420px',margin:'0 auto'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'18px'}}>
          <div><h1 style={{fontSize:'26px',fontWeight:'900',margin:0}}>শুভ সন্ধ্যা রাহিম</h1><p style={{margin:'2px 0 0',opacity:0.6,fontSize:'14px'}}>আপনার ডিজিটাল ওয়ালেট</p></div>
          <div style={{display:'flex',gap:'10px'}}><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(255,255,255,0.1)',display:'flex',alignItems:'center',justifyContent:'center'}}>🌙</div><div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#222',display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div></div>
        </div>

        <div style={{background:'linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.07))',backdropFilter:'blur(25px)',border:'1.5px solid rgba(255,255,255,0.25)',borderTop:'1.5px solid rgba(255,255,255,0.4
