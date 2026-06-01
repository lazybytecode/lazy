import { loadComponent, loadConfig } from "../../../router.js"

function fitAI()
{
    // ============================================================
    // WORKOUT DATA
    // ============================================================
    const WK={
    A:{name:'Treino A',color:'var(--accent)',cls:'a',day:'Segunda / Sexta',
        muscles:[{l:'Peito',c:'push'},{l:'Tríceps',c:'push'},{l:'Costas',c:'pull'},{l:'Bíceps',c:'pull'},{l:'Pernas',c:'legs'},{l:'Core',c:'core'}],
        exs:[
        {id:'A1',name:'Supino reto com halteres',target:'3×15',sets:3,reps:15,cat:'push'},
        {id:'A2',name:'Rosca tríceps na polia alta (barra V)',target:'4×12',sets:4,reps:12,cat:'push'},
        {id:'A3',name:'Puxada neutra na polia sentada alta',target:'4×12',sets:4,reps:12,cat:'pull'},
        {id:'A4',name:'Rosca bíceps Scott na máquina anilhada',target:'3×15',sets:3,reps:15,cat:'pull'},
        {id:'A5',name:'Extensão de joelhos na cadeira extensora',target:'3×15',sets:3,reps:15,cat:'legs'},
        {id:'A6',name:'Elevação lateral com halteres',target:'4×12',sets:4,reps:12,cat:'push'},
        {id:'A7',name:'Prancha baixa em isometria',target:'1×45s',sets:1,reps:'45s',cat:'core',iso:true},
        ]},
    B:{name:'Treino B',color:'var(--blue)',cls:'b',day:'Terça / Sábado',
        muscles:[{l:'Peito',c:'push'},{l:'Tríceps',c:'push'},{l:'Costas',c:'pull'},{l:'Bíceps',c:'pull'},{l:'Pernas',c:'legs'},{l:'Ombros',c:'push'},{l:'Core',c:'core'}],
        exs:[
        {id:'B1',name:'Supino inclinado com halteres',target:'3×15',sets:3,reps:15,cat:'push'},
        {id:'B2',name:'Tríceps francês curvado na polia alta',target:'4×12',sets:4,reps:12,cat:'push'},
        {id:'B3',name:'Remada curvada com barra',target:'4×12',sets:4,reps:12,cat:'pull'},
        {id:'B4',name:'Rosca bíceps neutra com halteres',target:'4×12',sets:4,reps:12,cat:'pull'},
        {id:'B5',name:'Afundo com halteres laterais',target:'3×12',sets:3,reps:12,cat:'legs'},
        {id:'B6',name:'Desenvolvimento Thruster com halteres',target:'3×15',sets:3,reps:15,cat:'push'},
        {id:'B7',name:'Prancha baixa em isometria',target:'1×45s',sets:1,reps:'45s',cat:'core',iso:true},
        ]},
    C:{name:'Treino C',color:'var(--orange)',cls:'c',day:'Quarta',
        muscles:[{l:'Peito',c:'push'},{l:'Tríceps',c:'push'},{l:'Costas',c:'pull'},{l:'Bíceps',c:'pull'},{l:'Pernas',c:'legs'},{l:'Ombros',c:'push'},{l:'Core',c:'core'}],
        exs:[
        {id:'C1',name:'Crucifixo declinado nas polias altas',target:'3×12',sets:3,reps:12,cat:'push'},
        {id:'C2',name:'Flexão de braços ajoelhada',target:'3×10',sets:3,reps:10,cat:'push'},
        {id:'C3',name:'Remada aberta neutra no remador',target:'3×15',sets:3,reps:15,cat:'pull'},
        {id:'C4',name:'Rosca bíceps + desenvolvimento Arnold',target:'4×12',sets:4,reps:12,cat:'pull'},
        {id:'C5',name:'Agachamento profundo inclinado (máquina)',target:'4×12',sets:4,reps:12,cat:'legs'},
        {id:'C6',name:'Elevação lateral com halteres',target:'4×12',sets:4,reps:12,cat:'push'},
        {id:'C7',name:'Prancha baixa em isometria',target:'1×45s',sets:1,reps:'45s',cat:'core',iso:true},
        ]},
    };
    const WEEK_PLAN=['A','B','C',null,'A','B',null];
    const CAT_COLOR={push:'var(--push)',pull:'var(--pull)',legs:'var(--legs)',core:'var(--core)'};

    // ============================================================
    // STATE
    // ============================================================
    let S={sessions:[],measures:[],prs:{},cfg:{name:'',rest:90,inc:2.5,weight:'',height:''}};
    function loadS(){try{const d=localStorage.getItem('fitlog4');if(d)S={...S,...JSON.parse(d)};}catch(e){}}
    function saveS(){localStorage.setItem('fitlog4',JSON.stringify(S));updateSbStats();}
    loadS();

    // ============================================================
    // NAVIGATION
    // ============================================================
    function goTo(page){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.sb-item,.mn-item').forEach(el=>el.classList.remove('active'));
    const pg=document.getElementById('page-'+page);
    if(pg)pg.classList.add('active');
    document.querySelectorAll(`[data-page="${page}"]`).forEach(el=>el.classList.add('active'));
    closeSb();
    ({dashboard:renderDash,treinos:renderTreinos,historico:renderHistorico,progresso:renderProgresso,medidas:renderMedidas,config:renderConfig}[page]||function(){})();
    window.scrollTo(0,0);
    }
    document.querySelectorAll('.sb-item,.mn-item').forEach(el=>el.addEventListener('click',()=>goTo(el.dataset.page)));
    document.getElementById('hamburger').addEventListener('click',()=>{document.getElementById('sidebar').classList.toggle('open');document.getElementById('sb-overlay').classList.toggle('show');});
    document.getElementById('sb-overlay').addEventListener('click',closeSb);
    function closeSb(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sb-overlay').classList.remove('show');}
    function updateSbStats(){document.getElementById('sb-total').textContent=S.sessions.length;document.getElementById('sb-streak').textContent=calcStreak();}

    // ============================================================
    // DASHBOARD
    // ============================================================
    function renderDash(){
    const now=new Date();
    document.getElementById('dash-name').textContent=S.cfg.name||'Atleta';
    document.getElementById('dash-date').textContent=now.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    renderWeekStrip();renderDashStats();renderNextWk();renderWeekSum();renderRecentList();
    }
    function renderWeekStrip(){
    const now=new Date();const dow=now.getDay();
    const monday=new Date(now);monday.setDate(now.getDate()-((dow+6)%7));
    const days=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
    document.getElementById('week-strip').innerHTML=days.map((d,i)=>{
        const date=new Date(monday);date.setDate(monday.getDate()+i);
        const ds=toDS(date);
        const trained=S.sessions.some(s=>s.date===ds);
        const isToday=date.toDateString()===now.toDateString();
        const wk=WEEK_PLAN[i];
        const dc=wk?(wk==='A'?'var(--accent)':wk==='B'?'var(--blue)':'var(--orange)'):'var(--muted2)';
        return `<div class="wd${isToday?' today':''}${trained?' trained':''}${!wk?' rest-day':''}">
        <div class="wd-name">${d}</div><div class="wd-num">${date.getDate()}</div>
        <div class="wd-dot" style="${trained?'background:'+dc:''}"></div>
        </div>`;
    }).join('');
    }
    function renderDashStats(){
    document.getElementById('st-total').textContent=S.sessions.length;
    const str=calcStreak();
    document.getElementById('st-streak').textContent=str+(str>0?' 🔥':'');
    const now=new Date();const ws=new Date(now);ws.setDate(now.getDate()-((now.getDay()+6)%7));
    document.getElementById('st-week').textContent=S.sessions.filter(s=>new Date(s.date)>=ws).length+'/5';
    const td=toDS(now);let vol=0;
    S.sessions.filter(s=>s.date===td).forEach(s=>(s.exs||[]).forEach(ex=>(ex.sets||[]).forEach(ss=>{
        if(ss.done&&ss.weight&&ss.reps)vol+=parseFloat(ss.weight)*parseFloat(ss.reps);
    })));
    document.getElementById('st-vol').textContent=vol?vol.toLocaleString('pt-BR')+'kg':'—';
    updateSbStats();
    }
    function renderNextWk(){
    const el=document.getElementById('next-wk');
    const dow=(new Date().getDay()+6)%7;
    const key=WEEK_PLAN[dow];
    if(!key){el.innerHTML=`<div style="color:var(--muted);font-size:13px;">Hoje é dia de descanso 🛌<br>Recupere bem!</div>`;return;}
    const w=WK[key];const last=getLastSess(key);
    el.innerHTML=`<div style="font-family:var(--display);font-size:28px;color:${w.color};">${w.name}</div>
        <div style="font-size:12px;color:var(--muted);margin:4px 0 14px;">${w.exs.length} exercícios · Último: ${last?fmtDate(last.date):'Nunca'}</div>
        <button class="btn btn-accent" onclick="startSession('${key}')" style="background:${w.color};color:#000;">▶ Iniciar Agora</button>`;
    }
    function renderWeekSum(){
    const el=document.getElementById('week-sum');
    const now=new Date();const ws=new Date(now);ws.setDate(now.getDate()-((now.getDay()+6)%7));
    const wSess=S.sessions.filter(s=>new Date(s.date)>=ws);
    if(!wSess.length){el.innerHTML=`<div style="color:var(--muted);font-size:13px;">Nenhum treino esta semana.</div>`;return;}
    let vol=0,sets=0;
    wSess.forEach(s=>(s.exs||[]).forEach(ex=>(ex.sets||[]).forEach(ss=>{if(ss.done){sets++;if(ss.weight&&ss.reps)vol+=parseFloat(ss.weight)*parseFloat(ss.reps);}})));
    el.innerHTML=`<div class="g2" style="gap:10px;margin-bottom:10px;">
        <div style="background:var(--bg3);border-radius:var(--r2);padding:12px;text-align:center;">
        <div style="font-family:var(--display);font-size:28px;color:var(--blue);">${wSess.length}</div><div style="font-size:11px;color:var(--muted);">Sessões</div></div>
        <div style="background:var(--bg3);border-radius:var(--r2);padding:12px;text-align:center;">
        <div style="font-family:var(--display);font-size:28px;color:var(--green);">${sets}</div><div style="font-size:11px;color:var(--muted);">Séries</div></div>
    </div>
    <div style="background:var(--bg3);border-radius:var(--r2);padding:12px;text-align:center;">
        <div style="font-family:var(--display);font-size:28px;color:var(--accent);">${vol?vol.toLocaleString('pt-BR')+'kg':'—'}</div><div style="font-size:11px;color:var(--muted);">Volume Total</div></div>`;
    }
    function renderRecentList(){
    const el=document.getElementById('recent-list');
    const recent=[...S.sessions].reverse().slice(0,6);
    if(!recent.length){el.innerHTML=`<div class="empty"><div class="empty-icon">🏋️</div><div class="empty-txt">Sem treinos registrados. Vamos começar!</div></div>`;return;}
    el.innerHTML=recent.map(s=>{
        const w=WK[s.workout];const vol=calcVol(s);const dur=s.duration?fmtDur(s.duration):'—';
        return `<div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border);">
        <div style="width:4px;height:38px;border-radius:99px;background:${w?.color||'var(--muted)'};flex-shrink:0;"></div>
        <div style="flex:1;min-width:0;"><div style="font-weight:500;font-size:14px;">${s.name}</div><div style="font-size:11px;color:var(--muted);margin-top:2px;">${fmtDate(s.date)} · ${dur}</div></div>
        <div style="text-align:right;flex-shrink:0;"><div style="font-size:12px;color:var(--muted);">${vol?vol.toLocaleString('pt-BR')+'kg':'—'}</div></div>
        </div>`;
    }).join('');
    }

    // ============================================================
    // TREINOS PAGE
    // ============================================================
    function renderTreinos(){
    document.getElementById('treino-cards').innerHTML=Object.entries(WK).map(([key,w])=>{
        const last=getLastSess(key);
        return `<div class="wc">
        <div class="wc-top" data-key="${key}">
            <div class="wc-label" style="color:${w.color};">${w.name}</div>
            <div class="wc-muscles">${w.muscles.map(m=>`<span class="mtag ${m.c}">${m.l}</span>`).join('')}</div>
            <div class="wc-meta">${w.exs.length} exercícios · <b>${w.day}</b> · Último: <b>${last?fmtDate(last.date):'—'}</b></div>
        </div>
        <div class="wc-exlist">${w.exs.map((ex,i)=>`<div class="wc-exitem">
            <div style="font-family:var(--mono);font-size:11px;color:var(--muted2);width:20px;">${i+1}</div>
            <div class="ex-cat-bar" style="background:${CAT_COLOR[ex.cat]};"></div>
            <div style="flex:1;min-width:0;"><div class="ex-n">${ex.name}</div><div class="ex-t">${ex.target}${S.prs[ex.id]?' · PR: <b style="color:var(--accent)">'+S.prs[ex.id]+'kg</b>':''}</div></div>
            ${S.prs[ex.id]?`<span class="pr-tag">PR</span>`:''}
        </div>`).join('')}</div>
        <div class="wc-footer"><button class="start-btn" style="background:${w.color};color:#000;" onclick="startSession('${key}')">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><polygon points="5,3 19,12 5,21"/></svg>
            Iniciar ${w.name}
        </button></div>
        </div>`;
    }).join('');
    }

    // ============================================================
    // SESSION ENGINE
    // ============================================================
    let sess=null,sessInt=null,restInt=null;

    function startSession(key){
    const w=WK[key];
    sess={id:Date.now(),workout:key,name:w.name,date:toDS(new Date()),startTime:Date.now(),duration:0,
        exs:w.exs.map(ex=>({...ex,
        sets:Array.from({length:ex.sets},(_,si)=>{
            const prev=getPrevLoad(ex.id,si);
            return{weight:prev.weight||'',reps:prev.reps!==undefined?prev.reps:ex.reps,done:false,pr:false};
        }),note:''
        }))};
    document.getElementById('so-title').textContent=sess.name;
    rebuildSessBody();
    document.getElementById('sess-overlay').classList.add('on');
    document.body.style.overflow='hidden';
    sessInt=setInterval(()=>{
        if(!sess)return;
        sess.duration=Math.floor((Date.now()-sess.startTime)/1000);
        document.getElementById('so-timer').textContent=fmtDur(sess.duration);
    },1000);
    }

    function getPrevLoad(exId,si){
    for(let i=S.sessions.length-1;i>=0;i--){
        const ex=S.sessions[i].exs?.find(e=>e.id===exId);
        if(ex?.sets?.[si])return ex.sets[si];
    }return{};
    }

    function rebuildSessBody(){
    if(!sess)return;
    document.getElementById('so-body').innerHTML=sess.exs.map((ex,ei)=>buildExHTML(ex,ei)).join('');
    updateSessProgress();
    }

    function buildExHTML(ex,ei){
    const done=ex.sets.filter(s=>s.done).length;const total=ex.sets.length;
    const allDone=done===total;const catC=CAT_COLOR[ex.cat]||'var(--muted)';
    return `<div class="sess-ex${allDone?' all-done':''}" id="se-${ei}">
        <div class="sess-ex-hdr">
        <div class="sess-ex-stripe" style="background:${catC};"></div>
        <div class="sess-ex-info">
            <div class="sess-ex-name">${ex.name}</div>
            <div class="sess-ex-target">${ex.target}${ex.iso?' · isometria':''}</div>
            <div class="sess-ex-prog" style="color:${allDone?'var(--green)':'var(--muted)'};">${done}/${total} séries concluídas</div>
        </div>
        ${allDone?`<div style="color:var(--green);font-size:22px;">✓</div>`:''}
        </div>
        <table class="sst">
        <thead><tr><th>Série</th>${ex.iso?'<th>Tempo</th>':`<th>Carga kg</th><th>Reps</th>`}<th></th></tr></thead>
        <tbody>${ex.sets.map((s,si)=>`<tr style="${s.done?'opacity:.55;':''}">
            <td><span class="set-idx">S${si+1}</span></td>
            ${ex.iso
            ?`<td><input class="set-inp iso" type="text" value="${s.reps}" placeholder="45s" onchange="setSF(${ei},${si},'reps',this.value)"></td>`
            :`<td><div>
                <input class="set-inp" type="number" value="${s.weight}" placeholder="kg" onchange="setSF(${ei},${si},'weight',this.value)">
                ${getPrevLoad(ex.id,si).weight?`<div class="prev-hint">ant: ${getPrevLoad(ex.id,si).weight}kg</div>`:''}
                </div></td>
                <td><input class="set-inp" type="number" value="${s.reps}" placeholder="reps" onchange="setSF(${ei},${si},'reps',this.value)"></td>`}
            <td style="display:flex;align-items:center;gap:6px;">
            <button class="chk-btn${s.done?' done':''}" onclick="toggleSet(${ei},${si})">
                <svg viewBox="0 0 24 24" fill="none" stroke="${s.done?'#000':'currentColor'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
            ${s.pr?`<span class="pr-flash">PR!</span>`:''}
            </td>
        </tr>`).join('')}</tbody>
        </table>
        <div class="rest-box" id="rb-${ei}">
        <div class="rest-ring-wrap">
            <svg class="rest-ring-svg" viewBox="0 0 90 90"><circle class="rest-ring-bg" cx="45" cy="45" r="40"/><circle class="rest-ring-fill" id="rr-${ei}" cx="45" cy="45" r="40" stroke-dasharray="251.3" stroke-dashoffset="0"/></svg>
            <div class="rest-num" id="rn-${ei}">90</div>
        </div>
        <div class="rest-label">Descanso</div>
        <button class="rest-skip" onclick="skipRest(${ei})">Pular ›</button>
        </div>
        <div class="sess-note-wrap">
        <textarea class="sess-note" placeholder="Notas (carga, sensação, observações)..." onchange="sess.exs[${ei}].note=this.value">${ex.note||''}</textarea>
        </div>
        ${ei<sess.exs.length-1?`<div class="next-hint">Próximo: <b>${sess.exs[ei+1].name}</b></div>`:''}
    </div>`;
    }

    function setSF(ei,si,field,val){if(sess)sess.exs[ei].sets[si][field]=val;}

    function toggleSet(ei,si){
    if(!sess)return;
    const set=sess.exs[ei].sets[si];
    set.done=!set.done;
    if(set.done){checkPR(ei,si);startRest(ei);}
    // rebuild just this card
    const el=document.getElementById('se-'+ei);
    if(el){const newEl=document.createElement('div');newEl.innerHTML=buildExHTML(sess.exs[ei],ei);el.replaceWith(newEl.firstChild);}
    updateSessProgress();
    }

    function checkPR(ei,si){
    if(!sess)return;
    const ex=sess.exs[ei];const set=ex.sets[si];
    if(!set.weight||isNaN(set.weight))return;
    const w=parseFloat(set.weight);
    if(!S.prs[ex.id]||w>S.prs[ex.id]){
        S.prs[ex.id]=w;set.pr=true;saveS();
        toast(`🏆 Novo PR! ${ex.name}: ${w}kg`,'a');
    }
    }

    function startRest(ei){
    if(restInt)clearInterval(restInt);
    const rb=document.getElementById('rb-'+ei);
    const rn=document.getElementById('rn-'+ei);
    const rr=document.getElementById('rr-'+ei);
    if(!rb||!rn)return;
    rb.classList.add('on');
    const total=S.cfg.rest||90;const circ=251.3;
    let t=total;
    if(rn)rn.textContent=t;if(rr)rr.style.strokeDashoffset=0;
    restInt=setInterval(()=>{
        t--;
        const rn2=document.getElementById('rn-'+ei);
        const rr2=document.getElementById('rr-'+ei);
        if(rn2)rn2.textContent=t;
        if(rr2)rr2.style.strokeDashoffset=circ*(1-t/total);
        if(t<=0){
        clearInterval(restInt);
        const rb2=document.getElementById('rb-'+ei);
        if(rb2)rb2.classList.remove('on');
        toast('⏱ Descanso finalizado!','b');
        }
    },1000);
    }

    function skipRest(ei){
    if(restInt)clearInterval(restInt);
    const rb=document.getElementById('rb-'+ei);
    if(rb)rb.classList.remove('on');
    }

    function updateSessProgress(){
    if(!sess)return;
    const total=sess.exs.reduce((a,ex)=>a+ex.sets.length,0);
    const done=sess.exs.reduce((a,ex)=>a+ex.sets.filter(s=>s.done).length,0);
    const pct=total?Math.round(done/total*100):0;
    const pb=document.getElementById('so-prog');if(pb)pb.style.width=pct+'%';
    const pt=document.getElementById('so-prog-txt');if(pt)pt.textContent=`${done} de ${total} séries`;
    const pp=document.getElementById('so-prog-pct');if(pp)pp.textContent=pct+'%';
    const exDone=sess.exs.filter(ex=>ex.sets.every(s=>s.done)).length;
    const sub=document.getElementById('so-sub');
    if(sub)sub.textContent=`${exDone}/${sess.exs.length} exercícios · ${done} séries`;
    }

    function finishSession(){
    if(!sess)return;
    if(!confirm('Finalizar e salvar este treino?'))return;
    clearInterval(sessInt);if(restInt)clearInterval(restInt);
    sess.duration=Math.floor((Date.now()-sess.startTime)/1000);
    S.sessions.push(JSON.parse(JSON.stringify(sess)));
    saveS();
    document.getElementById('sess-overlay').classList.remove('on');
    document.body.style.overflow='';sess=null;
    toast('✅ Treino salvo com sucesso!','g');
    renderDash();
    }

    // ============================================================
    // HISTÓRICO
    // ============================================================
    function renderHistorico(){
    const filter=document.getElementById('hist-filter').value;
    const items=[...S.sessions].reverse().filter(s=>!filter||s.workout===filter);
    document.getElementById('hist-count').textContent=`${items.length} sessão${items.length!==1?'ões':''}`;
    const el=document.getElementById('hist-list');
    if(!items.length){el.innerHTML=`<div class="empty"><div class="empty-icon">📋</div><div class="empty-txt">Nenhum treino encontrado.</div></div>`;return;}
    el.innerHTML=items.map((s,i)=>{
        const w=WK[s.workout];const vol=calcVol(s);const dur=s.duration?fmtDur(s.duration):'—';
        const totSets=s.exs?.reduce((a,ex)=>a+(ex.sets||[]).length,0)||0;
        const doneSets=s.exs?.reduce((a,ex)=>a+(ex.sets||[]).filter(ss=>ss.done).length,0)||0;
        const hasPR=s.exs?.some(ex=>ex.sets?.some(ss=>ss.pr));
        return `<div class="hist-item">
        <div class="hist-hdr" onclick="toggleHist('hb-${i}')">
            <div style="flex:1;">
            <div class="hist-name" style="color:${w?.color||'var(--text)'};">${s.name}${hasPR?' <span class="pr-tag" style="font-size:9px;">PR</span>':''}</div>
            <div class="hist-date">${fmtDate(s.date)} · ${new Date(s.date+'T12:00').toLocaleDateString('pt-BR',{weekday:'long'})}</div>
            <div class="hist-badges">
                <span class="hist-badge">⏱ ${dur}</span>
                <span class="hist-badge">📦 ${vol?vol.toLocaleString('pt-BR')+'kg':'—'}</span>
                <span class="hist-badge">✅ ${doneSets}/${totSets} séries</span>
            </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" style="flex-shrink:0;margin-top:4px;"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="hist-body" id="hb-${i}">
            ${(s.exs||[]).map(ex=>{
            const maxW=Math.max(0,...ex.sets.filter(ss=>ss.weight&&ss.done).map(ss=>parseFloat(ss.weight)));
            const exVol=ex.sets.filter(ss=>ss.done&&ss.weight&&ss.reps).reduce((a,ss)=>a+parseFloat(ss.weight)*parseFloat(ss.reps),0);
            const setSum=ex.sets.map((ss,si)=>`S${si+1}:${ss.weight?ss.weight+'kg':'—'}×${ss.reps}${ss.done?'✓':''}`).join(' ');
            return `<div class="hist-ex-row">
                <div style="flex:1;min-width:0;">
                <div style="font-weight:500;font-size:13px;">${ex.name}${ex.sets.some(ss=>ss.pr)?` <span class="pr-tag" style="font-size:9px;">PR</span>`:''}</div>
                <div class="hist-ex-sets">${setSum}</div>
                </div>
                <div style="text-align:right;flex-shrink:0;padding-left:12px;">
                ${maxW?`<div style="font-family:var(--mono);font-size:13px;color:var(--accent);">${maxW}kg</div>`:''}
                ${exVol?`<div style="font-size:10px;color:var(--muted);">${exVol.toLocaleString('pt-BR')}kg</div>`:''}
                </div>
            </div>`;
            }).join('')}
            ${s.exs?.some(ex=>ex.note)?`<div class="hist-note">${s.exs.filter(ex=>ex.note).map(ex=>`<b>${ex.name}:</b> ${ex.note}`).join('<br>')}</div>`:''}
        </div>
        </div>`;
    }).join('');
    }
    function toggleHist(id){const el=document.getElementById(id);if(el)el.classList.toggle('open');}

    // ============================================================
    // PROGRESSO
    // ============================================================
    let progCat='';
    function renderProgresso(){
    document.querySelectorAll('.pf-btn').forEach(btn=>{
        btn.onclick=()=>{
        progCat=btn.dataset.cat;
        document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        fillProgSel();renderProgEx();
        };
    });
    fillProgSel();renderProgEx();
    }
    function fillProgSel(){
    const sel=document.getElementById('prog-ex-sel');
    const seen=new Set();
    const exs=Object.values(WK).flatMap(w=>w.exs).filter(ex=>{
        if(ex.iso||seen.has(ex.id))return false;
        if(progCat&&ex.cat!==progCat)return false;
        seen.add(ex.id);return true;
    });
    sel.innerHTML=exs.map(ex=>`<option value="${ex.id}">${ex.name}</option>`).join('');
    }
    function renderProgEx(){
    const exId=document.getElementById('prog-ex-sel').value;if(!exId)return;
    const exDef=Object.values(WK).flatMap(w=>w.exs).find(e=>e.id===exId);
    const pts=S.sessions.filter(s=>s.exs?.some(e=>e.id===exId)).map(s=>{
        const ex=s.exs.find(e=>e.id===exId);
        const loads=ex.sets.filter(ss=>ss.done&&ss.weight).map(ss=>parseFloat(ss.weight));
        const reps=ex.sets.filter(ss=>ss.done&&ss.weight&&ss.reps);
        const maxLoad=loads.length?Math.max(...loads):0;
        const vol=reps.reduce((a,ss)=>a+parseFloat(ss.weight)*parseFloat(ss.reps),0);
        return{date:s.date,maxLoad,vol};
    });
    drawChart(document.getElementById('chart-prog'),pts,180,false);
    const pr=S.prs[exId];
    document.getElementById('prog-ex-cards').innerHTML=`<div class="prog-ex-card">
        <div class="prog-ex-name">${exDef?.name||exId}</div>
        ${pr?`<div class="prog-ex-pr">${pr}<span class="prog-ex-pr-unit">kg PR 🏆</span></div>`:'<div style="color:var(--muted);font-size:13px;margin:8px 0;">Ainda sem carga registrada.</div>'}
        <div class="prog-hist">${pts.slice(-12).reverse().map(p=>`<div class="phi">
        <div class="phi-date">${p.date.slice(5)}</div>
        <div class="phi-val">${p.maxLoad?p.maxLoad+'kg':'—'}</div>
        <div class="phi-vol">${p.vol?p.vol.toLocaleString('pt-BR')+'kg vol':''}</div>
        </div>`).join('')}</div>
    </div>`;
    }

    // ============================================================
    // MEDIDAS
    // ============================================================
    function renderMedidas(){
    renderMeasCards();drawWeightChart();renderMeasHist();
    }
    function renderMeasCards(){
    const el=document.getElementById('meas-cards');
    const latest=S.measures[S.measures.length-1];const prev=S.measures[S.measures.length-2];
    if(!latest){el.innerHTML=`<div style="grid-column:1/-1;" class="empty"><div class="empty-icon">📏</div><div class="empty-txt">Registre suas primeiras medidas!</div></div>`;return;}
    const fields=[
        {k:'weight',l:'Peso',u:'kg',lb:false},{k:'fat',l:'% Gordura',u:'%',lb:true},
        {k:'chest',l:'Peito',u:'cm',lb:false},{k:'waist',l:'Cintura',u:'cm',lb:true},
        {k:'hip',l:'Quadril',u:'cm',lb:false},{k:'arm',l:'Braço',u:'cm',lb:false},
        {k:'thigh',l:'Coxa',u:'cm',lb:false},{k:'calf',l:'Panturrilha',u:'cm',lb:false},
    ];
    const imc=calcIMC();
    const imcCard=imc?`<div class="meas-card" style="border-color:${parseFloat(imc.val)<25?'var(--green)':parseFloat(imc.val)<30?'var(--orange)':'var(--red)'};">
        <div class="meas-name">IMC</div>
        <div class="meas-val" style="color:${parseFloat(imc.val)<25?'var(--green)':parseFloat(imc.val)<30?'var(--orange)':'var(--red)'};">${imc.val}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;">${imc.cat}</div>
    </div>`:'';
    el.innerHTML=imcCard+fields.filter(f=>latest[f.k]).map(f=>{
        const v=parseFloat(latest[f.k]);const pv=prev?parseFloat(prev[f.k]):null;
        const delta=pv?v-pv:null;
        const dc=delta===null||delta===0?'':((delta>0&&!f.lb)||(delta<0&&f.lb))?'pos':'neg';
        return `<div class="meas-card">
        <div class="meas-name">${f.l}</div>
        <div class="meas-val">${v}<span class="meas-unit">${f.u}</span></div>
        ${delta!==null&&delta!==0?`<div class="meas-delta ${dc}">${delta>0?'+':''}${delta.toFixed(1)}${f.u}</div>`:''}
        </div>`;
    }).join('');
    }
    function drawWeightChart(){
    const pts=S.measures.filter(m=>m.weight).map(m=>({date:m.date,maxLoad:parseFloat(m.weight),vol:0}));
    drawChart(document.getElementById('chart-weight'),pts,160,true);
    }
    function renderMeasHist(){
    const items=[...S.measures].reverse();
    document.getElementById('meas-hist').innerHTML=items.map(m=>`<div class="hist-item" style="margin-bottom:8px;">
        <div class="hist-hdr" style="cursor:default;">
        <div>
            <div class="hist-name" style="font-size:16px;">${fmtDate(m.date)}</div>
            <div class="hist-badges">
            ${m.weight?`<span class="hist-badge">⚖️ ${m.weight}kg</span>`:''}
            ${m.fat?`<span class="hist-badge">🔥 ${m.fat}%</span>`:''}
            ${m.chest?`<span class="hist-badge">Peito ${m.chest}cm</span>`:''}
            ${m.waist?`<span class="hist-badge">Cintura ${m.waist}cm</span>`:''}
            ${m.arm?`<span class="hist-badge">Braço ${m.arm}cm</span>`:''}
            ${m.thigh?`<span class="hist-badge">Coxa ${m.thigh}cm</span>`:''}
            ${m.calf?`<span class="hist-badge">Pant. ${m.calf}cm</span>`:''}
            </div>
            ${m.notes?`<div style="font-size:12px;color:var(--muted);margin-top:6px;font-style:italic;">${m.notes}</div>`:''}
        </div>
        </div>
    </div>`).join('');
    }
    function openMModal(){document.getElementById('mmodal').classList.add('on');}
    function closeMModal(){document.getElementById('mmodal').classList.remove('on');}
    function saveMeasure(){
    const m={date:toDS(new Date()),weight:document.getElementById('mm-wt').value,fat:document.getElementById('mm-fat').value,
        chest:document.getElementById('mm-chest').value,waist:document.getElementById('mm-waist').value,
        hip:document.getElementById('mm-hip').value,arm:document.getElementById('mm-arm').value,
        thigh:document.getElementById('mm-thigh').value,calf:document.getElementById('mm-calf').value,
        notes:document.getElementById('mm-notes').value};
    if(!Object.entries(m).filter(([k])=>k!=='date'&&k!=='notes').some(([,v])=>v)){toast('Preencha pelo menos um campo.','');return;}
    S.measures.push(m);saveS();closeMModal();renderMedidas();toast('📏 Medidas salvas!','g');
    }

    // ============================================================
    // CONFIG
    // ============================================================
    function renderConfig(){
    document.getElementById('cfg-name').value=S.cfg.name||'';
    document.getElementById('cfg-weight').value=S.cfg.weight||'';
    document.getElementById('cfg-height').value=S.cfg.height||'';
    document.getElementById('cfg-rest').value=S.cfg.rest||90;
    document.getElementById('cfg-inc').value=S.cfg.inc||2.5;
    renderBadges();
    document.getElementById('data-size').textContent=`Dados salvos: ${(JSON.stringify(S).length/1024).toFixed(1)} KB`;
    }
    function cfgSave(){
    S.cfg.name=document.getElementById('cfg-name').value;
    S.cfg.weight=document.getElementById('cfg-weight').value;
    S.cfg.height=document.getElementById('cfg-height').value;
    S.cfg.rest=parseInt(document.getElementById('cfg-rest').value)||90;
    S.cfg.inc=parseFloat(document.getElementById('cfg-inc').value)||2.5;
    saveS();
    document.getElementById('dash-name').textContent=S.cfg.name||'Atleta';
    }
    function renderBadges(){
    const BDGS=[
        {icon:'🥇',name:'Primeiro Treino',ok:S.sessions.length>=1},
        {icon:'🔥',name:'Sequência de 3 dias',ok:calcStreak()>=3},
        {icon:'💪',name:'10 Treinos',ok:S.sessions.length>=10},
        {icon:'🏆',name:'Primeiro PR',ok:Object.keys(S.prs).length>0},
        {icon:'📏',name:'Primeiras Medidas',ok:S.measures.length>=1},
        {icon:'🌟',name:'25 Treinos',ok:S.sessions.length>=25},
        {icon:'💯',name:'50 Treinos',ok:S.sessions.length>=50},
        {icon:'🗓️',name:'Mês Completo (20)',ok:countMonthTr()>=20},
    ];
    document.getElementById('badge-list').innerHTML=BDGS.map(b=>`
        <div class="badge-item${b.ok?'':' badge-locked'}"><span class="badge-icon">${b.icon}</span>
        <div style="font-size:12px;font-weight:500;">${b.name}</div>
        </div>`).join('');
    }
    function countMonthTr(){
    const n=new Date();
    return S.sessions.filter(s=>{const d=new Date(s.date);return d.getFullYear()===n.getFullYear()&&d.getMonth()===n.getMonth();}).length;
    }
    function doExport(){
    const a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:'application/json'}));
    a.download=`fitlog-${toDS(new Date())}.json`;a.click();toast('📤 Exportado!','');
    }
    function doImport(event){
    const r=new FileReader();
    r.onload=e=>{try{S={...S,...JSON.parse(e.target.result)};saveS();renderConfig();toast('✅ Importado!','g');}catch(err){toast('❌ Erro no arquivo.','');}};
    r.readAsText(event.target.files[0]);
    }
    function doClear(){
    if(confirm('⚠️ Apagar TODOS os dados permanentemente?')){
        S={sessions:[],measures:[],prs:{},cfg:{name:'',rest:90,inc:2.5}};
        saveS();renderConfig();renderDash();toast('🗑️ Dados apagados.','');
    }
    }

    // ============================================================
    // CHART ENGINE
    // ============================================================
    function drawChart(canvas,data,h,single){
    const dpr=window.devicePixelRatio||1;
    const W=canvas.offsetWidth||600;
    canvas.width=W*dpr;canvas.height=h*dpr;
    const ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);ctx.clearRect(0,0,W,h);
    if(!data||!data.length){
        ctx.fillStyle='#555564';ctx.font=`13px DM Sans,sans-serif`;ctx.textAlign='center';
        ctx.fillText('Sem dados ainda. Registre treinos para ver o progresso.',W/2,h/2);return;
    }
    const pad={t:12,r:16,b:28,l:44};const cW=W-pad.l-pad.r,cH=h-pad.t-pad.b;
    const sets=single
        ?[{vals:data.map(d=>d.maxLoad),col:'#e8ff3c'}]
        :[{vals:data.map(d=>d.maxLoad),col:'#e8ff3c'},
        {vals:(()=>{const maxV=Math.max(...data.map(d=>d.vol),1);return data.map(d=>d.vol/maxV*Math.max(...data.map(d=>d.maxLoad),1));})(),col:'#4da6ff'}];
    const allV=sets.flatMap(s=>s.vals);
    const maxV=Math.max(...allV,1);
    const xOf=i=>pad.l+(data.length>1?i/(data.length-1):0.5)*cW;
    const yOf=v=>pad.t+cH-v/maxV*cH;
    // grid
    [0,.25,.5,.75,1].forEach(t=>{
        const y=pad.t+cH*(1-t);
        ctx.strokeStyle='rgba(255,255,255,0.04)';ctx.lineWidth=1;
        ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+cW,y);ctx.stroke();
        ctx.fillStyle='#555564';ctx.font=`10px DM Mono,monospace`;ctx.textAlign='right';
        ctx.fillText(Math.round(maxV*t),pad.l-6,y+3.5);
    });
    // datasets
    sets.forEach(ds=>{
        const pts=data.map((d,i)=>({x:xOf(i),y:yOf(ds.vals[i]||0)}));
        // gradient fill
        ctx.beginPath();pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
        ctx.lineTo(xOf(data.length-1),pad.t+cH);ctx.lineTo(xOf(0),pad.t+cH);ctx.closePath();
        const grad=ctx.createLinearGradient(0,pad.t,0,pad.t+cH);
        grad.addColorStop(0,ds.col+'2a');grad.addColorStop(1,ds.col+'00');
        ctx.fillStyle=grad;ctx.fill();
        // line
        ctx.beginPath();ctx.strokeStyle=ds.col;ctx.lineWidth=2;ctx.lineJoin='round';
        pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();
        // dots
        pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,Math.PI*2);ctx.fillStyle=ds.col;ctx.fill();});
    });
    // x labels
    ctx.fillStyle='#555564';ctx.font=`10px DM Mono,monospace`;ctx.textAlign='center';
    const step=Math.ceil(data.length/6);
    data.forEach((d,i)=>{if(data.length<=7||i%step===0)ctx.fillText(d.date.slice(5),xOf(i),h-6);});
    }

    // ============================================================
    // UTILS
    // ============================================================
    function toDS(d){return d.toISOString().split('T')[0];}
    function fmtDate(ds){return new Date(ds+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'2-digit'});}
    function fmtDur(s){const m=Math.floor(s/60);return`${m}:${(s%60).toString().padStart(2,'0')}`;}
    function calcVol(s){let v=0;(s.exs||[]).forEach(ex=>(ex.sets||[]).forEach(ss=>{if(ss.done&&ss.weight&&ss.reps)v+=parseFloat(ss.weight)*parseFloat(ss.reps);}));return v;}
    function getLastSess(key){for(let i=S.sessions.length-1;i>=0;i--)if(S.sessions[i].workout===key)return S.sessions[i];return null;}
    function calcStreak(){
    if(!S.sessions.length)return 0;
    const dates=[...new Set(S.sessions.map(s=>s.date))].sort().reverse();
    const now=new Date();let streak=0;let check=new Date(toDS(now));
    for(let i=0;i<90;i++){
        if(dates.includes(toDS(check)))streak++;
        else if(streak>0)break;
        check.setDate(check.getDate()-1);
    }return streak;
    }
    let toastT=null;
    function toast(msg,type){
    const el=document.getElementById('toast');
    el.textContent=msg;el.className='show'+(type?' '+type:'');
    if(toastT)clearTimeout(toastT);
    toastT=setTimeout(()=>el.className='',3500);
    }

    // ============================================================
    // IMC HELPER
    // ============================================================
    function calcIMC(){
    const w=parseFloat(S.cfg.weight||S.measures[S.measures.length-1]?.weight);
    const h=parseFloat(S.cfg.height)/100;
    if(!w||!h)return null;
    const imc=w/(h*h);
    let cat='';
    if(imc<18.5)cat='Abaixo do peso';
    else if(imc<25)cat='Peso normal';
    else if(imc<30)cat='Sobrepeso';
    else cat='Obesidade';
    return{val:imc.toFixed(1),cat};
    }

    // ============================================================
    // KEYBOARD SHORTCUTS
    // ============================================================
    document.addEventListener('keydown',e=>{
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
    const map={'1':'dashboard','2':'treinos','3':'historico','4':'progresso','5':'medidas','6':'config'};
    if(map[e.key])goTo(map[e.key]);
    });

    // ============================================================
    // RESIZE: redraw charts when window resizes
    // ============================================================
    let resizeT=null;
    window.addEventListener('resize',()=>{
    clearTimeout(resizeT);
    resizeT=setTimeout(()=>{
        const active=document.querySelector('.page.active')?.id?.replace('page-','');
        if(active==='progresso')renderProgEx();
        if(active==='medidas')drawWeightChart();
    },250);
    });

    // INIT
    renderDash();
    updateSbStats();

}

