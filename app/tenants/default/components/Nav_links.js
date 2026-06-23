import { navigate, withTenant } from '/router.js'

export function render(el, props = {}, content, config, ctx = {}) {

    const links = props.links || {}

    const sortMode = String(props.sort || 'json')
        .trim()
        .toLowerCase()

    let entries = Array.isArray(links)
        ? links
        : Object.keys(links).map(k => [k, links[k]])

    // Ordenação alfabética preservando sb-group e sb-sep
    if (sortMode === 'alpha') {

        const sortedEntries = []
        let currentItems = []

        const flushItems = () => {

            if (!currentItems.length) {
                return
            }

            currentItems.sort(([a], [b]) =>
                a.localeCompare(b, 'pt-BR', {
                    sensitivity: 'base'
                })
            )

            sortedEntries.push(...currentItems)

            currentItems = []
        }

        for (const entry of entries) {

            const [, valor] = entry

            const isAnchor =
                valor.classe === 'sb-group' ||
                valor.classe === 'sb-sep'

            if (isAnchor) {

                flushItems()

                sortedEntries.push(entry)

            } else {

                currentItems.push(entry)
            }
        }

        flushItems()

        entries = sortedEntries
    }

    const fragment = document.createDocumentFragment()

    entries.forEach(([chave, valor]) => {

        const url =
            valor.page ||
            valor.api ||
            valor.home ||
            valor.href

        const type =
            valor.type ||
            (valor.api ? 'api' : 'route')

        chave = valor.classe !== 'sb-sep'
            ? chave
            : ''

        const handleNavigation = () => {

            if (!url) {
                return
            }

            switch (type) {

                case 'api':
                    window.location.href = withTenant(url)
                    break

                case 'external':
                    window.open(url, '_blank')
                    break

                default:
                    navigate(withTenant(url))
                    break
            }
        }

        if (
            !valor.page &&
            valor.classe !== 'sb-group' &&
            valor.classe !== 'sb-sep' &&
            valor.classe === 'mobile-link'
        ) {

            const a = document.createElement('a')

            a.href = url || '#'
            a.textContent = chave
            a.className = valor.classe || ''

            a.addEventListener('click', e => {

                e.preventDefault()

                handleNavigation()
            })

            fragment.appendChild(a)
        }
        else if (
            !valor.page &&
            valor.classe !== 'sb-group' &&
            valor.classe !== 'sb-sep'
        ) {

            const li = document.createElement('li')

            const a = document.createElement('a')

            a.href = url || '#'
            a.textContent = chave
            a.className = valor.classe || ''

            a.addEventListener('click', e => {

                e.preventDefault()

                handleNavigation()
            })

            li.appendChild(a)

            fragment.appendChild(li)
        }
        else {

            const div = document.createElement('div')

            if (valor.classe) {
                div.classList.add(valor.classe)
            }

            if (valor.page) {
                div.dataset.page = valor.page
            }

            if (
                valor.page &&
                window.location.pathname === valor.page
            ) {
                div.classList.add('active')
            }

            div.addEventListener('click', e => {

                const elClicado = e.currentTarget

                el.querySelectorAll('.active').forEach(item => {
                    item.classList.remove('active')
                })

                if (valor.page) {
                    elClicado.classList.add('active')
                }

                handleNavigation()
            })

            // Ícone
            if (valor.icon) {

                const icon = document.createElement('span')

                icon.classList.add('sb-icon')
                icon.textContent = valor.icon

                div.appendChild(icon)
            }

            // Texto
            div.appendChild(
                document.createTextNode(chave)
            )

            // Badge
            if (valor.badge) {

                const badge = document.createElement('span')

                badge.classList.add('sb-badge')
                badge.textContent = valor.badge

                div.appendChild(badge)
            }

            fragment.appendChild(div)
        }
    })

    el.appendChild(fragment)
}