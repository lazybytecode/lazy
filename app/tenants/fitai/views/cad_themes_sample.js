import { getTenant, fetchJSON, getAPI } from "../../../router.js";
import { decrypt_response } from "../../../modules/crypto.js"

async function loginFitAI()
{
    const url = 'themes'
    const tenant = getTenant()

    const cad = await fetchJSON( url, tenant ) 

    let dados = await decrypt_response(
          cad.payload,
          cad.clientKeys
        )

    console.log( "Dados", dados )

}

async function loginFitAI2()
{
    const url = getAPI() + '/api/v0/themes/tenant_theme'
    const tenant = 'petai'//getTenant()

    const dados = {
        "tenant" : tenant,
        "design_pattern" : {
            themes : {
                "theme": {
                    "dark": {
                        "brand-name" : "Pet<i>AI</i>",
                        "brand-icone" : "P",
                        "brand-slogan": "Texto Slogan",

                        "color-bg":           "#0e0a06",
                        "color-surface":      "#18120a",
                        "color-surface-2":    "#201808",
                        "color-border":       "#342410",
                        "color-border-hover": "rgba(220, 170, 60, 0.22)",
                        "color-muted":        "#6a4c1a",
                        "color-amber":        "#e0aa40",
                        "color-accent":       "#e8b84a",
                        "color-accent-rgb":   "232, 184, 74",
                        "color-accent-2":     "#c08840",
                        "color-accent-2-rgb": "192, 136, 64",
                        "color-accent-warm":  "#e8b84a",
                        "color-text":         "#f4e8d0",
                        "color-text-muted":   "#907040",
                        "color-text-faint":   "#302010",
                        "gradient-hero":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,184,74,0.18) 0%, transparent 70%),radial-gradient(ellipse 50% 40% at 85% 30%, rgba(192,136,64,0.12) 0%, transparent 60%)",
                        "gradient-accent":    "linear-gradient(135deg, #e8b84a 0%, #c08840 100%)",
                        "gradient-card":      "linear-gradient(160deg, #201808 0%, #18120a 100%)",
                        "shadow-glow":        "0 0 40px rgba(232, 184, 74, 0.28)",
                        "shadow-card":        "0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.7)",
                        "shadow-float":       "0 20px 60px rgba(0,0,0,0.6)",

                        "font-display" :       "'Syne', sans-serif",
                        "font-body" :          "'DM Sans', sans-serif",
                        "text-xs" :    "0.75rem",
                        "text-sm" :    "0.875rem",
                        "text-base" :  "1rem",
                        "text-lg" :    "1.125rem",
                        "text-xl" :    "1.25rem",
                        "text-2xl" :   "1.5rem",
                        "text-3xl" :   "1.875rem",
                        "text-4xl" :   "2.25rem",
                        "text-5xl" :   "3rem",
                        "text-6xl" :   "3.75rem",
                        "text-7xl" :   "4.5rem",

                        "space-1"  :   "0.25rem",
                        "space-2"  :   "0.5rem",
                        "space-3"  :   "0.75rem",
                        "space-4"  :   "1rem",
                        "space-6"  :   "1.5rem",
                        "space-8"  :   "2rem",
                        "space-12" :  "3rem",
                        "space-16" :  "4rem",
                        "space-24" :  "6rem",
                        "space-32" :  "8rem",

                        "radius-sm" :  "6px",
                        "radius-md" :  "12px",
                        "radius-lg" :  "20px",
                        "radius-xl" :  "32px",
                        "radius-full" : "9999px",

                        "ease-spring" : "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "ease-out" :    "cubic-bezier(0.22, 1, 0.36, 1)",
                        "dur-fast" :    "200ms",
                        "dur-med" :     "400ms",
                        "dur-slow" :    "700ms",

                        "max-width"  :  "1200px",
                        "nav-height" : "72px",

                        "cta-primary" :   "Começar grátis",
                        "cta-secondary" : "Ver demo",
                        "hero-tag" :      "Plataforma #1 em produtividade",
                        "hero-title" :    "Escale seu negócio sem limites",
                        "hero-sub" :      "A plataforma inteligente que automatiza, analisa e acelera cada etapa da sua operação."
                    },
                    "light": {
                        "brand-name" : "Pet<i>AI</i>",
                        "brand-icone" : "P",
                        "brand-slogan": "Texto Slogan",

                        "color-bg":           "#faf9f7",
                        "color-surface":      "#ffffff",
                        "color-surface-2":    "#f2ede6",
                        "color-border":       "#e8d8c0",
                        "color-border-hover": "rgba(201, 153, 60, 0.22)",
                        "color-muted":        "#b09470",
                        "color-amber":        "#c9993c",
                        "color-accent":       "#c9993c",
                        "color-accent-rgb":   "201, 153, 60",
                        "color-accent-2":     "#8c6030",
                        "color-accent-2-rgb": "140, 96, 48",
                        "color-accent-warm":  "#c9993c",
                        "color-text":         "#1a1410",
                        "color-text-muted":   "#6b4a2a",
                        "color-text-faint":   "#d4bc98",
                        "gradient-hero":      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,153,60,0.1) 0%, transparent 70%),radial-gradient(ellipse 50% 40% at 85% 30%, rgba(140,96,48,0.08) 0%, transparent 60%)",
                        "gradient-accent":    "linear-gradient(135deg, #c9993c 0%, #8c6030 100%)",
                        "gradient-card":      "linear-gradient(160deg, #f2ede6 0%, #ffffff 100%)",
                        "shadow-glow":        "0 0 40px rgba(201, 153, 60, 0.18)",
                        "shadow-card":        "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                        "shadow-float":       "0 20px 60px rgba(0,0,0,0.1)",      

                        "font-display" :       "'Sora', sans-serif",
                        "font-body" :          "'DM Sans', sans-serif",

                        "text-xs" :   "0.75rem",
                        "text-sm" :   "0.875rem",
                        "text-base" :  "1rem",
                        "text-lg" :   "1.125rem",
                        "text-xl" :   "1.25rem",
                        "text-2xl" :   "1.5rem",
                        "text-3xl" :   "1.875rem",
                        "text-4xl" :   "2.25rem",
                        "text-5xl" :   "3rem",
                        "text-6xl" :   "3.75rem",
                        "text-7xl" :   "4.5rem",

                        "space-1" :   "0.25rem",
                        "space-2" :   "0.5rem",
                        "space-3" :   "0.75rem",
                        "space-4" :   "1rem",
                        "space-6" :   "1.5rem",
                        "space-8" :   "2rem",
                        "space-12":  "3rem",
                        "space-16":  "4rem",
                        "space-24":  "6rem",
                        "space-32":  "8rem",

                        "radius-sm":  "6px",
                        "radius-md":  "12px",
                        "radius-lg":  "20px",
                        "radius-xl":  "32px",
                        "radius-full": "9999px",

                        "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "ease-out" :    "cubic-bezier(0.22, 1, 0.36, 1)",
                        "dur-fast":    "200ms",
                        "dur-med":     "400ms",
                        "dur-slow":    "700ms",

                        "max-width" :  "1200px",
                        "nav-height": "72px",

                        "cta-primary":   "Começar grátis",
                        "cta-secondary": "Ver demo",
                        "hero-tag":      "Plataforma #1 em produtividade",
                        "hero-title":    "Escale seu negócio sem limites",
                        "hero-sub":      "A plataforma inteligente que automatiza, analisa e acelera cada etapa da sua operação.",

                        "bg": "#f6f8fb",
                        "surface": "#ffffff",
                        "surface2": "#f1f4f9",

                        "border": "rgba(0, 0, 0, 0.08)",
                        "border-hover": "rgba(0, 229, 160, 0.35)",

                        "text": "#0f172a",
                        "muted": "#6b7280",

                        "accent": "#00b894",
                        "accent2": "#2563eb",

                        "warm": "#e8592f",
                        "amber": "#d68910",
                        "pink": "#d63384",

                        "font": "var(--font-body)",
                        "font-d": "var(--font-display)",

                        "radius": "16px"
                    }

                }
            }
        }
}

    const cad = await fetchJSON( url, tenant, dados) 

    console.log( "Dados", cad )

}


