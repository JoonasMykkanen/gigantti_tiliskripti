'use client'

import Navigation from './components/Navigation/Navigation';
import Fsecure from './components/Fsecure/Fsecure';
import Background from './components/Background';
import Mcafee from './components/Mcafee/Mcafee';
import History from './components/History';
import Upload from './components/Upload';
import { useState } from "react";


export default function Home() {
  const [pageContent, setPageContent] = useState('');

  /** Changes content based on navigation bar clicks */
  const renderContent = (): JSX.Element => {
    switch (pageContent) {
      
      case 'fsecure':
        return <Fsecure />;

      case 'mcafee':
        return <Mcafee />;

      case 'upload':
        return <Upload />;
      
      case 'history':
        return <History />;

      default:
        return <></>;
    }
  }

  return (
    <main className="w-screen h-screen overflow-hidden font-elkjop">
      <Background />
      <Navigation setState={setPageContent}/>
      {renderContent()}
    </main>
  );
}
