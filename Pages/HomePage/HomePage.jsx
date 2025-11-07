import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import TopRatedCard from '../TopRatedCard/TopRatedCard';
import TipsCare from '../TipsCare/TipsCare';
import ExpertPerson from '../Expert/ExpertPerson';
import Community from '../Community/Community';

const HomePage = () => {
    return (
        <div>

          <HeroBanner></HeroBanner>
            <TopRatedCard></TopRatedCard>
            <TipsCare></TipsCare>
            <ExpertPerson></ExpertPerson>
            <Community></Community>
        </div>
    );
};

export default HomePage;