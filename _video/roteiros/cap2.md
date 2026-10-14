# Videoaula — Capítulo 2: Sistemas Operacionais

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap2.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 2” e o título “Sistemas Operacionais”. Em seguida, um roteiro de 6 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Que bom ter você de volta!
- Neste segundo capítulo, o tema são os Sistemas Operacionais.
- Você vai ver o que é um sistema operacional, o que ele faz e como gerencia os processos.
- Vai conhecer o kernel, a inicialização do computador e os sistemas de arquivos.
- E vamos explorar o Windows e o Linux: Lixeira, atalhos, comandos e permissões.
- Vamos lá?

## O sistema operacional

### Cena 2 · `conceito`

**Visual:** Três camadas empilhadas à esquerda: Usuário (interação), Sistema operacional (gerencia recursos, em destaque na cor do capítulo) e Hardware (executa fisicamente). À direita, cartão com a definição de SO. Depois, as pílulas processador, memória, disco e periféricos; elas se apagam e surge a faixa “base comum para os aplicativos”.

**Narração:**

- Pense em três camadas. Em cima, o usuário, que interage. Embaixo, o hardware, que executa tudo fisicamente.
- No meio, o sistema operacional, ou SO: o software básico que gerencia os recursos e faz a ponte entre hardware, aplicativos e usuário.
- Sem ele, cada programa teria que controlar sozinho o processador, a memória, o disco e cada periférico.
- O SO esconde essa complexidade e oferece uma base comum para todos os aplicativos.

### Cena 3 · `exemplos`

**Visual:** Três cartões com exemplos: Computadores (notebook), Dispositivos móveis (celular) e Servidores (servidor), cada um na frase que o cita. Quadro âmbar “Pegadinha de banca”: o SO não é hardware nem aplicativo, é software básico.

**Narração:**

- Nos computadores, temos o Windows 10 e 11, o macOS e as distribuições Linux, como Ubuntu, Debian, Fedora e Linux Mint.
- Nos dispositivos móveis, o Android, baseado no kernel Linux, e o iOS.
- E, nos servidores, o Windows Server e distribuições Linux como Red Hat Enterprise Linux e Debian.
- Pegadinha: o SO não é hardware, nem aplicativo. Ele é software básico, ou de sistema.

### Cena 4 · `funcoes`

**Visual:** Seis cartões em grade, um por função: gerência de processos (CPU), de memória, de arquivos (pasta), de dispositivos (impressora), segurança (cadeado) e interface (janela, GUI ou CLI). Quadro azul “Resumo estratégico” com os quatro grandes recursos.

**Narração:**

- E o que o SO faz? A gerência de processos decide qual programa usa o processador, e por quanto tempo.
- A de memória distribui a RAM entre os programas e impede que um invada a área do outro.
- A de arquivos organiza os dados em arquivos e pastas, os diretórios.
- A de dispositivos controla os periféricos, por meio dos drivers.
- Ele também cuida da segurança, com contas, senhas e permissões, e oferece a interface: gráfica, a GUI, ou de linha de comando, a CLI.
- Resumindo: o SO gerencia quatro grandes recursos: processador, memória, arquivos e dispositivos de entrada e saída.

## Processos

### Cena 5 · `processos`

**Visual:** Cartão “Processo = programa em execução”. Faixa do processador com fatias A, B e C alternadas surgindo uma a uma (“parece simultâneo”); um marcador âmbar “SO” mostra a interrupção da multitarefa preemptiva. Cartão Multiusuário. Depois, barra da RAM que enche com programas; o excesso vai para a área “memória virtual” do disco, com as pílulas “arquivo de paginação” e “swap” e o aviso “bem mais lento”. Por fim, cartão Driver com uma impressora.

**Narração:**

