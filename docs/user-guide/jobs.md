# _Jobs_

Este capítulo aborda como criar e executar _Jobs_.

Por que criar um _Job_?

- Pode-se descobrir que certas execuções de comandos são feitas repetidamente e, talvez, representem o que se tornou um procedimento de rotina.
- Outro usuário em seu grupo precisa de uma interface de autoatendimento simples para executar um procedimento em um conjunto de nós.
- Os processos de rotina precisam ser encapsulados e se tornar a base para outros procedimentos de rotina.

## Visão geral

Os _Jobs_ fornecem um meio de encapsular um processo. Um _Job_ é uma configuração que representa opções de entrada,
os passos do processo, uma expressão de filtro que corresponde aos _Nós_ onde esses passos serão executados, e parâmetros de controle de execução que especificam se os passos são executadas em paralelo e o que fazer se ocorrer um erro em um dos passos.

O acesso ao _Job_ é regido por uma política de controle de acesso que você define, declarando como os usuários recebem privilégios para ler, criar, editar, executar e eliminar os _Jobs_.

O QW Control permite organizar e executar tarefas e observar o andamento à medida que a tarefa é executada. Você pode ver uma lista dos _Jobs_ atualmente em execução ou fazer uma busca detalhada para ver a saída das etapas de execução individuais. As execuções de _Jobs_ também podem ser abortadas se precisarem ser interrompidas.

Cada execução de _Job_ é armazenada e contém informações sobre os _Nós_ onde os passos foram executados, sucesso e duração de cada passo. O resultado da execução do _Job_ pode ser baixado, encaminhado para um armazenamento de log externo ou enviado como parte de uma notificação por e-mail ou outros.

As próximas seções descrevem como navegar e executar _Jobs_ existentes. Em seções posteriores, o tópico de criação de _Jobs_ será abordado, onde você aprenderá sobre os passos e opções de _Job_

Se você quiser pular, vá direto para
[Criação de _Jobs_](/manual/creating-jobs.md).

## Grupos de _Job_

Como muitos _Jobs_  se acumulam com o tempo, é útil organizar os _Jobs_
 em grupos. Um grupo é um conjunto lógico de _Jobs_ e um grupo de _Job_ pode existir dentro de outro. O QW Control exibe listas de _Job_ como um conjunto de pastas correspondentes à estrutura de grupo que seus  _Jobs_ definem.

Para criar um novo grupo de _Job_, crie um novo _Job_ e digite o nome do grupo no qual o _Job_ deve ser armazenado. Depois de criar o _Job_, o grupo será criado e pode ser selecionado na IU para criação de _Job_ futuro.

Além de organizar _Jobs_, os grupos auxiliam na definição da política de controle de acesso, abordada no
[Guia do administrador - Política de controle de acesso](/administration/security/authorization.md).

## UUIDs de _Job_

Quando criado, cada novo _Job_ receberá um identificador universal exclusivo (UUID). Se você estiver escrevendo a definição do _Job_ usando um dos formatos suportados, você mesmo pode atribuir o UUID.

Você pode usar o UUID para certificar-se de que, ao renomear ou alterar o grupo de seu _Job_ na definição de _Job_, ele modificará o _Job_ correto no servidor.

O UUID também é útil ao portar definições de _Job_ entre instâncias do QW Control.

::: warning AVISO
Não exigimos que este campo seja compatível com o formato UUID, mas tome cuidado ao criar UUIDs personalizados, pois isso pode levar a inconsistências no carregamento do _Job_.
:::

## Listagem e filtragem de _Jobs_

Todas as atividades de _Job_ começam na página principal _Jobs_ dentro do QW Control. Após o login, pressione a guia _Jobs_ na barra de navegação superior e todos os _Jobs_ que você está autorizado a ver serão exibidos.

Se os _Jobs_ foram definidos dentro de grupos, você verá a lista agrupada em uma estrutura semelhante a uma pasta. Essas pastas representam os grupos de _Job_ descritos anteriormente. Você pode navegar nessas pastas pressionando o ícone da pasta para revelar seu conteúdo.

Depois de navegar para uma tarefa, você verá seu nome, possivelmente sua descrição e um resumo total de quantas vezes ela foi executada.

Clicar no nome do _Job_ expandirá a janela para mostrar os detalhes do _Job_ . Você verá uma barra de botões contendo ícones que representam as ações que você pode realizar. Outros detalhes do _Job_ incluirão quais comandos serão executados, expressões de filtro e outras opções do distribuidor

### Filtragem de _Jobs_

A página _Job_ permite pesquisar _Jobs_ usando a opção Filtro.

