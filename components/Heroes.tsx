"use client";
import { heroes } from "@/lib/data";
const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};
export default function Heroes() {
  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:860}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Reference</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Hero Profiles</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>Character summaries for the six principal heroes of the course.</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
        {heroes.map(h=>{
          const col=unitCols[h.unit];
          return (
            <div key={h.name} className="card" style={{padding:"2rem",borderLeft:`3px solid ${col}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexWrap:"wrap",gap:8}}>
                <div>
                  <h3 className="display" style={{fontSize:24,color:"var(--ink)",marginBottom:4}}>{h.name}</h3>
                  <div className="small-caps" style={{color:col}}>{h.alias} · Unit {h.unit}</div>
                </div>
              </div>
              <p style={{fontSize:16,color:"var(--ink3)",lineHeight:1.8,marginBottom:"1.5rem"}}>{h.description}</p>
              <div className="grid-3">
                {([["TRAITS",h.traits],["KEY MYTHS",h.keyMyths],["SOURCES",h.sources]] as [string,string[]][]).map(([label,items])=>(
                  <div key={label}>
                    <div className="small-caps" style={{color:col,marginBottom:"0.6rem"}}>{label}</div>
                    {items.map(t=><div key={t} style={{fontSize:13,color:"var(--warm-mid)",marginBottom:5,lineHeight:1.55}}>· {t}</div>)}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
