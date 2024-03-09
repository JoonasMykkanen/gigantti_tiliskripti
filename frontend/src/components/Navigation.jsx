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

import g_logo from "../assets/img/logo.png"
import "../css/Navigation.css"

import React from "react"
import {
  Navbar, 
  NavbarContent, 
  NavbarItem, 
  Link,
  Button,
  Image,
} from "@nextui-org/react"


const Navigation = () => {
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

          <NavbarItem>
            <Button className="NavButton" as={Link} color="secondary" size="lg" variant="shadow" href="/">
              <h1 className="text-xl">UUSI ASIAKAS</h1>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button className="NavButton" as={Link} color="secondary" size="lg" variant="shadow" href="/history">
              <h1 className="text-xl">HISTORIA</h1>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button className="NavButton" as={Link} color="secondary" size="lg" variant="shadow" href="/upload">
              <h1 className="text-xl">TUO AVAIMIA</h1>
            </Button>
          </NavbarItem>

        </NavbarContent>
      </Navbar>
    </>
  )
}

export default Navigation