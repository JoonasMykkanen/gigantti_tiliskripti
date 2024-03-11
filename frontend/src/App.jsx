/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/07 11:54:17 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/10 23:54:26 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Navigation from "./components/Navigation"
import Background from "./components/Background"
import Form from "./components/Form"

// TODO: Logic to not have forms at start but after a selection from menu
function App() {
  return (
    <div className="w-screen h-screen overflow-hidden font-elkjop">
      <Background/>
      <Navigation/>
      <Form />
    </div>
  )
}

export default App
