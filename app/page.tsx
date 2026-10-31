"use client";
import { useState, useEffect } from "react";
type Tx = { id:number; name:string; amount:number; method:string; type:'income'|'expense'; date:string; };

export default function Page(){
  const [balance,setBalance]=useState(0);
  const [list,setList]=useState<Tx[]>([]);
  const [name,setName]=useState(""); const [amount,setAmount]=useState("");
  const [method,setMethod]=useState("bkash"); const [type,setType]=useState<'income'|'expense'>('income');
  useEffect(()=>{ const b=localStorage.getItem("mirgonj_balance"); const l=localStorage.getItem("mirgonj_customers"); if(b)setBalance(Number(b)); if(l)setList(JSON.parse(l)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_balance",String(balance)); localStorage.setItem("mirgonj_customers",JSON.stringify(list)); },[balance,list]);
  const add=()=>{ if(!name||!amount)return alert("নাম ও টাকা দিন"); const a=Number(amount); setList([{id:Date.now(),name,amount:a,method,type,date:new Date().toLocaleTimeString('bn-BD')},...list]); setBalance(type==='income'?balance+a:balance-a); setName(""); setAmount(""); };
  const sum=(m:string)=> list.filter(x=>x.method===m&&x.type==='income').reduce((s,x)=>s+x.amount,0)-list.filter(x=>x.method===m&&x.type==='expense').reduce((s,x)=>s+x.amount,0);

  return(
    <div style={{minHeight:'100vh',background:'#020208',color:'white',padding:'16px',fontFamily:'system-ui'}}>
      <style>{`@keyframes float{0%,100%{transform:perspective(1200px) rotateX(15deg) rotateY(-18deg) translateZ(0)}50%{transform:perspective(1200px) rotateX(20deg) rotateY(-20deg) translateZ(25px)}}`}</style>
      <div style={{maxWidth:'420px',margin:'0 auto',position:'relative'}}>
        <div style={{position:'absolute',top:'80px',left:'-50px',width:'200px',height:'200px',background:'#a855f7',filter:'blur(80px)',opacity:0.6,borderRadius:'50%'}}></div>
        <div style={{position:'absolute',top:'200px',right:'-60px',width:'220px',height:'220px',background:'#06b6d4',filter:'blur(90px)',opacity:0.5,borderRadius:'50%'}}></div>

        <div style={{textAlign:'center',margin:'10px 0 30px'}}><h1 style={{fontSize:'24px',fontWeight:'900',textShadow:'0 0 30px #a855f7'}}>মিরগঞ্জ Wallet • 3D GLASS</h1></div>

        <div style={{position:'relative',height:'230px',marginBottom:'20px'}}>
          <div style={{position:'absolute',top:'20px',left:'20px',right:'20px',height:'150px',borderRadius:'20px',background:'rgba(168,85,247,0.12)',border:'1px solid rgba(168,85,247,0.3)',filter:'blur(0.5px)',transform:'perspective(1000px) rotateX(25deg) rotateY(-15deg)'}}></div>
          
          <div style={{position:'relative',borderRadius:'26px',padding:'24px',background:'linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.02) 100%)',backdropFilter:'blur(35px) saturate(200%)',border:'2.5px solid rgba(255,255,255,0.4)',borderTop:'3px solid rgba(255,255,255,0.7)',borderLeft:'2px solid rgba(255,255,255,0.5)',boxShadow:'0 0 0 1px rgba(255,255,255,0.2) inset, 0 30px 90px rgba(0,0,0,0.7), 0 0 60px rgba(6,182,214,0.9), 0 0 100px rgba(168,85,247,0.6), inset 0 2px 3px rgba(255,255,255,0.9), inset 0 -1px 2px rgba(0,0,0,0.3)',transform:'perspective(1200px) rotateX(15deg) rotateY(-18deg)',animation:'float 4s ease-in-out infinite'}}>
            <div style={{position:'absolute',inset:'-3px',borderRadius:'26px',background:'linear-gradient(90deg, #22d3ee, #06b6d4, #22d3ee)',opacity:0.8,filter:'blur(14px)',zIndex:-1}}></div>
            <div style={{position:'absolute',inset:'0',borderRadius:'26px',border:'2px solid #22d3ee',boxShadow:'0 0 20px #22d3ee, inset 0 0 20px rgba(34,211,238,0.2)',pointerEvents:'none'}}></div>

            <div style={{display:'flex',justifyContent:'space-between'}}><div style={{fontSize:'12px',letterSpacing:'4px',opacity:0.9,fontWeight:'900'}}>MAIN WALLET</div><div style={{fontSize:'10px',border:'1px solid #22d3ee',padding:'3px 10px',borderRadius:'20px',color:'#22d3ee',boxShadow:'0 0 15px #22d3ee',background:'rgba(34,211,238,0.15)'}}>● ACTIVE</div></div>
            <p style={{margin:'16px 0 0',fontSize:'10px',letterSpacing:'3px',opacity:0.7}}>BALANCE</p>
            <h2 style={{fontSize:'46px',fontWeight:'900',margin:'6px 0',color:'#a5f3fc',textShadow:'0 0 15px #22d3ee, 0 0 40px #06b6d4, 0 0 80px #06b6d4'}}>৳ {balance.toLocaleString()}</h2>
            <div style={{display:'flex',gap:'8px',marginTop:'12px',borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'14px'}}>
              <div style={{flex:1,textAlign:'center'}}><div style={{fontSize:'10px',opacity:0.5}}>bKash</div><b style={{color:'#f0abfc',textShadow:'0 0 10px #f0abfc'}}>৳{sum('bkash')}</b></div>
              <div style={{flex:1,textAlign:'center',borderLeft:'1px solid rgba(255,255,255,0.1)',borderRight:'1px solid rgba(255,255,255,0.1)'}}><div style={{fontSize:'10px',opacity:0.5}}>Nagad</div><b style={{color:'#fdba74',textShadow:'0 0 10px #fb923c'}}>৳{sum('nagad')}</b></div>
              <div style={{flex:1,textAlign:'center'}}><div style={{fontSize:'10px',opacity:0.5}}>Cash</div><b style={{color:'#7dd3fc',textShadow:'0 0 10px #22d3ee'}}>৳{sum('cash')}</b></div>
            </div>
          </div>
        </div>

        <div style={{borderRadius:'20px',padding:'14px',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(25px)',border:'1px solid rgba(255,255,255,0.15)'}}>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="কাস্টমার নাম" style={{width:'100%',padding:'12px',borderRadius:'12px',background:'rgba(0,0,0,0.6)',border:'1px solid rgba(255,255,255,0.15)',color:'white',marginBottom:'8px',boxSizing:'border-box',outline:'none'}}/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="৳ পরিমাণ" style={{width:'100%',padding:'12px',borderRadius:'12px',background:'rgba(0,0,0,0.6)',border:'1px solid rgba(255,255,255,0.15)',color:'white',marginBottom:'10px',boxSizing:'border-box',outline:'none'}}/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'8px'}}>
            <button onClick={()=>setType('income')} style={{padding:'11px',borderRadius:'11px',border:'1px solid',borderColor:type==='income'?'#22c55e':'rgba(255,255,255,0.1)',background:type==='income'?'rgba(34,197,94,0.3)':'rgba(255,255,255,0.05)',color:'white',fontWeight:'bold',boxShadow:type==='income'?'0 0 20px #22c55e':'none'}}>⬇️ রিসিভ</button>
            <button onClick={()=>setType('expense')} style={{padding:'11px',borderRadius:'11px',border:'1px solid',borderColor:type==='expense'?'#ef4444':'rgba(255,255,255,0.1)',background:type==='expense'?'rgba(239,68,68,0.3)':'rgba(255,255,255,0.05)',color:'white',fontWeight:'bold',boxShadow:type==='expense'?'0 0 20px #ef4444':'none'}}>⬆️ পাঠান</button>
          </div>
          <button onClick={add} style={{width:'100%',padding:'13px',borderRadius:'12px',border:'none',background:'linear-gradient(90deg,#22d3ee,#a78bfa)',color:'black',fontWeight:'900',boxShadow:'0 0 30px rgba(34,211,238,0.7)'}}>Add করুন ✨</button>
        </div>
      </div>
    </div>
  );
}
