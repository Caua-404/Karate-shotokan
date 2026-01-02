// Carrossel de imagens de fundo no hero
(function () {
  const hero = document.querySelector('.hero');
  const bgContainer = document.querySelector('.hero-bg');

  if (!hero || !bgContainer) return;

  // Lê a lista de imagens do data-slides
  let slides;
  try {
    slides = JSON.parse(hero.dataset.slides || '[]');
  } catch (e) {
    slides = [];
  }

  if (!Array.isArray(slides) || slides.length === 0) return;

  // Cria um slide <div> para cada imagem
  const slideEls = slides.map((src) => {
    const el = document.createElement('div');
    el.className = 'hero-slide';
    el.style.backgroundImage = `url("${src}")`;
    bgContainer.insertBefore(el, bgContainer.firstChild); // fica atrás do gradiente
    return el;
  });

  let current = 0;
  const DURATION = 8000; // tempo de exibição de cada imagem (ms)

  slideEls[current].classList.add('is-active');

  function nextSlide() {
    const prev = current;
    current = (current + 1) % slideEls.length;

    slideEls[prev].classList.remove('is-active');
    slideEls[current].classList.add('is-active');
  }

  setInterval(nextSlide, DURATION);
})();

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     HERO – CARROSSEL DE FUNDO
  ========================================== */
  const hero = document.querySelector(".hero");

  if (hero) {
    const slidesAttr = hero.getAttribute("data-slides") || "[]";
    let slideList = [];

    try {
      slideList = JSON.parse(slidesAttr);
    } catch (e) {
      console.warn("data-slides inválido no .hero");
    }

    const bg = hero.querySelector(".hero-bg");
    let currentIndex = 0;
    let slideEls = [];

    if (bg && slideList.length > 0) {
      slideList.forEach((src, index) => {
        const div = document.createElement("div");
        div.className = "hero-slide";
        div.style.backgroundImage = `url(${src})`;
        if (index === 0) div.classList.add("is-active");
        bg.appendChild(div);
        slideEls.push(div);
      });

      setInterval(() => {
        if (slideEls.length === 0) return;
        slideEls[currentIndex].classList.remove("is-active");
        currentIndex = (currentIndex + 1) % slideEls.length;
        slideEls[currentIndex].classList.add("is-active");
      }, 6000);
    }
  }

  /* =========================================
     KATAS – TABELA DE MOVIMENTOS
     colunas: Nº, Nº JP, técnica JP, técnica PT, base
     Por enquanto: Heian Shodan COMPLETO
  ========================================== */

  const kataData = {
    "heian-shodan": {
      name: "Heian Shodan",
      moves: [
        {
          num: 1,
          jpNum: "Ichi (一)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 2,
          jpNum: "Ni (二)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 3,
          jpNum: "San (三)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 4,
          jpNum: "Shi (四)",
          techJp: "Tate-mawashi tettsui-uchi",
          techPt: "Golpe de martelo circular vertical",
          base: "Zenkutsu-dachi"
        },
        {
          num: 5,
          jpNum: "Go (五)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 6,
          jpNum: "Roku (六)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 7,
          jpNum: "Shichi (七)",
          techJp: "Age-uke",
          techPt: "Defesa alta",
          base: "Zenkutsu-dachi"
        },
        {
          num: 8,
          jpNum: "Hachi (八)",
          techJp: "Age-uke",
          techPt: "Defesa alta",
          base: "Zenkutsu-dachi"
        },
        {
          num: 9,
          jpNum: "Ku (九)",
          techJp: "Age-uke (kiai)",
          techPt: "Defesa alta com kiai",
          base: "Zenkutsu-dachi"
        },
        {
          num: 10,
          jpNum: "Jū (十)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 11,
          jpNum: "Jū Ichi (十一)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 12,
          jpNum: "Jū Ni (十二)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 13,
          jpNum: "Jū San (十三)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 14,
          jpNum: "Jū Shi (十四)",
          techJp: "Gedan-barai",
          techPt: "Defesa baixa",
          base: "Zenkutsu-dachi"
        },
        {
          num: 15,
          jpNum: "Jū Go (十五)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 16,
          jpNum: "Jū Roku (十六)",
          techJp: "Oi-zuki",
          techPt: "Soco em estocada",
          base: "Zenkutsu-dachi"
        },
        {
          num: 17,
          jpNum: "Jū Shichi (十七)",
          techJp: "Oi-zuki (kiai)",
          techPt: "Soco em estocada com kiai",
          base: "Zenkutsu-dachi"
        },
        {
          num: 18,
          jpNum: "Jū Hachi (十八)",
          techJp: "Shuto-uke",
          techPt: "Defesa mão de faca",
          base: "Kokutsu-dachi"
        },
        {
          num: 19,
          jpNum: "Jū Kyū (十九)",
          techJp: "Shuto-uke",
          techPt: "Defesa mão de faca",
          base: "Kokutsu-dachi"
        },
        {
          num: 20,
          jpNum: "Ni Jū (二十)",
          techJp: "Shuto-uke",
          techPt: "Defesa mão de faca",
          base: "Kokutsu-dachi"
        },
        {
          num: 21,
          jpNum: "Ni Jū Ichi (二十一)",
          techJp: "Shuto-uke",
          techPt: "Defesa mão de faca",
          base: "Kokutsu-dachi"
        }
      ]
    },

    // Estrutura preparada para os outros Heian:
"heian-nidan": {
  name: "Heian Nidan",
  moves: [
    // 1–6  | Sequência lateral (esquerda / direita)
    {
      num: 1,
      jpNum: "Ichi (一)",
      techJp: "Jodan tate-uke + ude-soete",
      techPt: "Dupla defesa alta frontal com suporte",
      base: "Kokutsu-dachi"
    },
    {
      num: 2,
      jpNum: "Ni (二)",
      techJp: "Ude-uke + chudan ura-zuki",
      techPt: "Defesa média com soco curto no tronco",
      base: "Zenkutsu-dachi"
    },
    {
      num: 3,
      jpNum: "San (三)",
      techJp: "Jodan tettsui-uchi",
      techPt: "Golpe de martelo no nível alto",
      base: "Zenkutsu-dachi"
    },
    {
      num: 4,
      jpNum: "Shi (四)",
      techJp: "Jodan tate-uke + ude-soete",
      techPt: "Dupla defesa alta frontal com suporte (lado direito)",
      base: "Kokutsu-dachi"
    },
    {
      num: 5,
      jpNum: "Go (五)",
      techJp: "Ude-uke + chudan ura-zuki",
      techPt: "Defesa média com soco curto no tronco",
      base: "Zenkutsu-dachi"
    },
    {
      num: 6,
      jpNum: "Roku (六)",
      techJp: "Jodan tettsui-uchi",
      techPt: "Golpe de martelo no nível alto",
      base: "Zenkutsu-dachi"
    },

    // 7–11 | Eixo vertical (ida) – chute, uraken e sequência de shuto
    {
      num: 7,
      jpNum: "Shichi (七)",
      techJp: "Yoko-geri keage + uraken-uchi",
      techPt: "Chute lateral ascendente com golpe de dorso de punho",
      base: "Zenkutsu-dachi"
    },
    {
      num: 8,
      jpNum: "Hachi (八)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca (frente esquerda)",
      base: "Kokutsu-dachi"
    },
    {
      num: 9,
      jpNum: "Ku (九)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca avançando",
      base: "Kokutsu-dachi"
    },
    {
      num: 10,
      jpNum: "Jū (十)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca avançando",
      base: "Kokutsu-dachi"
    },
    {
      num: 11,
      jpNum: "Jū Ichi (十一)",
      techJp: "Osae-uke + nukite (kiai)",
      techPt: "Bloqueio com mão aberta e estocada com ponta dos dedos (kiai)",
      base: "Zenkutsu-dachi"
    },

    // 12–15 | Sequência lateral (bis) – quatro shuto em kokutsu
    {
      num: 12,
      jpNum: "Jū Ni (十二)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca após rotação",
      base: "Kokutsu-dachi"
    },
    {
      num: 13,
      jpNum: "Jū San (十三)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca a 45° à direita",
      base: "Kokutsu-dachi"
    },
    {
      num: 14,
      jpNum: "Jū Shi (十四)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca após rotação",
      base: "Kokutsu-dachi"
    },
    {
      num: 15,
      jpNum: "Jū Go (十五)",
      techJp: "Shuto-uke",
      techPt: "Defesa mão de faca a 45° à esquerda",
      base: "Kokutsu-dachi"
    },

    // 16–22 | Eixo vertical (volta) – uchi-uke, mae-geri, gyaku-zuki, morote-uke
    {
      num: 16,
      jpNum: "Jū Roku (十六)",
      techJp: "Gyaku uchi-uke",
      techPt: "Defesa de dentro para fora com braço oposto",
      base: "Zenkutsu-dachi"
    },
    {
      num: 17,
      jpNum: "Jū Shichi (十七)",
      techJp: "Mae-geri",
      techPt: "Chute frontal com perna direita",
      base: "Zenkutsu-dachi"
    },
    {
      num: 18,
      jpNum: "Jū Hachi (十八)",
      techJp: "Gyaku-zuki",
      techPt: "Soco reverso após o mae-geri",
      base: "Zenkutsu-dachi"
    },
    {
      num: 19,
      jpNum: "Jū Kyū (十九)",
      techJp: "Gyaku uchi-uke",
      techPt: "Nova defesa de dentro para fora com braço oposto",
      base: "Zenkutsu-dachi"
    },
    {
      num: 20,
      jpNum: "Ni Jū (二十)",
      techJp: "Mae-geri",
      techPt: "Chute frontal com perna esquerda",
      base: "Zenkutsu-dachi"
    },
    {
      num: 21,
      jpNum: "Ni Jū Ichi (二十一)",
      techJp: "Gyaku-zuki",
      techPt: "Soco reverso após o mae-geri",
      base: "Zenkutsu-dachi"
    },
    {
      num: 22,
      jpNum: "Ni Jū Ni (二十二)",
      techJp: "Chudan morote-uke",
      techPt: "Defesa reforçada média com dois braços",
      base: "Zenkutsu-dachi"
    },

    // 23–26 | Sequência lateral final – gedan-barai e age-uke
    {
      num: 23,
      jpNum: "Ni Jū San (二十三)",
      techJp: "Gedan-barai",
      techPt: "Defesa baixa varrendo (após rotação)",
      base: "Zenkutsu-dachi"
    },
    {
      num: 24,
      jpNum: "Ni Jū Shi (二十四)",
      techJp: "Jodan age-uke",
      techPt: "Defesa alta ascendente a 45° à direita",
      base: "Zenkutsu-dachi"
    },
    {
      num: 25,
      jpNum: "Ni Jū Go (二十五)",
      techJp: "Gedan-barai",
      techPt: "Defesa baixa varrendo (lado direito)",
      base: "Zenkutsu-dachi"
    },
    {
      num: 26,
      jpNum: "Ni Jū Roku (二十六)",
      techJp: "Jodan age-uke (kiai)",
      techPt: "Defesa alta ascendente com kiai",
      base: "Zenkutsu-dachi"
    }
  ]
},

"heian-sandan": {
  name: "Heian Sandan",
  moves: [
    // 1–6: sequência de uchi-uke + uchi/gedan
    { num: 1,  jpNum: "Ichi (一)",        techJp: "Uchi-uke",                          techPt: "Defesa interna",                                              base: "Kokutsu-dachi" },
    { num: 2,  jpNum: "Ni (二)",          techJp: "Uchi-uke / Gedan-barai",            techPt: "Defesa interna / defesa baixa",                               base: "Heisoku-dachi" },
    { num: 3,  jpNum: "San (三)",         techJp: "Uchi-uke / Gedan-barai",            techPt: "Defesa interna / defesa baixa",                               base: "Heisoku-dachi" },
    { num: 4,  jpNum: "Shi (四)",         techJp: "Uchi-uke",                          techPt: "Defesa interna",                                              base: "Kokutsu-dachi" },
    { num: 5,  jpNum: "Go (五)",          techJp: "Uchi-uke / Gedan-barai",            techPt: "Defesa interna / defesa baixa",                               base: "Heisoku-dachi" },
    { num: 6,  jpNum: "Roku (六)",        techJp: "Uchi-uke / Gedan-barai",            techPt: "Defesa interna / defesa baixa",                               base: "Heisoku-dachi" },

    // 7–8: morote-uke → nukite com osae-uke
    { num: 7,  jpNum: "Shichi (七)",      techJp: "Morote-uke",                         techPt: "Defesa reforçada (duplo antebraço)",                          base: "Kokutsu-dachi" },
    { num: 8,  jpNum: "Hachi (八)",       techJp: "Shihon-tate-nukite / Osae-uke",     techPt: "Lança de mão vertical / defesa de pressão",                   base: "Zenkutsu-dachi" },

    // 9–10: kentsui + oi-zuki (kiai)
    { num: 9,  jpNum: "Ku (九)",          techJp: "Kentsui-uchi-mawashi-uchi",         techPt: "Golpe de martelo em arco (martelo circular)",                 base: "Kiba-dachi" },
    { num: 10, jpNum: "Jū (十)",          techJp: "Oi-zuki (kiai)",                    techPt: "Soco em estocada com kiai",                                   base: "Zenkutsu-dachi" },

    // 11: postura lenta de guarda
    { num: 11, jpNum: "Jū Ichi (十一)",   techJp: "Ryoken-ryokoshi-kamae",             techPt: "Guarda com ambos punhos na cintura (movimento lento)",        base: "Heisoku-dachi" },

    // 12–17: sequência fumikomi + furi-empi / uraken em kiba-dachi
    { num: 12, jpNum: "Jū Ni (十二)",     techJp: "Fumikomi / Furi-empi",              techPt: "Pisão com avanço / cotovelo em balanço",                      base: "Kiba-dachi" },
    { num: 13, jpNum: "Jū San (十三)",    techJp: "Uraken-tate-mawashi-uchi",          techPt: "Dorso de punho circular vertical",                            base: "Kiba-dachi" },
    { num: 14, jpNum: "Jū Yon (十四)",    techJp: "Fumikomi / Furi-empi",              techPt: "Pisão com avanço / cotovelo em balanço",                      base: "Kiba-dachi" },
    { num: 15, jpNum: "Jū Go (十五)",     techJp: "Uraken-tate-mawashi-uchi",          techPt: "Dorso de punho circular vertical",                            base: "Kiba-dachi" },
    { num: 16, jpNum: "Jū Roku (十六)",   techJp: "Fumikomi / Furi-empi",              techPt: "Pisão com avanço / cotovelo em balanço",                      base: "Kiba-dachi" },
    { num: 17, jpNum: "Jū Shichi (十七)", techJp: "Uraken-tate-mawashi-uchi",          techPt: "Dorso de punho circular vertical",                            base: "Kiba-dachi" },

    // 18: tsukami-uke + oi-zuki
    { num: 18, jpNum: "Jū Hachi (十八)",  techJp: "Tsukami-uke (Koko-uke) & Oi-zuki",  techPt: "Defesa de agarrar (garra de tigre) e soco em estocada",       base: "Zenkutsu-dachi" },

    // 19–20: koho-tsukiage + ushiro-empi (último com kiai e yori-ashi)
    { num: 19, jpNum: "Jū Ku (十九)",     techJp: "Koho-tsukiage / Ushiro-empi-uchi",  techPt: "Soco ascendente para trás / cotovelo para trás",              base: "Kiba-dachi" },
    { num: 20, jpNum: "Ni Jū (二十)",     techJp: "Koho-tsukiage / Ushiro-empi-uchi (kiai)", techPt: "Soco ascendente para trás / cotovelo para trás com kiai (yori-ashi)", base: "Kiba-dachi" }
  ]
}
,

"heian-yondan": {
  name: "Heian Yondan",
  moves: [
    { num: 1,  jpNum: "Ichi (一)",        techJp: "Hidari haiwan sokumen jōdan yoko-uke",        techPt: "Defesa alta com dorso do antebraço (haiwan) à esquerda",                 base: "Migi kokutsu-dachi" },
    { num: 2,  jpNum: "Ni (二)",          techJp: "Migi haiwan sokumen jōdan yoko-uke",          techPt: "Defesa alta com dorso do antebraço (haiwan) à direita",                 base: "Hidari kokutsu-dachi" },

    { num: 3,  jpNum: "San (三)",         techJp: "Ryōken gedan jūji-uke",                       techPt: "X-bloco baixo com as duas mãos",                                        base: "Hidari zenkutsu-dachi" },
    { num: 4,  jpNum: "Shi (四)",         techJp: "Migi chūdan morote-uke",                      techPt: "Defesa reforçada média com braço direito",                              base: "Hidari kokutsu-dachi" },

    { num: 5,  jpNum: "Go (五)",          techJp: "Ryōken koshi-gamae",                          techPt: "Guarda com dois punhos na cintura (preparação)",                        base: "Migi ashi-dachi" },
    { num: 6,  jpNum: "Roku (六)",        techJp: "Hidari sokutō yoko-geri keage + uraken jōdan",techPt: "Chute lateral ascendente com a lâmina do pé + dorso de punho alto",     base: "Migi ashi-dachi" },
    { num: 7,  jpNum: "Shichi (七)",      techJp: "Migi mae-empi",                               techPt: "Cotovelo frontal com o braço direito",                                  base: "Hidari zenkutsu-dachi" },

    { num: 8,  jpNum: "Hachi (八)",       techJp: "Ryōken koshi-gamae",                          techPt: "Guarda com dois punhos na cintura (preparação)",                        base: "Hidari ashi-dachi" },
    { num: 9,  jpNum: "Ku (九)",          techJp: "Migi sokutō yoko-geri keage + uraken jōdan",  techPt: "Chute lateral ascendente + dorso de punho alto com a direita",          base: "Hidari ashi-dachi" },
    { num: 10, jpNum: "Jū (十)",          techJp: "Hidari mae-empi",                             techPt: "Cotovelo frontal com o braço esquerdo",                                 base: "Migi zenkutsu-dachi" },

    { num: 11, jpNum: "Jū Ichi (十一)",   techJp: "Hidari shuto gedan-barai → jōdan-uke + migi shuto jōdan sotomawashi-uchi", techPt: "Mão de faca: defesa baixa, depois alta, com golpe circular alto da mão de faca direita", base: "Hidari hiza-kutsu (base ajoelhada)" },
    { num: 12, jpNum: "Jū Ni (十二)",     techJp: "Migi jōdan mae-geri keage",                   techPt: "Chute frontal alto ascendente com a perna direita",                     base: "Shizen/posição de transição" },
    { num: 13, jpNum: "Jū San (十三)",    techJp: "Osae-uke → migi uraken jōdan tatemawashi-uchi (kiai)", techPt: "Pressão com a mão + dorso de punho vertical circular (KIAI) em kosa-dachi", base: "Migi mae kosa-dachi" },

    { num: 14, jpNum: "Jū Yon (十四)",    techJp: "Ryōken chūdan kakiwake-uke",                  techPt: "Defesa separadora média com as duas mãos",                              base: "Migi kokutsu-dachi" },

    { num: 15, jpNum: "Jū Go (十五)",     techJp: "Migi jōdan mae-geri keage",                   techPt: "Chute frontal alto ascendente com a direita",                           base: "Transição" },
    { num: 16, jpNum: "Jū Roku (十六)",   techJp: "Chūdan oi-zuki",                              techPt: "Soco direto avançando (oi-zuki) na altura média",                       base: "Migi zenkutsu-dachi" },
    { num: 17, jpNum: "Jū Shichi (十七)", techJp: "Chūdan gyaku-zuki",                           techPt: "Soco reverso na altura média",                                           base: "Migi zenkutsu-dachi" },

    { num: 18, jpNum: "Jū Hachi (十八)",  techJp: "Ryōken chūdan kakiwake-uke",                  techPt: "Defesa separadora média com as duas mãos",                              base: "Hidari kokutsu-dachi" },

    { num: 19, jpNum: "Jū Ku (十九)",     techJp: "Migi jōdan mae-geri keage",                   techPt: "Chute frontal alto ascendente com a direita",                           base: "Transição" },
    { num: 20, jpNum: "Ni Jū (二十)",     techJp: "Chūdan oi-zuki",                              techPt: "Soco direto avançando na altura média",                                 base: "Hidari zenkutsu-dachi" },
    { num: 21, jpNum: "Ni Jū Ichi (二十一)", techJp: "Chūdan gyaku-zuki",                        techPt: "Soco reverso na altura média",                                           base: "Hidari zenkutsu-dachi" },

    { num: 22, jpNum: "Ni Jū Ni (二十二)", techJp: "Hidari chūdan morote-uke",                   techPt: "Defesa reforçada média com o braço esquerdo",                           base: "Migi kokutsu-dachi" },
    { num: 23, jpNum: "Ni Jū San (二十三)",techJp: "Migi chūdan morote-uke",                     techPt: "Defesa reforçada média com o braço direito",                            base: "Hidari kokutsu-dachi" },
    { num: 24, jpNum: "Ni Jū Yon (二十四)",techJp: "Hidari chūdan morote-uke",                   techPt: "Defesa reforçada média com o braço esquerdo",                           base: "Migi kokutsu-dachi" },

    { num: 25, jpNum: "Ni Jū Go (二十五)", techJp: "Migi hiza-geri + hiza-tsuchi (kiai)",        techPt: "Joelhada com golpe de joelho (KIAI)",                                   base: "Hidari ashi-dachi" },

    { num: 26, jpNum: "Ni Jū Roku (二十六)",techJp: "Hidari chūdan shuto-uke",                   techPt: "Defesa média com mão de faca à esquerda",                               base: "Migi kokutsu-dachi" },
    { num: 27, jpNum: "Ni Jū Shichi (二十七)",techJp: "Migi chūdan shuto-uke",                   techPt: "Defesa média com mão de faca à direita",                                base: "Hidari kokutsu-dachi" }
  ]
}
,

"heian-godan": {
  name: "Heian Godan",
  moves: [
    // 1–2: uchi-uke + gyaku-zuki em kokutsu
    { num: 1,  jpNum: "Ichi (一)",        techJp: "Hidari chūdan uchi-uke",           techPt: "Defesa interna média com o braço esquerdo",              base: "Kokutsu-dachi" },
    { num: 2,  jpNum: "Ni (二)",          techJp: "Migi chūdan gyaku-zuki",           techPt: "Soco reverso médio com o braço direito",                base: "Kokutsu-dachi" },

    // 3: kaki-gamae (guarda fechada)
    { num: 3,  jpNum: "San (三)",         techJp: "Hidari kaki-gamae",                techPt: "Postura de guarda (kaki-gamae) com o braço esquerdo",   base: "Heisoku-dachi" },

    // 4–5: uchi-uke + gyaku-zuki do outro lado
    { num: 4,  jpNum: "Shi (四)",         techJp: "Migi chūdan uchi-uke",             techPt: "Defesa interna média com o braço direito",              base: "Kokutsu-dachi" },
    { num: 5,  jpNum: "Go (五)",          techJp: "Hidari chūdan gyaku-zuki",         techPt: "Soco reverso médio com o braço esquerdo",               base: "Kokutsu-dachi" },

    // 6: kagi-gamae
    { num: 6,  jpNum: "Roku (六)",        techJp: "Migi kagi-gamae",                  techPt: "Postura de guarda (kagi-gamae) com o braço direito",    base: "Heisoku-dachi" },

    // 7: morote-uke em kokutsu
    { num: 7,  jpNum: "Shichi (七)",      techJp: "Migi chūdan morote-uke",           techPt: "Defesa reforçada média com o braço direito",            base: "Kokutsu-dachi" },

    // 8–10: sequência de juji-uke, haishu e osae-uke em zenkutsu
    { num: 8,  jpNum: "Hachi (八)",       techJp: "Gedan jūji-uke",                   techPt: "Defesa em X baixa com os punhos",                       base: "Zenkutsu-dachi" },
    { num: 9,  jpNum: "Ku (九)",          techJp: "Jōdan haishu jūji-uke",            techPt: "Defesa em X alta com dorso das mãos",                   base: "Zenkutsu-dachi" },
    { num: 10, jpNum: "Jū (十)",          techJp: "Chūdan osae-uke",                  techPt: "Defesa de pressão média",                               base: "Zenkutsu-dachi" },

    // 11: oi-zuki com kiai
    { num: 11, jpNum: "Jū Ichi (十一)",   techJp: "Chūdan migi oi-zuki (kiai)",       techPt: "Soco em estocada médio com kiai",                       base: "Zenkutsu-dachi" },

    // 12–13: kiba com gedan-barai + haishu-uke
    { num: 12, jpNum: "Jū Ni (十二)",     techJp: "Migi gedan-barai",                 techPt: "Defesa baixa com o braço direito",                      base: "Kiba-dachi" },
    { num: 13, jpNum: "Jū San (十三)",    techJp: "Chūdan haishu-uke",                techPt: "Defesa média com dorso da mão",                         base: "Kiba-dachi" },

    // 14–15: mikazuki-geri + mae-empi
    { num: 14, jpNum: "Jū Yon (十四)",    techJp: "Migi mikazuki-geri",               techPt: "Chute crescente (meia-lua) com a perna direita",        base: "Kiba-dachi" },
    { num: 15, jpNum: "Jū Go (十五)",     techJp: "Migi mae-empi",                    techPt: "Ataque de cotovelo frontal com o braço direito",        base: "Kiba-dachi" },

    // 16: morote-uke em kosa-dachi
    { num: 16, jpNum: "Jū Roku (十六)",   techJp: "Migi chūdan morote-uke",           techPt: "Defesa reforçada média com o braço direito",            base: "Kosa-dachi" },

    // 17–19: sequência do salto e X-uke
    { num: 17, jpNum: "Jū Shichi (十七)", techJp: "Koho tsuki-age",                   techPt: "Soco ascendente para trás",                             base: "Teiji-dachi" },
    { num: 18, jpNum: "Jū Hachi (十八)",  techJp: "Tobi mikazuki-geri (salto)",       techPt: "Salto com chute crescente, passando sobre o bastão",    base: "Kosa-dachi (aterrissagem)" },
    { num: 19, jpNum: "Jū Ku (十九)",     techJp: "Gedan jūji-uke (kiai)",            techPt: "Defesa em X baixa com kiai",                            base: "Kosa-dachi" },

    // 20–21: morote-uke + shuto-uchi em zenkutsu
    { num: 20, jpNum: "Ni Jū (二十)",      techJp: "Migi chūdan morote-uke",          techPt: "Defesa reforçada média com o braço direito",            base: "Zenkutsu-dachi" },
    { num: 21, jpNum: "Ni Jū Ichi (二十一)", techJp: "Migi gedan shuto-uchi",        techPt: "Golpe baixo com mão de faca direita",                   base: "Zenkutsu-dachi" },

    // 22–23: manji-gamae recuando
    { num: 22, jpNum: "Ni Jū Ni (二十二)", techJp: "Manji-gamae",                     techPt: "Guarda em manji (defesa alta e baixa opostas)",        base: "Kokutsu-dachi" },
    { num: 23, jpNum: "Ni Jū San (二十三)",techJp: "Manji-gamae",                     techPt: "Guarda em manji",                                      base: "Heisoku-dachi" },

    // 24–26: variação final de manji-gamae e shuto
    { num: 24, jpNum: "Ni Jū Yon (二十四)",techJp: "Migi manji-gamae",                techPt: "Guarda em manji com foco à direita",                    base: "Heisoku-dachi" },
    { num: 25, jpNum: "Ni Jū Go (二十五)", techJp: "Hidari gedan shuto-uchi",         techPt: "Golpe baixo com mão de faca esquerda",                  base: "Zenkutsu-dachi" },
    { num: 26, jpNum: "Ni Jū Roku (二十六)",techJp: "Manji-gamae",                    techPt: "Guarda em manji de finalização",                        base: "Kokutsu-dachi" }
  ]
},

"tekki-shodan": {
  name: "Tekki Shodan",
  moves: [
    // ATENÇÃO: EXEMPLOS – ajuste nomes/técnicas conforme a apostila do seu dojo

    {
      num: 1,
      jpNum: "Ichi (一)",
      techJp: "Kosa-uke (lado esquerdo)",
      techPt: "Defesa cruzada em curta distância (lado esquerdo)",
      base: "Kiba-dachi"
    },
    {
      num: 2,
      jpNum: "Ni (二)",
      techJp: "Kosa-uke (lado direito)",
      techPt: "Defesa cruzada em curta distância (lado direito)",
      base: "Kiba-dachi"
    },
    {
      num: 3,
      jpNum: "San (三)",
      techJp: "Uchi-uke",
      techPt: "Defesa interna em curta distância",
      base: "Kiba-dachi"
    },
    {
      num: 4,
      jpNum: "Shi (四)",
      techJp: "Mae-empi",
      techPt: "Ataque de cotovelo frontal",
      base: "Kiba-dachi"
    },

    // A partir daqui, preencha fielmente com a sequência da SUA apostila:
    {
      num: 5,
      jpNum: "Go (五)",
      techJp: "— completar conforme apostila —",
      techPt: "— completar conforme apostila —",
      base: "Kiba-dachi"
    },
    {
      num: 6,
      jpNum: "Roku (六)",
      techJp: "— completar —",
      techPt: "— completar —",
      base: "Kiba-dachi"
    },
    {
      num: 7,
      jpNum: "Shichi (七)",
      techJp: "— completar —",
      techPt: "— completar —",
      base: "Kiba-dachi"
    },
    {
      num: 8,
      jpNum: "Hachi (八)",
      techJp: "— completar —",
      techPt: "— completar —",
      base: "Kiba-dachi"
    },

    // ... continue até a última contagem que vocês usam (19, 21, 23, etc.)
    // O importante é manter SEMPRE:
    // num, jpNum, techJp, techPt, base
  ]
},

  };

  const kataDisplay = document.getElementById("kata-display");
  const kataButtons = document.querySelectorAll(".katas-list button");

  function renderKata(key) {
    if (!kataDisplay) return;

    const data = kataData[key];

    if (!data) {
      kataDisplay.innerHTML = `
        <h3>Em construção</h3>
        <p style="color:#aaa;">
          Ainda vamos cadastrar todos os movimentos deste kata neste projeto.
        </p>
      `;
      return;
    }

    const rowsHtml = data.moves
      .map(
        (m) => `
        <tr>
          <td class="kata-number">${m.num}</td>
          <td>${m.jpNum}</td>
          <td>${m.techJp}</td>
          <td>${m.techPt}</td>
          <td>${m.base}</td>
        </tr>
      `
      )
      .join("");

    kataDisplay.innerHTML = `
      <h3>${data.name}</h3>
      <div class="kata-moves">
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nº em japonês</th>
              <th>Técnica (日本語)</th>
              <th>Técnica (português)</th>
              <th>Base utilizada</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      <p class="kata-note" style="margin-top:12px; font-size:0.85rem; color:#aaa;">
        Referência didática aproximada; a contagem e pequenas variações podem mudar
        conforme a federação ou linha do seu dojo.
      </p>
    `;
  }

  

  // clique nos botões de kata
  kataButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-kata");
      renderKata(key);
    });
  });

  // opcional: já abre Heian Shodan ao carregar
  if (kataButtons.length > 0) {
    renderKata("heian-shodan");
  }
});
