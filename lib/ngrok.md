---
title: NGROK
subtitle: redirecionamento de requisições sem esforço
tags: ["javascript","redirecionamento"]
meta:
  - name: description
    content: redirecionamento de portas tcp e http local da sua máquina para o mundo
  - name: keywords
    content: javascript, yarn, npm, ngrok, tcp, http, https, redirecionamento
---

## NGROK

<TagLinks />

*sexta-feira, 08 de março de 2019*
## TL;DR
[site oficial do ngrok](https://ngrok.com/)

1. acessar o site do ngrok e criar uma conta gratuita
2. baixar o zip do ngrok, descompactar em uma pasta e acessar a pasta em um terminal
3. configurar, uma única vez, a conta que voce criou no passo 1. com o comando:
```bash
./ngrok authtoken 4GYs_token_Vwej_de_acesso_64ZN5_da_sua_conta_8TMoT
```
4. tornar acessível um serviço da sua máquina publicamente
```bash
# postgres
./ngrok tcp 5432

# ssh
./ngrok tcp 22

# express com node
./ngrok http 8080
```
5. após executar o comando, duas urls estarão disponíveis
- url de monitoramento das requisições em `http://127.0.0.1:4040`
- url para acessar publicamente(Forwarding) o serviço que é executado localmente

se tudo funcionar corretamente voce deve estar vendo isso em seu terminal
```bash
ngrok by @inconshreveable                                 (Ctrl+C to quit)
  
Session Status                online
Account                       Free (Plan: Fulano de Tal)
Version                       2.3.15
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    tcp://0.tcp.ngrok.io:12334 -> localhost:22                                 
 
Connections                   ttl     opn     rt1     rt5     p50     p90                                
                              0       0       0.00    0.00    0.00    0.00  
```


## O que você vai aprender
...

## O problema que ele resolve
...

## Instalando NGROK
...

## Utilização simples NGROK
...

## Outros cenários que ele pode ajudar

## Dicas
Quando executando o ngrok pressione CTRL+U ou inicie o app através do comando
```bash
sudo ./ngrok update
```
para atualizar para a versão mais recente de forma automática.
