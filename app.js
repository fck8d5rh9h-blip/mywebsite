/* ===== GRAVITY — بيانات الموقع (تُستبدل تلقائيًا عند التصدير من لوحة التحكم) ===== */
/*DATA-START*/
window.SITE_DATA = {
 "design": [
  {
   "n": "10 تصاميم متنوعة",
   "p": 1800,
   "t": "شاملة صورة بروفايل مجانية"
  },
  {
   "n": "15 تصميم متنوع",
   "p": 2600,
   "t": "شاملة صورة بروفايل مجانية"
  },
  {
   "n": "20 تصميم متنوع",
   "p": 3400,
   "t": "شاملة صورة بروفايل + كفر"
  },
  {
   "n": "25 تصميم متنوع",
   "p": 4100,
   "t": "شاملة صورة بروفايل + كفر"
  },
  {
   "n": "30 تصميم متنوع",
   "p": 4800,
   "t": "شاملة صورة بروفايل + كفر"
  }
 ],
 "full": [
  {
   "n": "باقة بداية (Bedaya)",
   "p": 6999,
   "i": [
    "10 تصاميم (1,800 ج.م)",
    "2 ريلز (1,199 ج.م)",
    "1 إعلان ممول + صنع محتوى (1,499 ج.م)",
    "10 ساعات تصوير حصص (2,999 ج.م)"
   ]
  },
  {
   "n": "باقة سيلفر (Silver)",
   "p": 9699,
   "i": [
    "15 تصميم",
    "3 ريلز",
    "1 إعلان ممول + صنع محتوى",
    "15 ساعة تصوير حصص"
   ]
  },
  {
   "n": "باقة جولد (Gold)",
   "p": 12400,
   "hot": 1,
   "i": [
    "20 تصميم",
    "4 ريلز",
    "1 إعلان ممول + صنع محتوى",
    "20 ساعة تصوير حصص"
   ]
  },
  {
   "n": "باقة دايموند (Diamond)",
   "p": 13990,
   "i": [
    "30 تصميم",
    "5 ريلز",
    "1 إعلان ممول + صنع محتوى",
    "20 ساعة تصوير حصص"
   ]
  }
 ],
 "svc": [
  {
   "id": "post",
   "n": "بوسترات سوشيال ميديا",
   "p": 200,
   "bq": 10,
   "bp": 1800,
   "h": "10 تصاميم بـ 1,800 ج.م"
  },
  {
   "id": "book",
   "n": "غلاف مذكرة",
   "p": 350
  },
  {
   "id": "card",
   "n": "كارت حجز",
   "p": 200
  },
  {
   "id": "cert",
   "n": "شهادة تقدير",
   "p": 200
  },
  {
   "id": "thumb",
   "n": "ثمنيل يوتيوب",
   "p": 180
  },
  {
   "id": "prof",
   "n": "بروفايل وكفر",
   "p": 300
  },
  {
   "id": "reel",
   "n": "تصوير ومونتاج ريلز",
   "p": 550,
   "bq": 2,
   "bp": 1199,
   "h": "2 ريلز بـ 1,199 ج.م"
  },
  {
   "id": "cont",
   "n": "كتابة وصناعة محتوى",
   "p": 1499
  },
  {
   "id": "hrs",
   "n": "ساعات تصوير حصص بالزقازيق",
   "p": 300,
   "bq": 10,
   "bp": 2999,
   "h": "10 ساعات بـ 2,999 ج.م"
  }
 ],
 "cats": [
  "ريلز",
  "السبورة",
  "بوسترات",
  "أغلفة المذكرات"
 ],
 "work": [],
 "clients": [],
 "places": [],
 "txt": {
  "h1": "GRAVITY Agency",
  "h2": "Build Your Future",
  "p": "نصنع لعلامتك حضورًا رقميًا لا يُنسى: تسويق رقمي، تصميم جرافيك، صناعة محتوى، وإنتاج ميديا باحترافية.",
  "ft": "تواصل معنا على واتساب لأي استفسار"
 },
 "wa": "201100393632",
 "fb": "https://www.facebook.com/profile.php?id=61569739719353",
 "version": "initial"
};
/*DATA-END*/

/* ===== إعدادات لوحة التحكم (كلمة المرور بصيغة SHA-256، الافتراضية: gravity123) ===== */
window.GRAVITY_CONFIG = { adminHash: 'd6f27b7e7cd2346d4888d3108e980a1cb6bac040475ee1ac1bac46ed2a3b33b3' };

