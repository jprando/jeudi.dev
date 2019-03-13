---
title: NGROK
subtitle: redirecionamento de requisições sem esforço
tags: ["javascript","redirecionamento"]
meta:
  - name: description
    content: redirecionamento de portas tcp e http para o mundo
  - name: keywords
    content: javascript, yarn, npm, ngrok, tcp, http, https, redirecionamento
---

## NGROK

<TagLinks />

*sexta-feira, 08 de março de 2019*
## TL;DR
[site oficial do ngrok](https://ngrok.com/)

1. acessar o site do ngrok e criar uma conta gratuita
2. baixar o binário do ngrok no site official e descompactar em uma pasta
3. configurar o PATH com o caminho da pasta do passo anterior
4. configurar a conta que voce criou no passo 1. localmente com o comando
```bash
./ngrok authtoken 4GYs_token_Vwej_de_acesso_64ZN5_da_sua_conta_8TMoT
```
5. fazer redirecionamento de um serviço executando na sua máquina publicamente
exemplos de comandos
```bash
# postgres
./ngrok tcp 5432

# ssh
./ngrok tcp 22

# express com node
./ngrok http 8080
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
