/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Background.jsx                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/07 15:23:05 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/09 13:45:36 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import image from '../assets/img/background.svg'

const Background = () => {
  return (
    <div style={{
      position: "fixed",
      height: screen.height,
      minWidth: screen.width,
      left: "0",
      top: "0",
      zIndex: "-1",
      
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    }}/>
  )
}

export default Background