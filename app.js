const GROQ_KEY = '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';

const STRINGS = {
  te: {
    plotLbl:'📐 Plot Size ఎంచుకోండి', plotsize:'Plot Size (అడుగులు)',
    floors:'అంతస్తులు', facing:'ముఖద్వారం దిక్కు',
    roomsLbl:'🛏️ Rooms Select చేయండి', budgetLbl:'💰 Budget & నిర్మాణ విధానం',
    budgetamt:'Budget (₹ లక్షలు)', contype:'నిర్మాణ రకం',
    special:'ప్రత్యేక అవసరాలు', genBtn:'🏠 AI House Plan Generate చేయండి',
    loading:'AI మీ ఇంటి plan తయారు చేస్తోంది...',
    vastuTitle:'🌿 Vastu Tips (తెలుగు)', aiPlanTitle:'AI Layout వివరాలు',
    matTitle:'Telangana Market Rates తో Material Estimate',
    east:'తూర్పు (East) ⭐ Best', north:'ఉత్తరం (North) ✅',
    west:'పశ్చిమం (West)', south:'దక్షిణం (South)',
    g:'Ground Floor Only', g1:'G + 1st Floor', g2:'G + 2 Floors',
    eco:'Economy (సాదా)', std:'Standard (మధ్యస్థ)', pre:'Premium (మేలు రకం)',
    p20:'20×30 ft — 600 sqft', p30:'30×40 ft — 1200 sqft',
    p40:'40×60 ft — 2400 sqft', p50:'50×80 ft — 4000 sqft', pcus:'Custom Size'
  },
  hi: {
    plotLbl:'📐 Plot Size चुनें', plotsize:'Plot Size (फीट)',
    floors:'मंजिल', facing:'मुख्य दरवाज़ा दिशा',
    roomsLbl:'🛏️ कमरे चुनें', budgetLbl:'💰 बजट',
    budgetamt:'कुल बजट (₹ लाख)', contype:'निर्माण प्रकार',
    special:'विशेष आवश्यकताएं', genBtn:'🏠 AI House Plan बनाएं',
    loading:'AI आपका plan बना रहा है...',
    vastuTitle:'🌿 वास्तु टिप्स', aiPlanTitle:'AI लेआउट सुझाव',
    matTitle:'Telangana Market दरों पर सामग्री अनुमान',
    east:'पूर्व (East) ⭐ Best', north:'उत्तर (North) ✅',
    west:'पश्चिम (West)', south:'दक्षिण (South)',
    g:'केवल Ground Floor', g1:'G + 1st Floor', g2:'G + 2 Floor',
    eco:'Economy (सादा)', std:'Standard (मध्यम)', pre:'Premium (उत्तम)',
    p20:'20×30 ft — 600 sqft', p30:'30×40 ft — 1200 sqft',
    p40:'40×60 ft — 2400 sqft', p50:'50×80 ft — 4000 sqft', pcus:'Custom Size'
  },
  en: {
    plotLbl:'📐 Select Plot Size', plotsize:'Plot Size (feet)',
    floors:'Number of Floors', facing:'Main Door Facing',
    roomsLbl:'🛏️ Select Rooms', budgetLbl:'💰 Budget & Construction',
    budgetamt:'Total Budget (₹ Lakhs)', contype:'Construction Type',
    special:'Special Requirements', genBtn:'🏠 Generate AI House Plan',
    loading:'AI is generating your house plan...',
    vastuTitle:'🌿 Vastu Tips', aiPlanTitle:'AI Layout Suggestions',
    matTitle:'Material Estimate at Telangana Market Rates',
    east:'East ⭐ Best', north:'North ✅',
    west:'West', south:'South',
    g:'Ground Floor Only', g1:'G + 1st Floor', g2:'G + 2 Floors',
    eco:'Economy', std:'Standard', pre:'Premium',
    p20:'20×30 ft — 600 sqft', p30:'30×40 ft — 1200 sqft',
    p40:'40×60 ft — 2400 sqft', p50:'50×80 ft — 4000 sqft', pcus:'Custom Size'
  }
};

