//Data modeling tool tipo DataGrip + dbdiagram + automation layer
function injectStyles() {
  if (!document.getElementById("dbml-styles")) {
    const style = document.createElement("style");
    style.id = "dbml-styles";
    style.textContent = `

* { box-sizing: border-box; margin: 0; padding: 0; font-size: .8rem; }

:root {
  /* Backgrounds */
  --color-background-primary: #ffffff; /* superfície principal */
  --color-background-secondary: #f5f4f0; /* superfície alternada */
  --color-background-tertiary: #eeede8; /* fundo de página */
  --color-background-info: #e6f1fb; /* info suave */
  --color-background-danger: #fcebeb; /* erro suave */
  --color-background-success: #eaf3de; /* sucesso suave */
  --color-background-warning: #faeeda; /* aviso suave */

  /* Texto */
  --color-text-primary: #1a1a18; /* texto principal */
  --color-text-secondary: #73726c; /* texto muted */
  --color-text-tertiary: #a09f99; /* placeholder / hints */
  --color-text-info: #185FA5; /* azul */
  --color-text-danger: #A32D2D; /* vermelho */
  --color-text-success: #3B6D11; /* verde */
  --color-text-warning: #854F0B; /* âmbar */

  /* Bordas */
  --color-border-tertiary: rgba(0, 0, 0, 0.10); /* borda sutil */
  --color-border-secondary: rgba(0, 0, 0, 0.22); /* borda hover */
  --color-border-primary: rgba(0, 0, 0, 0.35); /* borda forte */
  --color-border-info: rgba(24, 95, 165, 0.4); /* borda info */
  --color-border-danger: rgba(163,45,45,0.4); /* borda danger */
  --color-border-success: rgba(59,109,17,0.4); /* borda success */

  /* Tipografia */
  --font-sans: "DM Sans", "Helvetica Neue", Arial, sans-serif; /* substituto para Anthropic Sans */
  --font-mono: "JetBrains Mono", "Fira Code", "Consolas", monospace;
  --font-serif: "Georgia", "Times New Roman", serif;

  /* Radii */
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;

}

@media (prefers-color-scheme: dark) {
  :root {
    /* Backgrounds */
    --color-background-primary: #1e1d1b; /* superfície principal */
    --color-background-secondary: #2a2926; /* superfície alternada */
    --color-background-tertiary: #141412; /* fundo de página */
    --color-background-info: #042C53; /* info suave */
    --color-background-danger: #501313; /* erro suave */
    --color-background-success: #173404; /* sucesso suave */
    --color-background-warning: #412402; /* aviso suave */

    /* Texto */
    --color-text-primary: #e8e6df; /* texto principal */
    --color-text-secondary: #9c9a92; /* texto muted */
    --color-text-tertiary: #6b6a64; /* placeholder / hints */
    --color-text-info: #85B7EB; /* azul */
    --color-text-danger: #F09595; /* vermelho */
    --color-text-success: #97C459; /* verde */
    --color-text-warning: #EF9F27; /* âmbar */

    /* Bordas */
    --color-border-tertiary: rgba(255,255,255,0.10); /* borda sutil */
    --color-border-secondary: rgba(255,255,255,0.20); /* borda hover */
    --color-border-primary: rgba(255,255,255,0.32); /* borda forte */
    --color-border-info: rgba(133,183,235,0.35); /* borda info */
    --color-border-danger: rgba(240,149,149,0.35); /* borda danger */
    --color-border-success: rgba(151,196,89,0.35); /* borda success */

    /* Tipografia */
    --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
    --font-mono: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    --font-serif: "Georgia", "Times New Roman", serif;

    /* Radii */
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;

    scrollbar-color: #555450 #2a2926;
    scrollbar-width: thin;

  }
}

/* Webkit (Chrome, Edge, Safari) */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #2a2926;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb {
  background: #555450;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #737270;
}

::-webkit-scrollbar-corner {
  background: #2a2926;
}

.trigger-group text {
  fill: #7c3aed;
}

.procedure-group text {
  fill: #0284c7;
}

@media (prefers-color-scheme: dark) {
  .trigger-group text {
    fill: #c084fc;
  }

  .procedure-group text {
    fill: #7dd3fc;
  }
}

#app { display: flex; height: 100vh; border: 0.5px solid var(--color-border-tertiary); overflow: hidden; background: var(--color-background-primary); }

#sidebarr { width: 400px; min-width: 300px; display: flex; flex-direction: column; border-right: 0.5px solid var(--color-border-tertiary); margin-right: 1rem; }

#sidebarr-header { padding: 10px 14px 8px; border-bottom: 0.5px solid var(--color-border-tertiary); display: flex; align-items: center; justify-content: space-between; gap: 6px; }
#sidebarr-header span { font-size: 13px; font-weight: 500; color: var(--color-text-primary); flex: 1; }
.hbtn { font-size: 11px; padding: 4px 9px; border: 0.5px solid var(--color-border-secondary); border-radius: 6px; background: transparent; color: var(--color-text-secondary); cursor: pointer; white-space: nowrap; }
.hbtn:hover { background: var(--color-background-secondary); }
.hbtn.primary { background: var(--color-background-info); color: var(--color-text-info); border-color: transparent; font-weight: 500; }
.hbtn.primary:hover { opacity: 0.85; }
#editor { flex: 1; font-family: var(--font-mono); font-size: 1rem; padding: 12px; resize: none; border: none; outline: none; background: var(--color-background-secondary); color: var(--color-text-primary); line-height: 1.6; overflow-y: auto; }
#error-bar { font-size: 11px; padding: 6px 12px; color: var(--color-text-danger); background: var(--color-background-danger); display: none; border-top: 0.5px solid var(--color-border-tertiary); }
#canvas-wrap { flex: 1; position: relative; overflow: hidden; background: var(--color-background-secondary); }
svg#diagram { cursor: default; user-select: none; }
.tbl-group { cursor: grab; }
.tbl-group:active { cursor: grabbing; }
.field-row:hover rect { fill: var(--color-background-info) !important; }
.ref-line { pointer-events: none; }
#controls { position: absolute; bottom: 10px; right: 10px; display: flex; gap: 6px; }
#controls button { font-size: 11px; padding: 5px 10px; border: 0.5px solid var(--color-border-secondary); border-radius: var(--border-radius-md); background: var(--color-background-primary); color: var(--color-text-primary); cursor: pointer; }
#controls button:hover { background: var(--color-background-secondary); }
.tab-bar { display: flex; padding: 0 12px; gap: 2px; border-bottom: 0.5px solid var(--color-border-tertiary); }
.tab { font-size: 1rem; padding: 7px 10px; cursor: pointer; color: var(--color-text-secondary); border-bottom: 2px solid transparent; margin-bottom: -0.5px; }
.tab.active { color: var(--color-text-primary); border-bottom-color: var(--color-text-primary); font-weight: 500; font-size: 1.3rem; }

/* Modal overlay */
#sql-modal { display: none; position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 100; align-items: center; justify-content: center; }
#sql-modal.open { display: flex; }
#sql-box { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); width: 90%; max-width: 640px; max-height: 82%; display: flex; flex-direction: column; overflow: hidden; }
#sql-box-header { padding: 12px 16px; border-bottom: 0.5px solid var(--color-border-tertiary); display: flex; align-items: center; justify-content: space-between; }
#sql-box-header span { font-size: 13px; font-weight: 500; color: var(--color-text-primary); }
#sql-box-header .actions { display: flex; gap: 8px; align-items: center; }
#sql-output { flex: 1; font-family: var(--font-mono); font-size: 11px; line-height: 1.7; padding: 14px 16px; overflow-y: auto; white-space: pre; color: var(--color-text-primary); background: var(--color-background-secondary); }
#copy-toast { position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); background: var(--color-background-success); color: var(--color-text-success); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-md); font-size: 12px; padding: 6px 16px; pointer-events: none; opacity: 0; transition: opacity .3s; z-index: 200; }
#copy-toast.show { opacity: 1; }
#help-panel {
    flex-direction: column;
}
#help-panel p { font-size: 1.5rem;}
#help-panel span { font-size: 1.2rem;}

#main 
{
    display: flex;
    width: calc( 100vw - 300px); 
}

   
    `;
    document.head.appendChild(style);
  }
}

