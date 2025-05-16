import NavBar from '../components/nav_bar/nav_bar';
import './style.css';

function HomePage() {
  
  return (
    <div className="home_page">
      <NavBar />
      <div className='home_page_data'>
        <h2>Welcome to my personal project!</h2>
        <p>The course finder tool allows one to select their high school subject likings and displays potential undergraduate courses that would be relevant.</p>
        <p>The tool is completely functional however, the front end currently was only built for functionality and testing purposes.</p>
        <p>Future iterations will see a much more sophesticated front end as well as better user experience</p>
        <p>Improvements in UX will be achieved by leveraging the strengths of the prefix tree and allowing user to click a 'show more' courses button which will display more courses (though they maybe of slightly lower relevance).</p>
      </div>
    </div>
  )
}

export default HomePage;