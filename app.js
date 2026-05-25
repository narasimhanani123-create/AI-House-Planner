// ⚠️ మీ Groq API Key ఇక్కడ పెట్టండి
const GROQ_KEY = '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';

// ===== TELANGANA + ALL INDIA DISTRICTS =====
const DISTRICTS = {
  'Telangana': ['Adilabad','Bhadradri Kothagudem','Gadwal','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Komaram Bheem','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Rangareddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal Rural','Warangal Urban','Yadadri Bhuvanagiri'],
  'Andhra Pradesh': ['Anantapur','Chittoor','East Godavari','Guntur','Krishna','Kurnool','Nellore','Prakasam','Srikakulam','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa'],
  'Karnataka': ['Bagalkot','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagar','Chikkaballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davanagere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayapura','Yadgir'],
  'Maharashtra': ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'],
  'Tamil Nadu': ['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kanchipuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Viluppuram','Virudhunagar'],
  'Kerala': ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad'],
  'Gujarat': ['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Dang','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad'],
  'Rajasthan': ['Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur'],
  'Uttar Pradesh': ['Agra','Aligarh','Allahabad','Ambedkar Nagar','Amethi','Amroha','Auraiya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Firozabad','Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi'],
  'Other States': ['Delhi','Chandigarh','Puducherry','Goa','Assam','Bihar','Chhattisgarh','Haryana','Himachal Pradesh','Jharkhand','Madhya Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Sikkim','Tripura','Uttarakhand','West Bengal']
};

// ===== DEFAULT RATES (Telangana) =====
const DEFAULT_RATES = {
  cement: { rate: 400, unit: 'bag' },
  steel: { rate: 75, unit: 'kg' },
  bricks: { rate: 8, unit: 'brick' },
  sand: { rate: 3500, unit: 'load' },
  msand: { rate: 2800, unit: 'load' },
  labour: { rate: 450, unit: 'sqft' },
  flooring: { rate: 80, unit: 'sqft' },
  electrical: { rate: 45, unit: 'sqft' },
  plumbing: { rate: 35, unit: 'sqft' },
  doors: { rate: 12000, unit: 'door' },
  windows: { rate: 6000, unit: 'window' },
  painting: { rate: 25, unit: 'sqft' }
};

let userRates = { ...DEFAULT_RATES };

// ===== LANGUAGE STRINGS =====
const STRINGS = {
  te: {
    plotLbl:'📐 Plot Size ఎంచుకోండి', plotsize:'Plot Size (అడుగులు)',
    floors:'అంతస్తులు', facing:'ముఖద్వారం దిక్కు',
    locationLbl:'📍 మీ జిల్లా ఎంచుకోండి',
    stateLbl:'రాష్ట్రం', districtLbl:'జిల్లా',
    roomsLbl:'🛏️ Rooms Select చేయండి',
    budgetLbl:'💰 Budget & నిర్మాణ విధానం',
    budgetamt:'Budget (₹ లక్షలు)', contype:'నిర్మాణ రకం',
    special:'ప్రత్యేక అవసరాలు',
    genBtn:'🏠 AI House Plan Generate చేయండి',
    loading:'AI మీ ఇంటి plan తయారు చేస్తోంది...',
    vastuTitle:'🌿 Vastu Tips (తెలుగు)',
    ratesTitle:'💹 మార్కెట్ రేట్లు Edit చేయండి',
    east:'తూర్పు (East) ⭐ Best', north:'ఉత్తరం (North) ✅',
    west:'పశ్చిమం (West)', south:'దక్షిణం (South)',
    g:'Ground Floor Only', g1:'G + 1st Floor', g2:'G + 2 Floors',
    eco:'Economy (సాదా)', std:'Standard (మధ్యస్థ)', pre:'Premium (మేలు రకం)',
    p20:'20×30 ft', p30:'30×40 ft', p40:'40×60 ft', p50:'50×80 ft', pcus:'Custom Size'
  },
  hi: {
    plotLbl:'📐 Plot Size चुनें', plotsize:'Plot Size (फीट)',
    floors:'मंजिल', facing:'मुख्य दरवाज़ा दिशा',
    locationLbl:'📍 अपना जिला चुनें',
    stateLbl:'राज्य', districtLbl:'जिला',
    roomsLbl:'🛏️ कमरे चुनें',
    budgetLbl:'💰 बजट', budgetamt:'कुल बजट (₹ लाख)', contype:'निर्माण प्रकार',
    special:'विशेष आवश्यकताएं',
    genBtn:'🏠 AI House Plan बनाएं',
    loading:'AI आपका plan बना रहा है...',
    vastuTitle:'🌿 वास्तु टिप्स',
    ratesTitle:'💹 Market Rates Edit करें',
    east:'पूर्व (East) ⭐', north:'उत्तर (North) ✅',
    west:'पश्चिम (West)', south:'दक्षिण (South)',
    g:'केवल Ground Floor', g1:'G + 1st Floor', g2:'G + 2 Floor',
    eco:'Economy', std:'Standard', pre:'Premium',
    p20:'20×30 ft', p30:'30×40 ft', p40:'40×60 ft', p50:'50×80 ft', pcus:'Custom Size'
  },
  en: {
    plotLbl:'📐 Select Plot Size', plotsize:'Plot Size (feet)',
    floors:'Number of Floors', facing:'Main Door Facing',
    locationLbl:'📍 Select Your District',
    stateLbl:'State', districtLbl:'District',
    roomsLbl:'🛏️ Select Rooms',
    budgetLbl:'💰 Budget & Construction', budgetamt:'Total Budget (₹ Lakhs)', contype:'Construction Type',
    special:'Special Requirements',
    genBtn:'🏠 Generate AI House Plan',
    loading:'AI is generating your house plan...',
    vastuTitle:'🌿 Vastu Tips',
    ratesTitle:'💹 Edit Market Rates',
    east:'East ⭐ Best', north:'North ✅',
    west:'West', south:'South',
    g:'Ground Floor Only', g1:'G + 1st Floor', g2:'G + 2 Floors',
    eco:'Economy', std:'Standard', pre:'Premium',
    p20:'20×30 ft', p30:'30×40 ft', p40:'40×60 ft', p50:'50×80 ft', pcus:'Custom Size'
  }
};

