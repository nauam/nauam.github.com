# Criação de 

## Criando um 

Na página , pressione o menu "Novo " para começar a criar um . O menu contém itens para criar uma definição de  ou fazer upload de uma definição de um arquivo.

![Create  menu](/assets/img/fig0301.png)

Para o primeiro exemplo de , crie um  que chama o script de informações.

Como no exemplo anterior, comece pressionando o item de menu "Novo ".

No novo formulário de :

Para "Nome do ", digite "info" e para "Grupo", digite "administração/recursos". Se você deseja especificar seu próprio UUID, pode inseri-lo no campo. Caso contrário, um valor exclusivo será definido para você. Fornecer uma descrição será útil para outros usuários compreenderem a intenção e o propósito do .

Dê uma descrição ao . É recomendada fornecer uma breve descrição na primeira linha. Crie uma linha em branco e todas as linhas subsequentes podem usar o formato de redução. Você pode ver a linha 3, tem um texto que mostra um link de URL em formato de marcação. Quando a mostra o , essas informações extras podem ser exibidas para o usuário. Rich text é útil para vincular a ferramentas externas ou até mesmo tabelas e gráficos. Qualquer coisa útil para apoiar o usuário do .

Marque a caixa "Enviar para _Nós_". Escolha a opção "Excluir Filtros _Nó_" e digite o nome do seu servidor do e. Isso fará com que o  seja executado apenas nos _nós_ remotos (por exemplo, centos54 e ubuntu).

Digite um script de shell que produza algumas informações (por exemplo, `uname -a`)

Salve o _Passo do Fluxo de Trabalho_.

Pressione o botão "Criar" na parte inferior da página.

![Simple saved  form](/assets/img/fig0303.png)

Depois que o  é criado, o navegador é direcionado para a página do  que você acabou de criar. O  pode ser executado clicando no botão Executar  agora.

![Simple  form](/assets/img/fig0303-a.png)

Quando você vai para a  página, você verá ícones de pasta refletindo o grupo do . Navegue até a pasta de administração/recursos. Observe que as informações extras são exibidas, o markdown agora é renderizado como HTML.

Observe o botão play antes do nome do .

Pressione o botão play para executar o .

![Simple saved ](/assets/img/fig0304.png)

Pressione o botão "Executar  Agora" para iniciar a execução. O  será enfileirado e executado. Você será levado à página de detalhes de execução do .

![Simple saved  output](/assets/img/fig0305.png)

### Múltiplas execuções

Por padrão, um  é executado como uma "Execução Única" - ele só pode ter uma única execução por vez. Isso é útil se as etapas executadas pelo  puderem ser interferidas se outro processo separado também as estiver executando no(s) mesmo(s) _Nó(s)_ .

No entanto, em alguns casos, é útil permitir que uma tarefa seja executada mais de uma vez ao mesmo tempo.

Você pode fazer um  permitir "Execuções múltiplas" alternando o valor para "Sim" no campo do editor de  mostrado abaixo:

![Multiple executions](/assets/img/fig0324.png)

### Tempo esgotado

Você pode definir um tempo de execução máximo para um . Se o tempo de execução exceder esse valor, o  será interrompido (como se um usuário o tivesse eliminado.) (Observação: o tempo limite só afeta o  se for chamado diretamente, não se for usado como uma referência de  ).

![ Timeout field](/assets/img/s-timeout-field.png)

O valor do tempo limite pode ser:

- Alguns segundos, como `240`
- Uma string indicando números e unidades, como "1d 12h 30m 24s". Cada número deve ter uma letra de unidade ao lado dele. A duração total do tempo limite será a soma dos valores. As unidades disponíveis são "d" (dias) "h" (horas) "m" (minutos) e "s" (segundos, padrão se não especificado).
- Uma referência de propriedade incorporada, como `${option.timeout}`. Isso permite que uma opção de  seja usada para alterar o tempo limite do .

