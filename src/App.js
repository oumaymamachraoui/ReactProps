import "./App.css";
import Profile from "./profile/Profile";
import image from "./profile/imageChild.jpg"

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Oumayma Machraoui"
        profession="specialiste reseaux aussi je suis fullstack developper"
        bio="j'ai 25 ans "
      />
      <img src={image} alt="" style={{ width:"500px", height:"400px", borderRadius:"50%" ,marginTop:"50px" }} />
    </div>
  );
}

export default App;
