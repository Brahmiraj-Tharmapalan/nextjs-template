"use client";
import Authform from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'
import React from 'react'

const page = () => (
  <Authform
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{ fullName: "", email: "", password: "" }}
    onSubmit={() => {}}
    />
)

export default page