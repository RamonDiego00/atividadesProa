import React from "react";
import image from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techtudo.com.br%2Fdicas-e-tutoriais%2F2018%2F05%2Fsaiba-como-jogar-free-fire-battlegrounds-o-jogo-online-da-garena.ghtml&psig=AOvVaw23o9XrRS5EvK2S2PJn7tWQ&ust=1632499259672000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiErua7lfMCFQAAAAAdAAAAABAD'

function Header() {
    return (
        <div className="container-fluid bg-black text-white p-5">
            <h1 className="text-center">Playstation</h1>
        </div>
            )
}
function ItemSocial() {
    const redesSociais = [
    {
        id: 1,
        icon: 'bi bi-facebook',
        link: 'https://pt-br.facebook.com/playstation'
    },
    {
        id: 2,
        icon: 'bi bi-twitter',
        link: 'https://pt-br.facebook.com/playstation'
    },
    {
        id: 3,
        icon: 'bi bi-youtube',
        link: 'https://pt-br.facebook.com/playstation'
    },
    {
        id: 4,
        icon: 'bi bi-twitch',
        link: 'https://pt-br.facebook.com/playstation'
    },
    {
        id: 5,
        icon: 'bi bi-linkedin',
        link: 'https://pt-br.facebook.com/playstation'
    }
    ];

    return (
        redesSociais.map(redeSocial=>(
            <li className="nav-item p-3" key={redeSocial.id}>
                <a className="text-white" href={redeSocial.link}>
                    <i className={redeSocial.icon}></i>
                </a>
            </li>
        ))
    )  
}

function ConteudoCard () {
    const conteudos = [ 
        {
        id: 6,
        titu:'Um jogo',
        img: {image},
        para: 'Este jogo é bem legal',
        link: 'https://pt-br.facebook.com/playstation'
        },
    ]

    return (
        conteudos.map(conteudo=>(
            <div className="card" style="width: 18rem;">
  <img src={conteudo.img} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{conteudo.titu}</h5>
    <p class="card-text">{conteudo.para}</p>
    <a href={conteudo.link} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        ))
    )
}

function Main() {
    return (
           <ConteudoCard />
    )
}

function Footer() {
    return (
        <div className="bg-info">
            <ul className="container nav justify-content-center ">
               <ItemSocial />
            </ul>
        </div>
    );
}

function Template() {
    return(
        <div>

            <Header/>
            <Main />
            <Footer />

        </div>
    );
}

    let template = <Template/>;

    ReactDOM.render(
        template,
        document.getElementById('root')
    )