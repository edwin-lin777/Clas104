"use client";
import { sources } from "@/lib/data";
export default function Sources() {
  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:860}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Reference</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Ancient Sources</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>Primary and secondary texts cited throughout the course.</p>
      </div>
      <div className="grid-2">
        {sources.map(s=>(
          <div key={s.name} className="card" style={{padding:"1.5rem"}}>
            <div className="display" style={{fontSize:15,color:"var(--ink)",marginBottom:8}}>{s.name}</div>
            <div style={{display:"flex",gap:6,marginBottom:"0.75rem",flexWrap:"wrap",alignItems:"center"}}>
              <span className="tag tag-red">{s.type}</span>
              <span className="small-caps" style={{fontSize:9}}>{s.date}</span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:"0.5rem"}}>
              {s.topics.map(t=><span key={t} style={{fontSize:12,color:"var(--warm-mid)",background:"var(--parchment2)",padding:"1px 7px",borderRadius:1}}>{t}</span>)}
            </div>
            <div style={{display:"flex",gap:5,marginTop:6}}>
              {s.units.map(u=><span key={u} className="small-caps" style={{fontSize:8,color:"var(--accent)"}}>Unit {u}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
