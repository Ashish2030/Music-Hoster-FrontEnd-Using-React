
import CodeLink from './CodeLink';
import Team from './Team';
import Scrolltop from './ScrollTop/Scrolltop'

function Home(props){
 
    return(
        <div>
            <Scrolltop showBelow={250} />
            <CodeLink/>
            <Team/>
        </div>
    );
}

export default Home;