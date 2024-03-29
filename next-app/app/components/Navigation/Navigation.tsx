'use client'

import Hamburger from './Hamburger';
import './Navigation.css';


import { useState } from "react";
import React from "react";
import {
  Navbar, 
  NavbarContent, 
  NavbarItem, 
  Link,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

type functionProp = {
  setState: (setState: string) => void;
};

const Navigation: React.FC<functionProp> = ({ setState }) => {
  const [animationBlocked, setAnimationBlocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = ( newStatus: boolean ) => {
    if (!animationBlocked) {
      setIsMenuOpen(newStatus);
      setAnimationBlocked(true);
      setTimeout(() => setAnimationBlocked(false), 500);
    }
  }
  
  return (
    <>
      <a className="logo-link" href="/">
        <Image
          className="fixed"
          alt="Gigantti logo"
          width={150}
          src={'/img/g_logo.png'}
        />
      </a>
    
      <Navbar isBordered={false} isBlurred={false} height="5rem" className="bg-transparent">
        <NavbarContent className="gap-4 h-full w-full" justify="center">
          <Dropdown isOpen={isMenuOpen}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  onClick={() => handleClick(!isMenuOpen)}
                  className={`NavButton ${isMenuOpen ? 'gradient' : ''} pl-2 pr-4 mt-2`}
                  variant="shadow"
                  color="primary"
                  startContent={<Hamburger status={isMenuOpen}/>}
                  size="lg"
                  href="/"
                >
                  <h1 className="text-xl">UUSI ASIAKAS</h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
              <DropdownMenu
                onMouseLeave={() => handleClick(false) }
                onAction={(key) => {
                  setState(key.toString());
                  handleClick(false);
                }}
                aria-label="current"
                itemClasses={{
                  base: "gap-4",
                  title: "text-2xl font-elkjop text-black"
                }}
              >
                <DropdownItem key="fsecure" className="h-[50px]">
                  F-Secure
                </DropdownItem>
              
                <DropdownItem key="mcafee" className="h-[50px]">
                  McAfee
                </DropdownItem>
              </DropdownMenu>
          </Dropdown>     

          <NavbarItem>
            <Button
              onClick={ () => setState('history') }
              startContent={<img
                              style={{ position: 'relative', right: '-6px', top: '-2px' }}
                              className="History h-[28px]"
                              src={'/img/history.svg'}
                            />}
              className="NavButton pl-2 pr-4"
              variant="shadow"
              color="primary"
              size="lg"
            >
              <h1 className="text-xl">HISTORIA</h1>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              onClick={() => setState('upload')}
              startContent={<img
                style={{ position: 'relative', right: '-6px', top: '-2px' }}
                className="Upload h-[24px]"
                src={'/img/upload.svg'}
              />}
              className="NavButton pl-2 pr-4"
              variant="shadow"
              color="primary"
              size="lg"
            >
              <h1 className="text-xl">TUO AVAIMIA</h1>
            </Button>
          </NavbarItem>

        </NavbarContent>
      </Navbar>
    </>
  );
}

export default Navigation;