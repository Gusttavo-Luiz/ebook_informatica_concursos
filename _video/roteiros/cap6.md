# Videoaula — Capítulo 6: Armazenamento em Nuvem

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap6.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 6” e o título “Armazenamento em Nuvem”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Que bom ter você de volta à série Informática para Concursos!
- Neste capítulo seis, o tema é o Armazenamento em Nuvem.
- Você vai entender o que é a nuvem e quais são as suas características.
- Vai conhecer a virtualização e os modelos da nuvem.
- Depois, custos e acordos de serviço, sincronização e backup.
- E, para fechar, compartilhamento e segurança.
- Vamos lá?

## O que é a nuvem

### Cena 2 · `conceito`

**Visual:** Título “Computação em nuvem” com a etiqueta “cloud computing”. A definição aparece escrita e, em seguida, quatro blocos com ícones: Armazenamento, Processamento, Bancos de dados e Aplicativos. Depois, diagrama: uma grande nuvem ligada ao Datacenter do provedor; à esquerda, celular e notebook se conectam à nuvem por setas. Faixa “Acesso de qualquer lugar, com internet”.

**Narração:**

- Vamos começar pelo conceito. Computação em nuvem, ou cloud computing, é o fornecimento de recursos computacionais pela internet, sob demanda.
- Esses recursos podem ser armazenamento, processamento, bancos de dados e aplicativos.
- Em vez de guardar tudo só no computador, ou de manter servidores próprios, você usa a estrutura dos datacenters de provedores especializados.
- E acessa tudo de qualquer lugar e de qualquer dispositivo, desde que tenha conexão com a internet.

### Cena 3 · `exemplos`

**Visual:** Três cartões: Armazenamento (pasta: Google Drive, OneDrive, iCloud, Dropbox), Aplicativos (janela: Gmail, Microsoft 365) e Infraestrutura (servidor: AWS, Microsoft Azure, Google Cloud). Quadro âmbar “Pegadinha de banca”: arquivos da nuvem não ficam no navegador, e sim em servidores remotos.

**Narração:**

- Você já conhece vários serviços de nuvem. Para armazenar arquivos, temos o Google Drive, o OneDrive, o iCloud e o Dropbox.
- Como aplicativos, o Gmail e o Microsoft 365. E, como infraestrutura para empresas, a Amazon Web Services, o Microsoft Azure e o Google Cloud.
- Agora, atenção à pegadinha: os arquivos da nuvem não ficam armazenados no navegador.
- Eles ficam em servidores remotos, nos datacenters do provedor. O navegador é só uma das formas de acesso.

## Características

### Cena 4 · `caracteristicas`

**Visual:** Etiqueta “Definição do NIST (EUA)”. Cinco faixas entram uma por frase, com ícone: Autoatendimento sob demanda (controles), Amplo acesso pela rede (globo), Agrupamento de recursos (pessoas), Elasticidade rápida (setas para cima e para baixo) e Serviço medido (medidor). Na última frase, as faixas saem e entra um gráfico: a linha da demanda sobe e desce, e a linha dos recursos acompanha em degraus. Quadro azul “Resumo estratégico”.

**Narração:**

- Segundo o NIST, o instituto de padrões dos Estados Unidos, a nuvem tem cinco características essenciais.
- Autoatendimento sob demanda: o cliente contrata e ajusta recursos sozinho, sem atendentes.
- Amplo acesso pela rede: acesso pela internet, de computadores, celulares e tablets.
- Agrupamento de recursos: o provedor compartilha a mesma infraestrutura entre vários clientes.
- Elasticidade rápida: os recursos aumentam ou diminuem rapidamente, conforme a necessidade.
- E serviço medido: o uso é monitorado e cobrado conforme o consumo.
- A palavra-chave mais cobrada é escalabilidade, ou elasticidade: a nuvem cresce e diminui com a demanda, e você paga só pelo que consome.

## Vantagens e desvantagens

### Cena 5 · `vantagens`

**Visual:** Duas colunas: Vantagens (verde, com ✓) e Desvantagens (vermelha, com alerta). Os itens entram um a um, no momento em que são citados. Quadro verde “Memorize” no rodapé.

**Narração:**

