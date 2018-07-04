import React from 'react';
import Header from './header';
import AddPoll from './add-poll';
import VisiblePollList from './poll-list';
import Footer from './footer';
import CategoryLinks from './category-links';

const App = () =>
    <div className={'app-wrapper'}>
        <Header/>
        <AddPoll/>
        <CategoryLinks/>
        <VisiblePollList/>
        <Footer/>
    </div>
;

export default App;