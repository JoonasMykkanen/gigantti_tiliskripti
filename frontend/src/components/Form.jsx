/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/03/09 13:13:37 by jmykkane          #+#    #+#             */
/*   Updated: 2024/03/13 08:32:44 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import f_logo from "../assets/img/f-secure.svg"
import "../css/Form.css"

import React from "react"
import { useState } from "react"
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  CheckboxGroup,
  Checkbox,
  Skeleton,
  Progress
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
        isClearable
      />
    </>
  )
}

const Form = () => {
  const [progress, setProgress] = useState(0)
  const [isSubmit, setIsSubmit] = useState(0)

  return (
    <div className="h-full relative flex justify-center py-4">
      <form className="h-full mt-4" onSubmit={() => setIsSubmit(1)}>
        <Card className="w-[500px]">
          
          <CardHeader className="flex justify-center p-4">
            <img src={f_logo} width={250} alt="f-secure logo"/>
          </CardHeader>
          
          <Divider/>

          <CardBody className="gap-1">
            <div className="w-full flex justify-between">
              <InputField label="ETUNIMI" type="text" customClass="w-1/2 pr-2"/>
              <InputField label="SUKUNIMI" type="text" customClass="w-1/2 pl-2"/>
            </div>
            <InputField label="SÄHKÖPOSTI" type="email" />
            <InputField label="KUITTI NUMERO" type="text" />
            
            <div className="inputBox border-2 py-1 px-2 mt-6">
              <h1 className="text-xl text-gray-500">Miten tiedot toimitetaan?</h1>
              <CheckboxGroup color="secondary" >
                <Divider className="w-[170px]"/>
                <Checkbox value="mail" size="lg" classNames={{label: "text-gray-500"}}>SÄHKÖPOSTIIN</Checkbox>
                <Checkbox value="pdf" size="lg" classNames={{label: "text-gray-500"}}>PAPERILLE</Checkbox>
              </CheckboxGroup>
            </div>

            <div className="py-1 px-1 mt-6 mb-0">
              <Progress
                className={`progressBar opacity-${isSubmit}`}
                aria-label="Loading..."
                color="secondary"
                value={progress}
                size="lg"
                classNames={{
                  indicator: "bg-gradient-to-r from-[#006E47] to-[#97C21E]"
                }}
              />
            </div>
            
          </CardBody>

          <Divider/>

          <CardFooter className="justify-center p-4">
            <Button className="SubmitButton w-full" size="xl" color="primary" type="submit">
              <h1 className="text-2xl">REIKISTERÖI</h1>
            </Button>
          </CardFooter>
          
        </Card>
      </form>
    </div>
  )
}

export default Form