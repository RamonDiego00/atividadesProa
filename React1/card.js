
function Header() {
    return (
        <div className="container-fluid bg-black text-white p-5">
            <h1 className="text-center">Playstation</h1>
        </div>
            )
}

function Card1(props) {
    return (
        <div className="card m-4" key={props.id}>
  <img src = {"public/" + props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.titu}</h5>
    <p className="card-text">{props.para}</p>
    <a href={props.link} className="btn btn-primary">Saiba mais!</a>
  </div>
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

function Produtos () {
    const conteudos = [ 
        {
            id: 6,
            titu:'Se eu não me engano esse é o unchartege',
            img: 'game1.jpg',
            para: 'Não ei sobre o que se trata',
            link: 'https://pt-br.facebook.com/playstation'
        },
        {
            id: 7,
            titu:'Esse é brabo, fifinha da massa',
            img: 'fifa-22-mbappe-cover.jpg',
            para: 'O Mbappe manda o papo',
            link: 'https://pt-br.facebook.com/playstation'
        },
        {
            id: 8,
            titu:'ATREEUUUUSSSS',
            img: 'god-of-war.png',
            para: 'Kratos o paizão brabo',
            link: 'https://pt-br.facebook.com/playstation'
        },
    ]

    return (
        conteudos.map(conteudo=>(
            <div className="col-4">
                 <Card1 titu={conteudo.titu} img={conteudo.img} para={conteudo.para} link={conteudo.link} />
            </div>
//     <div className="card col-3 m-4" key={conteudo.id}>
//   <img src={conteudo.img} className="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 className="card-title">{conteudo.titu}</h5>
//     <p class="card-text">{conteudo.para}</p>
//     <a href={conteudo.link} className="btn btn-primary">Saiba mais!</a>
//   </div>
// </div>
        ))
    )
}

function Main() {
    return ( 
        <div className="container-fluid">
    <div className="row">
                <Produtos />
           </div>
           </div>
    )
}

function Footer() {
    return (
        <div className="bg-info">
            <ul className="container nav justify-content-center">
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