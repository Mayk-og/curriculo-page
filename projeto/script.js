
// ==========================================
// CURRÍCULO DIGITAL - MAYK DA SILVA SANTOS
// ==========================================

const cv = {
    personalInformation: {
        fullName: "Mayk da Silva Santos",

        professionalTitle:
            "Estudante de ADS | Desenvolvedor Web e Power BI",

        phone: "11967570170",

        whatsapp: "5511967570170",

        email: "",

        location: {
            city: "Poá",
            state: "São Paulo",
            country: "Brasil"
        },

        github: "https://github.com/Mayk-og",

        portfolio:
            "https://github.com/Mayk-og/WZMOTORSPAORT-PAGE"
    },

    professionalSummary: {
        description:
            "Sou estudante de Análise e Desenvolvimento de Sistemas na UniPiaget, com conhecimentos em Python, HTML, CSS e Power BI. Tenho experiência profissional como técnico de manutenção e prensista, além de formação complementar em tecnologia. Gosto de resolver problemas, aprender novas tecnologias e desenvolver soluções digitais. Atualmente busco uma oportunidade de estágio em tecnologia para desenvolver minhas habilidades e crescer profissionalmente.",

        careerObjective:
            "Conquistar uma oportunidade de estágio em Análise e Desenvolvimento de Sistemas."
    },

    professionalExperience: [
        {
            company: "Empresa não informada",
            position: "Técnico de Manutenção",
            period: "1 ano",
            description:
                "Experiência profissional na área de manutenção técnica.",
            responsibilities: []
        },

        {
            company: "Empresa não informada",
            position: "Prensista",
            period: "Experiência profissional",
            description:
                "Atuação profissional na área de operação de prensa.",
            responsibilities: []
        }
    ],

    education: [
        {
            institution: "UniPiaget",
            degree: "Ensino Superior",
            course: "Análise e Desenvolvimento de Sistemas",
            status: "Cursando"
        },

        {
            institution: "Não informado",
            degree: "Ensino Médio",
            course: "Ensino Médio Completo",
            status: "Concluído"
        }
    ],

    skills: {
        technical: [
            "Python",
            "HTML5",
            "CSS3",
            "Power BI",
            "Desenvolvimento de gráficos",
            "Matemática Avançada",
            "Informática"
        ],

        tools: [
            "Power BI",
            "GitHub"
        ],

        behavioral: [
            "Raciocínio lógico",
            "Organização",
            "Comprometimento",
            "Facilidade de aprendizado",
            "Resolução de problemas"
        ]
    },

    languages: [
        {
            name: "Português",
            level: "Nativo"
        },

        {
            name: "Inglês",
            level: "Intermediário"
        }
    ],

    courses: [
        {
            name: "Programação em Python",
            institution: "SENAI"
        },

        {
            name: "Desenvolvimento de Gráficos com Power BI",
            institution: "Instituição de ensino"
        },

        {
            name: "Técnico em Informática",
            institution: "Instituição de ensino"
        },

        {
            name: "Matemática Avançada",
            institution: "Instituição de ensino"
        }
    ],

    projects: [
        {
            name: "WZ Motorsport Page",

            description:
                "Projeto pessoal de desenvolvimento web, com criação de uma página relacionada ao universo automobilístico.",

            technologies: [
                "HTML",
                "CSS"
            ],

            url:
                "https://github.com/Mayk-og/WZMOTORSPAORT-PAGE"
        }
    ]
};


// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

// Evita inserir conteúdo HTML não confiável.
function escapeHTML(value) {
    return String(value ?? "").replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]
    );
}

// Atalho para selecionar elementos.
function select(id) {
    return document.getElementById(id);
}


// ==========================================
// INFORMAÇÕES PESSOAIS
// ==========================================

function renderPersonalInformation() {

    const person = cv.personalInformation;

    const fullName = person.fullName;

    const initials = fullName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(name => name[0])
        .join("")
        .toUpperCase();

    select("nome").textContent = fullName;

    select("card-nome").textContent = fullName;

    select("iniciais").textContent = initials;

    select("titulo").textContent =
        person.professionalTitle;

    select("card-cargo").textContent =
        "Desenvolvedor em formação";

    select("localizacao").textContent =
        `${person.location.city}, ${person.location.state}`;

    const github = select("github-link");

    github.href = person.github;
    github.target = "_blank";
    github.rel = "noopener noreferrer";

    const whatsappURL =
        `https://wa.me/${person.whatsapp}`;

    select("whatsapp-link").href = whatsappURL;

    select("contato-whatsapp").href = whatsappURL;
}