// ===== ROOMS =====
const ROOMS = [
  {id:'master',    icon:'🛏️', te:'మాస్టర్ బెడ్రూమ్', hi:'मास्टर बेडरूम',   en:'Master Bedroom',    default:1},
  {id:'bedroom',   icon:'🛏️', te:'పడక గది',          hi:'बेडरूम',           en:'Bedroom',            default:1},
  {id:'children',  icon:'👶', te:'పిల్లల గది',        hi:'बच्चों का कमरा',   en:'Children\'s Bedroom',default:0},
  {id:'guest',     icon:'🛋️', te:'అతిథి గది',         hi:'अतिथि कक्ष',       en:'Guest Room',         default:0},
  {id:'hall',      icon:'🏠', te:'హాల్',              hi:'हॉल',              en:'Hall / Living Room', default:1},
  {id:'kitchen',   icon:'🍳', te:'వంటగది',            hi:'रसोई',             en:'Kitchen',            default:1},
  {id:'dining',    icon:'🍽️', te:'డైనింగ్',            hi:'डाइनिंग',          en:'Dining Room',        default:0},
  {id:'bathroom',  icon:'🚿', te:'బాత్రూమ్',          hi:'बाथरूम',           en:'Bathroom',           default:2},
  {id:'toilet',    icon:'🚽', te:'టాయిలెట్',          hi:'शौचालय',           en:'Toilet',             default:0},
  {id:'pooja',     icon:'🪔', te:'పూజ గది',           hi:'पूजा कक्ष',        en:'Pooja Room',         default:0},
  {id:'study',     icon:'📚', te:'స్టడీ రూమ్',        hi:'अध्ययन कक्ष',      en:'Study Room',         default:0},
  {id:'store',     icon:'📦', te:'స్టోర్ రూమ్',       hi:'स्टोर रूम',        en:'Store Room',         default:0},
  {id:'parking',   icon:'🚗', te:'పార్కింగ్',         hi:'पार्किंग',         en:'Car Parking',        default:0},
  {id:'garage',    icon:'🏗️', te:'గ్యారేజ్',          hi:'गैराज',            en:'Garage',             default:0},
  {id:'terrace',   icon:'🌿', te:'టెరస్',             hi:'छत / टेरेस',       en:'Terrace',            default:0},
  {id:'garden',    icon:'🌱', te:'గార్డెన్',          hi:'बगीचा',            en:'Garden / Lawn',      default:0},
  {id:'servant',   icon:'👤', te:'సర్వెంట్ రూమ్',    hi:'नौकर का कमरा',     en:'Servant Room',       default:0},
  {id:'gym',       icon:'🏋️', te:'జిమ్ రూమ్',        hi:'जिम रूम',          en:'Gym Room',           default:0}
];

let currentLang = 'te';
let rotAngle = 0;
const roomCounts = {};
let lastPlan = null;

document.addEventListener('DOMContentLoaded', () => {
  buildStateSelect();
  setLang('te');
  buildRatesEditor();
});

