/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavigationDiv.jsx                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/07 13:31:28 by jmykkane          #+#    #+#             */  
/*   Updated: 2024/03/07 14:23:53 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import history_icon from "../assets/img/history.svg"
import upload_icon from "../assets/img/upload.svg"
import g_logo from "../assets/img/logo.png"
import "../css/Navigation.css"

import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react"
import React from "react"
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
} from "@nextui-org/react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Image
        className="fixed"
        alt="Gigantti logo"
        width={150}
        src={g_logo}
      />

      <Navbar isBordered={false} isBlurred={false} height="5rem" className="bg-transparent">
        <NavbarContent className="gap-4 h-full w-full" justify="center">
          <Dropdown isOpen={isOpen}>
            
            <NavbarItem>
              <DropdownTrigger 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Button
                  className={`NavButton ${isOpen ? 'gradient' : ''} pl-2 pr-4`}
                  variant="shadow"
                  color="primary"
                  startContent={<Hamburger toggled={isOpen} size={24}/>}
                  size="lg"
                  href="/"
                >
                  <h1 className="text-xl">UUSI ASIAKAS</h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="current"
              className="w-[300px]"
              itemClasses={{
                base: "gap-4",
                title: "text-lg font-elkjop"
              }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
            <DropdownItem key="f-secure" className="h-[50px]">
              F-Secure
            </DropdownItem>
            
            <DropdownItem key="mcafee" className="h-[50px]">
              McAfee
            </DropdownItem>
            
            </DropdownMenu>
          </Dropdown>



          <NavbarItem>
            <Button
              startContent={<img
                              style={{ position: 'relative', right: '-6px', top: '-2px' }}
                              className="History h-[28px]"
                              src={history_icon}
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
                src={upload_icon}
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
  )
}

export default Navigation