- Vantagens da nuvem: você acessa de qualquer lugar e dispositivo, e não precisa comprar nem manter servidores.
- Ela cresce conforme a demanda, permite colaboração em tempo real, e a manutenção e as atualizações ficam com o provedor.
- Já as desvantagens: ela depende de conexão com a internet, e tem custos recorrentes de assinatura.
- Os dados ficam com terceiros, o que afeta a privacidade; é difícil migrar de provedor; e, se o provedor falhar, o serviço fica indisponível.
- Memorize: nuvem é acesso de qualquer lugar, escalabilidade e pagamento pelo uso. O principal ponto fraco é a dependência da internet.

## Virtualização

### Cena 6 · `virtualizacao`

**Visual:** Sem texto corrido: diagrama em camadas. Na base, a barra azul-marinho “Servidor físico”; acima, três caixas tracejadas “Máquina virtual 1, 2 e 3”; entre elas e o servidor entra a barra “Hypervisor — cria e controla as máquinas virtuais”. No fim, cada máquina virtual ganha a etiqueta de um cliente diferente.

**Narração:**

- Mas como um provedor atende tantos clientes ao mesmo tempo? Com a virtualização, a base da nuvem.
- Nos datacenters, cada servidor físico é dividido em várias máquinas virtuais.
- Quem cria e controla essas máquinas virtuais é um software chamado hypervisor.
- É isso que permite entregar recursos sob demanda a muitos clientes ao mesmo tempo.

### Cena 7 · `vm-conteiner`

**Visual:** Dois cartões lado a lado: Máquina virtual (janela) e Contêiner (contêiner de carga). As linhas de comparação entram uma a uma: o que contém, tamanho e início, isolamento e exemplos.

**Narração:**

- Além das máquinas virtuais, existem os contêineres.
- A máquina virtual contém um sistema operacional completo. Já o contêiner leva só a aplicação e suas dependências, e compartilha o kernel do sistema hospedeiro.
- Por isso, a máquina virtual é maior e leva mais tempo para iniciar; o contêiner é leve e inicia em segundos. Mas o isolamento da máquina virtual é mais forte.
- Exemplos de máquina virtual: VMware, Hyper-V, KVM e VirtualBox. De contêiner: o Docker, gerenciado em larga escala pelo Kubernetes.

## Modelos de serviço

### Cena 8 · `modelos`

**Visual:** Pilha de três camadas montada de baixo para cima: IaaS (azul forte), PaaS (azul médio) e SaaS (branca), cada uma com sigla, nome, descrição e exemplos, que entram quando citados. No fim, seta subindo ao lado da pilha (“menos o cliente gerencia”) e quadro verde “Memorize”: I → P → S.

**Narração:**

- Agora, um dos assuntos mais cobrados: os modelos de serviço. Eles formam uma pilha de três camadas.
- Na base, a IaaS, Infraestrutura como Serviço: o provedor oferece servidores virtuais, armazenamento e rede; o cliente gerencia o sistema operacional e os aplicativos.
- Exemplos: Amazon EC2, as máquinas virtuais do Azure e o Google Compute Engine.
- No meio, a PaaS, Plataforma como Serviço: uma plataforma pronta para desenvolver e hospedar aplicações.
- Ela já inclui sistema operacional, ambiente de execução e banco de dados; o cliente cuida só do código e dos dados. Como o Google App Engine e o Heroku.
- No topo, o SaaS, Software como Serviço: um aplicativo pronto, usado normalmente pelo navegador, sem instalar nem manter nada. Como o Gmail e o Google Docs.
- Memorize, de baixo para cima: Infraestrutura, Plataforma e Software. Quanto mais alto, menos o cliente precisa gerenciar.

### Cena 9 · `quem-gerencia`

**Visual:** Grade “quem gerencia”: linhas Aplicação e dados, Ambiente de execução e sistema operacional, e Servidores, armazenamento e rede; colunas IaaS, PaaS e SaaS entram uma por frase, com células azuis (provedor) e claras (cliente) e o público típico embaixo. No fim, faixa âmbar “Pegadinha de banca” com a pista de cada modelo sob a sua coluna.

**Narração:**