/* ===== كود الموقع ===== */
const DEF={
design:[{n:'10 تصاميم متنوعة',p:1800,t:'شاملة صورة بروفايل مجانية'},{n:'15 تصميم متنوع',p:2600,t:'شاملة صورة بروفايل مجانية'},{n:'20 تصميم متنوع',p:3400,t:'شاملة صورة بروفايل + كفر'},{n:'25 تصميم متنوع',p:4100,t:'شاملة صورة بروفايل + كفر'},{n:'30 تصميم متنوع',p:4800,t:'شاملة صورة بروفايل + كفر'}],
full:[
{n:'باقة بداية (Bedaya)',p:6999,i:['10 تصاميم (1,800 ج.م)','2 ريلز (1,199 ج.م)','1 إعلان ممول + صنع محتوى (1,499 ج.م)','10 ساعات تصوير حصص (2,999 ج.م)']},
{n:'باقة سيلفر (Silver)',p:9699,i:['15 تصميم','3 ريلز','1 إعلان ممول + صنع محتوى','15 ساعة تصوير حصص']},
{n:'باقة جولد (Gold)',p:12400,hot:1,i:['20 تصميم','4 ريلز','1 إعلان ممول + صنع محتوى','20 ساعة تصوير حصص']},
{n:'باقة دايموند (Diamond)',p:13990,i:['30 تصميم','5 ريلز','1 إعلان ممول + صنع محتوى','20 ساعة تصوير حصص']}],
svc:[
{id:'post',n:'بوسترات سوشيال ميديا',p:200,bq:10,bp:1800,h:'10 تصاميم بـ 1,800 ج.م'},
{id:'book',n:'غلاف مذكرة',p:350},{id:'card',n:'كارت حجز',p:200},{id:'cert',n:'شهادة تقدير',p:200},
{id:'thumb',n:'ثمنيل يوتيوب',p:180},{id:'prof',n:'بروفايل وكفر',p:300},
{id:'reel',n:'تصوير ومونتاج ريلز',p:550,bq:2,bp:1199,h:'2 ريلز بـ 1,199 ج.م'},
{id:'cont',n:'كتابة وصناعة محتوى',p:1499},
{id:'hrs',n:'ساعات تصوير حصص بالزقازيق',p:300,bq:10,bp:2999,h:'10 ساعات بـ 2,999 ج.م'}],
cats:['ريلز','السبورة','بوسترات','أغلفة المذكرات'],
work:[],clients:[],places:[],govs:[],
txt:{h1:'GRAVITY Agency',h2:'Build Your Future',p:'نصنع لعلامتك حضورًا رقميًا لا يُنسى: تسويق رقمي، تصميم جرافيك، صناعة محتوى، وإنتاج ميديا باحترافية.',ft:'تواصل معنا على واتساب لأي استفسار'},wa:'201100393632',fb:'https://www.facebook.com/profile.php?id=61569739719353'};
const $=s=>document.querySelector(s);
const BASE=(window.SITE_DATA&&window.SITE_DATA.version)||'0',DRAFT='gravity_draft_v1';
let S=null;
try{const dr=JSON.parse(localStorage.getItem(DRAFT)||'null');if(dr&&dr.base===BASE)S=dr.data}catch(e){}
if(!S)S=window.SITE_DATA||null;
S=Object.assign(JSON.parse(JSON.stringify(DEF)),S||{});S.txt=Object.assign({},DEF.txt,S.txt);
const IND=['book','post','card','cert','thumb','prof'];
function migrate(){S.svc.forEach(s=>{if(s.ind===undefined&&IND.includes(s.id))s.ind=1})}
migrate();
const LOGO=$('nav img').src;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=u=>/^https?:\/\//i.test(u||'')?u:'';
const fm=n=>Number(n).toLocaleString('en-US')+' ج.م';
let cat='الكل',Q={},dirty=false,tab='ov',editId=null;
const keepDraft=()=>{try{localStorage.setItem(DRAFT,JSON.stringify({base:BASE,data:S}));return true}catch(e){return false}};
const save=()=>{dirty=true;const b=$('#pubb');if(b)b.textContent='● تصدير التعديلات';if(!keepDraft()&&!window._qw){window._qw=1;alert('مساحة المتصفح ممتلئة: لن تُحفظ المسودة تلقائيًا. صدّر التعديلات الآن.')}};
addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue=''}});

