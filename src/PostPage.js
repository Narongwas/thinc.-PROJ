import logo from "./home.png"
import icon from "./icon.png"
import './PostPage.css'


function Post(){
    function onClick(){
        window.location.href = "index.html";
    }
    return <div>
        <header className="App-header">
            <div className="left-Header">
                  <a className="path" id="Home"><b>Name</b></a>
                  <a className="path" onClick={onClick}><img src={logo} alt="toMainMenu"></img></a>
                  <a className="path">เกี่ยวกับเรา</a>
              </div>
            <div className="Right-header">
                  <img src={icon} alt="profile"></img><br />
            </div>
            </header>
            <Box />
    </div>
}

function Box(){
    return(
        <div>
            <div className="box">
                <br></br>
                <p className="display-name">Your display name</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <input type="text" class="name-input" placeholder="alias" aria-label="Username" />
                </div>
                <p className="thought">Your Thought</p>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <textarea type="text" class="thought-input" placeholder="Thought" aria-label="Username" />
                </div>
            </div>
            <br></br>
            <button class="btn">Post</button>
        </div>
    );
}

export default Post;