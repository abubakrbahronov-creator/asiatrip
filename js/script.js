/* =========================================================
   AsiaTrip — Поездки. Логика каталога
   ========================================================= */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const IMG = 'img/';

/* ---------------- Данные туров ---------------- */
const TOURS = [
  {
    id: 'vostochnaya-skazka',
    title: 'Восточная сказка',
    cats: ['culture', 'silk'],
    dest: ['Bukhara', 'Samarkand'],
    days: 4, nights: 2, price: 554, old: 640, rate: 4.9, reviews: 68,
    people: '1–13 человек', badge: 'hit',
    img: IMG + 'vostochnaya-skazka.jpg',
    
    desc: 'Короткое, но насыщенное знакомство с двумя жемчужинами Шёлкового пути: Регистан на закате, купола Шахи-Зинда и старый торговый центр Бухары.',
    dates: ['10.09.2026', '24.09.2026', '01.10.2026', '15.10.2026'],
    months: [9, 10, 11],
    highlights: ['Площадь Регистан с вечерней подсветкой', 'Некрополь Шахи-Зинда и мавзолей Гур-Эмир', 'Крепость Арк и минарет Калян в Бухаре', 'Ужин в чайхане с живым макомом'],
    plan: [
      ['Прибытие в Самарканд', 'Встреча в аэропорту, размещение в отеле, вечерняя прогулка по Регистану с подсветкой.'],
      ['Самарканд целиком', 'Гур-Эмир, Биби-Ханым, Шахи-Зинда, обсерватория Улугбека. Обед в национальном ресторане.'],
      ['Переезд в Бухару', 'Скоростной поезд «Афросиаб», экскурсия по Ляби-Хаузу, Арк и минарет Калян.'],
      ['Бухара — вылет', 'Свободное утро, торговые купола, трансфер в аэропорт.']
    ]
  },
  {
    id: 'express-silk-road',
    title: 'Экспресс тур по Шёлковому пути',
    cats: ['silk', 'culture'],
    dest: ['Bukhara', 'Samarkand', 'Tashkent'],
    days: 5, nights: 4, price: 664, old: null, rate: 4.8, reviews: 51,
    people: '1–13 человек', badge: null,
    img: IMG + 'express-silk-road.jpg',
    
    desc: 'Три столицы Великого шёлкового пути за пять дней — с переездами на скоростных поездах и без утомительных автобусных перегонов.',
    dates: ['10.09.2026', '24.09.2026', '01.10.2026'],
    months: [9, 10, 11, 12],
    highlights: ['Скоростные поезда между городами', 'Метро Ташкента как подземный музей', 'Мастер-класс по узбекской керамике', 'Гид-историк на всём маршруте'],
    plan: [
      ['Ташкент', 'Площадь Амира Темура, Хаст-Имам, базар Чорсу, станции метро.'],
      ['Ташкент — Самарканд', 'Утренний «Афросиаб», Регистан и Гур-Эмир.'],
      ['Самарканд', 'Шахи-Зинда, Биби-Ханым, обсерватория, Сиабский базар.'],
      ['Бухара', 'Переезд поездом, Ляби-Хауз, Арк, медресе Мири-Араб.'],
      ['Бухара — вылет', 'Ситораи Мохи-Хоса, трансфер.']
    ]
  },
  {
    id: 'voshititelny-uzbekistan',
    title: 'Восхитительный Узбекистан',
    cats: ['culture', 'silk', 'gastro'],
    dest: ['Bukhara', 'Samarkand', 'Shakhrisabz', 'Tashkent'],
    days: 8, nights: 7, price: 936, old: 1050, rate: 5.0, reviews: 94,
    people: '1–13 человек', badge: 'hit',
    img: IMG + 'voshititelny-uzbekistan.jpg',
    
    desc: 'Полная классическая программа: четыре города, дворец Ак-Сарай в Шахрисабзе, гастрономические остановки и время на неспешные прогулки.',
    dates: ['24.09.2026', '25.09.2026', '30.09.2026', '12.10.2026'],
    months: [9, 10, 11, 12],
    highlights: ['Родина Амира Темура — Шахрисабз', 'Дегустация плова по-самаркандски', 'Ночёвка в бутик-отеле в медресе', 'Свободный день для личных маршрутов'],
    plan: [
      ['Ташкент', 'Встреча, обзорная экскурсия, ужин.'],
      ['Ташкент — Самарканд', 'Переезд, Регистан.'],
      ['Самарканд', 'Гур-Эмир, Шахи-Зинда, обсерватория Улугбека.'],
      ['Шахрисабз', 'Дворец Ак-Сарай, комплекс Дорут-Тиловат.'],
      ['Самарканд — Бухара', 'Переезд, вечерняя Бухара.'],
      ['Бухара', 'Арк, Калян, Чор-Минор, торговые купола.'],
      ['Бухара', 'Ситораи Мохи-Хоса, Бахауддин Накшбанд, мастер-класс.'],
      ['Вылет', 'Трансфер в аэропорт.']
    ]
  },
  {
    id: 'zaamin',
    title: 'Узбекская Швейцария — Заамин',
    cats: ['nature'],
    dest: ['Bukhara', 'Samarkand', 'Zaamin'],
    days: 5, nights: 3, price: 640, old: null, rate: 4.7, reviews: 33,
    people: '1–13 человек', badge: 'sold',
    img: IMG + 'zaamin.jpg',
    
    desc: 'Арчовые леса, горный воздух на 2200 метрах и водопады национального парка Заамин в сочетании с историей Самарканда.',
    dates: [],
    months: [5, 6, 7, 8],
    highlights: ['Национальный парк Заамин', 'Треккинг к водопаду Шаршара', 'Ночь под звёздами в горном лагере', 'Термальный санаторий'],
    plan: [
      ['Самарканд', 'Прилёт, размещение, обзорная экскурсия.'],
      ['Переезд в Заамин', 'Дорога через перевал, размещение в горном отеле.'],
      ['Заамин', 'Треккинг, водопады, арчовые рощи.'],
      ['Заамин — Самарканд', 'Возвращение, свободный вечер.'],
      ['Вылет', 'Трансфер.']
    ]
  },
  {
    id: 'khiva',
    title: 'Хива — город легенд',
    cats: ['culture', 'silk', 'pilgrim'],
    dest: ['Khiva', 'Samarkand', 'Shakhrisabz', 'Tashkent'],
    days: 8, nights: 7, price: 1181, old: null, rate: 4.9, reviews: 77,
    people: '1–13 человек', badge: 'new',
    img: IMG + 'khiva.jpg',
    
    desc: 'Самый дальний и самый цельный маршрут: Ичан-Кала в Хиве, где город-музей внутри крепостных стен сохранился почти без изменений.',
    dates: ['19.09.2026', '20.09.2026', '24.09.2026', '08.10.2026'],
    months: [9, 10, 11],
    highlights: ['Ичан-Кала — объект ЮНЕСКО целиком', 'Закат с минарета Ислам-Ходжа', 'Ночёвка внутри крепостных стен', 'Перелёт Ургенч — Ташкент вместо ночного переезда'],
    plan: [
      ['Ташкент', 'Прилёт, обзорная программа.'],
      ['Ургенч — Хива', 'Перелёт, размещение в Ичан-Кале.'],
      ['Хива', 'Кальта-Минор, Куня-Арк, Тош-Ховли, Ислам-Ходжа.'],
      ['Хива — Бухара', 'Переезд через пустыню Кызылкум с остановкой у Амударьи.'],
      ['Бухара', 'Полный день экскурсий.'],
      ['Бухара — Самарканд', 'Переезд, Регистан.'],
      ['Самарканд — Шахрисабз', 'Ак-Сарай, возвращение.'],
      ['Вылет', 'Трансфер.']
    ]
  },
  {
    id: 'bibi-khanum-shing',
    title: 'От Биби-Ханум до Семи Красавиц Шинга',
    cats: ['nature', 'culture', 'gastro'],
    dest: ['Bukhara', 'Central Asia', 'Samarkand'],
    days: 5, nights: 4, price: 731, old: 790, rate: 4.8, reviews: 41,
    people: '1–13 человек', badge: null,
    img: IMG + 'bibi-khanum-shing.jpg',
    
    desc: 'Комбинированный маршрут: архитектура Самарканда и Бухары плюс бирюзовые Семь озёр Шинга в горах Фанских хребтов.',
    dates: ['01.10.2026', '15.10.2026'],
    months: [10, 11],
    highlights: ['Семь озёр Маргузор (Шинг)', 'Обед в горном доме у местных', 'Переход границы без ночёвки', 'Малая группа до 8 человек'],
    plan: [
      ['Самарканд', 'Прилёт, Регистан, Биби-Ханым.'],
      ['Самарканд', 'Шахи-Зинда, Гур-Эмир, Сиабский базар.'],
      ['Семь озёр', 'Переезд в горы, прогулка вдоль каскада озёр.'],
      ['Возвращение — Бухара', 'Переезд, вечерняя Бухара.'],
      ['Бухара — вылет', 'Экскурсия, трансфер.']
    ]
  }
];

