# Videoaula — Capítulo 7: Segurança da Informação

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap7.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 7” e o título “Segurança da Informação”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Neste capítulo, vamos estudar um dos temas mais cobrados em concursos: a Segurança da Informação.
- Você vai ver princípios, riscos e normas, e aprender a diferenciar malware, golpes e ataques.
- Depois, vamos entender a criptografia, a assinatura e o certificado digital.
- E, para fechar, autenticação, ferramentas de proteção, backup e a LGPD. Vamos lá?

## Conceito e princípios

### Cena 2 · `conceito`

**Visual:** Escudo grande à esquerda e a definição ao lado; quatro pílulas com o que a segurança evita (acesso não autorizado, alteração indevida, destruição, indisponibilidade). Embaixo, “Em qualquer formato”: arquivos digitais, papel e conversas. Depois, quadro âmbar “Pegadinha de banca” e dois cartões: segurança da informação (qualquer formato) × segurança cibernética (meios digitais).

**Narração:**

- Segurança da informação é o conjunto de práticas, políticas e tecnologias que protegem a informação.
- Ela protege contra acesso não autorizado, alteração indevida, destruição e indisponibilidade.
- E vale para a informação em qualquer formato: arquivos digitais, documentos em papel e até conversas.
- Cuidado com a pegadinha: ela não protege só dados digitais. A proteção específica dos meios digitais costuma ser chamada de segurança cibernética.

### Cena 3 · `cid`

**Visual:** Triângulo da tríade CID desenhado à esquerda, com os vértices C, I e D. À direita, três cartões entram um por frase — Confidencialidade, Integridade e Disponibilidade —, cada um com o que garante e seus mecanismos; o vértice correspondente pulsa.

**Narração:**

- A base de tudo é a tríade CID, ou CIA, em inglês: confidencialidade, integridade e disponibilidade.
- A confidencialidade garante que só pessoas autorizadas acessem a informação, com senhas, criptografia e controle de acesso.
- A integridade garante que a informação não foi alterada indevidamente, com hash e assinatura digital.
- E a disponibilidade garante que ela esteja acessível quando necessária, com backup, redundância, nobreak e proteção contra DDoS.

### Cena 4 · `complementares`

**Visual:** Dois cartões: Autenticidade (impressão digital; login, biometria, certificado) e Não repúdio (caneta; assinatura digital). Depois, quadro verde “Memorize” com CIDA e as letras C, I, D e A em blocos, mais “+ não repúdio”. Por fim, quadro âmbar: a tríade clássica é só C, I e D — o A e o não repúdio esmaecem e uma chave marca “tríade clássica”.

**Narração:**

- Há também dois princípios complementares. A autenticidade garante que a origem e a identidade são verdadeiras: quem diz ser é quem realmente é. Por exemplo: login com senha, biometria e certificado digital.
- O não repúdio, ou irretratabilidade, impede que o autor negue ter realizado uma ação, como assinar um documento. O mecanismo é a assinatura digital.
- Memorize a sigla CIDA: confidencialidade, integridade, disponibilidade e autenticidade, mais o não repúdio.
- Mas atenção: a tríade clássica tem só as três primeiras. Autenticidade e não repúdio são complementares.

## Riscos e normas

### Cena 5 · `riscos`

**Visual:** Quatro cartões entram um por frase: Vulnerabilidade (porta entreaberta), Ameaça (máscara), Risco (alerta) e Incidente (raio), com definição e exemplos. Na última frase, a analogia da casa aparece em pílulas na base de cada cartão: janela aberta, ladrão, chance de furto e prejuízo, furto.

**Narração:**

- Vulnerabilidade é uma fraqueza que pode ser explorada, como um sistema desatualizado ou uma senha fraca.
- Ameaça é o agente ou evento que pode explorar essa vulnerabilidade: um invasor, um malware, ou até um incêndio.
- Risco é a probabilidade de uma ameaça explorar uma vulnerabilidade, e o impacto que isso causaria.
- E incidente é o evento que efetivamente compromete a segurança.
- Numa casa: a janela aberta é a vulnerabilidade; o ladrão, a ameaça; a chance de furto e o prejuízo, o risco; e o furto, o incidente.

### Cena 6 · `politicas`