- Agora, os processos. Processo é um programa em execução.
- Multitarefa é ter vários programas executando juntos. O SO alterna o processador entre eles tão rápido que parece simultâneo.
- Na multitarefa preemptiva, a dos sistemas atuais, o SO pode interromper um programa para dar a vez a outro.
- Multiusuário são várias contas, com arquivos e permissões separados.
- Quando a RAM acaba, o SO usa parte do disco como extensão da memória: é a memória virtual.
- No Windows, ela fica no arquivo de paginação; no Linux, na área de swap. Funciona, mas é bem mais lento.
- E o driver é o software que permite ao SO controlar um dispositivo específico, como uma impressora.

### Cena 6 · `estados`

**Visual:** Diagrama de estados: Novo → Pronto → Executando → Terminado, com Bloqueado abaixo (setas Executando → Bloqueado → Pronto). Cada estado surge e pulsa na frase que o explica. Quadro âmbar: espera de E/S = bloqueado, não pronto.

**Narração:**

- Todo processo passa por estados. Primeiro, ele é novo: está sendo criado e carregado na memória.
- Depois, fica pronto: está na fila, esperando a vez de usar o processador.
- Quando ganha o processador, passa a executando.
- Se esperar um evento externo, como a leitura do disco ou a digitação do usuário, fica bloqueado. Quando o evento acontece, volta para pronto.
- E, ao encerrar, fica terminado, e seus recursos são liberados.
- Pegadinha: quem espera entrada e saída está bloqueado, e não pronto. Pronto é quem só aguarda a vez do processador.

### Cena 7 · `escalonamento`

**Visual:** Faixa “Escalonador: decide qual processo pronto usa o processador”. Tabela Algoritmo / Como escolhe, uma linha por algoritmo: FIFO (FCFS), SJF, Round Robin (quantum) e por prioridade. Depois, diagrama do deadlock: Processo 1 e Processo 2, cada um segurando um recurso e esperando o outro, com setas formando um ciclo.

**Narração:**

- Quem decide qual processo pronto vai usar o processador é o escalonador, uma parte do SO.
- No FIFO, ou FCFS, vale a ordem de chegada. No SJF, o processo mais curto vai primeiro.
- No Round Robin, ou circular, cada processo usa a CPU por uma fatia fixa de tempo, o quantum, e volta para o fim da fila.
- E, por prioridade, o de maior prioridade é executado primeiro.
- Cuidado também com o deadlock, o impasse.
- Dois ou mais processos esperam indefinidamente, cada um por um recurso preso com o outro.

## Kernel e boot

### Cena 8 · `kernel`

**Visual:** Círculo do Kernel envolvendo o núcleo Hardware, com a etiqueta “privilégio máximo”; à direita, quatro cartões: processos, memória, dispositivos e interrupções. Depois, três cartões com mini-diagramas: Monolítico (Linux), Microkernel (Minix) e Híbrido (Windows NT, macOS XNU). Por fim, quadro âmbar com as duas pegadinhas: interface gráfica não é o kernel; Linux é o kernel, o sistema completo é uma distribuição.

**Narração:**

- O kernel, ou núcleo, é a parte central do SO. Roda com privilégio máximo e fala diretamente com o hardware.
- O kernel controla os processos, a memória, os dispositivos e as interrupções.
- No kernel monolítico, quase tudo roda dentro do núcleo: é rápido, mas uma falha pode derrubar o sistema. É o caso do Linux.
- No microkernel, o núcleo tem só o essencial, e o resto roda separado: é mais modular e estável, como o Minix.
- O híbrido mistura os dois: é o Windows, com o NT, e o macOS, com o XNU.
- Pegadinha: o kernel não cuida da interface gráfica. Ela é um programa que roda sobre ele.
- E, tecnicamente, Linux é só o kernel. O sistema completo é uma distribuição.

### Cena 9 · `boot`

**Visual:** Fluxo horizontal de cinco etapas numeradas, ligadas por setas, cada uma na frase que a explica: POST (verificação), BIOS/UEFI (chip), Gerenciador de boot (menu; Windows ou GRUB), Kernel e serviços (engrenagem; systemd) e Login (cadeado). Faixa “Dual boot: escolher entre dois sistemas instalados”.

