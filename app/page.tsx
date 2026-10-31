"use client"
export default function Page(){
 return(
 <div style={{minHeight:'100vh', background:'#FFF8F0', padding:16, maxWidth:400, margin:'0 auto', fontFamily:'sans-serif'}}>
  <h1 style={{fontSize:20, fontWeight:'bold'}}>🧡 Mirgonj SMS Wallet</h1>
  <div style={{background:'#FF6B00', borderRadius:24, padding:24, color:'white', marginTop:20}}>
    <p style={{background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:8, fontSize:12}}>Available Balance</p>
    <h2 style={{fontSize:48, fontWeight:'bold', margin:'12px 0 20px'}}>৳1,250</h2>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
      <button style={{background:'white', color:'#000', borderRadius:16, padding:14, fontWeight:'bold'}}>bKash + Add</button>
      <button style={{background:'white', color:'#000', borderRadius:16, padding:14, fontWeight:'bold'}}>Nagad + Add</button>
    </div>
  </div>
 </div>)
}
