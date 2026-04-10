"use client";
import { useState } from "react";
import { quizQuestions } from "@/lib/data";

const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};

export default function Quiz() {
  const [au, setAu] = useState<number|"all">("all");
  const [answers, setAnswers] = useState<{[k:number]:number}>({});
  const [submitted, setSubmitted] = useState(false);
  const filtered = au==="all" ? quizQuestions : quizQuestions.filter(q=>q.unit===au);
  const correct = submitted ? filtered.filter(q=>answers[q.id]===q.answer).length : 0;
  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:800}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Practice Test</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Multiple Choice</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>Select an answer for each question, then submit to check.</p>
      </div>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center",marginBottom:"2rem"}}>
        {(["all",1,2,3,4] as const).map(u=>(
          <button key={u} onClick={()=>{setAu(u);reset();}} className={`btn ${au===u?"btn-primary":"btn-outline"}`} style={{padding:"6px 12px"}}>
            {u==="all"?`All (${quizQuestions.length})`:`Unit ${u}`}
          </button>
        ))}
        {submitted && (
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:12}}>
            <span className="display" style={{fontSize:22,color:correct/filtered.length>=.8?"var(--accent4)":"var(--accent)"}}>{correct}/{filtered.length}</span>
            <span style={{fontSize:13,color:"var(--warm-mid)"}}>{Math.round(correct/filtered.length*100)}%</span>
          </div>
        )}
      </div>
      {submitted && (
        <div className="card-parchment" style={{padding:"1rem 1.5rem",marginBottom:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:15,color:"var(--ink3)"}}>
            {correct===filtered.length?"All correct!":correct>=filtered.length*.8?"Good work.":correct>=filtered.length*.6?"Keep practising.":"Review your notes."}
          </span>
          <button className="btn btn-outline" onClick={reset} style={{padding:"6px 14px"}}>Reset</button>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        {filtered.map((q,qi)=>{
          const sel=answers[q.id]; const right=sel===q.answer;
          const col=unitCols[q.unit];
          return (
            <div key={q.id} className="card" style={{padding:"1.5rem",borderLeft:`2px solid ${submitted?right?"var(--accent4)":sel!==undefined?"var(--accent)":"var(--rule)":col}`}}>
              <div style={{display:"flex",gap:12,marginBottom:"1rem"}}>
                <span className="small-caps" style={{flexShrink:0,paddingTop:4,color:col,fontSize:9}}>Q{qi+1}</span>
                <p className="display" style={{fontSize:16,color:"var(--ink)",lineHeight:1.6}}>{q.question}</p>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:5,paddingLeft:30}}>
                {q.options.map((opt,oi)=>{
                  let cls="option-btn";
                  if(submitted){cls+=oi===q.answer?" correct":oi===sel&&!right?" wrong":"";}
                  else if(sel===oi) cls+=" selected";
                  return (
                    <button key={oi} disabled={submitted} onClick={()=>setAnswers(p=>({...p,[q.id]:oi}))} className={cls}>
                      <span style={{fontFamily:"var(--mono)",fontSize:9,opacity:.5,flexShrink:0,paddingTop:3}}>{String.fromCharCode(65+oi)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        {!submitted
          ? <button className="btn btn-primary" onClick={()=>setSubmitted(true)} disabled={Object.keys(answers).length<filtered.length} style={{padding:"10px 28px"}}>
              Submit ({Object.keys(answers).length}/{filtered.length})
            </button>
          : <button className="btn btn-outline" onClick={reset} style={{padding:"10px 24px"}}>Reset &amp; Retry</button>}
      </div>
    </div>
  );
}
