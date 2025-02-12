import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import LottieAnimation from '../components/lottieanimation';
import Download from '../components/download';
import SearchIcon from '../images/search.svg';
import SearchForm from '../components/searchform';
import Seo from '../components/seo'
import Scrollup from '../components/scrollup'


const Explore = ({ data }) => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showMainTitle, setShowMainTitle] = useState(true);

    if (!data || !data.allMetadataJson) {
        return <div>Loading...</div>;
    }


    const icons = data.allMetadataJson.nodes;

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    const handleClosePopup = () => {
        setSelectedIcon(null);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setShowMainTitle(query === '');
    };

    const filteredIcons = icons.filter(icon =>
        icon.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main>
            <Header />
            <div className='py-4 md:pb-16 px-4 md:px-12'>
                <div className='mb-8'>
                    <SearchForm onSearch={handleSearch} />
                </div>
                {showMainTitle && (
                    <div className='mb-8' id='mainTitle'>
                        <h1 className='text-2xl font-bold text-center text-zinc-800'>Top Animated Icons</h1>
                        <span className='text-center text-zinc-800 block'>Discover the top animated icons here.</span>
                    </div>
                )}
                <div className="grid md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-4">
                {filteredIcons.map((icon) => (
                        <div
                            key={icon.id}
                            className=''
                            onClick={() => handleIconClick(icon)}
                        >
                            <LottieAnimation animationData={icon.lottie} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedIcon && <Download icon={selectedIcon} onClose={handleClosePopup} />}
            <Footer />
            <Scrollup />
        </main>
    );
};

export const query = graphql`
  query {
    allMetadataJson {
      nodes {
        id
        name
        keywords
        svg
        lottie
        png
        dotlottie
        aep
      }
    }
  }
`;

export default Explore;

export const Head = () => (
    <Seo 
      title="Explore" 
      description="Browse our full collection of animated icons. Download them for free in Lottie, JSON, SVG, PNG, and AEP formats." 
    />
  )