const REVIEWS = [
  { n: 'Марина К.', c: 'Москва', t: 'Ездили по маршруту «Восхитительный Узбекистан». Гид Дилшод — отдельное удовольствие: рассказывал так, что дети восьми лет слушали не отрываясь. Отели все были ровно те, что в программе.' },
  { n: 'Luca R.', c: 'Milano', t: 'Отличная организация — трансферы вовремя, билеты на поезда куплены заранее, никаких сюрпризов. Хива стоит того, чтобы лететь именно туда.' },
  { n: 'Алексей П.', c: 'Алматы', t: 'Брали Заамин летом. Горы, воздух, тишина — контраст с Самаркандом идеальный. Единственное, стоит брать тёплые вещи, вечерами прохладно.' }
];

/* ---------------- Состояние ---------------- */
const state = {
  cat: 'all',
  dest: new Set(),
  dur: new Set(),
  month: new Set(),
  min: 400, max: 1400,
  onlyAvail: false,
  onlyFav: false,
  sort: 'pop',
  view: 'grid'
};

const favs = new Set(JSON.parse(localStorage.getItem('at_favs') || '[]'));
const saveFavs = () => { try { localStorage.setItem('at_favs', JSON.stringify([...favs])); } catch (e) {} };

const eur = n => '€ ' + n.toLocaleString('ru-RU').replace(/,/g, ' ');
const plural = (n, a, b, c) => { const m = n % 100, k = n % 10;
  return m > 10 && m < 20 ? c : k === 1 ? a : k >= 2 && k <= 4 ? b : c; };

