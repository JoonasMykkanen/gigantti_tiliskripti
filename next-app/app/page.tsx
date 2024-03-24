'use client'

import Navigation from "./components/Navigation/Navigation";
import Background from "./components/Background/Background";
import Mcafee from './components/Mcafee/Mcafee';
import { useState } from "react";
import Fsecure from './components/Fsecure/Fsecure';

export default function Home() {
  const [pageContent, setPageContent] = useState('');

  /** Changes content based on navigation bar clicks */
  const renderContent = (): JSX.Element => {
    switch (pageContent) {
      case 'fsecure':
        return <Fsecure />
      case 'mcafee':
        return <Mcafee />
      default:
        return <></>
    }
  }

  return (
    <main className="w-screen h-screen overflow-hidden font-elkjop">
      <Background />
      <Navigation func={setPageContent}/>
      {renderContent()}
    </main>
  );
}
