import Message from "@/components/Message";
function Chatbox() {
  return (
    <div className="border-2 flex flex-col gap-2 overflow-auto p-2 rounded-lg mb-2">
      <Message
        isMyMsg={false}
        messageContent="Assalam o Alaikum Kashif, how are you?"
      />
      <Message
        isMyMsg={true}
        messageContent="Walikum Assalam, Saad bhai, alhamdulilah how are you?"
      />
      <Message
        isMyMsg={false}
        messageContent="I also am fine. I was thinking to visit F9 park. Can you join me today at 4 pm?"
      />
      <Message
        isMyMsg={true}
        messageContent="Yeah sure, I am available. See you there inshallah. I am visiting Blue Area at 3 after that I will try my best to be on time. Please notify me when you reach"
      />
      <Message
        isMyMsg={false}
        messageContent="Okay, I will be there see you there inshallah. "
      />
      <Message isMyMsg={true} messageContent="See you there inshallah" />
    </div>
  );
}

export default Chatbox;