**Narração:**

- Ao ligar o computador, começa o boot. Primeiro vem o POST: o firmware da placa-mãe testa o hardware.
- Depois, a BIOS ou a UEFI localiza o dispositivo de inicialização: o SSD, o HD ou o pen drive.
- Em seguida, o gerenciador de boot carrega o sistema: o Gerenciador de Inicialização do Windows, ou o GRUB, no Linux.
- No dual boot, é ele que deixa escolher entre dois sistemas instalados.
- Então o kernel vai para a memória e inicia os serviços, no Linux normalmente pelo systemd.
- Por fim, o login: o usuário se identifica, e a sessão é aberta.

### Cena 10 · `virtualizacao`

**Visual:** Pilha à esquerda: Hardware na base e três máquinas virtuais em cima; o Hypervisor desliza entre eles (Tipo 1 · nativo/bare metal, com VMware ESXi, Hyper-V e KVM). À direita, a pilha do Tipo 2 (hospedado): Hardware, Sistema operacional, Hypervisor e duas máquinas virtuais, com VirtualBox e VMware Workstation.

**Narração:**

- A virtualização permite executar vários sistemas operacionais, as máquinas virtuais, em um mesmo computador físico.
- Quem cria e controla as máquinas virtuais é o hypervisor.
- O tipo 1, nativo ou bare metal, roda direto sobre o hardware. Exemplos: VMware ESXi, Microsoft Hyper-V e KVM.
- O tipo 2, hospedado, roda como programa sobre um sistema operacional, como o VirtualBox e o VMware Workstation.

## Interfaces e arquivos

### Cena 11 · `interfaces`

**Visual:** À esquerda, uma janela gráfica com barra de título, menu lateral, ícones e botão (GUI), com as pílulas GNOME, KDE Plasma, XFCE e Cinnamon. À direita, um terminal onde comandos aparecem linha a linha (CLI), com a etiqueta “shell” e as pílulas Bash, Prompt de Comando e PowerShell.

**Narração:**

- Na GUI, a interface gráfica, você usa janelas, ícones, menus e botões.
- No Linux, exemplos são o GNOME, o KDE Plasma, o XFCE e o Cinnamon.
- Na CLI, a linha de comando, você digita comandos em um interpretador: o shell.
- Exemplos de shell são o Bash, no Linux, e o Prompt de Comando e o PowerShell, no Windows.

### Cena 12 · `sistemas-arquivos`

**Visual:** Definição em uma linha e tabela Sistema / Uso típico / Características, com uma linha por frase: NTFS, FAT32 (limite de 4 GB por arquivo em destaque), exFAT, ext4 e APFS.

**Narração:**

- O sistema de arquivos define como os dados são organizados, nomeados e protegidos no disco.
- O NTFS é o padrão do Windows, com permissões, criptografia, compressão, cotas e journaling.
- O FAT32, de pen drives e cartões antigos, é compatível com quase tudo, mas limita cada arquivo a 4 gigabytes.
- O exFAT, dos pen drives e cartões atuais, é compatível com Windows e macOS, sem esse limite.
- O ext4 é o padrão em muitas distribuições Linux: journaling, bom desempenho e arquivos grandes.
- E o APFS é o do macOS e do iOS: otimizado para SSD, com criptografia nativa.

### Cena 13 · `fat32`

**Visual:** Journaling: Registro (alterações pendentes) → Gravação no disco; um raio de “queda de energia” interrompe e surge “disco consistente ✓”. Depois, um vídeo de 5 GB tenta ir para um pen drive FAT32 e recebe um ✗ (limite de 4 GB por arquivo); surgem as soluções exFAT e NTFS. Quadro âmbar da pegadinha.

**Narração:**

- E o que é journaling? É um registro das alterações pendentes.
- Se o computador desligar no meio de uma gravação, o sistema consegue recuperar a consistência do disco.
- Pegadinha: um vídeo de 5 gigabytes não pode ser copiado para um pen drive em FAT32, mesmo que haja espaço livre.
- A solução é formatar o pen drive em exFAT ou NTFS.