**Visual:** À esquerda, cartões Segurança física (porta) e Segurança lógica (escudo). À direita, cartão PSI (documento) aprovado pela direção. Embaixo, dois cartões das normas: ABNT NBR ISO/IEC 27001 (SGSI, certificação) e 27002 (boas práticas).

**Narração:**

- A segurança física protege instalações e equipamentos: controle de acesso a salas, câmeras, nobreak e proteção contra incêndio.
- A segurança lógica protege sistemas e dados: senhas, permissões, criptografia, firewall e antivírus.
- A Política de Segurança da Informação, a PSI, é um documento aprovado pela direção que define regras, responsabilidades e penalidades no uso da informação.
- A ISO 27001 define os requisitos do Sistema de Gestão de Segurança da Informação, o SGSI, e a organização pode ser certificada por ela.
- Já a ISO 27002 é um código de boas práticas para implementar os controles de segurança.

### Cena 7 · `lai`

**Visual:** Rótulo “Lei nº 12.527/2011”. Dois cartões: Regra = publicidade (globo, verde) e Exceção = sigilo (cadeado). Em seguida, gráfico de barras dos prazos máximos: Ultrassecreta 25 anos, Secreta 15, Reservada 5 — cada barra cresce e o número conta quando o grau é citado.

**Narração:**

- Nos órgãos públicos, vale a Lei de Acesso à Informação, a LAI: Lei doze mil, quinhentos e vinte e sete, de dois mil e onze.
- Nela, a regra é a publicidade das informações públicas. O sigilo é a exceção.
- As informações classificadas têm prazos máximos de restrição. Ultrassecreta: até vinte e cinco anos.
- Secreta: até quinze anos. E reservada: até cinco anos.

## Malware

### Cena 8 · `malware`

**Visual:** Ícone de vírus e a definição de malware (malicious software). Três cartões entram um por frase: Vírus (depende da execução), Worm (rede de computadores; propaga-se sozinho) e Cavalo de Troia (presente; disfarça-se de programa legítimo).

**Narração:**

- Um dos assuntos favoritos das bancas: malware, de malicious software. É qualquer programa criado para causar danos, roubar dados ou obter controle indevido de um sistema.
- O vírus se anexa a arquivos ou programas, e depende da execução do arquivo infectado para agir e se propagar.
- O worm se propaga sozinho pela rede, explorando falhas, sem infectar arquivos nem depender do usuário. Ele consome recursos e congestiona a rede.
- O cavalo de Troia, ou trojan, se disfarça de programa legítimo, como um jogo, um cartão virtual ou uma atualização, e executa ações maliciosas escondidas.

### Cena 9 · `malware-2`

**Visual:** No alto, cartões Ransomware (documento trancado) e Adware (megafone). Embaixo, Spyware (olho) com uma seta para os seus dois tipos: Keylogger (teclado) e Screenlogger (monitor).

**Narração:**

- O ransomware criptografa os arquivos, ou bloqueia o sistema, e exige um resgate, normalmente em criptomoeda.
- O spyware espiona e coleta informações do usuário sem o seu consentimento.
- Dois spywares famosos: o keylogger, que registra as teclas digitadas, como senhas; e o screenlogger, que captura imagens da tela e a posição dos cliques.
- E o adware exibe propagandas indesejadas.

### Cena 10 · `malware-3`

**Visual:** Três cartões: Backdoor (porta), Rootkit (olho riscado) e Bot e botnet (rede de computadores zumbis). Depois, quadro âmbar com a diferença vírus × worm, e a frase do cavalo de Troia surge em seguida; embaixo, três selos resumem: vírus, worm e cavalo de Troia.

**Narração:**

- O backdoor abre uma porta dos fundos, para o invasor voltar a acessar o sistema.
- O rootkit é um conjunto de técnicas para esconder a presença do invasor e de outros malwares no sistema.
- O bot permite controlar o computador remotamente. A botnet é uma rede de computadores infectados, os zumbis, usada, por exemplo, em DDoS.
- Agora, a diferença mais cobrada: o vírus precisa de um hospedeiro e da execução do arquivo; o worm se replica sozinho pela rede. E o cavalo de Troia, em geral, não se replica.

## Golpes e ataques

### Cena 11 · `golpes`

**Visual:** Cartão Engenharia social (pessoas) à esquerda. Ao lado, cartão Phishing (anzol) com uma mensagem falsa de exemplo (“Sua conta será bloqueada hoje!”). Embaixo, três selos: Spear phishing (alvo), Smishing (celular, SMS) e Vishing (balão, voz).

