"use client";
import { useState, useEffect } from "react";

type Tx = { 
  id: number; 
  name: string; 
  amount: number; 
  method: string;
  type: 'income' | 'expense';
  date: string;
};

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

  const addCustomer = () => {
    if (!name || !amount) return alert("নাম ও টাকা লিখুন!");
    const amt = Number(amount);
    if (isNaN(amt) || amt <= 0) return;

    const newTx: Tx = {
      id: Date.now(),
      name,
      amount: amt,
      method,
      type: txType,
      date: new Date().toLocaleString('bn-BD')
    };
    
    setCustomers([newTx, ...customers]);
    if(txType === 'income') setBalance(balance + amt);
    else setBalance(balance - amt);
    
    setName(""); setAmount("");
  };

  const del = (id:number, amt:number, type:string) => {
    if(!confirm("Delete করবেন?")) return;
    setCustomers(customers.filter(c=>c.id!==id));
    if(type==='income') setBalance(balance - amt);
    else setBalance(balance + amt);
  }

  const totalBkash = customers.filter(c=>c.method==='bkash' && c.type==='income').reduce((a,b)=>a+b.amount,0) - customers.filter(c=>c.method==='bkash' && c.type==='expense').reduce((a,b)=>a+b.amount,0);
  const totalNagad = customers.filter(c=>c.method==='nagad' && c.type==='income').reduce((a,b)=>a+b.amount,0) - customers.filter(c=>c.method==='nagad' && c.type==='expense').reduce((a,b)=>a+b.amount,0);
  const totalCash = customers.filter(c=>c.method==='cash' && c.type==='income').reduce((a,b)=>a+b.amount,0) - customers.filter(c=>c.method==='cash' && c.type==='expense').reduce((a,b)=>a+b.amount,0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 pb-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center py-4">💰 মিরগঞ্জ Wallet PRO</h1>
        
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-5 mb-4 text-center">
          <p className="text-sm opacity-80">মোট ব্যালেন্স</p>
          <h2 className="text-4xl font-bold mt-1">৳ {balance}</h2>
          <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
            <div className="bg-white/20 rounded-lg p-2"><p>bKash</p><p className="font-bold text-sm">৳ {totalBkash}</p></div>
            <div className="bg-white/20 rounded-lg p-2"><p>Nagad</p><p className="font-bold text-sm">৳ {totalNagad}</p></div>
            <div className="bg-white/20 rounded-lg p-2"><p>Cash</p><p className="font-bold text-sm">৳ {totalCash}</p></div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-800">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Customer নাম লিখুন" className="w-full bg-zinc-800 rounded-xl p-3 mb-3 outline-none border border-zinc-700 focus:border-purple-500" />
          <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="টাকার পরিমান" className="w-full bg-zinc-800 rounded-xl p-3 mb-3 outline-none border border-zinc-700 focus:border-purple-500" />
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button onClick={()=>setTxType('income')} className={`p-3 rounded-xl font-bold ${txType==='income' ? 'bg-green-600' : 'bg-zinc-800'}`}>➕ জমা</button>
            <button onClick={()=>setTxType('expense')} className={`p-3 rounded-xl font-bold ${txType==='expense' ? 'bg-red-600' : 'bg-zinc-800'}`}>➖ খরচ</button>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {['bkash','nagad','cash'].map(m=>(
              <button key={m} onClick={()=>setMethod(m)} className={`p-2 rounded-xl text-sm capitalize border ${method===m ? 'bg-purple-600 border-purple-600' : 'bg-zinc-800 border-zinc-700'}`}>{m}</button>
            ))}
          </div>

          <button onClick={addCustomer} className="w-full bg-white text-black font-bold p-3 rounded-xl">Add করুন</button>
        </div>

        <div className="space-y-2">
          {customers.map(c=>(
            <div key={c.id} className="bg-zinc-900 p-3 rounded-xl flex justify-between items-center border border-zinc-800">
              <div>
                <p className="font-bold">{c.name} <span className={`text-xs ml-2 px-2 py-1 rounded-full ${c.method==='bkash'?'bg-pink-600':c.method==='nagad'?'bg-orange-600':'bg-zinc-700'}`}>{c.method}</span></p>
                <p className="text-xs opacity-60">{c.date}</p>
              </div>
              <div className="text-right flex items-center gap-3">
                <p className={`font-bold ${c.type==='income'?'text-green-400':'text-red-400'}`}>{c.type==='income'?'+':'-'} ৳{c.amount}</p>
                <button onClick={()=>del(c.id,c.amount,c.type)} className="text-red-500">✕</button>
              </div>
            </div>
          ))}
          {customers.length===0 && <p className="text-center opacity-50 py-10">কোন হিসাব নেই</p>}
        </div>
      </div>
    </div>
  );
}