// ===== LANGUAGE =====
function setLang(l) {
  currentLang = l;
  document.querySelectorAll('.lang-btn').forEach((b,i) =>
    b.classList.toggle('active', ['te','hi','en'][i] === l));
  const s = STRINGS[l];
  setText('lbl-plot', s.plotLbl);
  setText('lbl-plotsize', s.plotsize);
  setText('lbl-floors', s.floors);
  setText('lbl-facing', s.facing);
  setText('lbl-location', s.locationLbl);
  setText('lbl-state', s.stateLbl);
  setText('lbl-district', s.districtLbl);
  setText('lbl-rooms', s.roomsLbl);
  setText('lbl-budget', s.budgetLbl);
  setText('lbl-budgetamt', s.budgetamt);
  setText('lbl-contype', s.contype);
  setText('lbl-special', s.special);
  setText('generateBtn', s.genBtn);
  setText('loaderTxt', s.loading);
  setText('ratesTitle', s.ratesTitle);

  setHTML('plotSize', `
    <option value="20x30">${s.p20} — 600 sqft</option>
    <option value="30x40" selected>${s.p30} — 1200 sqft</option>
    <option value="40x60">${s.p40} — 2400 sqft</option>
    <option value="50x80">${s.p50} — 4000 sqft</option>
    <option value="custom">${s.pcus}</option>`);

  setHTML('floors', `
    <option value="1">${s.g}</option>
    <option value="2" selected>${s.g1}</option>
    <option value="3">${s.g2}</option>`);

  setHTML('facing', `
    <option value="East">${s.east}</option>
    <option value="North">${s.north}</option>
    <option value="West">${s.west}</option>
    <option value="South">${s.south}</option>`);

  setHTML('constructionType', `
    <option value="economy">${s.eco}</option>
    <option value="standard" selected>${s.std}</option>
    <option value="premium">${s.pre}</option>`);

  buildRoomGrid();
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}

