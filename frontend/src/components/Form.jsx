/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/09 13:13:37 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/09 22:53:37 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import f_logo from "../assets/img/f-secure.svg"
import "../css/Form.css"

import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react"


const FormInput = ({ type }) => {
  return (
    <div className="" >
      <label className="fixed" htmlFor="">test</label>
      <input style={{ fontFamily: "sans-serif" }} className="w-full h-10 border-2 rounded-xl border-blue-800 bg-blue-100" type={type} >
      </input>
    </div>
  )
}

const Form = () => {
  // const payload = {}

  return (
    <div className="relative flex justify-center py-4">
      <form>
        <Card className="w-[450px]">
          <CardHeader className="flex justify-center p-4">
            <img
              src={f_logo}
              width={250}
              alt="f-secure logo"
            />
          </CardHeader>

          <Divider/>

          <CardBody className="gap-4 p-4">
            <FormInput type="email"/>
          </CardBody>

          <Divider/>

          <CardFooter className="justify-center p-4">
            <Button className="SubmitButton w-full" size="xl" color="secondary">
              <h1 className="text-xl">REIKISTERÖI</h1>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Form