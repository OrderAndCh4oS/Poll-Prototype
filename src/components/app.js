import React from 'react';
import Header from './header';
import AddPoll from './add-poll';
import VisiblePollList from './poll-list';
import Footer from './footer';

const App = () =>
    <div className={'app-wrapper'}>
        <Header/>
        <AddPoll/>
        <VisiblePollList/>
        <Footer/>
    </div>
;

export default App;