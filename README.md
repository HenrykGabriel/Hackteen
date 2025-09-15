
# AccessCode - Guia Interativo de Acessibilidade Digital

## � Sobre o Projeto

AccessCode é um website educativo desenvolvido para a **Hackteen 2025** na categoria **Startup Explorer**, alinhado ao **ODS 10: Redução das Desigualdades**. O objetivo é ensinar desenvolvedores a criar aplicações web verdadeiramente acessíveis e inclusivas.

## 🎯 Missão

Capacitar desenvolvedores com conhecimento e ferramentas para criar aplicações web verdadeiramente acessíveis, promovendo um mundo digital mais inclusivo para todas as pessoas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos responsivos com variáveis CSS
- **JavaScript (Vanilla)**: Interatividade e funcionalidades avançadas
- **LocalStorage**: Armazenamento local de dados e preferências
- **Google Fonts**: Tipografia (Inter)

## 📁 Estrutura do Projeto

```
AccessCode/
├── index.html              # Página inicial
├── sobre.html              # Página sobre a equipe
├── recursos.html           # Recursos e simuladores
├── contato.html            # Formulário de contato
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos principais
│   └── js/
│       ├── script.js       # Funcionalidades gerais
│       ├── sobre.js        # Específico da página sobre
│       ├── recursos.js     # Simuladores e guias
│       └── contato.js      # Formulário de contato
├── images/                 # Pasta para imagens
└── README.md               # Documentação do projeto
```

## 🌟 Funcionalidades Principais

### 🎨 Design e UX
- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Tipografia Acessível**: Fontes legíveis com contraste adequado
- **Navegação Intuitiva**: Menu claro e breadcrumbs
- **Micro-interações**: Hover effects e transições suaves

### ♿ Recursos de Acessibilidade
- **Simulador de Baixa Visão**: Aplica blur para simular visão reduzida
- **Simulador de Daltonismo**: Remove cores para simular dificuldades de percepção
- **Controle de Fonte**: Ajuste de tamanho de texto (50% a 200%)
- **Controle de Contraste**: Ajuste de contraste visual
- **Navegação por Teclado**: Suporte completo para Tab, Enter, Escape
- **Skip Links**: Links para pular ao conteúdo principal
- **ARIA Labels**: Atributos para leitores de tela
- **Foco Visível**: Indicadores claros de foco

### 📚 Conteúdo Educativo
- **Guias Práticos**: 6 guias detalhados sobre acessibilidade
- **Exemplos de Código**: Snippets prontos para uso
- **Dicas Importantes**: Melhores práticas e orientações
- **Recursos Externos**: Links para ferramentas e guidelines

### � Armazenamento Local
- **Preferências do Usuário**: Idioma, tamanho de fonte, contraste
- **Histórico de Interações**: Rastreamento de uso dos recursos
- **Submissões de Contato**: Backup local dos formulários enviados
- **Estatísticas de Uso**: Analytics básicas da aplicação


## 📖 Guias de Acessibilidade Incluídos

1. **Contraste de Cores**: Proporções adequadas e verificação
2. **Textos Alternativos**: Descrições eficazes para imagens
3. **Navegação por Teclado**: Implementação completa
4. **Tamanho de Fonte Ajustável**: Unidades relativas e controles
5. **Legendas em Vídeos**: Alternativas para conteúdo audiovisual
6. **Formulários Acessíveis**: Labels, validação e estrutura

## � Simuladores Interativos

### Simuladores Visuais
- **Baixa Visão**: Aplica blur de 1.5px para simular visão reduzida
- **Daltonismo**: Aplica filtro grayscale para simular dificuldades com cores

### Controles de Ajuste
- **Tamanho de Fonte**: Slider e botões para ajuste fino (50%-200%)
- **Contraste**: Controle de contraste visual (50%-200%)
- **Reset**: Botão para restaurar todas as configurações

## 📝 Formulário de Contato

### Validações Implementadas
- **Campos Obrigatórios**: Nome, email, assunto, mensagem
- **Validação de Email**: Regex para formato válido
- **Validação de Nome**: Apenas letras e espaços
- **Comprimento Mínimo**: Mensagem com mínimo de 10 caracteres
- **Feedback Visual**: Cores e ícones para indicar erros
- **Feedback Sonoro**: ARIA live regions para leitores de tela

### Funcionalidades
- **Validação em Tempo Real**: Ao sair do campo (blur)
- **Limpeza de Erros**: Ao começar a digitar
- **Estado de Loading**: Indicador visual durante submissão
- **Notificações**: Sistema de feedback para usuário
- **Armazenamento**: Backup das submissões no localStorage

## 🏆 Características de Qualidade

### Performance
- **CSS Otimizado**: Variáveis CSS para manutenibilidade
- **JavaScript Modular**: Código organizado por página
- **Lazy Loading**: Carregamento otimizado de recursos
- **Minificação**: Preparado para otimização de produção

### Acessibilidade (WCAG 2.1 AA)
- **Estrutura Semântica**: HTML5 semântico
- **Contraste Adequado**: Proporções 4.5:1 ou superior
- **Tamanho de Toque**: Botões com mínimo 44px
- **Navegação Consistente**: Padrões previsíveis
- **Formulários Acessíveis**: Labels associados e validação clara

### SEO
- **Meta Tags**: Títulos e descrições otimizadas
- **Estrutura de Headings**: Hierarquia lógica (H1-H6)
- **URLs Semânticas**: Nomes de arquivo descritivos
- **Schema Markup**: Preparado para dados estruturados

## 🚀 Como Executar o Projeto

1. **Clone ou baixe** todos os arquivos mantendo a estrutura de pastas
2. **Abra o arquivo** `index.html` em um navegador moderno
3. **Navegue pelas páginas** usando o menu superior
4. **Teste os simuladores** na página Recursos
5. **Experimente o formulário** na página Contato

### Requisitos
- Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript habilitado
- LocalStorage disponível

## 📊 Estatísticas e Analytics

O projeto inclui um sistema básico de analytics que salva no localStorage:

### Dados Coletados
- **Visualizações de Página**: Contador por página
- **Interações com Guias**: Expansões e cópias de código
- **Uso de Simuladores**: Ativações e configurações
- **Submissões de Contato**: Backup completo dos formulários
- **Preferências**: Configurações de acessibilidade


## 🌍 Impacto Social

### Alinhamento com ODS 10
- **Redução de Barreiras Digitais**: Educação sobre acessibilidade
- **Inclusão de Pessoas com Deficiência**: Ferramentas práticas
- **Capacitação Profissional**: Upskilling de desenvolvedores
- **Conscientização**: Awareness sobre diversidade de usuários

### Métricas de Impacto (Simuladas)
- **1.000+ Desenvolvedores** capacitados
- **50+ Empresas** impactadas
- **15+ Guias** de implementação criados
- **98% Taxa de Satisfação** dos usuários


## 👥 Equipe

- **Davi Camargo Campos**
- **David Fernando Ferreira Moura**
- **Henryk Gabriel Lara Fabiano**

## 📞 Contato

- **Email**: contato@accesscode.dev

**Hackteen**
- **Evento**: Hackteen 2025
- **Categoria**: Startup Explorer
- **Tema**: ODS 10 - Redução das Desigualdades

## 📄 Licença

Este projeto foi desenvolvido para fins educativos na Hackteen 2025.Não deve ser usado para outros fins sem a devida autorização.
---

**Feito para tornar o mundo mais acessível**
