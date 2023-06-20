import Home from "./Component/Home/Home"
import {Route,BrowserRouter,Routes} from "react-router-dom";
import SingleSong from "./Component/SingleSong/SingleSong";
import SearchSongList from "./Component/SearchSongList/SearchSongList";
import NotFound from "./Component/RepeatedComponent/NotFound";
function App() {

  return (
   <div className="">

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search/:q" element={<SearchSongList/>}/>
    <Route path="/detail/:cover_xl/:title/:name/:duration/:preview/:link" element={<SingleSong/>}/>
    <Route path="*" element={<NotFound/>}/>


        <Route></Route>
 

    </Routes>
    
    </BrowserRouter>
   </div>
     
  )
}

export default App