const ROOMS = [
  {id:'bedroom',  icon:'🛏️', te:'పడక గది',   hi:'बेडरूम',   en:'Bedroom',   default:2},
  {id:'hall',     icon:'🛋️', te:'హాల్',       hi:'हॉल',       en:'Hall',       default:1},
  {id:'kitchen',  icon:'🍳', te:'వంటగది',    hi:'रसोई',      en:'Kitchen',    default:1},
  {id:'bathroom', icon:'🚿', te:'బాత్రూమ్',  hi:'बाथरूम',    en:'Bathroom',   default:2},
  {id:'pooja',    icon:'🪔', te:'పూజ గది',   hi:'पूजा कक्ष', en:'Pooja Room', default:0},
  {id:'dining',   icon:'🍽️', te:'డైనింగ్',    hi:'डाइनिंग',   en:'Dining',     default:0},
  {id:'parking',  icon:'🚗', te:'పార్కింగ్',  hi:'पार्किंग',  en:'Parking',    default:0},
  {id:'study',    icon:'📚', te:'స్టడీ రూమ్', hi:'अध्ययन',   en:'Study Room', default:0},
  {id:'store',    icon:'📦', te:'స్టోర్',     hi:'स्टोर',     en:'Store Room', default:0},
  {id:'terrace',  icon:'🌿', te:'టెరస్',      hi:'छत',        en:'Terrace',    default:0}
];

let currentLang = 'te';
let rotAngle = 0;
const roomCounts = {};

document.addEventListener('DOMContentLoaded', () => {
  setLang('te');
});

function setLang(l) {
  currentLang = l;
  document.querySelectorAll('.lang-btn').forEach((b,i) =>
    b.classList.toggle('active', ['te','hi','en'][i] === l)
  );
  const s = STRINGS[l];
  document.getElementById('lbl-plot').textContent      = s.plotLbl;
  document.getElementById('lbl-plotsize').textContent  = s.plotsize;
  document.getElementById('lbl-floors').textContent    = s.floors;
  document.getElementById('lbl-facing').textContent    = s.facing;
  document.getElementById('lbl-rooms').textContent     = s.roomsLbl;
  document.getElementById('lbl-budget').textContent    = s.budgetLbl;
  document.getElementById('lbl-budgetamt').textContent = s.budgetamt;
  document.getElementById('lbl-contype').textContent   = s.contype;
  document.getElementById('lbl-special').textContent   = s.special;
  document.getElementById('generateBtn').textContent   = s.genBtn;
  document.getElementById('loaderTxt').textContent     = s.loading;

  // Dropdowns translate
  document.getElementById('plotSize').innerHTML = `
    <option value="20x30">${s.p20}</option>
    <option value="30x40" selected>${s.p30}</option>
    <option value="40x60">${s.p40}</option>
    <option value="50x80">${s.p50}</option>
    <option value="custom">${s.pcus}</option>`;

  document.getElementById('floors').innerHTML = `
    <option value="1">${s.g}</option>
    <option value="2" selected>${s.g1}</option>
    <option value="3">${s.g2}</option>`;

  document.getElementById('facing').innerHTML = `
    <option value="East">${s.east}</option>
    <option value="North">${s.north}</option>
    <option value="West">${s.west}</option>
    <option value="South">${s.south}</option>`;

  document.getElementById('constructionType').innerHTML = `
    <option value="economy">${s.eco}</option>
    <option value="standard" selected>${s.std}</option>
    <option value="premium">${s.pre}</option>`;

  buildRoomGrid();
}

function toggleCustomPlot() {
  const v = document.getElementById('plotSize').value;
  document.getElementById('customPlotDiv').style.display = v === 'custom' ? 'block' : 'none';
}

function getPlotDims() {
  const v = document.getElementById('plotSize').value;
  if (v === 'custom') {
    return {
      l: parseFloat(document.getElementById('customL').value) || 35,
      w: parseFloat(document.getElementById('customW').value) || 50
    };
  }
  const [l, w] = v.split('x').map(Number);
  return { l, w };
}

