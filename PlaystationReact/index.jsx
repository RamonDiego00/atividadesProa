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
      <img className="logo" src="https://i.pinimg.com/originals/6b/29/c6/6b29c65d5c07bc3efa1db830151d753e.png" alt="" srcset="" />
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
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles>

            </Consoles>
            <Hr />
            <Links/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Serviços
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles />
            <Hr />
            <Links/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notícias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles />
            <Hr />
            <Links/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Loja
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles />
            <Hr />
            <Links/>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Suporte
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <div className="d-flex row teste">
            <Consoles />
            <Hr />
            <Links/>
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


function IconesGames(props) {
  return (
    <div className="" key={props.id}>
        <img className="icones" src={"img/"+ props.img} alt="" />
        <p className="">{props.texto}</p>
    </div>
)  
               }
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

  function Consoles () {

  return (
      conteudos.map(conteudo=>(
          <div className="col-2">
                <IconesGames img={conteudo.img} texto={conteudo.texto}/>
          </div>
      ))
  )
}


function Template() {
    return(
        <div>
            <Sony />
            <Cabecalho />
            
        </div>
    )
}
// Ramon e Gustavo
    let template = <Template/>;
    ReactDOM.render(
        template,
        document.getElementById('root')
        
    )
