/* ============================================================
   คลังแอนิเมชัน CSS — ข้อมูลแอนิเมชันทั้งหมด
  cat: loading | text | button | element | three | bg
  hint: 'hover' = ต้องเอาเมาส์ชี้ที่ตัวอย่างเพื่อดูเอฟเฟกต์
   ============================================================ */
const ANIMATIONS = [

  /* ================= ตัวโหลด / SPINNERS ================= */
  {
    id: 'ld-spin', name: 'Classic Spinner', th: 'ตัวหมุนคลาสสิก', cat: 'loading',
    html: `<div class="ld-spin"></div>`,
    css: `/* Classic Spinner — ตัวหมุนคลาสสิก */
.ld-spin {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(148, 163, 184, 0.25);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: ld-spin 1s linear infinite;
}
@keyframes ld-spin {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 'ld-dual', name: 'Dual Ring Spinner', th: 'วงแหวนคู่หมุน', cat: 'loading',
    html: `<div class="ld-dual"></div>`,
    css: `/* Dual Ring Spinner — วงแหวนคู่หมุน */
.ld-dual {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: #06b6d4;
  border-bottom-color: #06b6d4;
  animation: ld-dual 1s ease infinite;
}
@keyframes ld-dual {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 'ld-bounce', name: 'Bouncing Dots', th: 'จุดเด้งขึ้นลง', cat: 'loading',
    html: `<div class="ld-bounce"><span></span><span></span><span></span></div>`,
    css: `/* Bouncing Dots — จุดเด้งขึ้นลง */
.ld-bounce { display: flex; gap: 8px; }
.ld-bounce span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  animation: ld-bounce 0.6s ease-in-out infinite alternate;
}
.ld-bounce span:nth-child(2) { animation-delay: 0.2s; }
.ld-bounce span:nth-child(3) { animation-delay: 0.4s; }
@keyframes ld-bounce {
  to { transform: translateY(-16px); }
}`
  },
  {
    id: 'ld-flash', name: 'Flashing Dots', th: 'จุดกะพริบ', cat: 'loading',
    html: `<div class="ld-flash"><span></span><span></span><span></span></div>`,
    css: `/* Flashing Dots — จุดกะพริบ */
.ld-flash { display: flex; gap: 8px; }
.ld-flash span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #22d3ee;
  animation: ld-flash 1s ease-in-out infinite;
}
.ld-flash span:nth-child(2) { animation-delay: 0.16s; }
.ld-flash span:nth-child(3) { animation-delay: 0.32s; }
@keyframes ld-flash {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 1;   transform: scale(1); }
}`
  },
  {
    id: 'ld-radar', name: 'Radar Pulse', th: 'เรดาร์กระพริบ', cat: 'loading',
    html: `<div class="ld-radar"><span></span><span></span><span></span></div>`,
    css: `/* Radar Pulse — เรดาร์กระพริบ */
.ld-radar { position: relative; width: 64px; height: 64px; }
.ld-radar::after {
  content: "";
  position: absolute;
  inset: 26px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.8);
}
.ld-radar span {
  position: absolute;
  inset: 0;
  border: 3px solid #34d399;
  border-radius: 50%;
  animation: ld-radar 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ld-radar span:nth-child(2) { animation-delay: 0.66s; }
.ld-radar span:nth-child(3) { animation-delay: 1.33s; }
@keyframes ld-radar {
  from { transform: scale(0.2); opacity: 1; }
  to   { transform: scale(1);   opacity: 0; }
}`
  },
  {
    id: 'ld-wave', name: 'Wave Bars', th: 'แท่งคลื่นเสียง', cat: 'loading',
    html: `<div class="ld-wave"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `/* Wave Bars — แท่งคลื่นเสียง */
.ld-wave { display: flex; gap: 6px; height: 48px; align-items: center; }
.ld-wave span {
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(180deg, #38bdf8, #818cf8);
  animation: ld-wave 1s ease-in-out infinite;
}
.ld-wave span:nth-child(2) { animation-delay: 0.1s; }
.ld-wave span:nth-child(3) { animation-delay: 0.2s; }
.ld-wave span:nth-child(4) { animation-delay: 0.3s; }
.ld-wave span:nth-child(5) { animation-delay: 0.4s; }
@keyframes ld-wave {
  0%, 100% { transform: scaleY(0.3); }
  50%      { transform: scaleY(1); }
}`
  },
  {
    id: 'ld-flip', name: 'Flip Square', th: 'สี่เหลี่ยมพลิก', cat: 'loading',
    html: `<div class="ld-flip"></div>`,
    css: `/* Flip Square — สี่เหลี่ยมพลิก */
.ld-flip {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f59e0b, #f43f5e);
  animation: ld-flip 1.6s cubic-bezier(0.6, 0, 0.4, 1) infinite;
}
@keyframes ld-flip {
  0%   { transform: perspective(140px) rotateX(0) rotateY(0); }
  50%  { transform: perspective(140px) rotateX(-180deg) rotateY(0); }
  100% { transform: perspective(140px) rotateX(-180deg) rotateY(-180deg); }
}`
  },
  {
    id: 'ld-orbit', name: 'Orbit Spinner', th: 'ดาวหมุนรอบวงโคจร', cat: 'loading',
    html: `<div class="ld-orbit"><span></span></div>`,
    css: `/* Orbit Spinner — ดาวหมุนรอบวงโคจร */
.ld-orbit {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px dashed rgba(148, 163, 184, 0.4);
  animation: ld-orbit 1.4s linear infinite;
}
.ld-orbit span {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 12px #fbbf24;
}
@keyframes ld-orbit {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 'ld-progress', name: 'Striped Progress', th: 'แถบโหลดลายทางเคลื่อนที่', cat: 'loading',
    html: `<div class="ld-progress"><div class="ld-progress-bar"></div></div>`,
    css: `/* Striped Progress — แถบโหลดลายทางเคลื่อนที่ */
.ld-progress {
  width: 210px;
  height: 20px;
  padding: 3px;
  border-radius: 99px;
  background: rgba(148, 163, 184, 0.2);
  overflow: hidden;
}
.ld-progress-bar {
  height: 100%;
  border-radius: 99px;
  background: repeating-linear-gradient(45deg, #34d399 0 12px, #059669 12px 24px);
  animation: ld-stripes 0.8s linear infinite, ld-fill 2.6s ease-in-out infinite;
}
@keyframes ld-stripes {
  to { background-position: 34px 0; }
}
@keyframes ld-fill {
  0%   { width: 10%; }
  60%  { width: 88%; }
  100% { width: 10%; }
}`
  },
  {
    id: 'ld-skel', name: 'Skeleton Shimmer', th: 'โครงหน้าเว็บ (Skeleton)', cat: 'loading',
    html: `<div class="ld-skel">
  <div class="skel-avatar"></div>
  <div class="skel-body">
    <div class="skel-line" style="width: 90%"></div>
    <div class="skel-line" style="width: 70%"></div>
    <div class="skel-line" style="width: 45%"></div>
  </div>
</div>`,
    css: `/* Skeleton Shimmer — โครงหน้าเว็บระหว่างโหลด */
.ld-skel { width: 230px; }
.skel-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  flex: none;
  background: linear-gradient(90deg, rgba(148,163,184,0.15) 25%, rgba(148,163,184,0.4) 50%, rgba(148,163,184,0.15) 75%);
  background-size: 200% 100%;
  animation: skel 1.4s linear infinite;
}
.skel-line {
  height: 12px;
  border-radius: 6px;
  margin: 7px 0;
  background: linear-gradient(90deg, rgba(148,163,184,0.15) 25%, rgba(148,163,184,0.4) 50%, rgba(148,163,184,0.15) 75%);
  background-size: 200% 100%;
  animation: skel 1.4s linear infinite;
}
@keyframes skel {
  to { background-position: -200% 0; }
}`
  },
  {
    id: 'ld-typing', name: 'Typing Bubble', th: 'ฟองคุยกำลังพิมพ์', cat: 'loading',
    html: `<div class="ld-typing"><span></span><span></span><span></span></div>`,
    css: `/* Typing Bubble — ฟองคุย "กำลังพิมพ์..." */
.ld-typing {
  display: flex;
  gap: 5px;
  padding: 14px 18px;
  border-radius: 99px;
  border-bottom-left-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
}
.ld-typing span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #60a5fa;
  animation: ld-typing 1s ease-in-out infinite;
}
.ld-typing span:nth-child(2) { animation-delay: 0.16s; }
.ld-typing span:nth-child(3) { animation-delay: 0.32s; }
@keyframes ld-typing {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-6px); }
}`
  },
  {
    id: 'ld-conic', name: 'Gradient Ring', th: 'วงแหวนเกรเดียนต์หมุน', cat: 'loading',
    html: `<div class="ld-conic"></div>`,
    css: `/* Gradient Ring — วงแหวนเกรเดียนต์หมุน */
.ld-conic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(167,139,250,0) 0%, #a78bfa 25%, #22d3ee 50%, rgba(34,211,238,0) 75%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  animation: ld-conic 1s linear infinite;
}
@keyframes ld-conic {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 'ld-ripple', name: 'Ripple Loader', th: 'วงกลมขยายซ้อนกัน', cat: 'loading',
    html: `<div class="ld-ripple"><span></span><span></span></div>`,
    css: `/* Ripple Loader — วงกลมขยายซ้อนกัน */
.ld-ripple { position: relative; width: 64px; height: 64px; }
.ld-ripple span {
  position: absolute;
  border: 4px solid #f472b6;
  border-radius: 50%;
  animation: ld-ripple 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ld-ripple span:nth-child(2) {
  border-color: #60a5fa;
  animation-delay: -0.8s;
}
@keyframes ld-ripple {
  from { top: 28px; left: 28px; width: 0; height: 0; opacity: 1; }
  to   { top: 0; left: 0; width: 64px; height: 64px; opacity: 0; }
}`
  },
  {
    id: 'ld-eq', name: 'Equalizer Bars', th: 'อีควอไลเซอร์', cat: 'loading',
    html: `<div class="ld-eq"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `/* Equalizer Bars — อีควอไลเซอร์เพลง */
.ld-eq { display: flex; gap: 5px; align-items: flex-end; height: 48px; }
.ld-eq span {
  width: 9px;
  height: 100%;
  border-radius: 4px;
  transform-origin: bottom;
  background: linear-gradient(180deg, #fbbf24, #f97316);
  animation: ld-eq 1s ease-in-out infinite alternate;
}
.ld-eq span:nth-child(1) { animation-duration: 0.9s; }
.ld-eq span:nth-child(2) { animation-duration: 0.7s; }
.ld-eq span:nth-child(3) { animation-duration: 1.1s; }
.ld-eq span:nth-child(4) { animation-duration: 0.8s; }
.ld-eq span:nth-child(5) { animation-duration: 1s; }
.ld-eq span:nth-child(6) { animation-duration: 0.75s; }
.ld-eq span:nth-child(7) { animation-duration: 0.95s; }
@keyframes ld-eq {
  from { transform: scaleY(0.2); }
  to   { transform: scaleY(1); }
}`
  },
  {
    id: 'ld-grid9', name: 'Grid Pulse', th: 'ตารางจุดเต้นระลอก', cat: 'loading',
    html: `<div class="ld-grid9">
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
</div>`,
    css: `/* Grid Pulse — ตารางจุดเต้นเป็นระลอก */
.ld-grid9 { display: grid; grid-template-columns: repeat(3, 14px); gap: 6px; }
.ld-grid9 span {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background: #38bdf8;
  animation: ld-grid9 1.2s ease-in-out infinite;
}
.ld-grid9 span:nth-child(1) { animation-delay: 0s; }
.ld-grid9 span:nth-child(2),
.ld-grid9 span:nth-child(4) { animation-delay: 0.1s; }
.ld-grid9 span:nth-child(3),
.ld-grid9 span:nth-child(5),
.ld-grid9 span:nth-child(7) { animation-delay: 0.2s; }
.ld-grid9 span:nth-child(6),
.ld-grid9 span:nth-child(8) { animation-delay: 0.3s; }
.ld-grid9 span:nth-child(9) { animation-delay: 0.4s; }
@keyframes ld-grid9 {
  0%, 70%, 100% { transform: scale(1); opacity: 0.5; }
  35%           { transform: scale(1.35); opacity: 1; }
}`
  },
  {
    id: 'ld-pp', name: 'Ping Pong', th: 'ลูกกลมวิ่งไปกลับ', cat: 'loading',
    html: `<div class="ld-pp"><span></span></div>`,
    css: `/* Ping Pong — ลูกกลมวิ่งไปกลับ */
.ld-pp {
  position: relative;
  width: 130px;
  height: 26px;
  border-radius: 99px;
  background: rgba(148, 163, 184, 0.2);
}
.ld-pp span {
  position: absolute;
  top: 50%;
  left: 7px;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  border-radius: 50%;
  background: #f43f5e;
  box-shadow: 0 0 10px rgba(244, 63, 94, 0.7);
  animation: ld-pp 1.4s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
}
@keyframes ld-pp {
  to { left: calc(100% - 21px); }
}`
  },
  {
    id: 'ld-ios', name: 'Dots Chase', th: 'จุดไล่กันแบบ iOS', cat: 'loading',
    html: `<div class="ld-ios">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>`,
    css: `/* Dots Chase — จุดไล่กันแบบ iOS */
.ld-ios { position: relative; width: 52px; height: 52px; }
.ld-ios span {
  position: absolute;
  inset: 0;
  animation: ld-ios 1s linear infinite;
}
.ld-ios span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3.5px;
  border-radius: 50%;
  background: #cbd5e1;
}
.ld-ios span:nth-child(1) { transform: rotate(0deg);   animation-delay: 0s; }
.ld-ios span:nth-child(2) { transform: rotate(45deg);  animation-delay: 0.125s; }
.ld-ios span:nth-child(3) { transform: rotate(90deg);  animation-delay: 0.25s; }
.ld-ios span:nth-child(4) { transform: rotate(135deg); animation-delay: 0.375s; }
.ld-ios span:nth-child(5) { transform: rotate(180deg); animation-delay: 0.5s; }
.ld-ios span:nth-child(6) { transform: rotate(225deg); animation-delay: 0.625s; }
.ld-ios span:nth-child(7) { transform: rotate(270deg); animation-delay: 0.75s; }
.ld-ios span:nth-child(8) { transform: rotate(315deg); animation-delay: 0.875s; }
@keyframes ld-ios {
  0%   { opacity: 1; }
  100% { opacity: 0.1; }
}`
  },
  {
    id: 'ld-hour', name: 'Hourglass Flip', th: 'นาฬิกาทรายพลิก', cat: 'loading',
    html: `<div class="ld-hour"></div>`,
    css: `/* Hourglass Flip — นาฬิกาทรายพลิก */
.ld-hour {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: linear-gradient(135deg, #22d3ee, #0ea5e9);
  animation: ld-hour 2s ease-in-out infinite;
}
@keyframes ld-hour {
  0%   { transform: rotate(0) scaleY(1); }
  50%  { transform: rotate(180deg) scaleY(1); }
  60%  { transform: rotate(180deg) scaleY(0.2); }
  75%  { transform: rotate(360deg) scaleY(0.2); }
  100% { transform: rotate(360deg) scaleY(1); }
}`
  },

  /* ================= ข้อความ / TEXT ================= */
  {
    id: 'tx-flow', name: 'Gradient Flow Text', th: 'ตัวอักษรไล่สีไหล', cat: 'text',
    html: `<h2 class="tx-flow">GRADIENT</h2>`,
    css: `/* Gradient Flow Text — ตัวอักษรไล่สีไหล */
.tx-flow {
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(90deg, #f472b6, #a78bfa, #38bdf8, #f472b6);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: tx-flow 3s linear infinite;
}
@keyframes tx-flow {
  to { background-position: 300% 0; }
}`
  },
  {
    id: 'tx-type', name: 'Typewriter', th: 'เครื่องพิมพ์ดีด', cat: 'text',
    html: `<p class="tx-type">Hello, World!</p>`,
    css: `/* Typewriter — เครื่องพิมพ์ดีดพิมพ์-ลบวนไป */
.tx-type {
  width: 13ch;
  font-family: 'Courier New', monospace;
  font-size: 1.6rem;
  font-weight: 700;
  color: #34d399;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #34d399;
  animation: tx-type 3s steps(13) infinite alternate, tx-caret 0.7s step-end infinite;
}
@keyframes tx-type {
  from { width: 0; }
  to   { width: 13ch; }
}
@keyframes tx-caret {
  50% { border-color: transparent; }
}`
  },
  {
    id: 'tx-neon', name: 'Neon Flicker', th: 'นีออนกะพริบ', cat: 'text',
    html: `<h2 class="tx-neon">NEON</h2>`,
    css: `/* Neon Flicker — ตัวอักษรนีออนกะพริบ */
.tx-neon {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 6px;
  color: #fff0f8;
  text-shadow: 0 0 8px #ff00de, 0 0 18px #ff00de, 0 0 40px #ff00de, 0 0 75px #00e5ff;
  animation: tx-neon 2.5s linear infinite;
}
@keyframes tx-neon {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: 0 0 8px #ff00de, 0 0 18px #ff00de, 0 0 40px #ff00de, 0 0 75px #00e5ff;
  }
  20%, 24%, 55% { text-shadow: none; }
}`
  },
  {
    id: 'tx-wave', name: 'Wavy Text', th: 'ตัวอักษรเป็นคลื่น', cat: 'text',
    html: `<h2 class="tx-wave"><span>A</span><span>N</span><span>I</span><span>M</span><span>A</span><span>T</span><span>E</span></h2>`,
    css: `/* Wavy Text — ตัวอักษรเด้งเป็นคลื่น */
.tx-wave { display: flex; gap: 2px; font-size: 2.2rem; font-weight: 800; }
.tx-wave span {
  display: inline-block;
  background: linear-gradient(180deg, #60a5fa, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: tx-wave 1.2s ease-in-out infinite;
}
.tx-wave span:nth-child(2) { animation-delay: 0.1s; }
.tx-wave span:nth-child(3) { animation-delay: 0.2s; }
.tx-wave span:nth-child(4) { animation-delay: 0.3s; }
.tx-wave span:nth-child(5) { animation-delay: 0.4s; }
.tx-wave span:nth-child(6) { animation-delay: 0.5s; }
.tx-wave span:nth-child(7) { animation-delay: 0.6s; }
@keyframes tx-wave {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}`
  },
  {
    id: 'tx-shine', name: 'Shine Text', th: 'ตัวอักษรเงาวาบ', cat: 'text',
    html: `<h2 class="tx-shine">SHINY</h2>`,
    css: `/* Shine Text — แสงวาบกวาดผ่านตัวอักษร */
.tx-shine {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 3px;
  background: linear-gradient(110deg, #64748b 35%, #fff 50%, #64748b 65%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: tx-shine 2.5s linear infinite;
}
@keyframes tx-shine {
  to { background-position: -200% 0; }
}`
  },
  {
    id: 'tx-flip', name: 'Word Flipper', th: 'สลับคำแนวตั้ง', cat: 'text',
    html: `<div class="tx-flip">
  <div class="tx-flip-track">
    <span>ออกแบบ</span><span>พัฒนา</span><span>ส่งมอบ</span><span>ออกแบบ</span>
  </div>
</div>`,
    css: `/* Word Flipper — สลับคำเลื่อนขึ้นแนวตั้ง */
.tx-flip { height: 44px; overflow: hidden; font-size: 2.2rem; font-weight: 800; }
.tx-flip-track { animation: tx-flip 6s cubic-bezier(0.8, 0, 0.2, 1) infinite; }
.tx-flip-track span { display: block; height: 44px; line-height: 44px; }
.tx-flip-track span:nth-child(1),
.tx-flip-track span:nth-child(4) {
  background: linear-gradient(90deg, #f472b6, #fb923c);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.tx-flip-track span:nth-child(2) {
  background: linear-gradient(90deg, #22d3ee, #3b82f6);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.tx-flip-track span:nth-child(3) {
  background: linear-gradient(90deg, #a78bfa, #e879f9);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
@keyframes tx-flip {
  0%, 20%   { transform: translateY(0); }
  25%, 45%  { transform: translateY(-44px); }
  50%, 70%  { transform: translateY(-88px); }
  75%, 95%  { transform: translateY(-132px); }
  100%      { transform: translateY(-132px); }
}`
  },
  {
    id: 'tx-hue', name: 'Rainbow Hue', th: 'รุ้งหมุนสีวนไป', cat: 'text',
    html: `<h2 class="tx-hue">RAINBOW</h2>`,
    css: `/* Rainbow Hue — สีวนรอบตัวอักษรแบบรุ้ง */
.tx-hue {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 4px;
  color: #f43f5e;
  animation: tx-hue 3s linear infinite;
}
@keyframes tx-hue {
  to { filter: hue-rotate(360deg); }
}`
  },
  {
    id: 'tx-pop', name: 'Pop Letters', th: 'ตัวอักษรปรากฏทีละตัว', cat: 'text',
    html: `<h2 class="tx-pop"><span>P</span><span>O</span><span>P</span><span>&nbsp;</span><span>I</span><span>N</span><span>!</span></h2>`,
    css: `/* Pop Letters — ตัวอักษรโผล่-หายวนไปทีละตัว */
.tx-pop { display: flex; font-size: 2.3rem; font-weight: 800; }
.tx-pop span {
  background: linear-gradient(180deg, #fde047, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: tx-pop 1.8s ease infinite;
}
.tx-pop span:nth-child(2) { animation-delay: 0.1s; }
.tx-pop span:nth-child(3) { animation-delay: 0.2s; }
.tx-pop span:nth-child(4) { animation-delay: 0.3s; }
.tx-pop span:nth-child(5) { animation-delay: 0.4s; }
.tx-pop span:nth-child(6) { animation-delay: 0.5s; }
.tx-pop span:nth-child(7) { animation-delay: 0.6s; }
@keyframes tx-pop {
  0%        { transform: scale(0); opacity: 0; }
  40%, 80%  { transform: scale(1); opacity: 1; }
  100%      { transform: scale(0); opacity: 0; }
}`
  },
  {
    id: 'tx-glitch', name: 'Glitch Text', th: 'ตัวอักษร Glitch', cat: 'text',
    html: `<h2 class="tx-glitch" data-text="GLITCH">GLITCH</h2>`,
    css: `/* Glitch Text — ตัวอักษรสั่นแตกแบบ Glitch */
.tx-glitch {
  position: relative;
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 5px;
  color: #e2e8f0;
}
.tx-glitch::before,
.tx-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.tx-glitch::before {
  color: #f0f;
  animation: tx-glitch-a 2.5s infinite linear alternate-reverse;
}
.tx-glitch::after {
  color: #0ff;
  animation: tx-glitch-b 3s infinite linear alternate-reverse;
}
@keyframes tx-glitch-a {
  0%   { clip-path: inset(28% 0 62% 0); transform: translate(-4px, -2px); }
  20%  { clip-path: inset(82% 0 4% 0);  transform: translate(4px, 1px); }
  40%  { clip-path: inset(52% 0 28% 0); transform: translate(-2px, 2px); }
  60%  { clip-path: inset(12% 0 76% 0); transform: translate(3px, -1px); }
  80%  { clip-path: inset(64% 0 18% 0); transform: translate(-3px, 2px); }
  100% { clip-path: inset(40% 0 46% 0); transform: translate(2px, -2px); }
}
@keyframes tx-glitch-b {
  0%   { clip-path: inset(62% 0 18% 0); transform: translate(3px, 2px); }
  20%  { clip-path: inset(8% 0 78% 0);  transform: translate(-3px, -1px); }
  40%  { clip-path: inset(45% 0 40% 0); transform: translate(2px, -2px); }
  60%  { clip-path: inset(75% 0 8% 0);  transform: translate(-4px, 1px); }
  80%  { clip-path: inset(20% 0 65% 0); transform: translate(4px, 2px); }
  100% { clip-path: inset(50% 0 38% 0); transform: translate(-2px, -2px); }
}`
  },
  {
    id: 'tx-fill', name: 'Text Fill Hover', th: 'ระบายสีตัวอักษร (Hover)', cat: 'text', hint: 'hover',
    html: `<h2 class="tx-fill" data-text="PAINT ME">PAINT ME</h2>`,
    css: `/* Text Fill Hover — ระบายสีจากซ้ายไปขวาเมื่อชี้เมาส์ */
.tx-fill {
  position: relative;
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #64748b;
  cursor: default;
}
.tx-fill::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, #22d3ee, #a78bfa);
  background-repeat: no-repeat;
  background-size: 0 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: background-size 0.6s ease;
}
.tx-fill:hover::before { background-size: 100% 100%; }`
  },

  /* ================= ปุ่ม / BUTTONS ================= */
  {
    id: 'bt-ripple', name: 'Ripple Hover Button', th: 'ปุ่มคลื่นน้ำ (Hover)', cat: 'button', hint: 'hover',
    html: `<button class="bt-ripple">Click Me</button>`,
    css: `/* Ripple Hover Button — คลื่นน้ำแผ่เมื่อชี้เมาส์ */
.bt-ripple {
  position: relative;
  overflow: hidden;
  padding: 14px 36px;
  border: none;
  border-radius: 99px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.bt-ripple::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
}
.bt-ripple:hover::after { transform: translate(-50%, -50%) scale(1); }`
  },
  {
    id: 'bt-shine', name: 'Shine Sweep Button', th: 'ปุ่มแสงวาบกวาด (Hover)', cat: 'button', hint: 'hover',
    html: `<button class="bt-shine">Shine ✨</button>`,
    css: `/* Shine Sweep Button — แสงวาบกวาดผ่านปุ่ม */
.bt-shine {
  position: relative;
  overflow: hidden;
  padding: 14px 36px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  background: #1e293b;
  color: #f1f5f9;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.bt-shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -90%;
  width: 55%;
  height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: skewX(-22deg);
  transition: left 0.55s ease;
}
.bt-shine:hover::before { left: 135%; }`
  },
  {
    id: 'bt-glow', name: 'Glow Border Button', th: 'ปุ่มขอบเรืองแสงหมุน', cat: 'button',
    html: `<button class="bt-glow">Glow Up</button>`,
    css: `/* Glow Border Button — ขอบเกรเดียนต์หมุนเรืองแสง */
.bt-glow {
  position: relative;
  z-index: 0;
  padding: 14px 36px;
  border: none;
  border-radius: 99px;
  background: #0f172a;
  color: #e2e8f0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.bt-glow::before,
.bt-glow::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: conic-gradient(#f43f5e, #f59e0b, #22d3ee, #a78bfa, #f43f5e);
  animation: bt-glow 2.8s linear infinite;
}
.bt-glow::before { z-index: -1; }
.bt-glow::after  { z-index: -2; filter: blur(12px); opacity: 0.75; }
@keyframes bt-glow {
  to { transform: rotate(1turn); }
}`
  },
  {
    id: 'bt-fill', name: 'Fill Up Button', th: 'ปุ่มเติมสีจากล่าง (Hover)', cat: 'button', hint: 'hover',
    html: `<button class="bt-fill">Fill Me</button>`,
    css: `/* Fill Up Button — เติมสีจากล่างขึ้นบนเมื่อชี้เมาส์ */
.bt-fill {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 13px 34px;
  border: 2px solid #34d399;
  border-radius: 14px;
  background: transparent;
  color: #34d399;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.35s;
}
.bt-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #34d399;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.35s ease;
}
.bt-fill:hover { color: #052e1f; }
.bt-fill:hover::before { transform: scaleY(1); }`
  },
  {
    id: 'bt-push', name: '3D Push Button', th: 'ปุ่มกด 3 มิติ', cat: 'button', hint: 'hover',
    html: `<button class="bt-push">Push!</button>`,
    css: `/* 3D Push Button — ปุ่มนูนกดยุบแบบ 3 มิติ */
.bt-push {
  padding: 14px 36px;
  border: none;
  border-radius: 14px;
  background: #f59e0b;
  color: #452c03;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 7px 0 #b45309, 0 16px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.12s, box-shadow 0.12s;
}
.bt-push:hover {
  transform: translateY(3px);
  box-shadow: 0 4px 0 #b45309, 0 10px 16px rgba(0, 0, 0, 0.3);
}
.bt-push:active {
  transform: translateY(7px);
  box-shadow: 0 0 0 #b45309, 0 4px 8px rgba(0, 0, 0, 0.25);
}`
  },
  {
    id: 'bt-pulse', name: 'Pulse CTA Button', th: 'ปุ่มเต้นเรียกความสนใจ', cat: 'button',
    html: `<button class="bt-pulse">Follow Me</button>`,
    css: `/* Pulse CTA Button — ปุ่มเต้นประกายไฟเรียกคลิก */
.bt-pulse {
  padding: 14px 38px;
  border: none;
  border-radius: 99px;
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  animation: bt-pulse 1.8s infinite;
}
@keyframes bt-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.55); }
  70%  { box-shadow: 0 0 0 18px rgba(236, 72, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
}`
  },
  {
    id: 'bt-swap', name: 'Text Swap Button', th: 'ปุ่มสลับข้อความ (Hover)', cat: 'button', hint: 'hover',
    html: `<button class="bt-swap">
  <span class="bt-swap-a">Hover Me</span>
  <span class="bt-swap-b">Awesome!</span>
</button>`,
    css: `/* Text Swap Button — ข้อความเลื่อนขึ้นสลับคำใหม่ */
.bt-swap {
  position: relative;
  overflow: hidden;
  padding: 0;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.bt-swap-a {
  display: block;
  padding: 14px 36px;
  transition: transform 0.35s ease;
}
.bt-swap-b {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(100%);
  transition: transform 0.35s ease;
}
.bt-swap:hover .bt-swap-a { transform: translateY(-100%); }
.bt-swap:hover .bt-swap-b { transform: translateY(0); }`
  },
  {
    id: 'bt-grad', name: 'Gradient Shift Button', th: 'ปุ่มไล่สีเคลื่อนที่', cat: 'button',
    html: `<button class="bt-grad">Gradient</button>`,
    css: `/* Gradient Shift Button — สีไล่เฉดเคลื่อนที่ต่อเนื่อง */
.bt-grad {
  padding: 14px 38px;
  border: none;
  border-radius: 99px;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4);
  background-size: 300% 100%;
  animation: bt-grad 4s linear infinite;
  box-shadow: 0 8px 22px rgba(59, 130, 246, 0.35);
}
@keyframes bt-grad {
  to { background-position: 300% 0; }
}`
  },
  {
    id: 'bt-heart', name: 'Heartbeat', th: 'หัวใจเต้น', cat: 'button',
    html: `<button class="bt-heart" title="Like">♥</button>`,
    css: `/* Heartbeat — หัวใจเต้นถี่ ๆ (ปุ่ม Like) */
.bt-heart {
  border: none;
  background: transparent;
  font-size: 2.8rem;
  line-height: 1;
  color: #f43f5e;
  cursor: pointer;
  transform-origin: center;
  filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.6));
  animation: bt-heart 1.5s ease-in-out infinite;
}
@keyframes bt-heart {
  0%, 100% { transform: scale(1); }
  14%      { transform: scale(1.25); }
  28%      { transform: scale(1); }
  42%      { transform: scale(1.22); }
  56%      { transform: scale(1); }
}`
  },

  /* ================= องค์ประกอบ / ELEMENTS ================= */
  {
    id: 'el-float', name: 'Floating Balloon', th: 'บอลลูนลอยแกว่ง', cat: 'element',
    html: `<div class="el-float"></div>`,
    css: `/* Floating Balloon — บอลลูนลอยขึ้นลงแกว่งเบา ๆ */
.el-float {
  position: relative;
  width: 60px;
  height: 74px;
  border-radius: 50% 50% 50% 50% / 45% 45% 55% 55%;
  background: radial-gradient(circle at 30% 30%, #fda4af, #f43f5e);
  box-shadow: inset -6px -8px 0 rgba(0, 0, 0, 0.08);
  animation: el-float 3s ease-in-out infinite;
}
.el-float::after {
  content: "";
  position: absolute;
  bottom: -26px;
  left: 50%;
  width: 2px;
  height: 26px;
  background: rgba(148, 163, 184, 0.7);
}
@keyframes el-float {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50%      { transform: translateY(-18px) rotate(3deg); }
}`
  },
  {
    id: 'el-ball', name: 'Bouncing Ball', th: 'บอลเด้งพร้อมเงา', cat: 'element',
    html: `<div class="el-ball">
  <div class="el-ball-core"></div>
  <div class="el-ball-shadow"></div>
</div>`,
    css: `/* Bouncing Ball — บอลเด้งพร้อมเงาหด-ขยาย */
.el-ball { position: relative; width: 90px; height: 110px; }
.el-ball-core {
  position: absolute;
  top: 0;
  left: 50%;
  width: 46px;
  height: 46px;
  margin-left: -23px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fde047, #f59e0b);
  animation: el-ball-bounce 0.9s cubic-bezier(0.5, 0.05, 0.6, 0.95) infinite alternate;
}
.el-ball-shadow {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 52px;
  height: 10px;
  margin-left: -26px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.45);
  filter: blur(3px);
  animation: el-ball-shadow 0.9s cubic-bezier(0.5, 0.05, 0.6, 0.95) infinite alternate;
}
@keyframes el-ball-bounce {
  to { transform: translateY(54px); }
}
@keyframes el-ball-shadow {
  from { transform: scale(1);   opacity: 0.5; }
  to   { transform: scale(0.5); opacity: 0.15; }
}`
  },
  {
    id: 'el-pend', name: 'Pendulum Swing', th: 'ลูกตุ้มแกว่ง', cat: 'element',
    html: `<div class="el-pend"></div>`,
    css: `/* Pendulum Swing — ลูกตุ้มนาฬิกาแกว่งซ้าย-ขวา */
.el-pend {
  position: relative;
  width: 20px;
  height: 112px;
  margin: 0 auto;
  transform-origin: top center;
  animation: el-pend 1.6s ease-in-out infinite alternate;
}
.el-pend::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 3px;
  height: 82px;
  background: linear-gradient(180deg, #94a3b8, #475569);
}
.el-pend::after {
  content: "";
  position: absolute;
  top: 72px;
  left: 50%;
  width: 36px;
  height: 36px;
  margin-left: -18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #67e8f9, #0891b2);
  box-shadow: 0 0 18px rgba(103, 232, 249, 0.5);
}
@keyframes el-pend {
  from { transform: rotate(35deg); }
  to   { transform: rotate(-35deg); }
}`
  },
  {
    id: 'el-jello', name: 'Jello Wobble', th: 'เจลลี่โยกเยก', cat: 'element',
    html: `<div class="el-jello"></div>`,
    css: `/* Jello Wobble — ก้อนเจลลี่โยกเยกเด้งุก ๆ */
.el-jello {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #34d399, #059669);
  box-shadow: 0 10px 24px rgba(16, 185, 129, 0.35);
  animation: el-jello 2s ease infinite;
}
@keyframes el-jello {
  0%, 100% { transform: skewX(0) skewY(0); }
  20%      { transform: skewX(-12deg) skewY(-12deg); }
  30%      { transform: skewX(8deg) skewY(8deg); }
  40%      { transform: skewX(-6deg) skewY(-6deg); }
  55%      { transform: skewX(3deg) skewY(3deg); }
}`
  },
  {
    id: 'el-shake', name: 'Shake Alert', th: 'กล่องสั่นเตือน', cat: 'element',
    html: `<div class="el-shake">⚠ ข้อมูลไม่ถูกต้อง</div>`,
    css: `/* Shake Alert — กล่องแจ้งเตือนสั่น เหมาะกับฟอร์มผิดพลาด */
.el-shake {
  padding: 13px 22px;
  border-radius: 12px;
  background: rgba(244, 63, 94, 0.15);
  border: 1px solid rgba(244, 63, 94, 0.4);
  color: #fb7185;
  font-weight: 600;
  animation: el-shake 1.8s ease infinite;
}
@keyframes el-shake {
  0%, 100%    { transform: translateX(0); }
  10%, 50%    { transform: translateX(-6px); }
  30%, 70%    { transform: translateX(6px); }
  90%         { transform: translateX(0); }
}`
  },
  {
    id: 'el-ff', name: 'Fireflies', th: 'หิ่งห้อยลอยกะพริบ', cat: 'element',
    html: `<div class="el-ff">
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `/* Fireflies — หิ่งห้อยลอยไปมากะพริบแสง */
.el-ff { position: relative; width: 180px; height: 120px; }
.el-ff span {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fde047;
  box-shadow: 0 0 12px 4px rgba(253, 224, 71, 0.55);
  animation: ff-move 7s ease-in-out infinite, ff-blink 3s ease-in-out infinite;
}
.el-ff span:nth-child(1) { left: 10%; top: 62%; }
.el-ff span:nth-child(2) { left: 32%; top: 24%; animation-delay: -2s, -0.5s; animation-duration: 8s, 4s; }
.el-ff span:nth-child(3) { left: 56%; top: 68%; animation-delay: -4s, -1.2s; animation-duration: 9s, 2.6s; }
.el-ff span:nth-child(4) { left: 74%; top: 30%; animation-delay: -1s, -2s; animation-duration: 7.5s, 3.4s; }
.el-ff span:nth-child(5) { left: 88%; top: 58%; animation-delay: -3s, -0.8s; animation-duration: 8.5s, 2.8s; }
@keyframes ff-move {
  0%, 100% { transform: translate(0, 0); }
  33%      { transform: translate(22px, -28px); }
  66%      { transform: translate(-18px, 14px); }
}
@keyframes ff-blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.15; }
}`
  },
  {
    id: 'el-snow', name: 'Snowfall', th: 'หิมะตก', cat: 'element',
    html: `<div class="el-snow">
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
</div>`,
    css: `/* Snowfall — เกล็ดหิมะตกพลิ้ว ๆ */
.el-snow {
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(180deg, #1e293b, #0f172a);
}
.el-snow span {
  position: absolute;
  top: -12px;
  border-radius: 50%;
  background: #fff;
  filter: blur(0.4px);
  animation: snow-fall linear infinite;
}
.el-snow span:nth-child(1) { left: 12%; width: 5px; height: 5px; animation-duration: 3.4s; }
.el-snow span:nth-child(2) { left: 28%; width: 3px; height: 3px; animation-duration: 4.2s; animation-delay: -1.1s; }
.el-snow span:nth-child(3) { left: 47%; width: 6px; height: 6px; animation-duration: 3s;   animation-delay: -2s; }
.el-snow span:nth-child(4) { left: 63%; width: 4px; height: 4px; animation-duration: 4.6s; animation-delay: -0.6s; }
.el-snow span:nth-child(5) { left: 78%; width: 3px; height: 3px; animation-duration: 3.8s; animation-delay: -1.7s; }
.el-snow span:nth-child(6) { left: 90%; width: 5px; height: 5px; animation-duration: 4.4s; animation-delay: -2.6s; }
@keyframes snow-fall {
  0%   { transform: translate(0, -12px); }
  100% { transform: translate(14px, 132px); }
}`
  },
  {
    id: 'el-cloud', name: 'Drifting Cloud', th: 'เมฆลอยผ่าน', cat: 'element',
    html: `<div class="el-cloud"></div>`,
    css: `/* Drifting Cloud — เมฆขาวปุยลอยผ่านช้า ๆ */
.el-cloud {
  position: relative;
  width: 110px;
  height: 34px;
  border-radius: 99px;
  background: linear-gradient(180deg, #ffffff, #cbd5e1);
  border: 1px solid rgba(100, 116, 139, 0.25);
  box-shadow: 0 8px 20px rgba(148, 163, 184, 0.35);
  animation: el-cloud 6s ease-in-out infinite alternate;
}
.el-cloud::before,
.el-cloud::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffffff, #e2e8f0);
}
.el-cloud::before { top: -18px; left: 18px; width: 38px; height: 38px; }
.el-cloud::after  { top: -12px; right: 20px; width: 28px; height: 28px; }
@keyframes el-cloud {
  from { transform: translateX(-56px); }
  to   { transform: translateX(56px); }
}`
  },
  {
    id: 'el-squish', name: 'Squish Card', th: 'การ์ดเด้งยืด (Hover)', cat: 'element', hint: 'hover',
    html: `<div class="el-squish">✨ Hover Me</div>`,
    css: `/* Squish Card — การ์ดกระเด้งยืดหยุ่นเมื่อชี้เมาส์ */
.el-squish {
  display: grid;
  place-items: center;
  width: 130px;
  height: 84px;
  border-radius: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s;
}
.el-squish:hover {
  transform: scale(1.14) rotate(-3deg);
  box-shadow: 0 18px 40px rgba(139, 92, 246, 0.4);
}`
  },
  {
    id: 'el-orb', name: 'Glowing Orb', th: 'ลูกแก้วเรืองแสง', cat: 'element',
    html: `<div class="el-orb"></div>`,
    css: `/* Glowing Orb — ลูกแก้วพลังงานเต้นเรืองแสง */
.el-orb {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fef08a, #f59e0b 60%, #b45309);
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.7), 0 0 70px rgba(245, 158, 11, 0.4);
  animation: orb-pulse 2.6s ease-in-out infinite;
}
@keyframes orb-pulse {
  50% { transform: scale(1.14); }
}`
  },

  /* ================= 3 มิติ / 3D ================= */
  {
    id: 'd3-cube', name: '3D Cube Spin', th: 'ลูกบาศก์หมุน 3 มิติ', cat: 'three',
    html: `<div class="d3-scene">
  <div class="d3-cube">
    <span class="f1">C</span><span class="f2">S</span><span class="f3">S</span>
    <span class="f4">3</span><span class="f5">D</span><span class="f6">!</span>
  </div>
</div>`,
    css: `/* 3D Cube Spin — ลูกบาศก์แก้วหมุนด้วย preserve-3d */
.d3-scene { width: 80px; height: 80px; perspective: 600px; }
.d3-cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: d3-cube 6s linear infinite;
}
.d3-cube span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 1.7rem;
  font-weight: 800;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
}
.d3-cube .f1 { transform: translateZ(40px); }
.d3-cube .f2 { transform: rotateY(180deg) translateZ(40px); }
.d3-cube .f3 { transform: rotateY(90deg) translateZ(40px); }
.d3-cube .f4 { transform: rotateY(-90deg) translateZ(40px); }
.d3-cube .f5 { transform: rotateX(90deg) translateZ(40px); }
.d3-cube .f6 { transform: rotateX(-90deg) translateZ(40px); }
@keyframes d3-cube {
  to { transform: rotateX(360deg) rotateY(360deg); }
}`
  },
  {
    id: 'd3-flip', name: '3D Flip Card', th: 'การ์ดพลิก 3 มิติ (Hover)', cat: 'three', hint: 'hover',
    html: `<div class="d3-flip">
  <div class="d3-flip-inner">
    <div class="d3-flip-front">FRONT</div>
    <div class="d3-flip-back">BACK</div>
  </div>
</div>`,
    css: `/* 3D Flip Card — การ์ดพลิกหน้า-หลังเมื่อชี้เมาส์ */
.d3-flip { width: 140px; height: 96px; perspective: 800px; cursor: pointer; }
.d3-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.d3-flip:hover .d3-flip-inner { transform: rotateY(180deg); }
.d3-flip-front,
.d3-flip-back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #fff;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.d3-flip-front { background: linear-gradient(135deg, #6366f1, #a855f7); }
.d3-flip-back  { background: linear-gradient(135deg, #06b6d4, #10b981); transform: rotateY(180deg); }`
  },
  {
    id: 'd3-coin', name: '3D Coin Spin', th: 'เหรียญหมุน 3 มิติ', cat: 'three',
    html: `<div class="d3-coin">$</div>`,
    css: `/* 3D Coin Spin — เหรียญทองหมุนรอบแกนตั้ง */
.d3-coin {
  display: grid;
  place-items: center;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde047, #d97706);
  box-shadow: 0 0 18px rgba(250, 204, 21, 0.55), inset -4px -6px 0 rgba(120, 53, 15, 0.35);
  color: #78350f;
  font-size: 1.7rem;
  font-weight: 800;
  animation: d3-coin 2.4s linear infinite;
}
@keyframes d3-coin {
  from { transform: rotateY(0); }
  to   { transform: rotateY(360deg); }
}`
  },
  {
    id: 'd3-text', name: '3D Layered Text', th: 'ตัวอักษร 3 มิติ', cat: 'three',
    html: `<h2 class="d3-text">3D TEXT</h2>`,
    css: `/* 3D Layered Text — ตัวอักษรนูนเงาซ้อนชั้นแบบ 3 มิติ */
.d3-text {
  font-size: 2.7rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: #e2e8f0;
  text-shadow:
    1px 1px 0 #94a3b8, 2px 2px 0 #64748b,
    3px 3px 0 #475569, 4px 4px 0 #334155,
    5px 5px 0 #1e293b, 6px 6px 14px rgba(0, 0, 0, 0.55);
  animation: d3-text 3s ease-in-out infinite;
}
@keyframes d3-text {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(-4px, -4px); }
}`
  },

  /* ================= พื้นหลัง / BACKGROUNDS ================= */
  {
    id: 'bg-flow', name: 'Gradient Flow BG', th: 'พื้นหลังไล่สีไหล', cat: 'bg',
    html: `<div class="bg-flow"></div>`,
    css: `/* Gradient Flow BG — พื้นหลังเกรเดียนต์ไหลเปลี่ยนสีต่อเนื่อง */
.bg-flow {
  width: 100%;
  height: 130px;
  border-radius: 14px;
  background: linear-gradient(270deg, #f43f5e, #a855f7, #3b82f6, #22d3ee, #f43f5e);
  background-size: 400% 400%;
  animation: bg-flow 8s ease infinite;
}
@keyframes bg-flow {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}`
  },
  {
    id: 'bg-aurora', name: 'Aurora BG', th: 'พื้นหลังแสงออโรรา', cat: 'bg',
    html: `<div class="bg-aurora"></div>`,
    css: `/* Aurora BG — แสงออโรราเบลอไหวด้วย pseudo-element */
.bg-aurora {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: #0b1026;
}
.bg-aurora::before,
.bg-aurora::after {
  content: "";
  position: absolute;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.7;
  animation: aurora 7s ease-in-out infinite alternate;
}
.bg-aurora::before { background: #7c3aed; top: -20%; left: -10%; }
.bg-aurora::after  { background: #06b6d4; bottom: -20%; right: -10%; animation-delay: -3.5s; }
@keyframes aurora {
  to { transform: translate(30%, 25%) scale(1.2); }
}`
  },
  {
    id: 'bg-stars', name: 'Star Field BG', th: 'พื้นหลังดาวระยิบ', cat: 'bg',
    html: `<div class="bg-stars">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
    css: `/* Star Field BG — ท้องฟ้ายามค่ำดาวระยิบระยับ */
.bg-stars {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(ellipse at top, #1e1b4b, #020617);
}
.bg-stars span {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.8);
  animation: twinkle 3s ease-in-out infinite;
}
.bg-stars span:nth-child(1) { left: 10%; top: 22%; width: 3px; height: 3px; }
.bg-stars span:nth-child(2) { left: 24%; top: 64%; width: 2px; height: 2px; animation-delay: -1s; }
.bg-stars span:nth-child(3) { left: 38%; top: 18%; width: 4px; height: 4px; animation-delay: -2s; }
.bg-stars span:nth-child(4) { left: 46%; top: 52%; width: 2px; height: 2px; animation-delay: -0.6s; }
.bg-stars span:nth-child(5) { left: 60%; top: 30%; width: 3px; height: 3px; animation-delay: -1.6s; }
.bg-stars span:nth-child(6) { left: 72%; top: 68%; width: 4px; height: 4px; animation-delay: -2.4s; }
.bg-stars span:nth-child(7) { left: 82%; top: 20%; width: 2px; height: 2px; animation-delay: -0.3s; }
.bg-stars span:nth-child(8) { left: 90%; top: 48%; width: 3px; height: 3px; animation-delay: -1.3s; }
.bg-stars span:nth-child(9) { left: 16%; top: 40%; width: 2px; height: 2px; animation-delay: -1.9s; animation-duration: 4s; }
@keyframes twinkle {
  50% { opacity: 0.15; transform: scale(0.7); }
}`
  },
  {
    id: 'bg-grid', name: 'Synth Grid BG', th: 'พื้นหลังกริดเคลื่อนที่', cat: 'bg',
    html: `<div class="bg-grid"></div>`,
    css: `/* Synth Grid BG — กริดนีออนเลื่อนเป็นเกลียวแบบ Synthwave */
.bg-grid {
  width: 100%;
  height: 130px;
  border-radius: 14px;
  background-color: #0b1026;
  background-image:
    linear-gradient(rgba(34, 211, 238, 0.28) 1.5px, transparent 1.5px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.28) 1.5px, transparent 1.5px);
  background-size: 34px 34px;
  animation: grid-move 1.6s linear infinite;
}
@keyframes grid-move {
  to { background-position: 34px 34px; }
}`
  },
  {
    id: 'bg-wave', name: 'Ocean Waves BG', th: 'พื้นหลังคลื่นทะเล', cat: 'bg',
    html: `<div class="bg-wave">
  <svg viewBox="0 0 720 80" preserveAspectRatio="none">
    <path d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 L720,80 L0,80 Z" fill="rgba(255,255,255,0.18)"/>
  </svg>
  <svg class="w2" viewBox="0 0 720 80" preserveAspectRatio="none">
    <path d="M0,40 C120,0 240,80 360,40 C480,0 600,80 720,40 L720,80 L0,80 Z" fill="rgba(255,255,255,0.32)"/>
  </svg>
</div>`,
    css: `/* Ocean Waves BG — คลื่นทะเลเคลื่อนไหวซ้อน 2 ชั้นด้วย SVG */
.bg-wave {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #0ea5e9, #312e81);
}
.bg-wave svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 56px;
  animation: bg-wave 6s linear infinite;
}
.bg-wave svg.w2 {
  height: 40px;
  opacity: 0.8;
  animation-duration: 9s;
  animation-direction: reverse;
}
@keyframes bg-wave {
  to { transform: translateX(-50%); }
}`
  },
  {
    id: 'bg-blob', name: 'Morphing Blob', th: 'หยดสีเปลี่ยนรูป', cat: 'bg',
    html: `<div class="bg-blob"></div>`,
    css: `/* Morphing Blob — หยดสีค่อย ๆ เปลี่ยนรูปร่างหมุนตัว */
.bg-blob {
  width: 130px;
  height: 130px;
  background: linear-gradient(135deg, #f472b6, #818cf8);
  animation: blob 8s ease-in-out infinite;
}
@keyframes blob {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0);
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(15deg);
  }
}`
  },
  {
    id: 'bg-rays', name: 'Sun Rays BG', th: 'พื้นหลังลำแสงหมุน', cat: 'bg',
    html: `<div class="bg-rays"></div>`,
    css: `/* Sun Rays BG — ลำแสงเรืองตาบายหมุนวนช้า ๆ */
.bg-rays {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: #111827;
}
.bg-rays::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: repeating-conic-gradient(from 0deg, rgba(251, 191, 36, 0.16) 0deg 15deg, transparent 15deg 30deg);
  animation: rays 12s linear infinite;
}
@keyframes rays {
  to { transform: rotate(360deg); }
}`
  },
  {
    id: 'bg-meteor', name: 'Meteor Shower BG', th: 'พื้นหลังฝนดาวตก', cat: 'bg',
    html: `<div class="bg-meteor">
  <span></span><span></span><span></span><span></span>
</div>`,
    css: `/* Meteor Shower BG — ดาวตกริบทิ้งหางแสงลากยาว */
.bg-meteor {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: #020617;
}
.bg-meteor span {
  position: absolute;
  width: 90px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #fff, transparent);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  transform: rotate(-32deg);
  opacity: 0;
  animation: meteor 2.6s ease-in infinite;
}
.bg-meteor span:nth-child(1) { left: 8%;  top: 18%; animation-delay: 0s; }
.bg-meteor span:nth-child(2) { left: 42%; top: 8%;  animation-delay: 1.1s; }
.bg-meteor span:nth-child(3) { left: 20%; top: 55%; animation-delay: 1.9s; }
.bg-meteor span:nth-child(4) { left: 64%; top: 38%; animation-delay: 0.6s; }
@keyframes meteor {
  0%   { transform: rotate(-32deg) translateX(0);     opacity: 0; }
  8%   { opacity: 1; }
  70%  { opacity: 1; }
  100% { transform: rotate(-32deg) translateX(230px); opacity: 0; }
}`
  },

];
