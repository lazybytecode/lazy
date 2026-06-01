import { navigate, withTenant } from '/router.js'

export function render(el, props = {}, content, config, ctx = {}) {
    
    const links = props.links || {}
    
    const fragment = document.createDocumentFragment()

    Object.entries(links).forEach(([chave, valor]) => {
    
        const url = valor.page || valor.home || valor.href

        if (!valor.page && valor.classe != 'sb-group' && valor.classe != 'sb-sep' && valor.classe == 'mobile-link' ) {
            
            const a = document.createElement("a")

            a.href = url || "#"

            a.dataset.url = url 

            a.textContent = chave

            a.className = valor.classe || ""

            a.addEventListener("click", (e) => {
                e.preventDefault();

                navigate( withTenant( e.dataset.url ) )
            })

            fragment.appendChild(a)
        }
        else if (!valor.page && valor.classe != 'sb-group' && valor.classe != 'sb-sep') {
            
            const li = document.createElement("li")
            
            const a = document.createElement("a")

            a.href = url || "#"

            a.dataset.url = url 

            a.textContent = chave

            a.className = valor.classe || ""

            a.addEventListener("click", (e) => {
                
                e.preventDefault();

                navigate( withTenant( e.dataset.url ) )

            })

            li.appendChild(a)

            fragment.appendChild(li)
        }
        else
        {
        
            const div = document.createElement("div")

            div.classList.add(valor.classe)

            if (valor.page) {
                div.dataset.page = valor.page
            }

            if (valor.page && window.location.pathname === valor.page) {
                div.classList.add('active')
            }

            // CLICK AQUI 👇
            div.addEventListener("click", (e) => {
                const elClicado = e.currentTarget
                
                //console.log("Página:", elClicado.dataset.page)

                // REMOVE active de todos
                el.querySelectorAll('.active').forEach(item => {
                    item.classList.remove('active')
                })

                // exemplo de ação:
                if (elClicado.dataset.page) {
                    // você pode trocar isso por seu router
                    // window.location.hash = elClicado.dataset.page
                    div.classList.add('active')
                    navigate( withTenant( elClicado.dataset.page ) )
                }
            })

            // ICON (opcional)
            if (valor.icon) {
                const icon = document.createElement("span")
                icon.classList.add("sb-icon")
                icon.textContent = valor.icon
                div.appendChild(icon)
            }

            // TEXTO
                div.appendChild(document.createTextNode(chave))

            // BADGE (opcional)
            if (valor.badge) {
                const badge = document.createElement("span")
                badge.classList.add("sb-badge")
                badge.textContent = valor.badge
                div.appendChild(badge)
            }

            fragment.appendChild(div)
        }

    })

   el.appendChild(fragment)

}