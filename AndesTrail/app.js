// Defina a variável ambiente_processo, caso não esteja definida
var ambiente_processo = ambiente_processo || 'desenvolvimento';

// Define o caminho do arquivo .env
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

// Importação de módulos
var express = require("express");
var cors = require("cors");
var path = require("path");

// Verifica se as variáveis de ambiente estão definidas
var PORTA_APP = process.env.APP_PORT || 3000;
var HOST_APP = process.env.APP_HOST || 'localhost';

// Inicializa o app
var app = express();

// ==================== IMPORTAÇÃO DE ROTAS ====================
const indexRouter = require("./src/routes/index");
const usuarioRouter = require("./src/routes/usuarios");
const paisRouter = require("./src/routes/pais");
const dashboardRouter = require('./src/routes/dashboard');
const quizRouter = require("./src/routes/quiz");
const planejadorRouter = require('./src/routes/planejador');

// ==================== MIDDLEWARES ====================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// ==================== ROTAS ====================
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/pais", paisRouter);
app.use('/dashboard', dashboardRouter);
app.use("/quiz", quizRouter);
app.use('/planejador', planejadorRouter);
// Inicia o servidor
app.listen(PORTA_APP, HOST_APP, () => {
    console.log(`
    Servidor do AndesTrail está rodando!
  
    Acessar em: http://${HOST_APP}:${PORTA_APP}
  
  - Ambiente: ${process.env.AMBIENTE_PROCESSO.toUpperCase()}
  - Banco de dados: ${process.env.AMBIENTE_PROCESSO === "producao" ? "Remoto (Produção)" : "Local (Desenvolvimento)"}
  
    (Se precisar mudar o ambiente, edite as configurações no início do código ou no arquivo .env)
  `);
});