// ===== LOCATION =====
function buildStateSelect() {
  const sel = document.getElementById('stateSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- State Select చేయండి --</option>';
  Object.keys(DISTRICTS).forEach(state => {
    sel.innerHTML += `<option value="${state}">${state}</option>`;
  });
  // Default Telangana
  sel.value = 'Telangana';
  buildDistrictSelect('Telangana');
}

function buildDistrictSelect(state) {
  const sel = document.getElementById('districtSelect');
  if (!sel) return;
  const districts = DISTRICTS[state] || [];
  sel.innerHTML = '<option value="">-- District Select చేయండి --</option>';
  districts.forEach(d => {
    sel.innerHTML += `<option value="${d}">${d}</option>`;
  });
  // Default Gadwal
  if (state === 'Telangana') sel.value = 'Gadwal';
}

function onStateChange() {
  const state = document.getElementById('stateSelect').value;
  buildDistrictSelect(state);
}

// ===== PLOT =====
function toggleCustomPlot() {
  const v = document.getElementById('plotSize').value;
  document.getElementById('customPlotDiv').style.display = v === 'custom' ? 'flex' : 'none';
}

function getPlotDims() {
  const v = document.getElementById('plotSize').value;
  if (v === 'custom') return {
    l: parseFloat(document.getElementById('customL').value) || 35,
    w: parseFloat(document.getElementById('customW').value) || 50
  };
  const [l, w] = v.split('x').map(Number);
  return { l, w };
}

// ===== ROOM GRID =====
function buildRoomGrid() {
  const grid = document.getElementById('roomGrid');
  if (!grid) return;
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
      <div class="count-badge" id="badge-${r.id}" style="display:${roomCounts[r.id]>0?'flex':'none'}">${roomCounts[r.id]}</div>`;
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
  if (roomCounts[id] > 0) { badge.style.display = 'flex'; chip.classList.add('selected'); }
  else { badge.style.display = 'none'; chip.classList.remove('selected'); }
}

// ===== RATES EDITOR =====
function buildRatesEditor() {
  const container = document.getElementById('ratesContainer');
  if (!container) return;
  const rateItems = [
    { key: 'cement',     label: 'Cement',          unit: '/bag' },
    { key: 'steel',      label: 'Steel',            unit: '/kg' },
    { key: 'bricks',     label: 'Bricks',           unit: '/brick' },
    { key: 'sand',       label: 'Sand',             unit: '/load' },
    { key: 'labour',     label: 'Labour',           unit: '/sqft' },
    { key: 'flooring',   label: 'Flooring',         unit: '/sqft' },
    { key: 'electrical', label: 'Electrical',       unit: '/sqft' },
    { key: 'plumbing',   label: 'Plumbing',         unit: '/sqft' },
    { key: 'doors',      label: 'Doors',            unit: '/door' },
    { key: 'windows',    label: 'Windows',          unit: '/window' },
    { key: 'painting',   label: 'Painting',         unit: '/sqft' },
  ];
  container.innerHTML = rateItems.map(item => `
    <div class="rate-item">
      <label class="rate-label">${item.label}<span class="rate-unit">${item.unit}</span></label>
      <div class="rate-input-wrap">
        <span class="rate-rupee">₹</span>
        <input type="number" class="rate-input" id="rate-${item.key}"
          value="${userRates[item.key].rate}" min="1"
          onchange="updateRate('${item.key}', this.value)"/>
      </div>
    </div>`).join('');
}

function updateRate(key, value) {
  userRates[key].rate = parseFloat(value) || DEFAULT_RATES[key].rate;
}

function resetRates() {
  userRates = {};
  Object.keys(DEFAULT_RATES).forEach(k => {
    userRates[k] = { ...DEFAULT_RATES[k] };
  });
  buildRatesEditor();
  showToast('✅ Rates reset అయింది!');
}

function toggleRates() {
  const panel = document.getElementById('ratesPanel');
  const btn   = document.getElementById('rateToggleBtn');
  if (panel.style.display === 'none' || !panel.style.display) {
    panel.style.display = 'block';
    btn.textContent = '💹 Rates Close చేయండి';
  } else {
    panel.style.display = 'none';
    btn.textContent = '💹 Market Rates Edit చేయండి';
  }
}

// ===== GENERATE PLAN =====
async function generatePlan() {
  const plot     = getPlotDims();
  const floors   = document.getElementById('floors').value;
  const facing   = document.getElementById('facing').value;
  const budget   = parseFloat(document.getElementById('budgetLakh').value) || 25;
  const ctype    = document.getElementById('constructionType').value;
  const special  = document.getElementById('special').value;
  const state    = document.getElementById('stateSelect').value || 'Telangana';
  const district = document.getElementById('districtSelect').value || 'Gadwal';

  const selectedRooms = ROOMS.filter(r => roomCounts[r.id] > 0)
    .map(r => `${roomCounts[r.id]} ${r.en}`).join(', ');

  if (!selectedRooms) { showToast('⚠️ కనీసం 1 room select చేయండి'); return; }

  document.getElementById('generateBtn').disabled = true;
  document.getElementById('loader').style.display = 'block';
  document.getElementById('result-section').style.display = 'none';

  const langLabel = currentLang === 'te' ? 'Telugu' : currentLang === 'hi' ? 'Hindi' : 'English';

  const prompt = `You are a licensed Civil Engineer and Vastu expert in India.
Create a professional house floor plan for:
- Location: ${district}, ${state}, India
- Plot: ${plot.l}×${plot.w} ft (${plot.l * plot.w} sqft total)
- Floors: ${floors}
- Main door facing: ${facing} direction
- Rooms required: ${selectedRooms}
- Total Budget: ₹${budget} Lakhs
- Construction quality: ${ctype}
- Special needs: ${special || 'none'}

Respond ENTIRELY in ${langLabel}. Return ONLY valid JSON (no markdown, no extra text):
{
  "vastuScore": <integer 1-10>,
  "vastuTips": ["<tip1>","<tip2>","<tip3>","<tip4>","<tip5>"],
  "layout": "<Professional 8-10 sentence room-by-room layout description in ${langLabel}>",
  "rooms2D": [
    {
      "name": "<room name in ${langLabel}>",
      "nameEn": "<room name in English>",
      "x": <0-85, grid position>,
      "y": <0-85, grid position>,
      "w": <10-40, width on 100x100 grid>,
      "h": <10-40, height on 100x100 grid>,
      "type": "<bedroom|hall|kitchen|bathroom|pooja|parking|other>",
      "widthFt": <actual width in feet>,
      "heightFt": <actual height in feet>,
      "doors": [{"side":"<north|south|east|west>","pos":0.5}],
      "windows": [{"side":"<north|south|east|west>","pos":0.3}]
    }
  ],
  "materials": [
    {"item":"Cement","qty":<bags>,"unit":"bags","ratePerUnit":400,"amount":<total>},
    {"item":"Steel","qty":<kg>,"unit":"kg","ratePerUnit":75,"amount":<total>},
    {"item":"Bricks","qty":<nos>,"unit":"nos","ratePerUnit":8,"amount":<total>},
    {"item":"Sand","qty":<loads>,"unit":"loads","ratePerUnit":3500,"amount":<total>},
    {"item":"Labour","qty":${plot.l * plot.w * parseInt(floors)},"unit":"sqft","ratePerUnit":450,"amount":<total>},
    {"item":"Flooring","qty":${plot.l * plot.w * parseInt(floors)},"unit":"sqft","ratePerUnit":80,"amount":<total>},
    {"item":"Electrical","qty":${plot.l * plot.w * parseInt(floors)},"unit":"sqft","ratePerUnit":45,"amount":<total>},
    {"item":"Plumbing","qty":${plot.l * plot.w * parseInt(floors)},"unit":"sqft","ratePerUnit":35,"amount":<total>},
    {"item":"Doors & Windows","qty":"Lumpsum","unit":"","ratePerUnit":0,"amount":<total>},
    {"item":"Painting","qty":${plot.l * plot.w * parseInt(floors)},"unit":"sqft","ratePerUnit":25,"amount":<total>}
  ]
}
CRITICAL rules for rooms2D:
1. Rooms must NOT overlap at all
2. Cover 80-90% of the plot area
3. Each room must have realistic dimensions
4. Place rooms logically (kitchen near dining, bathrooms near bedrooms)
5. Leave space for walls (each wall ~1ft = ~1 grid unit)
6. Coordinates start at (0,0) top-left`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.4,
        max_tokens: 3000
      })
    });

    const data = await res.json();
    let raw = data.choices?.[0]?.message?.content || '{}';
    raw = raw.replace(/```json|```/g, '').trim();

    // Find JSON in response
    const jsonStart = raw.indexOf('{');
    const jsonEnd   = raw.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      raw = raw.substring(jsonStart, jsonEnd + 1);
    }

    const plan = JSON.parse(raw);
    lastPlan = plan;
    renderResults(plan, plot, budget, floors, district);

  } catch (err) {
    console.error('Error:', err);
    showToast('❌ Error! Please try again.');
    document.getElementById('generateBtn').disabled = false;
    document.getElementById('loader').style.display = 'none';
  }
}

// ===== RENDER RESULTS =====
function renderResults(plan, plot, budget, floors, district) {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
  document.getElementById('generateBtn').disabled = false;

  const score = Math.min(10, Math.max(1, plan.vastuScore || 7));
  animateVastuScore(score);

  const tips = plan.vastuTips || [];
  document.getElementById('vastuList').innerHTML = tips.map(t => `<li>${t}</li>`).join('');
  document.getElementById('vastuTitle').textContent = STRINGS[currentLang].vastuTitle;

  // Draw CAD Plan
  drawCADPlan(plan.rooms2D || [], plot, floors);

  // 3D Scene
  build3DScene(plan.rooms2D || []);

  // Materials with user rates
  renderMaterials(plan.materials || [], budget, plot, floors);

  // AI Layout
  document.getElementById('aiPlanText').textContent = plan.layout || '';

  setTimeout(() =>
    document.getElementById('vastuCard').scrollIntoView({ behavior: 'smooth', block: 'start' }), 300
  );
}

// ===== VASTU SCORE =====
function animateVastuScore(score) {
  const arc = document.getElementById('vastuArc');
  const num = document.getElementById('vastuNum');
  if (!arc || !num) return;
  arc.style.strokeDashoffset = 226 - (score / 10) * 226;
  arc.style.stroke = ['#ff4d6d','#ff6b35','#ffd166','#a8e063','#00c896'][Math.min(4, Math.floor((score - 1) / 2))];
  let cur = 0;
  const step = () => {
    cur = Math.min(score, cur + 0.15);
    num.textContent = cur.toFixed(1);
    if (cur < score) requestAnimationFrame(step);
    else num.textContent = score;
  };
  requestAnimationFrame(step);
}

// ===== CAD-STYLE 2D PLAN =====
function drawCADPlan(rooms2D, plot, floors) {
  const canvas = document.getElementById('blueprintCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  // Margins
  const ML = 60, MR = 30, MT = 50, MB = 60;
  const PW = W - ML - MR;
  const PH = H - MT - MB;

  ctx.clearRect(0, 0, W, H);

  // Background
  ctx.fillStyle = '#0a1628';
  ctx.fillRect(0, 0, W, H);

  // Grid (light)
  ctx.strokeStyle = 'rgba(77,166,255,0.06)';
  ctx.lineWidth = 0.5;
  for (let x = ML; x <= ML + PW; x += PW / 10) {
    ctx.beginPath(); ctx.moveTo(x, MT); ctx.lineTo(x, MT + PH); ctx.stroke();
  }
  for (let y = MT; y <= MT + PH; y += PH / 10) {
    ctx.beginPath(); ctx.moveTo(ML, y); ctx.lineTo(ML + PW, y); ctx.stroke();
  }

  // Scale functions
  const toX = (gx) => ML + (gx / 100) * PW;
  const toY = (gy) => MT + (gy / 100) * PH;
  const toW = (gw) => (gw / 100) * PW;
  const toH = (gh) => (gh / 100) * PH;

  // Room colors by type
  const roomColors = {
    bedroom:  { fill: 'rgba(26,74,138,0.5)',  stroke: '#4da6ff' },
    hall:     { fill: 'rgba(26,107,90,0.5)',  stroke: '#00e5cc' },
    kitchen:  { fill: 'rgba(107,74,26,0.5)',  stroke: '#ffd166' },
    bathroom: { fill: 'rgba(60,20,80,0.5)',   stroke: '#c084fc' },
    pooja:    { fill: 'rgba(107,26,26,0.5)',  stroke: '#ff8566' },
    parking:  { fill: 'rgba(30,50,30,0.5)',   stroke: '#86efac' },
    other:    { fill: 'rgba(40,40,70,0.5)',   stroke: '#94a3b8' }
  };

  // Draw rooms
  if (rooms2D.length > 0) {
    rooms2D.forEach(r => {
      const rx = toX(r.x), ry = toY(r.y);
      const rw = toW(r.w), rh = toH(r.h);
      const colors = roomColors[r.type] || roomColors.other;

      // Room fill
      ctx.fillStyle = colors.fill;
      ctx.fillRect(rx, ry, rw, rh);

      // Outer wall (thick)
      ctx.strokeStyle = colors.stroke;
      ctx.lineWidth = 3;
      ctx.strokeRect(rx, ry, rw, rh);

      // Inner wall line (thin offset)
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.strokeRect(rx + 4, ry + 4, rw - 8, rh - 8);

      // Draw door arc
      if (r.doors && r.doors.length > 0) {
        r.doors.forEach(door => {
          drawDoor(ctx, rx, ry, rw, rh, door);
        });
      }

      // Draw windows
      if (r.windows && r.windows.length > 0) {
        r.windows.forEach(win => {
          drawWindow(ctx, rx, ry, rw, rh, win, colors.stroke);
        });
      }

      // Room name
      ctx.fillStyle = '#e8f4ff';
      const nameFontSize = Math.max(9, Math.min(13, rw / 7));
      ctx.font = `bold ${nameFontSize}px 'Rajdhani', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Truncate long names
      let label = r.name || r.nameEn || '';
      if (ctx.measureText(label).width > rw - 10) {
        while (ctx.measureText(label + '…').width > rw - 10 && label.length > 3) {
          label = label.slice(0, -1);
        }
        label += '…';
      }
      ctx.fillText(label, rx + rw / 2, ry + rh / 2 - 7);

      // Room dimensions
      if (r.widthFt && r.heightFt) {
        ctx.font = `${Math.max(7, nameFontSize - 3)}px 'Share Tech Mono', monospace`;
        ctx.fillStyle = colors.stroke;
        ctx.fillText(`${r.widthFt}'×${r.heightFt}'`, rx + rw / 2, ry + rh / 2 + 8);
      }
    });
  }

  // Outer plot border (very thick)
  ctx.strokeStyle = 'rgba(77,166,255,0.9)';
  ctx.lineWidth = 4;
  ctx.strokeRect(ML, MT, PW, PH);

  // Dimension lines
  drawDimensions(ctx, ML, MT, PW, PH, plot);

  // North Arrow
  drawNorthArrow(ctx, W - 40, MT + 30);

  // Title block
  drawTitleBlock(ctx, W, H, plot, floors);

  // Scale bar
  drawScaleBar(ctx, ML, MT + PH + 30, PW, plot);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
}