function buildRoomGrid() {
  const grid = document.getElementById('roomGrid');
  grid.innerHTML = '';
  ROOMS.forEach(r => {
    if (roomCounts[r.id] === undefined) roomCounts[r.id] = r.default;
    const chip = document.createElement('div');
    chip.className = 'room-chip' + (roomCounts[r.id] > 0 ? ' selected' : '');
    chip.id = 'chip-' + r.id;
    chip.innerHTML = `
      <div class="icon">${r.icon}</div>
      <div class="name">${r[currentLang] || r.en}</div>
      <div class="room-count-ctrl">
        <button class="cnt-btn" onclick="adjustRoom('${r.id}',-1,event)">−</button>
        <span class="cnt-val" id="cnt-${r.id}">${roomCounts[r.id]}</span>
        <button class="cnt-btn" onclick="adjustRoom('${r.id}',1,event)">+</button>
      </div>
      <div class="count-badge" id="badge-${r.id}"
        style="display:${roomCounts[r.id] > 0 ? 'flex' : 'none'}">
        ${roomCounts[r.id]}
      </div>`;
    grid.appendChild(chip);
  });
}

function adjustRoom(id, delta, e) {
  e.stopPropagation();
  roomCounts[id] = Math.max(0, (roomCounts[id] || 0) + delta);
  document.getElementById('cnt-' + id).textContent = roomCounts[id];
  const badge = document.getElementById('badge-' + id);
  const chip  = document.getElementById('chip-' + id);
  badge.textContent = roomCounts[id];
  if (roomCounts[id] > 0) {
    badge.style.display = 'flex';
    chip.classList.add('selected');
  } else {
    badge.style.display = 'none';
    chip.classList.remove('selected');
  }
}

async function generatePlan() {
  const plot    = getPlotDims();
  const floors  = document.getElementById('floors').value;
  const facing  = document.getElementById('facing').value;
  const budget  = parseFloat(document.getElementById('budgetLakh').value) || 25;
  const ctype   = document.getElementById('constructionType').value;
  const special = document.getElementById('special').value;
  const selectedRooms = ROOMS.filter(r => roomCounts[r.id] > 0)
    .map(r => `${roomCounts[r.id]} ${r.en}`).join(', ');
  if (!selectedRooms) { showToast('⚠️ కనీసం 1 room select చేయండి'); return; }

  document.getElementById('generateBtn').disabled = true;
  document.getElementById('loader').style.display = 'block';
  document.getElementById('result-section').style.display = 'none';

  const langLabel = currentLang === 'te' ? 'Telugu' : currentLang === 'hi' ? 'Hindi' : 'English';

  const prompt = `You are an expert Indian residential architect and Vastu consultant in Telangana.
House plan request:
- Plot: ${plot.l}×${plot.w} ft (${plot.l * plot.w} sqft)
- Floors: ${floors}
- Main door facing: ${facing}
- Rooms needed: ${selectedRooms}
- Budget: ₹${budget} Lakhs
- Construction type: ${ctype}
- Special requirements: ${special || 'none'}

Respond ENTIRELY in ${langLabel}. Return ONLY this JSON (no extra text, no markdown):
{
  "vastuScore": <integer 1-10>,
  "vastuTips": ["tip1","tip2","tip3","tip4","tip5"],
  "layout": "<detailed 8-10 sentence room layout description in ${langLabel}>",
  "rooms2D": [
    {"name":"<name in ${langLabel}>","x":<0-85>,"y":<0-85>,"w":<10-40>,"h":<10-40>,"color":"<hex>"}
  ],
  "materials": [
    {"item":"Cement","qty":"X bags","rate":"₹400/bag","amount":<number>},
    {"item":"Steel","qty":"X kg","rate":"₹75/kg","amount":<number>},
    {"item":"Bricks","qty":"X nos","rate":"₹8/brick","amount":<number>},
    {"item":"Sand","qty":"X loads","rate":"₹3500/load","amount":<number>},
    {"item":"Labour","qty":"Lumpsum","rate":"","amount":<number>},
    {"item":"Flooring","qty":"X sqft","rate":"₹80/sqft","amount":<number>},
    {"item":"Electrical","qty":"Lumpsum","rate":"","amount":<number>},
    {"item":"Plumbing","qty":"Lumpsum","rate":"","amount":<number>},
    {"item":"Doors & Windows","qty":"Lumpsum","rate":"","amount":<number>}
  ]
}
rooms2D must NOT overlap. Cover 75-85% of 100x100 grid.`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
        })
      }
    );
    const data = await res.json();
    let raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    raw = raw.replace(/```json|```/g, '').trim();
    const plan = JSON.parse(raw);
    renderResults(plan, plot, budget);
  } catch (err) {
    console.error(err);
    showToast('❌ Error! Gemini API Key check చేయండి');
    document.getElementById('generateBtn').disabled = false;
    document.getElementById('loader').style.display = 'none';
  }
}

