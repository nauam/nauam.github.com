# Introdução ao QW Control

## O que é QW Control?

O QW Control é uma ferramenta de automação e orquestração de jobs capaz de executar de forma organizada e agendada, comandos variados (bath, shell) em máquinas (nós), através do uso da rede de comunicação usando protocolos diversos (ssh, FTP(s), HTTP(s)).

O QW Control nasceu da necessidade de se automatizar trabalhos e rotinas manuais, com segurança e uso de criptografia, armazenamento de logs e controle de acesso de usuários.

Quando usado para o trabalho de operações gerais, o QW Control ajudará a aliviar o trabalho demorado e repetitivo que atualmente consome muito do tempo de sua equipe de TI quando de negócio.

Isso significa que podemos controlar por exemplo desde um simples backup de banco de dados, transferências de arquivos entre servidores, até trabalhos complexos de ETL e automação robótica de processos. Experimente usar nossos plugins ou faça você mesmo, em python ou java, o seu próprio para integração com sistemas legados.

Com o QW Control, é simples e fácil criar fluxos de trabalho (chamados de "jobs") a partir de qualquer uma de suas ferramentas ou scripts existentes.  Acione os jobs do QW Control a partir de Web GUI, API, CLI ou por agendamento. Os recursos de controle de acesso do QW Control tornam mais fácil delegar com segurança o controle de tarefas àqueles que estão tradicionalmente fora das operações.

O QW Control foi projetado para aceitar a realidade de que infraestrutura e ferramentas heterogêneas são um fato da vida em qualquer organização de tamanho considerável. É por isso que o QW Control não o faz substituir os scripts, comandos ou ferramentas que você usa hoje. Você usa o QW Control para executar fluxos de trabalho em sua automação existente (por exemplo, Ansible, Puppet, Chef, Jenkins, Docker, Kubernetes, ferramentas legadas e todos os seus scripts/APIs personalizados) ou automatizar rapidamente procedimentos manuais anteriores. Com o QW Control, você pode reutilizar as habilidades de automação que já possui e adicionar novas conforme necessário.

Pronto para usar, o QW Control oferece recursos que seriam caros para desenvolver e manter internamente: controle de fluxo de trabalho, agendamento, tratamento de erros, registro, controle de acesso, passagem de opção, filtragem de registro, interface web, API REST (com CLI ferramentas) e integração com fontes externas para autenticação, modelo de recursos e dados de opções.

## Quem faz o QW Control?

O QW Control faz parte da [QW Software](https://www.qwsoftware.com/) junto de [outros produtos](https://www.qwsoftware.com.br/catalogo-de-produtos/).

## Destaques do recurso do QW Control

- Execução de comando distribuído
- Fluxo de trabalho (incluindo passagem de opções, condicionais, tratamento de erros e várias estratégias de fluxo de trabalho)
- Sistema de execução plugável (SSH e WinRM por padrão; PowerShell disponível)
- Modelo de recursos plugável (obtenha detalhes de sua infraestrutura de sistemas externos)
- On-demand (Web GUI, API ou CLI) ou execução de trabalho agendado
- Secure Key store para senhas e chaves
- Política de controle de acesso baseada em funções com suporte para LDAP/ActiveDirectory/SSO
- Ferramentas de edição/gerenciamento de políticas de controle de acesso
- Histórico e registros de auditoria
- Use qualquer linguagem de script
- Caminho crítico de execução do fluxo
- Estatísticas dos jobs