Clique no link "Filtro" para mostrar as opções de filtro:

![_Job_ filter form](/assets/img/fig0317.png)

Isso mostrará os campos de filtro. Insira um valor em qualquer um dos campos de filtro:

- Nome do _Job_ : o nome do _Job_
- Grupo: o nome do Grupo de _Job_
- Descrição: texto da descrição do _Job_
- Agendamento: inclui os _Jobs_ que foram programados.

Você pode digitar uma substring ou uma expressão regular em qualquer um desses campos.

Após pressionar o botão "Filtrar", a lista de _Jobs_ será filtrada para incluir apenas os _Jobs_ correspondentes .

![_Job_ filtered list](/assets/img/fig0318.png)

Para refinar o filtro, clique na descrição do filtro em azul e altere os campos do filtro.

Para redefinir o filtro e voltar para a página de _Job_ completa, clique no botão "Limpar" nos campos de filtro.

## Executando um _Job_

Navegue até o _Job_ desejado na lista filtrada e pressione o ícone "Executar" para executar o _Job_ imediatamente. Se você não vir o ícone Executar, significa que seu login não possui privilégios de "execução" para esse trabalho.

![_Job_ run button](/assets/img/fig0319.png)

Se você navegou para a página de _Job_ separada, pressione o botão "Executar" lá.

![_Job_ run button](/assets/img/fig0319-b.png)

A caixa de diálogo Executar _Job_ permite que você insira opções de _Job_, se houver, nível de Log, seleção do _Nós_ e como você deseja acompanhar a execução.

### Escolha as opções de execução

Os _Jobs_ podem ser definidos para solicitar opções ao usuário. Esta página contém um formulário apresentando qualquer uma dessas opções de _Job_.

Algumas opções terão valores padrão, enquanto outras podem apresentar um menu de opções. Algumas opções são opcionais, enquanto outras são obrigatórias. Por último, pode haver um padrão que rege quais valores são aceitáveis.

Se houver alguma dessas opções de _Job_, você pode alterá-la aqui antes de prosseguir com a execução.

Quando estiver pronto, pressione "Run Job Now". O _Job_ entrará na fila de execução e você pode acompanhar sua execução na seção Atividade da página ou acessando a página [Atividade](/manual/08-activity.md).

### Seguindo _Jobs_ em execução

Depois de iniciar a execução de um _Job_, você pode seguir a saída do _Job_ na página de execução.

![_Job_ execution output](/assets/img/fig0319-c.png)

Na página da lista de _Jobs_, observe a guia "Em execução" na seção Atividade da página e clique na barra de progresso do ID de execução.

Se você pressionou o botão "executar" na página de detalhes do trabalho , ou selecionou "Seguir execução" quando executou o _Job_, seu navegador já terá sido direcionado para a página Acompanhamento de execução.

## Visualizando detalhes do _Job_

A definição de um _Job_ pode ser exibida clicando na guia Definição na página _Job_ ou na página Execução.

![_Job_ definition](/assets/img/fig0320.png)

As informações na visualização de detalhes do _Job_ incluem:

- Etapas que o _Job_ executará
- Opções apresentadas ao usuário no momento da execução do _Job_
- Expressão de filtro _Nó_ com um botão para mostrar o _Nó_ correspondente
- UUID do _Job_
- Data de criação
- Estatísticas sobre as execuções de _Job_

Pressionar o link "Mostrar partidas" exibirá a lista do _Nós_ onde o _Job_ será executado.

## Histórico de _Job_

Na página _Job_, você pode ver o resultado de execuções anteriores de _Jobs_ olhando a seção "Activity".

Você pode clicar em qualquer execução anterior na lista para ver a execução completa dessa execução do _Job_.

Você também pode navegar até a página Atividade na barra de navegação superior e usar o filtro de pesquisa para encontrar execuções digitando o nome do _Job_.

![_Job_ executions matches](/assets/img/fig0310.png)

A página _Jobs_ também contém todas as execuções para o grupo de _Job_ mostrado.

## Abortar _Jobs_

Os _Jobs_ que estão em execução podem ser interrompidos imediatamente.

AVISO: Este recurso deve ser usado com cuidado, pois abortar forçadamente o Java Thread em que o _Job_ está sendo executado.

Na seção Visualização da atividade em execução ou na página seguinte do _Job_ da tarefa, clique no botão "Abortar _Job_" para o _Job_ em execução.

Quando solicitado "Quer realmente abortar este _Job_?" Clique no botão "Sim".

O trabalho será encerrado com um status de conclusão "Abortado".

![_Job_ definition](/assets/img/fig0319-d.png)
