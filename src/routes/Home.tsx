import Nav from '../components/Nav';
import Gradient from '../components/Gradient';
import { useState, useEffect } from 'react';

function Home() {
    const [scrollDown, setScrollDown] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(window.scrollY)

    const checkScroll = () => {
        const curScrollY = window.scrollY;
        if(curScrollY > prevScrollY) {
            setScrollDown(-75);
        }
        else {
            setScrollDown(scrollDown + (prevScrollY - curScrollY));
        }
        setPrevScrollY(curScrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, [prevScrollY])

    return(
        <>
            <Nav scrollDown={scrollDown}/>
            <div style={{height: '2000px', display: 'flex', flexDirection: 'column'}}>
                <Gradient/>
                <Gradient/>
                <Gradient/>
            </div>
        </>
    );
}

export default Home;