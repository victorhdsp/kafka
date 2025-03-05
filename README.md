# Logs with Kafka

Esse é um programa feito para aprender a usar um bloom filter, eu basicamente crio um bloom filter, faço o calculo para definir o tamanho dela e o numero do calculo de hash baseado na quantidade itens esperados na lista.
Esse é um programa simples para entender o funcionamento do kafka, basicamente tenho o producer por onde mando uma mensagem, então o consumer recebe essa mensagem através do kafka e cria um arquivo em uma pasta com o nome do tópico, chamado "log_<timestamp>" com a mensagem enviada.

## Instalação

Node: 20.15.1
NPM: 10.9.0
Docker: 26.1.4
Docker compose: 2.27.1-desktop.1

1. Utilize "npm install" para instalar as dependências do projeto.

2. Utilize o "docker-compose up -d" para iniciar o servidor de kafka e o zookeeper.

## Utilização

1. Em um terminal use "npm run server" para habilitar o consumer.

2. Em um segundo terminal use "npm run client <message>" para habilitar o producer.