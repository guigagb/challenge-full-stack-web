##Backend
* Decisão da arquitetura utilizada<br>
    O backend foi separado em camadas visando facilitar o reuso futuramente de código, facilitar na criação de testes e na manutenção do mesmo.<br>

    <br>
    A aplicação possui basicamente duas pastas centrais.
    <br><b>shared</b>: Armazena arquivo e módulos que são de nível global
    <br><b>modules</b>: Armazena os módulos das api individualizados por pastas. 
    
    <br>O fluxo de um módulo é:

    request-> routes -> validations -> controllers -> services -> models -> database

    <br>A conexão com o banco de dados foi feita sem ORM com querys usando SQL puro, foi utilizada a lib sql-query para facilitar a criação de sql com parâmetros.

    <br>
    No vscode foi utilizado o thunder client como client http. O mesmo foi escolhido pois todas as coleções e requisições criadas são armazenadas em um arquivo que pode subir junto do projeto para o git e todos os desenvolvedores terão acesso (tipo um postman só que gratuito e direto no vscode).
<br>
* Lista de bibliotecas de terceiros utilizadas
    "celebrate": "Middleware p/ validar parâmetros rota integrado com a lib JOI",
    "dotenv": "Utilizado para configurar variáveis de ambiente .env",
    "express": "Principal lib para criação da API rest",
    "joi": "Biblioteca para ajudar na validação de parâmetros",
    "mysql": "Lib para se conectar ao banco de dados MySQL",
    "sql-query": "Auxiliar na criação de querys SQL"
<br>
* O que você melhoraria se tivesse mais tempo
    - Criação de testes unitários
    - Traduzir algumas mensagens de erro da lib celebrate
    - Autenticação via JWT
<br>
* Quais requisitos obrigatórios que não foram entregues
    Todos os requisitos foram entregues :D

##Frontend

* Decisão da arquitetura utilizada<br>
    Aplicação vue , usando vue-router para controle de rotas, vuetify para estilização da aplicação. Não se fez necessário nesse primeiro momento uso da lib vuex. <br>
    
    Cada página da aplicação tem uma pasta específica dentro de src/views contendo o conteúdo da mesma.
    <br>
    Para página do tipo "crud" foi separado a estrutura da mesma em no mínimo 4 arquivos:
    - servicesPai.js (funções que serão utilizadas por todos os arquivos do módulo)
    - Pai.vue (centraliza métodos insert, update, remove, search, entre outros)
        - FilhoList.vue (responsável pela listagem)
        - FilhoForm.vue (responsável por inserir e atualizar)
    <br>
    <blockquote>Os arquivos filhos emitem eventos para o pai saber qual ação tomar.</blockquote>
<br>

* Lista de bibliotecas de terceiros utilizadas
    "@mathieustan/vue-notification": "Exibir toast notification",
    "axios": "Usado para fazer requisições http",
    "vee-validate": "Usado para validação de campos nos formulários",
    "vue-router": "Utilizado para gerenciamento de rotas",
    "vue-simple-alert": "Exibir modal com mensagens de erro, sucesso e etc. Também para exibir modais de confirmação",
    "vue-the-mask": "Adiciona máscara em inputs",

<br>

* O que você melhoraria se tivesse mais tempo

    - Configurar mensagens de erro do vee-validate para português.
    - Tela de Login

<br>

* Quais requisitos obrigatórios que não foram entregues?
    Todos os requisitos foram entregues :D