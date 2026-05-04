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

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/'
    });

    if (!error) {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/'
    });
  };

  return (
    
    <div className="flex justify-center items-center min-h-[80vh] p-4">
      <Card className="border w-full max-w-112px py-10 px-6 sm:px-10">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

        <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
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
              if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Min 8 characters, 1 uppercase, 1 number
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
            onPress={handleGoogleSignIn}
            variant="ghost"
            className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100"
          >
            <GrGoogle className="text-xl" />
            Sign In with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}