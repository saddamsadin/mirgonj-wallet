"use client";
import { useState, useEffect } from "react";
type Tx = { id:number; name:string; amount:number; type:string; time:string };
export default function Page(){
  const [balance,setBalance]=useState(1250);
  const [customers,setCustomers]=useState<Tx[]>([]);
  const [name,setName]=useState(""); const [amount,setAmount]=useState(""); const [type,setType]=useState("bkash");
  useEffect(()=>{ const s=localStorage.getItem("mirgonj_balance"); const c=localStorage.getItem("mirgonj_customers"); if(s) setBalance(Number(s)); if(c) setCustomers(JSON.parse(c)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_balance", String(balance)); localStorage.setItem("mirgonj_customers", JSON.stringify(customers)); },[balance,customers]);
  const addTx=()=>{ if(!name||!amount) return alert("নাম ও টাকা লিখুন ভাই"); const amt=Number(amount); const newTx:Tx={id:Date.now(), name, amount:amt, type, time:new Date().toLocaleString('bn-BD')}; setCustomers([newTx, ...customers]); setBalance(balance+amt); setName(""); setAmount(""); };
  return(<div style={{maxWidth:420, margin:'0 auto', padding:16, fontFamily:'system-ui', background:'#FFFBF5', minHeight:'100vh'}}>
<h2 style={{fontWeight:800, margin:0}}>Mirgonj SMS Wallet Pro</h2><p style={{fontSize:12, opacity:0.5, margin:'4px 0 0'}}>mirgonj-wallet.vercel.app • Live</p>
<div style={{background:'#FF6B00', color:'white', borderRadius:24, padding:20, marginTop:16}}><div style={{opacity:0.9, fontSize:11, background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 12px', borderRadius:20}}>Available Balance</div><div style={{fontSize:44, fontWeight:900, marginTop:12}}>৳{balance.toLocaleString('bn-BD')}</div><div style={{display:'flex', gap:10, marginTop:16}}><button onClick={()=>{const a=prompt("কত টাকা খরচ হলো?"); if(a) setBalance(balance-Number(a))}} style={{flex:1, padding:12, borderRadius:12, border:'none', fontWeight:700, background:'white'}}>− খরচ</button><button onClick={()=>{const a=prompt("কত টাকা Add করবেন?"); if(a) setBalance(balance+Number(a))}} style={{flex:1, padding:12, borderRadius:12, border:'none', fontWeight:700, background:'black', color:'white'}}>+ Add</button></div></div>
<div style={{background:'white', borderRadius:16, padding:16, marginTop:16, boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}><h4 style={{margin:0}}>নতুন জমা / বাকি লিখুন</h4><input value={name} onChange={e=>setName(e.target.value)} placeholder="Customer নাম