**Narração:**

- Agora, os golpes. A engenharia social manipula as pessoas, explorando confiança, medo ou urgência, para obter informações ou acessos.
- O phishing é uma mensagem falsa, por e-mail, SMS ou rede social, que imita uma instituição para roubar dados ou induzir o clique.
- O spear phishing é direcionado a uma pessoa ou empresa específica, com informações personalizadas.
- Smishing e vishing são o phishing por SMS e por ligação telefônica.

### Cena 12 · `ataques`

**Visual:** Cinco cartões: Pharming (endereço certo → DNS alterado → site falso), DoS e DDoS (muitas máquinas → serviço fora do ar), Força bruta (chave e combinações), Man-in-the-middle (pessoa – atacante – pessoa) e Spoofing (máscara). Depois, quadro âmbar com três pegadinhas, cada linha entrando quando é citada, e a tríade C-I-D com o D aceso.

**Narração:**

- O pharming altera a resolução de nomes, o DNS, para levar o usuário a um site falso, mesmo quando ele digita o endereço correto.
- O DoS e o DDoS sobrecarregam um serviço com requisições para torná-lo indisponível; no DDoS, o ataque vem de muitas máquinas ao mesmo tempo.
- A força bruta testa inúmeras combinações de senha até acertar.
- No man-in-the-middle, o atacante se coloca entre duas partes, para interceptar ou alterar a comunicação.
- E o spoofing falsifica a origem, como o remetente de um e-mail ou um endereço IP.
- Atenção: phishing não é malware; é um golpe de engenharia social.
- O pharming é mais perigoso, porque o usuário cai no site falso mesmo digitando o endereço certo. E o DDoS ataca a disponibilidade.

### Cena 13 · `outros-ataques`

**Visual:** Grade com oito cartões, cada um entrando na frase que o cita: Zero-day (calendário com 0), Sniffing (lupa), SQL injection (banco de dados), XSS (código), Defacement (janela de site), Hoax (balão), Cryptojacking (moeda) e Golpe do falso suporte (atendente com fone).

**Narração:**

- O zero-day, ou dia zero, explora uma falha ainda desconhecida pelo fabricante, para a qual não existe correção.
- O sniffing captura e analisa o tráfego da rede para obter dados, como senhas enviadas sem criptografia.
- O SQL injection insere comandos de banco de dados em campos de formulário. E o cross-site scripting, o XSS, injeta scripts maliciosos em páginas vistas por outros usuários.
- O defacement altera a página inicial de um site, pichando o seu conteúdo. E o hoax é um boato espalhado em massa, como as correntes.
- O cryptojacking usa o computador da vítima, sem permissão, para minerar criptomoedas.
- No golpe do falso suporte, o criminoso se passa por técnico ou atendente e convence a vítima a instalar um programa de acesso remoto ou a informar códigos.

## Criptografia

### Cena 14 · `criptografia`

**Visual:** A palavra CONCURSO (legível) passa por um cadeado com chave e vira um código embaralhado (ilegível). Faixa: criptografia protege a confidencialidade. Depois, dois cartões comparam Simétrica (uma chave) e Assimétrica (chave pública verde + chave privada rosa), com chaves, velocidade, desafio e exemplos surgindo linha a linha.

**Narração:**

- A criptografia transforma a informação legível em um código ilegível, que só pode ser revertido por quem tem a chave correta.
- Por isso, a criptografia protege principalmente a confidencialidade.
- Na criptografia simétrica, uma única chave secreta cifra e decifra. Ela é mais rápida, e o desafio é compartilhar a chave com segurança. Exemplos: AES e 3DES.
- Na assimétrica, há um par de chaves: uma pública, que pode ser divulgada, e uma privada, secreta. Ela é mais lenta, e o desafio é proteger a chave privada. Exemplos: RSA e ECC.

### Cena 15 · `chaves`

**Visual:** Dois fluxos. Sigilo: Remetente → mensagem cifrada → Destinatário, com as chaves “pública do destinatário” (cifra, verde) e “privada do destinatário” (decifra, rosa). Assinatura: Remetente → documento assinado → Qualquer pessoa, com “privada do remetente” (assina) e “pública do remetente” (confere). No fim, quadro verde “Memorize”.

**Narração:**