## Windows

### Cena 14 · `windows`

**Visual:** Cinco cartões com os componentes mais cobrados: Explorador de Arquivos (pasta, teclas Windows + E), Área de Trabalho (Barra de Tarefas e Menu Iniciar), Configurações e Painel de Controle (engrenagem), Gerenciador de Tarefas (gráfico, teclas Ctrl + Shift + Esc) e Lixeira.

**Narração:**

- Agora, o Windows. O Explorador de Arquivos gerencia pastas e arquivos, e abre com Windows + E.
- Temos também a Área de Trabalho, a Barra de Tarefas e o Menu Iniciar.
- Nas Configurações e no Painel de Controle, você ajusta sistema, contas, rede e aplicativos.
- O Gerenciador de Tarefas mostra os processos, o desempenho e os programas que iniciam com o Windows. O atalho é Ctrl + Shift + Esc.
- E a Lixeira guarda os arquivos excluídos do disco local, para que possam ser restaurados.

### Cena 15 · `lixeira`

**Visual:** Um arquivo à esquerda. Seta para a Lixeira com a tecla Delete; seta para “Excluído para sempre” com Shift + Delete. À direita, coluna “Excluídos direto”: pen drive, cartão de memória, pasta de rede e arquivo maior que a Lixeira. Quadro âmbar: nem tudo passa pela Lixeira.

**Narração:**

- Atenção à Lixeira. A tecla Delete envia o arquivo para ela.
- Já Shift + Delete exclui permanentemente, sem passar pela Lixeira.
- Arquivos de pen drives, cartões de memória e pastas de rede também não vão para a Lixeira: são excluídos direto.
- Nem os maiores que o espaço reservado para a Lixeira: o Windows avisa e exclui permanentemente.
- Então, é errado dizer que todo arquivo excluído pode ser recuperado pela Lixeira.

### Cena 16 · `atalhos`

**Visual:** Lista de atalhos com teclas desenhadas, um por vez: Windows + E, D, L, R, I, V e Windows + Shift + S, com a ação ao lado. Quadro verde “Memorize” com as iniciais em inglês (Explorer, Desktop, Lock, Run, settings). Depois, oito cartões: Alt + Tab, Alt + F4, F2, Ctrl + Shift + Esc, Ctrl + C, X, V e Z.

**Narração:**

- Atalhos com a tecla Windows: Windows + E abre o Explorador, e Windows + D mostra ou oculta a área de trabalho.
- Windows + L bloqueia o computador, Windows + R abre o Executar, e Windows + I, as Configurações.
- Windows + V mostra o histórico da área de transferência, e Windows + Shift + S captura parte da tela.
- Memorize: são iniciais em inglês. E de Explorer, D de Desktop, L de Lock, R de Run, e I de settings.
- Alt + Tab alterna entre as janelas, Alt + F4 fecha a janela ou o programa ativo, e F2 renomeia o item selecionado.
- Ctrl + Shift + Esc abre o Gerenciador de Tarefas. E Ctrl + C copia, Ctrl + X recorta, Ctrl + V cola, e Ctrl + Z desfaz.

## Windows: arquivos e segurança

### Cena 17 · `caminhos`

**Visual:** Caminho C:\Users\Maria\Documentos\relatorio.docx montado parte por parte, com as etiquetas “letra da unidade” e “barra invertida”; pílula “caminho absoluto”; caminho relativo ..\Imagens; fila de caracteres proibidos; cartão Atalho (.lnk). Depois, dez fichas de extensões: .exe, .txt, .docx, .xlsx, .pdf, .jpg, .png, .mp3, .mp4 e .zip.

**Narração:**