function drawDoor(ctx, rx, ry, rw, rh, door) {
  const doorSize = Math.min(rw, rh) * 0.25;
  ctx.strokeStyle = '#ffd166';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#0a1628';

  let dx, dy, startAngle, endAngle;

  switch (door.side) {
    case 'south':
      dx = rx + rw * (door.pos || 0.5) - doorSize / 2;
      dy = ry + rh - 3;
      // Fill door gap
      ctx.fillRect(dx, dy - 1, doorSize, 5);
      // Door arc
      ctx.beginPath();
      ctx.arc(dx, dy, doorSize, 0, -Math.PI / 2, true);
      ctx.stroke();
      // Door line
      ctx.beginPath();
      ctx.moveTo(dx, dy);
      ctx.lineTo(dx + doorSize, dy);
      ctx.stroke();
      break;
    case 'north':
      dx = rx + rw * (door.pos || 0.5) - doorSize / 2;
      dy = ry + 3;
      ctx.fillRect(dx, dy - 3, doorSize, 5);
      ctx.beginPath();
      ctx.arc(dx, dy, doorSize, 0, Math.PI / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(dx, dy);
      ctx.lineTo(dx + doorSize, dy);
      ctx.stroke();
      break;
    case 'east':
      dx = rx + rw - 3;
      dy = ry + rh * (door.pos || 0.5) - doorSize / 2;
      ctx.fillRect(dx - 1, dy, 5, doorSize);
      ctx.beginPath();
      ctx.arc(dx, dy, doorSize, Math.PI / 2, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(dx, dy);
      ctx.lineTo(dx, dy + doorSize);
      ctx.stroke();
      break;
    case 'west':
    default:
      dx = rx + 3;
      dy = ry + rh * (door.pos || 0.5) - doorSize / 2;
      ctx.fillRect(dx - 3, dy, 5, doorSize);
      ctx.beginPath();
      ctx.arc(dx, dy, doorSize, -Math.PI / 2, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(dx, dy);
      ctx.lineTo(dx, dy + doorSize);
      ctx.stroke();
      break;
  }
}

function drawWindow(ctx, rx, ry, rw, rh, win, color) {
  const winSize = Math.min(rw, rh) * 0.3;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;

  switch (win.side) {
    case 'north':
      const wx1 = rx + rw * (win.pos || 0.5) - winSize / 2;
      // 3 parallel lines for window
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(wx1 + (winSize / 3) * i, ry);
        ctx.lineTo(wx1 + (winSize / 3) * i, ry + 8);
        ctx.stroke();
      }
      break;
    case 'south':
      const wx2 = rx + rw * (win.pos || 0.5) - winSize / 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(wx2 + (winSize / 3) * i, ry + rh - 8);
        ctx.lineTo(wx2 + (winSize / 3) * i, ry + rh);
        ctx.stroke();
      }
      break;
    case 'east':
      const wy1 = ry + rh * (win.pos || 0.5) - winSize / 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(rx + rw - 8, wy1 + (winSize / 3) * i);
        ctx.lineTo(rx + rw, wy1 + (winSize / 3) * i);
        ctx.stroke();
      }
      break;
    case 'west':
      const wy2 = ry + rh * (win.pos || 0.5) - winSize / 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(rx, wy2 + (winSize / 3) * i);
        ctx.lineTo(rx + 8, wy2 + (winSize / 3) * i);
        ctx.stroke();
      }
      break;
  }
}

