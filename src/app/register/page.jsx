"use client";
import { authClient } from "@/lib/auth.client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

import 'animate.css';

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("/");
    }
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4 bg-gray-50/50 overflow-hidden"> 
      
     
      <Card className="animate__animated animate__zoomIn border w-full max-w-md py-8 px-6 sm:px-10 shadow-lg bg-white">
        
        
        <h1 className="animate__animated animate__fadeInDown animate__delay-1s text-center text-2xl font-bold mb-6 text-gray-800">
          Register
        </h1>

        <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Password must contain uppercase";
              if (!/[0-9]/.test(value)) return "Password must contain a number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-xs mt-1">
              At least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button className="flex-1 bg-blue-600 text-white font-semibold hover:scale-105 transition-transform" type="submit">
              <Check className="mr-1" />
              Submit
            </Button>
            <Button type="reset" variant="secondary" className="w-full sm:w-24 border">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          <div className="flex items-center w-full gap-2 text-gray-400">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs font-medium">OR</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          
          <Button
            onPress={handleGoogleRegister}
            variant="ghost"
            className="animate__animated animate__fadeInUp animate__delay-1s w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 transition-all font-medium py-5"
          >
            <GrGoogle className="text-xl text-red-500" />
            Register with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}