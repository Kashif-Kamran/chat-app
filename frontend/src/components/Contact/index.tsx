import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
interface Props {
  readonly firstName: string;
  readonly lastName: string;
}

function Contact({ firstName = "Uknown", lastName = "Uknown" }: Props) {
  return (
    <Card className="border-2 p-2 flex gap-4  w-full">
      <Avatar className="">
        <AvatarFallback>{firstName[0] + lastName[0]}</AvatarFallback>
      </Avatar>
      <h1 className="w-[50%] flex justify-start items-center">
        {firstName + " " + lastName}
      </h1>
    </Card>
  );
}

export default Contact;