### Tentar novamente

Você pode definir um número máximo de tentativas para um . Se uma tarefa falhar ou atingir o tempo limite, ela será executada novamente até o número especificado de vezes até ser bem-sucedida. (Observação: a nova tentativa só afeta o  se for invocado diretamente, não se for usado como uma referência de .)

![ Retry field](/assets/img/s-retry-field.png)

O valor da nova tentativa pode ser:

- Um número inteiro específico
- Uma referência de propriedade incorporada, como `${option.retryMax}`. Isso permite que uma opção de  seja usada para alterar a contagem de novas tentativas do .

Cada execução será iniciada com variáveis ​​de contexto indicando a tentativa de nova tentativa atual e se foi uma nova tentativa. Veja [Variáveis ​​de Contexto](/manual/-workflows.md#context-variables).

Opcionalmente, um atraso entre as novas tentativas pode ser estabelecido:

- Alguns segundos, como `30`
- Uma string indicando números e unidades, como "1d 12h 30m 24s". Cada número deve ter uma letra de unidade ao lado dele. A duração total do tempo limite será a soma dos valores. As unidades disponíveis são "d" (dias) "h" (horas) "m" (minutos) e "s" (segundos, padrão se não especificado).
- Uma referência de propriedade incorporada, como `${option.delay}`. Isso permite que uma opção de  seja usada para alterar o intervalo entre as novas tentativas do .

![ Delay between retries field](/assets/img/s-retry-delay-field.png)

### Limite de log

Você pode especificar um limite de log, que pode executar uma ação dependendo de quanta saída de log o  produz.

O limite pode ser definido de três maneiras:

- Número máximo total de linhas de registro
- Tamanho máximo total do arquivo de log
- Número máximo de linhas de log para um único _nó_

![ Log limit](/assets/img/s-loglimit-field.png)

Insira um valor no campo "Limite de saída de log". A sintaxe do valor que você insere determina o tipo de limite:

- `###` Se você especificar um número, ele será tratado como o "Número total máximo de linhas de registro"

- `###/node` Se você especificar um número seguido por `/node`, o número é tratado como o "Número máximo de linhas de log para um único _nó_"
- `###[GMK]B` Se você especificar um número seguido por um sufixo de tamanho de arquivo, isso será tratado como o "tamanho total do arquivo de log". Os sufixos de tamanho de arquivo permitidos são "GB" (gigabyte), "MB" (megabyte), "KB" (kilobyte) e "B" (byte).

E uma das três ações pode ser realizada se o limite for excedido:

- Halt
  - O  será interrompido com um determinado status
  - Insira uma string de status no campo, como "falhou" ou "abortado", ou qualquer status personalizado
- Truncar e continuar
  - o  não será interrompido, mas nenhuma outra saída de log será produzida.

![ Log limit action](/assets/img/s-loglimit-action.png)

### Despachando e filtrando _Nó_

Ao criar um , você pode escolher entre executar o  apenas localmente (no servidor ) ou despachá-lo para vários _nós_ (incluindo o servidor , se desejar).

Na GUI, a caixa de seleção "Despacho para _nós_" permite que você habilite o despacho de _nó_. Quando você clica nesta caixa, é apresentada a interface de filtro do _Nó_:

![_Nó_ Filtering interface](/assets/img/fig0305-b.png)

#### Filtros

Você pode clicar nos diferentes campos de filtro "Nome" e "Tags" para inserir valores de filtro para esses campos. Ao atualizar os valores, você verá a seção "_Nós_ correspondentes" atualizada para refletir a lista de _nós_ que corresponderão às entradas. Você pode clicar em "Mais" para ver mais filtros de inclusão disponíveis, e você pode clicar em "Filtros estendidos" para inserir filtros de exclusão para os mesmos campos.

::: tip
Por padrão, a seção "_Nós_ correspondentes" mostrará no máximo 100 _nós_ no resultado da pesquisa. Para personalizar este valor máximo, você deve definir a propriedade `.gui.matchedNodesMaxCount` no arquivo -config.property
:::

#### Threadcount

Você pode definir o número máximo de threads simultâneos a serem usados ​​alterando a caixa "Thread Count". Um valor de 1 significa que todos os despachos de _nó_ acontecem sequencialmente, e qualquer valor maior significa que os despachos de _nó_ acontecerão em paralelo.

#### Ordem de classificação

Você pode alterar a ordem em que os _nós_ são executados definindo o "Atributo de classificação" e a "Ordem de classificação". Por padrão, os _nós_ são ordenados por nome (atributo "nodename") em ordem crescente. Você pode alterar o atributo _nó_ para classificar inserindo-o aqui, por exemplo "classificação", e você pode alterar a ordem para decrescente para classificar ao contrário.

Se o atributo que você usar tiver um valor de número inteiro, os _nós_ serão classificados numericamente por esse atributo, em vez de lexicamente. Caso contrário, a classificação é baseada no valor da string em vez do valor inteiro.

Todos os _nós_ sem o atributo especificado serão classificados por seus nomes.

#### Se um _nó_ falhar

Esta configuração determina como continuar se um dos _nós_ apresentar uma falha.

A opção "Falha na etapa sem executar em nenhum _nó_ remanescente" fará com que nenhum despacho adicional seja executado e a Execução da Tarefa falhará imediatamente.

A opção "Continuar executando em quaisquer _nós_ restantes antes de falhar na etapa" permitirá que os _nós_ restantes continuem a ser executados até que todos tenham sido executados. No final do fluxo de  para todos os _nós_, a execução do  falhará se algum dos _nós_ tiver falhado.

#### Filtros de _nós_ dinâmicos

Além de inserir valores estáticos que correspondem aos _nós_, você também pode usar valores mais dinâmicos.

Se você definiu opções para o  (consulte [Opções do ](/user-guide/-options.md)), você pode usar os valores enviados pelo usuário quando o  é executado como parte da filtragem de _nó_.

Basta definir o valor do filtro como `${option.name}`, onde "nome" é o nome da opção.

Quando a tarefa for executada, o usuário será solicitado a inserir o valor da opção, e isso será usado no filtro _nó_ para determinar os _nós_ a serem despachados.

::: tip DICA
Uma vez que o valor da opção dinâmica ainda não foi definido, os "_Nós_ Combinados" mostrados na entrada de filtragem de _nó_ podem indicar que há "Nenhum" correspondido. Além disso, quando o  é executado, você pode ver uma mensagem dizendo "Aviso: Os filtros _Nó_ especificados para este  não correspondem a nenhum _nó_, a execução pode falhar." Os _nós_ combinados serão determinados após o usuário inserir os valores da opção.
:::

#### Orquestrador

Os orquestradores definem como um  orquestra o envio de execuções para vários _nós_.

O comportamento padrão é despachar com base nestes valores de configuração de  :

- Threadcount: quantos _nós_ processar em paralelo
- Ordem de classificação: qual atributo _nó_ usar para classificar os _nós_ (o padrão é o nome _nó_.), E se classificar em ordem crescente ou decrescente
Você pode selecionar um plug-in do orquestrador para usar, que pode escolher sua própria lógica para quantos e em que ordem processar os _nós_.

Para saber como desenvolver seu próprio plugin do orquestrador, consulte o [Guia do desenvolvedor do plugin - Plugin do orquestrador](/developer/09-orchestrator-plugin.md).

### Agendando s 

Os  podem ser configurados para execução periódica. Se você deseja criar um  agendado, selecione Sim em "Agendar para executar repetidamente?"

![Scheduled  simple form](/assets/img/fig0306.png)

A programação pode ser definida em um seletor gráfico simples ou formato Unix crontab.

Para usar o seletor simples, escolha uma hora e minuto. Você pode então escolher "Todos os dias" (padrão) ou desmarcar essa opção e selecionar dias da semana individuais. Você pode selecionar "Todos os meses" (padrão) ou desmarcar essa opção e escolher meses específicos do ano:

Se o formato de data e hora do crontab for preferido, insira uma expressão cron.

![Scheduled  crontab form](/assets/img/fig0307.png)

Use a sintaxe do crontab referenciada aqui: [Quartz Scheduler crontrigger](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html).

Um bom lugar para gerar, validar e testar crontabs de s é [aqui](https://www.freeformatter.com/cron-expression-generator-quartz.html).

Depois que o  foi atualizado para incluir uma programação, um ícone de relógio será exibido quando o  for listado:

![Scheduled  icon](/assets/img/fig0308.png)

### Notificações de 

Notificações de  são mensagens acionadas por um evento de . [Mais detalhes aqui sobre notificações de ](/s/-notifications.md).

## Excluindo 

Na página de visualização do , clique no botão Ação para um menu de ações e selecione "Excluir este ..." para excluir o .

![ delete button](/assets/img/fig0311.png)

Clique em "Excluir" quando disser "Deseja realmente excluir este ?"

Se você tiver acesso, poderá optar por excluir todas as execuções do  também.

## Atualizando e copiando 

Todos os dados definidos ao criar um  podem ser modificados (exceto UUID). Para editar uma tarefa, você pode clicar no ícone "editar tarefa":

![edit  button](/assets/img/fig0312.png)

Da mesma forma, para copiar uma definição de  para um novo , pressione o botão "duplicar para um novo ".

![duplicate  button](/assets/img/fig0313.png)

## Exportando definições do 

As definições de  criadas dentro do console gráfico do podem ser exportadas para os formatos de arquivo XML ou YAML e ser usadas para importação posterior.

Existem dois métodos para recuperar as definições de : por meio da interface gráfica do e por meio da ferramenta shell [rd- s ].

Na guia Definição do , localize o botão de menu "Download da definição". Clicar no ícone permitirá que você escolha o formato XML ou YAML para baixar a definição.

![ export button](/assets/img/fig0314.png)

Clique no formato preferido para iniciar o download do arquivo para o seu navegador.

Para exportar  para um repositório git, consulte o [plug-in Git](/administration/projects/scm/git.md#configuring-git-export)

## Importando definições de 

Se você tem um arquivo de definição de  (veja acima) e deseja carregá-lo por meio da interface da web da GUI, você pode fazer isso.

Clique no botão de menu "Criar  " na lista de .

Clique no item que diz "Definição de upload...":

![ import button](/assets/img/fig0315.png)

Clique no botão Escolher arquivo e escolha o arquivo de definição de  para fazer o upload.

![ import form](/assets/img/fig0316.png)

Escolha uma opção onde diz "Quando já existe um  com o mesmo nome:":

- Atualizar
  - Significa que um  definido no xml substituirá qualquer  existente com o mesmo nome.
- Ignorar
  - Significa que um  definido no xml será ignorado se houver um  existente com o mesmo nome
- Criar
  - Isso significa que o  definido no xml serão utilizados para criar um novo  se houver um já existente  com o mesmo nome.

Escolha uma opção onde diz " importados":

- Preservar UUIDs
  - Isso significa que os UUIDs definidos nos  importados serão usados ​​ao importá-los. Os UUIDs devem ser únicos, portanto, se você tiver um  com o mesmo UUID definido em qualquer projeto, sua importação pode falhar.
- Remover UUIDs
  - Isto significa que importados  UUIDs será ignorado, e os importados empregos será ou atualizar um já existente , ou ser criada com um novo UUID.

Clique no botão Upload. Se houver algum erro nas definições de  no arquivo XML, eles serão exibidos na página.

Para importar  de um repositório git, consulte o [Git plug-in](/administration/projects/scm/git.md#git-import-configuration)