function drawDimensions(ctx, ML, MT, PW, PH, plot) {
  ctx.strokeStyle = 'rgba(77,166,255,0.7)';
  ctx.fillStyle = 'rgba(77,166,255,0.9)';
  ctx.lineWidth = 1;
  ctx.font = '11px Share Tech Mono, monospace';
  ctx.textAlign = 'center';

  // Bottom dimension (width)
  const y1 = MT + PH + 15;
  ctx.beginPath(); ctx.moveTo(ML, y1); ctx.lineTo(ML + PW, y1); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ML, y1 - 5); ctx.lineTo(ML, y1 + 5); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ML + PW, y1 - 5); ctx.lineTo(ML + PW, y1 + 5); ctx.stroke();
  ctx.fillText(`${plot.l}'-0"`, ML + PW / 2, y1 + 12);

  // Left dimension (height)
  ctx.save();
  ctx.translate(ML - 15, MT + PH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(`${plot.w}'-0"`, 0, 0);
  ctx.restore();

  // Left dim line
  const x1 = ML - 10;
  ctx.beginPath(); ctx.moveTo(x1, MT); ctx.lineTo(x1, MT + PH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x1 - 4, MT); ctx.lineTo(x1 + 4, MT); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x1 - 4, MT + PH); ctx.lineTo(x1 + 4, MT + PH); ctx.stroke();
}

