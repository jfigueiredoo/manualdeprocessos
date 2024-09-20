// Dados simulados
const data = {
    "Políticas Gerais da Empresa": {
        "Diretor de Compliance": {
            "Implementação de Políticas Internas": [
                "A01: Avaliar necessidades de novas políticas",
                "A02: Redigir rascunho das políticas",
                "A03: Revisar com a alta administração",
                "A04: Apresentar ao conselho para aprovação",
                "A05: Comunicar políticas aprovadas aos colaboradores",
                "A06: Implementar política e monitorar conformidade"
            ],
            "Auditorias Internas": [
                "A01: Definir escopo da auditoria",
                "A02: Selecionar departamentos para auditoria",
                "A03: Realizar entrevistas com gestores",
                "A04: Coletar e revisar documentos relevantes",
                "A05: Identificar não conformidades",
                "A06: Preparar relatório e apresentar à diretoria"
            ]
        },
        "Gerente Administrativo": {
            "Gestão de Documentação Corporativa": [
                "A01: Receber solicitações de acesso a documentos",
                "A02: Conferir permissões de acesso dos solicitantes",
                "A03: Fornecer acesso ou cópias dos documentos",
                "A04: Manter histórico de acessos e alterações"
            ],
            "Política de Segurança da Informação": [
                "A01: Garantir que os colaboradores sigam as diretrizes de segurança",
                "A02: Realizar treinamentos periódicos sobre segurança de dados",
                "A03: Auditar sistemas de informação para verificar conformidade",
                "A04: Implementar melhorias baseadas nos resultados da auditoria"
            ]
        }
    },
    "Política de Recursos Humanos": {
        "Gerente de Recursos Humanos": {
            "Política de Admissão e Demissão": [
                "A01: Verificar necessidade de novas contratações com os gestores",
                "A02: Publicar vagas conforme os requisitos aprovados",
                "A03: Garantir que o processo de recrutamento siga a legislação vigente",
                "A04: Realizar desligamentos conforme política de demissão, com feedback formal"
            ],
            "Gestão de Horas e Férias": [
                "A01: Monitorar registro de ponto eletrônico dos colaboradores",
                "A02: Verificar acumulação de horas extras e compensações",
                "A03: Agendar férias conforme solicitação e disponibilidade",
                "A04: Garantir que as férias sejam concedidas dentro dos prazos legais"
            ]
        },
        "Assistente de RH": {
            "Política de Treinamento e Desenvolvimento": [
                "A01: Identificar necessidades de treinamento entre os colaboradores",
                "A02: Planejar e agendar treinamentos internos e externos",
                "A03: Avaliar feedback dos colaboradores após os treinamentos",
                "A04: Revisar programas de treinamento anualmente"
            ],
            "Política de Benefícios": [
                "A01: Gerenciar e revisar pacotes de benefícios oferecidos pela empresa",
                "A02: Comunicar aos colaboradores as mudanças nos benefícios",
                "A03: Coordenar com fornecedores de benefícios (plano de saúde, vale-refeição, etc.)",
                "A04: Garantir que todos os colaboradores tenham acesso aos benefícios conforme elegibilidade"
            ]
        }
    },
    "Política de Conduta e Ética": {
        "Responsável pelo Código de Ética": {
            "Implementação do Código de Ética": [
                "A01: Criar e revisar o Código de Ética anualmente",
                "A02: Comunicar as regras de ética a todos os colaboradores",
                "A03: Implementar canais de denúncia anônima",
                "A04: Monitorar cumprimento do código e punir infrações"
            ],
            "Investigação de Denúncias Internas": [
                "A01: Receber e avaliar denúncias",
                "A02: Realizar investigações internas com equipe designada",
                "A03: Proteger identidade do denunciante",
                "A04: Tomar ações disciplinares, se necessário, de acordo com os resultados da investigação"
            ]
        },
        "Gestor de Cultura Corporativa": {
            "Promover a Cultura Organizacional": [
                "A01: Planejar eventos internos para fortalecer a cultura da empresa",
                "A02: Garantir que os valores da empresa sejam integrados nas ações diárias",
                "A03: Comunicar as metas e visões da empresa para novos colaboradores",
                "A04: Medir o engajamento dos colaboradores em relação à cultura organizacional"
            ],
            "Política de Diversidade e Inclusão": [
                "A01: Desenvolver políticas que incentivem a diversidade no ambiente de trabalho",
                "A02: Promover treinamentos sobre inclusão e respeito à diversidade",
                "A03: Avaliar o ambiente de trabalho periodicamente quanto à diversidade",
                "A04: Tomar medidas corretivas em casos de discriminação"
            ]
        }
    }
};

// Funções para carregar as áreas, cargos, processos e detalhes
function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area.charAt(0).toUpperCase() + area.slice(1);
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('processos').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (area) {
        const cargos = Object.keys(data[area]);
        cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.text = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
        document.getElementById('processos').disabled = true;
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (cargo) {
        const processos = Object.keys(data[area][cargo]);
        processos.forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.text = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');
    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            detalhesList.appendChild(li);
        });

        const fluxogramaUrl = `img/fluxogramas/${area}/${cargo}/${processo}.png`;
        document.getElementById('fluxograma-imagem').src = fluxogramaUrl;
        document.getElementById('fluxograma').style.display = 'block';
    }
}

// Função para carregar as áreas ao carregar a página
document.addEventListener('DOMContentLoaded', loadAreas);

