export async function setupEtlPage(){
    
    document.getElementById("titulo").innerHTML = 'ETL Guiado'
    document.getElementById("subtitulo").innerHTML = 'Configure seu ambiente de dados (DataOps).'

    document.getElementById("page-container").innerHTML = ``
    
    document.getElementById("page-container").innerHTML = `

<main id="onboarding" class="onboarding">

  <!-- Step indicator -->
  <nav class="step-nav" id="stepNav">
    <div class="step-track">
      <div class="step-progress" id="stepProgress"></div>
    </div>
    <div class="steps-list" id="stepsList"></div>
  </nav>
  <!-- Steps wrapper -->
  <div class="steps-wrapper" id="stepsWrapper">

    <!-- STEP 1: Welcome -->
    <section class="step active" id="step-1">
      <div class="step-inner">
        <div class="step-badge">Passo 1 de 5</div>
        <p class="step-desc">Vamos configurar sua plataforma de ETL e Analytics em menos de 3 minutos*. Seus dados transformados, insights na palma da mão.</p>
        <div class="welcome-cards">
          <div class="wcard" style="--d:0.05s">
            <div class="wcard-icon">⚡</div>
            <div class="wcard-label">ETL Automático</div>
            <div class="wcard-sub">Schema detectado em segundos</div>
          </div>
          <div class="wcard" style="--d:0.15s">
            <div class="wcard-icon">🧠</div>
            <div class="wcard-label">IA & Insights</div>
            <div class="wcard-sub">Padrões revelados sem esforço</div>
          </div>
          <div class="wcard" style="--d:0.25s">
            <div class="wcard-icon">📊</div>
            <div class="wcard-label">Dashboards</div>
            <div class="wcard-sub">Gerados automaticamente</div>
          </div>
          <div class="wcard" style="--d:0.35s">
            <div class="wcard-icon">🔔</div>
            <div class="wcard-label">Alertas</div>
            <div class="wcard-sub">Anomalias em tempo real</div>
          </div>
        </div>
        <button class="btn-primary" onclick="goStep(2)">
          Começar configuração
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <p style="margin-top: 1rem; color: #aaa;"><small> * O tempo sugerido é uma esimativa, podendo variar de acordo com a quantidade de registros a serem analisados.</small> 
      </div>
    </section>

    <!-- STEP 2: Connect Source -->
    <section class="step" id="step-2">
      <div class="step-inner">
        <div class="step-badge">Passo 2 de 5</div>
        <h1 class="step-title">Conectar <span class="gradient-text">Fonte de Dados</span></h1>
        <p class="step-desc">Escolha de onde seus dados vêm. Suportamos os principais bancos e formatos de arquivo.</p>
        <div class="source-grid" id="sourceGrid">
          <div class="source-card" data-source="postgresql" onclick="selectSource(this)">
            <div class="source-icon" style="background: #336791">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <span class="source-name">PostgreSQL</span>
            <span class="source-tag">SQL</span>
          </div>
          <div class="source-card" data-source="mysql" onclick="selectSource(this)">
            <div class="source-icon" style="background: #f29111">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
            </div>
            <span class="source-name">MySQL</span>
            <span class="source-tag">SQL</span>
          </div>
          <div class="source-card" data-source="bigquery" onclick="selectSource(this)">
            <div class="source-icon" style="background: #4285f4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M22 12l-4-4-8 8-4-4-2 2 6 6 10-10-2-2 4-4v8z"/></svg>
            </div>
            <span class="source-name">BigQuery</span>
            <span class="source-tag">Cloud</span>
          </div>
          <div class="source-card" data-source="csv" onclick="selectSource(this)">
            <div class="source-icon" style="background: #22c55e">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            </div>
            <span class="source-name">CSV</span>
            <span class="source-tag">Arquivo</span>
          </div>
          <div class="source-card" data-source="excel" onclick="selectSource(this)">
            <div class="source-icon" style="background: #217346">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 14H7v-2h10v2zm0-4H7v-2h10v2zm-4-4H7V7h6v2z"/></svg>
            </div>
            <span class="source-name">Excel</span>
            <span class="source-tag">Arquivo</span>
          </div>
          <div class="source-card" data-source="mongodb" onclick="selectSource(this)">
            <div class="source-icon" style="background: #47a248">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V13h2v-2h-2V9h-2v2H9v2h2v3.93c-2.83-.48-5-2.95-5-5.93 0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.98-2.17 5.45-5 5.93z"/></svg>
            </div>
            <span class="source-name">MongoDB</span>
            <span class="source-tag">NoSQL</span>
          </div>
        </div>
        <!-- Connection form -->
        <div class="conn-form" id="connForm" style="display:none">
          <div class="form-row">
            <div class="form-group">
              <label>Host / Endpoint</label>
              <input type="text" placeholder="db.empresa.com" id="dbHost">
            </div>
            <div class="form-group">
              <label>Porta</label>
              <input type="text" placeholder="5432" id="dbPort" style="max-width:120px">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Banco de Dados</label>
              <input type="text" placeholder="analytics_db" id="dbName">
            </div>
            <div class="form-group">
              <label>Usuário</label>
              <input type="text" placeholder="admin" id="dbUser">
            </div>
          </div>
          <div class="form-group">
            <label>Senha</label>
            <input type="password" placeholder="••••••••" id="dbPass">
          </div>
        </div>
        <!-- File upload zone -->
        <div class="upload-zone" id="uploadZone" style="display:none" onclick="simulateUpload()">
          <div class="upload-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <p>Arraste seu arquivo aqui ou <span class="link-text">clique para selecionar</span></p>
          <p class="upload-hint">CSV, XLSX, XLS — até 500MB</p>
          <div class="upload-progress" id="uploadProgress" style="display:none">
            <div class="progress-bar"><div class="progress-fill" id="uploadFill"></div></div>
            <span id="uploadStatus">Carregando...</span>
          </div>
        </div>
        <div class="step-actions">
          <button class="btn-secondary" onclick="goStep(1)">← Voltar</button>
          <button class="btn-primary" id="btnStep2" onclick="proceedStep2()" disabled>
            Testar Conexão
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- STEP 3: Schema Detection -->
    <section class="step" id="step-3">
      <div class="step-inner">
        <div class="step-badge">Passo 3 de 5</div>
        <h1 class="step-title">Detecção de <span class="gradient-text">Schema</span></h1>
        <p class="step-desc">O DataFlow está analisando sua fonte e identificando automaticamente a estrutura dos dados.</p>
        <div class="schema-terminal" id="schemaTerminal">
          <div class="terminal-header">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="terminal-title">dataflow-etl — schema-detector</span>
          </div>
          <div class="terminal-body" id="terminalBody">
            <div class="term-line waiting" id="tl-0">$ Iniciando análise da fonte...</div>
          </div>
        </div>
        <div class="schema-result" id="schemaResult" style="display:none">
          <h3 class="schema-title">Tabelas Detectadas</h3>
          <div class="schema-tables" id="schemaTables"></div>
          <div class="schema-summary" id="schemaSummary"></div>
        </div>
        <div class="step-actions" id="step3Actions" style="display:none">
          <button class="btn-secondary" onclick="goStep(2)">← Voltar</button>
          <button class="btn-primary" onclick="goStep(4)">
            Configurar ETL
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- STEP 4: ETL Pipeline -->
    <section class="step" id="step-4">
      <div class="step-inner">
        <div class="step-badge">Passo 4 de 5</div>
        <h1 class="step-title">Pipeline <span class="gradient-text">ETL</span></h1>
        <p class="step-desc">Configure as transformações. O sistema sugere as mais comuns baseado no seu schema.</p>
        <div class="pipeline-viz" id="pipelineViz">
          <div class="pipe-node source-node">
            <div class="pipe-icon">🗄️</div>
            <span id="pipeSourceLabel">PostgreSQL</span>
          </div>
          <div class="pipe-connector">
            <div class="pipe-line"><div class="pipe-dot"></div></div>
            <div class="pipe-step-label">Extract</div>
          </div>
          <div class="pipe-node transform-node">
            <div class="pipe-icon">⚙️</div>
            <span>Transform</span>
          </div>
          <div class="pipe-connector">
            <div class="pipe-line"><div class="pipe-dot"></div></div>
            <div class="pipe-step-label">Load</div>
          </div>
          <div class="pipe-node dest-node">
            <div class="pipe-icon">🏪</div>
            <span>Data Warehouse</span>
          </div>
        </div>
        <div class="transforms-list">
          <h3 class="transforms-title">Transformações sugeridas</h3>
          <div class="transform-items" id="transformItems"></div>
        </div>
        <div class="schedule-section">
          <h3 class="transforms-title">Agendamento</h3>
          <div class="schedule-options">
            <label class="sched-opt" onclick="selectSchedule(this, 'realtime')">
              <input type="radio" name="sched" value="realtime">
              <span class="sched-label">
                <span class="sched-icon">⚡</span>
                <span class="sched-name">Tempo Real</span>
                <span class="sched-sub">Streaming contínuo</span>
              </span>
            </label>
            <label class="sched-opt selected" onclick="selectSchedule(this, 'hourly')">
              <input type="radio" name="sched" value="hourly" checked>
              <span class="sched-label">
                <span class="sched-icon">🕐</span>
                <span class="sched-name">Por Hora</span>
                <span class="sched-sub">Atualização de 1h em 1h</span>
              </span>
            </label>
            <label class="sched-opt" onclick="selectSchedule(this, 'daily')">
              <input type="radio" name="sched" value="daily">
              <span class="sched-label">
                <span class="sched-icon">📅</span>
                <span class="sched-name">Diário</span>
                <span class="sched-sub">Toda meia-noite</span>
              </span>
            </label>
          </div>
        </div>
        <div class="step-actions">
          <button class="btn-secondary" onclick="goStep(3)">← Voltar</button>
          <button class="btn-primary" onclick="runETL()">
            Executar ETL
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- STEP 5: Done & Insights -->
    <section class="step" id="step-5">
      <div class="step-inner step-inner-wide">
        <div class="step-badge success-badge">✓ Configuração Concluída</div>
        <h1 class="step-title">Seus dados estão <span class="gradient-text">prontos!</span></h1>
        <p class="step-desc">O pipeline ETL foi criado com sucesso. Aqui está um preview dos seus dashboards e insights de IA.</p>

        <!-- Mini dashboard preview -->
        <div class="preview-grid">
          <div class="preview-card metric-card">
            <div class="metric-label">Registros Processados</div>
            <div class="metric-value" id="metricRecords">0</div>
            <div class="metric-change positive">↑ 18.6% vs mês anterior</div>
          </div>
          <div class="preview-card metric-card">
            <div class="metric-label">Qualidade dos Dados</div>
            <div class="metric-value" id="metricQuality">0%</div>
            <div class="metric-change positive">↑ 2% vs mês anterior</div>
          </div>
          <div class="preview-card metric-card">
            <div class="metric-label">Pipelines Ativos</div>
            <div class="metric-value" id="metricPipelines">0</div>
            <div class="metric-change neutral">Recém criado</div>
          </div>
          <div class="preview-card chart-card">
            <div class="chart-label">Volume de dados (30d)</div>
            <canvas id="previewChart" width="280" height="80"></canvas>
          </div>
        </div>

        <!-- AI Insights -->
        <div class="insights-section">
          <h3 class="insights-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Insights de IA
          </h3>
          <div class="insights-list" id="insightsList"></div>
        </div>

        <div class="final-actions">
          <button class="btn-primary btn-large" onclick="goToDashboard()">
            Abrir Dashboard
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button class="btn-secondary" onclick="resetOnboarding()">Recomeçar</button>
        </div>
      </div>
    </section>

  </div><!-- /steps-wrapper -->

  <!-- ETL Running overlay -->
  <div class="etl-overlay" id="etlOverlay" style="display:none">
    <div class="etl-modal">
      <div class="etl-spinner"></div>
      <h2 class="etl-title">Executando Pipeline ETL</h2>
      <div class="etl-stages" id="etlStages"></div>
      <div class="etl-progress-wrap">
        <div class="etl-progress-bar"><div class="etl-progress-fill" id="etlFill"></div></div>
        <span class="etl-percent" id="etlPercent">0%</span>
      </div>
    </div>
  </div>

</main>
    `

}