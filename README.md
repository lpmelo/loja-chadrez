# Loja chadrez - Teste Front-End
Desenvolvi este projeto para testar meu conhecimento com NextJS

## Tempo do projeto

O desenvolvedor tem o tempo de uma semana para realizar o teste, começando dia 24/05.
## Como utilizar:

1 - Realize o git clone do projeto em sua máquina ou baixe o zip e extraia em uma pasta;

2 - Instale todas as dependências do projeto utilizando npm ou qualquer outro gerenciador de dependências de sua escolha: `npm install` | `yarn`;

3 - É importante salientar que o projeto utiliza de variáveis de ambiente para referenciar a rota padrão da api. Sendo assim, crie um arquivo na raiz do projeto chamado .env.local e crie a variável: `DEFAULT_API_ROUTE = http://localhost:5000` (caso esteja utilizando outra porta ou rota, é só atribuir a rota na variável DEFAULT_API_ROUTE);

4 - Agora, escolha a maneira de sua preferência para rodar o projeto, caso queria testar o projeto rapidamente em um ambiente de desenvolvimento, utilize `npm run dev`. Caso prefira testar em um ambiente de produção, execute `npm run build` e, após o build, `npm run start`. 
### Requisitos

#### Bloco 1
- [x] Ao clicar em um dos itens do Passo 1, o item deve ser adicionado no bloco do Passo 2, a ordem de visualização é sempre mostrar o último item adicionado no topo;
- [x] Você deve colocar algum indicador visual que o item do primeiro bloco está selecionado, como por exemplo, uma borda diferente ou algum ícone sinalizando que ele foi incluído, recomendamos a borda;
- [x] Ao clicar em um item já selecionado, ele deve ser removido do bloco do Passo 2;

#### Bloco 2
- [x] Você deverá listar os itens adicionado pelo usuário no Passo 1;
- [x] Ao clicar no item da lixeira deve excluir o item;

#### Bloco 3
- [x] Manter sempre atualiza o Total e Quantidade de peças selecionados, conforme o usuário incluir ou excluir peças

#### Outros requisitos
- [x] Integração com Api de peças de chadrez;
- [x] Utilização da Context Api;
- [x] Layout responsivo;
