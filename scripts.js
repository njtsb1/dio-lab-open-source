const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const langSelect = document.getElementById('langSelect');
const i18nElements = document.querySelectorAll('[data-i18n]');

const translations = {
  "pt-BR": {
    "menu.challenge": "Desafio",
    "menu.community": "Comunidade",
    "menu.materials": "Materiais de Apoio",
    "challenge.title": "Desafio: Profile README",
    "challenge.description": "Contribua no diretório \"Community\", criando um Profile README contendo informações sobre você que deseje compartilhar com a comunidade. Além disso, você pode inserir também links para seus desafios de projeto e artigos na plataforma da <a href=\"https://www.dio.me/\">Digital Innovation One</a>.<br>Inspire-se consultando os exemplos na pasta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a>, confira alguns utilitários na pasta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a> e use sua criatividade para criar o seu 😊💙.",
    "instructions.title": "Instruções:",
    "instructions.step1": "Faça um <b>Fork</b> deste repositório;",
    "instructions.step2": "Clone localmente <code>git clone https://github.com/<b>SEUUSERNAME</b>/dio-lab-open-source.git</code>;",
    "instructions.step3": "Adicione o remote upstream para manter seu repositório local atualizado: <code>git remote add upstream https://github.com/digitalinnovationone/dio-lab-open-source.git</code>. Utilize o comando <code>git pull upstream main</code> para baixar e mesclar as alterações no seu repositório local com base na branch main deste repositório original de onde você fez o fork, ou <code>git fetch upstream main</code> para baixar sem mesclar. Veja mais em: <a href=\"https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/03-primeiros-passos-com-git-e-github.md\">\"Primeiros Passos com Git e GitHub\"</a>;",
    "instructions.step4": "Crie uma nova <b>branch</b> e nomeie como <code>feat/community/<b>seunomedeusuario</b></code>. Exemplo: <code>feat/community/falvojr</code>;",
    "instructions.step5": "Dentro da pasta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a>, crie um arquivo em Markdown (extensão <code>.md</code>) e nomeie com o mesmo nome do seu usuário no GitHub. Exemplo: <code>falvojr.md</code>;",
    "instructions.step6": "Desenvolva o seu perfil. Para isso, você pode ver exemplos na pasta community e adicionar alguns dos utilitários presentes na pasta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a>. <b>Observação:</b> Use os outros exemplos como inspiração e não cópia;",
    "instructions.step7": "Adicione suas alterações à \"staging area\" com o comando <code>git add community/<b>seunomedeusuario</b>.md</code>;",
    "instructions.step8": "Crie um commit e adicione a mensagem indicando a adição do seu perfil <code>git commit -m\"feat: add <b>seunomedeusuario</b> profile\"</code>;",
    "instructions.step9": "Envie as alterações para o seu repositório remoto <code>git push origin feat/community/<b>seunomedeusuario</b></code>;",
    "instructions.step10": "Crie um <b>Pull Request</b>.",
    "community.title": "Confira os perfis criados pela comunidade",
    "community.description": "Veja todos os perfis desenvolvidos pela comunidade em <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">dio-lab-open-source/examples</a>, ou busque um específico digitando o nome do usuário abaixo. <br> Inspire-se e faça a sua <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/\">contribuição</a> 😉🚀.",
    "community.viewProfile": "Ver Perfil",
    "materials.title": "Materiais de Apoio",
    "materials.item1": "Introdução ao Lab;",
    "materials.item2": "Formas de Contribuir num Projeto Open Source;",
    "materials.item3": "Desenvolvendo e Enviando uma Contribuição;",
    "materials.item4": "Dicas e Materiais de Apoio.",
    "footer.text": "Projeto desenvolvido para fins didáticos para o lab Contribuindo em um Projeto Open Source no GitHub da <a href=\"https://www.dio.me/\">Digital Innovation One</a>. Contribua com o projeto no <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source\">GitHub</a>.",
    "alerts.emptySearch": "Por favor, insira um termo de pesquisa."
  },
  "en-US": {
    "menu.challenge": "Challenge",
    "menu.community": "Community",
    "menu.materials": "Support Materials",
    "challenge.title": "Challenge: Profile README",
    "challenge.description": "Contribute to the \"Community\" directory by creating a Profile README containing information about yourself that you want to share with the community. Additionally, you can include links to your project challenges and articles on the <a href=\"https://www.dio.me/\">Digital Innovation One</a> platform.<br>Get inspired by checking the examples in the <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a> folder, explore some utilities in the <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a> folder and use your creativity to build yours 😊💙.",
    "instructions.title": "Instructions:",
    "instructions.step1": "Fork this repository;",
    "instructions.step2": "Clone locally <code>git clone https://github.com/<b>YOURUSERNAME</b>/dio-lab-open-source.git</code>;",
    "instructions.step3": "Add the upstream remote to keep your local repository up to date: <code>git remote add upstream https://github.com/digitalinnovationone/dio-lab-open-source.git</code>. Use the command <code>git pull upstream main</code> to fetch and merge changes into your local repository based on the main branch of the original repository you forked from, or <code>git fetch upstream main</code> to fetch without merging. See more at: <a href=\"https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/03-primeiros-passos-com-git-e-github.md\">\"Getting Started with Git and GitHub\"</a>;",
    "instructions.step4": "Create a new <b>branch</b> and name it <code>feat/community/<b>yourgithubusername</b></code>. Example: <code>feat/community/falvojr</code>;",
    "instructions.step5": "Inside the <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a> folder, create a Markdown file (extension <code>.md</code>) and name it with your GitHub username. Example: <code>falvojr.md</code>;",
    "instructions.step6": "Build your profile. You can view examples in the community folder and add some of the utilities from the <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a> folder. <b>Note:</b> Use other examples as inspiration, not as direct copies;",
    "instructions.step7": "Add your changes to the staging area with the command <code>git add community/<b>yourgithubusername</b>.md</code>;",
    "instructions.step8": "Create a commit and add a message indicating the addition of your profile: <code>git commit -m\"feat: add <b>yourgithubusername</b> profile\"</code>;",
    "instructions.step9": "Push the changes to your remote repository: <code>git push origin feat/community/<b>yourgithubusername</b></code>;",
    "instructions.step10": "Create a <b>Pull Request</b>.",
    "community.title": "Check out profiles created by the community",
    "community.description": "See all profiles developed by the community at <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">dio-lab-open-source/examples</a>, or search for a specific one by typing the username below. <br> Get inspired and make your <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/\">contribution</a> 😉🚀.",
    "community.viewProfile": "View Profile",
    "materials.title": "Support Materials",
    "materials.item1": "Introduction to the Lab;",
    "materials.item2": "Ways to Contribute to an Open Source Project;",
    "materials.item3": "Developing and Submitting a Contribution;",
    "materials.item4": "Tips and Support Materials.",
    "footer.text": "Project developed for educational purposes for the lab Contributing to an Open Source Project on GitHub by <a href=\"https://www.dio.me/\">Digital Innovation One</a>. Contribute to the project on <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source\">GitHub</a>.",
    "alerts.emptySearch": "Please enter a search term."
  },
  "es-ES": {
    "menu.challenge": "Desafío",
    "menu.community": "Comunidad",
    "menu.materials": "Materiales de Apoyo",
    "challenge.title": "Desafío: Profile README",
    "challenge.description": "Contribuye al directorio \"Community\" creando un Profile README con información sobre ti que quieras compartir con la comunidad. Además, puedes incluir enlaces a tus retos de proyecto y artículos en la plataforma de <a href=\"https://www.dio.me/\">Digital Innovation One</a>.<br>Inspírate consultando los ejemplos en la carpeta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a>, revisa algunas utilidades en la carpeta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a> y usa tu creatividad para crear el tuyo 😊💙.",
    "instructions.title": "Instrucciones:",
    "instructions.step1": "Haz un <b>Fork</b> de este repositorio;",
    "instructions.step2": "Clona localmente <code>git clone https://github.com/<b>TUNOMBREDEUSUARIO</b>/dio-lab-open-source.git</code>;",
    "instructions.step3": "Agrega el remote upstream para mantener tu repositorio local actualizado: <code>git remote add upstream https://github.com/digitalinnovationone/dio-lab-open-source.git</code>. Usa el comando <code>git pull upstream main</code> para descargar y fusionar los cambios en tu repositorio local basándote en la rama main del repositorio original del que hiciste fork, o <code>git fetch upstream main</code> para descargar sin fusionar. Ver más en: <a href=\"https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/03-primeiros-passos-com-git-e-github.md\">\"Primeros Pasos con Git y GitHub\"</a>;",
    "instructions.step4": "Crea una nueva <b>branch</b> y nómbrala <code>feat/community/<b>tunombredeusuario</b></code>. Ejemplo: <code>feat/community/falvojr</code>;",
    "instructions.step5": "Dentro de la carpeta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">\"community\"</a>, crea un archivo Markdown (extensión <code>.md</code>) y nómbralo con tu usuario de GitHub. Ejemplo: <code>falvojr.md</code>;",
    "instructions.step6": "Desarrolla tu perfil. Puedes ver ejemplos en la carpeta community y añadir algunas utilidades de la carpeta <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/utils\">\"utils\"</a>. <b>Observación:</b> Usa los otros ejemplos como inspiración y no como copia;",
    "instructions.step7": "Agrega tus cambios al área de staging con el comando <code>git add community/<b>tunombredeusuario</b>.md</code>;",
    "instructions.step8": "Crea un commit y añade un mensaje indicando la adición de tu perfil <code>git commit -m\"feat: add <b>tunombredeusuario</b> profile\"</code>;",
    "instructions.step9": "Envía los cambios a tu repositorio remoto <code>git push origin feat/community/<b>tunombredeusuario</b></code>;",
    "instructions.step10": "Crea un <b>Pull Request</b>.",
    "community.title": "Consulta los perfiles creados por la comunidad",
    "community.description": "Ve todos los perfiles desarrollados por la comunidad en <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/tree/main/community\">dio-lab-open-source/examples</a>, o busca uno específico escribiendo el nombre de usuario abajo. <br> Inspírate y haz tu <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source/\">contribución</a> 😉🚀.",
    "community.viewProfile": "Ver Perfil",
    "materials.title": "Materiales de Apoyo",
    "materials.item1": "Introducción al Lab;",
    "materials.item2": "Formas de Contribuir en un Proyecto Open Source;",
    "materials.item3": "Desarrollando y Enviando una Contribución;",
    "materials.item4": "Consejos y Materiales de Apoyo.",
    "footer.text": "Proyecto desarrollado con fines didácticos para el lab Contribuyendo en un Proyecto Open Source en GitHub de <a href=\"https://www.dio.me/\">Digital Innovation One</a>. Contribuye con el proyecto en <a href=\"https://github.com/digitalinnovationone/dio-lab-open-source\">GitHub</a>.",
    "alerts.emptySearch": "Por favor, ingrese un término de búsqueda."
  }
};

