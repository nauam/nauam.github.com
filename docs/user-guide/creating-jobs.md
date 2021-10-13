# Criação de _jobs_

## Criando um _job_

Na página _Jobs_, pressione o menu "Novo _job_" para começar a criar um _Job_. O menu contém itens para criar uma definição de _job_ ou fazer upload de uma definição de um arquivo.

![Create _Job_ menu](/assets/img/fig0301.png)

Para o primeiro exemplo de _job_, crie um _job_ que chama o script de informações.

Como no exemplo anterior, comece pressionando o item de menu "Novo _Job_".

No novo formulário de _job_:

Para "Nome do _Job_", digite "info" e para "Grupo", digite "administração/recursos". Se você deseja especificar seu próprio UUID, pode inseri-lo no campo. Caso contrário, um valor exclusivo será definido para você. Fornecer uma descrição será útil para outros usuários compreenderem a intenção e o propósito do _Job_.

Dê uma descrição ao _job_. É recomendada fornecer uma breve descrição na primeira linha. Crie uma linha em branco e todas as linhas subsequentes podem usar o formato de redução. Você pode ver a linha 3, tem um texto que mostra um link de URL em formato de marcação. Quando a QW Control mostra o _job_, essas informações extras podem ser exibidas para o usuário. Rich text é útil para vincular a ferramentas externas ou até mesmo tabelas e gráficos. Qualquer coisa útil para apoiar o usuário do _job_.

Marque a caixa "Enviar para _Nós_". Escolha a opção "Excluir Filtros _Nó_" e digite o nome do seu servidor do QW controle. Isso fará com que o _job_ seja executado apenas nos _nós_ remotos (por exemplo, centos54 e ubuntu).

Digite um script de shell que produza algumas informações (por exemplo, `uname -a`)

Salve o _Passo do Fluxo de Trabalho_.

Pressione o botão "Criar" na parte inferior da página.

![Simple saved _job_ form](/assets/img/fig0303.png)

Depois que o _job_ é criado, o navegador é direcionado para a página do _job_ que você acabou de criar. O _job_ pode ser executado clicando no botão Executar _job_ agora.

![Simple _job_ form](/assets/img/fig0303-a.png)

Quando você vai para a _Jobs_ página, você verá ícones de pasta refletindo o grupo do _job_. Navegue até a pasta de administração/recursos. Observe que as informações extras são exibidas, o markdown agora é renderizado como HTML.

Observe o botão play antes do nome do _job_.

Pressione o botão play para executar o _Job_.

![Simple saved _job_](/assets/img/fig0304.png)

Pressione o botão "Executar _Job_ Agora" para iniciar a execução. O _job_ será enfileirado e executado. Você será levado à página de detalhes de execução do _Job_.

![Simple saved _job_ output](/assets/img/fig0305.png)

### Múltiplas execuções

Por padrão, um _job_ é executado como uma "Execução Única" - ele só pode ter uma única execução por vez. Isso é útil se as etapas executadas pelo Job puderem ser interferidas se outro processo separado também as estiver executando no(s) mesmo(s) _Nó(s)_ .

No entanto, em alguns casos, é útil permitir que uma tarefa seja executada mais de uma vez ao mesmo tempo.

Você pode fazer um _job_ permitir "Execuções múltiplas" alternando o valor para "Sim" no campo do editor de _jobs_ mostrado abaixo:

![Multiple executions](/assets/img/fig0324.png)

### Tempo esgotado

Você pode definir um tempo de execução máximo para um _job_. Se o tempo de execução exceder esse valor, o _job_ será interrompido (como se um usuário o tivesse eliminado.) (Observação: o tempo limite só afeta o _job_ se for chamado diretamente, não se for usado como uma referência de _job_ ).

![_Job_ Timeout field](/assets/img/jobs-timeout-field.png)

O valor do tempo limite pode ser:

- Alguns segundos, como `240`
- Uma string indicando números e unidades, como "1d 12h 30m 24s". Cada número deve ter uma letra de unidade ao lado dele. A duração total do tempo limite será a soma dos valores. As unidades disponíveis são "d" (dias) "h" (horas) "m" (minutos) e "s" (segundos, padrão se não especificado).
- Uma referência de propriedade incorporada, como `${option.timeout}`. Isso permite que uma opção de _job_ seja usada para alterar o tempo limite do _job_.

### Tentar novamente

Você pode definir um número máximo de tentativas para um _job_. Se uma tarefa falhar ou atingir o tempo limite, ela será executada novamente até o número especificado de vezes até ser bem-sucedida. (Observação: a nova tentativa só afeta o _job_ se for invocado diretamente, não se for usado como uma referência de _job_.)

![_Job_ Retry field](/assets/img/jobs-retry-field.png)

O valor da nova tentativa pode ser:

- Um número inteiro específico
- Uma referência de propriedade incorporada, como `${option.retryMax}`. Isso permite que uma opção de _job_ seja usada para alterar a contagem de novas tentativas do _job_.

Cada execução será iniciada com variáveis ​​de contexto indicando a tentativa de nova tentativa atual e se foi uma nova tentativa. Veja [Variáveis ​​de Contexto](/manual/job-workflows.md#context-variables).

Opcionalmente, um atraso entre as novas tentativas pode ser estabelecido:

- Alguns segundos, como `30`
- Uma string indicando números e unidades, como "1d 12h 30m 24s". Cada número deve ter uma letra de unidade ao lado dele. A duração total do tempo limite será a soma dos valores. As unidades disponíveis são "d" (dias) "h" (horas) "m" (minutos) e "s" (segundos, padrão se não especificado).
- Uma referência de propriedade incorporada, como `${option.delay}`. Isso permite que uma opção de _job_ seja usada para alterar o intervalo entre as novas tentativas do _job_.

![_Job_ Delay between retries field](/assets/img/jobs-retry-delay-field.png)

### Limite de log

Você pode especificar um limite de log, que pode executar uma ação dependendo de quanta saída de log o _job_ produz.

O limite pode ser definido de três maneiras:

- Número máximo total de linhas de registro
- Tamanho máximo total do arquivo de log
- Número máximo de linhas de log para um único _nó_

![_Job_ Log limit](/assets/img/jobs-loglimit-field.png)

Insira um valor no campo "Limite de saída de log". A sintaxe do valor que você insere determina o tipo de limite:

- `###` Se você especificar um número, ele será tratado como o "Número total máximo de linhas de registro"

- `###/node` Se você especificar um número seguido por `/node`, o número é tratado como o "Número máximo de linhas de log para um único _nó_"
- `###[GMK]B` Se você especificar um número seguido por um sufixo de tamanho de arquivo, isso será tratado como o "tamanho total do arquivo de log". Os sufixos de tamanho de arquivo permitidos são "GB" (gigabyte), "MB" (megabyte), "KB" (kilobyte) e "B" (byte).

E uma das três ações pode ser realizada se o limite for excedido:

- Halt
  - O _job_ será interrompido com um determinado status
  - Insira uma string de status no campo, como "falhou" ou "abortado", ou qualquer status personalizado
- Truncar e continuar
  - o _job_ não será interrompido, mas nenhuma outra saída de log será produzida.

![_Job_ Log limit action](/assets/img/jobs-loglimit-action.png)

### Despachando e filtrando _Nó_

Ao criar um _job_, você pode escolher entre executar o _job_ apenas localmente (no servidor QW Control) ou despachá-lo para vários _nós_ (incluindo o servidor QW Control, se desejar).

Na GUI, a caixa de seleção "Despacho para _nós_" permite que você habilite o despacho de _nó_. Quando você clica nesta caixa, é apresentada a interface de filtro do _Nó_:

![_Nó_ Filtering interface](/assets/img/fig0305-b.png)

#### Filtros

Você pode clicar nos diferentes campos de filtro "Nome" e "Tags" para inserir valores de filtro para esses campos. Ao atualizar os valores, você verá a seção "_Nós_ correspondentes" atualizada para refletir a lista de _nós_ que corresponderão às entradas. Você pode clicar em "Mais" para ver mais filtros de inclusão disponíveis, e você pode clicar em "Filtros estendidos" para inserir filtros de exclusão para os mesmos campos.

::: tip
Por padrão, a seção "_Nós_ correspondentes" mostrará no máximo 100 _nós_ no resultado da pesquisa. Para personalizar este valor máximo, você deve definir a propriedade `qwsoftware.gui.matchedNodesMaxCount` no arquivo qwcontrol-config.property
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

A opção "Continuar executando em quaisquer _nós_ restantes antes de falhar na etapa" permitirá que os _nós_ restantes continuem a ser executados até que todos tenham sido executados. No final do fluxo de _job_ para todos os _nós_, a execução do _job_ falhará se algum dos _nós_ tiver falhado.

#### Filtros de _nós_ dinâmicos

Além de inserir valores estáticos que correspondem aos _nós_, você também pode usar valores mais dinâmicos.

Se você definiu opções para o _job_ (consulte [Opções do _job_](/user-guide/job-options.md)), você pode usar os valores enviados pelo usuário quando o _job_ é executado como parte da filtragem de _nó_.

Basta definir o valor do filtro como `${option.name}`, onde "nome" é o nome da opção.

Quando a tarefa for executada, o usuário será solicitado a inserir o valor da opção, e isso será usado no filtro _nó_ para determinar os _nós_ a serem despachados.

::: tip DICA
Uma vez que o valor da opção dinâmica ainda não foi definido, os "_Nós_ Combinados" mostrados na entrada de filtragem de _nó_ podem indicar que há "Nenhum" correspondido. Além disso, quando o Job é executado, você pode ver uma mensagem dizendo "Aviso: Os filtros _Nó_ especificados para este Job não correspondem a nenhum _nó_, a execução pode falhar." Os _nós_ combinados serão determinados após o usuário inserir os valores da opção.
:::

#### Orquestrador

Os orquestradores definem como um _job_ orquestra o envio de execuções para vários _nós_.

O comportamento padrão é despachar com base nestes valores de configuração de _job_ :

- Threadcount: quantos _nós_ processar em paralelo
- Ordem de classificação: qual atributo _nó_ usar para classificar os _nós_ (o padrão é o nome _nó_.), E se classificar em ordem crescente ou decrescente
Você pode selecionar um plug-in do orquestrador para usar, que pode escolher sua própria lógica para quantos e em que ordem processar os _nós_.

Para saber como desenvolver seu próprio plugin do orquestrador, consulte o [Guia do desenvolvedor do plugin - Plugin do orquestrador](/developer/09-orchestrator-plugin.md).

### Agendando Jobs _Jobs_

Os _jobs_ podem ser configurados para execução periódica. Se você deseja criar um _job_ agendado, selecione Sim em "Agendar para executar repetidamente?"

![Scheduled _job_ simple form](/assets/img/fig0306.png)

A programação pode ser definida em um seletor gráfico simples ou formato Unix crontab.

Para usar o seletor simples, escolha uma hora e minuto. Você pode então escolher "Todos os dias" (padrão) ou desmarcar essa opção e selecionar dias da semana individuais. Você pode selecionar "Todos os meses" (padrão) ou desmarcar essa opção e escolher meses específicos do ano:

Se o formato de data e hora do crontab for preferido, insira uma expressão cron.

![Scheduled _job_ crontab form](/assets/img/fig0307.png)

Use a sintaxe do crontab referenciada aqui: [Quartz Scheduler crontrigger](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html).

Um bom lugar para gerar, validar e testar crontabs de jobs é [aqui](https://www.freeformatter.com/cron-expression-generator-quartz.html).

Depois que o _job_ foi atualizado para incluir uma programação, um ícone de relógio será exibido quando o _job_ for listado:

![Scheduled _job_ icon](/assets/img/fig0308.png)

### Notificações de _Job_

Notificações de _job_ são mensagens acionadas por um evento de _job_. [Mais detalhes aqui sobre notificações de _job_](/jobs/job-notifications.md).

## Excluindo _Jobs_

Na página de visualização do _Job_, clique no botão Ação para um menu de ações e selecione "Excluir este _Job_..." para excluir o _Job_.

![_Job_ delete button](/assets/img/fig0311.png)

Clique em "Excluir" quando disser "Deseja realmente excluir este _Job_?"

Se você tiver acesso, poderá optar por excluir todas as execuções do _job_ também.

## Atualizando e copiando _Jobs_

Todos os dados definidos ao criar um _job_ podem ser modificados (exceto UUID). Para editar uma tarefa, você pode clicar no ícone "editar tarefa":

![edit _job_ button](/assets/img/fig0312.png)

Da mesma forma, para copiar uma definição de _job_ para um novo _job_, pressione o botão "duplicar para um novo _job_".

![duplicate _job_ button](/assets/img/fig0313.png)

## Exportando definições do _Job_

As definições de _job_ criadas dentro do console gráfico do QW Control podem ser exportadas para os formatos de arquivo XML ou YAML e ser usadas para importação posterior.

Existem dois métodos para recuperar as definições de _Job_: por meio da interface gráfica do QW Control e por meio da ferramenta shell [rd- jobs ].

Na guia Definição do _Job_, localize o botão de menu "Download da definição". Clicar no ícone permitirá que você escolha o formato XML ou YAML para baixar a definição.

![_Job_ export button](/assets/img/fig0314.png)

Clique no formato preferido para iniciar o download do arquivo para o seu navegador.

Para exportar _jobs_ para um repositório git, consulte o [plug-in Git](/administration/projects/scm/git.md#configuring-git-export)

## Importando definições de _Job_

Se você tem um arquivo de definição de _job_ (veja acima) e deseja carregá-lo por meio da interface da web da GUI, você pode fazer isso.

Clique no botão de menu "Criar _job_ " na lista de _jobs_.

Clique no item que diz "Definição de upload...":

![_Job_ import button](/assets/img/fig0315.png)

Clique no botão Escolher arquivo e escolha o arquivo de definição de _job_ para fazer o upload.

![_Job_ import form](/assets/img/fig0316.png)

Escolha uma opção onde diz "Quando já existe um _job_ com o mesmo nome:":

- Atualizar
  - Significa que um _job_ definido no xml substituirá qualquer _job_ existente com o mesmo nome.
- Ignorar
  - Significa que um _job_ definido no xml será ignorado se houver um _job_ existente com o mesmo nome
- Criar
  - Isso significa que o _job_ definido no xml serão utilizados para criar um novo _job_ se houver um já existente _job_ com o mesmo nome.

Escolha uma opção onde diz "_Jobs_ importados":

- Preservar UUIDs
  - Isso significa que os UUIDs definidos nos _jobs_ importados serão usados ​​ao importá-los. Os UUIDs devem ser únicos, portanto, se você tiver um Job com o mesmo UUID definido em qualquer projeto, sua importação pode falhar.
- Remover UUIDs
  - Isto significa que importados Job UUIDs será ignorado, e os importados empregos será ou atualizar um já existente _job_, ou ser criada com um novo UUID.

Clique no botão Upload. Se houver algum erro nas definições de _job_ no arquivo XML, eles serão exibidos na página.

Para importar _jobs_ de um repositório git, consulte o [Git plug-in](/administration/projects/scm/git.md#git-import-configuration)
