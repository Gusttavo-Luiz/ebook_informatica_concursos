# Videoaula — Capítulo 3: Internet e Navegadores

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap3.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 3” e o título “Internet e Navegadores”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. No “Vamos lá?”, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Que bom ter você de volta!
- Neste capítulo, vamos estudar Internet e Navegadores, um dos temas mais cobrados nas provas.
- Você vai conhecer os tipos de rede, as topologias e os equipamentos que ligam tudo.
- Vai ver os meios de transmissão, o Wi-Fi e os modelos OSI e TCP/IP.
- Depois, vamos entender os endereços IP, o DNS, os protocolos e o correio eletrônico.
- E, para fechar, a web, os navegadores e os mecanismos de busca. Vamos lá?

## Redes de computadores

### Cena 2 · `abrangencia`

**Visual:** Definição de rede com três nós ligados por uma linha tracejada (Arquivos, Impressoras, Internet). Depois, círculos concêntricos crescem do centro — PAN (fone), LAN (prédio), MAN (cidade), WAN (globo) — enquanto à direita entra um cartão por tipo, com o nome em inglês e o exemplo. Faixa “LAN sem fio = WLAN (Wi-Fi)”.

**Narração:**

- Uma rede de computadores é um conjunto de dispositivos interligados que compartilham dados e recursos, como arquivos, impressoras e o acesso à internet.
- Pela abrangência, a menor é a PAN, a rede pessoal: alcança poucos metros, como o celular ligado a um fone Bluetooth.
- A LAN é a rede local, de um prédio, escritório ou residência, como a rede de uma repartição pública. Sem fio, ela se chama WLAN, normalmente com Wi-Fi.
- A MAN é a rede metropolitana: cobre uma cidade, como a rede que liga as unidades de uma prefeitura.
- E a WAN alcança países e continentes. O maior exemplo é a própria internet.

### Cena 3 · `intranet`

**Visual:** Três cartões: Internet (globo), Intranet (prédio, com cadeado) e Extranet (pessoas), com seta da intranet para a extranet. Quadro âmbar “Pegadinha de banca” sobre a intranet; no fim, uma seta âmbar com a etiqueta VPN liga a internet à intranet.

**Narração:**

- A internet é a rede mundial e pública, baseada no conjunto de protocolos TCP/IP.
- A intranet é a rede privada de uma organização. Ela usa as mesmas tecnologias da internet, como TCP/IP, HTTP e navegador, mas com acesso restrito aos colaboradores.
- Já a extranet é a parte da intranet liberada para usuários externos autorizados, como fornecedores e parceiros.
- Pegadinha: dizer que a intranet não usa os protocolos da internet está errado. O que muda é o acesso, que é restrito. E dá até para acessar a intranet de fora, por uma VPN.

### Cena 4 · `topologias`

**Visual:** Quatro cartões, um por frase, cada um com um minidiagrama desenhado: Barramento (cabo único), Anel (círculo), Estrela (nós ligados a um switch central, com o selo “a mais usada”) e Malha (vários caminhos).

**Narração:**

- A topologia é o desenho das ligações da rede. No barramento, todos ficam ligados a um único cabo, e uma falha nesse cabo derruba a rede.
- No anel, cada dispositivo se liga ao próximo, fechando um círculo, e os dados passam por vários nós.
- Na estrela, todos se ligam a um equipamento central, o switch. É a mais usada, mas, se o equipamento central falhar, a rede para.
- E na malha, vários caminhos interligam os dispositivos: alta tolerância a falhas, mas custo maior.

### Cena 5 · `equipamentos`

**Visual:** Grade de seis cartões com ícones, cada um na frase que o cita: Placa de rede (MAC), Hub, Switch, Roteador, Modem e Ponto de acesso. Embaixo, três cartões de padrões: Ethernet, Wi-Fi e Bluetooth; depois eles saem e entra o quadro verde “Memorize”.

**Narração:**

