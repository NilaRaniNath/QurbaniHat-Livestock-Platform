"use client";
import { authClient } from "@/lib/auth.client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import Link from "next/link";
import 'animate.css';

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

    if (error) {
      
      toast.error(error.message || "Invalid email or password!");
    } else {
     
      toast.success("Login Successful! Redirecting... 🐮");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/'
      });
      toast.info("Signing in with Google...");
    } catch (err) {
      toast.error("Google Sign-In failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4 bg-gray-50/30">
      <Card className="animate__animated animate__fadeIn border w-full max-w-md py-8 px-6 sm:px-10 shadow-lg bg-white">
        <h1 className="animate__animated animate__fadeInDown text-center text-2xl font-bold mb-6 text-gray-800">
          Sign In
        </h1>

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
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button className="flex-1 bg-blue-600 text-white font-semibold hover:scale-105 transition-transform" type="submit">
              <Check className="mr-1" />
              Sign In
            </Button>
            <Button type="reset" variant="secondary" className="w-full sm:w-24 border">
              Reset
            </Button>
          </div>
        </Form>

      
        <p className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?{" "}
          <Link href="/register" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          <div className="flex items-center w-full gap-2 text-gray-400">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs font-medium">OR</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <Button
            onPress={handleGoogleSignIn}
            variant="ghost"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 transition-all font-medium py-5"
          >
            <GrGoogle className="text-xl text-red-500" />
            Sign In with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}