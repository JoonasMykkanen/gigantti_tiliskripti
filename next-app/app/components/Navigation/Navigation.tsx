'use client'

import './Navigation.css';

import { Squash as Hamburger } from 'hamburger-react';
import { useEffect } from 'react';
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
  NavbarMenuToggle,
} from "@nextui-org/react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationBlocked, setAnimationBlocked] = useState(false);

  const handleClick = ( newStatus: boolean ) => {
    if (!animationBlocked) {
      setIsMenuOpen(newStatus);
      setAnimationBlocked(true);
      setTimeout(() => setAnimationBlocked(false), 500);
    }
  }
  
  return (
    <>
      <a className="logo-link" href="https://www.gigantti.fi/">
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
                  onMouseEnter={() => handleClick(true)}
                  className={`NavButton ${isMenuOpen ? 'gradient' : ''} pl-2 pr-4`}
                  variant="shadow"
                  color="primary"
                  startContent={<Hamburger toggled={isMenuOpen} size={24}/>}
                  size="lg"
                  href="/"
                >
                  <h1 className="text-xl">UUSI ASIAKAS</h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="current"
              itemClasses={{
                base: "gap-4",
                title: "text-lg font-elkjop text-black"
              }}
              onMouseLeave={() => handleClick(false)}
            >
            <DropdownItem key="f-secure" className="h-[50px]">
              F-Secure
            </DropdownItem>
            
            <DropdownItem key="mcafee" className="h-[50px]">
              McAfee
            </DropdownItem>

            <DropdownItem key="cloud" className="h-[50px]">
              Cloud
            </DropdownItem>

            <DropdownItem key="e-learning" className="h-[50px]">
              E-Learning
            </DropdownItem>
            
            </DropdownMenu>
          </Dropdown>     

          <NavbarItem>
            <Button
              startContent={<img
                              style={{ position: 'relative', right: '-6px', top: '-2px' }}
                              className="History h-[28px]"
                              src={'/img/history.svg'}
                            />}
              className="NavButton pl-2 pr-4"
              as={Link}
              color="primary"
              size="lg"
              variant="shadow"
              href="/history"
            >
              <h1 className="text-xl">HISTORIA</h1>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              startContent={<img
                style={{ position: 'relative', right: '-6px', top: '-2px' }}
                className="Upload h-[24px]"
                src={'/img/upload.svg'}
              />}
              className="NavButton pl-2 pr-4"
              as={Link} color="primary"
              size="lg"
              variant="shadow"
              href="/upload"
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