/* ---------------- Тосты ---------------- */
function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast__i';
  el.innerHTML = `<svg class="ic"><use href="#i-check"/></svg>${msg}`;
  $('#toast').appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = '.35s'; }, 2600);
  setTimeout(() => el.remove(), 3000);
}

/* ---------------- Фильтр направлений ---------------- */
function buildDestFilter() {
  const map = new Map();
  TOURS.forEach(t => t.dest.forEach(d => map.set(d, (map.get(d) || 0) + 1)));
  const ru = { Samarkand: 'Самарканд', Bukhara: 'Бухара', Khiva: 'Хива', Tashkent: 'Ташкент',
               Shakhrisabz: 'Шахрисабз', Zaamin: 'Заамин', 'Central Asia': 'Центральная Азия' };
  $('#fDest').innerHTML = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([d, n]) => `
      <label class="check">
        <input type="checkbox" value="${d}"><i></i>
        <span>${ru[d] || d}</span><em class="num">${n}</em>
      </label>`).join('');

  $$('#fDest input').forEach(inp => inp.addEventListener('change', () => {
    inp.checked ? state.dest.add(inp.value) : state.dest.delete(inp.value);
    render();
  }));
}

/* ---------------- Фильтрация и сортировка ---------------- */
function apply() {
  let list = TOURS.filter(t => {
    if (state.cat !== 'all' && !t.cats.includes(state.cat)) return false;
    if (state.dest.size && !t.dest.some(d => state.dest.has(d))) return false;
    if (t.price < state.min || t.price > state.max) return false;
    if (state.dur.size) {
      const ok = [...state.dur].some(r => {
        const [a, b] = r.split('-').map(Number);
        return t.days >= a && t.days <= b;
      });
      if (!ok) return false;
    }
    if (state.month.size && !t.months.some(m => state.month.has(m))) return false;
    if (state.onlyAvail && t.badge === 'sold') return false;
    if (state.onlyFav && !favs.has(t.id)) return false;
    return true;
  });

  const by = {
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price,
    durAsc: (a, b) => a.days - b.days,
    durDesc: (a, b) => b.days - a.days,
    rate: (a, b) => b.rate - a.rate || b.reviews - a.reviews,
    pop: (a, b) => b.reviews - a.reviews
  };
  return list.sort(by[state.sort] || by.pop);
}