- No Windows, o caminho começa pela letra da unidade e usa a barra invertida, como em C:\Users\Maria\Documentos\relatorio.docx.
- Esse caminho é absoluto: completo, desde a unidade. O relativo parte da pasta atual, e o .. indica a pasta acima.
- Nomes de arquivos não podem conter estes caracteres.
- E um atalho, o .lnk, só aponta para o original: apagar o atalho não apaga o arquivo.
- A extensão indica o tipo do arquivo e o programa que o abre: .exe é executável, .txt é texto simples, .docx é do Word, e .xlsx, do Excel.
- Há ainda o .pdf, o .jpg e o .png, de imagens, o .mp3, de áudio, o .mp4, de vídeo, e o .zip, compactado.

### Cena 18 · `contas`

**Visual:** Cartões Administrador (pessoa com estrela) e Conta padrão; janela de confirmação do UAC com botões Sim e Não. Linha inferior: Windows Update (setas circulares), Segurança do Windows (escudo; antivírus e firewall) e BitLocker (cadeado; edições Pro e superiores).

**Narração:**

- A conta de administrador instala programas e altera configurações. A conta padrão é para o dia a dia, com permissões limitadas.
- O Controle de Conta de Usuário, o UAC, pede confirmação antes de ações que exigem privilégios de administrador.
- O Windows Update instala atualizações e correções de segurança.
- A Segurança do Windows, com o Microsoft Defender, traz antivírus e firewall integrados.
- E o BitLocker criptografa unidades inteiras, nas edições Pro e superiores.

### Cena 19 · `restauracao`

**Visual:** Quatro cartões: Restauração do Sistema (relógio com seta), Histórico de Arquivos (documento), Arquivos ocultos (olho riscado; Exibir → Itens ocultos) e Pastas compactadas (.zip). Quadro âmbar: Restauração do Sistema não é backup de documentos; a segunda parte, sobre backup, entra na última frase.

**Narração:**

- A Restauração do Sistema volta as configurações a um ponto de restauração anterior, sem apagar documentos pessoais.
- Já o Histórico de Arquivos faz cópias de segurança periódicas das pastas do usuário.
- Arquivos ocultos só aparecem com a opção Itens ocultos marcada, na guia Exibir. E o Windows abre e cria arquivos zip sem programas extras.
- Pegadinha: a Restauração do Sistema não é backup de documentos. Ela desfaz mudanças em programas, drivers e configurações.
- Para os arquivos pessoais, use backup, como o Histórico de Arquivos ou a nuvem.

## Linux

### Cena 20 · `linux`

**Visual:** Equação: Kernel Linux + Ferramentas GNU + Outros programas = Distribuição, com as informações “código aberto · Linus Torvalds · 1991 · GPL”, as distribuições e as características em pílulas. Depois, os arquivos Relatorio.txt ≠ relatorio.txt (maiúsculas importam), o cartão root e um terminal com sudo.

**Narração:**

- Agora, o Linux. Ele é um kernel de código aberto, criado por Linus Torvalds em 1991, sob a licença GPL.
- Com ferramentas do projeto GNU e outros programas, ele forma as distribuições, como Ubuntu, Debian, Fedora, Mint e Red Hat.
- É multiusuário e multitarefa, domina os servidores e é a base do Android.
- E ele diferencia maiúsculas de minúsculas: Relatorio.txt e relatorio.txt são arquivos diferentes.
- O administrador, o superusuário, se chama root.
- E o sudo executa um comando com privilégios de administrador.

### Cena 21 · `diretorios`

**Visual:** Árvore de diretórios: a raiz “/” no alto, ligada a dez pastas em duas fileiras, que surgem na frase que as cita: /home, /root, /etc, /bin e /sbin, /usr, /var, /tmp, /dev, /boot, /media e /mnt. Quadro âmbar: / (raiz) ≠ /root (pasta do administrador).

**Narração:**

