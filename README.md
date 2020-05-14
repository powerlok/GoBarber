<p align="center"><div style="background:black;"><img src="https://github.com/powerlok/GoBarber/blob/master/frontend/src/assets/logo.svg" alt="GoBarber" /></div></p>

# GoBarber

## Instalar Projetos
 yarn install / yarn

## Iniciar Frontend
 yarn start

## Iniciar Backend
 yarn dev:server
 
 
 
 # Banco de dados Prostgres (Docker)
 - docker run --name gostack_gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres
 - criar database gostack_gobarber
 - yarn typeorm migration:run (rode para criar as tabelas)
 
