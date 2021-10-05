// Ramon e Gustavo
function Sony() {
  return (
    <div className="sony">
      <img className="logoSony" src="./img/logoSony.png" alt="" srcset="" />
    </div>
  )
}
function Cabecalho() {
    return(
<nav className="navbar navbar-expand-lg navbar">
  <div className="container-fluid bg-ligth">
    <a className="navbar-brand" href="#">
      <img className="R-logo" src="https://i.pinimg.com/originals/6b/29/c6/6b29c65d5c07bc3efa1db830151d753e.png" alt="" srcset="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle container-fluid" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jogos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li>
            <div className="d-flex row teste">
            <Consoles />
            <Hr />
            <Links/>
            </div>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hardware
          </a>
          <ul className="dropdown-menu R-hardware" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles2 />
            <Hr />
            <Links2/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Serviços
          </a>
          <ul className="dropdown-menu R-servicos" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles3 />
            <Hr />
            <Links3/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notícias
          </a>
          <ul className="dropdown-menu R-noticias" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles4 />
            <Hr />
            <Links4/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Loja
          </a>
          <ul className="dropdown-menu R-loja" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles5 />
            <Hr />
            <Links5/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Suporte
          </a>
          <ul className="dropdown-menu R-suporte" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles6 />
            </div>
          </ul>
        </li>
      </ul>
      <form className="d-flex align-items-center">
        <button className="btn btn-header rounded-pill m-4" type="submit">Iniciar sessão</button>
        <a href=""><i class="bi bi-search text-black"></i></a>
      </form>
    </div>
  </div>
</nav>
    )
    $(".nav-item dropdown").click(function(){
      $(".dropdown-menu").fadeIn("slow");
    });
} 

//Funções complementares

function Hr() {
  return(
    <hr className="hr" />
  )
}

function Links() {
  return(
    <div>
  <ul className="ul">
    <li className="links">PlayStation Indies</li>
    <li className="links">Jogos para PS4 no PS5</li>
    <li className="links">PlayStation Hits</li>
    <li className="links">Ofertas e promoções</li>
  </ul>
</div>
  )

}

function Links2() {
  return(
    <div>
  <ul className="ul">
    <li className="links li2">Controle sem fio DualSense</li>
    <li className="links li2">Headset Pulse 3D</li>
    <li className="links li2">Acessórios para o PS5</li>
    <li className="links li2">controle sem fio DUALSHOCK 4</li>
    <li className="links li2">Acessórios para o PS4</li>
  </ul>
</div>
  )

}

function Links3() {
  return(
    <div>
  <ul className="ul">
    <li className="links li3">Entretenimento no PS5</li>
    <li className="links li3">Entretenimento no PS4</li>
  </ul>
</div>
  )

}

function Links4() {
  return(
    <div>
  <ul className="ul">
    <li className="links li4">Central de competições</li>
  </ul>
</div>
  )

}
function Links5() {
  return(
    <div>
  <ul className="ul">
    <li className="links li5">Comprar Jogos PS5</li>
    <li className="links li5">Comprar Jogos PS4</li>
    <li className="links li5">Comprar PlayStation Plus</li>
    <li className="links li5">Comprar PS4</li>
    <li className="links li5">Comprar PS VR</li>
  </ul>
</div>
  )

}

function IconesGames(props) {
  return (
    <div className="" key={props.id}>
        <img className="R-icones" src={"img/"+ props.img} alt="" />
        <p className="">{props.texto}</p>
    </div>
)  
               }
               
function Consoles () {

const conteudos = [ 
  {
      id: 1,
      img: 'PS5.png',
      texto: 'PS5'
  },
  {
      id: 2,
      img: 'PS4.png',
      texto: 'PS4'
  },
  {
      id: 3,
      img: 'PS VR.png',
      texto: 'PS VR'
  },
  {
    id: 4,
    img: 'PS PLUS.png',
    texto: 'PS Plus',

},
{
  id: 5,
  img: 'compras.png',
  texto: 'Comprar Jogos',

},
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
<IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function Consoles2 () {
                 
  const conteudos = [ 
   {
       id: 1,
       img: 'PS5.png',
       texto: 'PS5'
   },
   {
       id: 2,
       img: 'PS4.png',
       texto: 'PS4'
   },
   {
       id: 3,
       img: 'PS4pro.png',
       texto: 'PS4 Pro'
   },
   {
     id: 4,
     img: 'PS VR.png',
     texto: 'PS VR',

 }
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
 <IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function Consoles3 () {
                 
  const conteudos = [ 
   {
       id: 1,
       img: 'PS PLUS.png',
       texto: 'PS Plus'
   }
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
 <IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function Consoles4 () {
                 
  const conteudos = [ 
   {
       id: 1,
       img: 'Noticia1.png',
       texto: 'PS Blog'
   },
   {
       id: 2,
       img: 'Noticia2.png',
       texto: 'Este mês no PlayStation'
   }
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
 <IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function Consoles5 () {
                 
  const conteudos = [ 
   {
       id: 1,
       img: 'compras.png',
       texto: 'PS Store'
   },
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
 <IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function Consoles6 () {
                 
  const conteudos = [ 
   {
       id: 1,
       img: 'Servico1.png',
       texto: 'Suporte'
   },
   {
       id: 2,
       img: 'Servico2.png',
       texto: 'Status da PSN'
   }
]
return (
conteudos.map(conteudo=>(
<div className="col-2">
 <IconesGames img={conteudo.img} texto={conteudo.texto}/>
</div>
))
)
}

function PlayPlus() {
  return(
			<div class="row align-items-center bg-Plus">
				<div className="col-6 plau">
          <div className="centralizar">
					<img className="PlusPlus" src="./img/Playplus2.png"  alt="" />
          <p className="playplay">Melhore sua experiência PlayStation com o modo multijogador online, jogos mensais, descontos exclusivos e muito mais.</p>
					<button class="btn btn-plus rounded-pill m-4">Explore o PlayStation Plus 
					</button>
          </div>
				</div>
				<div class="col-6">
					<img className="Hitman d-block" src="./img/PlayPlus.png" alt=""/>
				</div>
			</div>
		  
  )
}


function Template() {
    return(
        <div>
            <Sony />
            <Cabecalho />
            <PlayPlus />
        </div>
    )
}
// Ramon e Gustavo
    let template = <Template/>;
    ReactDOM.render(
        template,
        document.getElementById('root')
        
    )
