import React from "react";
import './App.css';
import { Form, Field } from "@leveluptuts/fresh";

const securityQuestions = [
  "Permissive",
  "LGPL"
];

const onSubmit = (data) => console.log(data);

function UserProfileForm() {
  return (
    <Form formId="user-profile" onSubmit={onSubmit}>
      <br/>
      <h1>License Generation And Validation</h1>
      <br/>
      
      <Field required>User Name</Field>
    
      <Field required>Last Name</Field>
     
     

      <Field required type="select" options={securityQuestions}>
        License type
      </Field>
      <br/>
     
     
      <Field required>Start Date</Field>
      
      <Field required>End Date</Field>
      <Field required>Product</Field>
      <br/>
      <Field type="textarea">Product Features</Field>
      <br/>
      <br/>
      
    </Form>
  );
}

export default function App() {
  return (
    <div className="App">
      <UserProfileForm />
    </div>
  );
}
