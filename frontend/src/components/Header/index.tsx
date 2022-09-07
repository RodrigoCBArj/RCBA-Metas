import logo from '../../assets/img/logo.svg';
import './styles.css'

export default function Header() {
    return (
        <header>
        <div className="logo-container">
            <img src={logo} alt="Logo RCBA Metas" />
            <h1>RCBA Metas</h1>
            <p>Desenvolvido por
                <a href="https://www.linkedin.com/in/rodrigocbarj/"> @rodrigocbarj</a>
            </p>
        </div>
    </header>
    );
  }