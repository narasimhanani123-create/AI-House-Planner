// ===== GROQ API KEY =====
const GROQ_KEY = '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';

// ===== ALL INDIA DISTRICTS =====
const DISTRICTS = {
  'Telangana': ['Adilabad','Bhadradri Kothagudem','Gadwal','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Komaram Bheem','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Rangareddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal Rural','Warangal Urban','Yadadri Bhuvanagiri'],
  'Andhra Pradesh': ['Anantapur','Chittoor','East Godavari','Guntur','Krishna','Kurnool','Nellore','Prakasam','Srikakulam','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa'],
  'Karnataka': ['Bagalkot','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagar','Chikkaballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davangere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayapura','Yadgir'],
  'Maharashtra': ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'],
  'Tamil Nadu': ['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Viluppuram','Virudhunagar'],
  'Kerala': ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad'],
  'Gujarat': ['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Dang','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad'],
  'Rajasthan': ['Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur'],
  'Uttar Pradesh': ['Agra','Aligarh','Allahabad','Ambedkar Nagar','Amethi','Amroha','Auraiya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Firozabad','Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi'],
  'Other States': ['Delhi','Chandigarh','Puducherry','Goa','Assam','Bihar','Chhattisgarh','Haryana','Himachal Pradesh','Jharkhand','Madhya Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Sikkim','Tripura','Uttarakhand','West Bengal']
};

// ===== DEFAULT RATES =====
const DEFAULT_RATES = {
  cement: { rate: 400, unit: 'bag' },
  steel: { rate: 70, unit: 'kg' },
  sand: { rate: 50, unit: 'cft' },
  aggregate: { rate: 45, unit: 'cft' },
  brick: { rate: 8, unit: 'piece' },
  labour: { rate: 180, unit: 'sqft' },
  finishing: { rate: 80, unit: 'sqft' }
};

let currentRates = { ...DEFAULT_RATES };
let currentLang = 'te';
let currentPlan = null;

// ===== TRANSLATIONS =====
const T = {
  te: {
    title: 'నిర్మాణ్ AI హౌస్ ప్లానర్',
    subtitle: 'మీ కల ఇల్లు డిజైన్ చేయండి',
    plotWidth: 'ప్లాట్ వెడల్పు (అడుగులు)',
    plotDepth: 'ప్లాట్ లోతు (అడుగులు)',
    floors: 'అంతస్తులు',
    state: 'రాష్ట్రం',
    district: 'జిల్లా',
    rooms: 'గదులు ఎంచుకోండి',
    generate: 'ప్లాన్ తయారు చేయి',
    generating: 'తయారు చేస్తున్నాం...',
    download: 'PDF డౌన్లోడ్',
    print: 'ప్రింట్ చేయి',
    floorPlan: 'ఫ్లోర్ ప్లాన్',
    materialCalc: 'మెటీరియల్ కాల్కులేటర్',
    editRates: 'రేట్లు మార్చు',
    saveRates: 'రేట్లు సేవ్ చేయి',
    ground: 'గ్రౌండ్ ఫ్లోర్',
    first: 'ఫస్ట్ ఫ్లోర్',
    totalCost: 'మొత్తం ఖర్చు'
  },
  hi: {
    title: 'निर्माण AI हाउस प्लानर',
    subtitle: 'अपना सपनों का घर डिज़ाइन करें',
    plotWidth: 'प्लॉट चौड़ाई (फीट)',
    plotDepth: 'प्लॉट गहराई (फीट)',
    floors: 'मंजिल',
    state: 'राज्य',
    district: 'जिला',
    rooms: 'कमरे चुनें',
    generate: 'प्लान बनाएं',
    generating: 'बना रहे हैं...',
    download: 'PDF डाउनलोड',
    print: 'प्रिंट करें',
    floorPlan: 'फ्लोर प्लान',
    materialCalc: 'मटेरियल कैलकुलेटर',
    editRates: 'रेट बदलें',
    saveRates: 'रेट सेव करें',
    ground: 'ग्राउंड फ्लोर',
    first: 'फर्स्ट फ्लोर',
    totalCost: 'कुल लागत'
  },
  en: {
    title: 'Nirmaan AI House Planner',
    subtitle: 'Design Your Dream Home',
    plotWidth: 'Plot Width (feet)',
    plotDepth: 'Plot Depth (feet)',
    floors: 'Floors',
    state: 'State',
    district: 'District',
    rooms: 'Select Rooms',
    generate: 'Generate Plan',
    generating: 'Generating...',
    download: 'Download PDF',
    print: 'Print Plan',
    floorPlan: 'Floor Plan',
    materialCalc: 'Material Calculator',
    editRates: 'Edit Rates',
    saveRates: 'Save Rates',
    ground: 'Ground Floor',
    first: 'First Floor',
    totalCost: 'Total Cost'
  }
};

