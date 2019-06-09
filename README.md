# Exercice
Aplicativo para marcar quais exercícios foram feitos e quanto de calorias e tempo foram gastos. 

## Para cumprir o desafio instalei:

react native seguindo os passos
  https://facebook.github.io/react-native/docs/getting-started

React Native Elements https://react-native-training.github.io/react-native-elements/
Para instalar siga os passos
  https://react-native-training.github.io/react-native-elements/docs/getting_started.html
Não esqueca de marcar a aba react-native-cli

1. Transformei o data.json em objeto.
2. Adicionei um flat list tanto para os filtros quanto para os exercícios
3. No Flatlist do filtro para ter o gradient utilizei LinearGradient
   - Para instalar siga os passos https://github.com/react-native-community/react-native-linear-gradient
4. Desenhei o restante da tela de acordo com layout informado.
5. Para Filtrar 
   - Adiciono o nome do filtro selecionado em um array quando marcado e removo do array quando desmarcado
   - No render adicionei o function doFilter crio um novo array onde adiciono somente os selecionados
   
 ## Observação
 1. No data.json removi um filtro yoga pois haviam dois.
 2. Para filtar eu usei o nome do exercício portanto somente filtra quando selecionar yoga, não achei outra relação entre o filtro e exercícios

 ## Instalação
 1. Clone o projeto
 2. rode o comando npm install  para instalar os modulos 
 3. react native run-android para rodar no android

 ### Foi testado em Motorola G5 e Iphone 5s