- A diferença entre os três está em quem gerencia cada parte.
- Na IaaS, o provedor cuida de servidores, armazenamento e rede; o resto é com o cliente. É o modelo das equipes de infraestrutura.
- Na PaaS, o provedor assume também o sistema operacional e o ambiente de execução. É o modelo dos desenvolvedores.
- No SaaS, o provedor gerencia tudo, e o cliente só usa. É o modelo do usuário final.
- Na prova, procure as pistas: aplicativo pronto, sem instalar, é SaaS. Máquinas virtuais, é IaaS. E ambiente para desenvolver aplicações, é PaaS.

### Cena 10 · `outros-modelos`

**Visual:** Cartão grande FaaS · serverless (raio): fluxo “evento → função de código → executa”, com ✓ “sem gerenciar servidores” e ✓ “paga só pelo tempo de execução”, e exemplos AWS Lambda e Azure Functions. À direita, cartões DaaS (monitor: área de trabalho virtual) e XaaS (nuvem: tudo como serviço).

**Narração:**

- Existem ainda outros modelos “como serviço”. O primeiro é o FaaS, também chamado de serverless.
- Nele, o cliente envia apenas funções de código, que são executadas quando um evento acontece. Ele não gerencia servidores e paga só pelo tempo de execução.
- Exemplos: AWS Lambda e Azure Functions.
- O DaaS é o desktop como serviço: uma área de trabalho virtual acessada pela internet. E XaaS, tudo como serviço, é o termo geral para qualquer recurso de TI oferecido como serviço.

## Modelos de implantação

### Cena 11 · `implantacao`

**Visual:** Quatro cartões, um por frase: Pública (nuvem com várias pessoas), Privada (nuvem com cadeado), Híbrida (duas nuvens ligadas) e Comunitária (nuvem com prédios). Na última frase, os cartões Privada e Comunitária pulsam e surge a faixa “Uso exclusivo de 1 órgão → privada · vários órgãos → comunitária”.

**Narração:**

- São quatro modelos de implantação. Na nuvem pública, a infraestrutura de um provedor é compartilhada por vários clientes pela internet, como na AWS, no Azure e no Google Cloud.
- A nuvem privada é de uso exclusivo de uma organização, no próprio local ou em um provedor.
- A nuvem híbrida combina a pública e a privada, com dados e aplicações transitando entre elas.
- E a nuvem comunitária é compartilhada por organizações com interesses em comum, como órgãos de um mesmo governo.
- Não confunda: nuvem de uso exclusivo de um único órgão é privada; a comunitária reúne várias organizações.

## Custos e acordos

### Cena 12 · `custos`

**Visual:** Cartões CAPEX (servidor; gráfico com uma barra alta de investimento inicial) e OPEX (medidor; barras mensais variando com o uso), com a faixa “Migrar para a nuvem: CAPEX → OPEX”. Depois, cartão SLA (documento) e três linhas de disponibilidade — 99%, 99,9% e 99,99% — com o tempo máximo fora do ar contando até 3,65 dias, 8,76 horas e 52,6 minutos.

**Narração:**

- Manter servidores próprios exige um investimento inicial em equipamentos: é o CAPEX, a despesa de capital.
- Na nuvem, você paga conforme o uso, como despesa operacional: é o OPEX. Migrar para a nuvem troca CAPEX por OPEX.
- Já o SLA, acordo de nível de serviço, define a disponibilidade garantida pelo provedor e as compensações em caso de descumprimento.
- Com 99% de disponibilidade, o serviço pode ficar fora do ar cerca de 3,65 dias por ano.
- Com 99,9%, cerca de 8,76 horas. E com 99,99%, cerca de 52,6 minutos.

### Cena 13 · `edge`

**Visual:** Área tracejada “Borda · perto da origem” com Dispositivo/sensor e Servidor local ligados por seta curta. À direita, o Datacenter distante, ligado por uma seta longa e apagada. Etiquetas “↓ latência” e “↓ tráfego”. Embaixo, três aplicações: Internet das Coisas, Veículos autônomos e Indústria.

**Narração:**

- Ainda neste bloco, a computação de borda, ou edge computing.
- Ela processa os dados perto de onde eles são gerados: no próprio dispositivo, em um sensor ou em um servidor local.
- Assim, não é preciso enviar tudo para um datacenter distante. Isso reduz a latência, que é o atraso na comunicação, e o tráfego na rede.
- Por isso, ela é importante na Internet das Coisas, nos veículos autônomos e na indústria.

