import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface User {
  name: string;
  role: string;
}

export default function Home() {
  const fullUser: User = { name: "mike", role: "admin" };
  return (
    <div className="container mx-auto px-4">
      {fullUser == null ? (
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      ) : (
        <Card className="max-w-[500px] mt-4">
          <CardHeader>
            <CardTitle>User Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Username:</div>
            <div>Role</div>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/private-page">Private Page</Link>
            </Button>
            {fullUser.role == "admin" && (
              <Button asChild variant="outline">
                <Link href="/private-page">Private Page</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
