import './style.css'

function NavBar() {
  return (
    <nav className="nav_bar">
      <a href="/" className="site_title">Undergrad Course Finder</a>
      <ul>
        <li><a href="/fetch_courses/">Course Finder Tool</a></li>
        <li><a href="/contact/">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;