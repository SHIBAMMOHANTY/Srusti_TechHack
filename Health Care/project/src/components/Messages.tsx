import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: 'Dr. Archana Samal',
      lastMessage: 'Your test results look good...',
      time: '10:30 AM',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100',
      messages: [
        { text: 'Hello! How can I help you today?', sender: 'doctor', time: '10:30 AM' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Pradeep Kumar Mishra',
      lastMessage: 'Please schedule a follow-up...',
      time: 'Yesterday',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100',
      messages: []
    },
    {
      id: 3,
      name: 'Dr. Ramyaranjan Behera',
      lastMessage: 'How are you feeling today?',
      time: 'Yesterday',
      unread: 1,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100',
      messages: []
    }
  ];

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, sender: 'user', time: 'Now' };
      setSelectedConversation(prevState => ({ ...prevState, messages: [...prevState.messages, newMessage] }));
      setMessage('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        <div className="border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center space-x-4 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  selectedConversation.id === conversation.id ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <img src={conversation.image} alt={conversation.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold dark:text-white">{conversation.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{conversation.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={selectedConversation.image} alt={selectedConversation.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold dark:text-white">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedConversation.messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`bg-${msg.sender === 'user' ? 'blue-500 text-white' : 'gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} rounded-lg p-3 max-w-[70%]`}>
                  <p>{msg.text}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Paperclip size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
              />
              <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full" onClick={handleSendMessage}>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;