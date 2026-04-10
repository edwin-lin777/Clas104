"use client";
import { greekRoman } from "@/lib/data";

export default function CheatSheet() {
  const labours = ["Nemean Lion","Lernaean Hydra","Cerynean Hind","Erymanthian Boar","Augean Stables","Stymphalian Birds","Cretan Bull","Mares of Diomedes","Girdle of Hippolyta","Cattle of Geryon","Apples of the Hesperides","Cerberus"];
  const adventures = ["Cicones (Ismarus) — Maron's 12 wine jars","Lotus Eaters — forget home","Polyphemus (Cyclops) — 'Nobody' trick","Aeolus — bag of winds; crew opens it","Laestrygonians — sink ALL ships but one","Circe — men turned to pigs; moly herb","Underworld (Nekuia) — consults Tiresias","Sirens — wax in ears, tied to mast","Scylla and Charybdis — loses 6 men","Cattle of Helios — crew eats them; ship destroyed"];
  const afterlife = [
    {who:"Homer (Odyssey 11)",pts:["ALL mortals go — no moral judgment","Shadows need blood to speak","Punishment ONLY for offending gods","Achilles regrets choosing glory"]},
    {who:"Plato (Myth of Er)",pts:["Moral judgment: 10× punishment/reward","1,000-year cycles","Choose next life; drink Lethe","Philosophers escape the cycle"]},
    {who:"Virgil (Aeneid 6)",pts:["Tartarus for sinners against gods AND humans","Elysium holds future Romans","Dido's silent condemnation","Gate of Horn (true) / Ivory (false)","Influenced Dante and Milton"]},
  ];
  const fiveAges=[["Gold","Cronus rules; peace, no toil, no death"],["Silver","Impious; shorter lives"],["Bronze","Violent warriors; killed each other"],["Heroic","Demigods — heroes of Troy and Thebes"],["Iron","Present age; toil, injustice, decline"]];
  const atreus=[
    "Tantalus → serves son Pelops to gods; Tartarus",
    "Pelops → charioteer Myrtilus cursed; lineage stained",
    "Atreus → feeds Thyestes his own sons",
    "Agamemnon → sacrifices Iphigenia for Troy",
    "Clytemnestra + Aegisthus → murder Agamemnon",
    "Orestes → kills Clytemnestra; tried at Athens",
    "Athena casts deciding vote: acquitted; cycle ends",
  ];
  const iladchars=[
    {name:"Agamemnon",role:"Leader of Greeks; petty, stubborn; takes Briseis"},
    {name:"Achilles",role:"Greatest warrior; son of Thetis and Peleus; rage is Iliad's theme"},
    {name:"Patroclus",role:"Achilles's companion; possibly his lover; killed by Hector"},
    {name:"Hector",role:"Greatest Trojan; Prince of Troy; killed by Achilles"},
    {name:"Priam",role:"King of Troy; 50 sons, 12 daughters; ransoms Hector's body"},
    {name:"Paris (Alexander)",role:"Son of Priam; causes war; kills Achilles with Apollo's help"},
    {name:"Diomedes",role:"Wounds both Ares and Aphrodite in battle; Athena's favourite"},
    {name:"Ajax the Great",role:"Son of Telamon; strongest after Achilles"},
    {name:"Nestor",role:"King of Pylos; oldest, wisest Greek; loves to reminisce"},
    {name:"Cassandra",role:"Trojan prophetess; doomed never to be believed"},
  ];

  const Box = ({title, col, children}: {title:string; col:string; children:React.ReactNode}) => (
    <div className="card" style={{padding:"1.5rem",borderLeft:`2px solid ${col}`}}>
      <div className="small-caps" style={{color:col,marginBottom:"1rem"}}>{title}</div>
      {children}
    </div>
  );

  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:960}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Quick Reference</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Cheat Sheet</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>All key lists and comparisons on one page.</p>
      </div>

      <div className="grid-2" style={{marginBottom:"1rem"}}>
        <Box title="HERACLES' 12 LABOURS (in order)" col="#2d5a3a">
          {labours.map((l,i)=>(
            <div key={l} style={{display:"flex",gap:10,fontSize:14,color:"var(--ink3)",marginBottom:5}}>
              <span className="small-caps" style={{fontSize:8,color:"#2d5a3a",width:20,flexShrink:0,paddingTop:2}}>{i+1}.</span>{l}
            </div>
          ))}
        </Box>
        <Box title="ODYSSEUS'S 10 ADVENTURES" col="#2d5a3a">
          {adventures.map((a,i)=>(
            <div key={a} style={{fontSize:13,color:"var(--ink3)",marginBottom:6,lineHeight:1.5}}>
              <span className="small-caps" style={{fontSize:8,color:"#2d5a3a",marginRight:6}}>{i+1}.</span>{a}
            </div>
          ))}
        </Box>
      </div>

      <Box title="THREE VISIONS OF THE AFTERLIFE" col="#8b1a1a">
        <div className="grid-3">
          {afterlife.map(a=>(
            <div key={a.who}>
              <div className="display" style={{fontSize:14,color:"var(--ink)",marginBottom:8}}>{a.who}</div>
              {a.pts.map(p=><div key={p} style={{fontSize:13,color:"var(--ink3)",marginBottom:5,paddingLeft:8,borderLeft:"1px solid var(--rule)"}}>· {p}</div>)}
            </div>
          ))}
        </div>
      </Box>

      <div className="grid-2" style={{marginTop:"1rem",marginBottom:"1rem"}}>
        <Box title="FIVE AGES OF MAN (HESIOD)" col="#8b4a00">
          {fiveAges.map(([a,b])=>(
            <div key={a} style={{marginBottom:8}}>
              <span className="display" style={{fontSize:13,color:"var(--accent3)",marginRight:8}}>{a}</span>
              <span style={{fontSize:13,color:"var(--ink3)"}}>{b}</span>
            </div>
          ))}
        </Box>
        <Box title="HOUSE OF ATREUS — CURSE CHAIN" col="#8b1a1a">
          {atreus.map((s,i)=>(
            <div key={i} style={{fontSize:13,color:"var(--ink3)",marginBottom:6,paddingLeft:8,borderLeft:"1px solid var(--rule)"}}>
              {s}
            </div>
          ))}
        </Box>
      </div>

      <Box title="PRINCIPAL CHARACTERS IN THE ILIAD" col="#8b1a1a">
        <div className="grid-2">
          {iladchars.map(c=>(
            <div key={c.name} style={{marginBottom:10}}>
              <div className="display" style={{fontSize:14,color:"var(--ink)",marginBottom:2}}>{c.name}</div>
              <div style={{fontSize:13,color:"var(--warm-mid)"}}>{c.role}</div>
            </div>
          ))}
        </div>
      </Box>

      <div className="grid-2" style={{marginTop:"1rem"}}>
        <Box title="GREEK ↔ ROMAN (12 OLYMPIANS)" col="#5a3e7a">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem"}}>
            {greekRoman.slice(0,12).map(g=>(
              <div key={g.greek} style={{textAlign:"center",padding:"8px 4px",background:"var(--parchment2)",borderRadius:1}}>
                <div className="display" style={{fontSize:12,color:"var(--ink)",marginBottom:1}}>{g.greek}</div>
                <div style={{fontFamily:"var(--serif2)",fontSize:12,fontWeight:700,color:"var(--accent)"}}>{g.roman}</div>
              </div>
            ))}
          </div>
        </Box>
        <Box title="MILTON'S PARADISE LOST — CERBERUS (Assigned excerpt, Bk. 2)" col="#8b1a1a">
          <div style={{fontStyle:"italic",fontSize:13,color:"var(--ink3)",lineHeight:1.8,borderLeft:"2px solid var(--rule)",paddingLeft:"0.75rem"}}>
            <p>"With mortal sting; about her middle round / A cry of Hell Hounds never ceasing bark'd / With wide Cerberian mouths full loud..."</p>
          </div>
          <div style={{fontSize:12,color:"var(--warm-mid)",marginTop:8}}>Shows Cerberus imagery adopted into English literature via Virgil → Milton → Dante tradition.</div>
        </Box>
      </div>
    </div>
  );
}