- Para enviar uma mensagem sigilosa, o remetente cifra com a chave pública do destinatário; só a chave privada dele, que só ele tem, consegue decifrar.
- Para assinar digitalmente, o remetente usa a sua própria chave privada. E qualquer pessoa confere a assinatura com a chave pública do remetente.
- Memorize: sigilo, chave pública do destinatário. Assinatura, chave privada do remetente.

### Cena 16 · `hash`

**Visual:** Linha 1: documento “Pagar R$ 100,00” → engrenagem “função hash” → resumo de tamanho fixo. Linha 2: “Pagar R$ 900,00” (só um dígito mudou, em destaque) → resumo completamente diferente. Faixa: hash → integridade. Pílulas: SHA-256 (seguro) e MD5, SHA-1 (inseguros).

**Narração:**

- A função hash gera um resumo, de tamanho fixo, a partir de qualquer conteúdo.
- Qualquer alteração no conteúdo, por menor que seja, gera um hash completamente diferente. Por isso, ele é usado para verificar a integridade.
- Um exemplo é o SHA-256. Já o MD5 e o SHA-1 são considerados inseguros.

## Assinatura e certificado

### Cena 17 · `assinatura`

**Visual:** Equação visual: hash do documento + chave privada do autor = assinatura digital. Três pílulas verdes com o que ela garante (autenticidade, integridade, não repúdio) e uma vermelha “✗ confidencialidade”. Quadro âmbar: para sigilo é preciso criptografar.

**Narração:**

- A assinatura digital combina o hash do documento com a chave privada do autor.
- Ela garante três coisas: autenticidade, integridade e não repúdio.
- Mas atenção, que essa é clássica: a assinatura digital não garante a confidencialidade. Para manter o sigilo, é preciso criptografar o documento.

### Cena 18 · `certificado`

**Visual:** AC (escudo) emite o Certificado digital, que liga a chave pública (verde) à identidade de pessoa, empresa ou site; pílula ICP-Brasil. Barra de navegador com cadeado e “https://”: HTTPS = certificado + TLS. Depois, cartões A1 (arquivo no computador ou celular) e A3 (token USB ou cartão inteligente) e pílulas e-CPF e e-CNPJ com seus usos.

**Narração:**

- O certificado digital é um documento eletrônico, emitido por uma Autoridade Certificadora, a AC, que vincula uma chave pública à identidade de uma pessoa, empresa ou site.
- No Brasil, a cadeia oficial é a ICP-Brasil. E o HTTPS usa certificados digitais e o protocolo TLS para criptografar a conexão com o site.
- Dois tipos são muito cobrados. No A1, a chave privada fica em um arquivo no computador ou no celular: é prático, mas exige cuidado com as cópias.
- No A3, ela fica em um token USB ou em um cartão inteligente, o smart card, e não sai do dispositivo, o que aumenta a segurança.
- O certificado de pessoa física é o e-CPF, e o de empresa, o e-CNPJ. Eles servem para assinar documentos com validade jurídica, acessar sistemas do governo e emitir notas fiscais.

## Autenticação e proteção

### Cena 19 · `autenticacao`

**Visual:** Três cartões dos fatores: Algo que você sabe (senha, PIN), Algo que você tem (token: celular, cartão, certificado em mídia) e Algo que você é (impressão digital). Embaixo, duas contas: senha + código no celular = ✓ 2FA; senha + senha = ✗ não é 2FA. Faixa final com as boas práticas de senha.

**Narração:**

- A autenticação confirma a identidade de quem acessa um sistema, com três fatores. Algo que você sabe: senha, PIN, resposta secreta.
- Algo que você tem: o celular que recebe um código, um token, um cartão, ou o certificado digital em mídia.
- E algo que você é: a biometria, como a impressão digital, o rosto ou a íris.
- A autenticação em dois fatores, ou multifator, combina fatores de tipos diferentes. Senha mais código no celular é dois fatores. Duas senhas, não.
- Nas senhas: use frases-senha longas, não repita a mesma senha em vários serviços e use um gerenciador de senhas.

### Cena 20 · `ferramentas`

**Visual:** Grade de sete cartões, um por ferramenta citada: Antivírus (escudo), Firewall (muro), IDS (alerta), IPS (bloqueio), VPN (túnel com cadeado), Antispam (envelope) e Proxy (globo). Depois, quadro âmbar e dois cartões lado a lado: Firewall filtra o tráfego ≠ Antivírus remove malware.

