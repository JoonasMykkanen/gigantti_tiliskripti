/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/07 11:54:17 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/09 14:15:14 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Navigation from "./components/Navigation"
import Background from "./components/Background"
import Form from "./components/Form"

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden" style={{ fontFamily: "elkjop, sans-serif" }}>
      <Background/>
      <Navigation/>
      <Form />
    </div>
  )
}

export default App
