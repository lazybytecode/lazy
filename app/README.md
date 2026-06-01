## 🧠 🏗️ ARQUITETURA
```
CLIENT (JS)
  ↓ handshake (ECDH)
SERVER (Flask)
  ↓ gera chave compartilhada
CLIENT
  ↓ recebe payload criptografado
  ↓ valida assinatura
  ↓ descriptografa
  ↓ cache (IndexedDB)
  ↓ aplica UI (:root + h1)
  ```
  
  | Tipo    | Exemplo              | Comportamento        |
| ------- | -------------------- | -------------------- |
| top     | `"top"`              | antes de tudo        |
| bottom  | `"bottom"`           | depois de tudo       |
| slot    | `"slot:sidebar"`     | dentro de `#sidebar` |
| before  | `"before:#content"`  | antes do elemento    |
| after   | `"after:#content"`   | depois               |
| replace | `"replace:#content"` | substitui            |

nginx

```
location / {
  try_files $uri /index.html;
}
```

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Padrões body

```
1. Grid menor

body::after {
  content: '';
  position: fixed; inset: 0;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: .4;
}

2. Grid maior

background-size: 80px 80px;
opacity: .6;

3. Pontilhado (dots)

background-image: radial-gradient(var(--color-border) 1px, transparent 1px);
background-size: 20px 20px;
opacity: .4;

4. Linhas diagonais

background-image: repeating-linear-gradient(
  45deg,
  var(--color-border),
  var(--color-border) 1px,
  transparent 1px,
  transparent 20px
);
opacity: .3;

5. Linhas horizontais

background-image: linear-gradient(var(--color-border) 1px, transparent 1px);
background-size: 100% 32px;

6. Linhas verticais

background-image: linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
background-size: 32px 100%;

7. Grade + fade radial

mask-image: radial-gradient(circle at center, black, transparent 70%);

8. Checkerboard suave

background-image:
  linear-gradient(45deg, var(--color-border) 25%, transparent 25%),
  linear-gradient(-45deg, var(--color-border) 25%, transparent 25%);
background-size: 40px 40px;
opacity: .2;

9. Ruído leve (fake noise)

background-image: radial-gradient(rgba(0,0,0,.05) 1px, transparent 1px);
background-size: 4px 4px;

10. Ondas suaves

background-image: repeating-radial-gradient(
  circle,
  var(--color-border),
  var(--color-border) 1px,
  transparent 1px,
  transparent 20px
);
opacity: .3;

11. Grid com destaque no centro

mask-image: radial-gradient(circle at center, black 40%, transparent 100%);

12. Linhas cruzadas finas

background-image:
  repeating-linear-gradient(0deg, var(--color-border), var(--color-border) 1px, transparent 1px, transparent 16px),
  repeating-linear-gradient(90deg, var(--color-border), var(--color-border) 1px, transparent 1px, transparent 16px);
opacity: .25;

13. Hex pattern (simulado)

background-image:
  radial-gradient(circle at 25% 25%, var(--color-border) 2px, transparent 2px),
  radial-gradient(circle at 75% 75%, var(--color-border) 2px, transparent 2px);
background-size: 40px 40px;

14. Scanlines (estilo CRT)

background-image: repeating-linear-gradient(
  0deg,
  rgba(0,0,0,.1),
  rgba(0,0,0,.1) 1px,
  transparent 1px,
  transparent 3px
);

15. Gradiente + grid

background-image:
  linear-gradient(var(--color-border) 1px, transparent 1px),
  linear-gradient(90deg, var(--color-border) 1px, transparent 1px),
  radial-gradient(circle at top, rgba(255,255,255,.1), transparent);

16. Diagonal dupla

background-image:
  repeating-linear-gradient(45deg, var(--color-border) 1px, transparent 1px 20px),
  repeating-linear-gradient(-45deg, var(--color-border) 1px, transparent 1px 20px);
opacity: .2;

17. Grade com blur

filter: blur(0.5px);

18. Pontos grandes espaçados

background-image: radial-gradient(var(--color-border) 2px, transparent 2px);
background-size: 60px 60px;

19. Linhas com fade superior

mask-image: linear-gradient(to bottom, black, transparent);

20. Grid animado (sutil)

animation: moveGrid 10s linear infinite;

@keyframes moveGrid {
  from { background-position: 0 0; }
  to { background-position: 48px 48px; }
}


```

## Fundos body

```
/* 1 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1.5' fill='black' opacity='0.08'/%3E%3C/svg%3E");
    background-size: 20px 20px;
    opacity: .4;
}

/* 2 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.04) 75%);
    background-size: 40px 40px;
    opacity: .5;
}

/* 3 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(rgba(0,0,0,.05) 1px, transparent 1px);
    background-size: 18px 18px;
    opacity: .4;
}

/* 4 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(0deg, rgba(0,0,0,.03), rgba(0,0,0,.03) 1px, transparent 1px, transparent 12px);
    opacity: .6;
}

/* 5 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(90deg, rgba(0,0,0,.03), rgba(0,0,0,.03) 1px, transparent 1px, transparent 12px);
    opacity: .6;
}

/* 6 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(circle at 25% 25%, rgba(0,0,0,.05) 2px, transparent 2px);
    background-size: 30px 30px;
    opacity: .4;
}

/* 7 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(45deg, rgba(0,0,0,.04) 0 2px, transparent 2px 10px);
    opacity: .5;
}

/* 8 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(-45deg, rgba(0,0,0,.04) 0 2px, transparent 2px 10px);
    opacity: .5;
}

/* 9 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='black' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E");
    background-size: 20px 20px;
    opacity: .4;
}

/* 10 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='30' height='30' fill='black' opacity='0.03'/%3E%3C/svg%3E");
    background-size: 30px 30px;
    opacity: .5;
}

/* 11 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(0,0,0,.06) 1px, transparent 1px);
    background-size: 12px 12px;
    opacity: .4;
}

/* 12 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(30deg, rgba(0,0,0,.04) 0 1px, transparent 1px 8px);
    opacity: .5;
}

/* 13 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(60deg, rgba(0,0,0,.04) 0 1px, transparent 1px 8px);
    opacity: .5;
}

/* 14 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: linear-gradient(90deg, rgba(0,0,0,.03) 50%, transparent 50%);
    background-size: 16px 16px;
    opacity: .5;
}

/* 15 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: linear-gradient(0deg, rgba(0,0,0,.03) 50%, transparent 50%);
    background-size: 16px 16px;
    opacity: .5;
}

/* 16 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='2' fill='black' opacity='0.05'/%3E%3C/svg%3E");
    background-size: 20px 20px;
    opacity: .4;
}

/* 17 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-radial-gradient(circle at center, rgba(0,0,0,.03) 0 2px, transparent 2px 10px);
    opacity: .5;
}

/* 18 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(90deg, rgba(0,0,0,.02) 0 2px, transparent 2px 6px);
    opacity: .6;
}

/* 19 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='50,0 100,50 50,100 0,50' fill='none' stroke='black' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E");
    background-size: 25px 25px;
    opacity: .4;
}

/* 20 */
body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: repeating-linear-gradient(-30deg, rgba(0,0,0,.03) 0 1px, transparent 1px 10px);
    opacity: .5;
}

```

