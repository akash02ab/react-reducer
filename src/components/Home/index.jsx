import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import Content from '../Content/index';
import {CounterContextProvider} from '../../contexts/CounterStore';
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <CounterContextProvider>
                <Navbar />
                <div className="row flex-1">
                    <Sidebar>
                        <p>bar 1</p>
                        <p>bar 2</p>
                        <p>bar 3</p>
                        <p>bar 4</p>
                        <p>bar 5</p>
                    </Sidebar>
                    <Content />
                </div>
            </CounterContextProvider> 
        </div>
    );
}

export default Home;