**Narração:**

- O antivírus, ou antimalware, detecta, bloqueia e remove malwares, por assinaturas e análise de comportamento, como o Microsoft Defender.
- O firewall controla o tráfego de rede, permitindo ou bloqueando conexões de acordo com regras.
- O IDS, de detecção de intrusão, monitora a rede e alerta sobre atividades suspeitas. Já o IPS, de prevenção de intrusão, detecta e bloqueia automaticamente.
- A VPN cria um túnel criptografado pela internet, permitindo acesso seguro à rede da organização.
- O antispam filtra mensagens indesejadas e suspeitas. E o proxy é um intermediário entre os usuários e a internet, que pode filtrar sites e registrar acessos.
- Pegadinha: o firewall não remove vírus; ele filtra o tráfego. Quem remove malware é o antivírus, e um não substitui o outro.

### Cena 21 · `antivirus`

**Visual:** Quatro cartões, um por frase, com as formas de detecção do antivírus: Assinatura (impressão digital; base atualizada), Heurística e comportamento (olho; ameaças novas), Sandbox (caixa isolada) e Quarentena (cadeado; isola sem apagar).

**Narração:**

- O antivírus detecta de quatro formas. Por assinatura: compara os arquivos com uma base de “impressões digitais” de malwares conhecidos, que precisa estar atualizada.
- Por heurística e comportamento: identifica ações suspeitas, como criptografar muitos arquivos de uma vez, e detecta também ameaças novas.
- Com o sandbox, o arquivo suspeito é executado em um ambiente isolado, para observar o que ele faz.
- E a quarentena isola o arquivo suspeito, impedindo que ele seja executado, sem apagá-lo de imediato.

### Cena 22 · `dmz`

**Visual:** Diagrama de rede: Internet (globo) → DMZ (zona tracejada rosa com os servidores Site e E-mail) → Rede interna (zona tracejada azul). Um raio atinge um servidor da DMZ, mas a rede interna recebe um selo de “protegida”. Embaixo, cartão Honeypot (pote de mel): sistema-isca.

**Narração:**

- A DMZ, ou zona desmilitarizada, é um segmento de rede separado, entre a internet e a rede interna, onde ficam os servidores acessados de fora, como o site e o e-mail.
- Se um desses servidores for invadido, a rede interna continua protegida.
- O honeypot é um sistema-isca, propositalmente vulnerável, que atrai atacantes para estudar seu comportamento e desviá-los dos sistemas reais.

## Backup

### Cena 23 · `backup`

**Visual:** Cartão “cópia de segurança”. Depois, quadro semanal (Dom a Qui) com três linhas: Completo (cópia total todo dia), Incremental (só as mudanças de cada dia) e Diferencial (blocos que crescem desde o último completo). Os blocos necessários para restaurar ganham contorno verde. Faixas de resumo. Por fim, a regra 3-2-1 com números grandes e quadro verde “Memorize”.

**Narração:**

- Backup é a cópia de segurança dos dados, para recuperá-los em caso de falha, exclusão acidental ou ataque, como um ransomware.
- O backup completo, ou full, copia todos os dados selecionados; para restaurar, basta o último completo.
- O incremental copia só o que mudou desde o último backup de qualquer tipo. Para restaurar: o último completo e todos os incrementais seguintes.
- O diferencial copia tudo o que mudou desde o último backup completo. Para restaurar: o último completo e apenas o último diferencial.
- Resumindo: o incremental é o mais rápido e ocupa menos espaço, mas é o mais trabalhoso de restaurar. O diferencial cresce a cada dia, mas restaura com só duas cópias.
- Memorize a regra três, dois, um: três cópias, em duas mídias diferentes, sendo uma fora do local, como na nuvem. E teste a restauração de tempos em tempos.

## LGPD

### Cena 24 · `lgpd`

**Visual:** Pílula “Lei nº 13.709/2018” e pílulas do alcance: pessoas e organizações, públicas e privadas, meios digitais e físicos. Três cartões: Dado pessoal (pessoa; nome, CPF, endereço, IP), Dado pessoal sensível (alerta; lista completa) e Dado anonimizado (olho riscado).

**Narração:**