## Temas Design System

```

Tema 1 — Saúde & Bem-estar
:root {
  --color-bg:           #f7fafa;
  --color-surface:      #ffffff;
  --color-surface-2:    #e8f4f0;
  --color-border:       #d4e8e2;
  --color-border-hover: rgba(13, 158, 114, 0.2);
  --color-muted:        #8ab5ab;
  --color-amber:        #d48500;
  --color-accent:       #0d9e72;
  --color-accent-rgb:   13, 158, 114;
  --color-accent-2:     #2b8fd4;
  --color-accent-2-rgb: 43, 143, 212;
  --color-accent-warm:  #e05c2a;
  --color-text:         #0d3d2e;
  --color-text-muted:   #4a7a6e;
  --color-text-faint:   #a8ccc6;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(13,158,114,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(43,143,212,0.07) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #0d9e72 0%, #2b8fd4 100%);
  --gradient-card:      linear-gradient(160deg, #e8f4f0 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(13, 158, 114, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

Tema 2 — Finanças & Fintech

:root {
  --color-bg:           #f6f7fb;
  --color-surface:      #ffffff;
  --color-surface-2:    #edf0f9;
  --color-border:       #d0d8f5;
  --color-border-hover: rgba(41, 71, 232, 0.2);
  --color-muted:        #8a96c8;
  --color-amber:        #c47f00;
  --color-accent:       #2947e8;
  --color-accent-rgb:   41, 71, 232;
  --color-accent-2:     #7c3aed;
  --color-accent-2-rgb: 124, 58, 237;
  --color-accent-warm:  #e84e1b;
  --color-text:         #0d1e4a;
  --color-text-muted:   #4a5a8a;
  --color-text-faint:   #b0bce0;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(41,71,232,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(124,58,237,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #2947e8 0%, #7c3aed 100%);
  --gradient-card:      linear-gradient(160deg, #edf0f9 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(41, 71, 232, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

Tema 3 — E-commerce & Varejo

:root {
  --color-bg:           #fdf6f3;
  --color-surface:      #ffffff;
  --color-surface-2:    #faeee8;
  --color-border:       #f5cfc0;
  --color-border-hover: rgba(232, 68, 13, 0.2);
  --color-muted:        #c4907e;
  --color-amber:        #d4870a;
  --color-accent:       #e8440d;
  --color-accent-rgb:   232, 68, 13;
  --color-accent-2:     #f5a623;
  --color-accent-2-rgb: 245, 166, 35;
  --color-accent-warm:  #e8440d;
  --color-text:         #3d1106;
  --color-text-muted:   #7a3520;
  --color-text-faint:   #f0c0ad;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,68,13,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(245,166,35,0.1) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #e8440d 0%, #f5a623 100%);
  --gradient-card:      linear-gradient(160deg, #faeee8 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(232, 68, 13, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

Tema 4 — Tech & SaaS Neutro

:root {
  --color-bg:           #f4f5f7;
  --color-surface:      #ffffff;
  --color-surface-2:    #eaecf2;
  --color-border:       #d1d5e8;
  --color-border-hover: rgba(14, 165, 233, 0.2);
  --color-muted:        #8890b0;
  --color-amber:        #c47d00;
  --color-accent:       #0ea5e9;
  --color-accent-rgb:   14, 165, 233;
  --color-accent-2:     #6366f1;
  --color-accent-2-rgb: 99, 102, 241;
  --color-accent-warm:  #f43f5e;
  --color-text:         #111827;
  --color-text-muted:   #4b5880;
  --color-text-faint:   #b0b8d4;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(99,102,241,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
  --gradient-card:      linear-gradient(160deg, #eaecf2 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(14, 165, 233, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

Tema 5 — Agro & Rural

:root {
  --color-bg:           #f6f8f2;
  --color-surface:      #ffffff;
  --color-surface-2:    #ecf2e3;
  --color-border:       #cde4af;
  --color-border-hover: rgba(74, 156, 26, 0.2);
  --color-muted:        #7aaa50;
  --color-amber:        #c88a00;
  --color-accent:       #4a9c1a;
  --color-accent-rgb:   74, 156, 26;
  --color-accent-2:     #c88a00;
  --color-accent-2-rgb: 200, 138, 0;
  --color-accent-warm:  #d45a1a;
  --color-text:         #1a2e0d;
  --color-text-muted:   #3d6022;
  --color-text-faint:   #b8d898;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(74,156,26,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(200,138,0,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #4a9c1a 0%, #c88a00 100%);
  --gradient-card:      linear-gradient(160deg, #ecf2e3 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(74, 156, 26, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

Tema 6 — Luxury & Premium

:root {
  --color-bg:           #faf9f7;
  --color-surface:      #ffffff;
  --color-surface-2:    #f2ede6;
  --color-border:       #e8d8c0;
  --color-border-hover: rgba(201, 153, 60, 0.22);
  --color-muted:        #b09470;
  --color-amber:        #c9993c;
  --color-accent:       #c9993c;
  --color-accent-rgb:   201, 153, 60;
  --color-accent-2:     #8c6030;
  --color-accent-2-rgb: 140, 96, 48;
  --color-accent-warm:  #c9993c;
  --color-text:         #1a1410;
  --color-text-muted:   #6b4a2a;
  --color-text-faint:   #d4bc98;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,153,60,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(140,96,48,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #c9993c 0%, #8c6030 100%);
  --gradient-card:      linear-gradient(160deg, #f2ede6 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(201, 153, 60, 0.18);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 7 — Educação & EdTech ── */
:root {
  --color-bg:           #f5f7ff;
  --color-surface:      #ffffff;
  --color-surface-2:    #eceffe;
  --color-border:       #d2d9f8;
  --color-border-hover: rgba(79, 101, 240, 0.2);
  --color-muted:        #8e9bd4;
  --color-amber:        #c47d00;
  --color-accent:       #4f65f0;
  --color-accent-rgb:   79, 101, 240;
  --color-accent-2:     #f0507a;
  --color-accent-2-rgb: 240, 80, 122;
  --color-accent-warm:  #f0507a;
  --color-text:         #0e1540;
  --color-text-muted:   #4a567a;
  --color-text-faint:   #b8c0e4;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,101,240,0.11) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,80,122,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #4f65f0 0%, #f0507a 100%);
  --gradient-card:      linear-gradient(160deg, #eceffe 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(79, 101, 240, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 8 — Jurídico & Compliance ── */
:root {
  --color-bg:           #f7f7f5;
  --color-surface:      #ffffff;
  --color-surface-2:    #eeede9;
  --color-border:       #dddbd4;
  --color-border-hover: rgba(42, 42, 90, 0.18);
  --color-muted:        #9a9888;
  --color-amber:        #b8860b;
  --color-accent:       #2a2a5a;
  --color-accent-rgb:   42, 42, 90;
  --color-accent-2:     #b8860b;
  --color-accent-2-rgb: 184, 134, 11;
  --color-accent-warm:  #c04a2a;
  --color-text:         #141410;
  --color-text-muted:   #5a5848;
  --color-text-faint:   #c4c2b8;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(42,42,90,0.08) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(184,134,11,0.07) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #2a2a5a 0%, #b8860b 100%);
  --gradient-card:      linear-gradient(160deg, #eeede9 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(42, 42, 90, 0.12);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 9 — Imobiliário & Construção ── */
:root {
  --color-bg:           #f8f7f4;
  --color-surface:      #ffffff;
  --color-surface-2:    #f0ece4;
  --color-border:       #e0d8cc;
  --color-border-hover: rgba(160, 100, 40, 0.2);
  --color-muted:        #b0a08a;
  --color-amber:        #d4820a;
  --color-accent:       #a06428;
  --color-accent-rgb:   160, 100, 40;
  --color-accent-2:     #4a7a5a;
  --color-accent-2-rgb: 74, 122, 90;
  --color-accent-warm:  #c05020;
  --color-text:         #1e180e;
  --color-text-muted:   #5a4e3a;
  --color-text-faint:   #ccc4b4;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(160,100,40,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(74,122,90,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #a06428 0%, #4a7a5a 100%);
  --gradient-card:      linear-gradient(160deg, #f0ece4 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(160, 100, 40, 0.14);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 10 — Beleza & Estética ── */
:root {
  --color-bg:           #fdf7f9;
  --color-surface:      #ffffff;
  --color-surface-2:    #faedf3;
  --color-border:       #f2d4e4;
  --color-border-hover: rgba(210, 70, 130, 0.2);
  --color-muted:        #cc90b0;
  --color-amber:        #c4780a;
  --color-accent:       #d2467e;
  --color-accent-rgb:   210, 70, 126;
  --color-accent-2:     #9b59b6;
  --color-accent-2-rgb: 155, 89, 182;
  --color-accent-warm:  #e8502a;
  --color-text:         #2e0e1e;
  --color-text-muted:   #7a3a5a;
  --color-text-faint:   #f0c4da;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(210,70,126,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(155,89,182,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #d2467e 0%, #9b59b6 100%);
  --gradient-card:      linear-gradient(160deg, #faedf3 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(210, 70, 126, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 11 — Logística & Transporte ── */
:root {
  --color-bg:           #f4f6f8;
  --color-surface:      #ffffff;
  --color-surface-2:    #e8ecf2;
  --color-border:       #d0d8e4;
  --color-border-hover: rgba(20, 90, 180, 0.2);
  --color-muted:        #7a90b0;
  --color-amber:        #d48a00;
  --color-accent:       #145ab4;
  --color-accent-rgb:   20, 90, 180;
  --color-accent-2:     #f0820a;
  --color-accent-2-rgb: 240, 130, 10;
  --color-accent-warm:  #f0820a;
  --color-text:         #0a1828;
  --color-text-muted:   #3a5070;
  --color-text-faint:   #b0c0d8;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,90,180,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,130,10,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #145ab4 0%, #f0820a 100%);
  --gradient-card:      linear-gradient(160deg, #e8ecf2 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(20, 90, 180, 0.14);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 12 — Alimentação & Foodtech ── */
:root {
  --color-bg:           #fdf8f3;
  --color-surface:      #ffffff;
  --color-surface-2:    #faf0e4;
  --color-border:       #f0dcc8;
  --color-border-hover: rgba(220, 90, 20, 0.2);
  --color-muted:        #c4906a;
  --color-amber:        #d4780a;
  --color-accent:       #dc5a14;
  --color-accent-rgb:   220, 90, 20;
  --color-accent-2:     #2e9e50;
  --color-accent-2-rgb: 46, 158, 80;
  --color-accent-warm:  #dc5a14;
  --color-text:         #2a1406;
  --color-text-muted:   #7a4020;
  --color-text-faint:   #f0ccaa;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(220,90,20,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(46,158,80,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #dc5a14 0%, #2e9e50 100%);
  --gradient-card:      linear-gradient(160deg, #faf0e4 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(220, 90, 20, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 13 — Energia & Sustentabilidade ── */
:root {
  --color-bg:           #f4f9f6;
  --color-surface:      #ffffff;
  --color-surface-2:    #e4f2ea;
  --color-border:       #c8e4d4;
  --color-border-hover: rgba(0, 130, 100, 0.2);
  --color-muted:        #70a888;
  --color-amber:        #c4820a;
  --color-accent:       #008264;
  --color-accent-rgb:   0, 130, 100;
  --color-accent-2:     #f5c400;
  --color-accent-2-rgb: 245, 196, 0;
  --color-accent-warm:  #e07010;
  --color-text:         #082818;
  --color-text-muted:   #2a6045;
  --color-text-faint:   #a8d4bc;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,130,100,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(245,196,0,0.1) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #008264 0%, #f5c400 100%);
  --gradient-card:      linear-gradient(160deg, #e4f2ea 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(0, 130, 100, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 14 — RH & People Tech ── */
:root {
  --color-bg:           #f7f5fc;
  --color-surface:      #ffffff;
  --color-surface-2:    #eee8fa;
  --color-border:       #ddd0f4;
  --color-border-hover: rgba(110, 60, 210, 0.2);
  --color-muted:        #a080cc;
  --color-amber:        #c47800;
  --color-accent:       #6e3cd2;
  --color-accent-rgb:   110, 60, 210;
  --color-accent-2:     #2abfbf;
  --color-accent-2-rgb: 42, 191, 191;
  --color-accent-warm:  #e8504a;
  --color-text:         #1a0e38;
  --color-text-muted:   #4e3878;
  --color-text-faint:   #c8b8ec;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(110,60,210,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(42,191,191,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #6e3cd2 0%, #2abfbf 100%);
  --gradient-card:      linear-gradient(160deg, #eee8fa 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(110, 60, 210, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 15 — Segurança & Cybersec ── */
:root {
  --color-bg:           #f3f5f4;
  --color-surface:      #ffffff;
  --color-surface-2:    #e8edea;
  --color-border:       #ccd8d0;
  --color-border-hover: rgba(0, 160, 100, 0.2);
  --color-muted:        #72988a;
  --color-amber:        #b88000;
  --color-accent:       #00a064;
  --color-accent-rgb:   0, 160, 100;
  --color-accent-2:     #1a2e50;
  --color-accent-2-rgb: 26, 46, 80;
  --color-accent-warm:  #e84a2a;
  --color-text:         #0a1810;
  --color-text-muted:   #304838;
  --color-text-faint:   #a8c4b8;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,160,100,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(26,46,80,0.08) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00a064 0%, #1a2e50 100%);
  --gradient-card:      linear-gradient(160deg, #e8edea 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(0, 160, 100, 0.14);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

/* ── Tema 16 — Turismo & Hospitalidade ── */
:root {
  --color-bg:           #f4f8fc;
  --color-surface:      #ffffff;
  --color-surface-2:    #e4f0f8;
  --color-border:       #c8dff0;
  --color-border-hover: rgba(0, 120, 200, 0.2);
  --color-muted:        #6aa0c8;
  --color-amber:        #d4820a;
  --color-accent:       #0078c8;
  --color-accent-rgb:   0, 120, 200;
  --color-accent-2:     #f0a020;
  --color-accent-2-rgb: 240, 160, 32;
  --color-accent-warm:  #e05828;
  --color-text:         #061828;
  --color-text-muted:   #285070;
  --color-text-faint:   #a8ccec;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,120,200,0.1) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,160,32,0.1) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #0078c8 0%, #f0a020 100%);
  --gradient-card:      linear-gradient(160deg, #e4f0f8 0%, #ffffff 100%);
  --shadow-glow:        0 0 40px rgba(0, 120, 200, 0.15);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.1);
}

```

