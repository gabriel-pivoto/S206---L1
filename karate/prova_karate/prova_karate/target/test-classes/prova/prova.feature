Feature: Suite de teste para a prova na parte referente ao Karate

Background:
  * url 'https://gorest.co.in/public/v2'

Scenario: get all users and then get the first user by id
  Given path 'users'
  When method get
  Then status 200

Scenario: Pegando elementos do array de response e testando o tipo
  Given path 'posts'
  When method get
  Then status 200
  And match $ == '#[]'
  And match $ == '#[10]'
  And match each $..name == '#string'
  And match each $..id == '#number'

Scenario: Testando o get de informações
  Given path 'posts'
  When method get
  Then status 200
  And match each $..name[3] == 'Defigo conqueror votum tergiversatio termes creber sunt.'

Scenario: Testando o get de informações - negativa
  Given path 'users/1830415'
  When method get
  Then match $.id == 59451651651

Scenario: Testando metodo delete
  Given path 'users/1830415'
  And header Authorization = 'Bearer 0a3c3778149758863cea1e0c4e184bec413549cd4208965f72ad938cede59f37'
  When method delete
  Then status 204
