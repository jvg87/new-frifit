import Link from "next/link";

function Navbar() {
  return (  
    <nav>
      <Link href='/' className="logo">
        Fri<span>Fit</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about'>
            Sobre
          </Link>
        </li>
        <li>
          <Link href='/gallery'>
            Galeria
          </Link>
        </li>
        <li>
          <Link href='/plans'>
            Planos
          </Link>
        </li>
        <li>
          <Link href='/trainers'>
            Professores
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            Contato
          </Link>
        </li>
      </ul>
      <div className="btn-toggle">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;