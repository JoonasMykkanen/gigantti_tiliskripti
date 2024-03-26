'use client'

import InputField from '../InputField';
import { useState } from 'react';
import React from 'react';
import './Mcafee.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  CheckboxGroup,
  Checkbox,
  Progress
} from "@nextui-org/react";



const Mcafee = () => {
   // Application level states
   const [errorMsg, setErrorMsg] = useState('');
   const [progress, setProgress] = useState(0);
   const [isSubmit, setIsSubmit] = useState(0);
   
   // Form states => used to modify form to be sent
   const [dontActivate, setDontActivate] = useState(false);
   const [mailCheck, setMailCheck] = useState(false);
   const [pdfCheck, setPdfCheck] = useState(false);
 
   // Error states => provides NextUI components error state
   const [firstNameError, setFirstNameError] = useState(false);
   const [deliveryError, setDeliveryError] = useState(false);
   const [surNameError, setSurNameError] = useState(false);
   const [ticketError, setTicketError] = useState(false);
   const [emailError, setEmailError] = useState(false);

  return (
    <div className="h-full relative flex justify-center py-4">
      <form className="h-full mt-4" >
        <Card className="w-[500px]" isDisabled>
          
          <CardHeader className="flex justify-center p-4">
            <img src={'/img/mcafee.svg'} width={250} alt="mcafee logo"/>
          </CardHeader>
          
          <Divider/>

          <CardBody className="gap-1">
            <div className="w-full flex justify-between">
              <InputField name="first_name" label="ETUNIMI" type="text" error={firstNameError} customClass="w-1/2 pr-2"/>
              <InputField name="last_name" label="SUKUNIMI" type="text" error={surNameError} customClass="w-1/2 pl-2"/>
            </div>
            <InputField name="email" label="SÄHKÖPOSTI" type="text" error={emailError} />
            <InputField name="receipt" label="KUITTI NUMERO" type="text" error={ticketError} />
            
            <div className="inputBox border-2 py-1 px-2 mt-6 flex flex-row justify-between">
              <div className="">
                <h1 className="text-xl text-gray-500">Miten tiedot toimitetaan?</h1>
                <CheckboxGroup color="secondary" isInvalid={deliveryError}>
                  <Divider className="w-[170px]"/>
                  <Checkbox
                    onChange={() => setMailCheck(!mailCheck)}
                    classNames={{label: "text-gray-500"}}
                    checked={mailCheck}
                    value="mail"
                    size="lg"
                  >
                    SÄHKÖPOSTIIN
                  </Checkbox>
                  <Checkbox
                    onChange={() => setPdfCheck(!pdfCheck)}
                    classNames={{label: "text-gray-500"}}
                    checked={pdfCheck}
                    value="pdf"
                    size="lg"
                  >
                    PAPERILLE
                  </Checkbox>
                </CheckboxGroup>
              </div>
              <div>
                <h1 className="text-xl text-gray-500">Suorita ilman aktivointia?</h1>
                <Divider className="w-[170px] mb-2"/>
                <Checkbox
                  onChange={() => setDontActivate(!dontActivate)}
                  classNames={{label: "text-gray-500"}}
                  color="secondary"
                  value="activation"
                  size="lg"
                >
                  KYLLÄ
                </Checkbox>
              </div>
            </div>

            <div className="py-1 px-1 mt-2 mb-0">
              <Progress
                className={`progressBar opacity-${1}`}
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
            {/* <Button className="SubmitButton w-full" size="md" color="primary" type="submit">
              <h1 className="text-2xl">REIKISTERÖI</h1>
            </Button> */}
            <h1 className='text-xl'>OMINAISUUS TULOSSA PIAN</h1>
          </CardFooter>
          
        </Card>
      </form>
    </div>
  );
}

export default Mcafee;