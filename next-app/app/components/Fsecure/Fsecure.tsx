'use client'

import InputField from '../InputField';
import { useState } from 'react';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import './Fsecure.css';
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


/** Handles sending form data to  */
const postFormData = async (data: any) => {
  console.log(data);
  try {
    const response = await axios.post('http://localhost:8080/register-fsec', data);
    console.log(response);
  }
  catch (error) {
    console.log(`Error: ${error}`);
  }
}


const Fsecure = () => {
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



  /** Simple regex pattern to check against email input */
  const validateEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }


  const isNumeric = (str: string): boolean => {
    return /^\d+$/.test(str);
  }


  /** Validates from data and raises any errors if some occur */
  const validateForm = (form: any): boolean => {
    let status = true;

    if (form.first_name === '') {
      setFirstNameError(true);
      status = false;
    } else setFirstNameError(false);

    if (form.last_name === '') {
      setSurNameError(true);
      status = false;
    } else setSurNameError(false);

    if (!validateEmail(form.email)) {
      setEmailError(true);
      status = false;
    } else setEmailError(false);

    if (!isNumeric(form.receipt)) {
      setTicketError(true);
      status = false;
    } else setTicketError(false);

    if (form.send_email === 'false' && form.send_print === 'false') {
      setDeliveryError(true);
      status = false;
    } else setDeliveryError(false);

    return status;
  }


  /** Handles validating form data and structuring it to the format backend is expecting it */
  const handleForm = (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    dontActivate ? formData.append('dont_activate', 'true') : formData.append('dont_activate', 'false');
    mailCheck ? formData.append('send_email', 'true') : formData.append('send_email', 'false');
    pdfCheck ? formData.append('send_print', 'true') : formData.append('send_print', 'false');
    const formJson = Object.fromEntries(formData.entries());
    
    if (!validateForm(formJson))
      return;
    
    postFormData(formJson);
    setIsSubmit(1);
  }

  return (
    <div className="h-full relative flex justify-center py-4">
      <form className="h-full mt-4" onSubmit={handleForm}>
        <Card className="w-[500px]">
          
          <CardHeader className="flex justify-center p-4">
            <img src={'/img/f-secure.svg'} width={250} alt="f-secure logo"/>
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
            <Button className="SubmitButton w-full" size="md" color="primary" type="submit">
              <h1 className="text-2xl">REIKISTERÖI</h1>
            </Button>
          </CardFooter>
          
        </Card>
      </form>
    </div>
  );
}

export default Fsecure;