function drawNorthArrow(ctx, x, y) {
  ctx.save();
  ctx.strokeStyle = '#4da6ff';
  ctx.fillStyle = '#4da6ff';
  ctx.lineWidth = 2;

  // Arrow
  ctx.beginPath();
  ctx.moveTo(x, y - 18);
  ctx.lineTo(x - 7, y + 5);
  ctx.lineTo(x, y - 2);
  ctx.lineTo(x + 7, y + 5);
  ctx.closePath();
  ctx.fill();

  // Circle
  ctx.beginPath();
  ctx.arc(x, y, 14, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(77,166,255,0.5)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // N text
  ctx.fillStyle = '#e8f4ff';
  ctx.font = 'bold 11px Rajdhani, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('N', x, y + 26);
  ctx.restore();
}

function drawTitleBlock(ctx, W, H, plot, floors) {
  // Title at top
  ctx.fillStyle = 'rgba(77,166,255,0.8)';
  ctx.font = 'bold 13px Rajdhani, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`FLOOR PLAN — ${plot.l}×${plot.w} ft — ${floors === '1' ? 'G' : floors === '2' ? 'G+1' : 'G+2'} FLOORS`, W / 2, 28);

  ctx.font = '9px Share Tech Mono, monospace';
  ctx.fillStyle = 'rgba(77,166,255,0.5)';
  ctx.fillText('SCALE: 1:100 | ALL DIMENSIONS IN FEET | NIRMAAN AI HOUSE PLANNER', W / 2, H - 8);
}

function drawScaleBar(ctx, ML, y, PW, plot) {
  const barW = 80;
  const barH = 6;
  const bx = ML;

  ctx.fillStyle = 'rgba(77,166,255,0.4)';
  ctx.fillRect(bx, y, barW / 2, barH);
  ctx.fillStyle = 'rgba(77,166,255,0.8)';
  ctx.fillRect(bx + barW / 2, y, barW / 2, barH);

  ctx.strokeStyle = 'rgba(77,166,255,0.8)';
  ctx.lineWidth = 1;
  ctx.strokeRect(bx, y, barW, barH);

  ctx.fillStyle = 'rgba(77,166,255,0.8)';
  ctx.font = '8px Share Tech Mono, monospace';
  ctx.textAlign = 'center';
  ctx.fillText('0', bx, y - 3);
  ctx.fillText(`${Math.round(plot.l / 2)}'`, bx + barW / 2, y - 3);
  ctx.fillText(`${plot.l}'`, bx + barW, y - 3);
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(77,166,255,0.5)';
  ctx.fillText('SCALE BAR', bx + barW + 8, y + 5);
}

// ===== 3D SCENE =====
function build3DScene(rooms2D) {
  const scene = document.getElementById('scene3d');
  if (!scene) return;

  if (!rooms2D.length) {
    scene.innerHTML = '<div style="color:var(--text-muted);text-align:center;width:100%;padding:40px">3D data unavailable</div>';
    return;
  }

  const C3D = [
    'rgba(26,74,138,0.85)','rgba(26,107,90,0.85)','rgba(107,74,26,0.85)',
    'rgba(90,26,107,0.85)','rgba(107,26,26,0.85)','rgba(26,90,74,0.85)',
    'rgba(74,107,26,0.85)','rgba(26,74,107,0.85)','rgba(107,107,26,0.85)'
  ];

  const cols = 10, rows = 7;
  const floor = document.createElement('div');
  floor.className = 'scene-floor';
  floor.style.gridTemplateColumns = `repeat(${cols}, 32px)`;
  floor.style.gridTemplateRows    = `repeat(${rows}, 24px)`;

  const cells = Array.from({ length: rows }, () => Array(cols).fill(null));

  rooms2D.forEach((r, idx) => {
    const c0 = Math.floor((r.x / 100) * cols);
    const r0 = Math.floor((r.y / 100) * rows);
    const c1 = Math.min(cols - 1, Math.floor(((r.x + r.w) / 100) * cols));
    const r1 = Math.min(rows - 1, Math.floor(((r.y + r.h) / 100) * rows));
    for (let rr = r0; rr <= r1; rr++)
      for (let cc = c0; cc <= c1; cc++)
        cells[rr][cc] = { name: r.name || r.nameEn, color: C3D[idx % C3D.length] };
  });

  cells.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const div = document.createElement('div');
      div.className = 'room-block';
      div.style.width  = '32px';
      div.style.height = '24px';
      div.style.animationDelay = `${(ri * cols + ci) * 0.02}s`;
      if (cell) {
        div.style.background  = cell.color;
        div.style.borderColor = 'rgba(77,166,255,0.6)';
        div.title = cell.name;
      } else {
        div.style.background  = 'rgba(10,22,40,0.7)';
        div.style.borderColor = 'rgba(77,166,255,0.06)';
      }
      floor.appendChild(div);
    });
  });

  scene.innerHTML = '';
  scene.appendChild(floor);
}

