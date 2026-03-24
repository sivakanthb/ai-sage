/* ============================================================
   AI Sage — App Logic
   SPA router, assessment engine, results rendering, landscape
   ============================================================ */

(function () {
  'use strict';

  /* ---- State ---- */
  let currentPersona = null;
  let currentQ = 0;
  let answers = [];             // 0-3 per question
  let activePlanTab = 30;

  /* ---- DOM refs ---- */
  const $ = (s, p) => (p || document).querySelector(s);
  const $$ = (s, p) => [...(p || document).querySelectorAll(s)];

  /* ---- Router ---- */
  function showPage(id) {
    $$('.page').forEach(p => p.classList.toggle('active', p.id === id));
    $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', () => {
    renderPersonas();
    renderLandscape();
    renderRealityCheck();
    bindNav();
    showPage('home');
  });

  /* ---- Nav ---- */
  function bindNav() {
    $$('.nav-links a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const page = a.dataset.page;
        if (page === 'assess' && !currentPersona) {
          showPage('home');
          document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        showPage(page);
        // Close mobile menu
        $('.nav-links')?.classList.remove('open');
      });
    });
    $('.nav-toggle')?.addEventListener('click', () => {
      $('.nav-links')?.classList.toggle('open');
    });
    // AI Lab dropdown on mobile (tap to toggle)
    const labTrigger = $('.nav-lab-trigger');
    if (labTrigger) {
      labTrigger.addEventListener('click', e => {
        e.preventDefault();
        labTrigger.closest('.nav-lab')?.classList.toggle('open');
      });
    }
    // Brand click → home
    $('.nav-brand')?.addEventListener('click', e => { e.preventDefault(); showPage('home'); });
  }

  /* ---- Personas ---- */
  function renderPersonas() {
    const grid = $('#personaGrid');
    if (!grid) return;
    grid.innerHTML = PERSONAS.map(p => `
      <div class="persona-card" data-id="${p.id}" style="--card-accent:${p.color}">
        <div class="icon">${p.icon}</div>
        <h3>${p.label}</h3>
        <div class="subtitle">${p.subtitle}</div>
        <div class="desc">${p.description}</div>
      </div>
    `).join('');

    $$('.persona-card', grid).forEach(card => {
      card.addEventListener('click', () => selectPersona(card.dataset.id));
    });
  }

  function selectPersona(id) {
    currentPersona = PERSONAS.find(p => p.id === id);
    currentQ = 0;
    answers = [];
    $$('.persona-card').forEach(c => c.classList.toggle('selected', c.dataset.id === id));
    // Start assessment
    renderQuestion();
    showPage('assess');
  }

  /* ---- Assessment ---- */
  function renderQuestion() {
    const wrap = $('#assessContent');
    if (!wrap || !currentPersona) return;
    const qs = QUESTIONS[currentPersona.id];
    const q = qs[currentQ];
    const total = qs.length;
    const pct = ((currentQ) / total) * 100;

    wrap.innerHTML = `
      <div class="assess-wrap">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-size:1.4rem">${currentPersona.icon}</span>
          <span style="font-weight:700;font-size:.95rem">${currentPersona.label} Assessment</span>
        </div>
        <div class="assess-progress"><div class="assess-progress-bar" style="width:${pct}%"></div></div>
        <div class="assess-qnum">Question ${currentQ + 1} of ${total}</div>
        <div class="assess-question">${q.q}</div>
        <div class="assess-options">
          ${q.opts.map((o, i) => `
            <div class="assess-opt ${answers[currentQ] === i ? 'selected' : ''}" data-val="${i}">
              <span class="opt-marker">${String.fromCharCode(65 + i)}</span>
              <span>${o}</span>
            </div>
          `).join('')}
        </div>
        <div class="assess-nav">
          <button class="btn btn-secondary" id="prevBtn" ${currentQ === 0 ? 'disabled style="opacity:.4;pointer-events:none"' : ''}>← Back</button>
          <button class="btn btn-primary" id="nextBtn" ${answers[currentQ] === undefined ? 'disabled style="opacity:.4;pointer-events:none"' : ''}>${currentQ === total - 1 ? 'See Results →' : 'Next →'}</button>
        </div>
      </div>
    `;

    // Bind options
    $$('.assess-opt', wrap).forEach(opt => {
      opt.addEventListener('click', () => {
        answers[currentQ] = parseInt(opt.dataset.val);
        renderQuestion();
      });
    });

    // Bind nav
    $('#prevBtn')?.addEventListener('click', () => { if (currentQ > 0) { currentQ--; renderQuestion(); } });
    $('#nextBtn')?.addEventListener('click', () => {
      if (answers[currentQ] === undefined) return;
      const qs = QUESTIONS[currentPersona.id];
      if (currentQ < qs.length - 1) { currentQ++; renderQuestion(); }
      else { showResults(); }
    });
  }

  /* ---- Results ---- */
  function showResults() {
    calculateScores();
    showPage('results');
  }

  function calculateScores() {
    const qs = QUESTIONS[currentPersona.id];
    const dimScores = {};
    const dimCounts = {};

    DIMENSIONS.forEach(d => { dimScores[d.id] = 0; dimCounts[d.id] = 0; });

    qs.forEach((q, i) => {
      const val = answers[i] || 0;
      dimScores[q.dim] += val;
      dimCounts[q.dim]++;
    });

    // Normalize to 0-100
    const dimPcts = {};
    DIMENSIONS.forEach(d => {
      const max = (dimCounts[d.id] || 1) * 3;
      dimPcts[d.id] = Math.round((dimScores[d.id] / max) * 100);
    });

    const overall = Math.round(DIMENSIONS.reduce((s, d) => s + dimPcts[d.id], 0) / DIMENSIONS.length);
    const band = BANDS.find(b => overall <= b.max) || BANDS[BANDS.length - 1];

    renderResults(overall, band, dimPcts);
  }

  function renderResults(score, band, dimPcts) {
    const wrap = $('#resultsContent');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="results-hero">
        <div style="font-size:1.3rem;margin-bottom:8px">${currentPersona.icon}</div>
        <div style="font-size:.85rem;color:var(--text2);margin-bottom:6px">${currentPersona.label} — AI Readiness Score</div>
        <div class="results-score">${score}</div>
        <div class="results-band" style="background:${band.color}22;color:${band.color};border:1px solid ${band.color}44">
          ${band.emoji} ${band.label}
        </div>
        <p class="results-desc">${band.desc}</p>
      </div>

      <!-- Dimension Bars -->
      <div class="dim-bars">
        ${DIMENSIONS.map(d => {
          const pct = dimPcts[d.id];
          const clr = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--blue)' : pct >= 25 ? 'var(--amber)' : 'var(--red)';
          return `
            <div class="dim-bar-item">
              <div class="dim-bar-label"><strong>${d.label}</strong><span>${pct}%</span></div>
              <div class="dim-bar-track"><div class="dim-bar-fill" style="width:${pct}%;background:${clr}"></div></div>
            </div>`;
        }).join('')}
      </div>

      <!-- Radar -->
      <div class="radar-wrap">
        <h3>Your AI Readiness Radar</h3>
        <canvas id="radarCanvas" width="380" height="380" class="radar-canvas"></canvas>
      </div>

      <!-- Action Plan -->
      <div class="section" style="padding-top:20px">
        <h2 class="section-title">Your 90-Day Action Plan</h2>
        <p class="section-sub">Personalized steps for a <strong>${currentPersona.label}</strong>. Check off items as you go.</p>
        <div class="plan-tabs" id="planTabs">
          <div class="plan-tab active" data-days="30">First 30 Days</div>
          <div class="plan-tab" data-days="60">Days 31–60</div>
          <div class="plan-tab" data-days="90">Days 61–90</div>
        </div>
        <div class="plan-list" id="planList"></div>
      </div>

      <!-- Ecosystem -->
      <div class="section" style="padding-top:30px">
        <h2 class="section-title">Continue Your AI Journey</h2>
        <p class="section-sub">AI Sage diagnosed where you stand. Now <strong>discover</strong> tools and <strong>deepen</strong> your skills.</p>
        <div class="ecosystem-grid">
          <a href="https://myaicompass.vercel.app/" target="_blank" class="ecosystem-card" style="--eco-color:#60a5fa">
            <span class="ecosystem-icon">🧭</span>
            <strong>AI Compass</strong>
            <span class="ecosystem-desc">Discover the right AI tools for your role — curated catalog, glossary, prompts, and trends.</span>
            <span class="ecosystem-cta">Explore Tools →</span>
          </a>
          <a href="https://aimorpheus.vercel.app/" target="_blank" class="ecosystem-card" style="--eco-color:#34d399">
            <span class="ecosystem-icon">⚡</span>
            <strong>AIMorpheus</strong>
            <span class="ecosystem-desc">Go deeper with structured AI learning paths — from fundamentals to GenAI, tracked at your pace.</span>
            <span class="ecosystem-cta">Start Learning →</span>
          </a>
        </div>
      </div>

      <!-- Actions -->
      <div style="text-align:center;padding:20px 0 40px" class="btn-group">
        <button class="btn btn-secondary" id="retakeBtn">↻ Retake Assessment</button>
        <button class="btn btn-secondary" id="changePersonaBtn">🔄 Change Persona</button>
        <button class="btn btn-primary" id="goLandscapeBtn">🗺️ Explore the Landscape →</button>
      </div>
    `;

    // Draw radar
    setTimeout(() => drawRadar(dimPcts), 100);

    // Plan tabs
    renderPlan(30);
    $$('.plan-tab', wrap).forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.plan-tab', wrap).forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPlan(parseInt(tab.dataset.days));
      });
    });

    // Buttons
    $('#retakeBtn')?.addEventListener('click', () => {
      answers = [];
      currentQ = 0;
      renderQuestion();
      showPage('assess');
    });
    $('#changePersonaBtn')?.addEventListener('click', () => {
      currentPersona = null;
      $$('.persona-card').forEach(c => c.classList.remove('selected'));
      showPage('home');
      document.getElementById('personas')?.scrollIntoView({ behavior: 'smooth' });
    });
    $('#goLandscapeBtn')?.addEventListener('click', () => showPage('landscape'));
  }

  function renderPlan(days) {
    const list = $('#planList');
    if (!list || !currentPersona) return;
    const items = ACTION_PLANS[currentPersona.id]?.[days] || [];
    list.innerHTML = items.map((item, i) => `
      <div class="plan-item">
        <div class="check" data-idx="${days}-${i}"></div>
        <span>${item}</span>
      </div>
    `).join('');

    $$('.plan-item .check', list).forEach(chk => {
      // Restore state from session
      const key = `plan-${currentPersona.id}-${chk.dataset.idx}`;
      if (sessionStorage.getItem(key)) chk.classList.add('done');
      chk.addEventListener('click', () => {
        chk.classList.toggle('done');
        if (chk.classList.contains('done')) sessionStorage.setItem(key, '1');
        else sessionStorage.removeItem(key);
      });
    });
  }

  /* ---- Radar Chart (Canvas) ---- */
  function drawRadar(dimPcts) {
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const R = Math.min(cx, cy) - 50;
    const dims = DIMENSIONS;
    const n = dims.length;
    const step = (2 * Math.PI) / n;
    const startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, W, H);

    // Grid circles
    for (let ring = 1; ring <= 4; ring++) {
      const r = (R * ring) / 4;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = startAngle + step * i;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255,255,255,.08)';
      ctx.stroke();
    }

    // Spokes + labels
    dims.forEach((d, i) => {
      const a = startAngle + step * i;
      const x = cx + R * Math.cos(a);
      const y = cy + R * Math.sin(a);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(255,255,255,.06)';
      ctx.stroke();

      // Label
      const lx = cx + (R + 28) * Math.cos(a);
      const ly = cy + (R + 28) * Math.sin(a);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '600 12px Inter, system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(d.label, lx, ly);
    });

    // Data polygon
    ctx.beginPath();
    dims.forEach((d, i) => {
      const pct = (dimPcts[d.id] || 0) / 100;
      const a = startAngle + step * i;
      const x = cx + R * pct * Math.cos(a);
      const y = cy + R * pct * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(167,139,250,.18)';
    ctx.fill();
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data points
    dims.forEach((d, i) => {
      const pct = (dimPcts[d.id] || 0) / 100;
      const a = startAngle + step * i;
      const x = cx + R * pct * Math.cos(a);
      const y = cy + R * pct * Math.sin(a);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#a78bfa';
      ctx.fill();
      ctx.strokeStyle = '#1e2230';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  /* ---- Landscape ---- */
  function renderLandscape() {
    // Timeline
    const timelineGrid = $('#timelineGrid');
    if (timelineGrid) {
      timelineGrid.innerHTML = LANDSCAPE.timeline.map(t => `
        <div class="timeline-card" style="--card-color:${t.color}">
          <div class="era-header">
            <span class="emoji">${t.emoji}</span>
            <span style="color:${t.color}">${t.era}</span>
          </div>
          <ul>${t.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('');
    }

    // Role evolution
    const roleGrid = $('#roleGrid');
    if (roleGrid) {
      roleGrid.innerHTML = LANDSCAPE.roleEvolution.map(r => `
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">${r.icon}</span>
            <span class="role-from">${r.from}</span>
            <span class="role-arrow">→</span>
            <span class="role-to">${r.to}</span>
          </div>
          <div class="role-desc">${r.desc}</div>
        </div>
      `).join('');
    }

    // Architecture shifts
    const archGrid = $('#archGrid');
    if (archGrid) {
      archGrid.innerHTML = LANDSCAPE.archShifts.map(a => `
        <div class="arch-card">
          <span class="arch-emoji">${a.emoji}</span>
          <div class="arch-flow">
            <span class="old">${a.from}</span>
            <span class="arrow">→</span>
            <span class="current">${a.to}</span>
            <span class="arrow">→</span>
            <span class="next">${a.next}</span>
          </div>
        </div>
      `).join('');
    }
  }

  /* ---- Reality Check ---- */
  function renderRealityCheck() {
    const grid = $('#realityGrid');
    if (!grid) return;
    grid.innerHTML = REALITY_CHECK.map(r => `
      <div class="reality-card">
        <div class="myth">${r.myth}</div>
        <div class="truth">${r.truth}</div>
      </div>
    `).join('');
  }

  /* ---- Expose for inline calls ---- */
  window.showPage = showPage;
  window.selectPersona = selectPersona;
})();