- Agora, os equipamentos. A placa de rede conecta o computador à rede, e cada uma tem um endereço físico único: o endereço MAC.
- O hub, um equipamento antigo, repete os dados para todas as portas. Já o switch envia os dados só para a porta do destinatário, usando o endereço MAC.
- O roteador interliga redes diferentes e escolhe o caminho dos pacotes usando o endereço IP.
- O modem converte o sinal da operadora, de fibra, cabo ou telefone, para a rede do usuário. E o ponto de acesso cria a rede sem fio Wi-Fi.
- Os padrões de conexão mais citados são a Ethernet, rede cabeada do padrão IEEE 802.3, com conector RJ-45; o Wi-Fi, rede sem fio do padrão 802.11; e o Bluetooth, de curto alcance.
- Memorize: o hub espalha para todos; o switch entrega para quem deve receber, dentro da rede local; e o roteador liga redes diferentes, como a sua casa e a internet.

## Meios de transmissão

### Cena 6 · `meios`

**Visual:** Quatro cartões, um por meio: Par trançado (cabo com conector RJ-45), Fibra óptica (fios de luz), Cabo coaxial (corte em camadas) e Sem fio (sinal Wi-Fi). Abaixo da fibra surgem as etiquetas “monomodo → longas distâncias” e “multimodo → distâncias menores”.

**Narração:**

- Os dados viajam por diferentes meios. O par trançado leva sinais elétricos em pares de fios trançados, com conector RJ-45. É o mais usado em redes locais, com até cerca de 100 metros por cabo.
- A fibra óptica transmite pulsos de luz: tem altíssima velocidade, alcança longas distâncias e é imune a interferência eletromagnética.
- Ela pode ser monomodo, para longas distâncias, ou multimodo, para distâncias menores.
- O cabo coaxial tem um condutor central blindado e é usado na TV a cabo e na internet por cabo.
- E os meios sem fio usam ondas de rádio: Wi-Fi, Bluetooth, redes móveis 4G e 5G, e satélite.

### Cena 7 · `wifi`

**Visual:** Três colunas. Padrões: barras crescentes Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac) e Wi-Fi 6 (802.11ax). Frequência: cartões 2,4 GHz (barra de alcance longa) e 5 GHz (barra curta, mais rápida). Segurança: WEP em vermelho (✗), WPA2 e WPA3 em verde (✓). Quadro âmbar sobre o SSID.

**Narração:**

- No Wi-Fi, os padrões mais citados são o Wi-Fi 4, ou 802.11n; o Wi-Fi 5, ou 802.11ac; e o Wi-Fi 6, ou 802.11ax. Cada geração é mais rápida e eficiente.
- A frequência de 2,4 GHz tem maior alcance e atravessa melhor as paredes, mas sofre mais interferência.
- A de 5 GHz é mais rápida, porém tem menor alcance.
- Na segurança, o WEP é obsoleto e inseguro. Use o WPA2 ou, de preferência, o WPA3, com senha forte.
- Pegadinha: esconder o nome da rede, o SSID, não é uma medida de segurança eficaz, porque a rede continua detectável. O que protege é a criptografia WPA2 ou WPA3 com senha forte.

### Cena 8 · `acesso`

**Visual:** Cinco nós de acesso à internet: ADSL (telefone), Cabo (coaxial), Fibra FTTH (em destaque), Rede móvel (celular) e Satélite. Depois, título “Modos de transmissão” e três linhas: Simplex (antena → TV, uma seta), Half-duplex (setas que se alternam) e Full-duplex (setas nos dois sentidos ao mesmo tempo).

**Narração:**

- E como a internet chega até você? O ADSL usa a linha telefônica e é uma tecnologia antiga e mais lenta. A internet a cabo usa a rede de TV a cabo.
- A fibra óptica até a residência, o FTTH, é hoje a mais comum nas cidades. Há ainda a rede móvel, 4G e 5G, e o satélite, que atende locais remotos.
- Quanto ao sentido, a transmissão pode ser simplex: só em um sentido, como na transmissão de rádio e TV.
- Half-duplex: nos dois sentidos, mas um de cada vez, como no rádio comunicador, o walkie-talkie.
- Ou full-duplex: nos dois sentidos ao mesmo tempo, como em uma ligação telefônica.

