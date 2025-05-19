import React from 'react';
import Layout from './Components/Layout';
import Personal from './Components/Personal';
import Business from './Components/Business';
import Partner from './Components/Partner';
import AboutUs from './Components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Personal />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/partner" element={<Partner />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
