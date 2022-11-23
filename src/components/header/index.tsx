import * as C from "./styled";
export function Header({ black }: any) {
  return (
    <C.Container>
      <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img
              src="https://imgs.search.brave.com/Dbbjf0dZeKoOAk8XQf94C2b0LCrcx9GLoXPVOLJ7EYA/rs:fit:320:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/aHd4Y1dxeFI5eWt2/TENSWnNHSkdBQUFB/QSZwaWQ9QXBp"
              alt="usuario"
            />
          </a>
        </div>
      </header>
    </C.Container>
  );
}