## Modelos OSI e TCP/IP

### Cena 9 · `osi`

**Visual:** Sete espaços tracejados numerados formam uma pilha. As camadas do OSI entram de baixo para cima, cada uma na frase que a explica, com função e exemplos (Física: cabos, hub; Enlace: MAC, switch; Rede: IP, roteador; Transporte: TCP, UDP; Sessão; Apresentação: TLS; Aplicação: HTTP, SMTP, FTP, DNS). Quadro verde “Memorize: FERTSAA” à direita, com as iniciais destacadas.

**Narração:**

- Para organizar a comunicação em rede, existe o modelo OSI, da ISO. Ele é um modelo de referência teórico, que divide a comunicação em sete camadas.
- Na base, a camada física transmite os bits pelo meio físico: cabos, conectores, sinais e o hub.
- A de enlace cuida da comunicação entre dispositivos vizinhos, com o endereço MAC. É a camada da Ethernet e do switch.
- A camada de rede faz o endereçamento lógico e o roteamento. É a camada do IP e do roteador.
- A de transporte faz a entrega fim a fim, a segmentação e o controle de erros, com o TCP e o UDP.
- A de sessão abre, mantém e encerra a comunicação. E a de apresentação cuida do formato, da compressão e da criptografia, como o TLS.
- No topo, a camada de aplicação oferece os serviços usados pelos programas, como HTTP, SMTP, FTP e DNS.
- Memorize, da camada 1 para a 7: física, enlace, rede, transporte, sessão, apresentação e aplicação. A sigla é FERTSAA.

### Cena 10 · `tcpip`

**Visual:** À esquerda, as 7 camadas do OSI em coluna. À direita, as 4 camadas do TCP/IP entram uma a uma, cada uma da altura das camadas OSI que agrupa, com linhas de ligação e etiquetas de protocolos: Aplicação (HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, SSH), Transporte (TCP, UDP), Internet (IP, ICMP) e Acesso à rede (Ethernet, Wi-Fi).

**Narração:**

- Na prática, a internet funciona com o modelo TCP/IP, que agrupa essas funções em apenas quatro camadas.
- A camada de aplicação do TCP/IP reúne aplicação, apresentação e sessão do OSI. É onde ficam HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS e SSH.
- A de transporte equivale à do OSI, com o TCP e o UDP. E a camada de internet equivale à de rede, com o IP e o ICMP.
- Por fim, a camada de acesso à rede junta enlace e física, com a Ethernet e o Wi-Fi.

### Cena 11 · `tcp-udp`

**Visual:** Dois cartões. TCP: pacotes 1, 2, 3, 4 chegam em ordem, com ✓, e itens (orientado à conexão, garante entrega e ordem, mais lento, web/e-mail/arquivos). UDP: pacotes 1, 3, ✗, 2 (fora de ordem e um perdido), e itens (sem conexão, não garante, mais rápido, streaming/jogos/voz/DNS). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Na camada de transporte, a comparação favorita das bancas: TCP contra UDP. O TCP é orientado à conexão: estabelece a conexão antes de enviar.
- Ele garante a entrega e a ordem dos pacotes, reenviando os perdidos. Por isso, é mais lento, e é usado em páginas web, e-mail e transferência de arquivos.
- O UDP é sem conexão e não garante entrega nem ordem. Em troca, é mais rápido, com menos sobrecarga.
- Ele é usado no streaming ao vivo, nos jogos online, nas chamadas de voz e no DNS.
- Pegadinha: o UDP não garante a entrega dos pacotes; quem garante é o TCP. O UDP é usado quando a velocidade importa mais do que a confiabilidade.

## Endereçamento IP

### Cena 12 · `ipv4-ipv6`

