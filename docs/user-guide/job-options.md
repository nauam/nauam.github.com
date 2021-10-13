# Opções de _Job_

O _Jobs_ pode ser configurado para solicitar a entrada de um usuário, definindo uma ou mais opções nomeadas. Uma opção modela um parâmetro nomeado que pode ser obrigatório ou opcional e inclui uma gama de opções que irão serão apresentado ao usuário quando o _Job_ for executado.

Os usuários fornecem opções digitando um valor ou selecionando em um menu de opções. Um padrão de validação garante que a entrada está em conformidade com o requisito da opção. Uma vez escolhido, o valor escolhido para a opção fica acessível aos comandos chamados pelo _Job_.

As escolhas de opções podem ser modeladas como um conjunto estático ou de uma fonte dinâmica. As escolhas estáticas podem ser modeladas como uma lista separada por vírgulas na definição de _job_. Quando os valores de opção devem ser dinâmicos, o _Job_ pode ser definido para usar uma URL para recuperar dados de opção de uma fonte externa. Habilitar _Jobs_ para acessar fontes externas via URL abre a porta para integrar o QW Control com outras ferramentas e incorporar seus dados em _Job_ workflows.

## Solicitando ao usuário

O efeito óbvio de definir opções de _Job_ é sua aparência para o usuário executando o _Job_. Os usuários verão uma página chamada "Escolha Opções de execução..." onde as opções de entrada e de menu devem ser configuradas.

Usuários de linha de comando executando _Jobs_ via shell `run`
ferramenta também irá especificar opções como uma string de argumento.

::: warning AVISO
O comando `run` não solicita ao usuário as opções necessárias, então você deve especificá-las diretamente.
:::

Vale a pena gastar um momento para considerar como as opções se tornam parte da interface do usuário para _Jobs_ e pensar um pouco sobre o próximo nível de formalização do procedimento.

- Convenção de nomenclatura e descrição: Visualize como o usuário lerá o nome da opção e julgará sua finalidade a partir da descrição fornecida.
- Opções obrigatórias: Tornar uma opção obrigatória significa que o _Job_ falhará se um usuário não especificar um valor que não seja em branco. Em outras palavras, um valor em branco ou ausente não é permitido para a opção.
- Restrições de entrada e validação: Se você precisa fazer com que o valor da opção seja um tanto aberto, considere como você pode criar salvaguardas para controlar sua escolha.

## Tipos de entrada

Tipos de entrada de opção definem como a opção é apresentada na GUI e como ela é usada quando o _Job_ é executado.

Tipos de entrada:

- "Simples"
  - uma opção normal que é mostrada em texto claro