/* export: الموقع ثابت (بدون سيرفر)، فيُصدَّر ملف app.js جديد يحتوي على التعديلات */
async function pub(){
 S.version=new Date().toISOString();
 const block='/*DATA-START*/\nwindow.SITE_DATA = '+JSON.stringify(S)+';\n/*DATA-END*/';
 let out=null;
 try{const r=await fetch('app.js',{cache:'no-store'});if(r.ok){const t=await r.text(),x=t.indexOf('/*DATA-START*/'),y=t.indexOf('/*DATA-END*/');if(x>=0&&y>x)out=t.slice(0,x)+block+t.slice(y+12)}}catch(e){}
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([out||block],{type:'text/plain'}));a.download=out?'app.js':'data-block.txt';
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000);
 dirty=false;keepDraft();const bt=$('#pubb');if(bt)bt.textContent='تصدير التعديلات';
 alert(out?'تم تنزيل ملف app.js الجديد.\nاستبدل به app.js القديم في المشروع ثم ارفعه على GitHub لتظهر التعديلات للزوار.':'تعذّر قراءة app.js تلقائيًا (الموقع مفتوح مباشرة من الجهاز).\nتم تنزيل data-block.txt: انسخ محتواه واستبدل به الجزء الموجود بين DATA-START و DATA-END في أعلى ملف app.js، ثم ارفع الملف على GitHub.');
}
async function sha(t){const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function openAdmin(){
 if(sessionStorage.getItem('gv_admin')==='1'){showAdmin();return}
 if(!(window.crypto&&crypto.subtle)){alert('افتح الموقع عبر رابط https أو عبر خادم محلي لاستخدام لوحة التحكم.');return}
 const p=prompt('كلمة مرور لوحة التحكم');if(p===null)return;
 if(await sha(p)===(window.GRAVITY_CONFIG||{}).adminHash){try{sessionStorage.setItem('gv_admin','1')}catch(e){}showAdmin()}else alert('كلمة المرور غير صحيحة');
}
function img2url(f,max=1100,q=.78){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=Math.round(i.width*k);c.height=Math.round(i.height*k);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(i,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};i.onerror=rej;i.src=r.result};r.onerror=rej;r.readAsDataURL(f)})}