**Visual:** Um envelope (pacote) viaja até um notebook com a etiqueta “endereço IP”. Depois, dois cartões: IPv4 (32 bits, 192.168.0.1, 0 a 255, contador até ≈ 4,3 bilhões · esgotados) e IPv6 (128 bits, endereço hexadecimal em 8 grupos, praticamente ilimitados). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Cada dispositivo conectado a uma rede TCP/IP recebe um endereço IP, que o identifica e permite que os pacotes cheguem ao destino.
- O IPv4 tem 32 bits, escritos como quatro números decimais de 0 a 255, separados por pontos. Por exemplo: 192.168.0.1.
- São cerca de 4,3 bilhões de endereços, e eles já se esgotaram.
- O IPv6 tem 128 bits, escritos em oito grupos hexadecimais separados por dois-pontos. A quantidade de endereços é praticamente ilimitada.
- Pegadinha: o IPv6 substitui o IPv4, e não o TCP. E o número 256 nunca aparece em um IPv4, porque cada parte vai de 0 a 255.

### Cena 13 · `ip-privado`

**Visual:** Roteador ligado à Internet, com a etiqueta “IP público · do provedor”. Depois, uma área tracejada “Rede local · IPs privados” com notebook, celular e computador (192.168.0.2, .3, .4) e as faixas privadas. As linhas dos aparelhos convergem no roteador (etiqueta NAT); por fim, a etiqueta DHCP e os IPs dos aparelhos pulsam.

**Narração:**

- O IP público é visível na internet e é fornecido pelo provedor.
- O IP privado é usado dentro das redes locais e não é roteado na internet. As faixas privadas começam com 10, de 172.16 a 172.31, e 192.168.
- E como vários aparelhos usam a internet com um único IP público? Com o NAT, um recurso do roteador que permite que eles compartilhem esse IP.
- E quem distribui os endereços IP automaticamente para os dispositivos da rede é o protocolo DHCP.

### Cena 14 · `mascara`

**Visual:** Octetos do IP 192.168.0.1 sobre a máscara 255.255.255.0 (/24); chaves marcam “rede” (três primeiros) e “dispositivo” (último). Cartões Gateway padrão (roteador) e 127.0.0.1 · loopback. Depois, título “Classes do IPv4”: tabela A, B e C, linha a linha; cartões das classes D (multicast) e E (experimental) e faixa sobre o CIDR.

**Narração:**

- A máscara de sub-rede indica qual parte do IP identifica a rede e qual identifica o dispositivo. A máscara 255.255.255.0, ou /24, indica que os três primeiros números são da rede.
- O gateway padrão é o endereço do roteador que leva o tráfego para fora da rede local, normalmente para a internet.
- E o endereço 127.0.0.1, chamado de loopback ou localhost, representa o próprio computador.
- As provas também cobram as classes do IPv4. Na classe A, o primeiro número vai de 1 a 126, com máscara padrão /8.
- Na classe B, vai de 128 a 191, com /16. E na classe C, de 192 a 223, com /24.
- As classes D, de 224 a 239, para multicast, e E, de 240 a 255, experimental, não são usadas para endereçar computadores.
- Hoje as redes usam máscaras flexíveis, o CIDR, mas as classes continuam aparecendo em provas.

### Cena 15 · `comandos`

**Visual:** Janela de terminal escura; cada comando aparece como uma linha digitada, com a explicação ao lado: ping (ICMP), ipconfig / ip addr, tracert / traceroute, nslookup e netstat.

**Narração:**

- Para diagnosticar a rede, existem alguns comandos. O ping testa se um endereço responde e mede o tempo de resposta, usando o protocolo ICMP.
- O ipconfig, no Windows, ou ip addr, no Linux, mostra o IP, a máscara e o gateway do computador.
- O tracert, no Windows, ou traceroute, no Linux, mostra o caminho, ou seja, os roteadores até o destino.
- O nslookup consulta o DNS para descobrir o IP de um nome. E o netstat lista as conexões de rede ativas.

## DNS e protocolos

### Cena 16 · `dns-url`