- "Seguro"
  - uma opção segura que é obscurecida no momento da entrada do usuário e cujo valor não é armazenado no banco de dados. Veja [opções de segurança](/user-guide/job-options.md#opcoes-de-seguranca).
- "Autenticação remota segura"
  - uma opção segura que é usada apenas para autenticação remota e não é exposta em scripts ou comandos. Consulte [opções de autenticação remota segura](/user-guide/job-options.html#opcoes-de-autenticacao-remota-segura).

## Editor de opções

As opções podem ser criadas para qualquer _Job_ armazenado. A página de edição _Job_ contém uma área que exibe um resumo das opções existentes e um link para adicionar novas ou editar as existentes.

![Adicionar link de opção](/assets/img/fig0501.png)

O resumo de opções mostra cada opção e seu valor padrão, se os definir.

Clicar no link "editar" abre o editor de opções.

![Editor de opções](/assets/img/fig0503.png)

O editor de opções exibe um resumo expandido para cada opção definida. Cada opção é listada com seu resumo de uso, descrição, lista de valores e quaisquer restrições. Pressionar o link "Adicionar uma opção" abrirá um formulário para definir um novo parâmetro. Pressionar o link "Fechar" recolherá o editor de opções e retornará à visualização resumida.

Mover o mouse sobre qualquer linha no editor de opções revela links para excluir ou editar a opção destacada. Pressionar o ícone de remoção exibirá um prompt confirmando que você deseja excluir essa opção do _Job_.

Clicar no link "editar" abre um novo formulário que permite modificar todos os aspectos dessa opção.

As opções também podem ser definidas como parte de uma definição de _job_ e posteriormente carregadas no servidor QW Control. Consulte [job-xml](/user-guide/document-format-reference/job-v20.md) e [job-yaml](/user-guide/document-format-reference/job-yaml-v12.md) e [rd _jobs_](/https://qwsoftware.github.io/qwcontrol-cli/commands/#jobs) páginas se você preferir usar uma definição textual de _Job_.

## Definindo uma opção

### Opções de texto

Novas opções podem ser definidas pressionando o link "Adicionar uma opção", enquanto as existentes podem ser alteradas pressionando o link "editar".

Escolha "Texto" no Tipo de Opção:

![Formulário de edição de opção](/assets/img/fig0502.png)

O formulário de definição de opções é organizado em várias áreas:

### Identificação

Aqui você fornece o nome e a descrição da opção. O nome se torna parte dos argumentos aceitáveis para o _Job_, enquanto a descrição será fornecida como texto de ajuda para os usuários que executam o _Job_.

O valor padrão será pré-selecionado na GUI quando a opção for apresentada.

### Tipo de entrada

Escolha entre "Simples", "Data", "Seguro" e "Autenticação Remota Segura". Para tipos de entrada diferentes de "Simples", a opção de vários valores será desabilitada.

### Formato de data

Se o tipo de entrada "Data" for escolhido, você pode inserir um formato de data a ser usado ao selecionar a data na interface do usuário. Usando o [formato momentjs](https://momentjs.com/docs/#/displaying/format/).

### Valor padrão

Um valor padrão será definido automaticamente para a opção se não for especificado de outra forma pelo usuário, mesmo se não for especificado entre os argumentos ao executar um _job_ por meio da linha de comando ou API. Observe que um valor em branco pode ser especificado por meio da linha de comando ou API, que substituirá o uso do valor padrão.

### Valores permitidos

Os valores permitidos fornecem um modelo de escolhas possíveis. Isso pode conter uma lista estática de valores ou um URL para um servidor que fornece dados de opção. Os valores podem ser especificados como uma lista separada por vírgulas, conforme visto acima, mas também podem ser solicitados de uma fonte externa usando um "URL remoto".

### Restrições

Define os critérios sobre os quais a entrada deve ser aceita ou apresentada. As escolhas de opções podem ser controladas usando a restrição "Enforced from values". Quando definido como "true", o QW Control apresentará apenas um menu pop-up. Se definido como "false", um campo de texto também será apresentado. Insira uma expressão regular no campo "Match Regular Expression" que o _Job_ avaliará quando executado.

### Requerimento

Indica se o _Job_ só pode ser executado se um valor valido for fornecido para essa opção. Escolha "Não" para indicar que um valor em branco é permitido e escolha "Sim" para indicar que um valor em branco não é permitido.

Se um valor padrão for definido, ele será usado quando nenhum valor for fornecido, a menos que um valor em branco seja permitido e seja explicitamente especificado.

![Formulário de opção de valor múltiplo](/assets/img/fig-option-multival.png)

### Multi-valor

Define se a entrada do usuário pode consistir em vários valores. Escolher "Não" indica que apenas um único valor pode ser escolhido como entrada. Escolher "Sim" indica que o usuário pode selecionar vários valores de entrada dos valores permitidos e/ou inserir vários valores próprios.

### Delimitador

A string delimitadora será usada para separar os vários valores quando o _Job_ for executado.

### Selecionar todos os valores por padrão

Se marcada, e nenhum valor padrão é especificado, todos os valores remotos ou locais serão selecionados por padrão.

Quando estiver satisfeito com a definição da opção, pressione o botão "Salvar" para adicioná-la à definição _Job_. Pressionar o botão "Cancelar" descartará as alterações e fechará o formulário.

Uso (veja abaixo)

![Uso da opção](/assets/img/fig-option-usage.png)

### Variável de carimbo de data/hora da opção

Você pode usar a string `${DATE:format}` como um valor de opção do _job_ (tanto como valor padrão ou como entrada pelo usuário), que será convertido quando o _job_/comando for executado. Esta variável também permite adicionar ou remover dias como você pode ver abaixo.

`${DATE:format}` data atual no formato usado pelo Java [SimpleDateFormatter](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)

`${DATE+2:format}` daqui a dois dias

`${DATE-2:format}` dois dias atrás

### Tipo de opção de arquivo

Escolha "Arquivo" no Tipo de Opção:

![Formulário de edição de opção de arquivo](/assets/img/fig-newoption-file.png)

O nome e a descrição da opção podem ser inseridos.

Obrigatório

: Escolha se deseja que a opção tenha um valor.

Uso da opção de arquivo:

A variável `option.NAME` conterá um ID único que identifica o arquivo enviado.

`file.NAME` será o caminho do arquivo local.

`file.NAME.filename` será o nome do arquivo original (se disponível).

`file.NAME.sha` será o hash SHA256 do arquivo.

## Uso do script

Os valores das opções podem ser passados para scripts como um argumento ou referenciados dentro do script por meio de um token nomeado. Cada valor de opção é definido nas variáveis de contexto de Opções como `option.NAME`.

Consulte a seção [Variáveis ​​de contexto](/user-guide/job-workflows.md # context-variables).

**Exemplo:**

Um _Job_ chamado "hello", tem uma opção chamada "message".

A assinatura da opção "hello" _Job_ seria: `-message <>`.

![Uso da opção](/assets/img/fig0504.png)

Os argumentos passados ​​para o script são definidos como `${option.message}`.

Aqui está o conteúdo deste script simples que mostra os vários
formulários para acessar o valor da opção "message".

```bash .numberLines
#!/bin/sh
echo envvar=$RDoptionMESSAGE; #mensagem de acesso como variável de ambiente.echo args = $ 1; # valor lido passado para o vetor de argumento
echo message = @ option.message @; # mensagem de acesso via sintaxe de token de substituição
```

Quando o usuário executa o _job_ "hello", será solicitado o
valor da "mensagem".

![Opção inserida](/assets/img/fig0505.png)

Vamos supor que eles escolheram a palavra "howdy" em resposta. A saída do _Job_ será:

```bash
envar = howdy
args = howdy
mensagem = howdy
```

Se você definir a opção como _Required_, o _Job_ não será executado, a menos que o usuário forneça um valor que não esteja em branco.

Se você definir a opção como não _Required_, o valor da opção poderá ficar em branco e especificar um valor em branco resultará em:

```bash
envar =
args =
mensagem =
```

Você pode usar o _Valor Padrão_ de uma opção para fornecer um valor caso o usuário não o especifique. Na GUI, o _Valor Padrão_ será automaticamente apresentado na página Execução de _Job_. Na CLI ou API, deixando de fora um argumento `-option` para um _job_ usar o valor padrão.

Você também pode manipular valores padrão em um script, se sua opção não especificar um ou se o usuário especificar um valor em branco para a opção:

**Variável de ambiente:**

Como precaução, você pode testar a existência da variável e talvez definir um valor padrão. Para testar sua existência, você pode usar:

```bash
teste -s "$ RDoptionNAME"
```

Você também pode usar um recurso Bash que testa e padroniza para um valor:

```bash
${RDoptionNAME:=mydefault}
```

**Token de substituição:**

Se a opção estiver em branco ou não configurada, o token será substituído por uma string em branco. Você pode escrever seu script de forma um pouco mais defensiva e alterar a implementação da seguinte forma:

```bash
mensagem = "@ opção.mensagem @"
if [-z "$ message"]
então
mensagem = mydefault
fi
```

::: warning AVISO
A sintaxe do token de substituição só é suportada em passos de script embutido (ou seja, não em arquivo de script ou passos de comando).
:::

**Token de substituição de escape:**

Se você quiser usar o caractere `@` de uma forma que pareça um token de substituição, você pode escapar dele usando `@@`, ou seja, dobrando-o.

```bash
# escape do sinal @ para evitar expansão antes de @ option.domain @
email = "usuário@@mail.@option.domain@"

# Se o primeiro sinal @ vier imediatamente antes do token, use três @
email = "usuário@@@opção.domínio@"
```

Neste exemplo, o `@@@option.domain@` resultará em `@mydomain`,
e `@@mail.@option.domain2@` resultará em `@mail.mydomain`.

Se você não escapar do `@` no segundo exemplo, então `@mail.@`
será expandido para um valor ausente, resultando em uma string em branco.

Se você não escapar de `@` no segundo exemplo, então `@mail.@` Será expandido para um valor ausente, resultando em uma string em branco.

Você não precisa escapar do sinal `@` em todos os casos, apenas quando pode parecer um token de expansão. Se houver qualquer caractere de espaço em branco antes do próximo sinal `@`, ele não precisa ser escapado:

```bash
# primeiro sinal @ não precisa de escape
text="Hi user@somewhere, @option.greeting@!"
```

## Valores de escape

Quando os argumentos para o script ou o conteúdo de uma string de execução de Comando são
avaliadas, referências de propriedades embutidas como `${option.name}` são substituídas por
os valores inseridos por um usuário.

Para evitar que qualquer entrada do usuário inclua caracteres especiais do shell (acidentalmente ou maliciosamente), qualquer argumento que tenha referências incorporadas será colocado entre aspas para o shell.

Você também deve ter cuidado em como os argumentos para scripts são usados ​​em um script.

Por exemplo, se você tiver um passo de script com string de argumento `${option.message}`, e script:

```bash
#!/bin/bash
echo $1
```

Então este script irá expandir parcialmente o valor `${option.message}` uma segunda vez, mesmo que tenha sido citado corretamente para passar para seu script.

Em vez disso, você deve fazer algo assim:

```bash
#!/bin/bash
eco "$1"
```

O que permite que o shell trate corretamente o valor de entrada citando-o.

### Usando valores sem escape

Se o _job_ precisa fornecer uma opção em sua forma bruta, sem escape, é possível usar a chave de pesquisa de contexto `unquotedoption` ao invés de `option`.

Por exemplo:
O valor da opção `${option.name}` pode ser acessado sem nenhum escape referenciando-o como `${unquotedoption.name}`.
Em um script similarmente use `@unquotedoption.name@` ao invés de `@option.name@`.

::: warning AVISO
O uso de valores não escapados pode expor o ambiente a riscos de segurança, como injeção de comando (mas não se limitando à injeção de comando!).
:::

> Considere o exemplo a seguir, onde um usuário tem permissão para fornecer uma lista de diretórios para um _job_ de backup hipotético. Vamos supor também que _job_ processou a lista de diretórios com `tar -zcvf /tmp/archive.tgz @unquotedoption.targetdirs@`. Então, um usuário mal-intencionado pode enganar o _job_ para que ele execute um comando extra fornecendo este valor:
`targetdirs`:`/etc/home/var/lib/redis; rm -rf/`.

Então, dependendo dos privilégios do usuário, o script felizmente destruirá tantos diretórios e arquivos quanto puder no nó alvo. Você pode limitar o risco adotando máscaras regex apropriadas, codificando o script de forma defensiva e usando o princípio de privilégio mínimo.

## Opções de segurança

As opções podem ser marcadas como Seguras, para mostrar um prompt de senha na GUI, em vez de um campo de texto normal ou menu suspenso. Os valores das opções seguras não são armazenados com o Execution, assim como os outros valores das opções.

Existem dois tipos de opções seguras:

- Seguro
  - esses valores de opção são expostos em scripts e comandos.
- Autenticação remota segura
  - esses valores de opção **não** são expostos em scripts e comandos e são usados apenas por _Nó_ Executores para autenticar em _Nós_ e executar comandos.

As opções seguras não suportam entrada de vários valores.

As opções seguras não podem ser usadas como entrada de autenticação para executores do _Nó_, você deve usar uma opção de autenticação remota segura descrita abaixo.

### Nota importante

Os valores da opção "segura" não são armazenados no banco de dados do QW Control quando o _Job_ é executado, mas o valor inserido
é exposto para uso em scripts e comandos. Certifique-se de reconhecer essas implicações de segurança antes de usá-los. As opções seguras estão disponíveis para uso em scripts e comandos como qualquer outro valor de opção:

- como argumentos de texto simples usando `${option.name}`
  - Usar o valor da opção como um argumento para um comando pode expor o valor do texto simples na tabela de processo do sistema
- como variáveis de ambiente de texto simples na execução remota e local de script como `$RDoptionNAME`
  - Scripts locais e possivelmente remotos podem receber este valor em seu ambiente
- como tokens de texto simples expandidos em scripts remotos como `@option.name@`.
  - Os passos do fluxo de _Job_ de script embutido que contêm uma expansão de token serão expandidas em um arquivo temporário e o arquivo temporário conterá o valor da opção de texto simples.

::: tip DICA
Quando passados ​​como argumentos para _Job_ References, eles só podem ser passados ​​como o valor de outra opção Secure. Consulte [Usando opções seguras com referências de _Job_](/user-guide/job-options.html#usando-opcoes-seguras-com-referencias-job).
:::

### Opções de autenticação remota segura

O [provedor SSH](/Administration/projects/node-execution/ssh.md) integrado para execução de nó permite o uso de senhas para mecanismos de autenticação SSH e/ou Sudo, e as senhas são fornecidas por Opções de autenticação remota segura definidas em um _Job_.

As opções de autenticação remota segura têm algumas limitações em comparação com as opções simples e seguras:

- Os valores inseridos pelo usuário não estão disponíveis para script normal e expansão de valor de opção de comando. Isso significa que eles só podem ser usados para fins de autenticação remota.

### Usando opções seguras com referências _Job_

Ao definir um [passo de Referência de _Job_ em um fluxo de trabalho](/user-guide/node-steps/builtin.md#passo-de-referencia-de-job), você pode especificar os argumentos que são transmitidos a ela. Você pode passar os valores da Opção segura e da Opção de autenticação remota segura de um _job_ de nível superior para uma Referência de _job_, mas os valores de opção _não podem ser passados para outra opção de um tipo diferente_. Portanto, um _job_ pai só pode passar valores de opção para a referência de _job_ se o tipo de opção for o mesmo entre os _jobs_.

Essa restrição é para manter o projeto de segurança dessas opções:

1. As opções seguras não devem ser armazenadas no banco de dados de execução do QW Control, portanto, não devem ser usadas como valores de opção simples.
2. As opções de autenticação remota segura não devem ser usadas em scripts/comandos, portanto, não devem ser usadas como valores de opção segura ou simples.

Como exemplo, aqui estão dois _jobs_, _Job_ A e _Job_ B, que definem algumas opções:

- _Job_ A
  - Opção "plain1" - Simples
  - Opção "seguro1" - Seguro
  - Opção "auth1" - Autenticação remota segura
- _Job_ B
  - Opção "plain2" - Simples
  - Opção "seguro2" - Seguro
  - Opção "auth2" - Autenticação remota segura

Se _Job_ A define uma referência de _Job_ para chamar _Job_ B, então o único mapeamento válido é mostrado abaixo:

- plain1 -> plain2
- secure1 -> secure2
- auth1 -> auth2

Portanto, os argumentos para a Referência de _Job_ podem ter a seguinte aparência:

- plain2 ${option.plain1}
- secure2 ${option.secure1}
- auth2 ${option.auth1}

> Observação: se você definir argumentos de maneira incorreta, as opções de autenticação remota segura e segura não serão definidas quando a referência de _job_ forem ligadas. As opções simples se comportarão da maneira como se comportam em argumentos de comando ou script e serão deixadas como estão, como referências de propriedade não interpretadas.

### Opções seguras usando armazenamento de chaves

As opções seguras podem especificar um caminho de armazenamento em vez de um valor padrão. Este caminho para o [Key Storage Facility](/Administration/security/key-storage.md) será carregado como o valor da opção quando um não for fornecido.

O caminho deve indicar uma entrada de `password` armazenada na instalação de armazenamento.

![Caminho de armazenamento para opção segura](/assets/img/jobs-options-secure-storage-path.png)

## Valores de opção remota

Um modelo de valores de opção pode ser recuperado de uma fonte externa chamada de _provedor de modelo de opção_. Quando `valuesUrl` é especificado para uma opção, o modelo de valores permitidos é recuperado do URL especificado.

Isso é útil em alguns cenários quando o controle QW é usado para coordenar processos que dependem de outros sistemas:

- Implantar pacotes ou artefatos produzidos por um servidor de construção ou CI, por exemplo, Jenkins.
  - Uma lista de artefatos de construção recentes do Jenkins pode ser importada como dados de opções, para que um usuário possa escolher um nome de pacote apropriado para implantar em uma lista.
- Seleção de um conjunto de ambientes disponíveis, definidos em um CMDB
- Qualquer situação na qual variáveis de entrada para seus _Jobs_ devem ser selecionadas a partir de algum conjunto de valores produzidos por um sistema diferente.

## Fornecedor de modelo de opção

O provedor de modelo de opção é um mecanismo que permite que as opções definidas para um _Job_ tenham alguns dos valores de entrada possíveis fornecidos por um serviço remoto ou banco de dados.

Os provedores de modelo de opção são configurados por opção (onde um _Job_ pode ter zero ou mais opções).

### Requisitos

1. Os dados do modelo de opções devem ser [formatados em JSON](http://www.json.org).
2. Deve estar acessível via HTTP(S) ou no disco local para o servidor do QW Control.
3. Deve estar em uma das duas estruturas JSON, _todos_:
   - Uma matriz de valores de string
   - OU, uma matriz de mapas, cada um com duas entradas, `name` e `value`.
4. Por padrão, a resposta HTTP(S) deve incluir o tipo de conteúdo `application/json` no cabeçalho.
   Caso isso não possa ser controlado, o atributo `project.jobs.disableRemoteOptionJsonCheck` pode ser definido como `true` nas configurações do projeto.

### Configuração

Cada entrada de opção para um _Job_ pode ser configurada para obter o conjunto de valores possíveis de um URL remoto. Se você está criando jobs por meio do [formato de arquivo job.xml](/user-guide/document-format-reference/job-v20.md#opcao), simplesmente adicione um atributo `valuesUrl` para a` <option> `. Se você estiver modificando o _Job_ na interface web do QW Control, poderá inserir um URL no campo "URL remoto" para a opção.
por exemplo:

```html
<option valuesUrl = "http://site.example.com/values.json" .../>
```

::: tip DICA
O esquema de URL do arquivo também é aceitável (por exemplo, `file:/path/to/job/options/optA.json`).
:::

Os dados do valor devem ser retornados no formato de dados JSON descrito abaixo.

### formato JSON

Três estilos de dados de retorno são suportados: lista simples, objeto simples e uma lista de nome/valor. Para uma lista simples, os valores da lista serão exibidos em uma lista pop-up ao executar o _Job_. Se um objeto simples ou pares nome/valor forem retornados, então o `name` será exibido na lista, mas o `value` será usado como a entrada.

### Exemplos

Lista Simples:

```json
["valor x para teste", "valor y para teste"]
```

Isso irá preencher o menu de seleção com os valores fornecidos.

Objeto simples:

```json
{ "Name1": "value1", "Name2":"value2" }
```

Isso irá preencher o menu de seleção para mostrar os nomes e usar os valores.

Lista de valores de nomes:

```json
[
    {"name":"X Label", "value":"x value"},
    {"name":"Y Label", "value":"y value"},
    {"name":"A Label", "value":"a value"}
]
```

Para opções com vários valores, se o resultado for uma lista de objetos e alguns tiverem uma propriedade `selected` de `true`, esses valores serão selecionados por padrão.

Para uma opção de valor único, o primeiro resultado com `selected=true` será selecionado (se houver).

Lista de valores de nomes com seleções padrão:

```json
[
    {"name":"X Label", "value":"x value", "selected": true},
    {"name":"Y Label", "value":"y value"},
    {"name":"A Label", "value":"a value", "selected": true}
]
```

### Parâmetros de conexão de URL

Você pode configurar tempos limites globalmente conforme descrito em [Configuração - Parâmetros de conexão da URL da opção remota do _Job_](/administration/configuration/config-file-reference.md#qwcontrol-config.properties).

Você também pode especificar esses parâmetros de conexão por URL:

`timeout`
: tempo limite do soquete em segundos

`contimeout`
: tempo limite de conexão em segundos

`retry`
: repetir a contagem se não houver resposta do servidor

Para definir isso em uma URL remota de Option, adicione-os como a parte "fragmento" da URL, após o caractere `#` como:

```http
http://host/mypath#timeout=60;contimeout=5;retry=1
```

Use `key=value` para um parâmetro e separe vários parâmetros com o caractere`;`.

### Opções remotas em cascata

As opções em cascata permitem que o URL de valores remotos de uma opção incorpore os valores inseridos pelo usuário para outras opções ao executar um _Job_. Quando o usuário insere ou seleciona um valor para uma das outras opções, o JSON remoto é atualizado para a opção atual.

Isso fornece um mecanismo para declarar conjuntos hierárquicos ou dependentes de valores de opção.

Por exemplo. se você quiser uma opção para escolher um "repositório" e outra opção para selecionar um "ramo" específico dentro desse repositório. Defina seu provedor de opções para responder corretamente com base no valor de "repositório" selecionado e defina sua URL de opção remota para incluir uma referência ao valor de opção de "repositório". A GUI do QW Control irá então recarregar os valores JSON da URL remota e inserir o valor correto da opção "repositório" ao carregar os valores da opção "branch". Se o usuário alterar o repositório selecionado, os valores do branch serão atualizados automaticamente.

Você pode declarar a dependência de uma opção para outra incorporando referências de propriedade na URL de valores remotos. A referência da propriedade tem o formato `${option.[name].value}`. Se você declarar uma opção com uma URL de valores remotos como `http://server/options?option2=${option.option2.value}`, então essa opção dependerá do valor da opção "option2".

Na GUI, quando as opções são carregadas, a opção2 será mostrada primeiro, e os valores remotos para a opção1 só serão carregados depois que um valor for selecionado para a opção2, e o valor será colocado na URL quando for carregado.

Se uma opção tiver dependências de outras opções que não tenham um valor definido, as referências incorporadas serão avaliadas como "" (string vazia) ao carregar
o URL.

Se uma opção tiver dependências de outras opções e os [dados JSON](/user-guide/job-options.html#formato-json) de valores remotos estiverem vazios (lista vazia ou objeto vazio), a opção mostrada na GUI indicará que o usuário deve selecionar valores para as opções necessárias. Isso permite que os fornecedores de modelos de opções indiquem que alguns ou todos os valores de opções dependentes são necessários para a opção atual antes de mostrar a entrada para a opção.

É possível ter dependências em mais de uma opção e qualquer alteração em uma das dependências fará com que os valores da opção sejam recarregados a partir do URL remoto.

::: tip DICA
Também é possível declarar um ciclo de dependências entre os valores das opções, o que fará com que o recarregamento automático seja desabilitado. Nesse caso, o usuário deve clicar manualmente no botão recarregar para recarregar os valores da opção se uma dependência foi alterada.
:::

### Expansão de variável em URLs remotos

O URL declarado para "valuesUrl" pode incorporar variáveis que serão preenchidas com certos itens de contexto do _job_ ao fazer a solicitação remota. Isso ajuda a tornar os URLs mais genéricos e contextuais para o _Job_.

Dois tipos de expansões estão disponíveis, contexto de _Job_ e contexto de opção.

Para incluir as informações do _job_ na URL, especifique uma variável no formato `${job.property}`.

Propriedades disponíveis para o contexto do _Job_:

- `name`: nome do _Job_
- `group`: Grupo do _Job_
- `description`: descrição do _Job_
- `project`: nome do projeto
- `user.name`: Usuário executando o _Job_
- `qwsoftware.nodename`: Nome do nó do servidor QW Control
- `qwsoftware.serverUUID`: UUID do nó do servidor QW Control (modo de cluster)
- `qwsoftware.basedir`: Caminho do arquivo do diretório base do QW Control (`file://` URLs apenas)

Além disso, as propriedades `qwsoftware.*` podem ser especificadas sem o prefixo `job.`, por exemplo, `${qwsoftware.basedir}`.

Para incluir informações de opção no URL, especifique uma variável do formulário \${option.property}:

Propriedades disponíveis para o contexto da opção:

- `name`: Nome da opção atual

Para incluir informações de valores de [opção remota em cascata](/user-guide/job-options#opcao-remota-em-cascata) no URL, especifique uma variável no formato \${option.name.value}:

- `option.[name].value`: substitui o valor selecionado de outra opção pelo nome. Se a opção não for definida, uma string em branco ("") será substituída.

***Exemplos***

```http
http://server.com/test?name=${option.name}
```

Passa o nome da opção como o parâmetro de consulta "name" para o URL.

```http
http://server.com/test?jobname=${job.name}&jobgroup=${job.group}
```

Transmite o nome e grupo do _job_ como parâmetros de consulta.

```http
http://server.com/branches?repository=${option.repository.value}
```

Passa o valor da opção "repositório" selecionada ou "" (em branco) se não estiver definida. Esta opção torna-se dependente da opção "repositório" e se o valor do "repositório" mudar, os valores da opção remota para esta opção serão recarregados.

### Falhas de solicitação remota

Se a solicitação dos valores da opção remota falhar, o formulário da GUI exibirá uma mensagem de aviso:

![fig0901](/assets/img/fig0901.png)

Neste caso, será permitida a opção de usar um campo de texto para definir o valor.

## Vinculando a _Jobs_ e fornecendo valores de opção

Você pode criar um URL para vincular a um _Job_ específico e preencher previamente alguns dos valores de opção adicionando parâmetros de consulta de URL ao URL do _Job_.

Formato de parâmetros de consulta para opções:

- `opt.NAME`: fornece um valor para uma opção chamada `NAME`

Por exemplo, se o URL para _Job_ for:

```http
http://qwcontrol:4440/project/MyProject/job/show/ab698597-9753-4e98-bdab-90ebf395b0d0
```

Em seguida, você pode preencher previamente os valores de `myopt1` e `myotheropt` anexando-o ao URL:

```http
?opt.myopt1=some+value&opt.myotheropt=another+value
```

O resultado seria:

```http
http://qwcontrol:4440/project/MyProject/job/show/ab698597-9753-4e98-bdab-90ebf395b0d0?opt.myopt1=some+value&opt.myotheropt=another+value
```

Observação: certifique-se de escapar adequadamente das strings para os valores das opções e, se necessário, também para os nomes das opções.