- Por fim, a Lei Geral de Proteção de Dados, a LGPD, Lei treze mil, setecentos e nove, de dois mil e dezoito, regula o tratamento de dados pessoais por pessoas e organizações, públicas e privadas, nos meios digitais e físicos.
- Dado pessoal é a informação relacionada a uma pessoa natural identificada ou identificável, como nome, CPF, endereço e até o IP.
- Dado pessoal sensível envolve origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, dados de saúde ou vida sexual, e dados genéticos ou biométricos.
- E o dado anonimizado é aquele que não permite mais identificar o titular.

### Cena 25 · `lgpd-agentes`

**Visual:** Organograma dos papéis: Titular, Encarregado (DPO) e ANPD na linha de cima; Controlador e Operador embaixo. O encarregado se liga ao titular, à ANPD e ao controlador; uma seta “em nome de” vai do controlador ao operador.

**Narração:**

- Na LGPD, o titular é a pessoa a quem os dados se referem. E o controlador é quem toma as decisões sobre o tratamento.
- O operador é quem realiza o tratamento em nome do controlador.
- O encarregado, também chamado de DPO, é o canal de comunicação entre o controlador, os titulares e a ANPD.
- E a ANPD, a Autoridade Nacional de Proteção de Dados, fiscaliza e aplica as sanções.

### Cena 26 · `lgpd-regras`

**Visual:** Três cartões: Bases legais (balança; consentimento é só uma delas), Direitos do titular (pessoa; lista) e Sanções (alerta; contadores 2% do faturamento e R$ 50 milhões por infração). Depois, quadro âmbar com duas pegadinhas, uma por frase.

**Narração:**

- Bases legais: o tratamento só é permitido nas hipóteses previstas na lei, e o consentimento é apenas uma delas. Outras são o cumprimento de obrigação legal, a execução de políticas públicas e a de contrato.
- O titular tem direito a confirmar se seus dados são tratados, acessá-los, corrigi-los, pedir anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade e revogação do consentimento.
- E as sanções vão de advertência a multa de até dois por cento do faturamento, limitada a cinquenta milhões de reais por infração.
- Duas pegadinhas: a LGPD não vale só para dados digitais; vale também para dados em papel.
- E nem todo tratamento de dados exige consentimento: ele é só uma das bases legais.

## Boas práticas

### Cena 27 · `boas-praticas`

**Visual:** Lista de verificação com sete itens, cada um com um ícone de visto, entrando na frase que o menciona: atualizações, desconfiar de urgência, conferir o endereço, fontes oficiais, antivírus + firewall + 2FA, Windows + L e backups testados.

**Narração:**

- Para fechar, as boas práticas. Mantenha o sistema operacional, o navegador e os aplicativos atualizados.
- Desconfie de mensagens com urgência, prêmios ou ameaças, e não clique em links suspeitos.
- Confira o endereço do site antes de digitar senhas, e baixe programas apenas de fontes oficiais.
- Use antivírus, firewall e autenticação em dois fatores, e bloqueie o computador ao se ausentar, com as teclas Windows e L.
- E faça backups regulares, testando a restauração.

## Revisão

### Cena 28 · `revisao`

**Visual:** Oito cartões de revisão com ícone de verificação, um por frase: Princípios, Malware, Golpes, Chaves, Hash e certificado, Ferramentas, Backup, Normas e leis.

**Narração:**

- Revisando: a tríade é confidencialidade, integridade e disponibilidade; autenticidade e não repúdio são complementares.
- Vírus precisa de hospedeiro e execução; worm se espalha sozinho; trojan se disfarça; ransomware pede resgate.
- Phishing é engenharia social, não malware. Pharming engana pelo DNS. DDoS ataca a disponibilidade.
- Sigilo: chave pública do destinatário. Assinatura: chave privada do remetente, sem garantir sigilo.
- Hash garante integridade. No A1, a chave fica em arquivo; no A3, em token ou cartão.
- Firewall filtra o tráfego; antivírus remove malware. IDS alerta, IPS bloqueia, e a DMZ separa os servidores acessados de fora.
- No backup, o incremental restaura com todos os incrementais; o diferencial, só com o último.
- E a ISO 27001 permite certificação; na LAI, os prazos são vinte e cinco, quinze e cinco anos; e, na LGPD, o controlador decide, e o consentimento é só uma das bases legais.

### Cena 29 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 8 — Lógica de Programação” na cor do capítulo 8. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar a lógica de programação.
- Até lá, e bons estudos!