/* ---------------- Карточка ---------------- */
function cardHTML(t) {
  const badge = { hit: ['tag--hit', 'Хит продаж'], new: ['tag--new', 'Новинка'], sold: ['tag--sold', 'Мест нет'] }[t.badge];
  const isFav = favs.has(t.id);
  const dates = t.dates.length
    ? `<div class="card__dates">
         <div class="card__dates-lbl">Ближайшие выезды</div>
         <div class="dates">${t.dates.slice(0, 3).map(d => `<span class="date">${d}</span>`).join('')}
         ${t.dates.length > 3 ? `<span class="date">+${t.dates.length - 3}</span>` : ''}</div>
       </div>`
    : `<div class="card__dates">
         <div class="card__dates-lbl">Ближайшие выезды</div>
         <div class="dates"><span class="date date--sold">Набор закрыт — уточните даты</span></div>
       </div>`;

  return `
  <article class="card" data-id="${t.id}">
    <div class="card__media">
      <img src="${t.img}" alt="${t.title}" loading="lazy">
      <div class="card__tags">${badge ? `<span class="tag ${badge[0]}">${badge[1]}</span>` : ''}</div>
      <button class="card__fav ${isFav ? 'on' : ''}" data-fav="${t.id}" aria-label="В избранное">
        <svg class="ic"><use href="#i-heart"/></svg>
      </button>
      <div class="card__place">
        <svg class="ic"><use href="#i-pin"/></svg>${t.dest.slice(0, 3).join(' · ')}
        <span class="card__rate"><svg class="ic"><use href="#i-star"/></svg>${t.rate.toFixed(1)}</span>
      </div>
    </div>
    <div class="card__body">
      <h3 class="card__title"><a href="#" data-open="${t.id}">${t.title}</a></h3>
      <p class="card__desc">${t.desc}</p>
      <div class="card__meta">
        <span class="meta"><svg class="ic"><use href="#i-clock"/></svg>${t.days} ${plural(t.days, 'день', 'дня', 'дней')} / ${t.nights} ${plural(t.nights, 'ночь', 'ночи', 'ночей')}</span>
        <span class="meta"><svg class="ic"><use href="#i-users"/></svg>${t.people}</span>
        <span class="meta"><svg class="ic"><use href="#i-star"/></svg>${t.reviews} ${plural(t.reviews, 'отзыв', 'отзыва', 'отзывов')}</span>
      </div>
      ${dates}
      <div class="card__foot">
        <div class="price">
          <small>от, за человека</small>
          <b>${eur(t.price)}${t.old ? `<s>${eur(t.old)}</s>` : ''}</b>
        </div>
        <button class="btn ${t.badge === 'sold' ? 'btn--ghost' : 'btn--dark'} btn--sm" data-open="${t.id}">
          ${t.badge === 'sold' ? 'Узнать даты' : 'Подробнее'}
        </button>
      </div>
    </div>
  </article>`;
}

