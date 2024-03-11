/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/09 13:13:37 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/10 23:54:35 by jmykkane         ###   ########.fr       */
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
  Button,
} from "@nextui-org/react"

const customLabel = {
  label: 'group-data-[filled-within=true]:-translate-y-[calc(165%)] \
          group-data-[filled-within=true]:-left-[2px] \
          group-data-[filled-within=true]:text-base\
          text-xl'
}

const InputField = ({ label, type, customClass }) => {
  return (
    <>
      <Input
        style={{ fontFamily: "sans-serif", fontSize: '18px' }}
        classNames={customLabel}
        className={customClass}
        labelPlacement="outside"
        variant="bordered"
        label={label}
        type={type}
      />
    </>
  )
}

const Form = () => {
  return (
    <div className="h-full relative flex justify-center py-4">
      <form className="h-full mt-4">
        <Card className="w-[500px] h-3/4">
          
          <CardHeader className="flex justify-center p-4">
            <img src={f_logo} width={250} alt="f-secure logo"/>
          </CardHeader>
          
          <Divider/>

          <CardBody className="gap-2">
            <div className="w-full flex justify-between">
              <InputField label="ETUNIMI" type="text" customClass="w-1/2 pr-2"/>
              <InputField label="SUKUNIMI" type="text" customClass="w-1/2 pl-2"/>
            </div>
            <InputField label="SÄHKÖPOSTI" type="email" />
            <InputField label="KUITTI NUMERO" type="text" />
          </CardBody>

          <Divider/>

          <CardFooter className="justify-center p-4">
            <Button className="SubmitButton w-full" size="xl" color="primary">
              <h1 className="text-2xl">REIKISTERÖI</h1>
            </Button>
          </CardFooter>
          
        </Card>
      </form>
    </div>
  )
}

export default Form