import Navbar from './components/Navbar';
import Map from './components/Map';
import Comren from './components/Comren';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'COMREN';
    });

    return (
        <div>
            <Navbar />
            <Map />
            <Comren />
        </div>
    );
}
