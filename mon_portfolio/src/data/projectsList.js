import reservia from '../assets/project1.jpg'
import ohmyfood from '../assets/project2.jpg'
import gameon from '../assets/project3.jpg'
import lespetitsplats from '../assets/project4.jpg'
import billed from '../assets/project5.jpg'
import kasa from '../assets/project6.png'
import sportsee from '../assets/project7.jpg'

import html from '../assets/technos/html.png'
import css from '../assets/technos/css.png'
import sass from '../assets/technos/sass.png'
import js from '../assets/technos/js.png'
import react from '../assets/technos/react.png'

export const projectsList = [
    {
        name: 'Reservia',
        id: 1,
        cover: reservia,
        description: "Transformer une maquette en site web",
        techno: [html , css ],
        link: "https://github.com/SaRvj/SaRvj-SatranaRavelojaona_2_13072021"
    },
    {
        name: 'Oh My Food!',
        id: 2,
        cover: ohmyfood,
        description: "Dynamiser une page web avec des animations CSS",
        techno: [html , css, sass ],
        link: "https://github.com/SaRvj/SatranaRavelojaona_3_13072021"
    },
    {
        name: 'GameOn',
        id: 3,
        cover: gameon,
        description: "Offrir une interface facile d'utilisation pour l'inscription aux jeux concours",
        techno: [html, css, js],
        link: "https://github.com/SaRvj/SatranaRavelojaona_4_13072021"
    },
    {
        name: 'Les petits plats',
        id: 4,
        cover: lespetitsplats,
        description: "Développer un algorithme de recherche en JavaScript: analyser un problème informatique, développer un algorithme pour résoudre un problème",
        techno: [html , sass, css, js],
        link: "https://github.com/SaRvj/SatranaRavelojaona_7_13072021"
    },
    {
        name: 'Billed',
        id: 5,
        cover: billed,
        description: "Corriger les bugs, écrire des tests unitaires avec JavaScript, débugger une application web avec le Chrome Debugger, rédiger un plan de test end-to-end manuel,  Ecrire des tests d'intégration avec JavaScript",
        techno: [html , css, sass],
        link:"https://github.com/SaRvj/SatranaRavelojaona_3_13072021"
    },
    {
        name: 'Kasa',
        id: 6,
        cover: kasa,
        description: "Développer une plateforme web pour une entreprise de location",
        techno: [html , css, js, react ],
        link:"https://github.com/SaRvj/SatranaRavelojaona_11_13072021"
    },
    {
        name: 'Sportsee',
        id: 7,
        cover: sportsee,
        description: "Développer une application dédiée au coaching sportif qui permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées",
        techno: [html , css, js, react],
        link: "https://github.com/SaRvj/SatranaRavelojaona_12_13072021"
    },
    {
        // name: '',
        // id: 8,
        // cover: ,
        // description: "Front-End ",
        // techno: [html, css, js],
        // link: ""
    }
]