export async function render(el, props = {}, content, config, ctx = {}) {

  el.innerHTML = `
<aside class="sidebar" id="sidebar">
    <div class="sb-logo">
      <div class="sb-logo-text">FITLOG</div>
      <div class="sb-logo-sub">Seu Progresso</div>
    </div>
    <nav class="sb-nav">
      <div class="sb-sec">Principal</div>
      <button class="sb-item active" data-page="dashboard">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
        Dashboard
      </button>
      <button class="sb-item" data-page="treinos">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12h12M6 6h12M6 18h12"/><circle cx="3" cy="6" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="18" r="1"/></svg>
        Treinos
      </button>
      <button class="sb-item" data-page="historico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>
        Histórico
      </button>
      <div class="sb-sec">Evolução</div>
      <button class="sb-item" data-page="progresso">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
        Progresso de Cargas
      </button>
      <button class="sb-item" data-page="medidas">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>
        Medidas & Peso
      </button>
      <div class="sb-sec">Sistema</div>
      <button class="sb-item" data-page="config">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        Configurações
      </button>
    </nav>
    <div class="sb-footer">
      <div class="sb-mini-stats">
        <div class="sb-mini"><div class="sb-mini-v" id="sb-total">0</div><div class="sb-mini-l">Treinos</div></div>
        <div class="sb-mini"><div class="sb-mini-v" id="sb-streak">0</div><div class="sb-mini-l">Sequência</div></div>
      </div>
    </div>
  </aside>
  <div class="sb-overlay" id="sb-overlay"></div>

  <div class="main-wrap">
    <div class="topbar">
      <button class="hamburger" id="hamburger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <div style="font-family:var(--display);font-size:22px;letter-spacing:2px;color:var(--accent);">FITLOG</div>
      <div style="width:34px;"></div>
    </div>

    <div class="main-content">

      <!-- DASHBOARD -->
      <div class="page active" id="page-dashboard">
        <div class="ph">
          <div class="ph-title">Olá, <em id="dash-name">Atleta</em> 👋</div>
          <div class="ph-sub" id="dash-date"></div>
        </div>
        <div class="week-strip" id="week-strip"></div>
        <div class="g4" style="margin-bottom:20px;">
          <div class="stat-card"><div class="stat-v" style="color:var(--accent)" id="st-total">0</div><div class="stat-l">Total Treinos</div></div>
          <div class="stat-card"><div class="stat-v" style="color:var(--orange)" id="st-streak">0 🔥</div><div class="stat-l">Sequência</div></div>
          <div class="stat-card"><div class="stat-v" style="color:var(--blue)" id="st-week">0</div><div class="stat-l">Esta Semana</div></div>
          <div class="stat-card"><div class="stat-v" style="color:var(--green)" id="st-vol">—</div><div class="stat-l">Volume Hoje</div></div>
        </div>
        <div class="g2" style="margin-bottom:20px;">
          <div class="card"><div class="card-title">Próximo Treino</div><div id="next-wk"></div></div>
          <div class="card"><div class="card-title">Resumo da Semana</div><div id="week-sum"></div></div>
        </div>
        <div class="card"><div class="card-title">Sessões Recentes</div><div id="recent-list"></div></div>
      </div>

      <!-- TREINOS -->
      <div class="page" id="page-treinos">
        <div class="ph"><div class="ph-title">Seus <em>Treinos</em></div><div class="ph-sub">Fullbody 5× semana · todos os grupos em cada sessão</div></div>
        <div class="g3" id="treino-cards"></div>
      </div>

      <!-- HISTORICO -->
      <div class="page" id="page-historico">
        <div class="ph-row">
          <div><div class="ph-title" style="margin-bottom:6px;">Histórico</div><div class="ph-sub" id="hist-count"></div></div>
          <select class="fi" id="hist-filter" style="width:auto;font-size:12px;" onchange="renderHistorico()">
            <option value="">Todos</option><option value="A">Treino A</option><option value="B">Treino B</option><option value="C">Treino C</option>
          </select>
        </div>
        <div id="hist-list"></div>
      </div>

      <!-- PROGRESSO -->
      <div class="page" id="page-progresso">
        <div class="ph"><div class="ph-title">Progresso de <em>Cargas</em></div><div class="ph-sub">Evolução por exercício e recordes pessoais</div></div>
        <div class="prog-filter" id="prog-cat-filter">
          <button class="pf-btn active" data-cat="">Todos</button>
          <button class="pf-btn" data-cat="push" style="color:var(--push);">Push</button>
          <button class="pf-btn" data-cat="pull" style="color:var(--pull);">Pull</button>
          <button class="pf-btn" data-cat="legs" style="color:var(--legs);">Pernas</button>
        </div>
        <div class="fg"><label class="fl">Exercício</label><select class="fi" id="prog-ex-sel" onchange="renderProgEx()"></select></div>
        <div class="chart-wrap" style="margin-bottom:16px;">
          <div class="chart-hdr">
            <div class="chart-title-lbl">Evolução de Carga</div>
            <div class="chart-legend">
              <div class="leg-item"><div class="leg-dot" style="background:var(--accent)"></div>Máx. kg</div>
              <div class="leg-item"><div class="leg-dot" style="background:var(--blue)"></div>Volume (escala)</div>
            </div>
          </div>
          <canvas class="chart" id="chart-prog" height="180"></canvas>
        </div>
        <div id="prog-ex-cards"></div>
      </div>

      <!-- MEDIDAS -->
      <div class="page" id="page-medidas">
        <div class="ph-row">
          <div><div class="ph-title" style="margin-bottom:6px;">Medidas & <em>Peso</em></div><div class="ph-sub">Acompanhe sua evolução física</div></div>
          <button class="btn btn-accent" onclick="openMModal()">+ Registrar</button>
        </div>
        <div class="chart-wrap" style="margin-bottom:20px;">
          <div class="chart-hdr">
            <div class="chart-title-lbl">Peso Corporal</div>
            <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--accent)"></div>kg</div></div>
          </div>
          <canvas class="chart" id="chart-weight" height="160"></canvas>
        </div>
        <div class="meas-grid" id="meas-cards"></div>
        <div class="sep"></div>
        <div style="font-family:var(--display);font-size:22px;letter-spacing:.5px;margin-bottom:14px;">Histórico</div>
        <div id="meas-hist"></div>
      </div>

      <!-- CONFIG -->
      <div class="page" id="page-config">
        <div class="ph"><div class="ph-title">Configurações</div></div>
        <div class="cfg-section">
          <div class="cfg-title">Aparência</div>
          <div class="fg"><label class="fl">Tema</label> <b id="bswitch"></b>  </div>
        </div>
        <div class="cfg-section">
          <div class="cfg-title">Perfil</div>
          <div class="fg"><label class="fl">Nome</label><input class="fi" id="cfg-name" placeholder="Seu nome" oninput="cfgSave()"></div>
          <div class="fi-row">
            <div class="fg"><label class="fl">Peso (kg)</label><input class="fi" id="cfg-weight" type="number" step="0.1" placeholder="75" oninput="cfgSave()"></div>
            <div class="fg"><label class="fl">Altura (cm)</label><input class="fi" id="cfg-height" type="number" placeholder="175" oninput="cfgSave()"></div>
          </div>
        </div>
        <div class="cfg-section">
          <div class="cfg-title">Treino</div>
          <div class="fi-row">
            <div class="fg"><label class="fl">Descanso padrão (s)</label><input class="fi" id="cfg-rest" type="number" placeholder="90" oninput="cfgSave()"></div>
            <div class="fg"><label class="fl">Incremento de carga (kg)</label><input class="fi" id="cfg-inc" type="number" step="0.5" placeholder="2.5" oninput="cfgSave()"></div>
          </div>
        </div>
        <div class="cfg-section">
          <div class="cfg-title">Dados</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
            <button class="btn btn-ghost" onclick="doExport()">📤 Exportar JSON</button>
            <button class="btn btn-ghost" onclick="document.getElementById('imp-inp').click()">📥 Importar JSON</button>
            <input type="file" id="imp-inp" accept=".json" style="display:none" onchange="doImport(event)">
            <button class="btn btn-danger" onclick="doClear()">🗑️ Limpar Tudo</button>
          </div>
          <div style="font-size:12px;color:var(--muted);" id="data-size"></div>
        </div>
        <div class="cfg-section">
          <div class="cfg-title">Conquistas</div>
          <div class="badge-grid" id="badge-list"></div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- SESSION OVERLAY -->
<div id="sess-overlay">
  <div class="sess-hdr">
    <div class="sess-hdr-left">
      <div class="sess-hdr-title" id="so-title">Treino A</div>
      <div class="sess-hdr-sub" id="so-sub">Carregando...</div>
    </div>
    <div class="sess-hdr-right">
      <div>
        <div class="sess-time" id="so-timer">00:00</div>
        <div class="sess-time-l">tempo</div>
      </div>
      <button class="btn btn-danger btn-sm" onclick="finishSession()">Finalizar</button>
    </div>
  </div>
  <div class="sess-prog-wrap">
    <div class="sess-prog-bg"><div class="sess-prog-fill" id="so-prog"></div></div>
    <div class="sess-prog-txt"><span id="so-prog-txt">0 séries</span><span id="so-prog-pct">0%</span></div>
  </div>
  <div class="sess-body" id="so-body"></div>
  <div class="sess-finish">
    <button class="btn btn-accent btn-full" style="font-size:15px;padding:14px;" onclick="finishSession()">✅ Finalizar e Salvar Treino</button>
  </div>
</div>

<!-- MEASURE MODAL -->
<div class="modal-bd" id="mmodal">
  <div class="modal">
    <button class="modal-close" onclick="closeMModal()">✕</button>
    <div class="modal-title">Registrar Medidas</div>
    <div class="fi-row">
      <div class="fg"><label class="fl">Peso (kg)</label><input class="fi" id="mm-wt" type="number" step="0.1" placeholder="75.5"></div>
      <div class="fg"><label class="fl">% Gordura</label><input class="fi" id="mm-fat" type="number" step="0.1" placeholder="15"></div>
    </div>
    <div class="fi-row">
      <div class="fg"><label class="fl">Peito (cm)</label><input class="fi" id="mm-chest" type="number" placeholder="100"></div>
      <div class="fg"><label class="fl">Cintura (cm)</label><input class="fi" id="mm-waist" type="number" placeholder="80"></div>
    </div>
    <div class="fi-row">
      <div class="fg"><label class="fl">Quadril (cm)</label><input class="fi" id="mm-hip" type="number" placeholder="95"></div>
      <div class="fg"><label class="fl">Braço (cm)</label><input class="fi" id="mm-arm" type="number" placeholder="35"></div>
    </div>
    <div class="fi-row">
      <div class="fg"><label class="fl">Coxa (cm)</label><input class="fi" id="mm-thigh" type="number" placeholder="55"></div>
      <div class="fg"><label class="fl">Panturrilha (cm)</label><input class="fi" id="mm-calf" type="number" placeholder="38"></div>
    </div>
    <div class="fg"><label class="fl">Notas</label><textarea class="fi" id="mm-notes" rows="2" placeholder="Como está se sentindo hoje?"></textarea></div>
    <button class="btn btn-accent btn-full" onclick="saveMeasure()">Salvar Medidas</button>
  </div>

<div id="toast"></div>

<nav id="mobile-nav">
  <button class="mn-item active" data-page="dashboard">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
    Início
  </button>
  <button class="mn-item" data-page="treinos">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12h12M6 6h12M6 18h12"/></svg>
    Treinos
  </button>
  <button class="mn-item" data-page="historico">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
    Histórico
  </button>
  <button class="mn-item" data-page="progresso">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
    Cargas
  </button>
  <button class="mn-item" data-page="medidas">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>
    Medidas
  </button>
</nav>`

  fitAI()

  const swit = await loadComponent("Switch")

  await swit.render(
    document.querySelector("#bswitch"),
    { sala: 1 }
  )

}