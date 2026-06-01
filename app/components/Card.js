export function render(el, props = {}, content, config, ctx = {}) {

    let cards = [];
    let card = "";

    const data = props.cards

    data.forEach( element => {

        card = `

        <div class="prod-card">

            <div class="prod-card-top">

                <div class="prod-icon" style="background:rgba(255,107,53,.15)">${ element.icon }</div>

                <span class="tag tag-err">${ element.status }</span>

            </div>
            <div style="font-size:13px;font-weight:600;margin-bottom:4px">${ element.titulo }</div>

            <div style="font-size:11px;color:var(--muted);margin-bottom:10px">${ element.categorias }</div>

            <div class="prog-wrap" style="margin-bottom:6px">

                <div class="prog-bar" style="width:12%;background:var(--warm)"></div>

            </div>

            <div style="display:flex;justify-content:space-between;font-size:11px">
                <span style="color:var(--warm);font-weight:700">${ element.estoque } un restantes</span>
                <span style="color:var(--muted)">mín: ${ element.minimo } un</span>
            </div>

        </div>`;

        cards.push( card );
        
    });
    
    el.innerHTML = cards.join('');

}