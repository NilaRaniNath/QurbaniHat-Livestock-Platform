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
    
    <div className="flex justify-center items-center min-h-screen p-4"> 
      <Card className="border w-full max-w-125px py-10 px-6 sm:px-10">
        <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

       
        <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" />
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
            <Input placeholder="john@example.com" />
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
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <Button className="flex-1" type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary" className="sm:w-24">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex flex-col items-center gap-4 mt-6 w-full">
          <div className="flex items-center w-full gap-2 text-gray-400">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <Button
            onPress={handleGoogleRegister}
            variant="ghost"
            className="w-full flex items-center gap-2 border border-gray-700 hover:bg-gray-100"
          >
            <GrGoogle className="text-xl" />
            Register with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}