/* ---------------- Активные фильтры ---------------- */
function chipsHTML() {
  const out = [];
  const ru = { Samarkand: 'Самарканд', Bukhara: 'Бухара', Khiva: 'Хива', Tashkent: 'Ташкент',
               Shakhrisabz: 'Шахрисабз', Zaamin: 'Заамин', 'Central Asia': 'Центральная Азия' };
  const mn = { 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь' };

  state.dest.forEach(d => out.push(`<span class="achip">${ru[d] || d}<button data-rm="dest" data-v="${d}">✕</button></span>`));
  state.dur.forEach(d => out.push(`<span class="achip">${d.replace('-', '–')} дней<button data-rm="dur" data-v="${d}">✕</button></span>`));
  state.month.forEach(m => out.push(`<span class="achip">${mn[m]}<button data-rm="month" data-v="${m}">✕</button></span>`));
  if (state.min > 400 || state.max < 1400)
    out.push(`<span class="achip">${eur(state.min)} — ${eur(state.max)}<button data-rm="price" data-v="1">✕</button></span>`);
  if (state.onlyAvail) out.push(`<span class="achip">Только с местами<button data-rm="avail" data-v="1">✕</button></span>`);
  if (state.onlyFav) out.push(`<span class="achip">Избранное<button data-rm="fav" data-v="1">✕</button></span>`);
  return out.join('');
}

/* ---------------- Рендер ---------------- */
function render() {
  const list = apply();
  const box = $('#cards');

  box.className = 'cards cards--' + state.view;
  box.innerHTML = list.map(cardHTML).join('');
  $('#empty').hidden = list.length > 0;

  $('#count').textContent = list.length;
  $('#countWord').textContent = plural(list.length, 'тур', 'тура', 'туров');
  $('#activeChips').innerHTML = chipsHTML();

  $('#favCount').textContent = favs.size;
  $('#favCount').classList.toggle('on', favs.size > 0);

  requestAnimationFrame(() => $$('.card', box).forEach((c, i) => setTimeout(() => c.classList.add('in'), i * 70)));
}

/* ---------------- Модалка ---------------- */
function openModal(id) {
  const t = TOURS.find(x => x.id === id);
  if (!t) return;

  $('#modalBody').innerHTML = `
    <div class="mhero">
      <img src="${t.img}" alt="${t.title}">
      <div class="mhero__cap">
        <h3>${t.title}</h3>
        <div class="card__meta">
          <span class="meta"><svg class="ic"><use href="#i-pin"/></svg>${t.dest.join(' · ')}</span>
          <span class="meta"><svg class="ic"><use href="#i-clock"/></svg>${t.days} ${plural(t.days, 'день', 'дня', 'дней')} / ${t.nights} ${plural(t.nights, 'ночь', 'ночи', 'ночей')}</span>
          <span class="meta"><svg class="ic"><use href="#i-star"/></svg>${t.rate.toFixed(1)} · ${t.reviews}</span>
        </div>
      </div>
    </div>
    <div class="mbody">
      <div>
        <h4>О маршруте</h4>
        <p>${t.desc}</p>
        <ul class="mlist">
          ${t.highlights.map(h => `<li><svg class="ic"><use href="#i-check"/></svg>${h}</li>`).join('')}
        </ul>
        <h4 style="margin-top:28px">Программа по дням</h4>
        <div class="mdays">
          ${t.plan.map((d, i) => `
            <div class="mday ${i === 0 ? 'open' : ''}">
              <button class="mday__h" type="button"><em>${i + 1}</em>${d[0]}<svg class="ic ic--xs"><use href="#i-chev"/></svg></button>
              <div class="mday__b">${d[1]}</div>
            </div>`).join('')}
        </div>
      </div>
      <aside class="mside">
        <div class="mprice">
          <div class="mprice__top"><b>${eur(t.price)}</b><span>/ за человека</span></div>
          <div class="mrow"><span>Длительность</span><b>${t.days} ${plural(t.days, 'день', 'дня', 'дней')}</b></div>
          <div class="mrow"><span>Группа</span><b>${t.people}</b></div>
          <div class="mrow"><span>Ближайший выезд</span><b>${t.dates[0] || 'по запросу'}</b></div>
          <div class="mrow"><span>Статус</span><b style="color:${t.badge === 'sold' ? 'var(--clay)' : 'var(--teal)'}">${t.badge === 'sold' ? 'Мест нет' : 'Есть места'}</b></div>
          <button class="btn btn--gold btn--block" id="bookBtn">Забронировать</button>
          <button class="btn btn--ghost btn--block" style="margin-top:9px" data-fav="${t.id}">
            ${favs.has(t.id) ? 'В избранном ♥' : 'Сохранить в избранное'}
          </button>
          <p class="mprice__note">Предоплата 20%. Бесплатная отмена за 14 дней до выезда.</p>
        </div>
      </aside>
    </div>`;

  $('#modal').hidden = false;
  document.body.style.overflow = 'hidden';

  $$('.mday__h', $('#modalBody')).forEach(b =>
    b.addEventListener('click', () => b.parentElement.classList.toggle('open')));
  $('#bookBtn').addEventListener('click', () => {
    closeModal();
    toast('Заявка отправлена — свяжемся в течение 24 часов');
  });
}

function closeModal() {
  $('#modal').hidden = true;
  document.body.style.overflow = '';
}

/* ---------------- Ползунок цены ---------------- */
function initRange() {
  const min = $('#priceMin'), max = $('#priceMax'), fill = $('#priceFill');
  const lo = +min.min, hi = +min.max;

  const paint = () => {
    let a = +min.value, b = +max.value;
    if (a > b - 40) { if (document.activeElement === min) min.value = a = b - 40; else max.value = b = a + 40; }
    fill.style.left  = ((a - lo) / (hi - lo) * 100) + '%';
    fill.style.width = ((b - a) / (hi - lo) * 100) + '%';
    $('#priceMinL').textContent = eur(a);
    $('#priceMaxL').textContent = eur(b);
    state.min = a; state.max = b;
  };

  [min, max].forEach(i => {
    i.addEventListener('input', paint);
    i.addEventListener('change', render);
  });
  paint();
}

/* ---------------- Отзывы ---------------- */
function initReviews() {
  $('#revs').innerHTML = REVIEWS.map(r => `
    <article class="rev">
      <div class="rev__stars">${'<svg class="ic"><use href="#i-star"/></svg>'.repeat(5)}</div>
      <p class="rev__text">«${r.t}»</p>
      <div class="rev__who">
        <span class="rev__ava">${r.n[0]}</span>
        <div><b>${r.n}</b><span>${r.c}</span></div>
      </div>
    </article>`).join('');
}

/* ---------------- Счётчики в герое ---------------- */
function initCounters() {
  const els = $$('[data-count]');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const end = +e.target.dataset.count;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / 1400, 1);
      e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('ru-RU');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: .4 });
  els.forEach(el => io.observe(el));
}

