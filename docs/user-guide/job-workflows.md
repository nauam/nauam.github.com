# Fluxo de trabalho

O recurso mais básico do _Job_ é a capacidade de executar um ou mais
passos. Esta sequência de passos é chamada de _fluxo de trabalho_.

Os passos do fluxo de trabalho de um _Job_ são exibidos ao visualizar o detalhes do _Job_
em uma lista de _Job_ ou no formulário do editor de _Job_.

## Definição de fluxo de trabalho

Os fluxos de trabalho podem ser definidos no console gráfico da QW Control ou como um
Documento XML ou YAML que é carregado no servidor.

O console gráfico fornece um ambiente de autoria onde passos
pode ser adicionado, editado, removido ou reordenado.

Os usuários que preferem definir _Jobs_ em formato de texto devem consultar as duas definições de formato:

- XML: [job-xml](/user-guide/document-format-reference/job-v20.md)
- YAML: [job-yaml](/user-guide/document-format-reference/job-yaml-v12.md)

Também é possível criar _Jobs_ dentro do console gráfico
e, em seguida, exportar a definição como um arquivo usando o `rd`,
Ferramenta CLI ([rd](https://qwsoftware.github.io/qwcontrol-cli/)), ou via API.

Consulte [Ferramentas de linha de comando e acesso à API](/user-guide/job-workflows.html#ferramentas-de-linha-de-comando-e-acesso-a-api).

## Configurações de controle de fluxo de trabalho

A execução do fluxo de trabalho é controlada por duas configurações importantes: _Manuseio de um passo falhar_ e _Estratégia_.

![Workflow controls](/assets/img/fig0401.png)

_Se um passo falhar_: gerencia o que fazer se um passo incorrer em um erro:

- Pare no passo com falha: Falha imediatamente (padrão).
- Execute os passos restantes antes de falhar: Continue para os próximos passos e falhe o _job_ no final.

O padrão é falhar imediatamente, mas dependendo do procedimento em
mão você pode escolher que a execução continue.

_Estratégia_: Controla a ordem de execução de passos e o comando
despachar para o _nós_: _Node-oriented_ e _Step-oriented_.

- _Primeiro nó_: executa o fluxo de trabalho completo em cada _nó_ antes do
  próximo _nó_. (predefinição)
- _Sequential_: executa cada passo em todos os _nós_ antes do próximo
  _Passo_.
- _Paralelo_: Execute todos os passos em paralelo.

As ilustrações a seguir contrastam as estratégias, mostrando como três
passos prossiga em dois _nós_.

_Primeiro nó_ fluxo ilustrado:

```sh
1. NóA  passo#1
2.  "   passo#2
3.  "   passo#3
4. NóB  passo#1
5.  "   passo#2
6.  "   passo#3
```

Fluxo _sequencial_ ilustrado:

```sh
1. NóA  passo#1
2. NóB     "
3. NóA  passo#2
4. NóB     "
5. NóA  passo#3
6. NóB     "
```

O processo que você está automatizando determinará qual estratégia é
correto, embora o fluxo orientado a _nó_ seja mais comum.

Para regras de estratégia de fluxo de trabalho mais complexas, consulte [Ruleset Workflow Strategy Plugin](/user-guide/workflow-Strategies/ruleset.md)

## Passos do fluxo de trabalho

As seções a seguir descrevem como construir um fluxo de trabalho como um conjunto
de passos de diferentes tipos.

Ao criar uma nova definição de _Job_, o formulário de fluxo de trabalho será definido com
padrões e não têm passos de fluxo de trabalho definidos. O editor de fluxo de trabalho irá
tenha um formulário aberto pedindo para escolher um tipo de passo para adicionar.

![Add a passo](/assets/img/fig0402.png)

Para adicionar um novo passos, basta clicar no link "Adicionar um passo" dentro do fluxo de trabalho
forma de editor. Isso irá mostrar-lhe uma caixa de diálogo perguntando qual tipo de
passo que você gostaria de adicionar. Cada tipo de passo tem seu próprio
Formato. Quando terminar de preencher o formulário, pressione "Salvar" para adicioná-lo
para a sequência. Pressionar "Cancelar" fechará o formulário e sairá do
sequência inalterada.

![Adicionar um _formulário de passo_](/assets/img/fig0403.png)

Novos passos são sempre adicionados ao final da sequência. Ver
[Reordenando _etapas_](/# reordenando-passos)
para obter instruções sobre como mover passos para uma nova ordem.

Cada passo pode ter uma "Descrição" para dar a ele um nome ou descrição mais lógico a ser exibido na GUI da QW Control.

As próximas seções descrevem a especificação de cada tipo de
workflow passo.

### Tipos de Passos

Os passos em um fluxo de trabalho podem ser _Passos do nó_ ou _Passos do fluxo de trabalho_.

- _Passos do nó_ opera uma vez em cada _Nó_, o que pode ocorrer várias vezes em um fluxo de trabalho. Para obter uma lista completa de _Passos do nó_, consulte [_Passos do nó_](/user-guide/job-plugins.md#passos-do-no)
- _Passos do fluxo de trabalho_ opera apenas uma vez no fluxo de trabalho. Para obter uma lista completa de _Passos do fluxo de trabalho_, consulte [_Passos do fluxo de trabalho_](/user-guide/job-plugins.md#passos-do-fluxo-de-trabalho)

## Reordenando passos

A ordem dos passos do Fluxo de Trabalho pode ser modificada passando o mouse sobre qualquer
passo e, em seguida, clicando e arrastando o ícone de seta dupla para o
posição desejada.

![_Tarefa_ passo reordenar](/assets/img/fig0408.png)

Uma barra horizontal azul ajuda a destacar a posição
onde o _Job_ vai pousar.

![_Trabalho_ passo reordenar](/assets/img/fig0408a.png)

Depois de liberar o _Job_ selecionado, ele pousará na posição desejada
e o pedido passo será atualizado.

Se você deseja desfazer a passo reordenação, pressione o link "Desfazer" acima
os passos.

O botão "Refazer" pode ser pressionado para reaplicar a última alteração desfeita.

Pressione o botão "Reverter todas as alterações" para voltar à ordem passo original.

## Manipuladores de erro

Cada passo em um fluxo de trabalho pode ter uma ação "Manipulador de erros" associada. Este manipulador
é um passo secundário de qualquer um dos tipos disponíveis que será executado se o passo do fluxo de trabalho falha. Os passos do Error Handler podem ser usados ​​para recuperar o fluxo de trabalho de uma falha ou
simplesmente para executar uma ação secundária.

Isso fornece algumas maneiras diferentes de lidar com uma falha de passo:

- Imprima informações adicionais sobre uma falha
- Reverter uma mudança
- Recupere o fluxo de trabalho de falhas e continue normalmente

Quando um passo do fluxo de trabalho falha, o comportamento depende se ele tem um manipulador de erros ou não,
e o valor da configuração "keepgoing" para o fluxo de trabalho e o valor de "keepgoingOnSuccess" para o manipulador de erros.

- Quando um passo falha **sem um manipulador de erros**
  1. ) fluxo de trabalho é marcado como "falhou"
  2. Se `keepgoing = "false"`
     1. então todo o fluxo de trabalho para
  3. Caso contrário, as etapas restantes do fluxo de trabalho são executadas em ordem
  4. O fluxo de trabalho termina com um status de resultado de "falha"

Se você definir um manipulador de erros para um passo, o comportamento mudará. O manipulador pode recuperar a falha do passo executando com sucesso, e uma opção secundária "keepgoingOnSuccess"
permitem que você substitua o valor "keepgoing" do fluxo de trabalho se ele for falso.

- Quando um passo falha **com um manipulador de erros**
  1. O manipulador de erros é executado
  2. Se o manipulador de erros foi bem-sucedido e `keepgoingOnSuccess = "true"`
     1. O fluxo de trabalho `keepgoing` é ignorado,
     2. O status de falha do fluxo de trabalho não está marcado e continuará no próxima passo
  3. Caso contrário, se `keepgoing = "false"`
     1. O fluxo de trabalho está marcado como "falhou"
     2. Então, todo o fluxo de trabalho para
  4. Caso contrário, se `keepgoing = "true"`
     1. Se o manipulador de erros falhou, o fluxo de trabalho é marcado como "falhou"
     2. Caso contrário, o Fluxo de Trabalho não adicionalmente marcado
  5. os passos do fluxo de trabalho restantes são executados em ordem (incluindo outros manipuladores de erro acionados)
  6. quando o fluxo de trabalho termina, seu status depende se ele está marcado

Essencialmente, o status de resultado do manipulador de erros torna-se o status de resultado de seu passo, se o fluxo de trabalho
tem `keepgoing = "true"` ou se o manipulador de erros o sobrescrever com `keepgoingOnSuccess = "true"`. Se o manipulador de erros for bem-sucedido, o passo não será considerado como tendo falhado. Esse
inclui scripts, comandos, referências de _job_, etc. (Scripts e comandos devem ter um status de saída de `0` para
sucesso de retorno.)

É uma boa prática, ao definir Manipuladores de erro, **sempre** fazer com que eles falhem (por exemplo, scripts/comandos retornam um código de saída diferente de zero), a menos que você queira especificamente que eles sejam usados ​​para recuperação.

::: tip DICA
Os manipuladores de erros podem ser anexados a _Passos do nó_ ou _Passos do fluxo de trabalho_, e o tipo de passo e a Estratégia do Fluxo de Trabalho determinam que tipo de passos do manipulador de erros pode ser anexado a um passo. A única restrição é no caso do fluxo de trabalho ser "orientado a _Nó_", o que significa que o fluxo de trabalho é executado independentemente para cada _nó_. Neste caso, _Passos do nó_ só pode ter outros _Passos do nó_ como manipuladores de erro. Em outros casos, o Manipulador de erros pode ser outro _Passos do fluxo de trabalho_.
:::

Para adicionar um manipulador de erros, pressione o botão "configurações" no passo que deseja manipular.

![Adicionando um manipulador de erros](/assets/img/fig0410.png)

O formulário apresentado inclui o conjunto normal de passos que você pode adicionar a um fluxo de trabalho.

![Adicionando um manipulador de erros](/assets/img/fig0410a.png)

O exemplo abaixo mostra um manipulador de erros que chama um script por URL.

![Exemplo de manipulador de erros](/assets/img/fig0411.png)

### Informação de contexto

Quando o manipulador de passo erros é executado, seu contexto de execução conterá algumas informações sobre a natureza
da falha que ocorreu para o passo original.

No caso em que um _Passo do nó_ tem um _Passo do fluxo de trabalho_ como manipulador de erros, os dados de falha para vários _nós_ são agrupados em um único motivo de falha para ser usado pelo _Passo do fluxo de trabalho_.

Consulte a seção sobre [Variáveis ​​de contexto](/user-guide/job-workflows.html#variaveis-%E2%80%8B%E2%80%8Bde-contexto) para obter mais informações.

## Salve as alterações

Uma vez que as passos do Fluxo de Trabalho foram definidas e ordenadas, as mudanças são
salvo permanentemente após pressionar o botão "Criar" se for novo ou o
Botão "Atualizar" se o _Job_ estiver sendo modificado.

## Variáveis ​​de Contexto

Quando um passo do _Job_ é executado, ele possui um conjunto de variáveis ​​de "contexto" que você pode acessar no passo do _Job_. Existem vários conjuntos de variáveis ​​de contexto, incluindo: o contexto _Job_ `job`, o contexto _Nó_ `node`, e a contexto de Opção `option`.

_Job_ variáveis ​​de contexto (escopo global):

- `job.name`: Nome do _Job_
- `job.group`: Grupo do _Job_
- `job.id`: ID do _Job_
- `job.execid`: ID da execução atual
- `job.executionType`: tipo de execução, pode ser `usuário`, `agendado` ou `agendado pelo usuário` para execuções `Executar _Job_ mais tarde`
- `job.username`: Nome de usuário do usuário que está executando o _Job_
- `job.project`: Nome do projeto
- `job.loglevel`: nível de registro, um de: 'ERROR', 'WARN', 'INFO', 'VERBOSE', 'DEBUG'
- `job.user.email`: Executando o endereço de e-mail do usuário definido em [Perfil do usuário](/user-guide/10-user.md).
- `job.retryAttempt`: Um número que indica a tentativa, se esta execução for uma [nova tentativa](/# nova tentativa).
- `job.wasRetry`:`true` se esta execução for uma nova tentativa, caso contrário, `false`. Veja: [repetir](/# nova tentativa).
- `job.threadcount`: Threadcount (número de _nós_ executados de uma vez) do _Job_
- `job.filter`: O filtro usado para selecionar os _nós_ para este _job_ (se aplicável)

Variáveis ​​de contexto _Nó_ (escopo _Nó_):

- `node.name`: Nome do _Nó_ sendo executado em
- `node.hostname`: Nome do host do _Nó_
- `node.username`: Nome de usuário do usuário remoto
- `node.description`: Descrição do _nó_
- `node.tags`: lista separada por vírgulas de tags
- `node.os-*`: propriedades do sistema operacional do _Nó_: `name`,`version`,`arch`,`family`
- `node.*`: Todos os atributos _Nó_ definidos no _Nó_.

Variáveis ​​de contexto de execução (escopo global):

Os dados de execução são incluídos como um mapa denominado execução contendo as seguintes chaves e valores:

- `running.id`: ID da execução
- `running.href`: URL para a visualização de saída de execução
- `running.status`: estado de execução ('em execução', 'falhou', 'abortado', 'com êxito')
- `running.user`: usuário que iniciou o _job_
- `running.dateStarted`: hora de início (java.util.Date)
- `running.dateStartedUnixtime`: hora de início em milissegundos desde a época (longa)
- `running.dateStartedW3c`: hora de início como uma string formatada em W3C
- `running.description`: string de resumo para a execução
- `running.argstring`: string de argumento para qualquer opção de _job_
- `running.project`: nome do projeto
- `running.loglevel`: string de nível de log ('ERROR', 'WARN', 'INFO', 'VERBOSE', 'DEBUG')
Os seguintes valores podem estar disponíveis após o _job_ ser concluído (não disponível para o acionador onstart):
- `running.failedNodeListString`: lista separada por vírgulas de qualquer _nós_ que falhou, se presente
- `execution.failedNodeList`: Lista Java de quaisquer nomes de _nó_ que falharam, se presente
- `execution.succeededNodeListString`: lista separada por vírgulas de quaisquer _nós_ que tiveram sucesso, se presente
- `execution.succeededNodeList`: Lista Java de quaisquer nomes de _nó_ que tiveram sucesso, se presente
- `execution.nodestatus`: Mapa Java contendo contagens resumidas de _nó_ sucesso/falha/total, na forma: [sucesso: int, falha: int, total: int]
- `running.dateEnded`: hora de término (java.util.Date)
- `running.dateEndedUnixtime`: hora de término em milissegundos desde a época (longo)
- `running.dateEndedW3c`: hora de término como string formatada W3C
- `running.abortedby`: usuário que abortou a execução

Variáveis ​​de contexto adicionais do manipulador de erros (escopo global):

- `result.reason`: um código que indica a razão da falha do passo
  - Sequências de código de razão comum usadas por _nó_ execução de comandos ou scripts:
    - `NonZeroResultCode` - a execução retornou um código diferente de zero
    - `SSHProtocolFailure` - falha do protocolo SSH
    - `HostNotFound` - host não encontrado
    - `ConnectionTimeout` - tempo limite de conexão
    - `ConnectionFailure` - falha de conexão (por exemplo, recusada)
    - `IOFailure` - erro IO
    - `AuthenticationFailure` - autenticação foi recusada ou incorreta
  - Strings de código de razão usadas por referências de _Job_
    - `JobFailed` - o fluxo de trabalho de um _Job_ referenciado falhou
    - `NotFound` - referenciado _Job_ não encontrado
    - `Unauthorized` - referenciado _Job_ não autorizado
    - `InvalidOptions` - opções de entrada _Job_ referenciadas inválidas
    - `NoMatchedNodes` - filtros de despacho _Job_ _nó_ referenciados não tinham correspondência
  - Código de razão usado de um _Passo do nó_ com falha se o manipulador for um _Passo do fluxo de trabalho_
    - `NodeDispatchFailure` - um ou mais _nós_ falharam no passo
- `result.message`: uma string que descreve a falha
- `result.resultCode`: código de saída de uma execução (se disponível)
- `result.failedNodes`: lista separada por vírgulas de nomes _nó_ que falhou para um `NodeDispatchFailure`

Variáveis ​​de contexto de opção são referidas como `option.NAME` (mais sobre [_Job_ Options](/user-guide/job-options.md).)

Pode haver variáveis ​​de contexto adicionais disponíveis, como valores `data.*` Ao usar os [Plugins de filtro de registro de captura de dados](/user-guide/job-workflows.html#variaveis-%E2%80%8B%E2%80%8Bde-contexto).

### Uso da variável de contexto

Variáveis ​​de contexto podem ser usadas de algumas maneiras em um passo do _Job_, com sintaxes ligeiramente diferentes:

- Comandos, Argumentos de Script e _Job_ Argumentos de Referência

  : `${ctx.name}`

- Conteúdo de script embutido (_ver nota_)

  : `@ctx.name@`

::: tip NOTA
A expansão da variável "Conteúdo de script embutido" **não** está disponível para passos de "Arquivo de script". O arquivo de script não é reescrito quando usado para execução.
:::

::: tip DICA
Isso pode ser desativado, consulte [Guia do administrador> Referência do arquivo de configuração> framework.properties](/administration/configuration/config-file-reference.md#framework-properties).
:::

- Variáveis ​​de ambiente (_ver nota_)

  : `$RD_CTX_NAME`

  A sintaxe para variáveis ​​de ambiente é que todas as letras se tornam maiúsculas, a pontuação é substituída por sublinhado e o nome é prefixado com `RD`.

::: tip NOTA
Veja o capítulo [Configurando Máquina Remota para SSH](/administration/projects/_node_-execution/ssh.md#configuring-remote-machine-for-ssh) para informações sobre os requisitos do servidor SSH.
:::

- Sintaxe especial para escopos diferentes (veja abaixo)

### Sobre Escopos de Variável de Contexto

As variáveis ​​`job.*` e `execution.*` mencionadas acima existem no escopo Global.

Variáveis ​​de escopo global estão disponíveis para todos os tipos de passos de fluxo de trabalho.

Os valores `node.*` Estão disponíveis dentro de um escopo _Nó_. Pode haver vários Escopos de _Nó_ e cada Escopo de _Nó_ é vinculado a um Nome de _Nó_ específico.

Os valores dos Escopos de _Nó_ para um nome de _Nó_ específico estão disponíveis no mesmo Escopos para o mesmo _Nó_.

Variáveis ​​que são adicionadas ao Contexto enquanto o fluxo de trabalho está em execução, como variáveis ​​`data.*`, São adicionadas ao Escopo Global ou a um Escopo _Nó_.

Se a variável for incluída em um _Passo do nó_, os valores de dados serão armazenados no Escopos do _Nó_ para esse _nó_. Isso permite que vários valores sejam adicionados por diferentes _nós_ com o mesmo nome de variável.

Quaisquer variáveis ​​dentro do mesmo Escopo podem ser referenciadas sem sintaxe especial. Por exemplo, dentro de um _Passo do nó_ outras variáveis
adicionado ao Contexto dentro do mesmo _Nó_ Escopo para o mesmo _nó_ pode ser referenciado usando `${data.MyKey}`.

Se um valor não for encontrado para a referência de variável dentro do escopo atual, o escopo é "ampliado" para localizá-lo em um escopo superior. Portanto, todas as variáveis ​​com escopo global
os valores podem ser referenciados usando a sintaxe normal.

Os valores de escopo _Nó_ podem ser referenciados a partir do escopo Global ou de um escopo de _Nó_ diferente usando uma sintaxe especial:

- `${data.MyKey@MyNodeName}` - referencia a variável dentro do escopo _Nó_ para o `MyNodeName` _nó_.
- `${data.MyKey*}` - coleta todos os valores de variáveis ​​de todos os Escopos do _Nó_, e produz um único valor usando `,`(vírgula) para delimitar os valores.
- `${data.MyKey*;}` - especifica um delimitador diferente para os valores

::: tip DICA
Se uma referência de variável não produz o valor esperado, certifique-se de que o Escopo do valor e o Escopo do ponto de referência (ou seja, onde a referência da variável de contexto está sendo avaliada) correspondem.

O **Log Data** _Passo do fluxo de trabalho_ registrará todas as variáveis ​​de contexto com escopo definido, para visualizar quais valores estão disponíveis em um determinado ponto em um fluxo de trabalho.

A Estratégia de Fluxo de Trabalho usada no Fluxo de Trabalho rege quando passos executa: Uma estratégia sequencial significa que cada passo será processado antes de passos subsequentes, o que permite (por exemplo) Passo 2 fazer referência a qualquer valor armazenado em Passo 1, mesmo de _Nós_ diferentes. No entanto, um _Nó_ primeiro, Paralelo ou Estratégia de conjunto de regras terá um comportamento diferente, portanto, dependendo da ordem em que os Passos são executados, alguns valores capturados podem ou não estar presentes.
:::

### Plugins de filtro de registro de captura de dados

O QW Control oferece dois plug-ins de filtro de registro de captura de dados diferentes. O primeiro, Dados de valor-chave, captura dados simples de chave/valor usando um formato de texto simples. O segundo, Multiline Regex Data Capture, captura dados de chave/valor regex multilinha usando um formato de texto simples. Os plug-ins do filtro de registro de captura de dados permitem que os usuários definam e utilizem variáveis ​​de dados em vários _job_ passos.

Para obter mais informações sobre dados de valor-chave, consulte [Dados de valor-chave](/user-guide/log-filters/key-value-data.md).

Para obter mais informações sobre dados de valor-chave, consulte [Multiline Regex Capture](/user-guide/log-filters/multi-line-regex.md).

### Ferramentas de linha de comando e acesso à API

_Jobs_ podem ser exportados ou importados no formato XML ou Yaml usando a API ou a ferramenta CLI `rd`.

- [Exportando _Jobs_](/api/qwcontrol-api.md#export-jobs)
- [Importing _Jobs_](/api/qwcontrol-api.md#importing-jobs)
- [Ferramenta RD CLI](https://qwsoftware.github.io/wcontrol-cli/)