function renderResults(plan, plot, budget) {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
  document.getElementById('generateBtn').disabled = false;
  const score = Math.min(10, Math.max(1, plan.vastuScore || 7));
  animateVastuScore(score);
  const tips = plan.vastuTips || ['East facing main door ఉత్తమం'];
  document.getElementById('vastuList').innerHTML = tips.map(t => `<li>${t}</li>`).join('');
  document.getElementById('vastuTitle').textContent = STRINGS[currentLang].vastuTitle;
  drawBlueprint(plan.rooms2D || [], plot);
  build3DScene(plan.rooms2D || []);
  renderMaterials(plan.materials || [], budget);
  document.getElementById('aiPlanText').textContent = plan.layout || 'Layout details unavailable.';
  setTimeout(() =>
    document.getElementById('vastuCard').scrollIntoView({ behavior: 'smooth', block: 'start' }), 200
  );
}

function animateVastuScore(score) {
  const arc = document.getElementById('vastuArc');
  const num = document.getElementById('vastuNum');
  const circumference = 226;
  arc.style.strokeDashoffset = circumference - (score / 10) * circumference;
  const colors = ['#ff4d6d','#ff6b35','#ffd166','#a8e063','#00c896'];
  arc.style.stroke = colors[Math.min(4, Math.floor((score - 1) / 2))];
  let cur = 0;
  const step = () => {
    cur = Math.min(score, cur + 0.2);
    num.textContent = cur.toFixed(1);
    if (cur < score) requestAnimationFrame(step);
    else num.textContent = score;
  };
  requestAnimationFrame(step);
}