export async function render(el, props = {}, content, config, ctx = {}) {

    el.innerHTML = `<div><h1> Teste </h1></div>`

    await loginFitAI()


}




/*

Qual a melhor forma para armazenar os dados desse json no banco de dados mysql  usando as melhores práticas de modelagem de dados?

{
  "tenant" : tenant,
    "design_pattern" : {
    "theme": {
        "dark": {
        "brand-name" : "Defau<i>LT</i>",
        "brand-icone" : "P",
        "brand-slogan": "Texto Slogan",

        "color-bg" :    "#0a0c10",
        "color-surface" :  "#111318",
        "color-surface-2" :    "#13151f",
        "color-border" :       "#1e2130",
        "color-border-hover" : "rgba(230, 190, 190, 0.18)",
        "color-muted" :        "#5a607a",
        "color-amber" :     "#f39c12",
        "color-accent" :       "#00e5a0",
        "color-accent-rgb" :   "0, 229, 160",
        "color-accent-2" :     "#005eff",
        "color-accent-2-rgb" : "0, 94, 255",
        "color-accent-warm" :  "#ff6b35",
        "color-text" :         "#f0f2f8",
        "color-text-muted" :   "#7b8099",
        "color-text-faint" :   "#3a3f56",

        "gradient-hero" :      "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(var(--color-accent-rgb),0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(var(--color-accent-2-rgb),0.12) 0%, transparent 60%)",
        "gradient-accent" :    "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 100%)",
        "gradient-card" :      "linear-gradient(160deg, var(--color-surface-2) 0%, var(--color-surface) 100%)",

        "font-display" :       "'Syne', sans-serif",
        "font-body" :          "'DM Sans', sans-serif",
        "text-xs" :    "0.75rem",
        "text-sm" :    "0.875rem",
        "text-base" :  "1rem",
        "text-lg" :    "1.125rem",
        "text-xl" :    "1.25rem",
        "text-2xl" :   "1.5rem",
        "text-3xl" :   "1.875rem",
        "text-4xl" :   "2.25rem",
        "text-5xl" :   "3rem",
        "text-6xl" :   "3.75rem",
        "text-7xl" :   "4.5rem",

        "space-1"  :   "0.25rem",
        "space-2"  :   "0.5rem",
        "space-3"  :   "0.75rem",
        "space-4"  :   "1rem",
        "space-6"  :   "1.5rem",
        "space-8"  :   "2rem",
        "space-12" :  "3rem",
        "space-16" :  "4rem",
        "space-24" :  "6rem",
        "space-32" :  "8rem",

        "radius-sm" :  "6px",
        "radius-md" :  "12px",
        "radius-lg" :  "20px",
        "radius-xl" :  "32px",
        "radius-full" : "9999px",

        "shadow-glow" :  "0 0 40px rgba(var(--color-accent-rgb), 0.25)",
        "shadow-card" :  "0 4px 24px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)",
        "shadow-float": "0 20px 60px rgba(0,0,0,0.5)",

        "ease-spring" : "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out" :    "cubic-bezier(0.22, 1, 0.36, 1)",
        "dur-fast" :    "200ms",
        "dur-med" :     "400ms",
        "dur-slow" :    "700ms",

        "max-width"  :  "1200px",
        "nav-height" : "72px",

        "cta-primary" :   "Começar grátis",
        "cta-secondary" : "Ver demo",
        "hero-tag" :      "Plataforma #1 em produtividade",
        "hero-title" :    "Escale seu negócio sem limites",
        "hero-sub" :      "A plataforma inteligente que automatiza, analisa e acelera cada etapa da sua operação."
        },
        "light": {
        "brand-name" : "Defau<i>LT</i>",
        "brand-icone" : "P",
        "brand-slogan": "Texto Slogan",

        "color-bg" :        "#f5f6fa",
        "color-surface" :   "#ffffff",
        "color-surface-2" :  "#eef0f7",
        "color-border" :     "#dde0ee",
        "color-border-hover" : "rgba(80, 60, 180, 0.18)",
        "color-muted" :        "#9ca3bf",
        "color-amber" :        "#e08b00",

        "color-accent" :       "#00b87a",
        "color-accent-rgb" :   "0, 184, 122",
        "color-accent-2" :     "#0050e0",
        "color-accent-2-rgb" :  "0, 80, 224",
        "color-accent-warm" :  "#e84e1b",

        "color-text" :      "#161926",
        "color-text-muted" :   "#5a607a",
        "color-text-faint" :   "#adb3cc",

        "shadow-glow" :  "0 0 40px rgba(var(--color-accent-rgb), 0.18)",
        "shadow-card" :  "0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)",
        "shadow-float" : "0 20px 60px rgba(0,0,0,0.12)",

        "gradient-hero" :  "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(var(--color-accent-rgb),0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(var(--color-accent-2-rgb),0.08) 0%, transparent 60%)",
        "gradient-accent" : "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 100%)",
        "gradient-card" :   "linear-gradient(160deg, var(--color-surface-2) 0%, var(--color-surface) 100%)",

        "font-display" :       "'Sora', sans-serif",
        "font-body" :          "'DM Sans', sans-serif",

        "text-xs" :   "0.75rem",
        "text-sm" :   "0.875rem",
        "text-base" :  "1rem",
        "text-lg" :   "1.125rem",
        "text-xl" :   "1.25rem",
        "text-2xl" :   "1.5rem",
        "text-3xl" :   "1.875rem",
        "text-4xl" :   "2.25rem",
        "text-5xl" :   "3rem",
        "text-6xl" :   "3.75rem",
        "text-7xl" :   "4.5rem",

        "space-1" :   "0.25rem",
        "space-2" :   "0.5rem",
        "space-3" :   "0.75rem",
        "space-4" :   "1rem",
        "space-6" :   "1.5rem",
        "space-8" :   "2rem",
        "space-12":  "3rem",
        "space-16":  "4rem",
        "space-24":  "6rem",
        "space-32":  "8rem",

        "radius-sm":  "6px",
        "radius-md":  "12px",
        "radius-lg":  "20px",
        "radius-xl":  "32px",
        "radius-full": "9999px",

        "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out" :    "cubic-bezier(0.22, 1, 0.36, 1)",
        "dur-fast":    "200ms",
        "dur-med":     "400ms",
        "dur-slow":    "700ms",

        "max-width" :  "1200px",
        "nav-height": "72px",

        "cta-primary":   "Começar grátis",
        "cta-secondary": "Ver demo",
        "hero-tag":      "Plataforma #1 em produtividade",
        "hero-title":    "Escale seu negócio sem limites",
        "hero-sub":      "A plataforma inteligente que automatiza, analisa e acelera cada etapa da sua operação.",

        "bg": "#f6f8fb",
        "surface": "#ffffff",
        "surface2": "#f1f4f9",

        "border": "rgba(0, 0, 0, 0.08)",
        "border-hover": "rgba(0, 229, 160, 0.35)",

        "text": "#0f172a",
        "muted": "#6b7280",

        "accent": "#00b894",
        "accent2": "#2563eb",

        "warm": "#e8592f",
        "amber": "#d68910",
        "pink": "#d63384",

        "font": "var(--font-body)",
        "font-d": "var(--font-display)",

        "radius": "16px"
        }
    },

    "routes": [
        {
        "path": "/",
        "view": "home",
        "title": "Home Cliente 1"
        },

        {
        "path": "/home",
        "view": "home",
        "title": "Home Cliente 1"
        },

        {
        "path": "/login",
        "view": "login",
        "title": "Conecte-se"
        },

        {
        "path": "/dashboard",
        "view": "dashboard",
        "title": "Painel",
        "resolverKey": "dashboard"
        },

        {
        "path": "/temas",
        "view": "dashboard",
        "title": "Editor de Temas",
        "resolverKey": "temas"
        },

        {
        "path": "/tenant",
        "view": "dashboard",
        "title": "Tenant",
        "resolverKey": "tenant",
        "roles": ["admin"]
        },

        {
        "path": "/dbml",
        "view": "dashboard",
        "title": "DBML Editor",
        "resolverKey": "dbml",
        "roles": ["admin"]
        },

        {
        "path": "/estoque",
        "view": "dashboard",
        "title": "Estoque",
        "resolverKey": "estoque",
        "roles": ["admin"]
        }

    ],

        "content": {

            "login": {
                "layout": [

                    {
                        "id": "login-form",
                        "component": "LoginForm",
                        "type": "append:#content",
                        "props": {
                            "icon": "P"
                        }
                    }

                ]
            },

            "home": {
                "layout": [

                    {
                        "id": "nav",
                        "component": "Nav",
                        "type": "slot:topo"
                    },

                    {
                        "id": "nav-links",
                        "component": "Nav_links",
                        "type": "append:#navLinks",
                        "props": {
                            "links": {
                                "Home": { "href": "/" }
                            }
                        }
                    },

                    {
                        "id": "theme-switch",
                        "component": "Switch",
                        "type": "append:#tswitch"
                    },

                    {
                        "id": "hero",
                        "component": "Hero",
                        "type": "slot:hero",
                        "props": {
                            "titulo": "Escale seu negócio",
                            "sub": "Automatize e cresça",
                            "upline": "Automatize e cresça"
                        }
                    }

                ]
            },

            "dashboard": {
            "layout": [
                {
                "id": "sidebar",
                "component": "Nav_links",
                "type": "slot:sidebar",
                "static": true,
                "props": {
                    "links": {
                        "lazybyte - DEV": { "classe":"sb-group" },
                        "": { "classe":"sb-sep" },
                        "Dashboard": { "page": "/dashboard", "icon": "⬡", "classe":"sb-item" },
                        "Tenant": { "page": "/tenant", "icon": "⬡", "classe":"sb-item" },
                        "Editor de Temas": { "page": "/temas", "icon": "⬡", "classe":"sb-item" },
                        "DBML Editor": { "page": "/dbml", "icon": "⬡", "classe":"sb-item" },
                        "Estoque": { "page": "/estoque", "icon": "⬡", "badge": 5, "classe":"sb-item" }
                    }
                }
                },

                {
                "id": "main",
                "component": "_telas/dashboard",
                "type": "slot:main",
                "resolver": {
                    "type": "route",
                    "map": {
                    "dashboard": "_telas/dashboard",
                    "tenant": "_telas/tenant",
                    "dbml": "_telas/dbml",
                    "temas": "_telas/temas"

                    }
                }
                }

            ]
            }

    }
}
    */

