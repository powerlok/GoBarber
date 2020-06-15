# Cadastro de usuário

**Requisitos Funcionais**

- O usuário deve poder se cadastrar utilizando nome, email e senha;
- Requisitos Não-Funcionais

- A senha deve ser armazenada criptografada;

# Login de usuário

**Requisitos Funcionais**

- O usuário deve poder logar utilizando email e senha;

# Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha

**Requisitos Não-Funcionais**

- Utilizar Mailtrap (ethereal) para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócios**

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# Atualização do perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha

**Regras de Negócios**

- O usuário não pode alterar seu e-mail para um já utilizado por outro usuário;
- Para atualizar sua senha, o usuário deve informar a senha antiga;

# Painel do prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não-Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negócios**

-- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias, com pelo menos um horário disponível, de um prestador em um mês específico;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não-Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócios**

- Cada agendamento deve duar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