function drawBlueprint(rooms2D, plot) {
  const canvas = document.getElementById('blueprintCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height, PAD = 30;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0d2040'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(64,160,255,0.07)'; ctx.lineWidth = 0.5;
  for (let x = PAD; x < W-PAD; x += 20) { ctx.beginPath(); ctx.moveTo(x,PAD); ctx.lineTo(x,H-PAD); ctx.stroke(); }
  for (let y = PAD; y < H-PAD; y += 20) { ctx.beginPath(); ctx.moveTo(PAD,y); ctx.lineTo(W-PAD,y); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(77,166,255,0.6)'; ctx.lineWidth = 2;
  ctx.strokeRect(PAD, PAD, W-PAD*2, H-PAD*2);
  ctx.fillStyle = 'rgba(77,166,255,0.5)'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
  ctx.fillText(`${plot.l} ft`, W/2, H-8);
  ctx.save(); ctx.translate(12, H/2); ctx.rotate(-Math.PI/2); ctx.fillText(`${plot.w} ft`, 0, 0); ctx.restore();
  if (!rooms2D.length) return;
  const COLORS = ['#1a4a8a','#1a6b5a','#5a1a6b','#6b4a1a','#1a5a4a','#6b1a4a','#4a6b1a','#1a4a6b','#6b6b1a'];
  rooms2D.forEach((r, i) => {
    const rx = PAD + (r.x/100)*(W-PAD*2), ry = PAD + (r.y/100)*(H-PAD*2);
    const rw = (r.w/100)*(W-PAD*2), rh = (r.h/100)*(H-PAD*2);
    ctx.globalAlpha = 0.55; ctx.fillStyle = r.color || COLORS[i%COLORS.length]; ctx.fillRect(rx,ry,rw,rh);
    ctx.globalAlpha = 1; ctx.strokeStyle = 'rgba(77,166,255,0.75)'; ctx.lineWidth = 1.5; ctx.strokeRect(rx,ry,rw,rh);
    ctx.fillStyle = '#e8f4ff';
    const fs = Math.max(8, Math.min(13, rw/5));
    ctx.font = `600 ${fs}px Rajdhani, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText((r.name||'').substring(0,10), rx+rw/2, ry+rh/2);
  });
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.globalAlpha = 1;
}

function build3DScene(rooms2D) {
  const scene = document.getElementById('scene3d');
  const COLORS3D = ['rgba(26,74,138,0.8)','rgba(26,107,90,0.8)','rgba(90,26,107,0.8)','rgba(107,74,26,0.8)','rgba(26,90,74,0.8)','rgba(107,26,74,0.8)','rgba(74,107,26,0.8)','rgba(26,74,107,0.8)'];
  if (!rooms2D.length) { scene.innerHTML = '<div style="color:var(--text-muted);text-align:center;width:100%;padding:40px">3D data unavailable</div>'; return; }
  const cols = 9, rows = 6;
  const floor = document.createElement('div');
  floor.className = 'scene-floor';
  floor.style.gridTemplateColumns = `repeat(${cols}, 34px)`;
  floor.style.gridTemplateRows = `repeat(${rows}, 26px)`;
  const cells = Array.from({length:rows}, () => Array(cols).fill(null));
  rooms2D.forEach((r, idx) => {
    const c0=Math.floor((r.x/100)*cols), r0=Math.floor((r.y/100)*rows);
    const c1=Math.min(cols-1,Math.floor(((r.x+r.w)/100)*cols)), r1=Math.min(rows-1,Math.floor(((r.y+r.h)/100)*rows));
    for (let rr=r0; rr<=r1; rr++) for (let cc=c0; cc<=c1; cc++) cells[rr][cc]={name:r.name, color:COLORS3D[idx%COLORS3D.length]};
  });
  cells.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const div = document.createElement('div');
      div.className = 'room-block';
      div.style.width = '34px'; div.style.height = '26px';
      div.style.animationDelay = `${(ri*cols+ci)*0.025}s`;
      if (cell) { div.style.background = cell.color; div.style.borderColor = 'rgba(77,166,255,0.55)'; div.title = cell.name; }
      else { div.style.background = 'rgba(13,32,64,0.5)'; div.style.borderColor = 'rgba(77,166,255,0.08)'; }
      floor.appendChild(div);
    });
  });
  scene.innerHTML = ''; scene.appendChild(floor);
}

function rotate3d() {
  rotAngle = (rotAngle + 45) % 360;
  const floor = document.querySelector('.scene-floor');
  if (floor) floor.style.transform = `rotateX(50deg) rotateZ(${-20+rotAngle}deg)`;
}

function renderMaterials(materials, budgetLakh) {
  const tbody = document.getElementById('matBody');
  tbody.innerHTML = '';
  let total = 0;
  materials.forEach(m => {
    total += (m.amount || 0);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${m.item}</td><td>${m.qty}</td><td style="color:var(--text-muted);font-size:0.78rem">${m.rate}</td><td class="cost-cell">₹${Number(m.amount||0).toLocaleString('en-IN')}</td>`;
    tbody.appendChild(tr);
  });
  const diff = budgetLakh*100000 - total;
  document.getElementById('matTotal').textContent =
    `₹${total.toLocaleString('en-IN')} ${diff >= 0 ? '✅ Budget లో ఉంది' : '⚠️ Budget మించింది'}`;
}

function shareWhatsApp() {
  const plot   = document.getElementById('plotSize').value;
  const budget = document.getElementById('budgetLakh').value;
  const facing = document.getElementById('facing').value;
  const vastu  = document.getElementById('vastuNum')?.textContent || '?';
  const rooms  = ROOMS.filter(r => roomCounts[r.id] > 0).map(r => `${roomCounts[r.id]}× ${r.en}`).join(', ');
  const layout = document.getElementById('aiPlanText')?.textContent?.substring(0,250) || '';
  const msg = encodeURIComponent(`🏠 *AI House Plan — Nirmaan AI*\n\n📐 Plot: ${plot} ft\n🚪 Facing: ${facing}\n🛏️ Rooms: ${rooms}\n💰 Budget: ₹${budget} Lakhs\n🔱 Vastu: ${vastu}/10\n\n📋 Layout:\n${layout}...\n\n🏗️ Nirmaan AI House Planner`);
  window.open('https://wa.me/?text=' + msg, '_blank');
}

function resetForm() {
  document.getElementById('result-section').style.display = 'none';
  ROOMS.forEach(r => { roomCounts[r.id] = r.default; });
  setLang(currentLang);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg, dur = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
