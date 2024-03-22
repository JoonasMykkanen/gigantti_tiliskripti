/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Background.jsx                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/07 15:23:05 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/22 06:35:41 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Background = () => {
  return (
    <div style={{
      position: "fixed",
      height: screen.height,
      minWidth: screen.width,
      left: "0",
      top: "0",
      zIndex: "-1",
      
      backgroundImage: `url(/img/background.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    }}/>
  )
}

export default Background