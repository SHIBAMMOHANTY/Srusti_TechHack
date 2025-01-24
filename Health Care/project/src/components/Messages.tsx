import React from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      lastMessage: 'Your test results look good...',
      time: '10:30 AM',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      lastMessage: 'Please schedule a follow-up...',
      time: 'Yesterday',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      lastMessage: 'How are you feeling today?',
      time: 'Yesterday',
      unread: 1,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Conversations List */}
        <div className="border-r border-gray-200 dark:border-gray-700">
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
          
          <div className="overflow-y-auto h-[calc(100vh-12rem)]">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={conversation.image}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold truncate dark:text-white">
                        {conversation.name}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-span-2 flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={conversations[0].image}
                alt={conversations[0].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold dark:text-white">{conversations[0].name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Phone size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Video size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <MoreVertical size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[70%]">
                <p className="text-gray-800 dark:text-gray-200">
                  Hello! How can I help you today?
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
                <p>
                  Hi Dr. Johnson, I wanted to discuss my recent test results.
                </p>
                <span className="text-xs text-blue-100">10:31 AM</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Paperclip size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
              />
              <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
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