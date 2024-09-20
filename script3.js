// Dados simulados
const data = {
    "Gestão de Informações de Clientes": {
        "Gerente de Relacionamento com o Cliente": {
            "Atualização de Dados do Cliente": [
                "A01: Solicitar informações atualizadas ao cliente periodicamente",
                "A02: Verificar alterações nos dados cadastrais (endereço, número de telefone, etc.)",
                "A03: Atualizar sistema de CRM com as novas informações",
                "A04: Confirmar com o cliente se todas as alterações foram aplicadas corretamente"
            ],
            "Visualização de Informações do Cliente": [
                "A01: Acessar o sistema de CRM",
                "A02: Buscar o cliente pelo nome ou ID",
                "A03: Visualizar dados como endereço, número de contato, serviços prestados e formas de pagamento",
                "A04: Garantir que os dados estejam atualizados e completos"
            ]
        },
        "Assistente de Relacionamento": {
            "Coleta de Informações do Cliente": [
                "A01: Coletar informações básicas do cliente no primeiro contato",
                "A02: Inserir dados no sistema de CRM",
                "A03: Solicitar documentos adicionais, se necessário",
                "A04: Confirmar a entrada correta dos dados no sistema"
            ],
            "Manutenção de Contato com o Cliente": [
                "A01: Verificar periodicamente os dados de contato dos clientes",
                "A02: Enviar lembretes ou solicitações de atualização de dados",
                "A03: Registrar interações com o cliente no sistema de CRM",
                "A04: Manter o histórico de contatos e verificações para referência futura"
            ]
        }
    },
    "Serviços Prestados e Pagamentos": {
        "Gerente de Operações": {
            "Gestão de Serviços Prestados": [
                "A01: Verificar os serviços que o cliente contratou",
                "A02: Atualizar o status dos serviços prestados no sistema",
                "A03: Garantir que o cliente esteja satisfeito com os serviços realizados",
                "A04: Informar o cliente sobre novos serviços que podem ser de interesse"
            ],
            "Controle de Pagamentos de Clientes": [
                "A01: Verificar as faturas pendentes no sistema",
                "A02: Enviar lembretes de pagamento para clientes",
                "A03: Confirmar o recebimento de pagamento e emitir recibo",
                "A04: Atualizar o status do pagamento no sistema de gestão financeira"
            ]
        },
        "Assistente de Operações": {
            "Envio de Faturas e Cobranças": [
                "A01: Gerar faturas para os serviços prestados",
                "A02: Enviar faturas via e-mail ou outros meios acordados",
                "A03: Verificar o recebimento da fatura pelo cliente",
                "A04: Monitorar o status da cobrança até o pagamento"
            ],
            "Registro de Formas de Pagamento": [
                "A01: Identificar a forma de pagamento preferida do cliente (cartão, boleto, transferência)",
                "A02: Registrar essa forma de pagamento no sistema",
                "A03: Verificar se há atualizações nas formas de pagamento",
                "A04: Manter o cliente informado sobre quaisquer mudanças nas opções de pagamento disponíveis"
            ]
        }
    },
    "Suporte ao Cliente": {
        "Supervisor de Suporte": {
            "Atendimento a Dúvidas sobre Serviços": [
                "A01: Receber solicitações de suporte relacionadas aos serviços prestados",
                "A02: Analisar as questões apresentadas pelos clientes",
                "A03: Fornecer soluções ou encaminhar para o setor responsável",
                "A04: Acompanhar o caso até a resolução e confirmar com o cliente a satisfação"
            ],
            "Suporte a Pagamentos": [
                "A01: Receber consultas sobre problemas com pagamento",
                "A02: Verificar o histórico de pagamentos do cliente no sistema",
                "A03: Auxiliar na resolução de problemas de pagamento (falhas, reembolsos, etc.)",
                "A04: Confirmar com o cliente se o problema foi resolvido"
            ]
        },
        "Assistente de Suporte": {
            "Registro de Reclamações de Clientes": [
                "A01: Receber reclamações dos clientes sobre serviços ou pagamentos",
                "A02: Registrar a reclamação no sistema de atendimento ao cliente",
                "A03: Encaminhar para o departamento responsável",
                "A04: Acompanhar o caso até sua resolução e atualizar o cliente"
            ],
            "Monitoramento de Satisfação do Cliente": [
                "A01: Enviar pesquisas de satisfação após a conclusão dos serviços",
                "A02: Coletar feedback dos clientes",
                "A03: Analisar os resultados das pesquisas e identificar áreas de melhoria",
                "A04: Comunicar os resultados para a gerência"
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

