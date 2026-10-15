# Videoaula — Capítulo 3: Internet e Navegadores

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap3.js`. Edite o `.js` e gere este arquivo de novo.

**Duração:** 18:18 · **Cenas:** 26

## Abertura

### Cena 1 · `abertura` (0:05–0:32)

**Visual:** Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 3” e o título “Internet e Navegadores”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. No “Vamos lá?”, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Que bom ter você de volta!
- Neste capítulo: Internet e Navegadores, um dos temas mais cobrados nas provas.
- Você vai ver os tipos de rede, as topologias e os equipamentos.
- Os meios de transmissão, o Wi-Fi e os modelos OSI e TCP/IP.
- Os endereços IP, o DNS, os protocolos e o e-mail.
- E, para fechar, a web, os navegadores e a busca. Vamos lá?

## Redes de computadores

### Cena 2 · `abrangencia` (0:32–1:10)

**Visual:** Definição de rede com três nós ligados por uma linha tracejada (Arquivos, Impressoras, Internet). Depois, círculos concêntricos crescem do centro — PAN (fone), LAN (prédio), MAN (cidade), WAN (globo) — enquanto à direita entra um cartão por tipo, com o nome em inglês e o exemplo. Faixa “LAN sem fio = WLAN (Wi-Fi)”.

**Narração:**

- Uma rede de computadores é um conjunto de dispositivos interligados que compartilham dados e recursos, como arquivos, impressoras e o acesso à internet.
- Pela abrangência, a menor é a PAN, a rede pessoal: poucos metros, como o celular ligado a um fone Bluetooth.
- A LAN é a rede local, de um prédio, escritório ou casa, como a de uma repartição pública. Sem fio, ela se chama WLAN, normalmente com Wi-Fi.
- A MAN é a rede metropolitana, de uma cidade, como a que liga as unidades de uma prefeitura.
- E a WAN alcança países e continentes, como a própria internet.

### Cena 3 · `intranet` (1:10–1:44)

**Visual:** Três cartões: Internet (globo), Intranet (prédio, com cadeado) e Extranet (pessoas), com seta da intranet para a extranet. Quadro âmbar “Pegadinha de banca” sobre a intranet; no fim, uma seta âmbar com a etiqueta VPN liga a internet à intranet.

**Narração:**

- A internet é a rede mundial e pública, baseada no conjunto de protocolos TCP/IP.
- A intranet é a rede privada de uma organização: usa as mesmas tecnologias da internet, mas com acesso restrito aos colaboradores.
- A extranet é a parte da intranet liberada a usuários externos autorizados, como fornecedores e parceiros.
- Pegadinha: a intranet usa, sim, os protocolos da internet, como TCP/IP e HTTP, e o navegador. O que muda é o acesso, que é restrito. E dá para acessá-la de fora, por uma VPN.

### Cena 4 · `topologias` (1:44–2:12)

**Visual:** Quatro cartões, um por frase, cada um com um minidiagrama desenhado: Barramento (cabo único), Anel (círculo), Estrela (nós ligados a um switch central, com o selo “a mais usada”) e Malha (vários caminhos).

**Narração:**

- Na topologia em barramento, todos ficam ligados a um único cabo, e uma falha nesse cabo derruba a rede.
- No anel, cada dispositivo se liga ao próximo, fechando um círculo, e os dados passam por vários nós.
- Na estrela, todos se ligam a um equipamento central, o switch. É a mais usada, mas, se o centro falhar, a rede para.
- E na malha, vários caminhos interligam os dispositivos: alta tolerância a falhas, mas custo maior.

### Cena 5 · `equipamentos` (2:12–3:05)

**Visual:** Grade de seis cartões com ícones, cada um na frase que o cita: Placa de rede (MAC), Hub, Switch, Roteador, Modem e Ponto de acesso. Embaixo, três cartões de padrões: Ethernet, Wi-Fi e Bluetooth; depois eles saem e entra o quadro verde “Memorize”.

**Narração:**

- A placa de rede conecta o computador à rede e tem um endereço físico único: o endereço MAC.
- O hub, equipamento antigo, repete os dados para todas as portas. Já o switch envia só para a porta do destinatário, usando o MAC.
- O roteador interliga redes diferentes e escolhe o caminho dos pacotes usando o endereço IP.
- O modem converte o sinal da operadora, de fibra, cabo ou telefone, para a rede do usuário. E o ponto de acesso cria a rede Wi-Fi.
- Padrões mais citados: Ethernet, a rede cabeada, IEEE 802.3, com conector RJ-45; Wi-Fi, a rede sem fio, 802.11; e Bluetooth, de curto alcance.
- Memorize: hub espalha para todos; switch entrega a quem deve receber, na rede local; roteador liga redes diferentes, como a sua casa e a internet.

## Meios de transmissão

### Cena 6 · `meios` (3:05–3:46)

**Visual:** Quatro cartões, um por meio: Par trançado (cabo com conector RJ-45), Fibra óptica (fios de luz), Cabo coaxial (corte em camadas) e Sem fio (sinal Wi-Fi). Abaixo da fibra surgem as etiquetas “monomodo → longas distâncias” e “multimodo → distâncias menores”.

**Narração:**

- O par trançado leva sinais elétricos em pares de fios trançados, com conector RJ-45. É o mais usado em redes locais, com até cerca de 100 metros por cabo.
- A fibra óptica transmite pulsos de luz: tem altíssima velocidade, alcança longas distâncias e é imune a interferência eletromagnética.
- Ela pode ser monomodo, para longas distâncias, ou multimodo, para distâncias menores.
- O cabo coaxial tem condutor central blindado e é usado na TV e na internet a cabo.
- E os meios sem fio usam ondas de rádio: Wi-Fi, Bluetooth, redes móveis 4G e 5G, e satélite.

### Cena 7 · `wifi` (3:46–4:32)

**Visual:** Três colunas. Padrões: barras crescentes Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac) e Wi-Fi 6 (802.11ax). Frequência: cartões 2,4 GHz (barra de alcance longa) e 5 GHz (barra curta, mais rápida). Segurança: WEP em vermelho (✗), WPA2 e WPA3 em verde (✓). Quadro âmbar sobre o SSID.

**Narração:**

- No Wi-Fi, os padrões são o Wi-Fi 4, ou 802.11n; o Wi-Fi 5, ou 802.11ac; e o Wi-Fi 6, ou 802.11ax. Cada geração é mais rápida e eficiente.
- A frequência de 2,4 GHz tem maior alcance e atravessa melhor as paredes, mas sofre mais interferência.
- A de 5 GHz é mais rápida, porém tem menor alcance.
- Na segurança, o WEP é obsoleto e inseguro. Use WPA2 ou, melhor, WPA3, com senha forte.
- Pegadinha: esconder o nome da rede, o SSID, não protege, porque a rede continua detectável. O que protege é WPA2 ou WPA3 com senha forte.

### Cena 8 · `acesso` (4:32–5:08)

**Visual:** Cinco nós de acesso à internet: ADSL (telefone), Cabo (coaxial), Fibra FTTH (em destaque), Rede móvel (celular) e Satélite. Depois, título “Modos de transmissão” e três linhas: Simplex (antena → TV, uma seta), Half-duplex (setas que se alternam) e Full-duplex (setas nos dois sentidos ao mesmo tempo).

**Narração:**

- Para chegar até você, o ADSL usa a linha telefônica: é antigo e mais lento. A internet a cabo usa a rede de TV a cabo.
- A fibra até a residência, o FTTH, é hoje a mais comum nas cidades. Há ainda a rede móvel, 4G e 5G, e o satélite, para locais remotos.
- Quanto ao sentido, no modo simplex a transmissão vai em um só sentido, como no rádio e na TV.
- No half-duplex, vai nos dois sentidos, mas um de cada vez, como no rádio comunicador, o walkie-talkie.
- E no full-duplex, nos dois sentidos ao mesmo tempo, como numa ligação telefônica.

## Modelos OSI e TCP/IP

### Cena 9 · `osi` (5:08–6:06)

**Visual:** Sete espaços tracejados numerados formam uma pilha. As camadas do OSI entram de baixo para cima, cada uma na frase que a explica, com função e exemplos (Física: cabos, hub; Enlace: MAC, switch; Rede: IP, roteador; Transporte: TCP, UDP; Sessão; Apresentação: TLS; Aplicação: HTTP, SMTP, FTP, DNS). Quadro verde “Memorize: FERTSAA” à direita, com as iniciais destacadas.

**Narração:**

- O modelo OSI, da ISO, é um modelo de referência teórico que divide a comunicação em sete camadas.
- Na base, a camada física transmite os bits pelo meio: cabos, conectores, sinais e o hub.
- A de enlace liga dispositivos vizinhos, com o endereço MAC: é a camada da Ethernet e do switch.
- A de rede faz o endereçamento lógico e o roteamento: é a camada do IP e do roteador.
- A de transporte faz a entrega fim a fim, a segmentação e o controle de erros, com TCP e UDP.
- A de sessão abre, mantém e encerra a comunicação. A de apresentação cuida do formato, da compressão e da criptografia, como o TLS.
- No topo, a de aplicação oferece serviços aos programas, como HTTP, SMTP, FTP e DNS.
- Memorize, da camada 1 para a 7: física, enlace, rede, transporte, sessão, apresentação e aplicação. FERTSAA.

### Cena 10 · `tcpip` (6:06–6:35)

**Visual:** À esquerda, as 7 camadas do OSI em coluna. À direita, as 4 camadas do TCP/IP entram uma a uma, cada uma da altura das camadas OSI que agrupa, com linhas de ligação e etiquetas de protocolos: Aplicação (HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, SSH), Transporte (TCP, UDP), Internet (IP, ICMP) e Acesso à rede (Ethernet, Wi-Fi).

**Narração:**

- Na prática, a internet usa o modelo TCP/IP, com apenas quatro camadas.
- A de aplicação reúne aplicação, apresentação e sessão do OSI. Nela estão HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS e SSH.
- A de transporte equivale à do OSI, com TCP e UDP. A de internet equivale à de rede, com IP e ICMP.
- E a de acesso à rede junta enlace e física, com Ethernet e Wi-Fi.

### Cena 11 · `tcp-udp` (6:35–7:13)

**Visual:** Dois cartões. TCP: pacotes 1, 2, 3, 4 chegam em ordem, com ✓, e itens (orientado à conexão, garante entrega e ordem, mais lento, web/e-mail/arquivos). UDP: pacotes 1, 3, ✗, 2 (fora de ordem e um perdido), e itens (sem conexão, não garante, mais rápido, streaming/jogos/voz/DNS). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- TCP ou UDP? O TCP é orientado à conexão: estabelece a conexão antes de enviar.
- Ele garante a entrega e a ordem dos pacotes, reenviando os perdidos. Por isso, é mais lento. É usado em páginas web, e-mail e arquivos.
- O UDP é sem conexão e não garante entrega nem ordem. Em troca, é mais rápido, com menos sobrecarga.
- Ele aparece no streaming ao vivo, nos jogos online, nas chamadas de voz e no DNS.
- Pegadinha: quem garante a entrega é o TCP, não o UDP. O UDP é usado quando a velocidade importa mais do que a confiabilidade.

## Endereçamento IP

### Cena 12 · `ipv4-ipv6` (7:13–8:03)

**Visual:** Um envelope (pacote) viaja até um notebook com a etiqueta “endereço IP”. Depois, dois cartões: IPv4 (32 bits, 192.168.0.1, 0 a 255, contador até ≈ 4,3 bilhões · esgotados) e IPv6 (128 bits, endereço hexadecimal em 8 grupos, praticamente ilimitados). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Cada dispositivo numa rede TCP/IP recebe um endereço IP, que o identifica e permite que os pacotes cheguem ao destino.
- O IPv4 tem 32 bits, escritos como quatro números decimais de 0 a 255, separados por pontos. Por exemplo: 192.168.0.1.
- São cerca de 4,3 bilhões de endereços, já esgotados.
- O IPv6 tem 128 bits, em oito grupos hexadecimais separados por dois-pontos, e uma quantidade praticamente ilimitada de endereços.
- Pegadinha: o IPv6 substitui o IPv4, e não o TCP. E o número 256 nunca aparece em um IPv4, porque cada parte vai de 0 a 255.

### Cena 13 · `ip-privado` (8:03–8:34)

**Visual:** Roteador ligado à Internet, com a etiqueta “IP público · do provedor”. Depois, uma área tracejada “Rede local · IPs privados” com notebook, celular e computador (192.168.0.2, .3, .4) e as faixas privadas. As linhas dos aparelhos convergem no roteador (etiqueta NAT); por fim, a etiqueta DHCP e os IPs dos aparelhos pulsam.

**Narração:**

- O IP público é visível na internet e é fornecido pelo provedor.
- O IP privado é usado nas redes locais e não é roteado na internet. As faixas privadas são 10, 172.16 a 172.31, e 192.168.
- Vários aparelhos compartilham um único IP público graças ao NAT, um recurso do roteador.
- E quem distribui os IPs automaticamente na rede é o DHCP.

### Cena 14 · `mascara` (8:34–9:40)

**Visual:** Octetos do IP 192.168.0.1 sobre a máscara 255.255.255.0 (/24); chaves marcam “rede” (três primeiros) e “dispositivo” (último). Cartões Gateway padrão (roteador) e 127.0.0.1 · loopback. Depois, título “Classes do IPv4”: tabela A, B e C, linha a linha; cartões das classes D (multicast) e E (experimental) e faixa sobre o CIDR.

**Narração:**

- A máscara de sub-rede indica que parte do IP é a rede e que parte é o dispositivo. Na máscara 255.255.255.0, ou /24, os três primeiros números são da rede.
- O gateway padrão é o roteador que leva o tráfego para fora da rede local, normalmente para a internet.
- E o 127.0.0.1, o loopback ou localhost, é o próprio computador.
- As classes do IPv4 também caem. Na classe A, o primeiro número vai de 1 a 126, com máscara padrão /8.
- Na classe B, vai de 128 a 191, com /16. E na classe C, de 192 a 223, com /24.
- As classes D, de 224 a 239, multicast, e E, de 240 a 255, experimental, não endereçam computadores.
- Hoje se usam máscaras flexíveis, o CIDR, mas as classes ainda caem em prova.

### Cena 15 · `comandos` (9:40–10:09)

**Visual:** Janela de terminal escura; cada comando aparece como uma linha digitada, com a explicação ao lado: ping (ICMP), ipconfig / ip addr, tracert / traceroute, nslookup e netstat.

**Narração:**

- Para diagnosticar a rede, o ping testa se um endereço responde e mede o tempo de resposta, usando o ICMP.
- O ipconfig, no Windows, ou ip addr, no Linux, mostra o IP, a máscara e o gateway do computador.
- O tracert, no Windows, ou traceroute, no Linux, mostra o caminho: os roteadores até o destino.
- O nslookup consulta o DNS para descobrir o IP de um nome. E o netstat lista as conexões de rede ativas.

## DNS e protocolos

### Cena 16 · `dns-url` (10:09–11:00)

**Visual:** Fluxo em três nós com setas: Nome (www.site.gov.br) → DNS (traduz para IP) → Navegador (exibe a página); os nós pulsam na ordem. Depois, barra de endereço com https://www.gov.br/receitafederal/pt-br: cada parte ganha sublinhado colorido e rótulo (protocolo, domínio, 1º nível do Brasil, caminho). Embaixo, cinco cartões de domínios brasileiros.

**Narração:**

- Ao digitar o nome de um site, entra em ação o DNS, o sistema de nomes de domínio, que traduz nomes fáceis de lembrar em endereços IP.
- Sem ele, seria preciso digitar o IP de cada site. Você digita o nome, o DNS traduz para o IP, e o navegador exibe a página.
- O endereço completo de um recurso na web é a URL. Veja suas partes.
- O https é o protocolo. O www.gov.br é o nome do domínio, resolvido pelo DNS. O ponto br é o domínio de primeiro nível do Brasil. E o resto é o caminho até a página.
- Outros domínios brasileiros: gov.br, governo; edu.br, ensino; com.br, comercial; org.br, organizações sem fins lucrativos; e jus.br, Judiciário.

### Cena 17 · `portas` (11:00–11:57)

**Visual:** Grade de dez blocos “protocolo + porta”, cada um entrando quando é citado: HTTP 80, HTTPS 443, FTP 20·21, SSH 22 (verde), Telnet 23 (vermelho), SMTP 25·587, POP3 110·995, IMAP 143·993, DNS 53, DHCP 67·68. Quadro verde “Memorize: SMTP = Sua Mensagem Tá Partindo”.

**Narração:**

- Cada protocolo tem uma porta padrão. O HTTP leva páginas web sem criptografia, na porta 80. O HTTPS é o HTTP com TLS, o cadeado, na porta 443.
- O FTP transfere arquivos, nas portas 20 e 21. O SSH faz acesso remoto seguro, na porta 22. Já o Telnet, na 23, faz acesso remoto sem criptografia: é inseguro.
- O SMTP envia e-mails, na porta 25, ou 587 para envio autenticado.
- O POP3 recebe na porta 110, ou 995 com criptografia. O IMAP, na 143, ou 993 com criptografia.
- E o DNS usa a porta 53, e o DHCP, as portas 67 e 68.
- Memorize: SMTP é Sua Mensagem Tá Partindo, ou seja, envio. POP3 e IMAP servem para receber.

## Correio eletrônico

### Cena 18 · `email` (11:57–12:53)

**Visual:** Painel POP3: envelopes saem do servidor e vão para o notebook (“baixa e, por padrão, remove do servidor”). Painel IMAP: servidor com envelope, ícone de sincronização, celular e notebook. Cartões Webmail e Cliente de e-mail. Depois, janela “Nova mensagem” com os campos Para, Cc e Cco, e ao lado quem vê cada um (olho aberto / olho riscado). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Para receber e-mails, há dois protocolos. O POP3 baixa as mensagens para o dispositivo e, por padrão, as remove do servidor. É útil para guardar tudo em um só computador.
- No IMAP, as mensagens ficam no servidor, e o estado delas, como lida, apagada ou pasta, é sincronizado. Ideal para quem usa o e-mail no celular e no computador.
- O e-mail pode ser lido por um webmail, no navegador, como o Gmail na web, ou por um cliente instalado, como o Outlook e o Thunderbird.
- Ao escrever, o campo Para recebe os destinatários principais.
- No Cc, com cópia, vão os destinatários em cópia, e todos veem quem foi copiado.
- Já no Cco, com cópia oculta, os demais destinatários não veem quem recebeu.
- Pegadinha: SMTP envia; POP3 e IMAP recebem. E quem está em Cco vê os destinatários do Para e do Cc, mas ninguém vê quem está em Cco.

## Web e serviços

### Cena 19 · `web` (12:53–13:35)

**Visual:** Um nó “Web · WWW” surge; em volta dele cresce o círculo tracejado “Internet”, com outros serviços (E-mail, Arquivos, Outros). À direita, três faixas HTML (estrutura), CSS (aparência) e JavaScript (interatividade), e o cartão Web 2.0. No fim, a coluna da direita dá lugar ao quadro âmbar “internet ≠ web”.

**Narração:**

- A World Wide Web, a WWW, é o sistema de páginas ligadas por hiperlinks, acessadas pelo navegador via HTTP ou HTTPS.
- Ela é um dos serviços da internet, ao lado do e-mail, da transferência de arquivos e de outros.
- As páginas são estruturadas em HTML, uma linguagem de marcação. O CSS cuida da aparência, e o JavaScript, da interatividade.
- Na Web 2.0, os usuários passaram a produzir conteúdo e interagir: redes sociais, blogs e wikis.
- Pegadinha: internet e web não são sinônimos. A internet é a rede física e lógica mundial; a web é um serviço sobre ela.

### Cena 20 · `deep-web` (13:35–14:08)

**Visual:** Iceberg na água, revelado em três partes com rótulos: Surface web (ponta, indexada), Deep web (parte submersa: e-mails, bancos de dados, login) e Dark web (fundo escuro, Tor). Depois, dois cartões: VoIP (celular – ondas – globo – ondas – celular) e P2P (computadores ligados entre si, sem servidor central; BitTorrent).

**Narração:**

- Pense num iceberg. A surface web é a parte indexada pelos buscadores, a ponta que todos veem.
- A deep web é o conteúdo não indexado, como e-mails, bancos de dados e áreas protegidas por login.
- A dark web é uma pequena parte da deep web, acessível só com ferramentas específicas, como o Tor.
- Outro serviço da internet é o VoIP, voz sobre IP: chamadas de voz pela internet.
- E no P2P, ponto a ponto, os computadores trocam arquivos diretamente, sem servidor central, como no BitTorrent.

## Navegadores

### Cena 21 · `recursos` (14:08–15:03)

**Visual:** Etiquetas com os navegadores (Chrome, Edge, Firefox, Safari) e cinco cartões de recursos: Histórico, Favoritos, Cookies, Cache e Extensões. Depois, janela escura da navegação privativa com os nomes em cada navegador e a faixa “ao fechar, apaga” (histórico, cookies, formulários). Quadro âmbar e três olhos: provedor, rede da empresa e sites ainda veem o acesso.

**Narração:**

- Navegadores, ou browsers, são os programas que acessam a web: Google Chrome, Microsoft Edge, Mozilla Firefox e Safari.
- O histórico registra as páginas visitadas, e os favoritos guardam páginas para acesso rápido.
- Cookies são pequenos arquivos que os sites gravam no navegador para lembrar login, preferências e carrinho. Também podem rastrear o usuário.
- O cache guarda cópias de partes das páginas no computador, para carregar mais rápido. E as extensões adicionam funções ao navegador.
- A navegação privativa, anônima no Chrome, InPrivate no Edge e privativa no Firefox, apaga histórico, cookies e dados de formulários da sessão ao fechar a janela.
- Pegadinha: ela não deixa você invisível. Provedor, rede da empresa e sites visitados ainda identificam o acesso. E downloads e favoritos criados continuam salvos.

### Cena 22 · `atalhos` (15:03–15:29)

**Visual:** Grade de dez blocos com teclas desenhadas e a ação de cada atalho, entrando na frase que o cita: Ctrl+T, Ctrl+W, Ctrl+Shift+T, Ctrl+Shift+N, Ctrl+Shift+P, Ctrl+H, Ctrl+J, Ctrl+D, Ctrl+F e F5.

**Narração:**

- Ctrl + T abre uma nova aba, Ctrl + W fecha a aba atual, e Ctrl + Shift + T reabre a última aba fechada.
- Ctrl + Shift + N abre a janela anônima no Chrome e a InPrivate no Edge; no Firefox, a privativa é Ctrl + Shift + P.
- Ctrl + H abre o histórico, Ctrl + J, os downloads, e Ctrl + D adiciona aos favoritos.
- Ctrl + F localiza um texto na página, e F5 recarrega.

### Cena 23 · `privacidade` (15:29–16:18)

**Visual:** Seis cartões com ícones, um por recurso: Limpar dados (Ctrl+Shift+Delete), Bloqueador de pop-ups, Gerenciador de senhas, Sincronização, Cookies de terceiros e Aviso “Não seguro”. Quadro azul “Resumo estratégico” sobre o cadeado e o HTTPS.

**Narração:**

- Ctrl + Shift + Delete limpa os dados de navegação: histórico, cookies, cache e senhas salvas.
- O bloqueador de pop-ups impede janelas que você não pediu. O gerenciador de senhas guarda, preenche e sugere senhas fortes.
- Com a sincronização, ao entrar com uma conta, favoritos, histórico e senhas ficam disponíveis em outros dispositivos.
- Cookies de terceiros vêm de domínios diferentes do site visitado, geralmente para publicidade e rastreamento, e podem ser bloqueados.
- O aviso Não seguro indica página sem HTTPS: nela, não digite senhas nem dados pessoais.
- Atenção: o cadeado e o HTTPS indicam conexão criptografada, não um site confiável. Sites de phishing também podem usar HTTPS.

## Mecanismos de busca

### Cena 24 · `busca` (16:18–17:02)

**Visual:** Caixa de busca com lupa e “concurso público”, etiquetas Google, Bing e DuckDuckGo. Depois, tabela de operadores (aspas, menos, site:, filetype:, OR, asterisco, intitle:) com exemplos, linha a linha. No fim, quadro âmbar e dois cartões: Chrome = navegador ≠ Google = buscador.

**Narração:**

- Mecanismos de busca, como Google, Bing e DuckDuckGo, indexam páginas da web e permitem encontrá-las por palavras-chave.
- Operadores refinam a busca. As aspas buscam a frase exata, e o sinal de menos exclui um termo: jaguar, menos carro.
- O operador site: busca só em um site ou domínio, e o filetype: busca um tipo de arquivo, como PDF.
- O OR busca um termo ou outro, o asterisco é um curinga para palavras desconhecidas, e o intitle: procura o termo no título da página.
- Pegadinha: o Google é um mecanismo de busca, não um navegador. O navegador da empresa é o Chrome. Navegador e buscador são coisas diferentes.

## Revisão

### Cena 25 · `revisao` (17:02–18:03)

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: Redes, Equipamentos, Transmissão, Modelos, Endereços, Protocolos e Web e navegadores.

**Narração:**

- Hora de revisar o que você aprendeu.
- PAN, LAN, MAN e WAN vão do pessoal ao mundial, e a intranet usa as tecnologias da internet, com acesso restrito.
- Hub espalha, switch entrega pelo MAC, e roteador liga redes diferentes pelo IP.
- A fibra usa luz e é imune a interferência; o full-duplex vai nos dois sentidos ao mesmo tempo.
- O OSI tem sete camadas; o TCP/IP, quatro. O TCP garante a entrega; o UDP é mais rápido.
- O IPv4 tem 32 bits; o IPv6, 128. O DHCP distribui os IPs, o DNS traduz nomes, e 127.0.0.1 é o próprio computador.
- O HTTPS usa a porta 443. O SMTP envia, o POP3 baixa, o IMAP sincroniza, e ninguém vê quem está em Cco.
- E a web é um serviço da internet, a navegação anônima não torna ninguém invisível, e o Google é buscador, não navegador.

### Cena 26 · `encerramento` (18:03–18:16)

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 4 — Pacote Office” na cor do capítulo 4. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar o Pacote Office.
- Até lá, e bons estudos!