function applyTranslations(lang) {
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang] && translations[lang][key] ? translations[lang][key] : el.innerHTML;
    el.innerHTML = text;
  });
  const placeholderMap = {
    "pt-BR": "username",
    "en-US": "username",
    "es-ES": "username"
  };
  searchInput.setAttribute('placeholder', placeholderMap[lang] || 'username');
  localStorage.setItem('siteLanguage', lang);
}

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    themeIcon.className = 'bi bi-sun-fill';
    localStorage.setItem('siteTheme', 'dark');
  } else {
    document.body.classList.remove('dark');
    themeIcon.className = 'bi bi-moon-fill';
    localStorage.setItem('siteTheme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'en-US';
  const normalizedLang = savedLang.startsWith('en') ? 'en-US' : savedLang.startsWith('es') ? 'es-ES' : 'pt-BR';
  langSelect.value = normalizedLang;
  applyTranslations(normalizedLang);
  const savedTheme = localStorage.getItem('siteTheme') || 'light';
  setTheme(savedTheme === 'dark');
});

langSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  applyTranslations(lang);
});

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(!isDark);
});

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim();
  const lang = localStorage.getItem('siteLanguage') || 'en-US';
  const alertMsg = translations[lang] && translations[lang]['alerts.emptySearch'] ? translations[lang]['alerts.emptySearch'] : 'Please enter a search term.';
  if (searchValue === '') {
    alert(alertMsg);
    return;
  }
  const url = `https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community/${encodeURIComponent(searchValue)}.md`;
  const defaultUrl = 'https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community';
  window.open(url, '_blank');
});