export function setTab(t) {
  document.querySelectorAll('.tab').forEach((el,i) => el.classList.toggle('active',(i===0&&t==='editor')||(i===1&&t==='help')));
  document.getElementById('editor').style.display = t==='editor'?'block':'none';
  document.getElementById('help-panel').style.display = t==='help'?'flex':'none';
}

export function DBML()
{
  const SAMPLE = `Table users {
  id varchar(36) [pk]
  email varchar(255) [unique, not null]
  name varchar(100) [not null]
  role varchar(50) [default: 'member']
  created_at timestamp
}

Table posts {
  id varchar(36) [pk]
  title varchar(255) [not null]
  body text
  published bool [default: false]
  author_id varchar(36) [ref: > users.id]
  category_id int [ref: > categories.id]
  created_at timestamp
}

Table categories {
  id int [pk]
  name varchar(100) [unique, not null]
  slug varchar(100)
}

Table comments {
  id varchar(36) [pk]
  body text [not null]
  post_id varchar(36) [ref: > posts.id]
  user_id varchar(36) [ref: > users.id]
  created_at timestamp
}

Table likes {
  id varchar(36) [pk]
  post_id varchar(36) [ref: > posts.id]
  user_id varchar(36) [ref: > users.id]
}`;

let tables = [], refs = [], positions = {}, scale = 1, offsetX = 60, offsetY = 40, triggers = [], procedures = [], triggerPositions = {}, procedurePositions = {};

let dragging = null, dragStart = null, svgStart = null;
let parseTimer = null;

const TABLE_W = 220, ROW_H = 28, HEADER_H = 36;
const COLORS = ['#534AB7','#0F6E56','#993C1D','#185FA5','#854F0B','#993356','#3B6D11'];
const COLORS_LIGHT = ['#EEEDFE','#E1F5EE','#FAECE7','#E6F1FB','#FAEEDA','#FBEAF0','#EAF3DE'];

//----------------------------------------------------------------------------------------------

document.querySelector("#editor").addEventListener("input", debounceParse )
document.querySelector("#load_btn").addEventListener("click", loadDBML )
document.querySelector("#save_btn").addEventListener("click", saveDBML )
document.querySelector("#format_btn").addEventListener("click", formatCode )
document.querySelector("#openSQL_btn").addEventListener("click", openSQL )
document.querySelector("#downloadSQL_btn").addEventListener("click", downloadSQL )
document.querySelector("#copySQL_btn").addEventListener("click", copySQL )
document.querySelector("#closeSQL_btn").addEventListener("click", closeSQL )

document.querySelector("#zoomO").addEventListener("click", zoomOut )
document.querySelector("#zoom").addEventListener("click", zoomIn )
document.querySelector("#fitAll_btn").addEventListener("click", fitAll )


//----------------------------------------------------------------------------------------------
function getKey(type, name) {
  return `${type}:${name}`;
}

function switchTab(t) {
  document.querySelectorAll('.tab').forEach((el, i) => {
    el.classList.toggle(
      'active',
      (i === 0 && t === 'editor') || (i === 1 && t === 'help')
    );
  });

  document.getElementById('editor').style.display =
    t === 'editor' ? 'block' : 'none';

  document.getElementById('help-panel').style.display =
    t === 'help' ? 'flex' : 'none';
}

document.querySelector("#help_btn").addEventListener("click", function () {
  switchTab('help');
});

document.querySelector("#editor_btn").addEventListener("click", function () {
  switchTab('editor');
});

function debounceParse() { clearTimeout(parseTimer); parseTimer = setTimeout(parseAndRender, 300); }

function parseAndRender() {
  const code = document.getElementById('editor').value;
  const err = document.getElementById('error-bar');
  try {
    const result = parseDBML(code);

    tables = result.tables;
    refs = result.refs;
    triggers = result.triggers || [];
    procedures = result.procedures || [];

    // 🔥 aplicar layout
    if (result.layout) {
      Object.entries(result.layout).forEach(([key, pos]) => {
        if (key.startsWith('trigger:')) {
          triggerPositions[key.split(':')[1]] = pos;
        }
        else if (key.startsWith('procedure:')) {
          procedurePositions[key.split(':')[1]] = pos;
        }
        else {
          positions[key] = pos;
        }
      });
    }

    // só completa o que não existe
    ensurePositions();

    triggers.forEach((t, i) => {
      if (t.pos) {
        triggerPositions[t.name] = t.pos;
      } else if (!triggerPositions[t.name]) {
        triggerPositions[t.name] = { x: 50, y: 20 + i * 90 };
      }
    });

    procedures.forEach((p, i) => {
      if (p.pos) {
        procedurePositions[p.name] = p.pos;
      } else if (!procedurePositions[p.name]) {
        procedurePositions[p.name] = { x: 50, y: 250 + i * 90 };
      }
    });

    render();

    //document.getElementById('editor').value = code.replace(/#layout[\s\S]*/g, '').replace(/\n{3,}$/g, '\n\n'); // limita a no máx 2 linhas no final
    //document.getElementById('editor').value = code.replace(/\n{3,}$/g, '\n\n');
    document.getElementById('editor').value = code
      .replace(/#layout[\s\S]*/g, '')
      .replace(/\n{3,}$/g, '\n\n')
      .trim();
    
  } catch(e) {
    err.textContent = '⚠ ' + e.message;
    err.style.display = 'block';
  }
}

function parseDBML(src) {

  const triggers = [];
  const procedures = [];

  const tables = [], refs = [];
  const lines = src.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // ================= GLOBAL REFS (FIX) =================
    if (/^Ref:\s*/i.test(line)) {
      const m = line.match(/^Ref:\s*(\w+)\.(\w+)\s*([-<>]{1,2})\s*(\w+)\.(\w+)(.*)$/i);
      if (m) {
        const meta = m[6] || '';

        const onDelete = (meta.match(/delete:\s*(\w+)/i) || [])[1];
        const onUpdate = (meta.match(/update:\s*(\w+)/i) || [])[1];
        const cname = (meta.match(/name:\s*'([^']+)'/i) || [])[1];

        if (!m[1] || !m[2] || !m[4] || !m[5]) {
          console.warn('Ref inválida ignorada:', line);
        } else {
          refs.push({
            from: m[1],
            fromField: m[2],
            card: m[3],
            to: m[4],
            toField: m[5],
            onDelete: onDelete || 'restrict',
            onUpdate: onUpdate || 'cascade',
            cname
          });
        }
      }
      i++;
      continue;
    }

    // ================= TRIGGERS =================
    if (/^Trigger\s+(\w+)\s*\{/.test(line)) {
      const name = line.match(/^Trigger\s+(\w+)/)[1];
      const obj = { name };

      i++;

      let rawBlock = '';

      while (i < lines.length && !/^\s*\}/.test(lines[i])) {
        const l = lines[i].trim();
        rawBlock += l + '\n';

        const kv = l.match(/^(\w+)\s*:\s*(.+)$/);
        if (kv) obj[kv[1]] = kv[2];

        i++;
      }

      const noteMatch = rawBlock.match(/Note:\s*'([^']+)'/);
      if (noteMatch) {
        const m = noteMatch[1].match(/x:(\d+),y:(\d+)/);
        if (m) obj.pos = { x: +m[1], y: +m[2] };
      }

      triggers.push(obj);
      i++;
      continue;
    }

    // ================= PROCEDURES =================
    if (/^Procedure\s+(\w+)\s*\{/.test(line)) {
      const name = line.match(/^Procedure\s+(\w+)/)[1];
      const obj = { name };

      i++;

      let rawBlock = '';

      while (i < lines.length && !/^\s*\}/.test(lines[i])) {
        const l = lines[i].trim();
        rawBlock += l + '\n';

        const kv = l.match(/^(\w+)\s*:\s*(.+)$/);
        if (kv) obj[kv[1]] = kv[2];

        i++;
      }

      const noteMatch = rawBlock.match(/Note:\s*'([^']+)'/);
      if (noteMatch) {
        const m = noteMatch[1].match(/x:(\d+),y:(\d+)/);
        if (m) obj.pos = { x: +m[1], y: +m[2] };
      }

      procedures.push(obj);
      i++;
      continue;
    }

    // ================= TABLES =================
    if (/^[Tt]able\s+(\w+)\s*\{/.test(line)) {
      const name = line.match(/^[Tt]able\s+(\w+)/)[1];
      const fields = [];
      const indexes = [];

      i++;

      while (i < lines.length && !/^\s*\}/.test(lines[i])) {
        let fl = lines[i].trim();

        // ================= INDEXES =================
        if (fl.startsWith('indexes')) {
          i++;

          while (i < lines.length && !/^\s*\}/.test(lines[i])) {
            const il = lines[i].trim();

            const im = il.match(/^\(([^)]+)\)\s*(\[(.*)\])?/);
            if (im) {
              const fieldsIdx = im[1].split(',').map(f => f.trim());
              const meta = im[3] || '';

              indexes.push({
                fields: fieldsIdx,
                unique: /unique/.test(meta),
                name: (meta.match(/name:\s*'([^']+)'/) || [])[1] || null
              });
            }

            i++;
          }
        }

        // ================= FIELDS =================
        else if (fl && !fl.startsWith('//') && !fl.startsWith('Note')) {
          const m = fl.match(/^(\w+)\s+(.+?)(\s*\[.*\])?$/);
          if (m) {
            const fname = m[1];
            const ftype = m[2].trim();
            const rest = m[3] || '';

            const isPk = /\[.*pk.*\]/i.test(rest);
            const isUnique = /\[.*unique.*\]/i.test(rest);
            const isNotNull = /\[.*not null.*\]/i.test(rest);
            const isAutoInc = /\[.*increment.*\]/i.test(rest) || (isPk && (ftype==='int'||ftype==='bigint'));

            const defM = rest.match(
              /default:\s*(?:"([^"]*)"|'([^']*)'|([^\]]+))/i
            );

            const def = defM
              ? (defM[1] ?? defM[2] ?? defM[3]).trim()
              : null;

            const refM = rest.match(/ref:\s*([-<>]{1,2})\s*(\w+)\.(\w+)/);
              if (refM) {

                const onDelete = (rest.match(/delete:\s*(\w+)/i) || [])[1];
                const onUpdate = (rest.match(/update:\s*(\w+)/i) || [])[1];
                const cname = (rest.match(/name:\s*'([^']+)'/i) || [])[1];

                refs.push({
                  from: name,
                  fromField: fname,
                  card: refM[1],
                  to: refM[2],
                  toField: refM[3],
                  onDelete,
                  onUpdate,
                  cname
                });
              }

            fields.push({ name: fname, type: ftype, isPk, isUnique, isNotNull, isAutoInc, def });
          }
        }

        i++;
      }

      //let pos = null;
      //const noteMatch = src.match(new RegExp(`Table\\s+${name}[\\s\\S]*?Note:\\s*'([^']+)'`));

      // if (noteMatch) {
      //   const m = noteMatch[1].match(/x:(\d+),y:(\d+)/);
      //   if (m) pos = { x: +m[1], y: +m[2] };
      // }

      // tables.push({ name, fields, indexes, pos });
      tables.push({ name, fields, indexes });
    }

    else {
      i++;
    }
  }

  const layoutMatch = src.match(/#layout([\s\S]*)$/);
  const layout = {};

  if (layoutMatch) {
    const lines = layoutMatch[1].split('\n');

    lines.forEach(l => {
      l = l.trim();
      if (!l) return;

      let m = l.match(/^trigger:(\w+):\s*x=(\d+),y=(\d+)/);
      if (m) {
        layout[`trigger:${m[1]}`] = { x: +m[2], y: +m[3] };
        return;
      }

      m = l.match(/^procedure:(\w+):\s*x=(\d+),y=(\d+)/);
      if (m) {
        layout[`procedure:${m[1]}`] = { x: +m[2], y: +m[3] };
        return;
      }

      //m = l.match(/^(\w+):\s*x=(\d+),y=(\d+)/);
      m = l.match(/^([\w-]+):\s*x=(-?\d+(?:\.\d+)?),y=(-?\d+(?:\.\d+)?)/);
      
      if (m) {
        layout[m[1]] = { x: +m[2], y: +m[3] };
      }
    });
  }

  if (!tables.length) throw new Error('Nenhuma tabela encontrada');
  return { tables, refs, triggers, procedures, layout };
}

