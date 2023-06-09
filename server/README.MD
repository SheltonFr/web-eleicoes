# Node js express API

## Requisitos

- Usuarios
  - username
  - password
  - Type
- Registro de Eleitores
  - Nome
  - BI
  - Foto
- Registro de Partidos
  - Nome
  - votos[]?
- Registro de Candidatos
  - Nome
  - Partido
  - Foto
  - votos[]?

### Registro de eleitores

- [x] Rota para registro de eleitores
- [x] Cada eleitor criará sua conta, e os administradores deverão validar a conta

### Registro de Partidos

- [x] Rota de registro de partidos
  - [x] Criação
  - [x] Actualização
  - [x] Eliminação
  - [x] Leitura
    - [x] Todos
    - [x] Por Id
    - [ ] Por Nome
    - [ ] Por data de registro (Opcional)
- [x] Apenas administradores poderão acessar essass toras