## Sincronização e backup

### Cena 14 · `sincronizacao`

**Visual:** À esquerda, “Sincronização”: Computador ⇄ Nuvem ⇄ Celular, com etiquetas verdes “✓ versão nova” passando de um para outro. À direita, “Backup”: cofre com “Cópia de segurança — guardada separadamente”. Um sinal ≠ âmbar separa os dois. Na pegadinha, as etiquetas viram vermelhas “✗ apagado” em cadeia, enquanto o backup segue “✓ cópia preservada”. Quadro âmbar no rodapé.

**Narração:**

- Agora, dois conceitos que as bancas adoram confundir: sincronização e backup.
- A sincronização mantém a mesma versão dos arquivos em todos os dispositivos: o que você altera no computador aparece no celular, e vice-versa.
- Já o backup é uma cópia de segurança, guardada separadamente, para recuperar os dados em caso de perda.
- E aqui está a pegadinha: sincronização não é backup.
- Se um arquivo for apagado ou corrompido em um dispositivo, por exemplo por um ransomware, a sincronização replica o problema para os outros.
- Lixeira e histórico de versões, que muitos serviços oferecem por tempo limitado, não substituem um backup.

### Cena 15 · `sob-demanda`

**Visual:** Janela “Pasta no computador” com quatro arquivos marcados com uma nuvem (só na nuvem). Um arquivo é aberto: aparece a seta de download e a marca muda para ✓ (baixado). À direita, cartão “Espaço em disco” com a barra quase livre e, depois, os nomes do recurso: OneDrive — Arquivos Sob Demanda; Google Drive para computador — streaming.

**Narração:**

- Outro recurso comum é o arquivo sob demanda: o arquivo aparece na pasta do computador, mas só é baixado quando você o abre. Assim, você economiza espaço em disco.
- No OneDrive, ele se chama Arquivos Sob Demanda. No Google Drive para computador, é o streaming.

## Compartilhamento

### Cena 16 · `permissoes`

**Visual:** Três cartões de permissão: Leitor (olho: ✓ ver), Comentarista (balão: ✓ ver, ✓ comentar) e Editor (lápis: ✓ ver, ✓ comentar, ✓ editar), com ✗ no que não podem. Embaixo, as formas de compartilhar: Pessoas específicas (e-mail) e Por link; depois, cartão âmbar de alerta “Qualquer pessoa com o link”.

**Narração:**

- Na nuvem, você pode compartilhar arquivos e pastas com níveis diferentes de permissão.
- O leitor, ou visualizador, apenas vê o conteúdo.
- O comentarista vê e comenta, mas não edita. E o editor pode alterar o conteúdo.
- O compartilhamento pode ser feito com pessoas específicas, por e-mail, ou por link.
- Atenção: um link configurado como “qualquer pessoa com o link” dá acesso a quem recebê-lo, mesmo sem ter sido convidado.

### Cena 17 · `coautoria`

**Visual:** Documento compartilhado com dois cursores coloridos (A e B) escrevendo ao mesmo tempo; etiqueta “edição simultânea = coautoria”. À direita, as ferramentas: Google Docs, Planilhas e Apresentações Google, e Word, Excel e PowerPoint na web. Depois, cartão “Histórico de versões” com v1, v2, v3 e seta “restaurar”. Embaixo, três recursos: comentar, sugerir alterações e trabalhar offline.

**Narração:**

- Na nuvem, várias pessoas podem editar o mesmo documento ao mesmo tempo: é a edição simultânea, ou coautoria.
- Isso vale para o Google Docs, as Planilhas e as Apresentações, e para as versões web do Word, do Excel e do PowerPoint.
- Essas ferramentas guardam o histórico de versões, que permite ver e restaurar estados anteriores do documento.
- E dá para comentar, sugerir alterações e trabalhar offline: quando a conexão volta, tudo é sincronizado.

### Cena 18 · `suites`

