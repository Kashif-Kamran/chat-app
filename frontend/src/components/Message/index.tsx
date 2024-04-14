import { Card, CardFooter } from "@/components/ui/card";

interface Props {
  readonly isMyMsg: boolean;
  readonly messageContent: string;
}
function Message({ isMyMsg, messageContent }: Props) {
  return (
    <div
      className={`flex justify-start ${
        isMyMsg ? "justify-end" : "justify-start"
      }`}
    >
      <Card className="border-2 border-background w-[50%] rounded-xl p-4 text-sm">
        {messageContent}
        <CardFooter className=" flex justify-end items-center p-0 px-2 pt-2 text-[0.65rem]">
          {"21 May 2018"}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Message;
