"use client";
import { useState, useEffect } from "react";

type Tx = { id: number; name: string; amount: number; method: string; type: 'income' | 'expense'; date: string; };

export default function Page() {
  const [balance, setBalance] = useState(0);
  const [customers, setCustomers] = useState<Tx[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bkash");
  const [txType, setTxType] = useState<'income'|'expense'>('income');

  useEffect(() => {
    const s = localStorage.getItem("mirgonj_balance");
    const c = localStorage.getItem("mirgonj_customers");
    if (s) setBalance(Number(s));
    if (c) setCustomers(JSON.parse(c));
  }, []);
  useEffect(() => {
    localStorage.setItem("mirgonj_balance", String(balance));
    localStorage.setItem("mirgonj_customers", JSON.stringify(customers));
  }, [balance, customers]);

  const add = () => {
    if (!name || !amount) return alert("নাম ও টাকা লিখুন");
    const amt = Number(amount);
    const newTx: Tx = { id: Date.now(), name, amount: amt, method, type: txType, date: new Date().toLocaleString('bn-BD') };
    setCustomers([newTx, ...customers]);
    if (txType === 'income') setBalance(balance + amt); else setBalance(balance - amt);
    setName(""); setAmount("");
  };
  const del = (id: number, amt: number, type: string) => {
    if (!confirm("Delete?")) return;
    setCustomers(customers.filter(c => c.id !== id));
    if (type === 'income') setBalance(balance - amt); else setBalance(balance + amt);
  }

  const sBox = (t:any) => ({ background: t, borderRadius: '16px', padding: '20px', color: 'white', textAlign: 'center' as const, marginBottom: '15px' });

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', color: 'white', padding: '15px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>💰 মিরগঞ্জ Wallet PRO</h1>

        <div style={{ background: 'linear-gradient(135deg,#9333ea,#3b82f6)', borderRadius: '20px', padding: '20px', textAlign: 'center', marginBottom: '15px' }}>
          <p style={{ opacity: 0.8, fontSize: '14px' }}>মোট ব্যালেন্স</p>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '5px 0' }}>৳ {balance}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '15px' }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '8px' }}><div>bKash</div><b>৳ {customers.filter(c=>c.method==='bkash'&&c.type==='income').reduce((a,b)=>a+b.amount,0)-customers.filter(c=>c.method==='bkash'&&c.type==='expense').reduce((a,b)=>a+b.amount,0)}</b></div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '8px' }}><div>Nagad</div><b>৳ {customers.filter(c=>c.method==='nagad'&&c.type==='income').reduce((a,b)=>a+b.amount,0)-customers.filter(c=>c.method==='nagad'&&c.type==='expense').reduce((a,b)=>a+b.amount,0)}</b></div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '8px' }}><div>Cash</div><b>৳ {customers.filter(c=>c.method==='cash'&&c.type==='income').reduce((a,b)=>a+b.amount,0)-customers.filter(c=>c.method==='cash'&&c.type==='expense').reduce((a,b)=>a+b.amount,0)}</b></div>
          </div>
        </div>

        <div style={{ background: '#1e1e1e', borderRadius: '16px', padding: '15px', marginBottom: '15px', border: '1px solid #333' }}>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Customer নাম" style={{ width: '100%', padding: '12px', borderRadius: '10px', background: '#2a2a2a', border: '1px solid #444', color: 'white', marginBottom: '10px', boxSizing: 'border-box' }} />
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="টাকার পরিমান" style={{ width: '100%', padding: '12px', borderRadius: '10px', background: '#2a2a2a', border: '1px solid #444', color: 'white', marginBottom: '10px', boxSizing: 'border-box' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            <button onClick={()=>setTxType('income')} style={{ padding: '12px', borderRadius: '10px', border: 'none', fontWeight: 'bold', background: txType==='income'?'#16a34a':'#2a2a2a', color: 'white' }}>➕ জমা</button>
            <button onClick={()=>setTxType('expense')} style={{ padding: '12px', borderRadius: '10px', border: 'none', fontWeight: 'bold', background: txType==='expense'?'#dc2626':'#2a2a2a', color: 'white' }}>➖ খরচ</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {['bkash','nagad','cash'].map(m=>(
              <button key={m} onClick={()=>setMethod(m)} style={{ padding: '10px', borderRadius: '10px', border: '1px solid #444', background: method===m?'#9333ea':'#2a2a2a', color: 'white', textTransform: 'capitalize' }}>{m}</button>
            ))}
          </div>
          <button onClick={add} style={{ width: '100%', padding: '13px', borderRadius: '10px', border: 'none', background: 'white', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Add করুন</button>
        </div>

        <div>
          {customers.map(c=>(
            <div key={c.id} style={{ background: '#1e1e1e', padding: '12px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', border: '1px solid #333' }}>
              <div><div style={{ fontWeight: 'bold' }}>{c.name} <span style={{ fontSize: '10px', background: '#333', padding: '3px 8px', borderRadius: '20px', marginLeft: '5px' }}>{c.method}</span></div><div style={{ fontSize: '11px', opacity: 0.6 }}>{c.date}</div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><b style={{ color: c.type==='income'?'#4ade80':'#f87171' }}>{c.type==='income'?'+':'-'} ৳{c.amount}</b><button onClick={()=>del(c.id,c.amount,c.type)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '18px' }}>✕</button></div>
            </div>
          ))}
          {customers.length===0 && <p style={{ textAlign: 'center', opacity: 0.5, padding: '30px' }}>কোন হিসাব নেই</p>}
        </div>
      </div>
    </div>
  );
}