- No Linux, tudo parte de uma única raiz, representada pela barra. Não existem letras de unidade, como C: ou D:.
- Em /home ficam as pastas dos usuários, e /root é a pasta do superusuário.
- O /etc guarda as configurações do sistema. O /bin e o /sbin, os comandos essenciais e os de administração.
- O /usr tem programas e bibliotecas. O /var, dados variáveis, como os logs. E o /tmp, os temporários.
- O /dev representa os dispositivos, e o /boot guarda a inicialização e o kernel. Já /media e /mnt são pontos de montagem de pen drives e outras unidades.
- Pegadinha: não confunda a barra, a raiz do sistema, com /root, a pasta do administrador.

## Terminal do Linux

### Cena 22 · `comandos`

**Visual:** Duas colunas de comandos, cada um em uma etiqueta monoespaçada com a função ao lado, entrando quando citados: pwd, ls, cd, mkdir, cp, mv, rm | cat, chmod, chown, sudo, ps / kill, man.

**Narração:**

- Comandos básicos: o pwd mostra o diretório atual, o ls lista arquivos e pastas, e o ls -l mostra detalhes e permissões. O cd muda de diretório.
- O mkdir cria um diretório, o cp copia arquivos, e o mv move ou renomeia.
- O rm remove arquivos, e o rm -r remove diretórios. O cat exibe o conteúdo de um arquivo.
- O chmod altera permissões, o chown altera o dono, e o sudo executa como administrador.
- O ps lista os processos, o kill encerra um processo, e o man abre o manual.

### Cena 23 · `mais-comandos`

**Visual:** Grade de onze fichas de comando (nome em fonte monoespaçada e função), entrando quando citadas: touch, find, grep, tar, nano / vi, apt / dnf, df / du, top, ip addr (e ifconfig), passwd e whoami.

**Narração:**

- Mais comandos: o touch cria um arquivo vazio ou atualiza a data de modificação. O find procura arquivos, e o grep procura um texto dentro de arquivos.
- O tar agrupa e compacta arquivos. O nano e o vi são editores de texto no terminal.
- O apt e o dnf instalam e atualizam programas: o apt no Debian e no Ubuntu, e o dnf no Fedora.
- O df mostra o espaço livre nos discos, e o du, o ocupado por pastas. O top mostra processos, CPU e memória em tempo real.
- O ip addr mostra os endereços de rede, assim como o antigo ifconfig. O passwd altera a senha, e o whoami mostra o usuário atual.

### Cena 24 · `terminal`

**Visual:** Três fichas de símbolos: ~ (pasta pessoal), . (diretório atual) e .. (diretório acima), e as pílulas “absoluto: começa com /” e “relativo: parte do diretório atual”; terminal com ls -a revelando o .bashrc oculto. Depois, terminal com três linhas (>, >> e |), cada uma explicada por um cartão à direita.

**Narração:**

- No terminal, o til é a pasta pessoal, como /home/maria. O ponto é o diretório atual, e o ponto ponto, o diretório acima.
- O caminho absoluto começa com a barra; o relativo parte do diretório atual.
- Arquivos cujo nome começa com ponto, como o .bashrc, são ocultos. Eles aparecem com ls -a.
- Três símbolos que caem muito: o sinal de maior grava a saída de um comando em um arquivo, substituindo o conteúdo.
- Dois sinais de maior acrescentam a saída ao final do arquivo.
- E a barra vertical, o pipe, envia a saída de um comando para o próximo.

## Permissões no Linux

### Cena 25 · `permissoes`

**Visual:** Três fichas grandes: r = 4 (leitura · read), w = 2 (escrita · write) e x = 1 (execução · execute). Abaixo, três grupos na ordem Dono → Grupo → Outros, com setas. À direita, a conta 4 + 2 + 1 = 7 e a faixa “cada grupo: um dígito de 0 a 7”.

**Narração:**

- Cada arquivo do Linux tem três tipos de permissão. Leitura, em inglês read, é a letra r e vale 4.
- Escrita, write, é a letra w e vale 2.
- E execução, execute, é a letra x e vale 1.
- As permissões são definidas, nesta ordem, para o dono, o grupo e os outros.
- Somando os valores, cada um recebe um dígito de 0 a 7.

### Cena 26 · `chmod`