```
/* ── Tema 1 Dark — Saúde & Bem-estar ── */
:root {
  --color-bg:           #080f0d;
  --color-surface:      #0e1a17;
  --color-surface-2:    #122018;
  --color-border:       #1a3028;
  --color-border-hover: rgba(13, 158, 114, 0.22);
  --color-muted:        #3a6a58;
  --color-amber:        #e09a00;
  --color-accent:       #00d494;
  --color-accent-rgb:   0, 212, 148;
  --color-accent-2:     #3aaae8;
  --color-accent-2-rgb: 58, 170, 232;
  --color-accent-warm:  #ff6e3a;
  --color-text:         #d4f0e8;
  --color-text-muted:   #5a9a84;
  --color-text-faint:   #1e4038;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,148,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(58,170,232,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00d494 0%, #3aaae8 100%);
  --gradient-card:      linear-gradient(160deg, #122018 0%, #0e1a17 100%);
  --shadow-glow:        0 0 40px rgba(0, 212, 148, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 2 Dark — Finanças & Fintech ── */
:root {
  --color-bg:           #07081a;
  --color-surface:      #0e1028;
  --color-surface-2:    #121432;
  --color-border:       #1e2250;
  --color-border-hover: rgba(90, 120, 255, 0.22);
  --color-muted:        #3a4488;
  --color-amber:        #e09a00;
  --color-accent:       #5a78ff;
  --color-accent-rgb:   90, 120, 255;
  --color-accent-2:     #a855f7;
  --color-accent-2-rgb: 168, 85, 247;
  --color-accent-warm:  #ff5a3a;
  --color-text:         #d0d8ff;
  --color-text-muted:   #5060b0;
  --color-text-faint:   #1a2060;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(90,120,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(168,85,247,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #5a78ff 0%, #a855f7 100%);
  --gradient-card:      linear-gradient(160deg, #121432 0%, #0e1028 100%);
  --shadow-glow:        0 0 40px rgba(90, 120, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 3 Dark — E-commerce & Varejo ── */
:root {
  --color-bg:           #130500;
  --color-surface:      #1e0a02;
  --color-surface-2:    #260e04;
  --color-border:       #3a1808;
  --color-border-hover: rgba(255, 80, 30, 0.22);
  --color-muted:        #7a3018;
  --color-amber:        #f0a820;
  --color-accent:       #ff5a28;
  --color-accent-rgb:   255, 90, 40;
  --color-accent-2:     #ffb830;
  --color-accent-2-rgb: 255, 184, 48;
  --color-accent-warm:  #ff5a28;
  --color-text:         #ffe8d8;
  --color-text-muted:   #a05030;
  --color-text-faint:   #3a1808;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,90,40,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,184,48,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #ff5a28 0%, #ffb830 100%);
  --gradient-card:      linear-gradient(160deg, #260e04 0%, #1e0a02 100%);
  --shadow-glow:        0 0 40px rgba(255, 90, 40, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 4 Dark — Tech & SaaS Neutro ── */
:root {
  --color-bg:           #080c12;
  --color-surface:      #0f141e;
  --color-surface-2:    #141b28;
  --color-border:       #1e2a40;
  --color-border-hover: rgba(30, 180, 255, 0.2);
  --color-muted:        #2a4a6a;
  --color-amber:        #e09800;
  --color-accent:       #1eb8ff;
  --color-accent-rgb:   30, 184, 255;
  --color-accent-2:     #818cf8;
  --color-accent-2-rgb: 129, 140, 248;
  --color-accent-warm:  #fb6080;
  --color-text:         #d0ddf0;
  --color-text-muted:   #4060a0;
  --color-text-faint:   #162040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,184,255,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(129,140,248,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #1eb8ff 0%, #818cf8 100%);
  --gradient-card:      linear-gradient(160deg, #141b28 0%, #0f141e 100%);
  --shadow-glow:        0 0 40px rgba(30, 184, 255, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 5 Dark — Agro & Rural ── */
:root {
  --color-bg:           #080e04;
  --color-surface:      #0e1808;
  --color-surface-2:    #121e0a;
  --color-border:       #1e3010;
  --color-border-hover: rgba(80, 180, 30, 0.22);
  --color-muted:        #305818;
  --color-amber:        #e09a00;
  --color-accent:       #58cc22;
  --color-accent-rgb:   88, 204, 34;
  --color-accent-2:     #f0a820;
  --color-accent-2-rgb: 240, 168, 32;
  --color-accent-warm:  #e06820;
  --color-text:         #d8f0c0;
  --color-text-muted:   #4a8028;
  --color-text-faint:   #183008;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(88,204,34,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,168,32,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #58cc22 0%, #f0a820 100%);
  --gradient-card:      linear-gradient(160deg, #121e0a 0%, #0e1808 100%);
  --shadow-glow:        0 0 40px rgba(88, 204, 34, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 6 Dark — Luxury & Premium ── */
:root {
  --color-bg:           #0e0a06;
  --color-surface:      #18120a;
  --color-surface-2:    #201808;
  --color-border:       #342410;
  --color-border-hover: rgba(220, 170, 60, 0.22);
  --color-muted:        #6a4c1a;
  --color-amber:        #e0aa40;
  --color-accent:       #e8b84a;
  --color-accent-rgb:   232, 184, 74;
  --color-accent-2:     #c08840;
  --color-accent-2-rgb: 192, 136, 64;
  --color-accent-warm:  #e8b84a;
  --color-text:         #f4e8d0;
  --color-text-muted:   #907040;
  --color-text-faint:   #302010;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,184,74,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(192,136,64,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #e8b84a 0%, #c08840 100%);
  --gradient-card:      linear-gradient(160deg, #201808 0%, #18120a 100%);
  --shadow-glow:        0 0 40px rgba(232, 184, 74, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 7 Dark — Educação & EdTech ── */
:root {
  --color-bg:           #07081e;
  --color-surface:      #0e1030;
  --color-surface-2:    #12143c;
  --color-border:       #1e2258;
  --color-border-hover: rgba(100, 120, 255, 0.22);
  --color-muted:        #3848a8;
  --color-amber:        #e09000;
  --color-accent:       #6478ff;
  --color-accent-rgb:   100, 120, 255;
  --color-accent-2:     #ff6090;
  --color-accent-2-rgb: 255, 96, 144;
  --color-accent-warm:  #ff6090;
  --color-text:         #d0d8ff;
  --color-text-muted:   #5060c0;
  --color-text-faint:   #181e60;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,120,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,96,144,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #6478ff 0%, #ff6090 100%);
  --gradient-card:      linear-gradient(160deg, #12143c 0%, #0e1030 100%);
  --shadow-glow:        0 0 40px rgba(100, 120, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 8 Dark — Jurídico & Compliance ── */
:root {
  --color-bg:           #0a0a08;
  --color-surface:      #121210;
  --color-surface-2:    #1a1a16;
  --color-border:       #2a2a22;
  --color-border-hover: rgba(200, 160, 30, 0.2);
  --color-muted:        #504e3a;
  --color-amber:        #d4a020;
  --color-accent:       #d4a020;
  --color-accent-rgb:   212, 160, 32;
  --color-accent-2:     #8888c8;
  --color-accent-2-rgb: 136, 136, 200;
  --color-accent-warm:  #e06040;
  --color-text:         #e8e6d8;
  --color-text-muted:   #807860;
  --color-text-faint:   #282618;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,160,32,0.16) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(136,136,200,0.1) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #d4a020 0%, #8888c8 100%);
  --gradient-card:      linear-gradient(160deg, #1a1a16 0%, #121210 100%);
  --shadow-glow:        0 0 40px rgba(212, 160, 32, 0.22);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 9 Dark — Imobiliário & Construção ── */
:root {
  --color-bg:           #0e0a06;
  --color-surface:      #18120c;
  --color-surface-2:    #201810;
  --color-border:       #342818;
  --color-border-hover: rgba(200, 130, 60, 0.22);
  --color-muted:        #6a4a28;
  --color-amber:        #e09020;
  --color-accent:       #c87830;
  --color-accent-rgb:   200, 120, 48;
  --color-accent-2:     #60aa78;
  --color-accent-2-rgb: 96, 170, 120;
  --color-accent-warm:  #e06030;
  --color-text:         #f0e0c8;
  --color-text-muted:   #806040;
  --color-text-faint:   #2e2010;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,120,48,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(96,170,120,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #c87830 0%, #60aa78 100%);
  --gradient-card:      linear-gradient(160deg, #201810 0%, #18120c 100%);
  --shadow-glow:        0 0 40px rgba(200, 120, 48, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 10 Dark — Beleza & Estética ── */
:root {
  --color-bg:           #100610;
  --color-surface:      #1a0c1c;
  --color-surface-2:    #221026;
  --color-border:       #381838;
  --color-border-hover: rgba(240, 80, 160, 0.22);
  --color-muted:        #702860;
  --color-amber:        #e09000;
  --color-accent:       #f050a0;
  --color-accent-rgb:   240, 80, 160;
  --color-accent-2:     #c070e8;
  --color-accent-2-rgb: 192, 112, 232;
  --color-accent-warm:  #ff6040;
  --color-text:         #fce0f0;
  --color-text-muted:   #a04880;
  --color-text-faint:   #301030;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240,80,160,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(192,112,232,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #f050a0 0%, #c070e8 100%);
  --gradient-card:      linear-gradient(160deg, #221026 0%, #1a0c1c 100%);
  --shadow-glow:        0 0 40px rgba(240, 80, 160, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 11 Dark — Logística & Transporte ── */
:root {
  --color-bg:           #040c18;
  --color-surface:      #081428;
  --color-surface-2:    #0c1c34;
  --color-border:       #142a50;
  --color-border-hover: rgba(30, 140, 240, 0.22);
  --color-muted:        #204878;
  --color-amber:        #e09a00;
  --color-accent:       #1e8cf0;
  --color-accent-rgb:   30, 140, 240;
  --color-accent-2:     #ff9820;
  --color-accent-2-rgb: 255, 152, 32;
  --color-accent-warm:  #ff9820;
  --color-text:         #c8e0f8;
  --color-text-muted:   #306898;
  --color-text-faint:   #0a2040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,140,240,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,152,32,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #1e8cf0 0%, #ff9820 100%);
  --gradient-card:      linear-gradient(160deg, #0c1c34 0%, #081428 100%);
  --shadow-glow:        0 0 40px rgba(30, 140, 240, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 12 Dark — Alimentação & Foodtech ── */
:root {
  --color-bg:           #100600;
  --color-surface:      #1c0e02;
  --color-surface-2:    #261404;
  --color-border:       #3c2008;
  --color-border-hover: rgba(255, 100, 30, 0.22);
  --color-muted:        #784020;
  --color-amber:        #f0a010;
  --color-accent:       #ff6820;
  --color-accent-rgb:   255, 104, 32;
  --color-accent-2:     #38c860;
  --color-accent-2-rgb: 56, 200, 96;
  --color-accent-warm:  #ff6820;
  --color-text:         #ffe8d0;
  --color-text-muted:   #a05830;
  --color-text-faint:   #3a1808;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,104,32,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(56,200,96,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #ff6820 0%, #38c860 100%);
  --gradient-card:      linear-gradient(160deg, #261404 0%, #1c0e02 100%);
  --shadow-glow:        0 0 40px rgba(255, 104, 32, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 13 Dark — Energia & Sustentabilidade ── */
:root {
  --color-bg:           #040e08;
  --color-surface:      #081810;
  --color-surface-2:    #0c2018;
  --color-border:       #143020;
  --color-border-hover: rgba(0, 200, 140, 0.22);
  --color-muted:        #1a5838;
  --color-amber:        #e8c000;
  --color-accent:       #00d49a;
  --color-accent-rgb:   0, 212, 154;
  --color-accent-2:     #f0d000;
  --color-accent-2-rgb: 240, 208, 0;
  --color-accent-warm:  #f08020;
  --color-text:         #c8f0e0;
  --color-text-muted:   #208858;
  --color-text-faint:   #0a2c18;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,154,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,208,0,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00d49a 0%, #f0d000 100%);
  --gradient-card:      linear-gradient(160deg, #0c2018 0%, #081810 100%);
  --shadow-glow:        0 0 40px rgba(0, 212, 154, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 14 Dark — RH & People Tech ── */
:root {
  --color-bg:           #0a0618;
  --color-surface:      #120e28;
  --color-surface-2:    #181232;
  --color-border:       #281e50;
  --color-border-hover: rgba(150, 90, 255, 0.22);
  --color-muted:        #4a2898;
  --color-amber:        #e09000;
  --color-accent:       #9660ff;
  --color-accent-rgb:   150, 96, 255;
  --color-accent-2:     #30d8d8;
  --color-accent-2-rgb: 48, 216, 216;
  --color-accent-warm:  #ff6060;
  --color-text:         #e0d0ff;
  --color-text-muted:   #6848c0;
  --color-text-faint:   #201040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(150,96,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(48,216,216,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #9660ff 0%, #30d8d8 100%);
  --gradient-card:      linear-gradient(160deg, #181232 0%, #120e28 100%);
  --shadow-glow:        0 0 40px rgba(150, 96, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 15 Dark — Segurança & Cybersec ── */
:root {
  --color-bg:           #040a06;
  --color-surface:      #081410;
  --color-surface-2:    #0c1c16;
  --color-border:       #122c20;
  --color-border-hover: rgba(0, 220, 130, 0.22);
  --color-muted:        #185838;
  --color-amber:        #d4a000;
  --color-accent:       #00dc82;
  --color-accent-rgb:   0, 220, 130;
  --color-accent-2:     #3a90e8;
  --color-accent-2-rgb: 58, 144, 232;
  --color-accent-warm:  #ff5a3a;
  --color-text:         #c0e8d0;
  --color-text-muted:   #208050;
  --color-text-faint:   #0a2818;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,220,130,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(58,144,232,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00dc82 0%, #3a90e8 100%);
  --gradient-card:      linear-gradient(160deg, #0c1c16 0%, #081410 100%);
  --shadow-glow:        0 0 40px rgba(0, 220, 130, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 16 Dark — Turismo & Hospitalidade ── */
:root {
  --color-bg:           #030c18;
  --color-surface:      #071628;
  --color-surface-2:    #0a1e36;
  --color-border:       #103054;
  --color-border-hover: rgba(20, 160, 255, 0.22);
  --color-muted:        #1a5080;
  --color-amber:        #f0a820;
  --color-accent:       #14a0ff;
  --color-accent-rgb:   20, 160, 255;
  --color-accent-2:     #ffb830;
  --color-accent-2-rgb: 255, 184, 48;
  --color-accent-warm:  #ff6838;
  --color-text:         #c0deff;
  --color-text-muted:   #2870b0;
  --color-text-faint:   #081c38;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,160,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,184,48,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #14a0ff 0%, #ffb830 100%);
  --gradient-card:      linear-gradient(160deg, #0a1e36 0%, #071628 100%);
  --shadow-glow:        0 0 40px rgba(20, 160, 255, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

```