**Visual:** Fluxo em três nós com setas: Nome (www.site.gov.br) → DNS (traduz para IP) → Navegador (exibe a página); os nós pulsam na ordem. Depois, barra de endereço com https://www.gov.br/receitafederal/pt-br: cada parte ganha sublinhado colorido e rótulo (protocolo, domínio, 1º nível do Brasil, caminho). Embaixo, cinco cartões de domínios brasileiros.

**Narração:**

- Quando você digita o nome de um site, entra em ação o DNS, o sistema de nomes de domínio. Ele traduz nomes fáceis de lembrar em endereços IP.
- Sem ele, seria preciso digitar o IP de cada site. Então: você digita o nome, o DNS traduz para o IP, e o navegador exibe a página.
- O endereço completo de um recurso na web é a URL. Veja as partes deste exemplo.
- O https é o protocolo. O www.gov.br é o nome do domínio, resolvido pelo DNS. O ponto br é o domínio de primeiro nível do Brasil. E o resto é o caminho até a página.
- Outros domínios brasileiros: gov.br, governo; edu.br, ensino; com.br, comercial; org.br, organizações sem fins lucrativos; e jus.br, Judiciário.

### Cena 17 · `portas`

**Visual:** Grade de dez blocos “protocolo + porta”, cada um entrando quando é citado: HTTP 80, HTTPS 443, FTP 20·21, SSH 22 (verde), Telnet 23 (vermelho), SMTP 25·587, POP3 110·995, IMAP 143·993, DNS 53, DHCP 67·68. Quadro verde “Memorize: SMTP = Sua Mensagem Tá Partindo”.

**Narração:**

- Cada protocolo de aplicação tem sua porta padrão. O HTTP transfere páginas web sem criptografia, na porta 80. O HTTPS é o HTTP com criptografia TLS, o cadeado do navegador, na porta 443.
- O FTP transfere arquivos, nas portas 20 e 21. O SSH faz acesso remoto seguro, com criptografia, na porta 22. Já o Telnet faz acesso remoto sem criptografia, na porta 23, e é inseguro.
- Para o e-mail, o SMTP envia mensagens, na porta 25, ou 587 para envio autenticado.
- O POP3 recebe na porta 110, ou 995 com criptografia. E o IMAP, na porta 143, ou 993 com criptografia.
- Fechando a lista: o DNS usa a porta 53, e o DHCP, as portas 67 e 68.
- Memorize: SMTP é Sua Mensagem Tá Partindo, ou seja, envio. POP3 e IMAP servem para receber.

## Correio eletrônico

### Cena 18 · `email`

**Visual:** Painel POP3: envelopes saem do servidor e vão para o notebook (“baixa e, por padrão, remove do servidor”). Painel IMAP: servidor com envelope, ícone de sincronização, celular e notebook. Cartões Webmail e Cliente de e-mail. Depois, janela “Nova mensagem” com os campos Para, Cc e Cco, e ao lado quem vê cada um (olho aberto / olho riscado). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Para receber e-mails, existem dois protocolos. O POP3 baixa as mensagens para o dispositivo e, na configuração padrão, as remove do servidor. É útil para guardar os e-mails só em um computador.
- No IMAP, as mensagens ficam no servidor, e o estado delas, como lida, apagada ou pasta, é sincronizado. É o ideal para quem usa o mesmo e-mail no celular e no computador.
- Você pode ler o e-mail por um webmail, no navegador, como o Gmail na web, ou por um cliente de e-mail instalado, como o Outlook e o Thunderbird.
- Ao escrever uma mensagem, o campo Para recebe os destinatários principais.
- No Cc, com cópia, vão os destinatários em cópia, e todos veem quem foi copiado.
- Já no Cco, com cópia oculta, os demais destinatários não veem quem recebeu.
- Pegadinha: as bancas trocam os papéis. O SMTP envia; o POP3 e o IMAP recebem. E quem está em Cco vê os destinatários do Para e do Cc, mas ninguém vê quem está em Cco.

## Web e serviços

### Cena 19 · `web`

