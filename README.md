# TFC - Time de Futebol e Classificações

O TFC é um site informativo sobre partidas e classificações de futebol! ⚽️

## Descrição do Projeto

O TFC é um projeto desenvolvido como parte de um desafio. Ele consiste em uma API dockerizada, integrada com um banco de dados MySQL, e um front-end já completo.

## Estrutura do Projeto

### Banco de Dados

- MySQL containerizado no Docker Compose
- Acesso via Sequelize
- Porta: 3306

### Back-end

- Desenvolvido com Express.js
- Roda na porta 3001
- Dependências listadas em `app/backend/packages.npm`

### Front-end

- Já concluído
- Comunicação com back-end via http://localhost:3001

### Docker

- Docker Compose para integração de serviços

#### Execução do Projeto

1. Clone o repositório do projeto.
2. Navegue até o diretório raiz do projeto.
3. Execute o comando `npm run compose:up` para subir todos os serviços conteinerizados.
4. O projeto estará disponível em [http://localhost:3000](http://localhost:3000) para o front-end e [http://localhost:3001](http://localhost:3001) para o back-end.

## Requisitos do Projeto

O projeto é dividido em quatro fluxos principais: Teams (Times), Users e Login (Pessoas Usuárias e Credenciais de Acesso), Matches (Partidas) e Leaderboards (Placares).

### Teams (Times)

#### Introdução

- CRUD para times de futebol
- Consumido pela rota `/teams` no front-end

#### Requisitos Desenvolvidos

1. **Migration e Model para Times**
   - Desenvolvimento de migration e model para a tabela de times.

2. **Testes com TDD**
   - Cobertura de 5% dos arquivos com 7 linhas cobertas.
   - Desenvolvimento baseado no contrato do próximo requisito.

3. **Endpoint GET `/teams`**
   - Retorna todos os times.
   - Resposta em formato JSON.

4. **Testes com TDD**
   - Cobertura de 10% dos arquivos com 19 linhas cobertas.
   - Evolução dos testes considerando contrato do próximo requisito.

5. **Endpoint GET `/teams/:id`**
   - Retorna dados de um time específico.

#### Observações
- Implementação gradual com TDD.
- Validação de token para adicionar partida.

### Users e Login (Pessoas Usuárias e Credenciais de Acesso)

#### Introdução

- Autenticação de usuários via rota `/login`.

#### Requisitos

6. **Migration e Model para Usuários**
   - Desenvolvimento de migration e model para a tabela de usuários.

7. **Testes com TDD**
   - Cobertura de 15% dos arquivos com 25 linhas cobertas.
   - Baseado no contrato do próximo requisito.

8. **Endpoint POST `/login`**
   - Autenticação de usuários.
   - Resposta com token em caso de sucesso.

9. **Testes com TDD**
   - Cobertura de 20% dos arquivos com 35 linhas cobertas.
   - Evolução dos testes considerando contrato do próximo requisito.

10. **Endpoint POST `/login` (Validações)**
    - Validações de email e senha.
    - Retorno de erros específicos.

11. **Testes com TDD**
    - Cobertura de 30% dos arquivos com 45 linhas cobertas.
    - Baseado no contrato do próximo requisito.

12. **Middleware e Endpoint GET `/login/role`**
    - Middleware para validação de token.
    - Retorno do tipo de usuário.

### Matches (Partidas)

#### Introdução

- CRUD para partidas de futebol.

#### Requisitos

13. **Migration e Model para Partidas**
    - Desenvolvimento de migration e model para a tabela de partidas.

14. **Testes com TDD**
    - Cobertura de 45% dos arquivos com 70 linhas cobertas.
    - Baseado no contrato do próximo requisito.

15. **Endpoint GET `/matches`**
    - Retorna lista de partidas.
    - Filtragem de partidas em andamento ou finalizadas.

16. **Endpoint PATCH `/matches/:id/finish`**
    - Finaliza uma partida.

17. **Endpoint PATCH `/matches/:id`**
    - Atualiza resultado de uma partida em andamento.

18. **Testes com TDD**
    - Cobertura de 60% dos arquivos com 80 linhas cobertas.
    - Baseado no contrato do próximo requisito.

19. **Endpoint POST `/matches`**
    - Cadastra uma nova partida em andamento.

20. **Validações para Inserir Partida**
    - Verifica times iguais e existência dos times.

### Leaderboards (Placares)

#### Introdução

- Classificações de times da casa e visitantes.

#### Requisitos

22. **Testes com TDD (Bônus)**
    - Cobertura de 80% dos arquivos com 100 linhas cobertas.

#### Leaderboard Home

23. **Endpoint GET `/leaderboard/home`**
    - Retorna desempenho dos times da casa.

24. **Filtragem na Tela de Classificação**
    - Filtra classificações dos times da casa.
    - Atualização da tabela ao inserir partida.

#### Leaderboard Away

26. **Endpoint GET `/leaderboard/away`**
    - Retorna desempenho dos times visitantes.
    - Não considera partidas em andamento.

27. **Filtragem na Tela de Classificação**
    - Filtra classificações dos times visitantes.
    - Atualização da tabela ao inserir partida.

#### Leaderboard Geral

29. **Endpoint GET `/leaderboard`**
    - Retorna classificação geral dos times.
    - Não considera partidas em andamento.
    - Atualização da tabela ao inserir partida.


#### Considerações Finais

O TFC foi um projeto desafiador que envolveu a integração de diversos componentes para fornecer uma plataforma informativa sobre futebol. 

Se houver alguma dúvida ou problema sobre o desenvolvimento, não hesite em entrar em contato.