```
/* ── Tema 1 Dark — Saúde & Bem-estar ── */
:root {
  --color-bg:           #080f0d;
  --color-surface:      #0e1a17;
  --color-surface-2:    #122018;
  --color-border:       #1a3028;
  --color-border-hover: rgba(13, 158, 114, 0.22);
  --color-muted:        #3a6a58;
  --color-amber:        #e09a00;
  --color-accent:       #00d494;
  --color-accent-rgb:   0, 212, 148;
  --color-accent-2:     #3aaae8;
  --color-accent-2-rgb: 58, 170, 232;
  --color-accent-warm:  #ff6e3a;
  --color-text:         #d4f0e8;
  --color-text-muted:   #5a9a84;
  --color-text-faint:   #1e4038;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,148,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(58,170,232,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00d494 0%, #3aaae8 100%);
  --gradient-card:      linear-gradient(160deg, #122018 0%, #0e1a17 100%);
  --shadow-glow:        0 0 40px rgba(0, 212, 148, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 2 Dark — Finanças & Fintech ── */
:root {
  --color-bg:           #07081a;
  --color-surface:      #0e1028;
  --color-surface-2:    #121432;
  --color-border:       #1e2250;
  --color-border-hover: rgba(90, 120, 255, 0.22);
  --color-muted:        #3a4488;
  --color-amber:        #e09a00;
  --color-accent:       #5a78ff;
  --color-accent-rgb:   90, 120, 255;
  --color-accent-2:     #a855f7;
  --color-accent-2-rgb: 168, 85, 247;
  --color-accent-warm:  #ff5a3a;
  --color-text:         #d0d8ff;
  --color-text-muted:   #5060b0;
  --color-text-faint:   #1a2060;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(90,120,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(168,85,247,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #5a78ff 0%, #a855f7 100%);
  --gradient-card:      linear-gradient(160deg, #121432 0%, #0e1028 100%);
  --shadow-glow:        0 0 40px rgba(90, 120, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 3 Dark — E-commerce & Varejo ── */
:root {
  --color-bg:           #130500;
  --color-surface:      #1e0a02;
  --color-surface-2:    #260e04;
  --color-border:       #3a1808;
  --color-border-hover: rgba(255, 80, 30, 0.22);
  --color-muted:        #7a3018;
  --color-amber:        #f0a820;
  --color-accent:       #ff5a28;
  --color-accent-rgb:   255, 90, 40;
  --color-accent-2:     #ffb830;
  --color-accent-2-rgb: 255, 184, 48;
  --color-accent-warm:  #ff5a28;
  --color-text:         #ffe8d8;
  --color-text-muted:   #a05030;
  --color-text-faint:   #3a1808;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,90,40,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,184,48,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #ff5a28 0%, #ffb830 100%);
  --gradient-card:      linear-gradient(160deg, #260e04 0%, #1e0a02 100%);
  --shadow-glow:        0 0 40px rgba(255, 90, 40, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 4 Dark — Tech & SaaS Neutro ── */
:root {
  --color-bg:           #080c12;
  --color-surface:      #0f141e;
  --color-surface-2:    #141b28;
  --color-border:       #1e2a40;
  --color-border-hover: rgba(30, 180, 255, 0.2);
  --color-muted:        #2a4a6a;
  --color-amber:        #e09800;
  --color-accent:       #1eb8ff;
  --color-accent-rgb:   30, 184, 255;
  --color-accent-2:     #818cf8;
  --color-accent-2-rgb: 129, 140, 248;
  --color-accent-warm:  #fb6080;
  --color-text:         #d0ddf0;
  --color-text-muted:   #4060a0;
  --color-text-faint:   #162040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,184,255,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(129,140,248,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #1eb8ff 0%, #818cf8 100%);
  --gradient-card:      linear-gradient(160deg, #141b28 0%, #0f141e 100%);
  --shadow-glow:        0 0 40px rgba(30, 184, 255, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 5 Dark — Agro & Rural ── */
:root {
  --color-bg:           #080e04;
  --color-surface:      #0e1808;
  --color-surface-2:    #121e0a;
  --color-border:       #1e3010;
  --color-border-hover: rgba(80, 180, 30, 0.22);
  --color-muted:        #305818;
  --color-amber:        #e09a00;
  --color-accent:       #58cc22;
  --color-accent-rgb:   88, 204, 34;
  --color-accent-2:     #f0a820;
  --color-accent-2-rgb: 240, 168, 32;
  --color-accent-warm:  #e06820;
  --color-text:         #d8f0c0;
  --color-text-muted:   #4a8028;
  --color-text-faint:   #183008;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(88,204,34,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,168,32,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #58cc22 0%, #f0a820 100%);
  --gradient-card:      linear-gradient(160deg, #121e0a 0%, #0e1808 100%);
  --shadow-glow:        0 0 40px rgba(88, 204, 34, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 6 Dark — Luxury & Premium ── */
:root {
  --color-bg:           #0e0a06;
  --color-surface:      #18120a;
  --color-surface-2:    #201808;
  --color-border:       #342410;
  --color-border-hover: rgba(220, 170, 60, 0.22);
  --color-muted:        #6a4c1a;
  --color-amber:        #e0aa40;
  --color-accent:       #e8b84a;
  --color-accent-rgb:   232, 184, 74;
  --color-accent-2:     #c08840;
  --color-accent-2-rgb: 192, 136, 64;
  --color-accent-warm:  #e8b84a;
  --color-text:         #f4e8d0;
  --color-text-muted:   #907040;
  --color-text-faint:   #302010;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,184,74,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(192,136,64,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #e8b84a 0%, #c08840 100%);
  --gradient-card:      linear-gradient(160deg, #201808 0%, #18120a 100%);
  --shadow-glow:        0 0 40px rgba(232, 184, 74, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 7 Dark — Educação & EdTech ── */
:root {
  --color-bg:           #07081e;
  --color-surface:      #0e1030;
  --color-surface-2:    #12143c;
  --color-border:       #1e2258;
  --color-border-hover: rgba(100, 120, 255, 0.22);
  --color-muted:        #3848a8;
  --color-amber:        #e09000;
  --color-accent:       #6478ff;
  --color-accent-rgb:   100, 120, 255;
  --color-accent-2:     #ff6090;
  --color-accent-2-rgb: 255, 96, 144;
  --color-accent-warm:  #ff6090;
  --color-text:         #d0d8ff;
  --color-text-muted:   #5060c0;
  --color-text-faint:   #181e60;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,120,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,96,144,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #6478ff 0%, #ff6090 100%);
  --gradient-card:      linear-gradient(160deg, #12143c 0%, #0e1030 100%);
  --shadow-glow:        0 0 40px rgba(100, 120, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 8 Dark — Jurídico & Compliance ── */
:root {
  --color-bg:           #0a0a08;
  --color-surface:      #121210;
  --color-surface-2:    #1a1a16;
  --color-border:       #2a2a22;
  --color-border-hover: rgba(200, 160, 30, 0.2);
  --color-muted:        #504e3a;
  --color-amber:        #d4a020;
  --color-accent:       #d4a020;
  --color-accent-rgb:   212, 160, 32;
  --color-accent-2:     #8888c8;
  --color-accent-2-rgb: 136, 136, 200;
  --color-accent-warm:  #e06040;
  --color-text:         #e8e6d8;
  --color-text-muted:   #807860;
  --color-text-faint:   #282618;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,160,32,0.16) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(136,136,200,0.1) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #d4a020 0%, #8888c8 100%);
  --gradient-card:      linear-gradient(160deg, #1a1a16 0%, #121210 100%);
  --shadow-glow:        0 0 40px rgba(212, 160, 32, 0.22);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 9 Dark — Imobiliário & Construção ── */
:root {
  --color-bg:           #0e0a06;
  --color-surface:      #18120c;
  --color-surface-2:    #201810;
  --color-border:       #342818;
  --color-border-hover: rgba(200, 130, 60, 0.22);
  --color-muted:        #6a4a28;
  --color-amber:        #e09020;
  --color-accent:       #c87830;
  --color-accent-rgb:   200, 120, 48;
  --color-accent-2:     #60aa78;
  --color-accent-2-rgb: 96, 170, 120;
  --color-accent-warm:  #e06030;
  --color-text:         #f0e0c8;
  --color-text-muted:   #806040;
  --color-text-faint:   #2e2010;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,120,48,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(96,170,120,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #c87830 0%, #60aa78 100%);
  --gradient-card:      linear-gradient(160deg, #201810 0%, #18120c 100%);
  --shadow-glow:        0 0 40px rgba(200, 120, 48, 0.25);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 10 Dark — Beleza & Estética ── */
:root {
  --color-bg:           #100610;
  --color-surface:      #1a0c1c;
  --color-surface-2:    #221026;
  --color-border:       #381838;
  --color-border-hover: rgba(240, 80, 160, 0.22);
  --color-muted:        #702860;
  --color-amber:        #e09000;
  --color-accent:       #f050a0;
  --color-accent-rgb:   240, 80, 160;
  --color-accent-2:     #c070e8;
  --color-accent-2-rgb: 192, 112, 232;
  --color-accent-warm:  #ff6040;
  --color-text:         #fce0f0;
  --color-text-muted:   #a04880;
  --color-text-faint:   #301030;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240,80,160,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(192,112,232,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #f050a0 0%, #c070e8 100%);
  --gradient-card:      linear-gradient(160deg, #221026 0%, #1a0c1c 100%);
  --shadow-glow:        0 0 40px rgba(240, 80, 160, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 11 Dark — Logística & Transporte ── */
:root {
  --color-bg:           #040c18;
  --color-surface:      #081428;
  --color-surface-2:    #0c1c34;
  --color-border:       #142a50;
  --color-border-hover: rgba(30, 140, 240, 0.22);
  --color-muted:        #204878;
  --color-amber:        #e09a00;
  --color-accent:       #1e8cf0;
  --color-accent-rgb:   30, 140, 240;
  --color-accent-2:     #ff9820;
  --color-accent-2-rgb: 255, 152, 32;
  --color-accent-warm:  #ff9820;
  --color-text:         #c8e0f8;
  --color-text-muted:   #306898;
  --color-text-faint:   #0a2040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,140,240,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,152,32,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #1e8cf0 0%, #ff9820 100%);
  --gradient-card:      linear-gradient(160deg, #0c1c34 0%, #081428 100%);
  --shadow-glow:        0 0 40px rgba(30, 140, 240, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 12 Dark — Alimentação & Foodtech ── */
:root {
  --color-bg:           #100600;
  --color-surface:      #1c0e02;
  --color-surface-2:    #261404;
  --color-border:       #3c2008;
  --color-border-hover: rgba(255, 100, 30, 0.22);
  --color-muted:        #784020;
  --color-amber:        #f0a010;
  --color-accent:       #ff6820;
  --color-accent-rgb:   255, 104, 32;
  --color-accent-2:     #38c860;
  --color-accent-2-rgb: 56, 200, 96;
  --color-accent-warm:  #ff6820;
  --color-text:         #ffe8d0;
  --color-text-muted:   #a05830;
  --color-text-faint:   #3a1808;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,104,32,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(56,200,96,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #ff6820 0%, #38c860 100%);
  --gradient-card:      linear-gradient(160deg, #261404 0%, #1c0e02 100%);
  --shadow-glow:        0 0 40px rgba(255, 104, 32, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 13 Dark — Energia & Sustentabilidade ── */
:root {
  --color-bg:           #040e08;
  --color-surface:      #081810;
  --color-surface-2:    #0c2018;
  --color-border:       #143020;
  --color-border-hover: rgba(0, 200, 140, 0.22);
  --color-muted:        #1a5838;
  --color-amber:        #e8c000;
  --color-accent:       #00d49a;
  --color-accent-rgb:   0, 212, 154;
  --color-accent-2:     #f0d000;
  --color-accent-2-rgb: 240, 208, 0;
  --color-accent-warm:  #f08020;
  --color-text:         #c8f0e0;
  --color-text-muted:   #208858;
  --color-text-faint:   #0a2c18;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,154,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(240,208,0,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00d49a 0%, #f0d000 100%);
  --gradient-card:      linear-gradient(160deg, #0c2018 0%, #081810 100%);
  --shadow-glow:        0 0 40px rgba(0, 212, 154, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 14 Dark — RH & People Tech ── */
:root {
  --color-bg:           #0a0618;
  --color-surface:      #120e28;
  --color-surface-2:    #181232;
  --color-border:       #281e50;
  --color-border-hover: rgba(150, 90, 255, 0.22);
  --color-muted:        #4a2898;
  --color-amber:        #e09000;
  --color-accent:       #9660ff;
  --color-accent-rgb:   150, 96, 255;
  --color-accent-2:     #30d8d8;
  --color-accent-2-rgb: 48, 216, 216;
  --color-accent-warm:  #ff6060;
  --color-text:         #e0d0ff;
  --color-text-muted:   #6848c0;
  --color-text-faint:   #201040;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(150,96,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(48,216,216,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #9660ff 0%, #30d8d8 100%);
  --gradient-card:      linear-gradient(160deg, #181232 0%, #120e28 100%);
  --shadow-glow:        0 0 40px rgba(150, 96, 255, 0.28);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 15 Dark — Segurança & Cybersec ── */
:root {
  --color-bg:           #040a06;
  --color-surface:      #081410;
  --color-surface-2:    #0c1c16;
  --color-border:       #122c20;
  --color-border-hover: rgba(0, 220, 130, 0.22);
  --color-muted:        #185838;
  --color-amber:        #d4a000;
  --color-accent:       #00dc82;
  --color-accent-rgb:   0, 220, 130;
  --color-accent-2:     #3a90e8;
  --color-accent-2-rgb: 58, 144, 232;
  --color-accent-warm:  #ff5a3a;
  --color-text:         #c0e8d0;
  --color-text-muted:   #208050;
  --color-text-faint:   #0a2818;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,220,130,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(58,144,232,0.12) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #00dc82 0%, #3a90e8 100%);
  --gradient-card:      linear-gradient(160deg, #0c1c16 0%, #081410 100%);
  --shadow-glow:        0 0 40px rgba(0, 220, 130, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}

/* ── Tema 16 Dark — Turismo & Hospitalidade ── */
:root {
  --color-bg:           #030c18;
  --color-surface:      #071628;
  --color-surface-2:    #0a1e36;
  --color-border:       #103054;
  --color-border-hover: rgba(20, 160, 255, 0.22);
  --color-muted:        #1a5080;
  --color-amber:        #f0a820;
  --color-accent:       #14a0ff;
  --color-accent-rgb:   20, 160, 255;
  --color-accent-2:     #ffb830;
  --color-accent-2-rgb: 255, 184, 48;
  --color-accent-warm:  #ff6838;
  --color-text:         #c0deff;
  --color-text-muted:   #2870b0;
  --color-text-faint:   #081c38;
  --gradient-hero:      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(20,160,255,0.2) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 85% 30%, rgba(255,184,48,0.14) 0%, transparent 60%);
  --gradient-accent:    linear-gradient(135deg, #14a0ff 0%, #ffb830 100%);
  --gradient-card:      linear-gradient(160deg, #0a1e36 0%, #071628 100%);
  --shadow-glow:        0 0 40px rgba(20, 160, 255, 0.26);
  --shadow-card:        0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7);
  --shadow-float:       0 20px 60px rgba(0,0,0,0.6);
}
```