**Visual:** Um nó “Web · WWW” surge; em volta dele cresce o círculo tracejado “Internet”, com outros serviços (E-mail, Arquivos, Outros). À direita, três faixas HTML (estrutura), CSS (aparência) e JavaScript (interatividade), e o cartão Web 2.0. No fim, a coluna da direita dá lugar ao quadro âmbar “internet ≠ web”.

**Narração:**

- A World Wide Web, ou WWW, é o sistema de páginas ligadas por hiperlinks, acessadas pelos navegadores via HTTP ou HTTPS.
- Ela é um dos serviços da internet, ao lado do e-mail, da transferência de arquivos e de outros.
- As páginas são estruturadas em HTML, uma linguagem de marcação. O CSS cuida da aparência, e o JavaScript, da interatividade.
- Na Web 2.0, os usuários passaram a produzir conteúdo e interagir, com redes sociais, blogs e wikis.
- Pegadinha: internet e web não são sinônimos. A internet é a rede física e lógica mundial; a web é um serviço que funciona sobre ela.

### Cena 20 · `deep-web`

**Visual:** Iceberg na água, revelado em três partes com rótulos: Surface web (ponta, indexada), Deep web (parte submersa: e-mails, bancos de dados, login) e Dark web (fundo escuro, Tor). Depois, dois cartões: VoIP (celular – ondas – globo – ondas – celular) e P2P (computadores ligados entre si, sem servidor central; BitTorrent).

**Narração:**

- Pense na web como um iceberg. A surface web é a parte indexada pelos buscadores: a ponta que todo mundo vê.
- A deep web é o conteúdo não indexado, como e-mails, bancos de dados e áreas protegidas por login.
- E a dark web é uma pequena parte da deep web, acessível só com ferramentas específicas, como o Tor.
- A internet também oferece outros serviços. O VoIP, voz sobre IP, faz chamadas de voz pela internet.
- E no P2P, ponto a ponto, os computadores trocam arquivos diretamente entre si, sem um servidor central, como no BitTorrent.

## Navegadores

### Cena 21 · `recursos`

**Visual:** Etiquetas com os navegadores (Chrome, Edge, Firefox, Safari) e cinco cartões de recursos: Histórico, Favoritos, Cookies, Cache e Extensões. Depois, janela escura da navegação privativa com os nomes em cada navegador e a faixa “ao fechar, apaga” (histórico, cookies, formulários). Quadro âmbar e três olhos: provedor, rede da empresa e sites ainda veem o acesso.

**Narração:**

- Os navegadores, ou browsers, são os programas que acessam as páginas da web: Google Chrome, Microsoft Edge, Mozilla Firefox e Safari.
- O histórico registra as páginas visitadas, e os favoritos guardam páginas para acesso rápido.
- Os cookies são pequenos arquivos que os sites gravam no navegador para lembrar login, preferências e itens do carrinho. Também podem ser usados para rastrear o usuário.
- O cache guarda cópias de partes das páginas no computador, para carregar mais rápido. E as extensões são complementos que adicionam funções.
- Na navegação privativa, chamada de anônima no Chrome, InPrivate no Edge e privativa no Firefox, o navegador apaga, ao fechar a janela, o histórico, os cookies e os dados de formulários daquela sessão.
- Pegadinha: ela não deixa você invisível. O provedor, a rede da empresa e os sites visitados continuam podendo identificar o acesso. E os downloads e favoritos criados continuam salvos.

### Cena 22 · `atalhos`

**Visual:** Grade de dez blocos com teclas desenhadas e a ação de cada atalho, entrando na frase que o cita: Ctrl+T, Ctrl+W, Ctrl+Shift+T, Ctrl+Shift+N, Ctrl+Shift+P, Ctrl+H, Ctrl+J, Ctrl+D, Ctrl+F e F5.

**Narração:**