// ===== ROOM DEFINITIONS =====
const ROOM_DEFS = {
  hall:        { te: 'హాల్',           hi: 'हॉल',          en: 'Hall',              minW: 12, minD: 10, color: '#E8F5E9' },
  kitchen:     { te: 'వంటగది',         hi: 'रसोई',         en: 'Kitchen',           minW: 10, minD: 8,  color: '#FFF3E0' },
  master:      { te: 'మాస్టర్ బెడ్',   hi: 'मास्टर बेड',   en: 'Master Bedroom',    minW: 12, minD: 10, color: '#E3F2FD' },
  bedroom2:    { te: 'బెడ్‌రూమ్ 2',    hi: 'बेडरूम 2',     en: 'Bedroom 2',         minW: 10, minD: 10, color: '#F3E5F5' },
  bedroom3:    { te: 'బెడ్‌రూమ్ 3',    hi: 'बेडरूम 3',     en: 'Bedroom 3',         minW: 10, minD: 10, color: '#FCE4EC' },
  children:    { te: 'పిల్లల గది',     hi: 'बच्चों का कमरा', en: "Children's Room",  minW: 9,  minD: 9,  color: '#E8EAF6' },
  bathroom:    { te: 'బాత్‌రూమ్',      hi: 'बाथरूम',       en: 'Bathroom',          minW: 5,  minD: 7,  color: '#E0F7FA' },
  toilet:      { te: 'టాయిలెట్',       hi: 'शौचालय',       en: 'Toilet',            minW: 4,  minD: 5,  color: '#E0F2F1' },
  dining:      { te: 'డైనింగ్',        hi: 'डाइनिंग',      en: 'Dining',            minW: 10, minD: 8,  color: '#FFFDE7' },
  pooja:       { te: 'పూజ గది',        hi: 'पूजा कक्ष',    en: 'Pooja Room',        minW: 5,  minD: 5,  color: '#FFF8E1' },
  store:       { te: 'స్టోర్ రూమ్',    hi: 'स्टोर रूम',    en: 'Store Room',        minW: 6,  minD: 6,  color: '#EFEBE9' },
  garage:      { te: 'గ్యారేజ్',       hi: 'गैरेज',        en: 'Garage',            minW: 12, minD: 10, color: '#ECEFF1' },
  servant:     { te: 'సర్వెంట్ రూమ్', hi: 'सर्वेंट रूम',  en: 'Servant Room',      minW: 8,  minD: 8,  color: '#F1F8E9' },
  study:       { te: 'స్టడీ రూమ్',     hi: 'स्टडी रूम',    en: 'Study Room',        minW: 9,  minD: 8,  color: '#E8F5E9' },
  balcony:     { te: 'బాల్కనీ',        hi: 'बालकनी',       en: 'Balcony',           minW: 8,  minD: 4,  color: '#F9FBE7' },
  verandah:    { te: 'వరండా',          hi: 'बरामदा',       en: 'Verandah',          minW: 10, minD: 5,  color: '#F0F4C3' },
  staircase:   { te: 'మెట్లు',         hi: 'सीढ़ी',         en: 'Staircase',         minW: 8,  minD: 4,  color: '#CFD8DC' },
  passage:     { te: 'పాసేజ్',         hi: 'गलियारा',      en: 'Passage/Corridor',  minW: 4,  minD: 8,  color: '#ECEFF1' }
};// ===== CAD FLOOR PLAN DRAWING ENGINE =====
function drawCADPlan(canvas, rooms, plotW, plotD, floorName, lang) {
  const ctx = canvas.getContext('2d');
  const margin = 80;
  const canvasW = canvas.width;
  const canvasH = canvas.height;
  const scaleX = (canvasW - margin * 2) / plotW;
  const scaleY = (canvasH - margin * 2) / plotD;
  const scale = Math.min(scaleX, scaleY);

  // Clear + white background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasW, canvasH);

  // Grid lines (light)
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 0.5;
  for (let x = 0; x <= plotW; x += 5) {
    ctx.beginPath();
    ctx.moveTo(margin + x * scale, margin);
    ctx.lineTo(margin + x * scale, margin + plotD * scale);
    ctx.stroke();
  }
  for (let y = 0; y <= plotD; y += 5) {
    ctx.beginPath();
    ctx.moveTo(margin, margin + y * scale);
    ctx.lineTo(margin + plotW * scale, margin + y * scale);
    ctx.stroke();
  }

  // Draw rooms
  rooms.forEach(room => {
    const rx = margin + room.x * scale;
    const ry = margin + room.y * scale;
    const rw = room.w * scale;
    const rh = room.h * scale;

    // Room fill
    ctx.fillStyle = room.color;
    ctx.fillRect(rx, ry, rw, rh);

    // Room walls (thick black)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeRect(rx, ry, rw, rh);

    // Door arc
    if (room.door) {
      const d = room.door;
      const doorSize = 2.5 * scale;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      if (d === 'bottom') {
        ctx.beginPath();
        ctx.moveTo(rx + rw * 0.3, ry + rh);
        ctx.lineTo(rx + rw * 0.3, ry + rh - doorSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rx + rw * 0.3, ry + rh, doorSize, -Math.PI / 2, 0);
        ctx.stroke();
      } else if (d === 'right') {
        ctx.beginPath();
        ctx.moveTo(rx + rw, ry + rh * 0.3);
        ctx.lineTo(rx + rw - doorSize, ry + rh * 0.3);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rx + rw, ry + rh * 0.3, doorSize, Math.PI, Math.PI * 1.5);
        ctx.stroke();
      } else if (d === 'top') {
        ctx.beginPath();
        ctx.moveTo(rx + rw * 0.3, ry);
        ctx.lineTo(rx + rw * 0.3, ry + doorSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rx + rw * 0.3, ry, doorSize, 0, Math.PI / 2);
        ctx.stroke();
      } else if (d === 'left') {
        ctx.beginPath();
        ctx.moveTo(rx, ry + rh * 0.3);
        ctx.lineTo(rx + doorSize, ry + rh * 0.3);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rx, ry + rh * 0.3, doorSize, -Math.PI / 2, 0);
        ctx.stroke();
      }
    }

    // Window symbol
    if (room.window) {
      const wx = rx + rw * 0.6;
      const wy = ry;
      const wSize = Math.min(rw * 0.25, 20);
      ctx.strokeStyle = '#0000ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(wx, wy - 3, wSize, 6);
      ctx.beginPath();
      ctx.moveTo(wx + wSize / 2, wy - 3);
      ctx.lineTo(wx + wSize / 2, wy + 3);
      ctx.stroke();
    }

    // Room label
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${Math.max(10, Math.min(13, rw / 7))}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const label = ROOM_DEFS[room.id] ? ROOM_DEFS[room.id][lang] : room.name;
    ctx.fillText(label, rx + rw / 2, ry + rh / 2 - 8);

    // Room size label
    ctx.font = `${Math.max(8, Math.min(10, rw / 9))}px Arial`;
    ctx.fillStyle = '#333333';
    ctx.fillText(`${room.w}'×${room.h}'`, rx + rw / 2, ry + rh / 2 + 8);
  });

  // Outer plot boundary (thick)
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 5;
  ctx.strokeRect(margin, margin, plotW * scale, plotD * scale);

  // Dimension lines
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  ctx.font = '12px Arial';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';

  // Bottom dimension
  const dimY = margin + plotD * scale + 30;
  ctx.beginPath();
  ctx.moveTo(margin, dimY);
  ctx.lineTo(margin + plotW * scale, dimY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(margin, dimY - 5); ctx.lineTo(margin, dimY + 5); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(margin + plotW * scale, dimY - 5); ctx.lineTo(margin + plotW * scale, dimY + 5); ctx.stroke();
  ctx.fillText(`${plotW}'-0"`, margin + (plotW * scale) / 2, dimY + 15);

  // Left dimension
  ctx.save();
  ctx.translate(margin - 35, margin + (plotD * scale) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.fillText(`${plotD}'-0"`, 0, 0);
  ctx.restore();

  // North Arrow
  const nx = margin + plotW * scale - 30;
  const ny = margin + 30;
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(nx, ny + 20);
  ctx.lineTo(nx, ny - 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(nx - 8, ny - 10);
  ctx.lineTo(nx, ny - 22);
  ctx.lineTo(nx + 8, ny - 10);
  ctx.closePath();
  ctx.fill();
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('N', nx, ny + 35);

  // Floor name title
  ctx.font = 'bold 16px Arial';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText(`${floorName} — ${plotW}×${plotD} ft`, canvasW / 2, 30);

  // Scale bar
  const sbY = canvasH - 20;
  const sbX = margin;
  const sbLen = 5 * scale;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(sbX, sbY); ctx.lineTo(sbX + sbLen * 2, sbY); ctx.stroke();
  ctx.fillStyle = '#000000';
  ctx.fillRect(sbX, sbY - 4, sbLen, 8);
  ctx.font = '10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText("0     5'    10'", sbX, sbY + 14);
  ctx.fillText('SCALE: 1:100 | ALL DIMENSIONS IN FEET | NIRMAAN AI HOUSE PLANNER', canvasW / 2 - 150, sbY + 14);
}

// ===== SMART ROOM LAYOUT ALGORITHM =====
function generateLayout(selectedRooms, plotW, plotD) {
  const layout = [];
  let curX = 0, curY = 0;
  let rowH = 0;
  const padding = 0;

  // Priority order: verandah → hall → kitchen/dining → bedrooms → bathrooms → others
  const priority = ['verandah','hall','dining','kitchen','master','bedroom2','bedroom3','children','study','pooja','bathroom','toilet','store','garage','servant','balcony','staircase','passage'];
  const sorted = [...selectedRooms].sort((a, b) => {
    const ai = priority.indexOf(a); const bi = priority.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  sorted.forEach((roomId, i) => {
    const def = ROOM_DEFS[roomId];
    if (!def) return;
    let rw = def.minW;
    let rh = def.minD;

    // Fit within plot
    if (curX + rw > plotW) { curX = 0; curY += rowH + padding; rowH = 0; }
    if (curY + rh > plotD) { rh = Math.max(4, plotD - curY); }
    if (curX + rw > plotW) { rw = Math.max(4, plotW - curX); }

    // Door direction
    let door = 'bottom';
    if (curY === 0) door = 'bottom';
    else if (curX === 0) door = 'right';
    else door = 'bottom';

    layout.push({
      id: roomId,
      name: def.en,
      x: curX, y: curY,
      w: rw, h: rh,
      color: def.color,
      door: door,
      window: !['bathroom','toilet','store','passage'].includes(roomId)
    });

    curX += rw + padding;
    rowH = Math.max(rowH, rh);
  });

  return layout;
}

// ===== MATERIAL CALCULATOR =====
function calcMaterials(plotW, plotD, floors) {
  const area = plotW * plotD * floors;
  return {
    cement:    { qty: Math.round(area * 0.4),  ...currentRates.cement },
    steel:     { qty: Math.round(area * 4),    ...currentRates.steel },
    sand:      { qty: Math.round(area * 1.5),  ...currentRates.sand },
    aggregate: { qty: Math.round(area * 0.9),  ...currentRates.aggregate },
    brick:     { qty: Math.round(area * 8),    ...currentRates.brick },
    labour:    { qty: Math.round(area),        ...currentRates.labour },
    finishing: { qty: Math.round(area),        ...currentRates.finishing }
  };
}// ===== UI RENDER =====
function renderApp() {
  document.getElementById('app').innerHTML = `
  <div class="container">
    <header>
      <div class="logo">
        <div class="logo-icon">🏠</div>
        <div class="logo-text">
          <h1>${T[currentLang].title}</h1>
          <p>${T[currentLang].subtitle}</p>
        </div>
      </div>
      <div class="lang-switcher">
        <button onclick="setLang('te')" class="${currentLang==='te'?'active':''}">తె</button>
        <button onclick="setLang('hi')" class="${currentLang==='hi'?'active':''}">हि</button>
        <button onclick="setLang('en')" class="${currentLang==='en'?'active':''}">EN</button>
      </div>
    </header>

    <div class="form-section">
      <div class="form-grid">
        <div class="field">
          <label>${T[currentLang].plotWidth}</label>
          <input type="number" id="plotW" value="30" min="20" max="100"/>
        </div>
        <div class="field">
          <label>${T[currentLang].plotDepth}</label>
          <input type="number" id="plotD" value="40" min="20" max="100"/>
        </div>
        <div class="field">
          <label>${T[currentLang].floors}</label>
          <select id="floors">
            <option value="1">G (Ground Only)</option>
            <option value="2">G+1</option>
            <option value="3">G+2</option>
          </select>
        </div>
        <div class="field">
          <label>${T[currentLang].state}</label>
          <select id="stateSelect" onchange="updateDistricts()">
            ${Object.keys(DISTRICTS).map(s=>`<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>${T[currentLang].district}</label>
          <select id="districtSelect"></select>
        </div>
      </div>

      <div class="rooms-section">
        <h3>${T[currentLang].rooms}</h3>
        <div class="rooms-grid">
          ${Object.entries(ROOM_DEFS).map(([id,def])=>`
            <label class="room-chip">
              <input type="checkbox" value="${id}" ${['hall','kitchen','master','bathroom'].includes(id)?'checked':''}>
              <span style="background:${def.color}">${def[currentLang]}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <button class="btn-generate" onclick="generatePlan()">
        🏗️ ${T[currentLang].generate}
      </button>
    </div>

    <div id="planOutput" style="display:none">
      <div class="plan-header">
        <h2>📐 ${T[currentLang].floorPlan}</h2>
        <div class="plan-actions">
          <button class="btn-action" onclick="printPlan()">🖨️ ${T[currentLang].print}</button>
          <button class="btn-action" onclick="downloadPDF()">⬇️ ${T[currentLang].download}</button>
        </div>
      </div>
      <div id="canvasContainer"></div>
      <div id="materialSection"></div>
    </div>
  </div>`;

  updateDistricts();
}

function updateDistricts() {
  const state = document.getElementById('stateSelect').value;
  const dsel = document.getElementById('districtSelect');
  dsel.innerHTML = DISTRICTS[state].map(d=>`<option>${d}</option>`).join('');
}

function setLang(lang) {
  currentLang = lang;
  renderApp();
}

function generatePlan() {
  const plotW = parseInt(document.getElementById('plotW').value);
  const plotD = parseInt(document.getElementById('plotD').value);
  const floors = parseInt(document.getElementById('floors').value);
  const checked = [...document.querySelectorAll('.rooms-grid input:checked')].map(i=>i.value);

  if (checked.length === 0) { alert('కనీసం ఒక్క గది select చేయండి!'); return; }

  const groundRooms = generateLayout(checked, plotW, plotD);
  const firstRooms  = floors > 1 ? generateLayout(
    checked.filter(r=>!['garage','verandah'].includes(r)), plotW, plotD
  ) : [];

  currentPlan = { plotW, plotD, floors, groundRooms, firstRooms };

  document.getElementById('planOutput').style.display = 'block';

  const container = document.getElementById('canvasContainer');
  container.innerHTML = '';

  // Ground floor canvas
  const c1 = document.createElement('canvas');
  c1.width = 800; c1.height = 600; c1.id = 'groundCanvas';
  c1.style.cssText = 'display:block;margin:20px auto;border:1px solid #ccc;background:#fff';
  container.appendChild(c1);
  const gLabel = `${T[currentLang].ground} — ${plotW}×${plotD} ft`;
  drawCADPlan(c1, groundRooms, plotW, plotD, gLabel, currentLang);

  // First floor if needed
  if (floors > 1) {
    const c2 = document.createElement('canvas');
    c2.width = 800; c2.height = 600; c2.id = 'firstCanvas';
    c2.style.cssText = 'display:block;margin:20px auto;border:1px solid #ccc;background:#fff';
    container.appendChild(c2);
    const fLabel = `${T[currentLang].first} — ${plotW}×${plotD} ft`;
    drawCADPlan(c2, firstRooms, plotW, plotD, fLabel, currentLang);
  }

  // Materials
  renderMaterials(plotW, plotD, floors);
  document.getElementById('planOutput').scrollIntoView({ behavior: 'smooth' });
}

function renderMaterials(plotW, plotD, floors) {
  const mats = calcMaterials(plotW, plotD, floors);
  let total = 0;
  Object.values(mats).forEach(m => { total += m.qty * m.rate; });

  const rows = Object.entries(mats).map(([k,m])=>`
    <tr>
      <td>${k.charAt(0).toUpperCase()+k.slice(1)}</td>
      <td>${m.qty.toLocaleString()} ${m.unit}s</td>
      <td>₹${m.rate}/${m.unit}</td>
      <td>₹${(m.qty*m.rate).toLocaleString()}</td>
      <td><input type="number" value="${m.rate}" onchange="updateRate('${k}',this.value)" style="width:70px;padding:4px;border:1px solid #ccc;border-radius:4px"/></td>
    </tr>
  `).join('');

  document.getElementById('materialSection').innerHTML = `
    <div class="material-card">
      <h3>🧱 ${T[currentLang].materialCalc}</h3>
      <table class="mat-table">
        <thead><tr><th>Material</th><th>Quantity</th><th>Rate</th><th>Cost</th><th>${T[currentLang].editRates}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="total-cost">
        ${T[currentLang].totalCost}: <strong>₹${total.toLocaleString()}</strong>
      </div>
    </div>`;
}

function updateRate(key, val) {
  currentRates[key].rate = parseFloat(val) || currentRates[key].rate;
  if (currentPlan) renderMaterials(currentPlan.plotW, currentPlan.plotD, currentPlan.floors);
}

function printPlan() {
  const groundCanvas = document.getElementById('groundCanvas');
  const firstCanvas  = document.getElementById('firstCanvas');
  const win = window.open('', '_blank');
  win.document.write(`
    <html><head><title>House Plan</title>
    <style>
      body{margin:0;padding:20px;background:#fff;font-family:Arial}
      img{display:block;margin:20px auto;max-width:100%;border:1px solid #000}
      h2{text-align:center;font-size:18px;margin:10px 0}
      @media print{body{padding:5px}}
    </style></head><body>
    <h2>NIRMAAN AI HOUSE PLANNER — FLOOR PLAN</h2>
    <img src="${groundCanvas.toDataURL('image/png')}"/>
    ${firstCanvas ? `<img src="${firstCanvas.toDataURL('image/png')}"/>` : ''}
    <p style="text-align:center;font-size:11px;color:#666">Generated by Nirmaan AI House Planner | Scale: 1:100</p>
    </body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 500);
}

function downloadPDF() {
  printPlan();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderApp);