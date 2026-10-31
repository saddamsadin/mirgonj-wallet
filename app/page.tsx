"use client";
import { useState, useEffect } from "react";

type Tx = { id: number; name: string; amount: number; type: string; time: string };

export default function Page() {
  const [balance, setBalance] = useState(1250);
  const [customers, setCustomers] = useState<Tx[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("bkash");

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

  const addTx = () => {
    if (!name || !amount) return alert("নাম ও টাকা লিখুন ভাই");
    const amt = Number(amount);
    const newTx: Tx = {
      id: Date.now(),
      name,
      amount: amt,
      type,
      time: new Date().toLocaleString('bn-BD')
    };
    setCustomers([newTx, ...customers]);
    setBalance(balance + amt);
    setName("");
    setAmount("");
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 16, fontFamily: 'system-ui', background: '#FFFBF5', minHeight: '100vh' }}>
      <h2 style={{ fontWeight: 800, margin: 0 }}>Mirgonj SMS Wallet Pro</h2>
      <p style={{ fontSize: 12, opacity: 0.5, margin: '4px 0 0' }}>mirgonj-wallet.vercel.app • Live</p>
      
      <div style={{ background: '#FF6B00', color: 'white', borderRadius: 24, padding: 20, marginTop: 16 }}>
        <div style={{ opacity: 0.9, fontSize: 11, background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '4px 12px', borderRadius: 20 }}>Available Balance</div>
        <div style={{ fontSize: 44, fontWeight: 900, marginTop: 12 }}>৳{balance.toLocaleString('bn-BD')}</div>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <button onClick={() => { const a = prompt("কত টাকা খরচ?"); if (a) setBalance(balance - Number(a)) }} style={{ flex: 1, padding: 12, borderRadius: 12, border: 'none', fontWeight: 700, background: 'white' }}>− খরচ</button>
          <button onClick={() => { const a = prompt("কত Add?"); if (a) setBalance(balance + Number(a)) }} style={{ flex: 1, padding: 12, borderRadius: 12, border: 'none', fontWeight: 700, background: 'black', color: 'white' }}>+ Add</button>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 16, padding: 16, marginTop: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <h4 style={{ margin: 0 }}>নতুন জমা লিখুন</h4>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Customer নাম" style={{ width: '100%', padding: 12, marginTop: 12, borderRadius: 10, border: '1px solid #ddd', boxSizing: 'border-box' }} />
        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="টাকা" style={{ width: '100%', padding: 12, marginTop: 10, borderRadius: 10, border: '1px solid #ddd', boxSizing: 'border-box' }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <button onClick={() => setType('bkash')} style={{ flex: 1, padding: 10, borderRadius: 10, border: type === 'bkash' ? '2px solid #FF6B00' : '1px solid #ddd', background: type === 'bkash' ? '#FFF0E5' : 'white', fontWeight: 700 }}>bKash</button>
          <button onClick={() => setType('nagad')} style={{ flex: 1, padding: 10, borderRadius: 10, border: type === 'nagad' ? '2px solid #FF6B00' : '1px solid #ddd', background: type === 'nagad' ? '#FFF0E5' : 'white', fontWeight: 700 }}>Nagad</button>
          <button onClick={() => setType('cash')} style={{ flex: 1, padding: 10, borderRadius: 10, border: type === 'cash' ? '2px solid #FF6B00' : '1px solid #ddd', background: type === 'cash' ? '#FFF0E5' : 'white',