function rotate3d() {
  rotAngle = (rotAngle + 45) % 360;
  const floor = document.querySelector('.scene-floor');
  if (floor) floor.style.transform = `rotateX(50deg) rotateZ(${-20 + rotAngle}deg)`;
}

// ===== MATERIAL TABLE =====
function renderMaterials(materials, budgetLakh, plot, floors) {
  const tbody = document.getElementById('matBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  let total = 0;
  const area = plot.l * plot.w * parseInt(floors);

  materials.forEach(m => {
    // Apply user rates if available
    let amount = m.amount || 0;
    const rateKey = getRateKey(m.item);
    if (rateKey && userRates[rateKey]) {
      const qty = m.qty || 0;
      if (typeof qty === 'number') {
        amount = qty * userRates[rateKey].rate;
      }
    }
    total += amount;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${m.item}</td>
      <td style="color:var(--text-muted)">${typeof m.qty === 'number' ? m.qty.toLocaleString('en-IN') : m.qty} ${m.unit || ''}</td>
      <td style="color:var(--text-muted);font-size:0.78rem">${rateKey && userRates[rateKey] ? '₹' + userRates[rateKey].rate + '/' + userRates[rateKey].unit : ''}</td>
      <td class="cost-cell">₹${Math.round(amount).toLocaleString('en-IN')}</td>`;
    tbody.appendChild(tr);
  });

  const budgetINR = budgetLakh * 100000;
  const diff = budgetINR - total;
  const totalEl = document.getElementById('matTotal');
  if (totalEl) {
    totalEl.innerHTML = `₹${Math.round(total).toLocaleString('en-IN')} 
      <span style="font-size:0.8rem;color:${diff >= 0 ? 'var(--vastu-green)' : 'var(--danger)'}">
        ${diff >= 0 ? '✅ Budget లో ఉంది' : '⚠️ Budget మించింది ₹' + Math.abs(Math.round(diff)).toLocaleString('en-IN')}
      </span>`;
  }
}

function getRateKey(itemName) {
  const n = itemName.toLowerCase();
  if (n.includes('cement')) return 'cement';
  if (n.includes('steel')) return 'steel';
  if (n.includes('brick')) return 'bricks';
  if (n.includes('sand')) return 'sand';
  if (n.includes('labour') || n.includes('labor')) return 'labour';
  if (n.includes('floor')) return 'flooring';
  if (n.includes('electr')) return 'electrical';
  if (n.includes('plumb')) return 'plumbing';
  if (n.includes('paint')) return 'painting';
  return null;
}

// ===== WHATSAPP SHARE =====
function shareWhatsApp() {
  const plot    = document.getElementById('plotSize').value;
  const budget  = document.getElementById('budgetLakh').value;
  const facing  = document.getElementById('facing').value;
  const vastu   = document.getElementById('vastuNum')?.textContent || '?';
  const district= document.getElementById('districtSelect')?.value || '';
  const state   = document.getElementById('stateSelect')?.value || '';
  const rooms   = ROOMS.filter(r => roomCounts[r.id] > 0)
    .map(r => `${roomCounts[r.id]}× ${r.en}`).join(', ');
  const layout  = document.getElementById('aiPlanText')?.textContent?.substring(0, 300) || '';

  const msg = encodeURIComponent(
    `🏠 *AI House Plan — Nirmaan AI*\n\n` +
    `📍 Location: ${district}, ${state}\n` +
    `📐 Plot: ${plot} ft\n` +
    `🚪 Facing: ${facing}\n` +
    `🛏️ Rooms: ${rooms}\n` +
    `💰 Budget: ₹${budget} Lakhs\n` +
    `🔱 Vastu Score: ${vastu}/10\n\n` +
    `📋 Layout:\n${layout}...\n\n` +
    `🏗️ Generated by Nirmaan AI House Planner\n` +
    `ai-house-planner.vercel.app`
  );
  window.open('https://wa.me/?text=' + msg, '_blank');
}

// ===== RESET =====
function resetForm() {
  document.getElementById('result-section').style.display = 'none';
  ROOMS.forEach(r => { roomCounts[r.id] = r.default; });
  setLang(currentLang);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== TOAST =====
function showToast(msg, dur = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}