**Visual:** Tabela Finalidade / Microsoft 365 / Google Workspace, com uma linha por item citado: Texto (Word × Documentos Google), Planilhas (Excel × Planilhas Google), Apresentações, E-mail e agenda, Reuniões e chat, Armazenamento.

**Narração:**

- Duas suítes de aplicativos na nuvem merecem atenção: o Microsoft 365 e o Google Workspace.
- Para textos, o Word equivale aos Documentos Google; e, para planilhas, o Excel equivale às Planilhas Google.
- Nas apresentações, PowerPoint e Apresentações Google. No e-mail e na agenda, Outlook, de um lado, e Gmail e Agenda, do outro.
- Nas reuniões e no chat, Teams contra Meet e Chat. E, no armazenamento, OneDrive e SharePoint contra o Google Drive.

## Principais serviços

### Cena 19 · `servicos`

**Visual:** Quatro cartões, um por frase: Google Drive (15 GB), OneDrive (5 GB), iCloud (5 GB) e Dropbox (2 GB), com o número contando e o destaque de cada um. Nota “valores podem mudar”. Quadro âmbar “Pegadinha de banca”: o Google Drive não funciona apenas no navegador.

**Narração:**

- Agora, os principais serviços de armazenamento e o espaço gratuito de cada um.
- O Google Drive oferece 15 gigabytes, divididos com o Gmail e o Google Fotos, e é integrado ao Docs, às Planilhas e às Apresentações.
- O OneDrive, da Microsoft, oferece 5 gigabytes e é integrado ao Windows e ao Microsoft 365.
- O iCloud, da Apple, também tem 5 gigabytes, e faz o backup e a sincronização do iPhone, do iPad e do Mac.
- E o Dropbox oferece dois gigabytes, com sincronização multiplataforma.
- Esses valores podem mudar. E atenção: o Google Drive não funciona apenas no navegador. Todos têm aplicativos para computador e celular, que sincronizam os arquivos.

## Segurança na nuvem

### Cena 20 · `seguranca`

**Visual:** Faixa de responsabilidade compartilhada: Provedor (servidor: protege a infraestrutura) e Você (pessoa: contas, senhas e permissões). Abaixo, seis boas práticas entram em pares: dois fatores, senhas fortes, revisar compartilhamentos, evitar links públicos, criptografia e backup independente. Depois, cartão LGPD (balança, Lei nº 13.709/2018) e quadro azul “Resumo estratégico”.

**Narração:**

- Por fim, a segurança, que na nuvem é compartilhada: o provedor protege a infraestrutura, e você cuida das contas, senhas e permissões que concede.
- Então, ative a autenticação em dois fatores, e use senhas fortes e diferentes para cada serviço.
- Revise com quem os arquivos estão compartilhados, e evite links públicos para documentos sensíveis.
- Prefira serviços com criptografia dos dados em trânsito e armazenados, e mantenha um backup independente dos dados importantes.
- No Brasil, o tratamento de dados pessoais, inclusive na nuvem, deve respeitar a LGPD, a Lei Geral de Proteção de Dados: Lei nº 13.709, de 2018.
- Resumindo: autenticação em dois fatores, criptografia, controle de acesso e backup independente.

## Revisão

### Cena 21 · `revisao`

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: Conceito, Elasticidade, Virtualização, Modelos de serviço, Implantação e custos, Arquivos e Segurança.

**Narração:**

- Hora de revisar o que você aprendeu.
- Nuvem é o fornecimento de recursos pela internet, sob demanda, com os arquivos em servidores remotos.
- A característica mais cobrada é a elasticidade: cresce e diminui com a demanda, e você paga pelo uso.
- A virtualização é a base: o hypervisor cria as máquinas virtuais, e o contêiner é mais leve.
- IaaS entrega infraestrutura; PaaS, a plataforma para desenvolver; e SaaS, o aplicativo pronto.
- A nuvem pode ser pública, privada, híbrida ou comunitária. CAPEX vira OPEX, e o SLA garante a disponibilidade.
- Sincronização não é backup. E o leitor só vê, o comentarista comenta e o editor altera.
- Para se proteger: dois fatores, criptografia, controle de acesso e backup independente.

### Cena 22 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 7 — Segurança da Informação” na cor do capítulo 7. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar a segurança da informação.
- Até lá, e bons estudos!