- Agora, os atalhos. Ctrl + T abre uma nova aba, Ctrl + W fecha a aba atual, e Ctrl + Shift + T reabre a última aba fechada.
- Ctrl + Shift + N abre a janela anônima no Chrome e a InPrivate no Edge. No Firefox, a janela privativa é Ctrl + Shift + P.
- Ctrl + H abre o histórico, Ctrl + J mostra os downloads, e Ctrl + D adiciona a página aos favoritos.
- Ctrl + F localiza um texto na página, e F5 recarrega a página.

### Cena 23 · `privacidade`

**Visual:** Seis cartões com ícones, um por recurso: Limpar dados (Ctrl+Shift+Delete), Bloqueador de pop-ups, Gerenciador de senhas, Sincronização, Cookies de terceiros e Aviso “Não seguro”. Quadro azul “Resumo estratégico” sobre o cadeado e o HTTPS.

**Narração:**

- Para a privacidade, Ctrl + Shift + Delete abre a limpeza dos dados de navegação, que apaga histórico, cookies, cache e senhas salvas.
- O bloqueador de pop-ups impede que janelas surjam sem você pedir. E o gerenciador de senhas guarda e preenche senhas, e pode sugerir senhas fortes.
- Com a sincronização, ao entrar com uma conta, seus favoritos, histórico e senhas ficam disponíveis em outros dispositivos.
- Os cookies de terceiros são criados por domínios diferentes do site visitado, geralmente para publicidade e rastreamento, e podem ser bloqueados nas configurações.
- O aviso Não seguro indica uma página sem HTTPS: nela, não digite senhas nem dados pessoais.
- E atenção: o cadeado e o HTTPS indicam que a conexão é criptografada, não que o site é confiável. Sites de phishing também podem usar HTTPS.

## Mecanismos de busca

### Cena 24 · `busca`

**Visual:** Caixa de busca com lupa e “concurso público”, etiquetas Google, Bing e DuckDuckGo. Depois, tabela de operadores (aspas, menos, site:, filetype:, OR, asterisco, intitle:) com exemplos, linha a linha. No fim, quadro âmbar e dois cartões: Chrome = navegador ≠ Google = buscador.

**Narração:**

- Os mecanismos de busca, como Google, Bing e DuckDuckGo, indexam páginas da web e permitem encontrá-las por palavras-chave.
- Operadores refinam a pesquisa. As aspas buscam a frase exata, e o sinal de menos exclui um termo, como em jaguar, menos carro.
- O operador site: busca só em um site ou domínio, e o filetype: busca um tipo de arquivo, como PDF.
- O OR busca um termo ou outro, o asterisco é um curinga para palavras desconhecidas, e o intitle: procura o termo no título da página.
- Pegadinha: o Google não é um navegador. Ele é um mecanismo de busca; o navegador da empresa é o Chrome. Navegador e buscador são coisas diferentes.

## Revisão

### Cena 25 · `revisao`

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: Redes, Equipamentos, Transmissão, Modelos, Endereços, Protocolos e Web e navegadores.

**Narração:**

- Hora de revisar o que você aprendeu.
- Redes: PAN, LAN, MAN e WAN vão do alcance pessoal ao mundial, e a intranet usa as tecnologias da internet, com acesso restrito.
- Equipamentos: o hub espalha, o switch entrega usando o MAC, e o roteador liga redes diferentes usando o IP.
- Transmissão: a fibra óptica usa luz e é imune a interferência, e o full-duplex transmite nos dois sentidos ao mesmo tempo.
- Modelos: o OSI tem sete camadas, e o TCP/IP, quatro. O TCP garante a entrega; o UDP é mais rápido.
- Endereços: o IPv4 tem 32 bits, e o IPv6, 128. O DHCP distribui os IPs, o DNS traduz nomes, e 127.0.0.1 é o próprio computador.
- Protocolos: o HTTPS usa a porta 443. O SMTP envia, o POP3 baixa, o IMAP sincroniza, e ninguém vê quem está em Cco.
- E a web é um serviço da internet, a navegação anônima não deixa ninguém invisível, e o Google é buscador, não navegador.

### Cena 26 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 4 — Pacote Office” na cor do capítulo 4. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar o Pacote Office.
- Até lá, e bons estudos!
