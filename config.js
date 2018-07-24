/* eslint-disable */
const vault = process.env;
var config = {
    ownerID: vault.OWNERID,
    token: vault.TOKEN,
    status: 'online',
    debug: 'false',
    playingGame: 'felicidade e amor para todos os meus usuários | 🔨 Criado por: Eleven#001',
    purgeLogFormat: '\n ID da Mensagem: {{mID}} | Hora: {{mTS}} | Conteúdo: {{mC}} \n',
    eightBallResponses: ['Sim', 'Não', 'Certamente', 'Minhas fontes dizem sim', 'Tente mais tarde...', 'Sem dúvida', 'É melhor não contar agora'],
    googleAPIToken: vault.GOOGLEAPITOKEN,
    logTimeFormat: 'LLLL',
    version: '3.1.3',
    musicEnabled: 'true',
    itens: {
     badge: {
      name: "Badge",
      description: " Adiciona uma **Badge (Ícone)** ao seu perfil ",
      valor: "350"
     },
     bonus: {
       name: "Bônus",
       description: "Obtém **400%** como bônus de XP por mensagem",
       valor: "850"
     },
     premium: {
       name: "Premium",
       description: "Recebe uma **Badge** em seu perfil, ganha **400%** de bônus",
       valor: "2150"
     },
     background: {
       name: "Background",
       description: "Dá o direito de você adicionar um imagem de **Plano de Fundo** no seu perfil",
       valor: "1805"
     },
     partner: {
        name: "Parceria",
        description: "Adiciona o servidor à lista de **Parceiros do Site**",
        valor: "18450"
     }
    },
    defaultSettings: {
        prefix: 'r!',
        modLogChannel: 'logs',
        modRole: 'Moderador',
        adminRole: 'Administrador',
        welcomeChannel: '⚫bem-vindos',
        welcomeMessage: 'Bem-Vindo {{user}} ao **{{guild}}!**',
        welcomeEnabled: 'true',
        inviteFilterEnabled: 'true',
        inviteWhitelist: ['Dono'],
        facepalms: 'true',
        swearFilter: 'true',
        swearWords: ['arrombado', 'ryouji lixo'],
        logDeletes: 'true',
        logNewMember: 'false',
        logMemberLeave: 'false',
        logCommandUsage: 'true',
        logPurge: 'false',
        commandTimeout: '2000',
        sendHelp: 'dm'
    },
    dashboard: {
        enabled: 'true',
        oauthSecret: vault.OAUTHSECRET,
        secure: 'true',
        sessionSecret: vault.SESSIONSECRET,
        domain: `ryouji.glitch.me`,
        port:  vault.PORT,
        invitePerm: vault.INVITEPERM,
        protectStats: 'false',
        borderedStats: 'true',
        legalTemplates: {
            contactEmail: 'devs_services@engineer.com',
            lastEdited: '01 de Julho de 2018'
        }
    }
};


module.exports = config;