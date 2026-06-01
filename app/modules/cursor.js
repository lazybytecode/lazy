/* ── Módulo: Cursor ───────────────────────────────────────── */
export async function cursor()
{
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left  = mx + 'px';
        dot.style.top   = my + 'px';
    });

    document.addEventListener('mousemove', e => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
    });

}