**Visual:** Comando “chmod 754 relatorio.sh” no alto. Três colunas — Dono 7 (4+2+1, rwx), Grupo 5 (4+0+1, r-x) e Outros 4 (4+0+0, r--) — preenchidas frase a frase. Linha do ls -l: -rwxr-xr--. Depois, exercício chmod 640 com o grupo destacado (4 = somente leitura) e quadro verde “Memorize”.

**Narração:**

- Veja o exemplo: chmod 754 relatorio.sh.
- O dono recebe 7: 4, mais 2, mais 1. Ou seja, rwx: ler, escrever e executar.
- O grupo recebe 5: 4, mais 0, mais 1. É r-x: ler e executar.
- E os outros recebem 4: apenas ler. No ls -l, aparece assim: -rwxr-xr--.
- Treine com o chmod 640: o grupo recebeu 4, ou seja, somente leitura.
- Memorize: r vale 4, w vale 2 e x vale 1. E a ordem dos dígitos é sempre dono, grupo e outros.

### Cena 27 · `chmod-simbolico`

**Visual:** Fichas das letras u (dono), g (grupo), o (outros) e a (todos), e dos sinais + (adiciona), - (remove) e = (define exatamente). Terminal com chmod u+x, chmod g-w, chmod o=r e chown maria dados.txt, cada linha com o comentário do que faz.

**Narração:**

- O chmod também aceita letras, no modo simbólico: u é o dono, g é o grupo, o são os outros, e a são todos.
- O sinal de mais adiciona, o de menos remove, e o de igual define exatamente.
- Assim, chmod u+x dá execução ao dono, chmod g-w retira a escrita do grupo, e chmod o=r deixa os outros só com leitura.
- E, para mudar o dono do arquivo, use o chown: chown maria dados.txt.

## Windows × Linux

### Cena 28 · `comparacao`

**Visual:** Tabela Aspecto / Windows / Linux com oito linhas, duas por frase: licença, código-fonte, kernel, sistema de arquivos, unidades, maiúsculas e minúsculas, administrador e uso mais comum. Na última frase, a tabela sai e entra o quadro âmbar: o Linux tem licença, a GPL.

**Narração:**

- Para fechar, Windows contra Linux. O Windows é proprietário, da Microsoft, e fechado. O Linux é software livre, com licença GPL, e aberto.
- O kernel do Windows é híbrido; o do Linux, monolítico. O sistema de arquivos padrão é o NTFS no Windows e o ext4 no Linux.
- O Windows usa letras nas unidades; o Linux, uma árvore a partir da barra. E só o Linux diferencia maiúsculas de minúsculas.
- O administrador do Linux é o root. E o Windows domina os computadores pessoais e as empresas; o Linux, servidores, supercomputadores e Android.
- Última pegadinha: o Linux não é gratuito por falta de licença. Ele tem licença, sim: a GPL, que garante as liberdades do software livre.

## Revisão

### Cena 29 · `revisao`

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: SO, Processos, Kernel, Arquivos, Windows, Linux e Permissões.

**Narração:**

- Hora de revisar o que você aprendeu.
- O SO é software básico e gerencia processador, memória, arquivos e dispositivos.
- Quem espera entrada e saída está bloqueado. E o Round Robin usa o quantum.
- O kernel do Linux é monolítico; o do Windows, híbrido. E Linux é só o kernel.
- O FAT32 limita cada arquivo a 4 gigabytes; o exFAT e o NTFS resolvem.
- Shift + Delete, pen drives e rede não passam pela Lixeira. E os atalhos da tecla Windows usam iniciais em inglês.
- No Linux, / é a raiz, e /root, a pasta do administrador. O sinal de maior substitui; dois sinais acrescentam.
- E, nas permissões, r vale 4, w vale 2 e x vale 1, sempre na ordem dono, grupo e outros.

### Cena 30 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 3 — Internet e Navegadores” na cor do capítulo 3. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar a internet e os navegadores.
- Até lá, e bons estudos!