/* ---------------- Появление секций ---------------- */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ---------------- Сброс ---------------- */
function resetAll() {
  state.cat = 'all';
  state.dest.clear(); state.dur.clear(); state.month.clear();
  state.min = 400; state.max = 1400;
  state.onlyAvail = state.onlyFav = false;

  $$('#fDest input').forEach(i => i.checked = false);
  $$('#fDur .chip, #fMonth .chip').forEach(c => c.classList.remove('is-active'));
  $$('#cats .cat').forEach(c => c.classList.toggle('is-active', c.dataset.cat === 'all'));
  $('#fAvail').checked = false; $('#fOnlyFav').checked = false;
  $('#priceMin').value = 400; $('#priceMax').value = 1400;
  $('#priceMin').dispatchEvent(new Event('input'));
  $('#sDest').value = ''; $('#sDur').value = ''; $('#sMonth').value = '';
  render();
}

/* ---------------- Инициализация ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildDestFilter();
  initRange();
  initReviews();
  initCounters();
  initReveal();
  render();

  /* тема */
  const savedTheme = localStorage.getItem('at_theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  const syncThemeIcon = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    $('#themeBtn').innerHTML = `<svg class="ic"><use href="#${dark ? 'i-moon' : 'i-sun'}"/></svg>`;
  };
  syncThemeIcon();
  $('#themeBtn').addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('at_theme', dark ? 'light' : 'dark'); } catch (e) {}
    syncThemeIcon();
  });

  /* категории */
  $('#cats').addEventListener('click', e => {
    const b = e.target.closest('.cat'); if (!b) return;
    $$('#cats .cat').forEach(c => c.classList.remove('is-active'));
    b.classList.add('is-active');
    state.cat = b.dataset.cat;
    render();
  });

  /* аккордеон фильтров */
  $$('.fgroup__head').forEach(h => h.addEventListener('click', () => {
    const g = h.parentElement;
    g.dataset.open = g.dataset.open === 'true' ? 'false' : 'true';
  }));

  /* чипы длительности / месяцев */
  $('#fDur').addEventListener('click', e => {
    const c = e.target.closest('.chip'); if (!c) return;
    c.classList.toggle('is-active');
    c.classList.contains('is-active') ? state.dur.add(c.dataset.dur) : state.dur.delete(c.dataset.dur);
    render();
  });
  $('#fMonth').addEventListener('click', e => {
    const c = e.target.closest('.chip'); if (!c) return;
    c.classList.toggle('is-active');
    const m = +c.dataset.month;
    c.classList.contains('is-active') ? state.month.add(m) : state.month.delete(m);
    render();
  });

  /* переключатели */
  $('#fAvail').addEventListener('change', e => { state.onlyAvail = e.target.checked; render(); });
  $('#fOnlyFav').addEventListener('change', e => { state.onlyFav = e.target.checked; render(); });

  /* сортировка и вид */
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; render(); });
  $('#view').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#view button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    state.view = b.dataset.view;
    render();
  });

  /* сброс */
  $('#clearAll').addEventListener('click', resetAll);
  $('#emptyReset').addEventListener('click', resetAll);

  /* снятие отдельного фильтра */
  $('#activeChips').addEventListener('click', e => {
    const b = e.target.closest('[data-rm]'); if (!b) return;
    const { rm, v } = b.dataset;
    if (rm === 'dest') { state.dest.delete(v); const i = $(`#fDest input[value="${v}"]`); if (i) i.checked = false; }
    if (rm === 'dur')  { state.dur.delete(v);  const c = $(`#fDur .chip[data-dur="${v}"]`); if (c) c.classList.remove('is-active'); }
    if (rm === 'month'){ state.month.delete(+v); const c = $(`#fMonth .chip[data-month="${v}"]`); if (c) c.classList.remove('is-active'); }
    if (rm === 'price'){ $('#priceMin').value = 400; $('#priceMax').value = 1400; $('#priceMin').dispatchEvent(new Event('input')); }
    if (rm === 'avail'){ state.onlyAvail = false; $('#fAvail').checked = false; }
    if (rm === 'fav')  { state.onlyFav = false; $('#fOnlyFav').checked = false; }
    render();
  });

  /* избранное + открытие карточки (делегирование) */
  document.addEventListener('click', e => {
    const fav = e.target.closest('[data-fav]');
    if (fav) {
      e.preventDefault();
      const id = fav.dataset.fav;
      favs.has(id) ? favs.delete(id) : favs.add(id);
      saveFavs();
      toast(favs.has(id) ? 'Добавлено в избранное' : 'Удалено из избранного');
      if (!$('#modal').hidden) {
        const b = $(`.mprice [data-fav="${id}"]`);
        if (b) b.textContent = favs.has(id) ? 'В избранном ♥' : 'Сохранить в избранное';
      }
      render();
      return;
    }
    const open = e.target.closest('[data-open]');
    if (open) { e.preventDefault(); openModal(open.dataset.open); }
  });

  /* модалка: закрытие */
  $('#modal').addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); $('#filters').classList.remove('open'); } });

  /* избранное в шапке */
  $('#favBtn').addEventListener('click', () => {
    if (!favs.size) { toast('Пока ничего не сохранено'); return; }
    state.onlyFav = true; $('#fOnlyFav').checked = true;
    render();
    $('#trips').scrollIntoView({ behavior: 'smooth' });
  });

  /* мобильные фильтры */
  $('#filtersOpen').addEventListener('click', () => $('#filters').classList.add('open'));
  $('#filtersClose').addEventListener('click', () => $('#filters').classList.remove('open'));

  /* бургер */
  $('#burger').addEventListener('click', () => {
    $('#burger').classList.toggle('on');
    $('#nav').classList.toggle('open');
  });

  /* язык */
  $('.lang__btn').addEventListener('click', e => { e.stopPropagation(); $('#lang').classList.toggle('open'); });
  document.addEventListener('click', () => $('#lang').classList.remove('open'));
  $$('.lang__menu button').forEach(b => b.addEventListener('click', () => {
    $$('.lang__menu button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    $('.lang__btn').innerHTML = b.textContent.trim().split(' ')[0] + ' ' + b.dataset.lang.toUpperCase() +
      ' <svg class="ic ic--xs"><use href="#i-chev"/></svg>';
    toast('Язык интерфейса: ' + b.textContent.trim());
  }));

  /* поиск в герое */
  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    resetAll();
    const d = $('#sDest').value, du = $('#sDur').value, m = $('#sMonth').value;
    if (d) { state.dest.add(d); const i = $(`#fDest input[value="${d}"]`); if (i) i.checked = true; }
    if (du) { state.dur.add(du); const c = $(`#fDur .chip[data-dur="${du}"]`); if (c) c.classList.add('is-active'); }
    if (m) { state.month.add(+m); const c = $(`#fMonth .chip[data-month="${m}"]`); if (c) c.classList.add('is-active'); }
    render();
    $('#trips').scrollIntoView({ behavior: 'smooth' });
  });

  /* формы */
  $('#ctaForm').addEventListener('submit', e => {
    e.preventDefault(); e.target.reset();
    toast('Спасибо! Подберём варианты и напишем в течение 24 часов');
  });
  $('#newsForm').addEventListener('submit', e => {
    e.preventDefault(); e.target.reset();
    toast('Вы подписаны на рассылку');
  });

  /* скролл: шапка, прогресс, кнопка наверх */
  const onScroll = () => {
    const y = window.scrollY;
    $('#header').classList.toggle('scrolled', y > 10);
    $('#totop').classList.toggle('on', y > 700);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    $('#scrollBar').style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  $('#totop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

})();