// ─── SQL GENERATION ───────────────────────────────────────────────────────────

function dbmlTypeToMySQL(t) {
  t = t.toLowerCase();
  if (t === 'uuid' || t === 'varchar(36)') return 'VARCHAR(36)';
  if (t.startsWith('varchar')) return t.toUpperCase();
  if (t === 'text' || t === 'longtext' || t === 'mediumtext' || t === 'tinytext') return t.toUpperCase();
  if (t === 'int' || t === 'integer') return 'INT';
  if (t === 'bigint') return 'BIGINT';
  if (t === 'smallint') return 'SMALLINT';
  if (t === 'tinyint') return 'TINYINT';
  if (t === 'bool' || t === 'boolean') return 'TINYINT(1)';
  if (t === 'float') return 'FLOAT';
  if (t === 'double') return 'DOUBLE';
  if (t.startsWith('decimal') || t.startsWith('numeric')) return t.toUpperCase();
  if (t === 'date') return 'DATE';
  if (t === 'datetime') return 'DATETIME';
  if (t === 'timestamp') return 'TIMESTAMP';
  if (t === 'time') return 'TIME';
  if (t === 'year') return 'YEAR';
  if (t === 'json') return 'JSON';
  if (t === 'enum') return 'ENUM';
  if (t.startsWith('char')) return t.toUpperCase();
  return t.toUpperCase();
}

