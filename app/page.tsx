"use client";
import { useState, useEffect } from "react";
type Tx = { id: number; name: string; amount: number; method: string; type: 'income'|'expense'; date: string; };

export default function Page() {
  const [balance, setBalance] = useState(0);
  const [list, setList] = useState<Tx[]>([]);
  const [name, setName] = useState(""); const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bkash"); const [type, setType] = useState<'income'|'expense'>('income');
  
  useEffect(()=>{ const b=localStorage.getItem("mirgonj_balance"); const l=localStorage.getItem("mirgonj_customers"); if(b)setBalance(Number(b)); if(l)setList(JSON.parse(l)); },[]);
  useEffect(()=>{ localStorage.setItem("mirgonj_balance",String(balance)); localStorage.setItem("mirgonj_customers",JSON.stringify(list)); },[balance,list]);

  const add=()=>{
    if(!name||!amount)return alert("নাম ও টাকা দিন"); const a=Number(amount);
    const tx:Tx={id:Date.now(),name,amount:a,method,type,date:new Date().toLocaleTimeString('bn-BD',{hour:'2-digit',minute:'2-digit'})};
    setList([tx,...list]); setBalance(type==='income'?balance+a:balance-a); setName(""); setAmount("");
  };
  const del=(id:number,a:number,t:string)=>{ if(!confirm("Delete?"))return; setList(list.filter(x=>x.id!==id)); setBalance(t==='income'?balance-a:balance+a); };

  const sum=(m:string)=> list.filter(x=>x.method===m&&x.type==='income').reduce((s,x)=>s+x.amount,0)-list.filter(x=>x.method===m&&x.type==='expense').reduce((s,x)=>s+x.amount,0);

  return (
    <div style={{minHeight:'100vh',background:'#050507',color:'white',padding:'16px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'420px',margin:'0 auto'}}>
        
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
          <div><h1 style={{fontSize:'26px',fontWeight:'900',margin:0}}>মিরগঞ্জ <span style={{background:'#7c3aed',padding:'2px 8px',borderRadius:'8px',fontSize:'14px',verticalAlign:'middle'}}>PRO</span></h1><p style={{margin:0,opacity:0.6,fontSize:'14px'}}>Wallet PRO</p></div>
          <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#222',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>👤</div>
        </div>

        <div style={{background:'linear-gradient(135deg,#6d28d9 0%,#4f46e5 50%,#3b82f6 100%)',borderRadius:'28px',padding:'22px',position:'relative',overflow:'hidden',boxShadow:'0 20px 40px rgba(124,58,237,0.3)',marginBottom:'18px'}}>
          <div style={{position:'absolute',top:'-40px',right:'-40px',width:'150px',height:'150px',background:'rgba(255,255,255,0.15)',borderRadius:'50%',filter:'blur(20px)'}}></div>
          <p style={{opacity:0.9,fontSize:'15px',margin:0}}>মোট ব্যালেন্স 👁️</p>
          <h2 style={{fontSize:'42px',fontWeight:'900',margin:'8px 0',letterSpacing:'-1px'}}>৳ {balance.toLocaleString('en-IN')}</h2>
          <p style={{fontSize:'13px',color:'#86efac',margin:'0 0 18px 0'}}>+ ৳ {Math.floor(balance*0.05)} আজ</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'0',borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'16px'}}>
            <div style={{textAlign:'center',borderRight:'1px solid rgba(255,255,255,0.15)'}}><div style={{fontSize:'16px'}}>🅺 bKash</div><b style={{fontSize:'15px'}}>৳ {sum('bkash')}</b></div>
            <div style={{textAlign:'center',borderRight:'1px solid rgba(255,255,255,0.15)'}}><div style={{fontSize:'16px'}}>🔶 Nagad</div><b style={{fontSize:'15px'}}>৳ {sum('nagad')}</b></div>
            <div style={{textAlign:'center'}}><div style={{fontSize:'16px'}}>💵 Cash</div><b style={{fontSize:'15px'}}>৳ {sum('cash')}</b></div>
          </div>
        </div>

        <div style={{background:'#15151a',borderRadius:'22px',padding:'16px',border:'1px solid #23232a',marginBottom:'20px'}}>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="কাস্টমার নাম বা প্রাপকের নম্বর..." style={{width:'100%',padding:'14px',borderRadius:'14px',background:'#1e1e25',border:'1px solid #2a2a35',color:'white',marginBottom:'10px',boxSizing:'border-box',outline:'none'}}/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="৳ পরিমাণ লিখুন" style={{width:'100%',padding:'14px',borderRadius:'14px',background:'#1e1e25',border:'1px solid #2a2a35',color:'white',marginBottom:'12px',boxSizing:'border-box',outline:'none'}}/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'10px'}}>
            <button onClick={()=>setType('income')} style={{padding:'13px',borderRadius:'14px',border:'none',fontWeight:'bold',background:type==='income'?'#16a34a':'#1e1e25',color:'white'}}>⬇️ রিসিভ</button>
            <button onClick={()=>setType('expense')} style={{padding:'13px',borderRadius:'14px',border:'none',fontWeight:'bold',background:type==='expense'?'#dc2626':'#1e1e25',color:'white'}}>⬆️ পাঠান</button>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'8px',marginBottom:'12px'}}>
            {['bkash','nagad','cash'].map(m=>(
              <button key={m} onClick={()=>setMethod(m)} style={{padding:'11px',borderRadius:'12px',border:'1px solid',borderColor:method===m?'#7c3aed':'#2a2a35',background:method===m?'#7c3aed':'#1e1e25',color:'white',fontWeight:'600',textTransform:'capitalize'}}>{m}</button>
            ))}
          </div>
          <button onClick={add} style={{width:'100%',padding:'14px',borderRadius:'14px',border:'none',background:'white',color:'black',fontWeight:'900',fontSize:'16px'}}>Add করুন ✨</button>
        </div>

        <h3 style={{fontSize:'18px',fontWeight:'800',marginBottom:'10px'}}>সাম্প্রতিক লেনদেন</h3>
        {list.map(c=>(
          <div key={c.id} style={{background:'#15151a',padding:'14px',borderRadius:'16px',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px',border:'1px solid #23232a'}}>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
              <div style={{width:'42px',height:'42px',borderRadius:'12px',background:c.method==='bkash'?'#e11d48':c.method==='nagad'?'#f97316':'#334155',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>{c.method[0].toUpperCase()}</div>
              <div><div style={{fontWeight:'bold'}}>{c.name}</div><div style={{fontSize:'12px',opacity:0.5}}>আজ, {c.date} • {c.method}</div></div>
            </div>
            <div style={{textAlign:'right'}}><b style={{color:c.type==='income'?'#4ade80':'#fb7185'}}>{c.type==='income'?'+':'-'} ৳{c.amount}</b><div><button onClick={()=>del(c.id,c.amount,c.type)} style={{background:'none',border:'none',color:'#666',fontSize:'12px'}}>Delete</button></div></div>
          </div>
        ))}
        {list.length===0&&<p style={{textAlign:'center',opacity:0.4,padding:'30px'}}>কোন হিসাব নেই</p>}
      </div>
    </div>
  );
}
