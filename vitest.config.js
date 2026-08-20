import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // O padrão é Node, que é onde mora quase tudo o que se mede aqui. Os
    // testes de `shared/` pedem o navegador com um `@vitest-environment
    // jsdom` no topo do arquivo — um ambiente só para o projeto inteiro
    // sairia caro em cada teste de servidor, que não precisa de DOM nenhum.
    environment: 'node',
    setupFiles: ['./vitest.setup.js'],
    include: ['server/**/*.test.js', 'shared/**/*.test.js'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],

      // A medida cobre o servidor e o módulo compartilhado. `server/public/`
      // fica de fora com `client/src/`: são páginas de navegador, e cobri-las
      // é o outro trabalho.
      include: ['server/**/*.js', 'shared/**/*.js'],
      exclude: ['server/public/**', '**/*.test.js'],
    },
  },
});
