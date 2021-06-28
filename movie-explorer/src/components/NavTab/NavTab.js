import './NavTab.css'; 


function NavTab() {
    return(
      <section className="nav-tab">
        <li className="nav-tab__link-list">
          <a className="nav-tab__link">О проекте</a>
          <a className="nav-tab__link">Технологии</a>
          <a className="nav-tab__link">Студент</a>
        </li>
      </section>
    );
  }
  
  export default NavTab;