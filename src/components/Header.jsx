export default function Header(){
    return(
        <>
            <header>
                <h1><img id="logo-header" src="cab-logo.png" alt="" /></h1>
                <ul>
                    <li><a className="link" href="#">Partidas</a></li>
                    <li><a className="link" href="#">Elenco</a></li>
                    <li><a className="link" href="#">Entre em Contato</a></li>
                    <li><a className="link" href="#">Patrocínios</a></li>
                </ul>
                
            </header>
            <div className="border-gradient"></div>
        </>
    )
}