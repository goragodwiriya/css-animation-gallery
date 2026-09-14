/* ============================================================
   CSS Animation Gallery — ตรรกะหลักของเว็บ
   ============================================================ */
const $ = (s) => document.querySelector(s);

const CATS = {
  loading: { th: 'ตัวโหลด',    icon: '⏳' },
  text:    { th: 'ข้อความ',    icon: '🅰️' },
  button:  { th: 'ปุ่ม',       icon: '🔘' },
  element: { th: 'องค์ประกอบ', icon: '🧩' },
  three:   { th: 'สามมิติ',    icon: '🧊' },
  bg:      { th: 'พื้นหลัง',   icon: '🎨' },
};

const grid = $('#grid');
const chips = $('#chips');
const toast = $('#toast');
let curCat = 'all';
let curQ = '';
let toastTimer;

/* ---------- ยูทิลิตี้ ---------- */
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ไฮไลต์โค้ด CSS แบบง่าย */
function hiCSS(code) {
  return esc(code)
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<i class="c-com">$1</i>')
    .replace(/(@[a-zA-Z-]+)/g, '<i class="c-at">$1</i>')
    .replace(/([{;]\s*)([a-zA-Z-]+)(\s*:)/g, '$1<i class="c-prop">$2</i>$3')
    .replace(/(-?\d+\.?\d*)(px|rem|em|%|s|ms|deg|ch|fr|vw|vh)?\b/g, '<i class="c-num">$1$2</i>');
}

/* ไฮไลต์โค้ด HTML แบบง่าย (ทำ attribute ก่อน tag) */
function hiHTML(code) {
  return esc(code)
    .replace(/(\s)([a-zA-Z-]+)="([^"]*)"/g, '$1<i class="h-attr">$2</i>="<i class="h-val">$3</i>"')
    .replace(/(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<i class="h-tag">$2</i>');
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyText(text, msg) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast(msg);
}

function fullCode(a) {
  return `<!-- ${a.name} — ${a.th} -->\n${a.html}\n\n/* ${a.name} — ${a.th} */\n${a.css}`;
}

/* ---------- เรนเดอร์การ์ด ---------- */
function cardHTML(a) {
  const search = (a.name + ' ' + a.th + ' ' + CATS[a.cat].th).toLowerCase();
  return `<article class="card" data-id="${a.id}" data-cat="${a.cat}" data-search="${search}">
  <div class="preview">
    ${a.hint ? '<span class="hint">Hover ชี้เมาส์</span>' : ''}
    <button class="replay" title="เล่นซ้ำ">⟳</button>
    <div class="demo">${a.html}</div>
  </div>
  <div class="card-body">
    <div class="card-title">
      <span class="cat-badge">${CATS[a.cat].icon} ${CATS[a.cat].th}</span>
      <h3>${a.name}</h3><span class="th">${a.th}</span>
    </div>
    <div class="card-actions">
      <button class="btn-mini primary" data-act="copy-all">📋 คัดลอกทั้งหมด</button>
      <button class="btn-mini" data-act="toggle">&lt;/&gt; ดูโค้ด</button>
    </div>
    <div class="code-area">
      <div class="code-tabs">
        <button class="tab active" data-tab="html">HTML</button>
        <button class="tab" data-tab="css">CSS</button>
        <button class="btn-mini" data-act="copy-code">Copy</button>
      </div>
      <pre class="pre-html"><code>${hiHTML(a.html)}</code></pre>
      <pre class="pre-css hidden"><code>${hiCSS(a.css)}</code></pre>
    </div>
  </div>
</article>`;
}

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.06 }
);

function render() {
  const q = curQ.trim();
  const ql = q.toLowerCase();
  const list = ANIMATIONS.filter((a) =>
    (curCat === 'all' || a.cat === curCat) &&
    (!q || a.name.toLowerCase().includes(ql) || a.th.includes(q))
  );
  grid.innerHTML = list.length
    ? list.map(cardHTML).join('')
    : '<div class="empty"><span class="big">🕵️</span>ไม่พบแอนิเมชันที่ค้นหา ลองพิมพ์คำอื่นดูนะ</div>';
  grid.querySelectorAll('.card').forEach((c) => io.observe(c));
}

/* ---------- ชิปหมวดหมู่ ---------- */
function renderChips() {
  const items = [
    { id: 'all', icon: '✨', th: 'ทั้งหมด', n: ANIMATIONS.length },
    ...Object.entries(CATS).map(([id, c]) => ({
      id, ...c, n: ANIMATIONS.filter((a) => a.cat === id).length,
    })),
  ];
  chips.innerHTML = items.map((c) =>
    `<button class="chip${c.id === curCat ? ' active' : ''}" data-cat="${c.id}">${c.icon} ${c.th}<span class="cnt">${c.n}</span></button>`
  ).join('');
}

chips.addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  curCat = b.dataset.cat;
  renderChips();
  render();
});

/* ---------- จัดการคลิกภายในการ์ด ---------- */
grid.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const a = ANIMATIONS.find((x) => x.id === card.dataset.id);
  if (!a) return;

  /* เล่นซ้ำ — แทนที่ demo ใหม่เพื่อรีสตาร์ทแอนิเมชัน */
  if (e.target.closest('.replay')) {
    card.querySelector('.demo').innerHTML = a.html;
    return;
  }

  if (e.target.closest('[data-act="copy-all"]')) {
    copyText(fullCode(a), `คัดลอก "${a.name}" แล้ว ✨`);
    return;
  }

  if (e.target.closest('[data-act="toggle"]')) {
    card.querySelector('.code-area').classList.toggle('open');
    return;
  }

  if (e.target.closest('[data-act="copy-code"]')) {
    const area = card.querySelector('.code-area');
    const isCss = !area.querySelector('.pre-css').classList.contains('hidden');
    copyText(isCss ? a.css : a.html, isCss ? 'คัดลอก CSS แล้ว ✨' : 'คัดลอก HTML แล้ว ✨');
    return;
  }

  /* สลับแท็บ HTML / CSS */
  const tab = e.target.closest('.tab');
  if (tab) {
    const area = card.querySelector('.code-area');
    area.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === tab));
    area.querySelector('.pre-html').classList.toggle('hidden', tab.dataset.tab !== 'html');
    area.querySelector('.pre-css').classList.toggle('hidden', tab.dataset.tab !== 'css');
  }
});

/* ---------- ช่องค้นหา (ซิงก์ทั้งสองจุด) ---------- */
const heroSearch = $('#heroSearch');
const navSearch = $('#navSearch');

function onSearch(v) {
  curQ = v;
  if (heroSearch.value !== v) heroSearch.value = v;
  if (navSearch.value !== v) navSearch.value = v;
  render();
}
[heroSearch, navSearch].forEach((el) =>
  el.addEventListener('input', () => onSearch(el.value))
);

/* กด "/" เพื่อโฟกัสช่องค้นหา */
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    heroSearch.focus();
  }
});

/* ---------- สลับธีมสว่าง / มืด ---------- */
const themeBtn = $('#themeToggle');

function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === 'light' ? '🌙' : '☀️';
  try { localStorage.setItem('ag-theme', t); } catch (e) { /* ไม่มี localStorage */ }
}
try { setTheme(localStorage.getItem('ag-theme') || 'dark'); }
catch (e) { setTheme('dark'); }

themeBtn.addEventListener('click', () =>
  setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light')
);

/* ---------- เริ่มต้น ---------- */
$('#animStyles').textContent = ANIMATIONS.map((a) => a.css).join('\n');
$('#statCount').textContent = ANIMATIONS.length;
renderChips();
render();