/* ---------- public site ---------- */
function embed(u){const m=(u||'').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return m?'https://www.youtube.com/embed/'+m[1]:''}
function renderSite(){
 $('#yr').textContent=new Date().getFullYear();const X=S.txt;$('#h1').innerHTML=esc(X.h1)+'<br><b>'+esc(X.h2)+'</b>';$('#hp').textContent=X.p;$('#ft').textContent=X.ft;
 $('#wal').href='https://wa.me/'+S.wa;$('#fbl').href=safe(S.fb);
 $('#ptabs').innerHTML=['الكل',...S.cats].map(c=>`<button class="tab ${c===cat?'on':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
 const ws=S.work.filter(w=>cat==='الكل'||w.c===cat);
 $('#pgrid').innerHTML=ws.length?ws.map(w=>`<div class="glass work" data-w="${w.id}"><div class="thumb">${w.u?`<img src="${esc(w.u)}" alt="${esc(w.t)}" loading="lazy">`:(w.v?'🎬':'🖼️')}${w.v?'<span class="play">▶</span>':''}</div><div class="in"><span class="tag">${esc(w.c)}</span><h4>${esc(w.t)}</h4></div></div>`).join(''):'<p class="sub">سيتم إضافة الأعمال قريبًا.</p>';
 $('#clients').style.display=S.clients.length?'':'none';
 $('#cgrid').innerHTML=S.clients.map(c=>{const f=safe(c.fb),y=safe(c.yt);return `<div class="glass client">${c.u?`<img src="${esc(c.u)}" alt="${esc(c.n)}" loading="lazy">`:`<div class="ini">${esc((c.n||'?')[0])}</div>`}<b>${esc(c.n)}</b><small>${esc(c.pk)}</small><div class="lk">${f?`<a class="btn sm" target="_blank" rel="noopener" href="${esc(f)}">فيسبوك</a>`:''}${y?`<a class="btn sm red" target="_blank" rel="noopener" href="${esc(y)}">يوتيوب</a>`:''}</div></div>`}).join('');
 $('#branches').style.display=S.govs.length?'':'none';
 $('#bgrid').innerHTML=S.govs.map(g=>{const n=S.places.filter(p=>p.g===g.n).length;return `<div class="gov" data-gv="${g.id}">${g.u?`<img src="${esc(g.u)}" alt="" loading="lazy">`:''}<b>${esc(g.n)}</b><small>${n} ${n===1?'مكان':'أماكن'} ‹</small></div>`}).join('');
 $('#dpk').innerHTML=S.design.map((d,i)=>`<div class="glass pk"><h4>${esc(d.n)}</h4><div class="price">${fm(d.p)}</div><div style="color:var(--mut);flex:1">${esc(d.t)}</div><button class="btn sm" data-pk="design:${i}">اطلب الباقة</button></div>`).join('');
 $('#fpk').innerHTML=S.full.map((f,i)=>`<div class="glass pk ${f.hot?'hot':''}">${f.hot?'<span class="badge">الأكثر طلبًا</span>':''}<h4>${esc(f.n)}</h4><div class="price">${fm(f.p)}<small> / شهريًا</small></div><ul>${f.i.map(i=>`<li>${esc(i)}</li>`).join('')}</ul><button class="btn sm ${f.hot?'':'burg'}" data-pk="full:${i}">اطلب الباقة</button></div>`).join('');
 renderCalc();renderOrder();
}
const cost=(s,q)=>s.bq?Math.floor(q/s.bq)*s.bp+(q%s.bq)*s.p:q*s.p;
function renderCalc(){
 $('#clist').innerHTML=S.svc.map(s=>`<div class="row"><div>${esc(s.n)}<small>${fm(s.p)}${s.h?' • '+esc(s.h):''}</small></div><div class="qty"><button data-q="${s.id}" data-d="-1">−</button><input type="number" min="0" value="${Q[s.id]||0}" data-qi="${s.id}"><button data-q="${s.id}" data-d="1">+</button></div></div>`).join('');
 upd();
}
const items=()=>S.svc.filter(s=>Q[s.id]>0).map(s=>({id:s.id,n:s.n,q:Q[s.id],c:cost(s,Q[s.id])}));
function upd(){
 const it=items(),t=it.reduce((a,b)=>a+b.c,0);
 $('#clines').innerHTML=it.length?it.map(i=>`<div class="line"><span>${esc(i.n)} × ${i.q}</span><span>${fm(i.c)}</span></div>`).join(''):'<div class="sub">لم تختر خدمات بعد</div>';
 $('#ctotal').textContent=fm(t);
}
function openWork(id){
 const w=S.work.find(x=>x.id==id);if(!w)return;
 const e=embed(w.v),l=safe(w.v);
 let m=e?`<iframe src="${esc(e)}" allowfullscreen></iframe>`:(w.u?`<img src="${esc(w.u)}" alt="">`:'');
 if(!e&&l)m+=`<p><a class="btn" target="_blank" rel="noopener" href="${esc(l)}">▶ مشاهدة الفيديو</a></p>`;
 $('#lbc').innerHTML=m+`<h3>${esc(w.t)}</h3><p style="color:var(--mut)">${esc(w.d)}</p>`;$('#lb').classList.add('on');
}
function openGov(id){
 const g=S.govs.find(x=>x.id==id);if(!g)return;
 const ps=S.places.filter(p=>p.g===g.n);
 $('#lbc').innerHTML=`<h2 style="margin:0 0 4px">${esc(g.n)}</h2><p class="sub" style="margin-bottom:6px">الفروع والاستوديوهات المتعاونة</p>`+(ps.length?ps.map(p=>{const tel=(p.ph||'').replace(/[^\d+]/g,''),mp=safe(p.m);return `<div class="pl">${p.u?`<img src="${esc(p.u)}" alt="" style="margin-bottom:10px">`:''}<h3>${esc(p.z)}</h3><div style="font-weight:800;font-size:18px">${esc(p.n)} <span class="tag">(${esc(p.t)})</span></div><div style="color:var(--mut);margin:4px 0 10px">📍 ${esc(p.a)}</div><div style="display:flex;gap:8px;flex-wrap:wrap">${tel?`<a class="btn sm ghost" href="tel:${esc(tel)}">📞 اتصال</a>`:''}${mp?`<a class="btn sm" target="_blank" rel="noopener" href="${esc(mp)}">الموقع على الخريطة</a>`:''}</div></div>`}).join(''):'<p class="sub">لا توجد أماكن مضافة بعد.</p>');
 $('#lb').classList.add('on');
}

/* ---------- individual order section + order form ---------- */
let Q2={},ORD=null;
function renderOrder(){
 const L=S.svc.filter(s=>s.ind);
 $('#order').style.display=L.length?'':'none';
 $('#ogrid').innerHTML=L.map(s=>`<div class="glass pk"><h4>${esc(s.n)}</h4><div class="price">${fm(s.p)}<small> / للوحدة</small></div><div style="color:var(--mut);flex:1;font-size:13px">${s.h?esc(s.h):'&nbsp;'}</div><div class="qty"><button data-q2="${s.id}" data-d="-1">−</button><input type="number" min="0" value="${Q2[s.id]||0}" data-q2i="${s.id}"><button data-q2="${s.id}" data-d="1">+</button></div></div>`).join('');
 upd2();
}
const items2=()=>S.svc.filter(s=>s.ind&&Q2[s.id]>0).map(s=>({id:s.id,n:s.n,q:Q2[s.id],c:cost(s,Q2[s.id])}));
function upd2(){
 const it=items2(),t=it.reduce((a,b)=>a+b.c,0);
 $('#olines').innerHTML=it.length?it.map(i=>`<div class="line"><span>${esc(i.n)} × ${i.q}</span><span>${fm(i.c)}</span></div>`).join(''):'<div class="sub" style="margin:0">لم تختر شيئًا بعد</div>';
 $('#ototal').textContent=fm(t);
}
function openOrder(list){
 ORD=list;const tot=list.reduce((a,b)=>a+b.c,0);
 $('#osumm').innerHTML=list.map(i=>`<div class="line"><span>${esc(i.n)}${i.q>1?' × '+i.q:''}</span><span>${fm(i.c)}</span></div>`).join('')+`<div class="line" style="font-weight:800;color:var(--lime)"><span>الإجمالي</span><span>${fm(tot)}</span></div>`;
 $('#f_links_w').style.display=list.some(i=>i.id==='book')?'':'none';
 $('#f_err').textContent='';$('#ob').classList.add('on');
}
function submitOrder(){
 const v=id=>$('#'+id).value.trim(),L=ORD||[],book=L.some(i=>i.id==='book');
 const name=v('f_name'),series=v('f_series'),addr=v('f_addr'),phone=v('f_phone'),links=v('f_links'),extra=v('f_extra'),color=v('f_colortxt');
 const miss=[];if(!name)miss.push('الاسم');if(!series)miss.push('اسم السلسلة');if(!addr)miss.push('العنوان');if(!phone)miss.push('رقم التليفون');if(book&&!links)miss.push('اللينكات');
 if(miss.length){$('#f_err').textContent='من فضلك املأ: '+miss.join('، ');return}
 if(phone.replace(/\D/g,'').length<8){$('#f_err').textContent='رقم التليفون غير صحيح';return}
 const tot=L.reduce((a,b)=>a+b.c,0);
 wa(`طلب جديد من موقع GRAVITY\n\nالاسم: ${name}\nاسم السلسلة: ${series}\nالعنوان: ${addr}\nرقم التليفون: ${phone}`+(book?`\nاللينكات:\n${links}`:'')+(color?`\nاللون العام المفضل: ${color}`:'')+(extra?`\nالإضافات: ${extra}`:'')+`\n\nالطلب:\n`+L.map(i=>`• ${i.n}${i.q>1?' × '+i.q:''} = ${fm(i.c)}`).join('\n')+`\n\nالإجمالي: ${fm(tot)}`);
 $('#ob').classList.remove('on');
}
const wa=t=>window.open('https://wa.me/'+S.wa+'?text='+encodeURIComponent(t),'_blank');

document.addEventListener('click',e=>{
 if(e.target.id==='lb'){$('#lb').classList.remove('on');return}
 if(e.target.id==='ob'){$('#ob').classList.remove('on');return}
 const t=e.target.closest('[data-act],[data-cat],[data-w],[data-q],[data-q2],[data-pk],[data-wa],[data-gv]');if(!t)return;const D=t.dataset;
 if(D.cat!==undefined){cat=D.cat;renderSite()}
 else if(D.w)openWork(D.w);
 else if(D.gv)openGov(D.gv);
 else if(D.q){Q[D.q]=Math.max(0,(Q[D.q]||0)+ +D.d);renderCalc()}
 else if(D.q2){Q2[D.q2]=Math.max(0,(Q2[D.q2]||0)+ +D.d);renderOrder()}
 else if(D.pk){const [g,i]=D.pk.split(':'),p=S[g][+i];if(p)openOrder([{id:'pkg',n:p.n,q:1,c:p.p}])}
 else if(D.act==='close')$('#lb').classList.remove('on');
 else if(D.act==='order'){const it=items();if(!it.length){alert('اختر خدمة واحدة على الأقل');return}openOrder(it)}
 else if(D.act==='order2'){const it=items2();if(!it.length){alert('اختر خدمة واحدة على الأقل');return}openOrder(it)}
 else if(D.act==='submito')submitOrder();
 else if(D.act==='closeo')$('#ob').classList.remove('on');
 else if(D.act==='admin')openAdmin();
});
document.addEventListener('input',e=>{const d=e.target.dataset;if(d.qi){Q[d.qi]=Math.max(0,parseInt(e.target.value)||0);upd()}if(d.q2i){Q2[d.q2i]=Math.max(0,parseInt(e.target.value)||0);upd2()}if(e.target.id==='f_color')$('#f_colortxt').value=e.target.value});

/* ---------- admin ---------- */
const showAdmin=()=>{$('#root').style.display='none';$('#admin').style.display='block';scrollTo(0,0);renderAdmin()};
const hideAdmin=()=>{$('#admin').style.display='none';$('#root').style.display='block';renderSite()};
const CFG={
 work:{a:'work',h:'إدارة الأعمال (ريلز • سبورة • بوسترات • أغلفة مذكرات)',multi:1,show:x=>x.t+' — '+x.c,F:[['t','عنوان العمل'],['c','القسم','sel',()=>S.cats],['u','صور العمل (ارفع صورة أو عدة صور، وسيُنشأ عمل لكل صورة)','img'],['v','رابط الفيديو (للريلز: يوتيوب أو فيسبوك) – اختياري'],['d','وصف قصير','ta']]},
 cl:{a:'clients',h:'المشتركون معنا (العملاء)',show:x=>x.n+(x.pk?' — '+x.pk:''),F:[['n','اسم المدرس / الصفحة'],['pk','المادة أو الباقة (اختياري)'],['u','صورة بيدج المدرس','img'],['fb','رابط صفحة الفيسبوك'],['yt','رابط قناة اليوتيوب']]},
 gv:{a:'govs',h:'المحافظات (صورة كبيرة لكل محافظة)',show:x=>x.n,F:[['n','اسم المحافظة'],['u','صورة المحافظة الكبيرة','img']]},
 br:{a:'places',h:'الأماكن والاستوديوهات (تظهر عند الضغط على المحافظة)',req:['g'],show:x=>(x.g||'—')+' • '+(x.z||'')+' • '+x.n,F:[['n','اسم المكان'],['g','المحافظة','sel',()=>S.govs.map(x=>x.n)],['z','المنطقة'],['t','النوع','sel',()=>['فرع','استوديو متعاون']],['a','العنوان بالتفصيل'],['ph','رقم الهاتف'],['m','رابط الموقع على خرائط جوجل'],['u','صورة المكان (اختياري)','img']]}
};
function crud(M,key){
 const C=CFG[key],A=S[C.a],cur=A.find(x=>x.id===editId)||{};
 M.innerHTML=`<h2>${C.h}</h2><div class="glass f">${C.F.map(([k,l,ty,o])=>`<label>${l}</label>`+(ty==='sel'?`<select data-k="${k}">${o().map(v=>`<option ${v===(cur[k]||o()[0])?'selected':''}>${esc(v)}</option>`).join('')}</select>`:ty==='img'?`<input type="file" accept="image/*" data-k="${k}" ${C.multi?'multiple':''}>${cur[k]?'<small>توجد صورة محفوظة، اختر ملفًا جديدًا لاستبدالها</small>':''}`:ty==='ta'?`<textarea data-k="${k}" rows="2">${esc(cur[k]||'')}</textarea>`:`<input data-k="${k}" value="${esc(cur[k]||'')}">`)).join('')}<div><button class="btn" id="cs">${editId?'حفظ التعديل':'إضافة'}</button> ${editId?'<button class="btn ghost" id="cx">إلغاء</button>':''} <small id="cm"></small></div></div><div class="glass" style="overflow:auto"><table class="tbl">${A.map(x=>`<tr><td>${x.u?`<img src="${esc(x.u)}" style="height:42px;border-radius:6px">`:''}</td><td>${esc(C.show(x))}</td><td style="white-space:nowrap"><button class="btn sm ghost" data-e="${x.id}">تعديل</button> <button class="btn sm red" data-d="${x.id}">حذف</button></td></tr>`).join('')||'<tr><td>لا توجد عناصر بعد.</td></tr>'}</table></div>`;
 const fk=(C.F.find(f=>f[2]==='img')||[])[0];
 $('#cs').onclick=async()=>{
  const o={};M.querySelectorAll('[data-k]').forEach(el=>{if(el.type!=='file')o[el.dataset.k]=el.value.trim()});
  const fi=M.querySelector('input[type=file]'),fs=fi?[...fi.files]:[],b=$('#cs');
  if(!(o[C.F[0][0]]||(C.multi&&(fs.length||o.v)))){alert('أكمل البيانات المطلوبة');return}
  if(C.req&&C.req.some(k=>!o[k])){alert('أضف محافظة أولًا من تبويب المحافظات ثم اخترها');return}
  b.disabled=true;$('#cm').textContent='جارٍ المعالجة...';
  try{
   if(editId){const it=A.find(x=>x.id===editId);if(C.a==='govs'&&o.n&&o.n!==it.n)S.places.forEach(q=>{if(q.g===it.n)q.g=o.n});Object.assign(it,o);if(fs[0])it[fk]=await img2url(fs[0])}
   else if(C.multi&&fs.length){let n=0;for(const f of fs){n++;A.unshift({...o,id:Date.now()+n,[fk]:await img2url(f),t:o.t?(fs.length>1?o.t+' '+n:o.t):f.name.replace(/\.[^.]+$/,'')})}}
   else A.unshift({...o,id:Date.now(),...(fs[0]?{[fk]:await img2url(fs[0])}:{})});
   editId=null;save();renderAdmin();
  }catch(err){b.disabled=false;$('#cm').textContent='تعذر قراءة الصورة، جرّب صورة أخرى'}
 };
 if(editId)$('#cx').onclick=()=>{editId=null;renderAdmin()};
 M.querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{editId=+b.dataset.e;renderAdmin()});
 M.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{if(confirm('تأكيد الحذف؟')){const id=+b.dataset.d,old=A.find(x=>x.id===id);S[C.a]=S[C.a].filter(x=>x.id!==id);if(C.a==='govs'&&old)S.places=S.places.filter(q=>q.g!==old.n);save();renderAdmin()}});
}
function renderAdmin(){
 const A=$('#admin'),T=[['ov','نظرة عامة'],['tx','نصوص الموقع'],['pf','الأعمال'],['cl','المشتركون'],['gv','المحافظات'],['br','الأماكن والاستوديوهات'],['pr','الأسعار والباقات'],['st','الإعدادات']];
 A.innerHTML=`<div class="adm"><aside class="side"><img src="${LOGO}">${T.map(([k,n])=>`<button class="${tab===k?'on':''}" data-t="${k}">${n}</button>`).join('')}<button class="btn" id="pubb" style="justify-content:center;margin-top:10px" data-t="pub">${dirty?'● ':''}تصدير التعديلات</button><small style="color:var(--mut);display:block;margin:6px 4px">صدّر ملف app.js واستبدل به القديم ثم ارفعه على GitHub لتظهر التعديلات للزوار</small><button data-t="site">← عرض الموقع</button></aside><main class="main" id="am"></main></div>`;
 A.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{const k=b.dataset.t;if(k==='site')hideAdmin();else if(k==='pub')pub();else{tab=k;editId=null;renderAdmin()}});
 const M=$('#am');
 if(tab==='ov')M.innerHTML=`<h2>نظرة عامة</h2><div class="stats"><div class="glass stat"><b>${S.work.length}</b>أعمال في المعرض</div><div class="glass stat"><b>${S.clients.length}</b>مشتركون</div><div class="glass stat"><b>${S.places.length}</b>فروع واستوديوهات</div><div class="glass stat"><b>${S.design.length+S.full.length}</b>باقات فعّالة</div></div><div class="glass f"><b>طريقة الاستخدام</b><span>1) أضف أعمالك ومشتركيك وأماكنك من القوائم. 2) اضغط «تصدير التعديلات» ثم استبدل ملف app.js بالملف الجديد وارفعه على GitHub ليراها الزوار. الصور تُضغط تلقائيًا قبل الرفع.</span></div>`;
 if(tab==='pf')crud(M,'work');
 if(tab==='cl')crud(M,'cl');
 if(tab==='gv')crud(M,'gv');
 if(tab==='br')crud(M,'br');
 if(tab==='tx'){
  M.innerHTML=`<h2>نصوص الموقع</h2><div class="glass f"><label>العنوان الرئيسي</label><input data-x="h1" value="${esc(S.txt.h1)}"><label>الشعار (السطر الملون)</label><input data-x="h2" value="${esc(S.txt.h2)}"><label>الوصف تحت العنوان</label><textarea data-x="p" rows="3">${esc(S.txt.p)}</textarea><label>جملة الفوتر</label><input data-x="ft" value="${esc(S.txt.ft)}"></div>`;
  M.querySelectorAll('[data-x]').forEach(el=>el.onchange=()=>{S.txt[el.dataset.x]=el.value.trim();save()});
 }
 if(tab==='pr'){
  const I=(g,i,f,v,ph,ty)=>{const a=`data-g="${g}" data-i="${i}" data-f="${f}" data-ty="${ty||'t'}"`;
   if(ty==='c')return `<label style="display:flex;gap:4px;align-items:center;font-size:13px"><input type="checkbox" ${v?'checked':''} ${a}>${f==='ind'?'يظهر في قسم الطلب الفردي':'مميزة'}</label>`;
   const inp=ty==='ta'?`<textarea rows="3" placeholder="${ph}" ${a}>${esc(v)}</textarea>`:ty==='n'?`<input type="number" min="0" placeholder="${ph}" value="${v??''}" ${a}>`:`<input placeholder="${ph}" value="${esc(v)}" ${a}>`;
   return `<label class="fl ${ty==='n'?'n':''}"><span>${ph}</span>${inp}</label>`};
  const X=(g,i)=>`<button class="btn sm red" data-del="${g}:${i}">حذف</button>`;
  const sec=(t,g,rows)=>`<div class="glass f"><b>${t}</b>${rows}<div><button class="btn sm" data-add="${g}">+ إضافة</button></div></div>`;
  M.innerHTML=`<h2>الأسعار والباقات</h2>`+
  sec('أسعار الخدمات (تظهر في الحاسبة وقسم الطلب الفردي)','svc',S.svc.map((s,i)=>`<div class="er">${I('svc',i,'n',s.n,'اسم الخدمة')}${I('svc',i,'p',s.p,'السعر','n')}${I('svc',i,'bq',s.bq,'عدد العرض','n')}${I('svc',i,'bp',s.bp,'سعر العرض','n')}${I('svc',i,'h',s.h||'','وصف العرض')}${I('svc',i,'ind',s.ind,'','c')}${X('svc',i)}</div>`).join(''))+
  sec('باقات التصميم','design',S.design.map((s,i)=>`<div class="er">${I('design',i,'n',s.n,'اسم الباقة')}${I('design',i,'p',s.p,'السعر','n')}${I('design',i,'t',s.t,'ملاحظة')}${X('design',i)}</div>`).join(''))+
  sec('الباقات الشاملة (كل سطر = ميزة)','full',S.full.map((s,i)=>`<div class="er">${I('full',i,'n',s.n,'اسم الباقة')}${I('full',i,'p',s.p,'السعر','n')}${I('full',i,'hot',s.hot,'','c')}${I('full',i,'i',s.i.join('\n'),'مكونات الباقة','ta')}${X('full',i)}</div>`).join(''))+
  sec('أقسام المعرض','cats',S.cats.map((c,i)=>`<div class="er"><input value="${esc(c)}" data-ci="${i}">${X('cats',i)}</div>`).join(''));
  M.querySelectorAll('[data-g]').forEach(el=>el.onchange=()=>{const o=S[el.dataset.g][+el.dataset.i],f=el.dataset.f,t=el.dataset.ty;
   if(t==='n'){const v=el.value===''?undefined:Math.max(0,+el.value||0);if(v===undefined)delete o[f];else o[f]=v}
   else if(t==='c')o[f]=el.checked?1:0;
   else if(t==='ta')o[f]=el.value.split('\n').map(x=>x.trim()).filter(Boolean);
   else o[f]=el.value.trim();save()});
  M.querySelectorAll('[data-ci]').forEach(el=>el.onchange=()=>{const i=+el.dataset.ci,old=S.cats[i],nw=el.value.trim();if(!nw){el.value=old;return}S.work.forEach(w=>{if(w.c===old)w.c=nw});S.cats[i]=nw;save()});
  M.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>{const g=b.dataset.add;
   if(g==='svc')S.svc.push({id:'s'+Date.now(),n:'خدمة جديدة',p:100});
   if(g==='design')S.design.push({n:'باقة جديدة',p:1000,t:''});
   if(g==='full')S.full.push({n:'باقة جديدة',p:5000,i:['ميزة 1']});
   if(g==='cats')S.cats.push('قسم جديد');save();renderAdmin()});
  M.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{const [g,i]=b.dataset.del.split(':');if(!confirm('تأكيد الحذف؟'))return;
   if(g==='cats'){const c=S.cats[+i];if(S.work.some(w=>w.c===c)&&!confirm('يوجد أعمال في هذا القسم ستبقى بدون قسم. متابعة؟'))return;S.cats.splice(+i,1)}else S[g].splice(+i,1);save();renderAdmin()});
 }
 if(tab==='st'){
  M.innerHTML=`<h2>الإعدادات</h2><div class="glass f"><label>رقم واتساب (بصيغة دولية بدون +)</label><input id="swa" value="${esc(S.wa)}" dir="ltr"><label>رابط صفحة فيسبوك</label><input id="sfb" value="${esc(S.fb)}" dir="ltr"><div><button class="btn" id="ss">حفظ</button> <button class="btn red" id="sr">إعادة الضبط الافتراضي</button></div></div>`;
  $('#ss').onclick=()=>{S.wa=$('#swa').value.replace(/\D/g,'');S.fb=$('#sfb').value.trim();save();alert('تم الحفظ. اضغط «تصدير التعديلات» ثم ارفع الملف على GitHub لتظهر للزوار.')};
  $('#sr').onclick=()=>{if(confirm('سيتم مسح كل البيانات والأعمال. متأكد؟')){S=JSON.parse(JSON.stringify(DEF));migrate();save();renderAdmin()}};
 }
}
renderSite();
