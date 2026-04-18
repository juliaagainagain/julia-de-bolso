# again

Projeto web estático com páginas em HTML/CSS/JS que simulam uma interface inspirada em apps (Home, Galeria, Notas e Músicas), com navegação lateral e layout responsivo.

## ✨ Páginas do projeto

- **Home** (`home.html`): perfil e links sociais.
- **Galeria** (`galeria.html`): cards que levam para subpáginas visuais.
- **omg!** (`omg.html`): mural visual com reflexão.
- **Maquiagens** (`maquiagens.html`): inspirações e referências.
- **Notas** (`notas.html`): notas expansíveis (accordion).
- **Músicas** (`musicas.html`): recomendações em formato de player.

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## 📁 Estrutura principal

```text
.
├── index.html          # redireciona para home.html
├── home.html
├── galeria.html
├── omg.html
├── maquiagens.html
├── notas.html
├── musicas.html
├── style.css
├── script.js
└── imagens/
```

## ▶️ Como executar

Como é um projeto estático, basta abrir no navegador:

1. Clone o repositório.
2. Abra o arquivo `index.html` no navegador.

Ou rode com um servidor local simples (opcional), por exemplo:

- VS Code + extensão **Live Server**
- `python -m http.server` e acesse `http://localhost:8000`

## 📱 Recursos implementados

- Layout responsivo para desktop e mobile.
- Menu lateral com comportamento mobile (off-canvas).
- Interações em JavaScript para abrir/fechar notas.
- Navegação entre páginas com identidade visual única.

