# jobs

Este capítulo aborda como criar e executar .

Por que criar um ?

- Pode-se descobrir que certas execuções de comandos são feitas repetidamente e, talvez, representem o que se tornou um procedimento de rotina.
- Outro usuário em seu grupo precisa de uma interface de autoatendimento simples para executar um procedimento em um conjunto de nós.
- Os processos de rotina precisam ser encapsulados e se tornar a base para outros procedimentos de rotina.

## Visão geral

Os  fornecem um meio de encapsular um processo. Um  é uma configuração que representa opções de entrada,
os passos do processo, uma expressão de filtro que corresponde aos _Nós_ onde esses passos serão executados, e parâmetros de controle de execução que especificam se os passos são executadas em paralelo e o que fazer se ocorrer um erro em um dos passos.

O acesso ao  é regido por uma política de controle de acesso que você define, declarando como os usuários recebem privilégios para ler, criar, editar, executar e eliminar os .

O permite organizar e executar tarefas e observar o andamento à medida que a tarefa é executada. Você pode ver uma lista dos  atualmente em execução ou fazer uma busca detalhada para ver a saída das etapas de execução individuais. As execuções de  também podem ser abortadas se precisarem ser interrompidas.

Cada execução de  é armazenada e contém informações sobre os _Nós_ onde os passos foram executados, sucesso e duração de cada passo. O resultado da execução do  pode ser baixado, encaminhado para um armazenamento de log externo ou enviado como parte de uma notificação por e-mail ou outros.

As próximas seções descrevem como navegar e executar  existentes. Em seções posteriores, o tópico de criação de  será abordado, onde você aprenderá sobre os passos e opções de 

Se você quiser pular, vá direto para
[Criação de ](/manual/creating-s.md).

## Grupos de 

Como muitos   se acumulam com o tempo, é útil organizar os 
 em grupos. Um grupo é um conjunto lógico de  e um grupo de  pode existir dentro de outro. O exibe listas de  como um conjunto de pastas correspondentes à estrutura de grupo que seus   definem.

Para criar um novo grupo de , crie um novo  e digite o nome do grupo no qual o  deve ser armazenado. Depois de criar o , o grupo será criado e pode ser selecionado na IU para criação de  futuro.

Além de organizar , os grupos auxiliam na definição da política de controle de acesso, abordada no
[Guia do administrador - Política de controle de acesso](/administration/security/authorization.md).

## UUIDs de 

Quando criado, cada novo  receberá um identificador universal exclusivo (UUID). Se você estiver escrevendo a definição do  usando um dos formatos suportados, você mesmo pode atribuir o UUID.

Você pode usar o UUID para certificar-se de que, ao renomear ou alterar o grupo de seu  na definição de , ele modificará o  correto no servidor.

O UUID também é útil ao portar definições de  entre instâncias do .

::: warning AVISO
Não exigimos que este campo seja compatível com o formato UUID, mas tome cuidado ao criar UUIDs personalizados, pois isso pode levar a inconsistências no carregamento do .
:::

## Listagem e filtragem de 

Todas as atividades de  começam na página principal  dentro do . Após o login, pressione a guia  na barra de navegação superior e todos os  que você está autorizado a ver serão exibidos.

Se os  foram definidos dentro de grupos, você verá a lista agrupada em uma estrutura semelhante a uma pasta. Essas pastas representam os grupos de  descritos anteriormente. Você pode navegar nessas pastas pressionando o ícone da pasta para revelar seu conteúdo.

Depois de navegar para uma tarefa, você verá seu nome, possivelmente sua descrição e um resumo total de quantas vezes ela foi executada.

Clicar no nome do  expandirá a janela para mostrar os detalhes do  . Você verá uma barra de botões contendo ícones que representam as ações que você pode realizar. Outros detalhes do  incluirão quais comandos serão executados, expressões de filtro e outras opções do distribuidor

### Filtragem de 

A página  permite pesquisar  usando a opção Filtro.

Clique no link "Filtro" para mostrar as opções de filtro:

