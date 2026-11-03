import{K as me,L as Ie,e as n,o as a,c as o,b as e,F as H,r as X,n as O,t as i,_ as Xe,i as fe,g as J,x as we,M as at,d as k,j as ot,l as Me,N as rt,s as P,a as L,f as se,z as Be,u as Oe,O as it,P as Fe,E as ae,Q as Ce,w as Se,H as ye,p as he,S as st,G as Je,U as lt,V as Ye,v as Ue,B as Ze,C as et,q as ue,X as dt,Y as pt,Z as ct}from"./index-Cjl5WVzN.js";import{u as gt}from"./usePageStyles-DSrBDuFB.js";import{u as ut}from"./useInternalLinks-BCY0r1Z7.js";import{u as le,r as R,f as xe,a as de,b as qe}from"./useBooking-DI2-EALJ.js";import{b as mt,B as xt,s as ht}from"./BookingQr-DgxrkNwr.js";import{f as ft,a as tt,b as bt,P as vt,v as yt,s as wt,c as kt,i as _t}from"./PaymentMethodList-BnGZGUSW.js";import{s as $t}from"./serviceDetails-gQMMCHKA.js";import{s as zt}from"./servicePrice-BKyCtkSr.js";import{F as Mt}from"./FavoriteButton-DA43nzvf.js";import{c as Ge,a as He,b as Ke}from"./giftIcons-C3hH12nn.js";import{_ as Ne}from"./SkeletonLoader-fDjxDYpf.js";import{u as Ct}from"./useQuietHours-CnGuxDu6.js";import{S as St,G as Ft}from"./GiftCodeRedeem-BnkRTQy5.js";import{f as Bt}from"./accountApi-BymOQf-J.js";import"./giftsApi-DnCtugyT.js";function Lt(te,t=3,C=Math.random){const D=[...new Map(te.filter(z=>z.stockQty>0).map(z=>[String(z.id),z])).values()];for(let z=D.length-1;z>0;z--){const b=Math.floor(C()*(z+1));[D[z],D[b]]=[D[b],D[z]]}return D.slice(0,t)}function Et(te){return Object.entries(te).filter(([,t])=>t>0).map(([t,C])=>({product_id:Number(t),qty:C}))}const At=`
:root{
  --ink:#0A0906; --coal:#14110C; --coal-2:#1C1811;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --c-hair:#C6963F; --c-skin:#D96A8B; --c-pedi:#B9743B; --c-mass:#8B6FC0; --c-bath:#4E9E6F;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--gold);color:var(--ink)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,textarea{font-family:inherit}
.wrap{width:min(1280px,94%);margin-inline:auto}

/* ===== الهيدر ===== */
.nav{display:flex;align-items:center;gap:26px;padding:14px 0}
.logo{display:flex;align-items:center;gap:11px}
.logo .mark{width:56px;height:56px;display:grid;place-items:center;border:1.5px solid var(--gold);
  border-radius:14px;font-family:var(--font-d);font-weight:700;font-size:18px;color:var(--gold-bright);
  background:radial-gradient(circle at 30% 20%,rgba(233,207,142,.18),transparent 70%);
  overflow:hidden}
.logo .mark img{width:100%;height:100%;object-fit:contain;transform:scale(1.6);border-radius:11px}
.logo .name b{font-family:var(--font-d);font-size:17px;color:var(--champagne);display:block;line-height:1.15}
.logo .name span{font-size:10px;color:var(--smoke);letter-spacing:.08em}
nav.links{display:flex;gap:22px;margin-inline-start:auto}
nav.links a{font-size:15px;color:var(--champagne);opacity:.82;transition:var(--dur)}
nav.links a:hover{opacity:1;color:var(--gold-bright)}
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}
nav.links + .nav-actions{margin-inline-start:0}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px;
  transition:transform .3s var(--ease)}
.icon-btn .count.pop{transform:scale(1.35)}
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);
  padding:9px 18px;border-radius:999px;font-size:13px}
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line-dark);color:var(--champagne);
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:var(--dur) var(--ease)}
.site-loc:hover{border-color:var(--gold);color:var(--gold-bright)}

/* ===== حاوية الصفحة ===== */
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:110px;position:relative}

/* ===== الستيبر ===== */
.stepper{padding:34px 0 8px}
.steps{display:flex;align-items:flex-start;justify-content:space-between;position:relative;max-width:980px;margin-inline:auto}
.step{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:10px;flex:1;cursor:default}
.step .bubble{
  width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fff;
  border:1.5px solid var(--line);color:#A79c86;position:relative;
  transition:all .35s var(--ease);
}
.step .n{position:absolute;top:-25px;font-size:11.5px;color:#B4a98f;font-weight:600;transition:color .3s}
.step label{font-size:12.5px;color:#A79c86;transition:color .3s;white-space:nowrap}
.step.active .bubble{
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink);
  box-shadow:0 10px 26px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);
  transform:scale(1.06);
}
.step.active label{color:var(--gold-deep);font-weight:700}
.step.active .n{color:var(--gold-deep)}
.step.done .bubble{background:#fff;border-color:var(--gold);color:var(--gold-deep);cursor:pointer}
.step.done .bubble::after{
  content:"";position:absolute;top:-3px;left:-3px;width:18px;height:18px;border-radius:50%;
  background:var(--gold) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0906' stroke-width='3.4'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") center/10px no-repeat;
}
.step .bar{position:absolute;top:26px;right:calc(50% + 34px);width:calc(100% - 68px);height:2px;background:var(--line);z-index:-1}
.step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}
.step.done .bar i,.step.active .bar i{width:100%}
.step:last-child .bar{display:none}

/* ===== تخطيط المحتوى ===== */
.stage{display:grid;grid-template-columns:1fr 340px;gap:24px;padding:26px 0 104px;align-items:start;isolation:isolate}
.panel{min-width:0}
.panel-head{text-align:center;margin:12px 0 30px}
.panel-head h1{font-family:var(--font-d);font-size:clamp(26px,3.2vw,36px);color:var(--ink)}
.panel-head p{color:var(--mute);font-size:14.5px;margin-top:8px}

/* بطاقات عامة */
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}

/* ===== خطوة 1: الفروع ===== */
.branches-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.branch{
  position:relative;border-radius:20px;overflow:hidden;background:#fff;border:1.5px solid var(--line);
  cursor:pointer;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s;
}
.branch:hover{transform:translateY(-6px);box-shadow:0 26px 46px -24px rgba(80,60,20,.45)}
.branch.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16),0 26px 46px -24px rgba(143,113,52,.5)}
.branch .img{aspect-ratio:16/10;overflow:hidden;position:relative;background:#151209}
.branch .img img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}
.branch:hover .img img{transform:scale(1.06)}
.branch .home-flag{position:absolute;top:14px;right:14px;background:rgba(255,251,240,.94);color:var(--gold-deep);
  font-size:11.5px;font-weight:700;padding:7px 14px;border-radius:999px;display:flex;gap:6px;align-items:center;
  box-shadow:0 8px 18px -8px rgba(0,0,0,.35)}
.branch .b-ic{
  position:absolute;bottom:-24px;right:calc(50% - 24px);width:48px;height:48px;border-radius:50%;
  background:#fff;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);
  box-shadow:0 8px 20px -8px rgba(80,60,20,.4);transition:all .3s var(--ease);
}
.branch.sel .b-ic{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.branch .body{padding:36px 20px 20px;text-align:center}
.branch h3{font-family:var(--font-d);font-size:20px;color:var(--gold-deep)}
.branch .addr{font-size:13px;color:var(--mute);margin:6px 0 14px}
.branch .meta{display:flex;justify-content:center;gap:14px;font-size:12px;color:#5c5442;flex-wrap:wrap;border-top:1px dashed var(--line);padding-top:13px}
.branch .meta b{color:var(--gold-deep)}
.branch .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}
.branch .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.branch .pick{margin-top:14px;width:100%;border:1px solid var(--gold);color:var(--gold-deep);border-radius:12px;
  padding:11px;font-size:13.5px;font-weight:600;display:flex;justify-content:center;gap:8px;transition:var(--dur) var(--ease)}
.branch:hover .pick{background:rgba(198,161,91,.08)}
.branch.sel .pick{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.branch-sheet-ov{position:fixed;inset:0;z-index:1600;background:rgba(10,7,3,.55);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .28s var(--ease)}
.branch-sheet-ov.on{opacity:1;pointer-events:auto}
.branch-sheet{position:fixed;left:50%;bottom:0;z-index:1601;width:min(560px,100%);transform:translate(-50%,105%);background:linear-gradient(160deg,#fff,#F8F0E4);border:1px solid rgba(206,146,52,.28);border-radius:26px 26px 0 0;padding:18px 18px 24px;box-shadow:0 -28px 70px -24px rgba(20,12,4,.58);transition:transform .36s var(--ease)}
.branch-sheet.on{transform:translate(-50%,0)}
.branch-sheet .grab{width:48px;height:4px;border-radius:999px;background:#D8C9AF;margin:0 auto 14px}
.branch-sheet-head{text-align:center;margin-bottom:12px}.branch-sheet-head h3{font-family:var(--font-d);font-size:22px;color:var(--ink)}.branch-sheet-head p{font-size:13px;color:var(--mute);line-height:1.8;margin-top:5px}
.branch-choice{display:grid;grid-template-columns:96px 1fr auto;gap:13px;align-items:center;padding:12px;border-radius:18px;border:1.5px solid var(--line);background:#fff;text-align:right;margin-top:10px;box-shadow:0 10px 22px -20px rgba(80,50,20,.35)}
.branch-choice.sel{border-color:var(--gold);background:#FFF9EE;box-shadow:0 14px 28px -20px rgba(206,146,52,.75)}
.branch-choice img{width:96px;height:72px;border-radius:14px;object-fit:cover;background:#21170D}.branch-choice b{font-family:var(--font-d);font-size:15px;color:var(--ink)}.branch-choice small{display:block;color:var(--mute);font-size:11.5px;line-height:1.55;margin-top:3px}
.branch-choice .meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.branch-choice .meta span{font-size:10px;color:var(--gold-deep);background:#FBFAF6;border:1px solid var(--line);border-radius:999px;padding:5px 8px}.branch-choice .check{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:var(--gold-deep);border:1px solid rgba(206,146,52,.3);background:#fff;font-weight:900}

/* ===== خطوة 2: الخدمات ===== */
/* مكان تنفيذ الخدمة — ملاحظة صغيرة، مش كرت */
.branch-strip{display:flex;align-items:center;gap:9px;padding:0;margin:0 0 16px;
  background:none;border:0;box-shadow:none;font-size:12px;color:var(--mute)}
.branch-strip img{width:26px;height:26px;flex:none;object-fit:cover;border-radius:50%;
  border:1px solid rgba(198,161,91,.35)}
.branch-strip .bi{flex:1;min-width:0;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}
.branch-strip .bi b{font-family:inherit;font-size:12.5px;font-weight:700;color:var(--gold-deep)}
.branch-strip .bi small{color:var(--mute);font-size:11px}
.branch-strip .cells{flex:none;display:flex}
.branch-strip .cell{font-size:11px;color:var(--mute);padding:0;border:0}
/* ============================================================
   خطوة اختيار الخدمات — نفس شكل نسخة الموبايل
   (نسخة الموبايل ملف مستقل في public/mobile ولم تُمَس)
   ============================================================ */

/* ===== صف الأقسام: صورة معتّمة والاسم فوقها ===== */
.cat-row{display:grid;grid-template-columns:repeat(5,1fr);gap:11px;margin:0 auto 22px;max-width:820px}
.cat{position:relative;height:100px;border-radius:14px;overflow:hidden;cursor:pointer;display:block;
  border:2px solid transparent;background:#20170E;color:#fff;
  transition:transform .3s var(--ease),border-color .3s var(--ease),box-shadow .3s var(--ease)}
.cat img{display:block;width:100%;height:100%;object-fit:cover;filter:brightness(.6);
  transition:filter .35s var(--ease),transform .55s var(--ease)}
.cat::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(180deg,transparent 40%,rgba(9,7,5,.75) 100%)}
.cat:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(60,42,12,.6)}
.cat:hover img{filter:brightness(.72);transform:scale(1.05)}

/* القسم المفتوح: تدرّج ذهبي فوق الصورة + علامة صح */
.cat.sel{border-color:var(--gold)}
.cat.sel::after{background:linear-gradient(180deg,rgba(214,150,44,.55),rgba(160,102,17,.88))}
.cat.sel img{filter:brightness(.72)}

.cat .lbl{position:absolute;z-index:2;inset-inline:8px;bottom:9px;display:block;
  color:#fff;font-family:var(--font-b);font-size:12.5px;font-weight:800;line-height:1.35;
  text-align:center;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.cat .cat-icon{display:none}

.cat .chk{position:absolute;z-index:3;top:7px;left:7px;width:19px;height:19px;border-radius:50%;
  background:#fff;display:grid;place-items:center;color:#B87A16;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.cat.sel .chk,.cat.has-picks .chk{opacity:1;transform:scale(1)}

.sub-block{margin-bottom:8px}

/* ===== عنوان قسم الخدمات: لليمين مع خط ذهبي تحته ===== */
.sub-title{display:flex;align-items:flex-end;justify-content:flex-start;gap:12px;
  margin:24px 0 16px;border-bottom:1px solid var(--line)}
.sub-title__main{display:inline-flex;align-items:center;gap:9px;padding-bottom:9px;margin-bottom:-1px;
  border-bottom:2px solid var(--gold);
  font-family:var(--font-d);font-size:18px;color:var(--ink);white-space:nowrap}
.sub-title .tick{width:auto;height:auto;background:none;border-radius:0;display:inline-grid;place-items:center;color:var(--gold-deep)}
.sub-title .tick svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub-title small{font-size:12px;color:var(--mute);font-family:var(--font-b);
  margin-inline-start:auto;padding-bottom:9px}

/* ===== كروت الخدمات الفرعية ===== */
.subs{display:grid;grid-template-columns:repeat(4,1fr);gap:11px}
.sub{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;
  cursor:pointer;display:flex;flex-direction:column;transition:all var(--dur) var(--ease)}
.sub:hover{transform:translateY(-3px);box-shadow:0 14px 26px -18px rgba(80,60,20,.38);border-color:rgba(143,113,52,.45)}
.sub.sel{border-color:var(--acc,var(--gold));background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 18%,transparent)}

/* صف واحد: الأيقونة ثم الاسم ثم مربّع الاختيار في الطرف */
.sub .top{display:grid;grid-template-columns:30px minmax(0,1fr) 19px;align-items:start;gap:9px;margin-bottom:6px}
.sub .top .si{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;
  background:color-mix(in srgb,var(--acc,var(--gold)) 14%,#fff);color:var(--acc,var(--gold-deep))}
.sub .top .si svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub .top b{min-width:0;font-size:13px;color:var(--ink);line-height:1.5;padding-top:2px;text-align:right;overflow-wrap:break-word}
.sub .chk{flex:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);
  display:grid;place-items:center;color:#fff;transition:all .25s var(--ease)}
.sub.sel .chk{background:var(--acc,var(--gold));border-color:transparent;color:#fff}

.sub small{font-size:11px;color:var(--mute);display:block;line-height:1.65;min-height:30px}
.sub .foot{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:9px}
.sub .dur{font-size:11px;color:var(--mute);display:flex;gap:5px;align-items:center}
.sub .prc{font-family:var(--font-d);font-size:15.5px;color:var(--gold-deep)}
.sub .prc small{display:inline;font-size:10.5px;color:var(--mute);min-height:0}

.empty-hint{border:1.5px dashed var(--line);border-radius:16px;padding:44px 20px;text-align:center;color:var(--mute);font-size:14px}
.empty-hint b{color:var(--ink);font-family:var(--font-d);font-size:17px;display:block;margin-bottom:6px}

/* ===== خطوة 3: الموظف ===== */
/* ===== طريقة اختيار الموظف — خياران دائريان مدمجان ===== */
.mode-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;
  gap:20px;margin:4px 0 26px}
.mode{position:relative;flex:1;max-width:260px;min-width:160px;padding:24px 16px 20px;border:1.5px solid var(--line);background:#fff;border-radius:22px;
  cursor:pointer;text-align:center;overflow:visible;transition:transform .3s var(--ease)}
.mode:hover{transform:translateY(-3px);border-color:var(--gold);box-shadow:0 12px 28px -20px rgba(80,60,20,.4)}
.mode.sel{border-color:var(--gold);background:linear-gradient(160deg,#fff,#faf5e9);box-shadow:0 0 0 3px rgba(198,161,91,.12)}
.mode:focus-visible{outline:3px solid var(--gold-deep);outline-offset:4px}

/* الدائرة هي الكرت نفسه */
.mode .mi{width:118px;height:118px;border-radius:50%;margin:0 auto 13px;display:grid;place-items:center;
  border:1.5px solid var(--line);background:#fff;color:var(--gold-deep);
  box-shadow:0 14px 28px -18px rgba(80,60,20,.42);
  transition:border-color .3s var(--ease),box-shadow .3s var(--ease),transform .3s var(--ease)}
.mode .mi svg{width:40px;height:40px}
.mode:hover .mi{border-color:var(--gold)}
.mode.sel .mi{border-color:var(--gold);
  box-shadow:0 0 0 4px rgba(198,161,91,.2),0 18px 32px -18px rgba(143,113,52,.55)}

/* الخيار التلقائي: الدائرة داكنة بدل الكرت كله */
.mode.dark{color:inherit}
.mode.dark .mi{background:linear-gradient(160deg,#1E1910,#0F0C07);
  border-color:rgba(233,207,142,.45);color:var(--gold-bright)}
.mode.dark h3{color:var(--ink)}

.mode h3{font-family:var(--font-d);font-size:16px;margin:0;color:var(--ink);text-align:center}
.mode .sub-t{font-size:11.5px;color:var(--mute);font-weight:500;margin:5px 0 0;text-align:center}

/* التفاصيل الطويلة اتشالت — الشكل بقى مختصر */
.mode ul{display:none}

.mode .flag{position:static;display:inline-block;margin-top:9px;padding:4px 11px;
  font-size:10px;font-weight:700;border-radius:999px;
  background:rgba(198,161,91,.14);color:var(--gold-deep)}
.mode.dark .flag{background:rgba(30,25,16,.08);color:var(--gold-deep)}

.mode .chk{position:absolute;top:12px;left:12px;width:24px;height:24px;border-radius:50%;
  border:1.5px solid var(--line);background:#fff;display:grid;place-items:center;color:var(--ink);
  transition:all .3s var(--ease);z-index:2}
.mode.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}
.mode .chk svg{opacity:0;transition:opacity .2s}
.mode.sel .chk svg{opacity:1}

.mode .glow-msg{max-width:none;margin:9px 0 0;padding:0;background:none;border-radius:0;
  font-size:11px;line-height:1.7;color:var(--gold-deep);text-align:center;
  opacity:0;transform:translateY(5px);transition:all .35s var(--ease)}
.mode.dark .glow-msg{background:none;color:var(--gold-deep)}
.mode.sel .glow-msg{opacity:1;transform:none}

@media(max-width:560px){.mode-grid{gap:12px}.mode{min-width:130px;padding:22px 10px 16px}.mode .mi{width:86px;height:86px}.mode .mi svg{width:32px;height:32px}.mode h3{font-size:14px}.mode .chk{left:9px;top:9px;width:21px;height:21px}}

.emp-section{margin-top:6px}
.emp-row{--acc:var(--gold);display:block;margin-bottom:16px;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 14px 30px -24px rgba(80,50,20,.32)}
.emp-cat{padding:13px 15px 11px;color:var(--ink);display:flex;justify-content:flex-start;align-items:center;gap:11px;text-align:right;background:#fff;border-bottom:1px solid rgba(143,113,52,.12)}
.emp-cat .cat-ico{flex:none;width:43px;height:43px;border-radius:50%;display:grid;place-items:center;border:1px solid color-mix(in srgb,var(--acc) 34%,transparent);background:color-mix(in srgb,var(--acc) 11%,#fff);color:var(--acc,var(--gold-deep))}
.emp-cat .cat-ico svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}
.emp-cat__info{min-width:0;display:grid;gap:2px}
.emp-cat b{font-family:var(--font-d);font-size:14.5px;line-height:1.45;color:var(--ink);overflow-wrap:break-word}.emp-cat small{font-size:11px;color:var(--acc,var(--gold-deep));overflow-wrap:break-word}
.emp-list{display:flex;flex-wrap:nowrap;gap:9px;overflow-x:auto;overflow-y:hidden;padding:12px 14px 15px;background:linear-gradient(180deg,#fff,#FFFDF9);scrollbar-width:thin;scrollbar-color:var(--gold) rgba(198,161,91,.1);scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.emp-list::-webkit-scrollbar{height:6px}
.emp-list::-webkit-scrollbar-track{background:rgba(198,161,91,.1);border-radius:999px}
.emp-list::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--gold-deep),var(--gold));border-radius:999px}
.emp{
  flex:0 0 104px;background:#fff;border:1.5px solid var(--line);border-radius:13px;padding:10px 8px;text-align:center;
  cursor:pointer;transition:all var(--dur) var(--ease);position:relative;scroll-snap-align:start;touch-action:manipulation;
}
.emp:hover{transform:translateY(-4px);box-shadow:0 14px 26px -14px rgba(80,60,20,.4)}
.emp.sel{border-color:var(--acc,var(--gold));box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 22%,transparent)}
.emp .av{width:46px;height:46px;border-radius:13px;margin:0 auto 8px;display:grid;place-items:center;
  font-family:var(--font-d);font-weight:700;font-size:19px;color:#fff;position:relative;background:linear-gradient(145deg,#D8D3CC,#F8F6F2);overflow:hidden}
.emp:not(.any) .av::before{content:"";width:29px;height:35px;border-radius:18px 18px 10px 10px;background:linear-gradient(180deg,#17130E 0 24%,#C08A52 24% 43%,#1B1712 43%);box-shadow:0 8px 16px -10px rgba(0,0,0,.6)}
.emp .chk{position:absolute;top:6px;left:6px;width:17px;height:17px;border-radius:50%;display:grid;place-items:center;
  color:#fff;opacity:0;transform:scale(.4);transition:all .25s var(--ease);background:var(--acc,var(--gold))}
.emp.sel .chk{opacity:1;transform:scale(1)}
.emp b{font-size:11.5px;color:var(--ink);display:block;line-height:1.45;white-space:normal;overflow-wrap:anywhere}
.emp .rate{font-size:10px;color:var(--gold-deep);margin-top:3px;display:block}
.emp.any .av{background:#fff;border:1.5px dashed var(--line);color:var(--mute)}
.emp.any b{color:var(--mute)}

/* ===== خطوة 4: الوقت ===== */
.emp-row--group{display:grid;grid-template-columns:190px minmax(0,1fr);align-items:stretch;min-height:154px}
.emp-row--group .emp-cat--group{display:grid;justify-items:center;align-content:center;gap:8px;text-align:center;padding:20px 16px;background:linear-gradient(145deg,color-mix(in srgb,var(--acc,var(--gold)) 88%,#c99a3e),#c99639);color:#fff;border-bottom:0;border-inline-start:1px solid rgba(255,255,255,.22)}
.emp-row--group .emp-cat--group .cat-ico{width:52px;height:52px;border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.13);color:#fff}
.emp-row--group .emp-cat--group .cat-ico svg{width:23px;height:23px}
.emp-row--group .emp-cat--group b{color:#fff;font-size:17px}
.emp-row--group .emp-cat--group small{color:rgba(255,255,255,.86);font-weight:700}
.emp-cat__services{display:block;max-width:150px;color:rgba(255,255,255,.78);font-size:10px;line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.emp-list--groups{align-items:stretch;padding:16px;background:linear-gradient(180deg,#fff,#FFFDF9)}
.emp-list--groups .emp{flex-basis:132px;min-height:134px;padding:16px 10px}
.emp-list--groups .emp .av{width:58px;height:58px;border-radius:17px}
.emp-list--groups .emp:not(.any) .av::before{width:37px;height:44px;border-radius:20px 20px 12px 12px}
.emp-list--groups .emp b{font-size:12px}
@media(max-width:700px){
  .emp-row--group{grid-template-columns:1fr;min-height:0}
  .emp-row--group .emp-cat--group{display:flex;justify-content:flex-start;text-align:right;padding:13px 15px;border-inline-start:0}
  .emp-row--group .emp-cat--group .cat-ico{width:43px;height:43px}
  .emp-cat__services{max-width:none;color:rgba(255,255,255,.78);font-size:9.5px}
  .emp-list--groups .emp{flex-basis:108px;min-height:112px;padding:11px 8px}
  .emp-list--groups .emp .av{width:46px;height:46px;border-radius:13px}
}
.time-grid{display:grid;grid-template-columns:minmax(300px,340px) minmax(0,1fr);gap:18px;align-items:start}
.time-grid>*{min-width:0}
.cal{padding:20px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}
.loyalty-preview{margin:0 0 16px;padding:24px 28px;border:1.5px solid var(--gold);border-radius:20px;background:linear-gradient(135deg,#fffdf8,#fff8eb);text-align:center;box-shadow:0 16px 34px -30px rgba(143,89,15,.65)}
.loyalty-preview h3{margin:0 0 16px;font-family:var(--font-d);font-size:22px;color:var(--gold-deep)}
.loyalty-preview p{margin:0;color:var(--mute);font-size:14px;line-height:1.9}.loyalty-preview p b{color:var(--ink)}
.loyalty-preview strong{display:block;color:var(--gold-deep);font-size:14px;line-height:1.8}
.cal-head{display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.cal-head b{font-family:var(--font-d);font-size:16px;color:var(--ink)}
.cal-nav{width:32px;height:32px;border-radius:9px;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);transition:var(--dur)}
.cal-nav:hover:not(:disabled){background:rgba(198,161,91,.1)}
.cal-nav:disabled{opacity:.35;cursor:default}
.cal-cells{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;text-align:center}
.cal-cells button{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 4px;border-radius:14px;
  border:1.5px solid var(--line);font-size:13px;color:var(--ink);position:relative;transition:all .22s var(--ease);background:#fff}
.cal-cells button .dow{font-size:10.5px;color:var(--mute)}
.cal-cells button .dnum{font-family:var(--font-d);font-size:18px}
.cal-cells button:hover:not(:disabled){border-color:var(--gold);background:rgba(198,161,91,.08)}
.cal-cells button:disabled{color:#CFC7B2;cursor:default;background:#FAF7F0}
.cal-cells button.avail::after{content:"";position:absolute;bottom:6px;width:4px;height:4px;border-radius:50%;background:var(--green)}
.cal-cells button.sel{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-weight:700;border-color:transparent;
  box-shadow:0 8px 18px -6px rgba(143,113,52,.55)}
.cal-cells button.sel .dow{color:var(--ink)}
.cal-legend{display:flex;gap:16px;margin-top:14px;padding-top:12px;border-top:1px dashed var(--line);font-size:11px;color:var(--mute)}
.cal-legend span{display:flex;gap:6px;align-items:center}
.cal-legend i{width:7px;height:7px;border-radius:50%}
.date-line{display:flex;align-items:center;gap:10px;margin:22px 0 0;padding:18px 22px 0;border-top:1px dashed var(--line);font-family:var(--font-d);font-size:22px;color:var(--ink)}
.booking-periods{margin:4px 0 16px}
.booking-periods .period{min-height:54px;font-size:15px;background:#fff}
.available-times-title{margin-bottom:12px;color:var(--mute);font-size:13px}
.times-panel{padding:22px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}
.times-panel .date-line{display:flex;align-items:center;gap:10px;font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px}
.notice{display:flex;gap:10px;align-items:center;background:rgba(198,161,91,.1);border:1px solid var(--line);
  border-radius:12px;padding:12px 16px;font-size:12.5px;color:var(--gold-deep);margin-bottom:18px}
.periods{display:flex;gap:10px;margin-bottom:18px}
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease)}
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.1);font-weight:600}
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;min-height:120px}
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);
  transition:all .22s var(--ease);background:#fff;animation:slotIn .35s var(--ease) both}
@keyframes slotIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:#FFEFE0;color:#B0622A}
.service-time-summary{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:-6px 0 12px;font-size:11.5px;color:var(--mute)}
.service-time-summary span{display:inline-flex;align-items:center;min-height:26px;padding:5px 9px;border-radius:999px;background:#FFF8EA;border:1px solid rgba(206,146,52,.2)}
.service-time-summary .shift-note{color:var(--gold-deep);background:#FFF2DD;border-color:rgba(206,146,52,.35);font-weight:700}
.time-start-card h4{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap}
.time-start-service{display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:12px 14px;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(252,248,238,.86));border:1px solid rgba(198,161,91,.22)}
.time-start-service .cat-ico,.plan-icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 auto;border-radius:12px;color:var(--acc,var(--gold-deep));background:rgba(198,161,91,.1);border:1px solid rgba(198,161,91,.18)}
.time-start-service .cat-ico svg,.plan-icon svg{width:24px;height:24px;stroke:currentColor}
.session-plan .plan-icon{color:var(--gold-deep)!important;background:rgba(198,161,91,.12)!important;border-color:rgba(198,161,91,.28)!important}
.time-start-copy{min-width:0;display:grid;gap:3px}.time-start-copy b{font-size:13.5px}.time-start-copy small{font-size:11px;color:var(--mute);line-height:1.6;white-space:normal}
.initial-slots{min-height:0}
.session-plan{margin-top:22px;padding:20px;border-radius:16px;background:#FCFAF4;border:1px solid var(--line)}
.session-plan h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px;display:flex;gap:8px;align-items:center}
.plan-track{display:flex;flex-direction:row;gap:10px;align-items:stretch;overflow-x:auto;padding:6px 4px 12px;margin-top:12px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent;scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.plan-track::-webkit-scrollbar{height:6px}.plan-track::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}
.plan-item{position:relative;flex:0 0 172px;padding:14px 15px;border-radius:12px;border:1px solid var(--line);background:#fff;scroll-snap-align:start}
.plan-item--group{border-color:rgba(198,161,91,.28);background:linear-gradient(180deg,#fff,rgba(255,250,240,.82))}
.plan-item.pending{opacity:.72}
.plan-item b{font-size:13px;display:block}
.plan-item small{font-size:11px;color:var(--mute);display:block;margin-top:3px}
.plan-item .t{font-size:11.5px;font-weight:700;margin-top:7px;display:block}
.plan-gap{flex:0 0 126px;align-self:center;display:grid;place-items:center;text-align:center;gap:3px;padding:10px 12px;border-radius:999px;background:#FFF8EA;border:1px dashed rgba(198,161,91,.42);color:var(--gold-deep);scroll-snap-align:start}
.plan-gap span,.plan-gap small{font-size:10.5px;color:var(--mute)}.plan-gap b{font-size:11px}
.plan-note{display:flex;gap:8px;align-items:center;margin-top:14px;font-size:12px;color:var(--green);
  background:var(--green-bg);border-radius:10px;padding:10px 14px}
.plan-note--pending{color:var(--gold-deep);background:#FFF8EA}.plan-note--warn{color:#9A4D16;background:#FFF2DD}
.best-slot{display:flex;align-items:center;gap:14px;margin-top:18px;padding:14px 18px;border-radius:14px;
  border:1px dashed var(--gold);background:#FFFDF6;font-size:13px;color:var(--gold-deep)}
.best-slot button{margin-inline-start:auto;padding:9px 20px;border-radius:10px;font-size:12.5px;font-weight:700;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}

/* ===== تحسين الهيدر الموحد ===== */
.nav{gap:22px;min-height:82px}
nav.links{gap:18px;align-items:center;white-space:nowrap}
nav.links a{font-weight:500}
.logo{flex-shrink:0}.nav-actions{flex-shrink:0}
@media(max-width:1180px){nav.links{gap:12px}.loyal{padding-inline:13px}.nav{gap:14px}}

/* ===== تحسين الفوتر وبوابات الدفع ===== */
footer{background:radial-gradient(circle at 18% 0,rgba(232,190,108,.16),transparent 30%),linear-gradient(180deg,#0B0906,#050403);color:#f5efe4;padding:58px 24px 20px;border-top:1px solid rgba(198,161,91,.28)}
.f-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.25fr .85fr 1fr 1.1fr;gap:28px;align-items:start}
.f-brand{min-width:0}.f-brand img{width:64px;height:64px;object-fit:cover;border-radius:18px;border:1px solid rgba(198,161,91,.5);margin-bottom:14px}
.f-brand h3,.f-links h4,.f-branch h4,footer h4{font-family:var(--font-d,var(--fd));color:#f7d995;margin:0 0 12px;font-size:22px}
.f-brand p,.f-branch p,.f-links a{color:#cfc5b3;line-height:1.9;font-size:14px}
.f-brand p{max-width:330px}.socials{display:flex;gap:10px;margin-top:18px}.socials a{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(198,161,91,.34);color:#f0c978;background:rgba(255,255,255,.03)}
.f-links{display:grid;gap:8px;list-style:none;padding:0;margin:0}.f-links a:hover{color:#f0c978}.f-branch{display:grid;gap:3px;margin-bottom:12px}.f-branch b,.f-branch strong{color:#fff}.f-branch small{color:#b8ad9d;line-height:1.8}.f-branch a{color:#f0c978;font-size:13px}
.f-bottom{max-width:1200px;margin:34px auto 0;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:auto minmax(320px,1fr);align-items:center;gap:18px;color:#b8ad9d;font-size:13px}
.pay{justify-self:end;display:grid;grid-template-columns:repeat(5,minmax(72px,1fr));gap:10px;width:min(100%,520px)}
.pay span{min-height:46px;border-radius:14px;display:grid;place-items:center;border:1px solid rgba(232,190,108,.3);background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.03));box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 16px 32px -24px rgba(0,0,0,.9);color:#f7d995;font-size:0;font-weight:900;letter-spacing:0;position:relative;overflow:hidden}
.pay span::before{font-size:13px;line-height:1;color:inherit}.pay span::after{content:"";position:absolute;inset:8px;border:1px solid rgba(255,255,255,.08);border-radius:10px;pointer-events:none}
.pay span:nth-child(1)::before{content:"VISA";font-style:italic;font-size:15px;color:#fff}.pay span:nth-child(2)::before{content:"MC";font-size:14px;color:#111;background:linear-gradient(90deg,#EB001B 0 50%,#F79E1B 50%);width:38px;height:24px;border-radius:999px;display:grid;place-items:center}.pay span:nth-child(3)::before{content:"مدى";font-size:16px;color:#9FE7C1}.pay span:nth-child(4)::before{content:"tabby";font-size:14px;color:#B8F7D0}.pay span:nth-child(5)::before{content:" Pay";font-size:15px;color:#fff}
@media(max-width:900px){.f-grid{grid-template-columns:1fr 1fr}.nav{overflow-x:auto;justify-content:flex-start}.nav::-webkit-scrollbar{height:0}.f-brand{grid-column:1/-1}.f-bottom{grid-template-columns:1fr}.pay{justify-self:stretch;width:100%}}
@media(max-width:640px){footer{padding:42px 16px calc(22px + env(safe-area-inset-bottom))}.f-grid{grid-template-columns:1fr 1fr;gap:22px 14px}.f-brand,.f-grid>div:last-child{grid-column:1/-1}.f-brand{text-align:center}.f-brand .logo{justify-content:center}.f-brand p{max-width:none;margin-inline:auto;font-size:13px}.socials{justify-content:center}.f-grid h4,footer h4{font-size:15px;margin-bottom:10px}.f-links a{font-size:12.5px}.f-branch{background:rgba(255,255,255,.035);border:1px solid rgba(198,161,91,.18);border-radius:14px;padding:12px}.f-bottom{margin-top:24px;text-align:center}.pay{grid-template-columns:repeat(3,1fr);gap:8px}.pay span{min-height:44px;border-radius:12px}.pay span:nth-child(5){grid-column:2/3}}



/* ===== إصلاح هيدر الموقع على الجوال ===== */
@media(max-width:640px){
  body{padding-top:76px}
  header{overflow:hidden}
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:rtl}
  nav.links{display:none!important}
  .logo{min-width:0;gap:8px;flex:0 1 auto}
  .logo .mark{width:50px;height:50px;border-radius:15px;flex:none}
  .logo .mark img{width:28px!important;height:28px!important;margin:0!important}
  .logo .name b{font-size:18px;white-space:nowrap}
  .logo .name span{font-size:10px;letter-spacing:.18em}
  .nav-actions{margin-inline-start:auto;gap:8px;display:flex;align-items:center;flex:0 0 auto;min-width:0}
  .nav-actions .btn-ghost{width:48px;min-width:48px;height:48px;padding:0!important;border-radius:50%;font-size:0!important;gap:0}
  .nav-actions .btn-ghost svg{width:18px;height:18px;margin:0}
  .nav-actions .btn-gold{min-width:112px;height:48px;padding:0 14px!important;border-radius:999px;font-size:13px!important;white-space:nowrap;gap:6px;flex:none}
  .nav-actions .btn-gold svg{width:14px;height:14px;flex:none}
  .nav-actions .burger{display:none}
}
@media(max-width:380px){
  .logo .name b{font-size:16px}
  .logo .name span{font-size:9px;letter-spacing:.14em}
  .logo .mark{width:46px;height:46px}
  .nav-actions{gap:6px}
  .nav-actions .btn-ghost{width:44px;min-width:44px;height:44px}
  .nav-actions .btn-gold{min-width:100px;height:44px;padding-inline:11px!important;font-size:12px!important}
}


/* ===== مدخل الهدايا المستلمة في الهيدر ===== */
.account-entry{position:relative;display:inline-grid;place-items:center}
.account-trigger{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line,rgba(198,161,91,.28));color:var(--champagne,#F0E6CF);background:radial-gradient(circle at 30% 20%,rgba(232,190,108,.14),rgba(255,255,255,.02));transition:all .26s cubic-bezier(.33,.9,.35,1)}
.account-trigger:hover,.account-entry:focus-within .account-trigger{border-color:var(--gold,#CE9234);color:var(--gold-bright,#E8BE6C);box-shadow:0 0 24px rgba(206,146,52,.22);transform:translateY(-1px)}
.account-panel{position:absolute;top:calc(100% + 12px);left:0;z-index:1500;width:280px;padding:12px;border:1px solid rgba(206,146,52,.34);border-radius:18px;background:linear-gradient(155deg,#17120A,#090705);box-shadow:0 24px 50px -22px rgba(0,0,0,.78),inset 0 1px 0 rgba(255,255,255,.08);opacity:0;pointer-events:none;transform:translateY(8px);transition:all .24s cubic-bezier(.33,.9,.35,1)}
.account-entry:hover .account-panel,.account-entry:focus-within .account-panel{opacity:1;pointer-events:auto;transform:translateY(0)}
.account-panel::before{content:"";position:absolute;top:-6px;left:18px;width:12px;height:12px;background:#17120A;border-top:1px solid rgba(206,146,52,.34);border-right:1px solid rgba(206,146,52,.34);transform:rotate(-45deg)}
.received-gift-link{display:grid;grid-template-columns:46px 1fr auto;gap:12px;align-items:center;padding:12px;border-radius:15px;background:linear-gradient(135deg,rgba(232,190,108,.16),rgba(255,255,255,.04));border:1px solid rgba(232,190,108,.22);color:#F7E8C6;text-decoration:none}
.received-gift-link .gift-ico{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright,#E8BE6C),var(--gold,#CE9234));color:#111;box-shadow:0 12px 22px -12px rgba(232,190,108,.75)}
.received-gift-link b{font-family:var(--font-d,var(--fd));font-size:14px;color:#fff;display:block;margin-bottom:2px}
.received-gift-link small{font-size:11px;color:#CDBF9D;line-height:1.5}
.received-gift-link .arr{color:var(--gold-bright,#E8BE6C)}
.received-gift-link:hover{border-color:var(--gold,#CE9234);transform:translateY(-1px)}
@media(max-width:640px){.account-trigger{width:44px;height:44px}.account-panel{left:0;width:min(280px,calc(100vw - 22px))}}


/* ===== أدوات الهيدر الموحّدة ===== */
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.16);color:#EDE3D2;
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:.25s;cursor:pointer;
  font-family:inherit;max-width:180px;white-space:nowrap}
.site-loc:hover{border-color:#C6A15B;color:#F0D9A5}
.site-loc span{overflow:hidden;text-overflow:ellipsis}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid rgba(255,255,255,.16);color:#EDE3D2;transition:.25s;background:transparent;cursor:pointer}
.icon-btn:hover{border-color:#C6A15B;color:#F0D9A5}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,#F0D9A5,#C6A15B);color:#241f1b;
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}
.nav-book{display:inline-flex;align-items:center;gap:7px;border:1px solid #C6A15B;color:#F0D9A5;
  border-radius:999px;padding:9px 18px;font-size:13px;white-space:nowrap;transition:.25s}
.nav-book:hover{background:rgba(198,161,91,.15)}
@media(max-width:1100px){.site-loc span{display:none}.site-loc{padding:9px 11px}}


/* ===== خطوة 5: التأكيد ===== */
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);
  border-radius:15px;padding:16px 20px;margin-bottom:20px}
.ok-banner .ic{width:40px;height:40px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}
.ok-banner b{color:#1E6B41;font-size:15px;display:block}
.ok-banner small{color:#4a7d5f;font-size:12.5px}
.detail-card{padding:22px;margin-bottom:18px}
.detail-card h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:18px;display:flex;align-items:center;gap:9px}
.detail-card h4 svg{color:var(--gold-deep)}
.d-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.d-cell{border-inline-start:1px solid var(--line);padding-inline-start:16px}
.d-cell:first-child{border:none;padding:0}
.d-cell small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:6px}
.d-cell b{font-size:14.5px;color:var(--ink)}
/* ===== كارت تفاصيل الجلسة =====
   ثلاثة أعمدة: أيقونة القسم | الاسم والخدمات والموظف | الوقت والمدة.
   قبل كده كان كل شيء مكدّسًا في عمود واحد، وفاصل القهوة كان في المنتصف
   بينما الكروت لليمين، فبان غير متناسق. */
.timeline-cards{display:flex;flex-direction:column;gap:10px;position:relative;padding-right:28px;margin-top:14px}
.tl-rail{position:absolute;top:16px;bottom:16px;right:10px;width:2px;border-radius:2px;
  background:linear-gradient(180deg,rgba(201,139,49,.12),rgba(201,139,49,.5),rgba(201,139,49,.12))}

.tl{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:13px;
  margin:0;padding:13px 16px;border-radius:14px;border:1px solid var(--line);background:#fff;
  box-shadow:0 12px 24px -20px rgba(80,60,20,.45);
  animation:slotIn .4s var(--ease) both;transition:transform .28s var(--ease),box-shadow .28s var(--ease)}
.tl:hover{transform:translateX(-3px);box-shadow:0 16px 30px -20px rgba(80,60,20,.55)}

/* النقطة على الخط الزمني — بلون القسم القادم من الستايل السطري */
.tl::after{content:"";position:absolute;top:50%;right:-23px;width:12px;height:12px;border-radius:50%;
  background:currentColor;transform:translateY(-50%);border:2.5px solid #fff;
  box-shadow:0 0 0 1.5px currentColor}

.tl .ti{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;color:#fff;
  margin:0;font-size:16px;align-self:center}
.tl-main{min-width:0}
.tl-time{display:flex;flex-direction:column;align-items:flex-end;flex:none}
.tl b{font-size:13.5px;display:block;color:var(--ink);line-height:1.5}
.tl .with{font-size:11px;color:var(--mute);margin-top:2px;line-height:1.65;
  text-overflow:ellipsis;white-space:nowrap}
.tl .tm{font-size:12.5px;font-weight:800;display:block;text-align:end;white-space:nowrap;
  font-variant-numeric:tabular-nums}
.tl .dr{font-size:10.5px;color:var(--mute);display:block;text-align:end;margin-top:3px;white-space:nowrap}

/* فاصل القهوة: صف بنفس محاذاة الكروت وله نقطته على الخط */
.coffee-break{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;
  gap:10px;padding:8px 14px;border-radius:12px;border:1px dashed rgba(206,146,52,.45);background:#FFFDF7;
  color:var(--gold-deep);font-size:11.5px;font-weight:700;text-align:start;
  animation:slotIn .4s var(--ease) both}
.coffee-break::after{content:"";position:absolute;top:50%;right:-22px;width:10px;height:10px;border-radius:50%;
  background:var(--gold);transform:translateY(-50%);border:2.5px solid #fff}
.coffee-break .cup{width:30px;height:30px;flex:none;border-radius:50%;display:grid;place-items:center;
  background:#FFF8EA;border:1px solid rgba(206,146,52,.28);font-size:14px}

@media(max-width:700px){
  .tl{grid-template-columns:32px minmax(0,1fr);gap:10px;padding:11px 13px}
  .tl-time{grid-column:2;flex-direction:row;align-items:baseline;gap:8px;margin-top:6px}
  .tl .tm,.tl .dr{text-align:start;margin:0}
}
.coord-note{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--green);background:var(--green-bg);
  border-radius:10px;padding:11px 15px;margin-top:22px}
.upsell{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.up{border:1px solid var(--line);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;background:#fff;
  transition:all var(--dur) var(--ease)}
.up:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(80,60,20,.35)}
.up img{width:58px;height:58px;object-fit:cover;border-radius:11px;background:#F1EBDD}
.up .inf{flex:1;min-width:0}
.up b{font-size:13px;color:var(--ink);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.up small{font-size:11px;color:var(--mute)}
.up .p{font-family:var(--font-d);font-size:14px;color:var(--gold-deep);display:block;margin-top:3px}
.up button{flex:none;padding:8px 15px;border-radius:9px;border:1px solid var(--gold);color:var(--gold-deep);
  font-size:12px;font-weight:600;transition:var(--dur)}
.up button:hover,.up.added button{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.up button:disabled{opacity:.55;cursor:not-allowed;background:#d6cec1;color:#fff;border-color:transparent}

/* Keep the confirmation products inside the main desktop column. */
@media(min-width:701px){
  .products-detail-card{min-width:0;max-width:100%;overflow:hidden}
  .products-detail-card h4{flex-wrap:wrap}
  .products-detail-card .upsell{
    width:100%;min-width:0;max-width:100%;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  }
  .products-detail-card .up{min-width:0;max-width:100%;padding:12px;gap:9px;overflow:hidden}
  .products-detail-card .up img{width:52px;height:52px;flex:0 0 52px}
  .products-detail-card .up button{padding:8px 10px}
}
.cust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.cust-grid .fld small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:7px}
.cust-grid input,.notes-box textarea{
  width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;background:#FDFBF5;
  color:var(--ink);transition:border-color var(--dur),box-shadow var(--dur);outline:none;
}
.cust-grid input:focus,.notes-box textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.notes-box textarea{resize:vertical;min-height:74px}
.terms{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);background:rgba(198,161,91,.08);
  border-radius:11px;padding:12px 16px;margin-top:16px}
.terms a{color:var(--gold-deep);font-weight:600;text-decoration:underline}

/* ===== خطوة 6: الدفع ===== */
.pay-methods{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pm{position:relative;display:flex;align-items:center;gap:14px;padding:17px 18px;border-radius:15px;
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.pm:hover{border-color:rgba(143,113,52,.5)}
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.pm .pmi{width:52px;height:36px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;font-weight:800;
  font-size:11px;color:var(--ink);letter-spacing:.02em;flex:none}
.pm b{font-size:14px;color:var(--ink);display:block}
.pm small{font-size:11.5px;color:var(--mute)}
.pm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}
.pm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.pm.sel .rad{border-color:var(--gold)}
.pm.sel .rad i{transform:scale(1)}
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}
.card-form.open{max-height:220px;opacity:1;margin-top:14px}
.card-form .cf{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px;padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}
.card-form input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:12px;font-size:13px;background:#fff;outline:none;color:var(--ink)}
.card-form input:focus{border-color:var(--gold)}
.secure-line{display:flex;gap:8px;align-items:center;justify-content:center;margin-top:16px;font-size:12px;color:var(--mute)}
.rewards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px}
.rw{padding:17px;border-radius:15px;border:1.5px solid var(--line);background:#fff}
.rw .rt{display:flex;align-items:center;gap:11px;margin-bottom:11px}
.rw .rt .ri{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.rw b{font-size:13.5px;color:var(--ink);display:block}
.rw small{font-size:11.5px;color:var(--mute)}
.switch{margin-inline-start:auto;width:46px;height:26px;border-radius:13px;background:#E3DCC9;position:relative;
  cursor:pointer;transition:background .3s var(--ease);flex:none}
.switch::after{content:"";position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:#fff;
  box-shadow:0 2px 6px rgba(0,0,0,.2);transition:transform .3s var(--ease)}
.switch.on{background:linear-gradient(135deg,var(--gold-bright),var(--gold))}
.switch.on::after{transform:translateX(-20px)}
.rw input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:11px 13px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}
.rw input:focus{border-color:var(--gold)}
.rw .hint{font-size:11px;color:var(--gold-deep);margin-top:8px;display:block}
.coupon{display:flex;gap:10px;margin-top:12px;padding:16px;border-radius:15px;border:1.5px solid var(--line);background:#fff;align-items:center}
.coupon .ci{width:38px;height:38px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);flex:none}
.coupon input{flex:1;border:1.5px solid var(--line);border-radius:11px;padding:11px 14px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}
.coupon input:focus{border-color:var(--gold)}
.coupon button{padding:11px 24px;border-radius:11px;background:var(--ink);color:var(--gold-bright);font-size:13px;font-weight:600;transition:var(--dur)}
.coupon button:hover{background:#241E12}
.coupon-msg{font-size:12px;margin-top:10px;display:none;align-items:center;gap:7px}
.coupon-msg.ok{display:flex;color:var(--green)}
.coupon-msg.bad{display:flex;color:#B3452F}
.payment-rewards-card{margin-top:16px}
.payment-rewards-card h4{display:flex;align-items:center;gap:10px;justify-content:flex-start}
.payment-rewards-card .step-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#050403;color:var(--gold-bright);font-size:13px;font-weight:800;flex:none}
.rw.on{border-color:rgba(198,161,91,.55);background:linear-gradient(145deg,#fffdf8,#fff8ea);box-shadow:0 10px 26px -24px rgba(89,53,9,.5)}
.rw input:disabled{opacity:.55;cursor:not-allowed}
.coupon button:disabled{opacity:.65;cursor:wait}
.coupon .coupon-clear{padding:10px 14px;background:#F5F0E4;color:var(--gold-deep)}
.coupon .coupon-clear:hover{background:#EEE4D2}
.reward-total{margin-top:14px;padding:13px 15px;border:1px dashed rgba(198,161,91,.55);border-radius:13px;background:rgba(198,161,91,.08);display:grid;grid-template-columns:1fr auto;gap:5px 14px;align-items:center}
.reward-total span{font-size:12.5px;color:var(--mute)}
.reward-total b{font-size:15px;color:var(--gold-deep)}
.reward-total small{grid-column:1/-1;color:var(--green);font-size:11.5px;font-weight:700}
.trust-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}
.trust{text-align:center;padding:18px 12px;border-radius:14px;background:#fff;border:1px solid var(--line)}
.trust .ti{width:40px;height:40px;border-radius:12px;margin:0 auto 10px;display:grid;place-items:center;
  background:rgba(198,161,91,.12);color:var(--gold-deep)}
.trust b{font-size:12.5px;color:var(--ink);display:block}
.trust small{font-size:10.5px;color:var(--mute)}

/* ===== ملخص الحجز (الشريط الجانبي) ===== */
.summary{position:sticky;top:86px;opacity:0;transform:translateY(-14px);transition:opacity .38s var(--ease),transform .38s var(--ease)}
.summary.show{opacity:1;transform:translateY(0)}
.summary .card{padding:20px;overflow:hidden}
.summary h3{font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.summary .br-img{border-radius:13px;overflow:hidden;margin-bottom:14px;aspect-ratio:16/8;background:#EFE8D8}
.summary .br-img img{width:100%;height:100%;object-fit:cover}
.sum-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13px}
.sum-row:last-of-type{border:none}
.sum-row .k{color:var(--mute);display:flex;gap:7px;align-items:center}
.sum-row .v{color:var(--ink);font-weight:600;text-align:left}
.sum-svcs{margin:6px 0}
.sum-svc{display:flex;align-items:center;gap:9px;padding:8px 0;font-size:12.5px;animation:slotIn .3s var(--ease) both}
.sum-svc i{width:8px;height:8px;border-radius:3px;flex:none}
.sum-svc .nm{flex:1;color:var(--ink)}
.sum-svc .pr{color:var(--gold-deep);font-weight:600;white-space:nowrap}
.sum-svc .rm{width:22px;height:22px;border-radius:7px;display:grid;place-items:center;color:#B3452F;opacity:.55;transition:var(--dur)}
.sum-svc .rm:hover{opacity:1;background:rgba(179,69,47,.1)}
.sum-price{margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}
.sp-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mute);padding:4px 0}
.sp-row.disc{color:var(--green)}
.sp-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:12px;border-top:1px solid var(--line)}
.sp-total .k{font-size:14px;color:var(--ink);font-weight:700}
.sp-total .v{font-family:var(--font-d);font-size:28px;color:var(--gold-deep);transition:transform .25s var(--ease)}
.sp-total .v.pulse{transform:scale(1.08)}
.sp-total .v small{font-size:13px}
.sum-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}
.sum-empty{text-align:center;color:var(--mute);font-size:12.5px;padding:26px 10px;border:1.5px dashed var(--line);border-radius:13px}

/* ملخص صغير وثابت من خطوة الموظف وحتى الدفع */
.booking-summary-compact{top:98px;align-self:start;min-width:0;margin-bottom:90px;z-index:2}
.stage>.panel{grid-column:1}
.stage>.booking-summary-compact{grid-column:2}
.booking-summary-compact .card{padding:15px;max-height:calc(100dvh - 188px);overflow:hidden;display:flex;flex-direction:column;scrollbar-gutter:stable}
.booking-summary-compact h3{font-size:15px;margin-bottom:10px}
.booking-summary-compact .br-img{aspect-ratio:auto;height:78px;margin-bottom:8px;border-radius:10px}
.booking-summary-compact .sum-row{padding:7px 0;font-size:11px}
.booking-summary-compact .sum-svcs{margin:3px 0;min-height:48px;max-height:148px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;padding-inline-end:4px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent}
.booking-summary-compact .sum-svcs::-webkit-scrollbar{width:5px}.booking-summary-compact .sum-svcs::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}
.booking-summary-compact .sum-svc{gap:6px;padding:5px 0;font-size:10.5px}
.booking-summary-compact .sum-svc .rm{width:19px;height:19px}
.booking-summary-compact .sum-price{margin-top:7px;padding-top:8px}
.booking-summary-compact .sp-row{font-size:10.5px;padding:2px 0}
.booking-summary-compact .sp-total{margin-top:7px;padding-top:8px}
.booking-summary-compact .sp-total .k{font-size:11.5px}
.booking-summary-compact .sp-total .v{font-size:21px}
.booking-summary-compact .sp-total .v small{font-size:10px}
.booking-summary-compact .sum-note{margin-top:9px;padding:8px 9px;font-size:9.5px;line-height:1.55}
.booking-summary-time .br-img{display:none}
.booking-summary-time .card{max-height:calc(100dvh - 188px)}
.booking-summary-time .sum-svcs{max-height:132px}

/* مع الملخص الجانبي نحافظ على مساحة مريحة للتقويم والأوقات في الشاشات المتوسطة */
@media(min-width:901px) and (max-width:1180px){
  .stage:has(.booking-summary-time.show){grid-template-columns:minmax(0,1fr) 290px!important}
  .stage:has(.booking-summary-time.show) .time-grid{grid-template-columns:1fr}
}

/* ===== الشريط السفلي ===== */
.footbar{
  position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);
  backdrop-filter:blur(14px);border-top:1px solid var(--line);
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);
}
.footbar .in{display:flex;align-items:center;gap:20px;padding:14px 0}
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 32px;border-radius:14px;
  font-size:14.5px;font-weight:700;position:relative;overflow:hidden;isolation:isolate;
  transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),opacity var(--dur)}
.btn-gold{color:var(--ink);background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-deep) 120%);
  box-shadow:0 12px 26px -10px rgba(143,113,52,.65),inset 0 1px 0 rgba(255,255,255,.5)}
.btn-gold::before{content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);
  transform:translateX(160%);transition:transform .7s var(--ease)}
.btn-gold:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 34px -10px rgba(143,113,52,.7)}
.btn-gold:hover::before{transform:translateX(-160%)}
.btn-gold:disabled{opacity:.45;cursor:not-allowed;box-shadow:none}
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:14px 26px}
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}
.fb-mid{flex:1;display:flex;justify-content:center;gap:34px;font-size:12.5px;color:var(--mute);flex-wrap:wrap}
.fb-mid b{color:var(--ink)}
.fb-mid .tot b{font-family:var(--font-d);font-size:19px;color:var(--gold-deep)}
.btn-pay{background:var(--ink);color:var(--gold-bright);padding:15px 36px}
.btn-pay:hover:not(:disabled){background:#221C10;transform:translateY(-2px)}

/* ===== النجاح ===== */
.success-wrap{max-width:900px;margin-inline:auto;padding:40px 0 30px;text-align:center}
.suc-ic{width:96px;height:96px;margin:0 auto 22px;border-radius:50%;border:2px solid var(--gold);position:relative;
  display:grid;place-items:center;color:var(--gold-deep);
  animation:sucPop .6s var(--ease) both .15s}
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.08)}to{transform:scale(1);opacity:1}}
.suc-ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .5s}
@keyframes dash{to{stroke-dashoffset:0}}
.suc-ic .spark{position:absolute;color:var(--gold);animation:sparkle 2.6s ease-in-out infinite}
.suc-ic .s1{top:-8px;left:-16px}.suc-ic .s2{bottom:-4px;right:-18px;animation-delay:-1.2s}
@keyframes sparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}
.success-wrap h1{font-family:var(--font-d);font-size:clamp(28px,3.6vw,42px);color:var(--ink)}
.success-wrap .sub{color:var(--mute);margin-top:10px;font-size:15px}
.sent-chip{display:inline-flex;gap:9px;align-items:center;margin-top:18px;background:#fff;border:1px solid var(--line);
  border-radius:999px;padding:10px 20px;font-size:12.5px;color:var(--mute)}
.sent-chip svg{color:var(--green)}
.suc-grid{display:grid;grid-template-columns:1fr 300px;gap:18px;margin-top:30px;text-align:right}
.suc-details{padding:24px}
.suc-details h4{font-family:var(--font-d);font-size:17px;margin-bottom:8px;color:var(--ink)}
.sd-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13.5px}
.sd-row:last-child{border:none}
.sd-row .k{color:var(--mute);display:flex;gap:8px;align-items:center}
.sd-row .k svg{color:var(--gold-deep)}
.sd-row .v{font-weight:600;color:var(--ink)}
.qr-card{padding:22px;text-align:center}
.qr-card .code{font-family:var(--font-d);color:var(--gold-deep);font-size:17px;letter-spacing:.03em;margin:4px 0 14px;direction:ltr}
.qr-box{width:170px;height:170px;margin:0 auto;border:1.5px solid var(--gold);border-radius:16px;padding:10px;position:relative;background:#fff}
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}
.qr-box img{width:100%;height:100%;object-fit:contain;display:block}
.qr-card small{display:block;margin-top:12px;font-size:11.5px;color:var(--mute)}
.receipt-link{display:inline-flex;margin-top:12px;color:var(--gold-deep);font-size:12px;font-weight:700;text-decoration:underline}
.receipt-wrap{padding-top:24px}
.receipt-grid{grid-template-columns:1fr 1fr}
.receipt-code{direction:ltr;color:var(--gold-deep)}
.receipt-services{display:grid;align-content:start;gap:10px}
.receipt-service{display:grid;gap:4px;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12)}
.receipt-service:last-child{border-bottom:0}
.receipt-service b{font-size:13.5px;color:var(--ink)}
.receipt-service small{font-size:11.5px;color:var(--mute)}
.receipt-service span{font-size:12px;color:var(--gold-deep);font-weight:800}
.wallets{display:flex;gap:8px;justify-content:center;margin-top:14px}
.wallets button{flex:1;display:flex;gap:7px;align-items:center;justify-content:center;padding:10px;border-radius:11px;
  background:var(--ink);color:#fff;font-size:11.5px;transition:var(--dur)}
.wallets button:hover{background:#241E12}
.next-steps{padding:24px;margin-top:18px;text-align:right}
.next-steps h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:24px;text-align:center}
.ns-track{display:grid;grid-template-columns:repeat(4,1fr);position:relative}
.ns-track::before{content:"";position:absolute;top:24px;right:12%;left:12%;height:2px;
  background:repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px)}
.ns{position:relative;text-align:center;padding:0 8px}
.ns .ni{width:48px;height:48px;border-radius:50%;margin:0 auto 12px;display:grid;place-items:center;background:#fff;
  border:1.5px solid var(--line);color:var(--mute);position:relative;z-index:1}
.ns.done .ni{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}
.ns b{font-size:12.5px;color:var(--ink);display:block}
.ns.done b{color:var(--gold-deep)}
.ns small{font-size:10.5px;color:var(--mute);display:block;margin-top:5px;line-height:1.6}
.suc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}
.suc-perks{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:30px}

/* ===== حركات عامة ===== */
.view{display:none}
.view.on{display:block;animation:viewIn .45s var(--ease) both}
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}
.pay-loading.on{display:grid}
.pl-box{background:#fff;border-radius:22px;padding:44px 60px;text-align:center;animation:viewIn .35s var(--ease)}
.pl-ring{width:64px;height:64px;margin:0 auto 20px;border-radius:50%;border:3px solid rgba(198,161,91,.2);
  border-top-color:var(--gold);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.pl-box b{font-family:var(--font-d);font-size:18px;color:var(--ink)}
.pl-box small{display:block;color:var(--mute);margin-top:8px;font-size:12.5px}
.toast{position:fixed;bottom:96px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}
.toast.on{opacity:1;transform:translate(50%,0)}
.toast svg{color:var(--gold-bright)}

@media(max-width:1080px){
  .stage{grid-template-columns:1fr}
  .stage>.panel,.stage>.booking-summary-compact{grid-column:1}
  .summary{position:static;order:-1}
  .branches-grid{grid-template-columns:1fr 1fr}
  .cat-row{grid-template-columns:repeat(5,1fr)}
  .subs{grid-template-columns:repeat(3,1fr)}
  .time-grid{grid-template-columns:1fr}
  .d-grid{grid-template-columns:repeat(2,1fr)} .timeline-cards{display:flex;flex-direction:column;}
  .tl-rail{display:none}.tl::after{display:none}
  .suc-grid{grid-template-columns:1fr}
}
@media(min-width:901px){
  .stage-services-summary .subs{grid-template-columns:repeat(2,minmax(0,1fr))}
  .stage-services-summary>.panel{min-width:0}
}
@media(max-width:900px){
  .stage{grid-template-columns:minmax(0,1fr)!important}
  .stage-services-summary>.summary{order:initial}
}
@media(min-width:901px) and (max-width:1080px){
  .stage:has(.booking-summary-compact.show){grid-template-columns:minmax(0,1fr) 290px!important}
  .stage>.panel{grid-column:1}
  .stage>.booking-summary-compact{grid-column:2;position:sticky;order:initial}
}
@media(max-width:700px){
  nav.links{display:none}
  .step label{display:none}
  .step .bubble{width:42px;height:42px}
  .step .bar{top:21px;right:calc(50% + 28px);width:calc(100% - 56px)}
  .branches-grid,.subs,.mode-grid,.pay-methods,.rewards,.upsell{grid-template-columns:1fr}
  .cat-row{grid-template-columns:repeat(5,1fr);gap:4px;width:100%;max-width:none;margin-bottom:16px}
  .cat{height:74px;border-radius:10px;border-width:1.5px}
  .cat .lbl{font-size:9px;inset-inline:4px;bottom:6px;min-height:24px;display:flex;align-items:flex-end;justify-content:center}
  .cat .cat-name{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.25}
  .cat .chk{width:15px;height:15px;top:5px;left:5px}
  .sub{min-height:112px;padding:12px 12px 11px}
  .sub .top{grid-template-columns:28px minmax(0,1fr) 19px;align-items:center;gap:8px;margin-bottom:5px}
  .sub .top .si{width:28px;height:28px;border-radius:8px}
  .sub .top .si svg{width:16px;height:16px}
  .sub .top b{font-size:12.5px;line-height:1.45;padding-top:0}
  .sub small{min-height:0}
  .slots{grid-template-columns:repeat(2,1fr)}
  .emp-cat{padding:12px 13px 10px;gap:10px}
  .emp-cat .cat-ico{width:40px;height:40px}
  .emp-cat b{font-size:13.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .emp-cat small{font-size:10.5px}
  .emp-list{padding:12px 12px 14px}
  .branch-strip{flex-wrap:wrap;gap:7px}
  .branch-strip .cells{display:none}
  .fb-mid{display:none}
  .trust-row,.suc-perks,.cust-grid{grid-template-columns:1fr 1fr}
  .ns-track{grid-template-columns:1fr 1fr;gap:20px}
  .ns-track::before{display:none}
  .d-grid{grid-template-columns:1fr 1fr}
  .d-cell{border:none;padding:0}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`,Qe=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const te of Object.values($t))for(const t of te.variants||[])t.svcId&&!Qe.some(C=>C.id===t.svcId)&&Qe.push({id:t.svcId,cat:t.cat,name:t.name,desc:t.desc||"",dur:t.dur,price:t.price,hidden:!0});const Tt=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],Dt={class:"wrap stepper",id:"stepperWrap"},jt={class:"steps",id:"steps"},Pt=["data-i"],It={class:"n"},Ht=["onClick"],Nt=["innerHTML"],qt={__name:"BookingStepper",setup(te){const{state:t}=le();function C(D){D<t.step&&(t.step=D)}return(D,z)=>me((a(),o("div",Dt,[e("div",jt,[(a(!0),o(H,null,X(n(Tt),(b,E)=>(a(),o("div",{key:E,class:O(["step",{active:E===n(t).step,done:E<n(t).step}]),"data-i":E},[z[0]||(z[0]=e("div",{class:"bar"},[e("i")],-1)),e("span",It,i(E+1),1),e("span",{class:"bubble",onClick:p=>C(E)},[(a(),o("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:b.ic},null,8,Nt))],8,Ht),e("label",null,i(b.t),1)],10,Pt))),128))])],512)),[[Ie,!n(t).done]])}},Vt={class:"branch-strip"},Rt=["src","alt"],Yt={class:"bi"},Ot={key:2},Ut={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},Gt={class:"cat-row"},Kt=["data-cat","onClick"],Wt=["src","alt"],Qt={class:"lbl"},Xt={class:"cat-name"},Jt={key:0,class:"empty-hint"},Zt={key:1,class:"sub-block"},en={class:"sub-title"},tn={class:"sub-title__main"},nn={class:"tick"},an=["innerHTML"],on={key:0,class:"empty-hint"},rn={key:1,class:"subs"},sn=["data-svc","onClick"],ln={class:"top"},dn={class:"si"},pn=["innerHTML"],cn={class:"foot"},gn={class:"dur"},un={class:"prc"},mn={__name:"ServicesStep",setup(te){const{state:t,hasSvc:C,toggleSvc:D}=le(),{current:z,openPicker:b}=fe(),{state:E}=Oe(),p=c=>it(c,E.lang),g=J([]),A=J(!0);we(async()=>{try{const c=await at();g.value=c!=null&&c.status?c.data||[]:[]}catch{g.value=[]}finally{A.value=!1}});const N=k(()=>g.value.map(c=>({id:c.id,name:Me(c,"name",E.lang),image:ot(c.image)||c.feature_image||null}))),V=k(()=>g.value.find(c=>c.id===t.activeCat)||null),u=k(()=>Me(V.value,"name",E.lang)),v=k(()=>Ge(V.value)),Y=k(()=>{var c;return(((c=V.value)==null?void 0:c.services)||[]).map(f=>({id:f.id,categoryId:V.value.id,categoryNameT:rt(V.value,"name"),get categoryName(){return p(this.categoryNameT)},icon:v.value,get name(){return Me(f,"name",E.lang)},get desc(){return Me(f,"description",E.lang)},dur:f.duration_min,default_price:f.default_price,branches:f.branches,price:zt(f,z.value)}))}),j=c=>t.services.some(f=>f.categoryId===c),x=k(()=>Y.value.filter(c=>C(c.id)).length),F=c=>({"--acc":Ke(c.icon)}),h=c=>He(c.icon);return(c,f)=>{var B;return a(),o(H,null,[f[6]||(f[6]=e("div",{class:"panel-head"},[e("h1",null,"اختر الخدمة التي تناسبك"),e("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),e("div",Vt,[(B=n(z))!=null&&B.image?(a(),o("img",{key:0,src:n(z).image,alt:n(z).name},null,8,Rt)):P("",!0),e("span",Yt,[n(z)?(a(),o(H,{key:0},[f[1]||(f[1]=L("مكان التنفيذ: ",-1)),e("b",null,i(n(z).name),1)],64)):(a(),o(H,{key:1},[L("يرجى اختيار الفرع لعرض أسعار الخدمات وحجز موعدك")],64)),e("button",{type:"button",class:"branch-picker-link",onClick:f[0]||(f[0]=S=>n(b)())},i(n(z)?"تغيير الفرع":"اختيار الفرع"),1),n(z)?(a(),o("small",Ot,i(n(z).address),1)):P("",!0)])]),A.value?(a(),o("div",Ut,[se(Ne,{height:"64px","border-radius":"12px"}),se(Ne,{height:"92px","border-radius":"12px"})])):(a(),o(H,{key:1},[e("div",Gt,[(a(!0),o(H,null,X(N.value,S=>(a(),o("div",{key:S.id,class:O(["cat",{sel:n(t).activeCat===S.id,"has-picks":j(S.id)}]),"data-cat":S.id,onClick:q=>n(t).activeCat=S.id},[S.image?(a(),o("img",{key:0,src:S.image,alt:S.name},null,8,Wt)):P("",!0),f[2]||(f[2]=e("span",{class:"chk"},[e("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),e("span",Qt,[e("span",Xt,i(S.name),1)])],10,Kt))),128))]),n(t).activeCat?(a(),o("div",Zt,[e("div",en,[e("span",tn,[L(" خدمات "+i(u.value)+" ",1),e("span",nn,[(a(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(He)(v.value)},null,8,an))])]),e("small",null,i(x.value?x.value+" مختارة":"اختر خدمة أو أكثر"),1)]),Y.value.length?(a(),o("div",rn,[(a(!0),o(H,null,X(Y.value,S=>(a(),o("div",{key:S.id,class:O(["sub",{sel:n(C)(S.id)}]),"data-svc":S.id,style:Be(F(S)),onClick:q=>n(D)(S)},[se(Mt,{type:"service",id:S.id},null,8,["id"]),e("div",ln,[e("span",dn,[(a(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:h(S)},null,8,pn))]),e("b",null,i(S.name),1),f[4]||(f[4]=e("span",{class:"chk"},[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1))]),e("small",null,i(S.desc),1),e("div",cn,[e("span",gn,"🕐 "+i(S.dur)+" دقيقة",1),e("span",un,[L(i(n(R)(S.price))+" ",1),f[5]||(f[5]=e("small",null,"ر.س",-1))])])],14,sn))),128))])):(a(),o("div",on,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(a(),o("div",Jt,[...f[3]||(f[3]=[e("b",null,"اختر خدمة لعرض تفاصيلها",-1),L("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64)}}},xn=Xe(mn,[["__scopeId","data-v-55cc00d5"]]),hn={class:"mode-grid"},fn=["aria-pressed"],bn=["aria-pressed"],vn={key:0,class:"emp-section emp-section--groups"},yn={class:"emp-cat emp-cat--group"},wn={class:"cat-ico"},kn=["innerHTML"],_n={class:"emp-cat__info"},$n={class:"emp-cat__services"},zn={key:0,class:"empty-hint"},Mn={key:1,class:"empty-hint"},Cn={key:2,class:"emp-list emp-list--groups"},Sn=["onClick"],Fn=["onClick"],Bn={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},Ln={__name:"EmployeeStep",setup(te){const{state:t,selSvcs:C,setEmployee:D}=le(),{current:z}=fe(),b=Fe({}),E=Fe({}),p=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],g=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],A=k(()=>{const m=new Map;return C.value.forEach(d=>{const y=String(d.categoryId??d.categoryName??d.id);m.has(y)||m.set(y,{id:y,name:d.categoryName||d.name,icon:d.icon||Ge(d.categoryId),services:[]}),m.get(y).services.push(d)}),[...m.values()]});function N(m){return[m.first_name,m.last_name].filter(Boolean).join(" ")||m.username||"موظف"}function V(m){return{"--acc":Ke(m.icon)}}function u(m){return`${m.services.length} ${m.services.length===1?"خدمة":"خدمات"}`}function v(m){return m.services.map(d=>d.name).join("، ")}function Y(m){const d=m.services.map(Q=>b[Q.id]);if(!d.length||d.some(Q=>!Array.isArray(Q)))return[];const[y,...T]=d,U=y.filter(Q=>T.every(G=>G.some(pe=>String(pe.id)===String(Q.id))));return[...new Map(U.map(Q=>[String(Q.id),Q])).values()]}function j(m){return m.services.some(d=>E[d.id]||!Array.isArray(b[d.id]))}function x(m){const d=m.services.map(T=>t.emp[T.id]).filter(Boolean);if(d.length!==m.services.length)return null;const y=d[0];return d.every(T=>String(T.id)===String(y.id))?y:null}function F(m,d){var y;return String(((y=x(m))==null?void 0:y.id)??"")===String(d.id??"")}function h(m){const d=m.services.map(y=>C.value.findIndex(T=>String(T.id)===String(y.id))).filter(y=>y>=0);return d.length?Math.min(...d):-1}function c(m){const d=h(m);d!==-1&&C.value.slice(d).forEach(y=>{delete t.time[y.id]})}function f(m,d,{clearTimes:y=!0}={}){m.services.forEach(T=>D(T.id,d)),y&&c(m)}function B(){t.mode==="auto"&&A.value.forEach(m=>{Y(m).length&&m.services.forEach(y=>{t.staffOptions[y.id]=b[y.id]||[],D(y.id,{id:null,name:"اختيار تلقائي"})})})}function S(m){const d=t.mode!==m;t.mode=m,d&&(t.time={},t.emp={}),B()}function q(m,d){t.mode="manual",f(m,d)}async function K(m){var d,y;if(!b[m.id]){E[m.id]=!0;try{const T=(d=z.value)!=null&&d.home?0:(y=z.value)==null?void 0:y.id,U=await ft({branchId:T,serviceId:m.id}),Q=(Array.isArray(U)?U:[]).map(G=>({id:G.id,name:N(G)}));b[m.id]=[...new Map(Q.map(G=>[String(G.id),G])).values()],t.staffOptions[m.id]=b[m.id],B()}catch{b[m.id]=[]}finally{E[m.id]=!1}}}function Z(){C.value.forEach(K)}return we(Z),ae(()=>C.value.map(m=>m.id),Z),ae(()=>t.mode,B),(m,d)=>(a(),o(H,null,[d[14]||(d[14]=e("div",{class:"panel-head"},[e("h1",null,"اختر الموظف"),e("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),e("div",hn,[e("div",{class:O(["mode dark",{sel:n(t).mode==="auto"}]),role:"button",tabindex:"0","aria-pressed":n(t).mode==="auto",onClick:d[0]||(d[0]=y=>S("auto")),onKeydown:[d[1]||(d[1]=Ce(y=>S("auto"),["enter"])),d[2]||(d[2]=Ce(Se(y=>S("auto"),["prevent"]),["space"]))]},[d[7]||(d[7]=ye('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),e("ul",null,[(a(),o(H,null,X(p,(y,T)=>e("li",{key:T},[d[6]||(d[6]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[e("path",{d:"M20 6L9 17l-5-5"})],-1)),L(" "+i(y),1)])),64))])],42,fn),e("div",{class:O(["mode",{sel:n(t).mode==="manual"}]),role:"button",tabindex:"0","aria-pressed":n(t).mode==="manual",onClick:d[3]||(d[3]=y=>S("manual")),onKeydown:[d[4]||(d[4]=Ce(y=>S("manual"),["enter"])),d[5]||(d[5]=Ce(Se(y=>S("manual"),["prevent"]),["space"]))]},[d[9]||(d[9]=ye('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),e("ul",null,[(a(),o(H,null,X(g,(y,T)=>e("li",{key:T},[d[8]||(d[8]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[e("path",{d:"M20 6L9 17l-5-5"})],-1)),L(" "+i(y),1)])),64))])],42,bn)]),n(t).mode==="manual"?(a(),o("div",vn,[(a(!0),o(H,null,X(A.value,y=>(a(),o("div",{key:y.id,class:"emp-row emp-row--group",style:Be(V(y))},[e("div",yn,[e("span",wn,[(a(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(He)(y.icon)},null,8,kn))]),e("span",_n,[e("b",null,i(y.name),1),e("small",null,i(u(y)),1),e("span",$n,i(v(y)),1)])]),j(y)?(a(),o("div",zn,[se(Ne,{height:"44px","border-radius":"8px"})])):Y(y).length?(a(),o("div",Cn,[e("button",{type:"button",class:"emp any",onClick:Se(T=>q(y,Y(y)[0]),["stop"])},[...d[10]||(d[10]=[ye('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,Sn),(a(!0),o(H,null,X(Y(y),T=>(a(),o("button",{key:T.id,type:"button",class:O(["emp",{sel:F(y,T)}]),onClick:Se(U=>q(y,T),["stop"])},[d[11]||(d[11]=e("span",{class:"chk"},[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),d[12]||(d[12]=e("span",{class:"av","aria-hidden":"true"},null,-1)),e("b",null,i(T.name),1)],10,Fn))),128))])):(a(),o("div",Mn,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):P("",!0),n(t).mode==="auto"?(a(),o("div",Bn,[...d[13]||(d[13]=[ye('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):P("",!0)],64))}},En={class:"card branch-strip"},An={class:"cells"},Tn={class:"cell"},Dn={class:"cell"},jn={class:"loyalty-preview","aria-live":"polite"},Pn={key:0,"data-no-i18n":"",style:{color:"#26714d"}},In={class:"card cal"},Hn={class:"cal-head"},Nn={class:"cal-cells"},qn=["disabled","onClick"],Vn={class:"dow"},Rn={class:"dnum"},Yn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},On={class:"date-line"},Un={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},Gn={class:"periods booking-periods"},Kn={key:1,class:"empty-hint"},Wn={key:2,class:"empty-hint"},Qn={key:3,class:"empty-hint"},Xn={key:4,class:"slots initial-slots"},Jn=["onClick"],Zn={key:0,"data-no-i18n":"",style:{display:"block",color:"#26714d","font-size":"11px","white-space":"normal"}},ea={key:0,class:"session-plan"},ta={class:"plan-track"},na={key:0,class:"plan-gap"},aa={class:"plan-icon"},oa=["innerHTML"],ra={class:"t"},ia={key:0,class:"plan-note plan-note--pending"},sa={key:1,class:"plan-note plan-note--warn"},la={key:2,class:"plan-note"},da={__name:"TimeStep",setup(te){const{current:t}=fe(),{state:C}=Oe(),{bonus:D}=Ct(),z=r=>{var s,l;return!((s=t.value)!=null&&s.home)&&p.date?D((l=t.value)==null?void 0:l.id,pe(p.date),r):0},b=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],E=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:p,selSvcs:g,totalDur:A,priceParts:N,setEmployee:V,setTime:u}=le(),v=J(5),Y=k(()=>Math.floor(N.value.total/100)*v.value),j=k(()=>g.value.reduce((r,s)=>r+z(p.time[s.id]),0)),x=new Date;x.setHours(0,0,0,0);const F=J(new Date(x)),h=J("all"),c=Fe({}),f=Fe({}),B=Fe({}),S=new Map,q=new Map;function K(r,s,l){const M=[r,s.id,l].join(":");return S.has(M)||S.set(M,bt({date:r,staffId:s.id,durationMin:l}).finally(()=>S.delete(M))),S.get(M)}const Z=k(()=>Array.from({length:7},(r,s)=>{const l=new Date(F.value);return l.setDate(l.getDate()+s),l}));k(()=>F.value.getTime()<=x.getTime());const m=k(()=>{const r=Z.value;return r[0].getMonth()===r[6].getMonth()?`${r[0].getDate()} - ${r[6].getDate()} ${E[r[0].getMonth()]}`:`${r[0].getDate()} ${E[r[0].getMonth()]} - ${r[6].getDate()} ${E[r[6].getMonth()]}`}),d=r=>r<x,y=r=>p.date&&r.getTime()===p.date.getTime(),T=k(()=>{const r=new Map;return g.value.forEach(s=>{const l=String(s.categoryId??s.categoryName??s.id);r.has(l)||r.set(l,{id:l,name:s.categoryName||s.name,icon:s.icon||Ge(s.categoryId),services:[]}),r.get(l).services.push(s)}),[...r.values()]}),U=k(()=>g.value),Q=k(()=>U.value.filter(s=>p.time[s.id]).sort((s,l)=>ne(p.time[s.id])-ne(p.time[l.id]))[0]||[...U.value].sort((s,l)=>(ne(re(c[s.id])[0])??1/0)-(ne(re(c[l.id])[0])??1/0))[0]||null);k(()=>T.value[0]||null);const G=k(()=>Q.value?p.time[Q.value.id]:"");function pe(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function ne(r){if(!r||typeof r!="string")return null;const[s,l]=r.split(":").map(Number);return!Number.isFinite(s)||!Number.isFinite(l)?null:s*60+l}function ce(r){if(!Number.isFinite(r))return"";const s=1440,l=(Math.round(r)%s+s)%s;return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`}function re(r){return[...new Set((Array.isArray(r)?r:[]).filter(s=>ne(s)!==null))].sort((s,l)=>ne(s)-ne(l))}function I(r,{apply:s=!1}={}){const l=window.SamiBookingJourney.schedule(U.value,M=>re(c[M.id]),r);return s&&(p.time={},l.rows.forEach(M=>{var ee;u(M.service.id,M.start),p.mode==="auto"&&((ee=f[M.service.id])!=null&&ee[M.start])&&V(M.service.id,f[M.service.id][M.start])})),l}function _(){!G.value||!Ve.value||I(G.value,{apply:!0})}function $(r){I(r,{apply:!0})}function w(r){return{"--acc":Ke(r.icon)}}function W(r){return r.services.reduce((s,l)=>s+(Number(l.dur)||0),0)}function oe(r){const s=r.services.map(M=>p.emp[M.id]).filter(Boolean);if(!s.length)return null;const l=s[0];return s.every(M=>String(M.id)===String(l.id)),l}function ge(r){return`${r.services.length} ${r.services.length===1?"خدمة":"خدمات"}`}function Le(r){d(r)||(p.date=r,p.time={},Object.keys(c).forEach(s=>{delete c[s]}))}async function be(r){var ee;const s=p.emp[r.id];if(!p.date||!s){delete c[r.id];return}const l=pe(p.date),M=(q.get(r.id)||0)+1;q.set(r.id,M),B[r.id]=!0;try{const ve=p.mode==="auto"?p.staffOptions[r.id]||[]:[s],je=await Promise.all(ve.filter(ie=>(ie==null?void 0:ie.id)!=null).map(async ie=>({candidate:ie,times:await K(l,ie,r.dur).catch(()=>[])}))),ze={};je.forEach(({candidate:ie,times:nt})=>{re(nt).forEach(We=>{ze[We]||(ze[We]=ie)})});const Pe=Object.keys(ze);q.get(r.id)===M&&p.date&&pe(p.date)===l&&(p.mode==="auto"||((ee=p.emp[r.id])==null?void 0:ee.id)===s.id)&&(c[r.id]=re(Pe),f[r.id]=ze,_())}catch{if(q.get(r.id)!==M)return;c[r.id]=[],_()}finally{q.get(r.id)===M&&(B[r.id]=!1,_())}}ae(()=>p.date,()=>{h.value="all",g.value.forEach(be)}),ae(()=>g.value.map(r=>{var s;return`${r.id}:${r.dur}:${p.mode}:${p.mode==="auto"?(p.staffOptions[r.id]||[]).map(l=>l.id).join(","):(s=p.emp[r.id])==null?void 0:s.id}`}).join("|"),()=>g.value.forEach(be)),we(async()=>{var r;g.value.forEach(be);try{const s=await tt();v.value=Math.max(Number((r=s==null?void 0:s.data)==null?void 0:r.points_per_100)||5,1)}catch{}});const Ee=k(()=>p.date?`${b[p.date.getDay()]} ${p.date.getDate()} ${E[p.date.getMonth()]} ${p.date.getFullYear()}`:"اختر تاريخًا من التقويم"),ke=k(()=>U.value.some(r=>B[r.id]||!Array.isArray(c[r.id]))),_e=k(()=>re(U.value.flatMap(r=>c[r.id]||[]))),Ae=k(()=>_e.value.filter(r=>{const s=ne(r);return h.value==="am"?s<720:h.value==="pm"?s>=720:!0})),Ve=k(()=>!!p.date&&U.value.every(r=>Array.isArray(c[r.id])&&!B[r.id])),Te=k(()=>!!G.value&&U.value.some(r=>B[r.id]||!Array.isArray(c[r.id]))),$e=k(()=>G.value?U.value.find(r=>!p.time[r.id]):null),De=k(()=>{const r=[];let s=null;return window.SamiBookingJourney.groupsByTime(T.value,p.time,g.value).forEach(l=>{const M=l.services.map(ie=>ne(p.time[ie.id])),ee=M.every(ie=>ie!==null),ve=M[0];if(!ee){r.push({type:"group",key:`group-${l.key}`,group:l,name:l.name,icon:l.icon,style:w(l),duration:W(l),services:l.services,employee:oe(l),pending:!0});return}s!==null&&ve>s&&r.push({type:"gap",key:`gap-${r.length}`,start:ce(s),end:ce(ve),duration:ve-s});const je=l.services[l.services.length-1],Pe=ne(p.time[je.id])+(Number(je.dur)||0);r.push({type:"group",key:`group-${l.key}`,group:l,name:l.name,icon:l.icon,style:w(l),start:ce(ve),end:ce(Pe),duration:W(l),services:l.services,employee:oe(l),pending:!1}),s=Pe}),r}),Re=k(()=>{const r=De.value.filter(l=>l.type==="group"&&!l.pending),s=r[r.length-1];return(s==null?void 0:s.end)||""});return(r,s)=>(a(),o(H,null,[s[15]||(s[15]=e("div",{class:"panel-head"},[e("h1",null,"اختر وقت بداية الجلسة"),e("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),e("div",En,[s[5]||(s[5]=e("div",{class:"bi"},[e("b",null,"ملخص جلستك"),e("small",null,"قبل اختيار الوقت")],-1)),e("div",An,[e("div",Tn,[e("b",null,i(n(g).length),1),s[3]||(s[3]=L("الخدمات",-1))]),e("div",Dn,[e("b",null,i(n(xe)(n(A))),1),s[4]||(s[4]=L("المدة الإجمالية",-1))])])]),e("div",jn,[s[8]||(s[8]=e("h3",null,[e("span",{"aria-hidden":"true"},"✨"),L(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),e("p",null,[s[6]||(s[6]=L("ستحصل على ",-1)),e("b",null,i(n(R)(Y.value))+" نقطة ولاء",1),s[7]||(s[7]=L(" عند إتمام هذا الحجز.",-1))]),j.value?(a(),o("p",Pn,i(n(C).lang==="en"?`Plus ${j.value} quiet hours points when the eligible bookings are completed.`:`بالإضافة إلى ${j.value} نقطة أوقات هدوء عند اكتمال الحجوزات المؤهلة.`),1)):P("",!0),e("strong",null,"يمنحك نظام الولاء "+i(n(R)(v.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),e("div",In,[e("div",Hn,[e("b",null,i(m.value),1)]),e("div",Nn,[(a(!0),o(H,null,X(Z.value,(l,M)=>(a(),o("button",{key:M,disabled:d(l),class:O({sel:y(l),avail:!d(l)}),onClick:ee=>Le(l)},[e("span",Vn,i(b[l.getDay()].slice(0,3)),1),e("span",Rn,i(l.getDate()),1)],10,qn))),128))]),s[9]||(s[9]=e("div",{class:"cal-legend"},[e("span",null,[e("i",{style:{background:"var(--green)"}}),L(" تتوفر مواعيد")]),e("span",null,[e("i",{style:{background:"#D8D0BC"}}),L(" غير متاح")])],-1))]),n(p).date?(a(),o(H,{key:1},[e("div",On,"📅 "+i(Ee.value),1),e("div",Un,[s[11]||(s[11]=e("h4",null,[L("وقت بداية الجلسة "),e("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),P("",!0),e("div",Gn,[e("button",{class:O(["period",{sel:h.value==="all"}]),onClick:s[0]||(s[0]=l=>h.value="all")},"🗓️ كل اليوم",2),e("button",{class:O(["period",{sel:h.value==="am"}]),onClick:s[1]||(s[1]=l=>h.value="am")},"☀️ صباحًا",2),e("button",{class:O(["period",{sel:h.value==="pm"}]),onClick:s[2]||(s[2]=l=>h.value="pm")},"🌇 مساءً",2)]),s[12]||(s[12]=e("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),ke.value||Q.value&&!Array.isArray(c[Q.value.id])?(a(),o("div",Kn,[se(Ne,{height:"44px","border-radius":"8px"})])):_e.value.length?Ae.value.length?(a(),o("div",Xn,[(a(!0),o(H,null,X(Ae.value,l=>(a(),o("button",{key:l,class:O(["slot",{sel:G.value===l}]),onClick:M=>$(l)},[L(i(n(de)(l))+" ",1),z(l)?(a(),o("small",Zn,i(n(C).lang==="en"?`Quiet hours: +${z(l)} points on completion`:`وقت هدوء: +${z(l)} نقطة عند إكمال الحجز`),1)):P("",!0)],10,Jn))),128))])):(a(),o("div",Qn,"لا توجد أوقات في هذه الفترة")):(a(),o("div",Wn,"لا توجد أوقات متاحة لهذا اليوم"))]),G.value?(a(),o("div",ea,[s[14]||(s[14]=e("h4",null,[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),L(" خطة تنفيذ الجلسة ")],-1)),e("div",ta,[(a(!0),o(H,null,X(De.value,l=>{var M;return a(),o(H,{key:l.key},[l.type==="gap"?(a(),o("div",na,[s[13]||(s[13]=e("span",null,"فاصل انتظار",-1)),e("b",null,i(n(de)(l.start))+" - "+i(n(de)(l.end)),1),e("small",null,i(n(xe)(l.duration)),1)])):(a(),o("div",{key:1,class:O(["plan-item plan-item--group",{pending:l.pending}]),style:Be(l.style)},[e("span",aa,[(a(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(He)(l.icon)},null,8,oa))]),e("b",null,i(l.name),1),e("small",null,"مع "+i(((M=l.employee)==null?void 0:M.name)||"-"),1),e("span",ra,i(l.pending?"بانتظار وقت متاح":`${n(de)(l.start)} - ${n(de)(l.end)}`),1),e("small",null,i(ge(l.group))+" · "+i(n(xe)(l.duration)),1)],6))],64)}),128))]),Te.value?(a(),o("div",ia,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):$e.value?(a(),o("div",sa,"لم نجد وقتًا متاحًا لـ "+i($e.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(a(),o("div",la,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+i(n(de)(Re.value))+".",1))])):P("",!0)],64)):(a(),o("div",Yn,[...s[10]||(s[10]=[e("b",null,"ابدأ باختيار التاريخ",-1),L("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},pa={key:0,role:"status"},ca={key:1,role:"status"},ga={__name:"HomeVisitMap",setup(te){const{state:t}=le(),C=J(null),D=J(""),z=J(!0);let b,E=!1;const p=g=>{D.value=g.detail,z.value=!1};return we(async()=>{window.addEventListener("sami-map-error",p);try{if(!he.maps_key)throw new Error("الخريطة غير متاحة حالياً. يمكنك استخدام موقعي الحالي لتحديد عنوان الزيارة.");if(window.SamiHomeMap||await new Promise((g,A)=>{const N=document.createElement("script");N.src=st("/js/home-service-map.js"),N.onload=g,N.onerror=()=>A(new Error("تعذر تحميل الخريطة. يمكنك استخدام موقعي الحالي.")),document.head.appendChild(N)}),E)return;if(b=await window.SamiHomeMap.create(C.value,{key:he.maps_key,latitude:he.latitude,longitude:he.longitude,radiusKm:he.radius_km,onSelect:g=>{t.homeLatitude=g.latitude,t.homeLongitude=g.longitude}}),E){b==null||b.destroy();return}b==null||b.select(t.homeLatitude,t.homeLongitude)}catch(g){D.value=g.message}finally{z.value=!1}}),ae(()=>[t.homeLatitude,t.homeLongitude],([g,A])=>b==null?void 0:b.select(g,A)),Je(()=>{E=!0,b==null||b.destroy(),window.removeEventListener("sami-map-error",p)}),(g,A)=>(a(),o("div",null,[A[0]||(A[0]=e("p",null,"اضغط على الخريطة لتحديد موقع الزيارة داخل نطاق التغطية المظلل.",-1)),z.value?(a(),o("p",pa,"جارٍ تحميل الخريطة...")):P("",!0),D.value?(a(),o("p",ca,i(D.value),1)):P("",!0),me(e("div",{ref_key:"element",ref:C,"aria-label":"خريطة موقع الزيارة ونطاق التغطية",style:{height:"340px",width:"100%","border-radius":"12px"}},null,512),[[Ie,!D.value]])]))}},ua={class:"card",style:{padding:"20px","margin-bottom":"20px"},dir:"rtl"},ma=["value"],xa=["href"],ha={key:1,role:"alert"},fa={key:2,role:"alert"},ba={__name:"HomeVisitLocation",setup(te){const{state:t,homeFee:C,homeCovered:D}=le(),{state:z}=Oe(),b=J("");function E(){if(b.value="",!navigator.geolocation){b.value="تحديد الموقع غير متاح؛ أدخل الإحداثيات.";return}navigator.geolocation.getCurrentPosition(p=>{t.homeLatitude=p.coords.latitude,t.homeLongitude=p.coords.longitude},()=>{b.value="تعذر تحديد الموقع. اسمح بالوصول للموقع أو أدخل الإحداثيات."})}return(p,g)=>(a(),o("section",ua,[g[7]||(g[7]=e("h3",null,"عنوان الزيارة المنزلية",-1)),e("label",null,[g[4]||(g[4]=L("المدينة ",-1)),me(e("select",{"onUpdate:modelValue":g[0]||(g[0]=A=>n(t).homeCityId=A),required:""},[g[3]||(g[3]=e("option",{value:"",disabled:""},"اختر المدينة",-1)),(a(!0),o(H,null,X(n(he).cities,A=>(a(),o("option",{key:A.id,value:A.id},i(n(Me)(A,"name",n(z).lang))+" — "+i(A.home_service_fee)+" ر.س",9,ma))),128))],512),[[lt,n(t).homeCityId]])]),e("p",null,"رسوم الزيارة: "+i(n(C))+" ر.س (قبل الضريبة)",1),e("button",{type:"button",onClick:E},"استخدام موقعي الحالي"),e("label",null,[g[5]||(g[5]=L("خط العرض ",-1)),me(e("input",{"onUpdate:modelValue":g[1]||(g[1]=A=>n(t).homeLatitude=A),type:"number",step:"any",min:"-90",max:"90",required:""},null,512),[[Ye,n(t).homeLatitude]])]),e("label",null,[g[6]||(g[6]=L("خط الطول ",-1)),me(e("input",{"onUpdate:modelValue":g[2]||(g[2]=A=>n(t).homeLongitude=A),type:"number",step:"any",min:"-180",max:"180",required:""},null,512),[[Ye,n(t).homeLongitude]])]),n(t).homeLatitude!==""&&n(t).homeLongitude!==""?(a(),o("a",{key:0,href:`https://maps.google.com/?q=${Number(n(t).homeLatitude)},${Number(n(t).homeLongitude)}`,target:"_blank",rel:"noopener"},"عرض موقع الزيارة على خرائط جوجل",8,xa)):P("",!0),se(ga),e("p",null,"التغطية حتى "+i(n(he).radius_km)+" كم من المركز الموضح.",1),n(D)?P("",!0):(a(),o("p",ha,"اختر المدينة وحدد موقعاً داخل نطاق التغطية للمتابعة.")),b.value?(a(),o("p",fa,i(b.value),1)):P("",!0)]))}},va={class:"card detail-card"},ya={class:"d-grid"},wa={class:"d-cell"},ka={class:"d-cell"},_a={class:"d-cell"},$a={class:"d-cell"},za={class:"card detail-card"},Ma={class:"timeline-cards"},Ca={class:"tl-main"},Sa={class:"with"},Fa={class:"tl-time"},Ba={class:"tm"},La={class:"dr"},Ea={key:1,class:"card detail-card products-detail-card"},Aa={class:"upsell"},Ta=["src","alt"],Da={class:"inf"},ja={class:"p"},Pa=["disabled","onClick"],Ia={__name:"ConfirmStep",setup(te){const{state:t,selSvcs:C,totalDur:D}=le(),{current:z}=fe(),{user:b,isAuthenticated:E}=Ue(),{state:p,products:g,addToCart:A,setQty:N}=Ze();we(()=>{E.value&&b.value&&!t.cust.name&&(t.cust.name=[b.value.first_name,b.value.last_name].filter(Boolean).join(" "),t.cust.phone=b.value.mobile||"",t.cust.mail=b.value.email||"")});const V=k(()=>t.date?qe(t.date):""),u=k(()=>{const F=new Map;C.value.forEach(c=>{const f=String(c.categoryId??c.categoryName??c.id);F.has(f)||F.set(f,{id:f,name:c.categoryName||c.name,services:[]}),F.get(f).services.push(c)});const h=c=>{if(!c)return Number.MAX_SAFE_INTEGER;const[f,B]=String(c).split(":").map(Number);return Number.isFinite(f)&&Number.isFinite(B)?f*60+B:Number.MAX_SAFE_INTEGER};return window.SamiBookingJourney.groupsByTime([...F.values()],t.time,C.value).map(c=>{var S;const f=[...c.services].sort((q,K)=>h(t.time[q.id])-h(t.time[K.id])),B=[...new Set(f.map(q=>{var K;return(K=t.emp[q.id])==null?void 0:K.name}).filter(Boolean))];return{...c,services:f,start:t.time[(S=f[0])==null?void 0:S.id]||"",duration:f.reduce((q,K)=>q+(Number(K.dur)||0),0),price:f.reduce((q,K)=>q+(Number(K.price)||0),0),employees:B}}).sort((c,f)=>h(c.start)-h(f.start))}),v=J([]);ae(()=>g.value.map(F=>`${F.id}:${F.stockQty}`).join(","),()=>{v.value=Lt(g.value).map(F=>F.id)},{immediate:!0});const Y=k(()=>v.value.map(F=>g.value.find(h=>h.id===F)).filter(Boolean).map(F=>({id:F.id,name:F.n,desc:F.d,price:F.pr,img:F.image||F.img||"/images/generated/products/care-set-card-hq.png"})));function j(F){return F.id!=null&&!!p.cart[F.id]}function x(F){F.id!=null&&(j(F)?N(F.id,0):A(F.id))}return(F,h)=>{var c,f;return et("RouterLink"),a(),o(H,null,[se(St,{booking:""}),(c=n(z))!=null&&c.home?(a(),ue(ba,{key:0})):P("",!0),h[20]||(h[20]=e("div",{class:"panel-head"},[e("h1",null,"تأكيد الحجز"),e("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),e("div",va,[h[8]||(h[8]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e("path",{d:"M16 2v4M8 2v4M3 10h18"})]),L(" تفاصيل الموعد")],-1)),e("div",ya,[e("div",wa,[h[4]||(h[4]=e("small",null,"📍 الفرع",-1)),e("b",null,i(((f=n(z))==null?void 0:f.name)||"—"),1)]),e("div",ka,[h[5]||(h[5]=e("small",null,"📅 التاريخ",-1)),e("b",null,i(V.value),1)]),e("div",_a,[h[6]||(h[6]=e("small",null,"⏱️ المدة الإجمالية",-1)),e("b",null,i(n(xe)(n(D))),1)]),e("div",$a,[h[7]||(h[7]=e("small",null,"✂️ عدد الخدمات",-1)),e("b",null,i(n(C).length),1)])])]),e("div",za,[h[9]||(h[9]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 7v5l3 3"})]),L(" تفاصيل الجلسة")],-1)),e("div",Ma,[(a(!0),o(H,null,X(u.value,B=>(a(),o("div",{key:B.key,class:"tl"},[e("div",Ca,[e("b",null,i(B.name),1),e("div",Sa,"مع "+i(B.employees.join("، ")||"—"),1)]),e("div",Fa,[e("span",Ba,i(n(de)(B.start)),1),e("span",La,i(B.duration)+" دقيقة · "+i(n(R)(B.price))+" ر.س",1)])]))),128))])]),Y.value.length?(a(),o("div",Ea,[h[10]||(h[10]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),L(" منتجات مناسبة لجلستك")],-1)),e("div",Aa,[(a(!0),o(H,null,X(Y.value,B=>(a(),o("div",{key:B.id||B.name,class:O(["up",{added:j(B)}])},[e("img",{src:B.img,alt:B.name,loading:"lazy"},null,8,Ta),e("span",Da,[e("b",null,i(B.name),1),e("small",null,i(B.desc),1),e("span",ja,i(n(R)(B.price))+" ر.س",1)]),e("button",{type:"button",disabled:B.id==null,onClick:S=>x(B)},i(j(B)?"✓ أضيف":"إضافة"),9,Pa)],2))),128))])])):P("",!0),P("",!0)],64)}}},Ha={class:"card detail-card"},Na={key:0,class:"cod-deposit-alert"},qa={class:"card detail-card payment-rewards-card"},Va={key:0,role:"status"},Ra={key:1,role:"alert"},Ya={class:"rewards"},Oa={class:"gift-code-box"},Ua={class:"rt"},Ga={class:"ri"},Ka=["innerHTML"],Wa=["max","value","disabled"],Qa={key:0,class:"hint"},Xa={class:"rt"},Ja={class:"ri"},Za=["innerHTML"],eo=["max","value","disabled"],to={class:"hint"},no={class:"coupon"},ao={class:"ci"},oo=["innerHTML"],ro=["onKeydown"],io=["disabled"],so={class:"reward-total"},lo={key:0},po={class:"trust-row"},co={class:"ti"},go=["innerHTML"],uo={__name:"PayStep",setup(te){const{state:t,priceParts:C,selSvcs:D,pointValue:z,couponDiscount:b,walletDiscount:E,loyaltyPointsUsed:p,loyaltyDiscount:g,payableTotal:A}=le(),N=J(!1);let V=0;const{token:u}=Ue(),v=J(!1),Y=J(!1);let j=0;async function x(){const I=++j;if(t.walletBalance=null,t.loyaltyPoints=null,Y.value=!1,v.value=!!u.value,!!u.value)try{const _=await Bt();if(I!==j)return;t.walletBalance=_.wallet,t.loyaltyPoints=_.loyalty_points}catch{I===j&&(Y.value=!0)}finally{I===j&&(v.value=!1)}}ae(u,x,{immediate:!0}),Je(()=>{j++});async function F(I){await x(),(I==null?void 0:I.type)==="value"&&!t.rewards.useWallet&&Q()}we(async()=>{var I;try{const _=await tt();t.pointValue=Number(((I=_==null?void 0:_.data)==null?void 0:I.point_value)??.5)||.5}catch{}});const h=k(()=>Math.max(Number(t.walletBalance)||0,0)),c=k(()=>Math.max(parseInt(t.loyaltyPoints,10)||0,0)),f=k(()=>Math.max(C.value.total-b.value,0)),B=k(()=>Math.min(E.value,f.value)),S=k(()=>Math.max(C.value.total-b.value-B.value,0)),q=k(()=>Math.min(c.value,Math.ceil(S.value/z.value))),K=k(()=>B.value>0||p.value>0),Z=k(()=>Math.round((C.value.total*.3+Number.EPSILON)*100)/100),m=k(()=>h.value>=Z.value),d=k(()=>dt.methods({total:C.value.total,walletBalance:h.value,payable:A.value,hasRewards:K.value}));ae(d,I=>{t.pay&&!I.some(_=>_.id===t.pay&&_.enabled)&&(t.pay=null)},{immediate:!0}),ae([m,K,A],()=>{K.value&&t.pay==="cod"?t.pay=A.value>0?"card":null:!m.value&&t.pay==="cod"&&(t.pay=null)});const y=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],T={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function U(I,_){const $=Number(I);return Number.isFinite($)?Math.max(0,Math.min($,_)):0}function Q(){t.walletBalance!==null&&(t.rewards.useWallet=!t.rewards.useWallet,t.rewards.useWallet?t.rewards.walletAmount=U(t.rewards.walletAmount||f.value,Math.min(h.value,f.value)):t.rewards.walletAmount=0)}function G(I){t.rewards.walletAmount=U(I,Math.min(h.value,f.value)),t.rewards.useWallet=t.rewards.walletAmount>0}function pe(){t.loyaltyPoints!==null&&(t.rewards.useLoyalty=!t.rewards.useLoyalty,t.rewards.useLoyalty?t.rewards.loyaltyPoints=Math.min(t.rewards.loyaltyPoints||q.value,q.value):t.rewards.loyaltyPoints=0)}function ne(I){const _=Math.max(0,Math.min(parseInt(I,10)||0,q.value));t.rewards.loyaltyPoints=_,t.rewards.useLoyalty=_>0}async function ce(){const I=t.rewards.couponCode.trim();if(!I){t.rewards.couponStatus="bad",t.rewards.couponMessage="أدخل كود الخصم أولًا";return}N.value=!0;const _=++V;try{const $=await yt(I,D.value.map(W=>W.id));if(_!==V||t.rewards.couponCode.trim()!==I)return;if(!($!=null&&$.valid)){t.rewards.couponApplied="",t.rewards.couponDiscount=0,t.rewards.couponStatus="bad",t.rewards.couponMessage=($==null?void 0:$.message)||"كود الخصم غير صالح";return}const w=Math.max(0,Number($.effective_discount)||0);t.rewards.couponCode=I,t.rewards.couponApplied=I,t.rewards.couponDiscount=w,t.rewards.couponStatus="ok",t.rewards.couponMessage=`تم تطبيق خصم ${R(Math.round(w))} ر.س`}catch($){t.rewards.couponApplied="",t.rewards.couponDiscount=0,t.rewards.couponStatus="bad",t.rewards.couponMessage=$.message||"تعذّر التحقق من الكوبون"}finally{N.value=!1}}function re(){V++,t.rewards.couponApplied="",t.rewards.couponDiscount=0,t.rewards.couponStatus="",t.rewards.couponMessage=""}return ae(()=>D.value.map(I=>`${I.id}:${I.price}`).join("|"),re),ae([h,f],()=>{t.rewards.useWallet&&G(t.rewards.walletAmount)}),ae(q,()=>{t.rewards.useLoyalty&&ne(t.rewards.loyaltyPoints)}),(I,_)=>(a(),o(H,null,[_[14]||(_[14]=e("div",{class:"panel-head"},[e("h1",null,"الدفع"),e("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),e("div",Ha,[_[7]||(_[7]=e("h4",null,"اختر طريقة الدفع",-1)),se(vt,{modelValue:n(t).pay,"onUpdate:modelValue":_[0]||(_[0]=$=>n(t).pay=$),methods:d.value},null,8,["modelValue","methods"]),n(t).walletBalance!==null&&!m.value&&!K.value?(a(),o("div",Na,[_[5]||(_[5]=L(" 💡 ",-1)),_[6]||(_[6]=e("b",null,"ملاحظة الدفع عند الوصول:",-1)),L(" يتطلب توفر عربون بنسبة 30% ("+i(n(R)(Z.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+i(n(R)(h.value))+" ر.س. ",1)])):P("",!0),_[8]||(_[8]=e("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),e("div",qa,[_[13]||(_[13]=e("h4",null,[e("span",{class:"step-dot"},"2"),L(" استخدام العروض و المكافآت")],-1)),v.value?(a(),o("p",Va,"جارٍ تحميل رصيد المحفظة ونقاط الولاء...")):Y.value?(a(),o("p",Ra,[_[9]||(_[9]=L("تعذر تحميل الرصيد. ",-1)),e("button",{type:"button",onClick:x},"إعادة المحاولة")])):P("",!0),e("div",Ya,[e("div",Oa,[se(Ft,{compact:"",onRedeemed:F})]),e("div",{class:O(["rw",{on:n(t).rewards.useWallet}])},[e("div",Ua,[e("span",Ga,[(a(),o("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.wallet},null,8,Ka))]),e("span",null,[_[10]||(_[10]=e("b",null,"استخدام من المحفظة",-1)),e("small",null,"الرصيد الحالي: "+i(n(t).walletBalance===null?"—":n(R)(h.value)+" ر.س"),1)]),e("span",{class:O(["switch",{on:n(t).rewards.useWallet}]),onClick:Q},null,2)]),e("input",{type:"number",min:"0",max:Math.min(h.value,f.value),step:"1",value:n(t).rewards.walletAmount,disabled:!n(t).rewards.useWallet,onInput:_[1]||(_[1]=$=>G($.target.value))},null,40,Wa),n(t).walletBalance!==null?(a(),o("span",Qa,"المبلغ المتاح حتى "+i(n(R)(Math.round(Math.min(h.value,f.value))))+" ر.س",1)):P("",!0)],2),e("div",{class:O(["rw",{on:n(t).rewards.useLoyalty}])},[e("div",Xa,[e("span",Ja,[(a(),o("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.gift},null,8,Za))]),e("span",null,[_[11]||(_[11]=e("b",null,"استخدام نقاط الولاء",-1)),e("small",null,"لديك "+i(n(t).loyaltyPoints===null?"—":n(R)(c.value))+" نقطة",1)]),e("span",{class:O(["switch",{on:n(t).rewards.useLoyalty}]),onClick:pe},null,2)]),e("input",{type:"number",min:"0",max:q.value,step:"1",value:n(t).rewards.loyaltyPoints,disabled:!n(t).rewards.useLoyalty,onInput:_[2]||(_[2]=$=>ne($.target.value))},null,40,eo),e("span",to,"تساوي خصم "+i(n(R)(Math.round(n(p)*n(z))))+" ر.س",1)],2)]),e("div",no,[e("span",ao,[(a(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.coupon},null,8,oo))]),me(e("input",{"onUpdate:modelValue":_[3]||(_[3]=$=>n(t).rewards.couponCode=$),placeholder:"أدخل كود الخصم",onInput:_[4]||(_[4]=$=>n(t).rewards.couponApplied&&n(t).rewards.couponCode!==n(t).rewards.couponApplied?re():null),onKeydown:Ce(Se(ce,["prevent"]),["enter"])},null,40,ro),[[Ye,n(t).rewards.couponCode]]),n(t).rewards.couponApplied?(a(),o("button",{key:0,type:"button",class:"coupon-clear",onClick:re},"إلغاء")):P("",!0),e("button",{type:"button",onClick:ce,disabled:N.value},i(N.value?"...":"تطبيق"),9,io)]),n(t).rewards.couponMessage?(a(),o("p",{key:2,class:O(["coupon-msg",n(t).rewards.couponStatus])},i(n(t).rewards.couponMessage),3)):P("",!0),e("div",so,[_[12]||(_[12]=e("span",null,"المبلغ بعد المكافآت",-1)),e("b",null,i(n(R)(Math.round(n(A))))+" ر.س",1),n(b)||B.value||n(g)?(a(),o("small",lo," تم خصم "+i(n(R)(Math.round(n(b)+B.value+n(g))))+" ر.س ",1)):P("",!0)])]),e("div",po,[(a(),o(H,null,X(y,($,w)=>e("div",{key:w,class:"trust"},[e("span",co,[(a(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:$[2]},null,8,go))]),e("b",null,i($[0]),1),e("small",null,i($[1]),1)])),64))])],64))}},mo=Xe(uo,[["__scopeId","data-v-9ff61001"]]),xo={class:"success-wrap"},ho={class:"suc-grid"},fo={class:"card suc-details"},bo={class:"sd-row"},vo={class:"k"},yo=["innerHTML"],wo={class:"v"},ko={class:"sd-row"},_o={class:"k"},$o=["innerHTML"],zo={class:"v"},Mo={class:"sd-row"},Co={class:"k"},So=["innerHTML"],Fo={class:"v"},Bo={class:"sd-row"},Lo={class:"k"},Eo=["innerHTML"],Ao={class:"v"},To={class:"sd-row"},Do={class:"k"},jo=["innerHTML"],Po={class:"v"},Io={class:"sd-row"},Ho={class:"k"},No=["innerHTML"],qo={class:"card qr-card"},Vo={class:"code"},Ro={class:"suc-actions"},Yo={class:"suc-perks"},Oo={class:"ti"},Uo=["innerHTML"],Go="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Ko={__name:"BookingSuccess",emits:["home","calendar","share"],setup(te,{emit:t}){const{state:C,selSvcs:D,totalDur:z,priceParts:b}=le(),{current:E}=fe(),p=t,g=k(()=>b.value),A=k(()=>C.date?qe(C.date):""),N=k(()=>[...new Set(D.value.map(j=>{var x;return(x=C.emp[j.id])==null?void 0:x.name}).filter(Boolean))]),V=k(()=>{var j;return{r:C.bookRef||"",b:((j=E.value)==null?void 0:j.name)||"",d:A.value,u:xe(z.value),e:N.value.join("، "),p:g.value.total,s:D.value.map(x=>{var F;return[x.name,de(C.time[x.id]),((F=C.emp[x.id])==null?void 0:F.name)||"",x.price]})}}),u=k(()=>mt(V.value)),v={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},Y=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(j,x)=>{var F;return a(),o("div",xo,[x[14]||(x[14]=ye('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),e("div",ho,[e("div",fo,[x[9]||(x[9]=e("h4",null,"تفاصيل الحجز",-1)),e("div",bo,[e("span",vo,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.pin},null,8,yo)),x[3]||(x[3]=L(" الفرع",-1))]),e("span",wo,i(((F=n(E))==null?void 0:F.name)||"—"),1)]),e("div",ko,[e("span",_o,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.cal},null,8,$o)),x[4]||(x[4]=L(" التاريخ",-1))]),e("span",zo,i(A.value),1)]),e("div",Mo,[e("span",Co,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.info},null,8,So)),x[5]||(x[5]=L(" مدة الجلسة",-1))]),e("span",Fo,i(n(xe)(n(z))),1)]),e("div",Bo,[e("span",Lo,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.scis},null,8,Eo)),x[6]||(x[6]=L(" الخدمات",-1))]),e("span",Ao,i(n(D).map(h=>`${h.name} (${n(de)(n(C).time[h.id])})`).join(" + ")),1)]),e("div",To,[e("span",Do,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.user},null,8,jo)),x[7]||(x[7]=L(" الفريق",-1))]),e("span",Po,i(N.value.join("، ")),1)]),e("div",Io,[e("span",Ho,[(a(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.card},null,8,No)),x[8]||(x[8]=L(" المبلغ التقديري",-1))]),e("span",{class:"v",style:Go},i(n(R)(g.value.total))+" ر.س",1)])]),e("div",qo,[x[10]||(x[10]=e("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),e("div",Vo,i(n(C).bookRef||"—"),1),se(xt,{url:u.value},null,8,["url"])])]),e("div",Ro,[e("button",{class:"btn btn-gold",onClick:x[0]||(x[0]=h=>p("home"))},[...x[11]||(x[11]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),L(" العودة إلى الرئيسية",-1)])]),e("button",{class:"btn btn-line",onClick:x[1]||(x[1]=h=>p("calendar"))},[...x[12]||(x[12]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),L(" إضافة للتقويم",-1)])]),e("button",{class:"btn btn-line",onClick:x[2]||(x[2]=h=>p("share"))},[...x[13]||(x[13]=[ye('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),e("div",Yo,[(a(),o(H,null,X(Y,(h,c)=>e("div",{key:c,class:"trust"},[e("span",Oo,[(a(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:h[2]},null,8,Uo))]),e("b",null,i(h[0]),1),e("small",null,i(h[1]),1)])),64))])])}}},Wo={key:0,class:"card"},Qo={key:0,class:"br-img"},Xo=["src","alt"],Jo={key:1,class:"sum-row"},Zo={class:"v"},er={key:2,class:"sum-row"},tr={class:"v"},nr={class:"sum-row"},ar={class:"v"},or={class:"sum-row"},rr={class:"v"},ir={key:3,class:"sum-row"},sr={class:"v"},lr={key:4,class:"sum-row"},dr={class:"v"},pr={class:"sum-svcs"},cr={class:"nm"},gr={class:"pr"},ur=["onClick"],mr={key:5,class:"sum-svcs"},xr={class:"nm"},hr={class:"pr"},fr={class:"sum-price"},br={class:"sp-row"},vr={class:"sp-row"},yr={class:"sp-total"},wr={class:"v"},kr={class:"sum-note"},_r={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},$r={__name:"BookingSummary",setup(te){const{state:t,selSvcs:C,totalDur:D,priceParts:z,toggleSvc:b,selectedProducts:E}=le(),{current:p}=fe(),g=J(!1),A=k(()=>t.services.length>0);ae(A,u=>{u?pt(()=>requestAnimationFrame(()=>{g.value=!0})):g.value=!1},{immediate:!0});const N=k(()=>z.value),V=k(()=>t.date?qe(t.date):"");return(u,v)=>{var Y;return a(),o("div",{id:"summary",class:O({show:g.value})},[A.value?(a(),o("div",Wo,[v[14]||(v[14]=e("h3",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[e("path",{d:"M9 11l3 3L22 4"}),e("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),L(" ملخص الحجز")],-1)),n(p)?(a(),o("div",Qo,[n(p).image?(a(),o("img",{key:0,src:n(p).image,alt:n(p).name},null,8,Xo)):P("",!0)])):P("",!0),n(p)?(a(),o("div",Jo,[v[0]||(v[0]=e("span",{class:"k"},"📍 الفرع",-1)),e("span",Zo,i(n(p).name),1)])):P("",!0),n(t).date?(a(),o("div",er,[v[1]||(v[1]=e("span",{class:"k"},"📅 التاريخ",-1)),e("span",tr,i(V.value),1)])):P("",!0),e("div",nr,[v[2]||(v[2]=e("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),e("span",ar,i(n(xe)(n(D))),1)]),e("div",or,[v[3]||(v[3]=e("span",{class:"k"},"✂️ عدد الخدمات",-1)),e("span",rr,i(n(C).length)+" "+i(n(C).length>2?"خدمات":"خدمة"),1)]),n(t).mode?(a(),o("div",ir,[v[4]||(v[4]=e("span",{class:"k"},"👤 الموظفون",-1)),e("span",sr,i(n(t).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):P("",!0),(Y=n(p))!=null&&Y.home?(a(),o("div",lr,[v[5]||(v[5]=e("span",{class:"k"},"رسوم الزيارة المنزلية",-1)),e("span",dr,i(n(R)(N.value.homeFee))+" ر.س",1)])):P("",!0),e("div",pr,[(a(!0),o(H,null,X(n(C),j=>(a(),o("div",{key:j.id,class:"sum-svc"},[v[7]||(v[7]=e("i",{style:{background:"var(--gold)"}},null,-1)),e("span",cr,i(j.name),1),e("span",gr,i(n(R)(j.price))+" ر.س",1),e("button",{class:"rm","aria-label":"حذف",onClick:x=>n(b)(j)},[...v[6]||(v[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,ur)]))),128))]),n(E).length?(a(),o("div",mr,[(a(!0),o(H,null,X(n(E),j=>(a(),o("div",{key:j.id,class:"sum-svc"},[e("span",xr,i(j.n)+" ? "+i(j.qty),1),e("span",hr,i(n(R)(j.pr*j.qty))+" ?.?",1)]))),128))])):P("",!0),e("div",fr,[e("div",br,[v[8]||(v[8]=e("span",null,"المجموع الفرعي",-1)),e("span",null,i(n(R)(N.value.sub))+" ر.س",1)]),e("div",vr,[v[9]||(v[9]=e("span",null,"ضريبة القيمة المضافة (15%)",-1)),e("span",null,"+"+i(n(R)(N.value.vat))+" ر.س",1)]),e("div",yr,[v[11]||(v[11]=e("span",{class:"k"},"المبلغ الإجمالي",-1)),e("span",wr,[L(i(n(R)(N.value.total))+" ",1),v[10]||(v[10]=e("small",null,"ر.س",-1))])])]),e("div",kr,[(a(),o("svg",_r,[...v[12]||(v[12]=[e("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),v[13]||(v[13]=L(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):P("",!0)],2)}}},zr={class:"shell"},Mr={class:"wrap"},Cr={class:"panel",id:"panel"},Sr={key:0,class:"success-wrap receipt-wrap"},Fr={class:"suc-grid receipt-grid"},Br={class:"card suc-details"},Lr={class:"sd-row"},Er={class:"v receipt-code"},Ar={class:"sd-row"},Tr={class:"v"},Dr={class:"sd-row"},jr={class:"v"},Pr={class:"sd-row"},Ir={class:"v"},Hr={class:"sd-row"},Nr={class:"v"},qr={class:"sd-row"},Vr={class:"card suc-details receipt-services"},Rr={class:"footbar",id:"footbar"},Yr={class:"wrap in"},Or={class:"fb-mid",id:"fbMid"},Ur={key:0,class:"tot"},Gr=["disabled"],Kr="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",pi={__name:"BookingView",setup(te){const{state:t,clearCart:C,cartItems:D}=Ze(),z=J(null),b=ct(),{current:E,locations:p,loadServiceLocations:g,setLocation:A}=fe(),{requireAuth:N,user:V}=Ue();g(),ae([()=>b.query.branch,p],([$,w])=>{const W=Array.isArray($)?$[0]:$;if(!W||!w.length)return;const oe=W==="hm"||W==="home-service"?w.find(ge=>ge.home):w.find(ge=>String(ge.id)===String(W));oe&&A(oe.id)},{immediate:!0});const{state:u,selSvcs:v,totalDur:Y,priceParts:j,canProceed:x,nextLabel:F,reset:h,payableTotal:c,walletDiscount:f,loyaltyPointsUsed:B}=le();gt(At,"booking"),ut(z);const S=J(!1),q=J(""),K=J(!1);function Z($){q.value=$,K.value=!0,clearTimeout(Z._h),Z._h=setTimeout(()=>{K.value=!1},2600)}ae(()=>b.query.payment,$=>{$&&($==="failed"?Z("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):($==="cancelled"||$==="cancel")&&Z("تم إلغاء عملية الدفع."))},{immediate:!0});const m=k(()=>u.services.length>0),d=k(()=>u.step===4?c.value:j.value.total);function y($){if(!$)return null;try{const w=String($).replace(/-/g,"+").replace(/_/g,"/"),W=w.padEnd(w.length+(4-w.length%4)%4,"="),oe=JSON.parse(decodeURIComponent(escape(atob(W))));return oe&&typeof oe=="object"?oe:null}catch{return null}}const T=k(()=>y(b.query.receipt)),U=k(()=>!!T.value),Q=k(()=>{var $;return Array.isArray(($=T.value)==null?void 0:$.s)?T.value.s:[]}),G=k(()=>!U.value&&!u.done&&m.value),pe=k(()=>G.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function ne(){u.step>0&&(u.step--,scrollTo({top:0,behavior:"smooth"}))}function ce(){if(x.value){if(u.step===4){N(I);return}u.step++,scrollTo({top:0,behavior:"smooth"})}}function re($){return`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")}`}async function I(){var $,w,W,oe,ge,Le,be,Ee;if(!(S.value||!x.value)){S.value=!0;try{const ke=[($=V.value)==null?void 0:$.first_name,(w=V.value)==null?void 0:w.last_name].filter(Boolean).join(" ");u.cust.name=u.cust.name||ke||((W=V.value)==null?void 0:W.username)||"",u.cust.phone=u.cust.phone||((oe=V.value)==null?void 0:oe.mobile)||"",u.cust.mail=u.cust.mail||((ge=V.value)==null?void 0:ge.email)||"";const _e=(Le=E.value)!=null&&Le.home?0:Number((be=E.value)==null?void 0:be.id);if(u.pay==="cod"){const M=Math.round(j.value.total*.3);if((Number(u.walletBalance)||0)<M){Z(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${R(M)} ر.س) في محفظتك`);return}}const Ae=v.value.map(M=>{var ee;return{subServices:[{id:M.id,...M.repeatRewardId?{repeat_reward_id:M.repeatRewardId}:{},date:re(u.date),time:u.time[M.id],duration:M.dur,staffId:(ee=u.emp[M.id])==null?void 0:ee.id}]}});await wt(Et(t.cart)),await kt({branch:_e,..._e===0?{city_id:u.homeCityId,latitude:u.homeLatitude,longitude:u.homeLongitude}:{},services:Ae,customerName:u.cust.name,mobileNo:u.cust.phone});const Ve=u.rewards,Te=Number(f.value.toFixed(2)),$e=B.value,De=Te>0,Re=$e>0,r=Ve.couponApplied||"",s=c.value<=0?"card":u.pay==="cod"?"cod":u.pay||"card",l=await _t(s,{wallet:De,walletAmount:Te,loyalty:Re,loyaltyPoints:$e,couponCode:r});if(l.payment_url){ht({b:((Ee=E.value)==null?void 0:Ee.name)||"",d:qe(u.date),u:xe(Y.value),e:[...new Set(v.value.map(M=>{var ee;return(ee=u.emp[M.id])==null?void 0:ee.name}).filter(Boolean))].join("، "),p:j.value.total,s:v.value.map(M=>{var ee;return[M.name,de(u.time[M.id]),((ee=u.emp[M.id])==null?void 0:ee.name)||"",M.price]})},l.attempt_id),window.location.href=l.payment_url;return}u.purchasedProducts=D.value.map(M=>({...M})),u.bookRef=l.invoice_id||null,u.done=!0,C(),scrollTo({top:0,behavior:"smooth"})}catch(ke){Z(ke.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{S.value=!1}}}function _(){h(),location.href="/"}return($,w)=>(et("RouterLink"),a(),o("div",{ref_key:"root",ref:z},[e("div",zr,[U.value?P("",!0):(a(),ue(qt,{key:0})),e("div",Mr,[e("div",{class:O(["stage",{"stage-services-summary":n(u).step===0&&G.value}]),id:"stage",style:Be(`grid-template-columns:${pe.value}`)},[e("main",Cr,[U.value?(a(),o("div",Sr,[w[10]||(w[10]=e("div",{class:"suc-ic"},[e("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),w[11]||(w[11]=e("h1",null,"تفاصيل الحجز",-1)),w[12]||(w[12]=e("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),e("div",Fr,[e("div",Br,[w[8]||(w[8]=e("h4",null,"بيانات الحجز",-1)),e("div",Lr,[w[2]||(w[2]=e("span",{class:"k"},"رقم الفاتورة",-1)),e("span",Er,i(T.value.r||"—"),1)]),e("div",Ar,[w[3]||(w[3]=e("span",{class:"k"},"الفرع",-1)),e("span",Tr,i(T.value.b||"—"),1)]),e("div",Dr,[w[4]||(w[4]=e("span",{class:"k"},"التاريخ",-1)),e("span",jr,i(T.value.d||"—"),1)]),e("div",Pr,[w[5]||(w[5]=e("span",{class:"k"},"مدة الجلسة",-1)),e("span",Ir,i(T.value.u||"—"),1)]),e("div",Hr,[w[6]||(w[6]=e("span",{class:"k"},"الفريق",-1)),e("span",Nr,i(T.value.e||"—"),1)]),e("div",qr,[w[7]||(w[7]=e("span",{class:"k"},"المبلغ",-1)),e("span",{class:"v",style:Kr},i(n(R)(Number(T.value.p)||0))+" ر.س",1)])]),e("div",Vr,[w[9]||(w[9]=e("h4",null,"الخدمات",-1)),(a(!0),o(H,null,X(Q.value,(W,oe)=>(a(),o("div",{key:oe,class:"receipt-service"},[e("b",null,i(W[0]),1),e("small",null,i(W[1]||"—")+" · "+i(W[2]||T.value.e||"—"),1),e("span",null,i(n(R)(Number(W[3])||0))+" ر.س",1)]))),128))])])])):n(u).done?(a(),ue(Ko,{key:1,onHome:_,onCalendar:w[0]||(w[0]=W=>Z("تمت إضافة الموعد إلى التقويم")),onShare:w[1]||(w[1]=W=>Z("تم نسخ رابط الحجز للمشاركة"))})):n(u).step===0?(a(),ue(xn,{key:2})):n(u).step===1?(a(),ue(Ln,{key:3})):n(u).step===2?(a(),ue(da,{key:4})):n(u).step===3?(a(),ue(Ia,{key:5})):(a(),ue(mo,{key:6}))]),me(e("aside",{class:O(["summary booking-summary-compact",{show:G.value,"booking-summary-time":n(u).step===2}])},[se($r)],2),[[Ie,G.value]])],6)])]),P("",!0),me(e("div",Rr,[e("div",Yr,[e("button",{class:"btn btn-back",id:"btnBack",style:Be({visibility:n(u).step===0?"hidden":"visible"}),onClick:ne},[...w[29]||(w[29]=[e("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),L(" السابق ",-1)])],4),e("div",Or,[w[31]||(w[31]=e("span",null,"🔒 بياناتك محمية وآمنة",-1)),m.value?(a(),o("span",Ur,[w[30]||(w[30]=L("المبلغ الإجمالي ",-1)),e("b",null,i(n(R)(Math.round(d.value)))+" ر.س",1)])):P("",!0)]),e("button",{class:O(["btn",n(u).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(x),onClick:ce},[L(i(n(F))+" ",1),w[32]||(w[32]=e("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[e("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,Gr)])],512),[[Ie,!n(u).done&&!U.value]]),e("div",{class:O(["pay-loading",{on:S.value}]),id:"payLoading"},[...w[33]||(w[33]=[e("div",{class:"pl-box"},[e("div",{class:"pl-ring"}),e("b",null,"جارٍ معالجة الدفع بأمان…"),e("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),e("div",{class:O(["toast",{on:K.value}]),id:"toast"},i(q.value),3)],512))}};export{pi as default};
