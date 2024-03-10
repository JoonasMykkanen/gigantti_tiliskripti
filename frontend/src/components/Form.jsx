/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/09 13:13:37 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/10 15:20:57 by jmykkane         ###   ########.fr       */
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

const customLabel = {
  label: 'group-data-[filled-within=true]:-translate-y-[calc(160%)] \
          group-data-[filled-within=true]:-left-[2px] \
          text-lg'
}

const Form = () => {
  // const payload = {}

  return (
    <div className="h-full relative flex justify-center py-4">
      <form className="h-full mt-4">
        <Card className="w-[500px] h-3/4">
          <CardHeader className="flex justify-center p-4">
            <img
              src={f_logo}
              width={250}
              alt="f-secure logo"
            />
          </CardHeader>
          <Divider/>
          <CardBody>
            <div className="w-full flex justify-between">
              <Input
                style={{ fontFamily: "sans-serif", fontSize: '20px' }}
                classNames={customLabel}
                labelPlacement="outside"
                className="w-1/2 pr-2"
                variant="bordered"
                label="ETUNIMI"
                type="text"
              />
              <Input
                style={{ fontFamily: "sans-serif", fontSize: '20px' }}
                classNames={customLabel}
                labelPlacement="outside"
                className="w-1/2 pl-2"
                variant="bordered"
                label="SUKUNIMI"
                type="text"
              />
            </div>
            <Input
              style={{ fontFamily: "sans-serif", fontSize: '20px' }}
              classNames={customLabel}
              labelPlacement="outside"
              variant="bordered"
              label="EMAIL"
              type="email"
            />
            <Input
              style={{ fontFamily: "sans-serif", fontSize: '20px' }}
              classNames={customLabel}
              labelPlacement="outside"
              variant="bordered"
              label="KUITTI NRO"
              type="text"
            />
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