// ==========================================
// SOBRE MIM
// ==========================================

function renderAbout() {

    select("resumo").textContent =
        cv.professionalSummary.description;

    select("sobre-texto").textContent =
        cv.professionalSummary.description;
}


// ==========================================
// EXPERIÊNCIA PROFISSIONAL
// ==========================================

function renderExperience() {

    const container = select("experiencias");

    container.innerHTML =
        cv.professionalExperience.map(job => `

            <article class="experience-card">

                <h3>${escapeHTML(job.position)}</h3>

                <div class="company">
                    ${escapeHTML(job.company)}
                    · ${escapeHTML(job.period)}
                </div>

                <p>${escapeHTML(job.description)}</p>

                ${
                    job.responsibilities.length
                    ? `
                        <ul>
                            ${job.responsibilities.map(item => `
                                <li>${escapeHTML(item)}</li>
                            `).join("")}
                        </ul>
                    `
                    : ""
                }

            </article>

        `).join("");
}


// ==========================================
// FORMAÇÃO ACADÊMICA
// ==========================================

function renderEducation() {

    const container = select("formacoes");

    container.innerHTML =
        cv.education.map(item => `

            <article class="education-card">

                <span class="tag">
                    ${escapeHTML(item.status)}
                </span>

                <h3>${escapeHTML(item.course)}</h3>

                <p>${escapeHTML(item.degree)}</p>

                <p>${escapeHTML(item.institution)}</p>

            </article>

        `).join("");
}


// ==========================================
// HABILIDADES
// ==========================================

function renderSkills() {

    const container = select("habilidades-lista");

    const groups = [
        {
            title: "Conhecimentos técnicos",
            items: cv.skills.technical
        },

        {
            title: "Ferramentas",
            items: cv.skills.tools
        },

        {
            title: "Habilidades comportamentais",
            items: cv.skills.behavioral
        }
    ];

    container.innerHTML =
        groups.map(group => `

            <article class="skill-card">

                <h3>${escapeHTML(group.title)}</h3>

                <div class="skill-tags">

                    ${group.items.map(skill => `
                        <span>${escapeHTML(skill)}</span>
                    `).join("")}

                </div>

            </article>

        `).join("");
}


// ==========================================
// PROJETOS
// ==========================================

function renderProjects() {

    const container = select("projetos-lista");

    container.innerHTML =
        cv.projects.map(project => `

            <article class="project-card">

                <div class="project-icon">💻</div>

                <h3>${escapeHTML(project.name)}</h3>

                <p>${escapeHTML(project.description)}</p>

                <div class="skill-tags">

                    ${project.technologies.map(tech => `
                        <span>${escapeHTML(tech)}</span>
                    `).join("")}

                </div>

                <a
                    href="${escapeHTML(project.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver projeto no GitHub ↗
                </a>

            </article>

        `).join("");
}


// ==========================================
// CURSOS
// ==========================================

function renderCourses() {

    const container = select("cursos-lista");

    container.innerHTML =
        cv.courses.map(course => `

            <article class="course-card">

                <h3>📜 ${escapeHTML(course.name)}</h3>

                <p>${escapeHTML(course.institution)}</p>

            </article>

        `).join("");
}


// ==========================================
// IDIOMAS
// ==========================================

function renderLanguages() {

    const container = select("idiomas-lista");

    container.innerHTML =
        cv.languages.map(language => `

            <article class="language-card">

                <strong>${escapeHTML(language.name)}</strong>

                <span>${escapeHTML(language.level)}</span>

            </article>

        `).join("");
}


// ==========================================
// INICIALIZAÇÃO DO SITE
// ==========================================

function initializePortfolio() {

    renderPersonalInformation();

    renderAbout();

    renderExperience();

    renderEducation();

    renderSkills();

    renderProjects();

    renderCourses();

    renderLanguages();

    select("ano").textContent =
        new Date().getFullYear();

}

document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);