function syncLayoutToEditor() {

  const editor = document.getElementById('editor');

  let code = editor.value
    .replace(/#layout[\s\S]*/g, '')
    .trim();

  let layout = '\n\n#layout\n';

  tables.forEach(table => {
    const pos = positions[table.name];
    if (!pos) return;
    layout += `${table.name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  Object.entries(triggerPositions).forEach(([name, pos]) => {
    layout += `trigger:${name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  Object.entries(procedurePositions).forEach(([name, pos]) => {
    layout += `procedure:${name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  editor.value = code + layout;
}

function quote(name) { return '`' + name + '`'; }

function generateMySQL() {
  const now = new Date().toISOString().slice(0,19).replace('T',' ');
  let sql = '';
  sql += `-- ============================================================\n`;
  sql += `-- MySQL 8 — gerado por DBML Editor\n`;
  sql += `-- Data: ${now}\n`;
  sql += `-- ============================================================\n\n`;
  sql += `SET NAMES utf8mb4;\n`;
  sql += `SET FOREIGN_KEY_CHECKS = 0;\n\n`;

  // Build FK map: table -> list of FKs
  const fkMap = {};

  refs.forEach(r => {

    if (!tables.find(t => t.name === r.from)) {
      console.warn('Tabela origem não existe:', r.from);
      return;
    }

    if (!tables.find(t => t.name === r.to)) {
      console.warn('Tabela destino não existe:', r.to);
      return;
    }

    const addFK = (table, field, refTable, refField) => {
    if (!table || !field || !refTable || !refField) {
      console.warn('FK inválida ignorada:', { table, field, refTable, refField });
      return;
    }

    if (!fkMap[table]) fkMap[table] = [];

    fkMap[table].push({
      field,
      refTable,
      refField,
      onDelete: r.onDelete || 'restrict',
      onUpdate: r.onUpdate || 'cascade',
      cname: r.cname
    });
  };


    const fromTable = tables.find(t => t.name === r.from);
    const toTable = tables.find(t => t.name === r.to);

    if (!fromTable || !toTable) {
      console.warn('Ref ignorada (tabela não existe):', r);
      return;
    }

    if (r.card === '>' || r.card === '-') {
      addFK(r.from, r.fromField, r.to, r.toField);
    }
    else if (r.card === '<') {
      addFK(r.to, r.toField, r.from, r.fromField);
    }
    else {
      addFK(r.from, r.fromField, r.to, r.toField);
      addFK(r.to, r.toField, r.from, r.fromField);
    }

  });

  tables.forEach(table => {
    sql += `-- ------------------------------------------------------------\n`;
    sql += `DROP TABLE IF EXISTS ${quote(table.name)};\n`;
    sql += `CREATE TABLE IF NOT EXISTS ${quote(table.name)} (\n`;

    const lines = [];
    const pkFields = table.fields.filter(f => f.isPk);

    (table.indexes || []).forEach(idx => {
          const idxName = idx.name || `idx_${table.name}_${idx.fields.join('_')}`;
          const cols = idx.fields.map(f => quote(f)).join(', ');

          if (idx.unique) {
            lines.push(`  UNIQUE KEY ${quote(idxName)} (${cols})`);
          } else {
            lines.push(`  KEY ${quote(idxName)} (${cols})`);
          }
        });

    table.fields.forEach(f => {
      let col = `  ${quote(f.name)} ${dbmlTypeToMySQL(f.type)}`;
      if (f.isAutoInc) col += ' AUTO_INCREMENT';
      if (f.isNotNull || f.isPk) col += ' NOT NULL';
      if (f.isUnique && !f.isPk) col += ' UNIQUE';
      
      if (f.def !== null && f.def !== undefined) {

        const rawDefaults = new Set([
          'CURRENT_TIMESTAMP',
          'CURRENT_DATE',
          'CURRENT_TIME',
          'NULL'
        ]);

        const val = String(f.def).trim();

        let out;

        if (/^CURRENT_TIMESTAMP\s+ON\s+UPDATE\s+CURRENT_TIMESTAMP$/i.test(val)) {
          out = 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP';
        }
        else if (rawDefaults.has(val.toUpperCase())) {
          out = val.toUpperCase();
        }
        else if (val.toLowerCase() === 'true') {
          out = '1';
        }
        else if (val.toLowerCase() === 'false') {
          out = '0';
        }
        else if (!isNaN(val)) {
          out = val; // número puro
        }
        else {
          out = `'${val}'`; // string normal
        }

        col += ` DEFAULT ${out}`;
      }
      lines.push(col);
    });

    if (pkFields.length === 1) {
      lines.push(`  PRIMARY KEY (${quote(pkFields[0].name)})`);
    } else if (pkFields.length > 1) {
      lines.push(`  PRIMARY KEY (${pkFields.map(f=>quote(f.name)).join(', ')})`);
    }

    // Indexes for FK fields
    const fks = fkMap[table.name] || [];
    fks.forEach(fk => {
      lines.push(`  INDEX ${quote('idx_' + table.name + '_' + fk.field)} (${quote(fk.field)})`);
    });

    sql += lines.join(',\n') + '\n';
    sql += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\n`;
  });

  // Foreign key constraints (separate ALTER TABLE for clarity)
  const fkStatements = [];
  tables.forEach(table => {
    const fks = fkMap[table.name] || [];
    fks.forEach(fk => {
      const cname =
        fk.cname ||
        `fk_${table.name}_${fk.field}`;

      const onDelete = fk.onDelete
        ? `ON DELETE ${fk.onDelete.toUpperCase()}`
        : 'ON DELETE RESTRICT';

      const onUpdate = fk.onUpdate
        ? `ON UPDATE ${fk.onUpdate.toUpperCase()}`
        : 'ON UPDATE CASCADE';
      fkStatements.push(
        `ALTER TABLE ${quote(table.name)}
        ADD CONSTRAINT ${quote(cname)}
        FOREIGN KEY (${quote(fk.field)})
        REFERENCES ${quote(fk.refTable)} (${quote(fk.refField)})
        ${onDelete} ${onUpdate};`
      );
    });
  });

  if (fkStatements.length) {
    sql += `-- ------------------------------------------------------------\n`;
    sql += `-- Foreign Keys\n`;
    sql += `-- ------------------------------------------------------------\n\n`;
    sql += fkStatements.join('\n\n') + '\n\n';
  }

  sql += `SET FOREIGN_KEY_CHECKS = 1;\n`;
  return sql;
}

function openSQL() {
  try {
    const sql = generateMySQL();
    document.getElementById('sql-output').textContent = sql;
    document.getElementById('sql-modal').classList.add('open');
  } catch(e) {
    let msg_erro = "Erro ao gerar SQL: " + e.message;
    alert( msg_erro );
  }
}
function closeSQL() { document.getElementById('sql-modal').classList.remove('open'); }

document.getElementById('sql-modal').addEventListener('click', function(e) {
  if (e.target === this) closeSQL();
});

function copySQL() {
  const sql = document.getElementById('sql-output').textContent;
  navigator.clipboard.writeText(sql).then(() => {
    const t = document.getElementById('copy-toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  });
}

function downloadSQL() {
  const sql = document.getElementById('sql-output').textContent;
  const blob = new Blob([sql], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'schema.sql';
  a.click();
}

// ─── DIAGRAM ──────────────────────────────────────────────────────────────────

function buildGraphLevels() {
  const incoming = {};
  const outgoing = {};

  tables.forEach(t => {
    incoming[t.name] = 0;
    outgoing[t.name] = [];
  });

  refs.forEach(r => {
    incoming[r.to] = (incoming[r.to] || 0) + 1;
    outgoing[r.from].push(r.to);
  });

  // BFS por níveis (topological-ish)
  const levels = {};
  const queue = [];

  tables.forEach(t => {
    if (incoming[t.name] === 0) {
      levels[t.name] = 0;
      queue.push(t.name);
    }
  });

  while (queue.length) {
    const cur = queue.shift();
    const level = levels[cur];

    (outgoing[cur] || []).forEach(next => {
      if (levels[next] === undefined || levels[next] < level + 1) {
        levels[next] = level + 1;
        queue.push(next);
      }
    });
  }

  return levels;
}

function ensurePositions() {
  const levels = buildGraphLevels();

  const spacingX = 340;
  const spacingY = 40;

  const grouped = {};

  tables.forEach(t => {
    const lvl = levels[t.name] || 0;
    if (!grouped[lvl]) grouped[lvl] = [];
    grouped[lvl].push(t);
  });

  Object.keys(grouped).forEach(levelStr => {
    const level = Number(levelStr);
    const list = grouped[level];

    let currentY = 0;

    list.forEach((table) => {

      // ✅ NÃO sobrescreve se já tem posição
      if (positions[table.name]) return;

      const h = tableHeight(table);

      positions[table.name] = {
        x: level * spacingX,
        y: currentY
      };

      currentY += h + spacingY;
    });
  });

  // limpa posições que não existem mais
  Object.keys(positions).forEach(name => {
    if (!tables.find(t => t.name === name)) {
      delete positions[name];
    }
  });

}

function autoLayout() {
  const cols = Math.ceil(Math.sqrt(tables.length));
  tables.forEach((t, idx) => {
    //positions[t.name] = { x: (idx%cols)*(TABLE_W+80), y: Math.floor(idx/cols)*260 };
    // positions[t.name] = t.pos;
    positions[t.name] ??= t.pos;
  });
  fitAll(); render();
}

//function tableHeight(t) { return HEADER_H + t.fields.length * ROW_H + 4; }

function tableHeight(t) {
  return HEADER_H
    + t.fields.length * ROW_H
    + (t.indexes?.length ? (t.indexes.length * 16 + 10) : 0)
    + 4;
}

const NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  for (const [k,v] of Object.entries(attrs||{})) e.setAttribute(k,v);
  if (parent) parent.appendChild(e);
  return e;
}
function txt(text, attrs, parent) { const e = el('text',attrs,parent); e.textContent=text; return e; }
function isDark() { return window.matchMedia('(prefers-color-scheme: dark)').matches; }

function truncate(str, max = 26) {
  if (!str) return '';
  return str.length > max ? str.slice(0, max - 3) + '...' : str;
}



function render() {
  const svg = document.getElementById('diagram');
  svg.innerHTML = '';
  const dark = isDark();
  const defs = el('defs',{},svg);
  const mk = el('marker',{id:'arr',viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto-start-reverse'},defs);
  el('path',{d:'M2 1L8 5L2 9',fill:'none',stroke:dark?'#9c9a92':'#73726c','stroke-width':'1.5','stroke-linecap':'round','stroke-linejoin':'round'},mk);

  const g = el('g',{id:'root',transform:`translate(${offsetX},${offsetY}) scale(${scale})`},svg);
  const refLayer = el('g',{},g);

  refs.forEach(ref => {
    const fromT = tables.find(t=>t.name===ref.from), toT = tables.find(t=>t.name===ref.to);
    if (!fromT||!toT) return;
    const fp = positions[ref.from], tp = positions[ref.to];
    if (!fp||!tp) return;
    const fi = fromT.fields.findIndex(f=>f.name===ref.fromField);
    const ti = toT.fields.findIndex(f=>f.name===ref.toField);
    const fy = fp.y + HEADER_H + (fi>=0 ? fi*ROW_H+ROW_H/2 : ROW_H/2);
    const ty = tp.y + HEADER_H + (ti>=0 ? ti*ROW_H+ROW_H/2 : ROW_H/2);
    const fx = fp.x+TABLE_W/2 < tp.x+TABLE_W/2 ? fp.x+TABLE_W : fp.x;
    const tx = tp.x+TABLE_W/2 < fp.x+TABLE_W/2 ? tp.x+TABLE_W : tp.x;
    const mx = (fx+tx)/2;
    const stroke = dark?'#9c9a92':'#999';
    el('path',{d:`M${fx},${fy} C${mx},${fy} ${mx},${ty} ${tx},${ty}`,fill:'none',stroke,'stroke-width':'1.5','stroke-dasharray':'4 3','marker-end':'url(#arr)',class:'ref-line'},refLayer);
    txt(ref.card,{x:(fx+tx)/2,y:(fy+ty)/2-6,'text-anchor':'middle','font-size':'9','font-family':'var(--font-mono)',fill:stroke},refLayer);
  });

  tables.forEach((table,ti) => {
  
    const pos = positions[table.name];
    if (!pos) return;
    const h = tableHeight(table);
    const ci = ti%COLORS.length;
    const headerFill = isDark() ? COLORS[ci] : COLORS_LIGHT[ci];
    const headerText = isDark() ? '#fff' : COLORS[ci];
    const tg = el('g',{class:'tbl-group',transform:`translate(${pos.x},${pos.y})`},g);
    el('rect',{x:2,y:2,width:TABLE_W,height:h,rx:10,fill:dark?'rgba(0,0,0,0.3)':'rgba(0,0,0,0.06)'},tg);
    el('rect',{x:0,y:0,width:TABLE_W,height:h,rx:10,fill:dark?'#2a2926':'#fff',stroke:dark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.12)','stroke-width':'0.5'},tg);
    el('rect',{x:0,y:0,width:TABLE_W,height:HEADER_H,rx:10,fill:headerFill},tg);
    el('rect',{x:0,y:HEADER_H-10,width:TABLE_W,height:12,fill:headerFill},tg);
    txt(table.name,{x:TABLE_W/2,y:22,'text-anchor':'middle','dominant-baseline':'central','font-size':'11','font-weight':'500','font-family':'var(--font-sans)',fill:headerText},tg);

    table.fields.forEach((field,fi) => {
      const fy = HEADER_H + fi*ROW_H;
      const rowG = el('g',{class:'field-row'},tg);
      el('rect',{x:0,y:fy,width:TABLE_W,height:ROW_H,fill:fi%2===0?'transparent':(dark?'rgba(255,255,255,0.02)':'rgba(0,0,0,0.015)'),rx:0},rowG);
      if (field.isPk) txt('🔑',{x:8,y:fy+ROW_H/2+1,'dominant-baseline':'central','font-size':'8'},rowG);
      const textFill = dark?'#c2c0b6':'#3d3d3a', mutedFill = dark?'#888780':'#888';
      txt(field.name,{x:field.isPk?22:8,y:fy+ROW_H/2,'dominant-baseline':'central','font-size':'12','font-family':'var(--font-sans)',fill:textFill,'font-weight':field.isPk?'500':'400'},rowG);

      //let badge = field.type + (field.isUnique?' U':'') + (field.isNotNull?' NN':'');
      let badge = field.type
        + (field.isUnique ? ' U' : '')
        + (field.isNotNull ? ' NN' : '')
        + (field.def !== null ? ` D:${field.def}` : '');

      //txt(badge,{x:TABLE_W-8,y:fy+ROW_H/2,'text-anchor':'end','dominant-baseline':'central','font-size':'10','font-family':'var(--font-mono)',fill:mutedFill},rowG);

      const truncated = truncate(badge, 20);

      const textEl = txt(truncated,{
        x:TABLE_W-8,
        y:fy+ROW_H/2,
        'text-anchor':'end',
        'dominant-baseline':'central',
        'font-size':'10',
        'font-family':'var(--font-mono)',
        fill:mutedFill
      },rowG);

      // ✅ Tooltip nativo do SVG
      el('title', {}, textEl).textContent = badge;

      if (table.indexes && table.indexes.length) {
        const startY = HEADER_H + table.fields.length * ROW_H + 16;

        table.indexes.forEach((idx, i) => {
          const label =
            (idx.unique ? 'U ' : '') +
            (idx.name ? idx.name + ': ' : '') +
            idx.fields.join(',');

          const fullLabel = '🔎 ' + label;
          const truncated = fullLabel.length > 32
            ? fullLabel.slice(0, 25) + '...'
            : fullLabel;

          const t = txt(truncated, {
            x: 8,
            y: startY + i * 18,
            'font-size': '9',
            'font-family': 'var(--font-mono)',
            fill: dark ? '#888780' : '#777'
          }, tg);

          // tooltip com valor completo
          el('title', {}, t).textContent = fullLabel;
        });
      }
      
      if (fi < table.fields.length-1) el('line',{x1:0,y1:fy+ROW_H,x2:TABLE_W,y2:fy+ROW_H,stroke:dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.06)','stroke-width':'0.5'},rowG);
    });

    tg.addEventListener('mousedown', e => {
      if (e.button!==0) return;
      dragging=table.name; dragStart={mx:e.clientX,my:e.clientY};
      svgStart={x:positions[table.name].x,y:positions[table.name].y}; e.preventDefault();
    });
  });

const sideX = 50;
let sideY = 20;

// TRIGGERS
(triggers || []).forEach((t) => {
  const pos = triggerPositions[t.name];

  const tg = el('g', {
    class: 'trigger-group',
    transform: `translate(${pos.x},${pos.y})`
  }, g); // ✅ USAR g (root)

  el('rect', {
    width: 220,
    height: 70,
    rx: 10,
    fill: dark ? '#3a234a' : '#f3e8ff',
    stroke: dark ? '#7c3aed' : '#a855f7'
  }, tg);

  txt('🔮 Trigger: ' + t.name, { x: 10, y: 18 }, tg);
  txt(`${t.event || ''} ${t.timing || ''}`, { x: 10, y: 38 }, tg);
  txt(t.table || '', { x: 10, y: 56 }, tg);

  tg.addEventListener('mousedown', e => {
    if (e.button !== 0) return;

    dragging = `trigger:${t.name}`;
    dragStart = { mx: e.clientX, my: e.clientY };
    svgStart = { ...pos };

    e.stopPropagation(); // 🔥 importante
  });
});

// PROCEDURES
(procedures || []).forEach((p) => {
  const pos = procedurePositions[p.name];

  const pg = el('g', {
    class: 'procedure-group',
    transform: `translate(${pos.x},${pos.y})`
  }, g); // ✅ USAR g (root)

  el('rect', {
    width: 220,
    height: 70,
    rx: 10,
    fill: dark ? '#1e3a5f' : '#e0f2fe',
    stroke: dark ? '#3b82f6' : '#38bdf8'
  }, pg);

  txt('⚙️ Procedure: ' + p.name, { x: 10, y: 18 }, pg);
  txt(p.params || '', { x: 10, y: 40 }, pg);

  pg.addEventListener('mousedown', e => {
    if (e.button !== 0) return;

    dragging = `procedure:${p.name}`;
    dragStart = { mx: e.clientX, my: e.clientY };
    svgStart = { ...pos };

    e.stopPropagation(); // 🔥 importante
  });
});
}

function bindEvents() { 

  const svg = document.getElementById('diagram');

  svg.addEventListener('mousedown', e => {
    if (
      e.target === svg ||
      !e.target.closest('.tbl-group') &&
      !e.target.closest('.trigger-group') &&
      !e.target.closest('.procedure-group')
    ) {
        dragging='__pan__'; dragStart={mx:e.clientX,my:e.clientY}; svgStart={x:offsetX,y:offsetY};
      }
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;

    //const dx = (e.clientX - dragStart.mx) / scale;
    //const dy = (e.clientY - dragStart.my) / scale;
    const dx = e.clientX - dragStart.mx;
    const dy = e.clientY - dragStart.my;

    if (dragging === '__pan__') {
      offsetX = svgStart.x + dx * scale;
      offsetY = svgStart.y + dy * scale;
    }

    else if (dragging.startsWith('trigger:')) {
      const name = dragging.split(':')[1];
      triggerPositions[name] = {
        x: svgStart.x + dx,
        y: svgStart.y + dy
      };
    }

    else if (dragging.startsWith('procedure:')) {
      const name = dragging.split(':')[1];
      procedurePositions[name] = {
        x: svgStart.x + dx,
        y: svgStart.y + dy
      };
    }

    else if (tables.find(t => t.name === dragging)) {

      positions[dragging] = {
        x: svgStart.x + dx,
        y: svgStart.y + dy
      };

    }

    render();

  });

  document.addEventListener('mouseup',()=>{ dragging=null; });
  
  document.getElementById('diagram').addEventListener('wheel', e => {
    e.preventDefault();
    scale = Math.max(0.3, Math.min(2.5, scale*(e.deltaY<0?1.1:0.9)));
    render();
    
    if (dragging) {
      syncLayoutToEditor();
    }

    dragging = null;
  }, {passive:false});
}

function zoomIn(){scale=Math.min(2.5,scale*1.2);render();}
function zoomOut(){scale=Math.max(0.3,scale/1.2);render();}

function fitAll(){
  if(!tables.length) return;

  const wrap=document.getElementById('canvas-wrap');
  const W=wrap.clientWidth, H=wrap.clientHeight;

  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;

  tables.forEach(t=>{
    const p=positions[t.name];
    if(!p) return;

    minX=Math.min(minX,p.x);
    minY=Math.min(minY,p.y);
    maxX=Math.max(maxX,p.x+TABLE_W);
    maxY=Math.max(maxY,p.y+tableHeight(t));
  });

  const pad=80;

  scale = Math.max(
    0.3,
    Math.min(
      1.2,
      Math.min(
        (W-pad*2)/(maxX-minX),
        (H-pad*2)/(maxY-minY)
      )
    )
  );

  offsetX = pad - minX * scale;
  offsetY = pad - minY * scale;

  render();
}

function formatCode(){
  const code=document.getElementById('editor').value;
  try {
    const result=parseDBML(code); let out='';
    result.tables.forEach((t,i)=>{
      if(i) out+='\n';
      out+=`Table ${t.name} {\n`;
      t.fields.forEach(f=>{
        let mods=[];
        if(f.isPk) mods.push('pk');
        if(f.isNotNull) mods.push('not null');
        if(f.isUnique) mods.push('unique');
        if(f.def) mods.push(`default: ${f.def}`);
        out+=`  ${f.name} ${f.type}${mods.length?' ['+mods.join(', ')+']':''}\n`;
      });
      out+='}\n';
    });
    result.refs.forEach(r=>{out+=`\nRef: ${r.from}.${r.fromField} ${r.card} ${r.to}.${r.toField}\n`;});
    document.getElementById('editor').value=out.trim();
  } catch(e){}
}

document.getElementById('editor').value = SAMPLE;
bindEvents();
parseAndRender();
setTimeout(fitAll, 150);

// Salvar como arquivo
async function saveDBML() {
  let code = document.getElementById('editor').value;

  // remove layout antigo
  code = code.replace(/#layout[\s\S]*/g, '').trim();

  let layout = '\n\n#layout\n';

  // TABLES
  Object.entries(positions).forEach(([name, pos]) => {
    layout += `${name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  // TRIGGERS
  Object.entries(triggerPositions).forEach(([name, pos]) => {
    layout += `trigger:${name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  // PROCEDURES
  Object.entries(procedurePositions).forEach(([name, pos]) => {
    layout += `procedure:${name}: x=${Math.round(pos.x)},y=${Math.round(pos.y)}\n`;
  });

  const finalCode = code + layout;

  const fileHandle = await window.showSaveFilePicker({
    suggestedName: 'schema.dbml',
    types: [{
      description: 'DBML File',
      accept: { 'text/plain': ['.dbml', '.txt'] },
    }],
  });

  const writable = await fileHandle.createWritable();
  await writable.write(finalCode);
  await writable.close();
}

/*function saveDBML() { // download direto
  const blob = new Blob([document.getElementById('editor').value], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'schema.dbml';
  a.click();
}*/

// Abrir arquivo do disco
function loadDBML() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.dbml,.txt';
  input.onchange = e => {
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById('editor').value = ev.target.result;
      parseAndRender();
    };
    reader.readAsText(e.target.files[0]);
  };
  input.click();
}

}

/*function saveDBML() { // download direto
  const blob = new Blob([document.getElementById('editor').value], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'schema.dbml';
  a.click();
}*/

export function render(el, props = {}, content, config, ctx = {}) {

  injectStyles()

  el.innerHTML = `
    <div id="sidebarr">
        <div id="sidebarr-header" style="flex-direction: column;">
          <span style="font-size: 1.8rem;" >DBML Editor</span>
          <div>
            <button class="hbtn" id="format_btn">Formatar</button>
            <button class="hbtn primary" id="openSQL_btn">SQL ↗</button>
            <button id="save_btn" class="hbtn" >Salvar</button>
            <button id="load_btn" class="hbtn primary">Carregar</button>
          </div>
        </div>
        <div class="tab-bar">
          <div class="tab active" id="editor_btn">Código</div>
          <div class="tab" id="help_btn" >Sintaxe</div>
        </div>
        <textarea id="editor" spellcheck="false"></textarea>
        <div id="help-panel" style="display:none;flex:1;overflow-y:auto;padding:12px;font-size:11px;color:var(--color-text-secondary);line-height:1.7">
          <p style="font-weight:500;color:var(--color-text-primary);margin-bottom:8px">Referência DBML</p>
          <p style="margin-bottom:4px"><span style="color:var(--color-text-primary)">Table</span> nome { campos }</p>
          <p style="margin-bottom:4px"><span style="color:var(--color-text-primary)">Tipos:</span> int, varchar, text, bool, float, uuid, timestamp, date</p>
          <p style="margin-bottom:4px"><span style="color:var(--color-text-primary)">Modificadores:</span> [pk], [not null], [unique], [default: val], [ref: ...], [note: '...']</p>
          <p style="margin-bottom:4px"><span style="color:var(--color-text-primary)">Ref inline:</span> [ref: &gt; tabela.campo]</p>
          <p style="margin-bottom:12px"><span style="color:var(--color-text-primary)">Ref global:</span> Ref: t1.campo > t2.campo</p>
          <p style="font-weight:500;color:var(--color-text-primary);margin-bottom:6px">Cardinalidade</p>
          <p style="margin-bottom:4px"><b>&gt;</b> muitos para um</p>
          <p style="margin-bottom:4px"><b>&lt;</b> um para muitos</p>
          <p style="margin-bottom:4px"><b>-</b> um para um</p>
          <p style="margin-bottom:12px"><b>&lt;&gt;</b> muitos para muitos</p>
          <p style="margin-bottom:12px"> ref: &gt; tenants.id, delete: restrict, update: cascade</p>
        </div>
        <div id="error-bar"></div>
      </div>

      <div id="canvas-wrap">
        <svg id="diagram" width="100%" height="100%"></svg>
        <div id="controls">
          <button id="zoom">+</button>
          <button id="zoomO">−</button>
          <button id="fitAll_btn">Layout Auto</button>
        </div>
      </div>

      <!-- SQL Modal -->
      <div id="sql-modal" onclick="e => { if(e.target===this) closeSQL(); }">
        <div id="sql-box">
          <div id="sql-box-header">
            <span>MySQL 8 — Script gerado</span>
            <div class="actions">
              <button class="hbtn" id="downloadSQL_btn">Download .sql</button>
              <button class="hbtn primary" id="copySQL_btn">Copiar</button>
              <button class="hbtn" id="closeSQL_btn" style="padding:4px 8px">✕</button>
            </div>
          </div>
          <div id="sql-output"></div>
        </div>
      </div>
      <div id="copy-toast">SQL copiado!</div>`

      DBML()
}