![ filter form](/assets/img/fig0317.png)

Isso mostrará os campos de filtro. Insira um valor em qualquer um dos campos de filtro:

- Nome do  : o nome do 
- Grupo: o nome do Grupo de 
- Descrição: texto da descrição do 
- Agendamento: inclui os  que foram programados.

Você pode digitar uma substring ou uma expressão regular em qualquer um desses campos.

Após pressionar o botão "Filtrar", a lista de  será filtrada para incluir apenas os  correspondentes .

![ filtered list](/assets/img/fig0318.png)

Para refinar o filtro, clique na descrição do filtro em azul e altere os campos do filtro.

Para redefinir o filtro e voltar para a página de  completa, clique no botão "Limpar" nos campos de filtro.

## Executando um 

Navegue até o  desejado na lista filtrada e pressione o ícone "Executar" para executar o  imediatamente. Se você não vir o ícone Executar, significa que seu login não possui privilégios de "execução" para esse trabalho.

![ run button](/assets/img/fig0319.png)

Se você navegou para a página de  separada, pressione o botão "Executar" lá.

![ run button](/assets/img/fig0319-b.png)

A caixa de diálogo Executar  permite que você insira opções de , se houver, nível de Log, seleção do _Nós_ e como você deseja acompanhar a execução.

### Escolha as opções de execução

Os  podem ser definidos para solicitar opções ao usuário. Esta página contém um formulário apresentando qualquer uma dessas opções de .

Algumas opções terão valores padrão, enquanto outras podem apresentar um menu de opções. Algumas opções são opcionais, enquanto outras são obrigatórias. Por último, pode haver um padrão que rege quais valores são aceitáveis.

Se houver alguma dessas opções de , você pode alterá-la aqui antes de prosseguir com a execução.

Quando estiver pronto, pressione "Run  Now". O  entrará na fila de execução e você pode acompanhar sua execução na seção Atividade da página ou acessando a página [Atividade](/manual/08-activity.md).

### Seguindo  em execução

Depois de iniciar a execução de um , você pode seguir a saída do  na página de execução.

![ execution output](/assets/img/fig0319-c.png)

Na página da lista de , observe a guia "Em execução" na seção Atividade da página e clique na barra de progresso do ID de execução.

Se você pressionou o botão "executar" na página de detalhes do trabalho , ou selecionou "Seguir execução" quando executou o , seu navegador já terá sido direcionado para a página Acompanhamento de execução.

## Visualizando detalhes do 

A definição de um  pode ser exibida clicando na guia Definição na página  ou na página Execução.

![ definition](/assets/img/fig0320.png)

As informações na visualização de detalhes do  incluem:

- Etapas que o  executará
- Opções apresentadas ao usuário no momento da execução do 
- Expressão de filtro _Nó_ com um botão para mostrar o _Nó_ correspondente
- UUID do 
- Data de criação
- Estatísticas sobre as execuções de 

Pressionar o link "Mostrar partidas" exibirá a lista do _Nós_ onde o  será executado.

## Histórico de 

Na página , você pode ver o resultado de execuções anteriores de  olhando a seção "Activity".

Você pode clicar em qualquer execução anterior na lista para ver a execução completa dessa execução do .

Você também pode navegar até a página Atividade na barra de navegação superior e usar o filtro de pesquisa para encontrar execuções digitando o nome do .

![ executions matches](/assets/img/fig0310.png)

A página  também contém todas as execuções para o grupo de  mostrado.

## Abortar 

Os  que estão em execução podem ser interrompidos imediatamente.

AVISO: Este recurso deve ser usado com cuidado, pois abortar forçadamente o Java Thread em que o  está sendo executado.

Na seção Visualização da atividade em execução ou na página seguinte do  da tarefa, clique no botão "Abortar " para o  em execução.

Quando solicitado "Quer realmente abortar este ?" Clique no botão "Sim".

O trabalho será encerrado com um status de conclusão "Abortado".

![ definition](/assets/img/fig0319-d.png)
