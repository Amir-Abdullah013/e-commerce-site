"use client";

import React, { useState, useEffect } from "react";
import SubTopBar from "@/app/components/UserComponents/SubTopBar";
import Image from "next/image";

const contactsData = [
  {
    id: 1,
    name: "Theresa Webb",
    lastMessage: "You: Works for me",
    time: "Today, 8:20 am",
    avatar: "/images/Chats-ProfileIcon1.png",
    messages: [
      { from: "them", name: "Theresa Webb", avatar: "/images/Chats-ProfileIcon1.png", text: "Hey! Are you available for a quick chat?", time: "8:10 am", read: true },
      { from: "me", name: "You", avatar: "/images/image6.png", text: "Sure, what's up?", time: "8:12 am", read: true },
      { from: "them", name: "Theresa Webb", avatar: "/images/Chats-ProfileIcon1.png", text: "I wanted to confirm the details for tomorrow.", time: "8:15 am", read: false },
    ],
  },
  {
    id: 2,
    name: "Cody Fisher",
    lastMessage: "Thanks! See you soon.",
    time: "Yesterday",
    avatar: "/images/Chats-ProfileIcon2.png",
    messages: [
      { from: "them", name: "Cody Fisher", avatar: "/images/Chats-ProfileIcon2.png", text: "I'll be there at 10 AM.", time: "9:30 am", read: true },
      { from: "me", name: "You", avatar: "/images/image6.png", text: "Great, see you then!", time: "9:32 am", read: true },
    ],
  },
];

const Chats = () => {
  const [selectedContact, setSelectedContact] = useState(contactsData[0]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let typingTimeout;
    if (newMessage.trim()) {
      setIsTyping(true);
      typingTimeout = setTimeout(() => setIsTyping(false), 1500);
    } else {
      setIsTyping(false);
    }
    return () => clearTimeout(typingTimeout);
  }, [newMessage]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const updatedMessages = [
      ...selectedContact.messages,
      {
        from: "me",
        name: "You",
        avatar: "/images/image6.png",
        text: newMessage,
        time: currentTime,
        read: false,
      },
    ];
    setSelectedContact({ ...selectedContact, messages: updatedMessages });
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Filter contacts based on search term
  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full w-full flex flex-col gap-5 items-center">
      <SubTopBar title="Chats" />

      <div className="w-full flex flex-col md:flex-row gap-5 h-[80vh] px-4">
        
        {/* Contacts Panel */}
        <div className="md:w-1/3 w-full bg-[#F9F9F9] rounded-2xl p-4 overflow-y-auto shadow-sm min-h-0">
          <p className="text-lg font-semibold mb-4">Conversations</p>

          <input
            placeholder="Search..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-gray-200 text-sm text-[#858699] w-full h-10 px-4 rounded-full focus:outline-none mb-4"
          />

          <div className="flex flex-col gap-2">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition ${
                    selectedContact.id === contact.id
                      ? "bg-[#25A5B4] text-white shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={contact.avatar}
                      alt={contact.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p
                        className={`text-xs truncate ${
                          selectedContact.id === contact.id
                            ? "text-white"
                            : "text-[#595C75]"
                        }`}
                      >
                        {contact.lastMessage}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-xs ${
                      selectedContact.id === contact.id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {contact.time}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">No contacts found</p>
            )}
          </div>
        </div>

        {/* Chat Box */}
        <div className="md:w-2/3 w-full bg-[#F9F9F9] rounded-2xl flex flex-col shadow-sm min-h-0">
          
          {/* Chat Header */}
          <div className="flex border-b border-gray-200 justify-between items-center px-2">
            <div className="p-4 flex items-center gap-3">
              <Image
                src={selectedContact.avatar}
                alt={selectedContact.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{selectedContact.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">
                    {isTyping ? "Typing..." : "Available now"}
                  </span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
              </div>
            </div>
            <Image
              src="/images/3dotsicon.png"
              alt="3dotsicon"
              width={20}
              height={40}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
            {selectedContact.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  msg.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from !== "me" && (
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    width={32}
                    height={32}
                    className="rounded-full self-start"
                  />
                )}
                <div className="max-w-xs">
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      msg.from === "me"
                        ? "bg-[#25A5B4] text-white"
                        : "bg-[#DCE2FF] text-black"
                    }`}
                  >
                    <p className="text-xs font-semibold">{msg.name}</p>
                    <p>{msg.text}</p>
                  </div>
                  <p
                    className={`text-[10px] text-gray-400 mt-1 ${
                      msg.from === "me" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.time} {msg.from === "me" && msg.read && "✓"}
                  </p>
                </div>
                {msg.from === "me" && (
                  <Image
                    src={msg.avatar}
                    alt={msg.name}
                    width={32}
                    height={32}
                    className="rounded-full self-start"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white flex items-center gap-4">
            <Image
              src="/Images/Chats-Recordingicon.png"
              alt="Icon"
              width={15}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/Images/Chats-MediaFilesicon.png"
              alt="Media Icon"
              width={13}
              height={32}
              className="cursor-pointer"
            />
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <Image
              src="/Images/Chats-MsgSendIcon.png"
              alt="Send Icon"
              width={23}
              height={32}
              className="cursor-pointer"
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
