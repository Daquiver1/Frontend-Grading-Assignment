import USER from './scripts/data';
import './App.css';

function App() {
  return (
    <>
      <section>
        <h1>{USER.name}</h1>
        <p>{USER.name} has {USER.profileVisits} profile visits</p>
        <p>{USER.age}</p>
        <a href={USER.social} target='_blank' rel="norefferer">Twitter</a>
        <p>{USER.lastSeen.place}</p>
        <p>{USER.lastSeen.venue}</p>
      </section>
    </>
  );
}

export default App;
