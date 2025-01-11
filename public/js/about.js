const getLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "it";
};


const updateContent = (lang) => {
    const aboutSection = document.getElementById("aboutSection");

    if (aboutSection) {
        if (lang === "it") {
            aboutSection.innerHTML = `
                <h1>Chi Sono</h1>
                <p>
                    Ciao! Mi chiamo <b>Doru</b> e sono un appassionato di componenti Abarth e automobili. La mia passione per queste vetture mi ha portato a dedicarmi alla stampa 3D, una passione che ho coltivato nel tempo e che oggi mi consente di creare e stampare personalmente ogni singolo componente che troverai su questo sito.
                </p>
                <p>
                    Ho una stampante 3D con cui realizzo ogni pezzo con la massima cura, per offrire prodotti di alta qualità. Ogni oggetto che vedi qui è stampato da me, i disegni sono presi da vari siti web o fatti interamente da me.
                </p>
                <p>
                    Inoltre, mio figlio, un talentuoso sviluppatore software, mi ha aiutato a costruire questo sito web. È un progetto a cui teniamo molto e siamo felici di condividerlo con voi. Il sito è sicuro e affidabile, e puoi anche trovarlo su GitHub per dare un'occhiata al codice.
                </p>
                <p>
                    Grazie per essere passato a visitare il nostro sito, spero che ti piacciano i nostri prodotti e se hai domande, non esitare a contattarci!
                </p>
            `;
        } else {
            aboutSection.innerHTML = `
                <h1>About Me</h1>
                <p>
                    Hi! My name is <b>Doru</b>, and I'm passionate about Abarth components and cars. My passion for these vehicles led me to dedicate myself to 3D printing, a hobby I've cultivated over time that now allows me to create and print each individual component you will find on this site.
                </p>
                <p>
                    I have a 3D printer with which I create each part with great care to provide high-quality products. Every item you see here is printed by me, with designs taken from various websites or made entirely by me.
                </p>
                <p>
                    Additionally, my son, a talented software developer, helped me build this website. It's a project that means a lot to us, and we're excited to share it with you. The site is safe and reliable, and you can even find it on GitHub to take a look at the code.
                </p>
                <p>
                    Thanks for visiting our site! I hope you like our products, and if you have any questions, feel free to contact us!
                </p>
            `;
        }
    }
};

const initAboutPage = () => {
    const lang = getLanguage();
    updateContent(lang);
};

document.addEventListener('DOMContentLoaded', initAboutPage);

