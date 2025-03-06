import SignInForm from "@/auth/nextjs/sign-in-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SignInPage = () => {
  return (
    <div className="container mx-auto p-4 max-w-[750px]">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
