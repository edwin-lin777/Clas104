"use client";
import { useState } from "react";
import { stories, Story } from "@/lib/stories";

type Cat = "all"|"hero"|"god"|"love"|"saga"|"underworld";

const catLabel: Record<string,string> = {
  all:"All Stories", hero:"Heroes", god:"Gods", love:"Love & Loss", saga:"Great Sagas", underworld:"The Underworld"
};

export default function Stories() {
  const [cat, setCat] = useState<Cat>("all");
  const [selected, setSelected] = useState<Story|null>(null);
  const [sec, setSec] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [answers, setAnswers] = useState<{[k:number]:number}>({});
  const [submitted, setSubmitted] = useState(false);

  const filtered = cat==="all" ? stories : stories.filter(s=>s.category===cat);

  if (selected && quizMode) {
    const qs = selected.quizQuestions;
    const correct = submitted ? qs.filter((q,i)=>answers[i]===q.answer).length : 0;
    return (
      <div style={{ padding:"3rem 3.5rem", maxWidth:780 }} className="fade-up">
        <button className="btn btn-outline" onClick={()=>{setQuizMode(false);setAnswers({});setSubmitted(false);}} style={{marginBottom:"2rem"}}>
          ← Back to story
        </button>
        <div className="section-header">
          <div className="small-caps" style={{marginBottom:6}}>Story Quiz</div>
          <h2 className="display" style={{fontSize:26}}>{selected.title}</h2>
        </div>
        {submitted && (
          <div className="card" style={{padding:"1.25rem 1.5rem",marginBottom:"2rem",borderLeft:`3px solid ${correct===qs.length?"var(--accent4)":"var(--accent)"}`}}>
            <span className="display" style={{fontSize:24,color:correct===qs.length?"var(--accent4)":"var(--accent)"}}>{correct}/{qs.length}</span>
            <span style={{marginLeft:12,fontSize:15,color:"var(--ink3)"}}>— {Math.round(correct/qs.length*100)}%</span>
            <button className="btn btn-outline" onClick={()=>{setAnswers({});setSubmitted(false);}} style={{float:"right",padding:"6px 14px"}}>Retry</button>
          </div>
        )}
        <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
          {qs.map((q,qi)=>{
            const sel=answers[qi]; const right=sel===q.answer;
            return (
              <div key={qi} className="card" style={{padding:"1.5rem"}}>
                <div style={{display:"flex",gap:12,marginBottom:"1rem"}}>
                  <span className="small-caps" style={{flexShrink:0,paddingTop:4,fontSize:9}}>Q{qi+1}</span>
                  <p className="display" style={{fontSize:16,color:"var(--ink)",lineHeight:1.6}}>{q.q}</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6,paddingLeft:32}}>
                  {q.options.map((opt,oi)=>{
                    let cls="option-btn";
                    if(submitted){cls+=oi===q.answer?" correct":oi===sel&&!right?" wrong":"";}
                    else if(sel===oi) cls+=" selected";
                    return (
                      <button key={oi} disabled={submitted} onClick={()=>setAnswers(p=>({...p,[qi]:oi}))} className={cls}>
                        <span style={{fontFamily:"var(--mono)",fontSize:9,opacity:.6,flexShrink:0,paddingTop:3}}>{String.fromCharCode(65+oi)}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {submitted && <div style={{marginTop:"0.75rem",paddingLeft:32,fontSize:13,fontStyle:"italic",color:"var(--warm-mid)"}}>{q.explanation}</div>}
              </div>
            );
          })}
        </div>
        {!submitted && (
          <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
            <button className="btn btn-primary" disabled={Object.keys(answers).length<qs.length} onClick={()=>setSubmitted(true)} style={{padding:"10px 28px"}}>
              Submit ({Object.keys(answers).length}/{qs.length} answered)
            </button>
          </div>
        )}
      </div>
    );
  }

  if (selected) {
    const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};
    const uc = unitCols[selected.unit]||"var(--accent)";
    return (
      <div style={{padding:"3rem 3.5rem",maxWidth:820}} className="fade-up">
        <button className="btn btn-outline" onClick={()=>{setSelected(null);setSec(0);}} style={{marginBottom:"2rem"}}>
          ← All stories
        </button>
        <div className="section-header">
          <div style={{display:"flex",gap:8,marginBottom:"0.75rem",flexWrap:"wrap"}}>
            <span className="tag" style={{color:uc,borderColor:`${uc}44`,background:`${uc}08`}}>{catLabel[selected.category]}</span>
            <span className="tag tag-muted">Unit {selected.unit}</span>
            {selected.modules.map(m=><span key={m} className="tag tag-muted">Module {m}</span>)}
          </div>
          <h1 className="display" style={{fontSize:34,color:"var(--ink)",marginBottom:"0.4rem"}}>{selected.title}</h1>
          <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:18}}>{selected.subtitle}</p>
        </div>
        <div className="blockquote" style={{marginBottom:"2.5rem"}}>
          <p style={{fontSize:17,lineHeight:1.85}}>{selected.overview}</p>
        </div>
        {/* Section tabs */}
        <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:"2rem"}}>
          {selected.sections.map((s,i)=>(
            <button key={i} onClick={()=>setSec(i)}
              className={`btn ${sec===i?"btn-primary":"btn-outline"}`}
              style={{padding:"5px 12px",fontSize:10}}>
              {i+1}. {s.heading.split(" ").slice(0,3).join(" ")}{s.heading.split(" ").length>3?"…":""}
            </button>
          ))}
        </div>
        {/* Section content */}
        <div className="card" style={{padding:"2rem",marginBottom:"2rem",borderLeft:`3px solid ${uc}`}} key={sec}>
          <h3 className="display" style={{fontSize:21,marginBottom:"1.25rem",color:"var(--ink)"}}>{selected.sections[sec].heading}</h3>
          <p className="prose">{selected.sections[sec].text}</p>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"1.5rem",paddingTop:"1rem",borderTop:"1px solid var(--rule2)"}}>
            <button className="btn btn-outline" disabled={sec===0} onClick={()=>setSec(p=>p-1)} style={{padding:"6px 14px"}}>← Prev</button>
            <span className="small-caps">{sec+1} / {selected.sections.length}</span>
            <button className="btn btn-outline" disabled={sec===selected.sections.length-1} onClick={()=>setSec(p=>p+1)} style={{padding:"6px 14px"}}>Next →</button>
          </div>
        </div>
        {/* Characters & themes */}
        <div className="grid-2" style={{marginBottom:"2rem"}}>
          <div className="card" style={{padding:"1.5rem"}}>
            <div className="small-caps" style={{color:uc,marginBottom:"1rem"}}>Key Characters</div>
            {selected.characters.map(c=>(
              <div key={c.name} style={{marginBottom:10,paddingBottom:10,borderBottom:"1px solid var(--rule2)"}}>
                <div style={{fontFamily:"var(--serif2)",fontSize:14,fontWeight:700,color:"var(--ink)",marginBottom:2}}>{c.name}</div>
                <div style={{fontSize:13,color:"var(--warm-mid)"}}>{c.role}</div>
              </div>
            ))}
          </div>
          <div className="card" style={{padding:"1.5rem"}}>
            <div className="small-caps" style={{color:uc,marginBottom:"1rem"}}>Themes</div>
            {selected.themes.map(t=>(
              <div key={t} style={{display:"flex",gap:8,fontSize:14,color:"var(--ink3)",marginBottom:8}}>
                <span style={{color:uc,flexShrink:0}}>—</span>{t}
              </div>
            ))}
            <div className="small-caps" style={{color:"var(--warm-mid)",marginTop:"1.25rem",marginBottom:"0.75rem"}}>Ancient Sources</div>
            {selected.sources.map(s=>(
              <div key={s} style={{fontSize:13,color:"var(--warm-mid)",fontStyle:"italic",marginBottom:5}}>· {s}</div>
            ))}
          </div>
        </div>
        {/* Quiz CTA */}
        <div className="card-parchment" style={{padding:"1.5rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div className="display" style={{fontSize:15,marginBottom:4}}>Test your knowledge</div>
            <div style={{fontSize:13,color:"var(--warm-mid)"}}>{selected.quizQuestions.length} questions on this story</div>
          </div>
          <button className="btn btn-primary" onClick={()=>{setQuizMode(true);setAnswers({});setSubmitted(false);}}>
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:920}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Myths &amp; Narratives</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Stories</h2>
        <p style={{color:"var(--warm-mid)",fontSize:16,fontStyle:"italic"}}>
          Full narrative accounts from your course modules — each with a dedicated quiz.
        </p>
      </div>
      {/* Category filter */}
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:"2.5rem"}}>
        {(Object.entries(catLabel) as [Cat,string][]).map(([k,v])=>(
          <button key={k} onClick={()=>setCat(k)}
            className={`btn ${cat===k?"btn-primary":"btn-outline"}`}
            style={{padding:"6px 14px"}}>
            {v}{k!=="all"?` (${stories.filter(s=>s.category===k).length})`:""}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div className="grid-2" style={{gap:"1rem"}}>
        {filtered.map((story,i)=>{
          const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};
          const uc=unitCols[story.unit]||"var(--accent)";
          return (
            <div key={story.id} className="card" onClick={()=>{setSelected(story);setSec(0);}}
              style={{padding:"1.75rem",cursor:"pointer",transition:"box-shadow 0.2s",animation:`fadeUp 0.35s ease both`,animationDelay:`${i*0.05}s`}}
              onMouseEnter={e=>(e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.08)")}
              onMouseLeave={e=>(e.currentTarget.style.boxShadow="none")}>
              <div style={{display:"flex",gap:6,marginBottom:"0.75rem",flexWrap:"wrap"}}>
                <span className="tag" style={{color:uc,borderColor:`${uc}44`,background:`${uc}08`}}>{catLabel[story.category]}</span>
                <span className="tag tag-muted">Unit {story.unit}</span>
              </div>
              <h3 className="display" style={{fontSize:20,color:"var(--ink)",marginBottom:"0.3rem",lineHeight:1.25}}>{story.title}</h3>
              <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:14,marginBottom:"0.75rem"}}>{story.subtitle}</p>
              <p style={{fontSize:14,color:"var(--ink3)",lineHeight:1.7,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>
                {story.overview}
              </p>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.25rem",paddingTop:"1rem",borderTop:"1px solid var(--rule2)"}}>
                <span className="small-caps" style={{fontSize:9}}>{story.sections.length} sections · {story.quizQuestions.length} questions</span>
                <span style={{color:"var(--warm-mid)",fontSize:14}}>Read →</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
