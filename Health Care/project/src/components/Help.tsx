import React from 'react';
import { HelpCircle, Search, MessageSquare, FileText, Book, ExternalLink } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by navigating to the Appointments section and clicking on "Book New Appointment". Follow the steps to select your preferred doctor, date, and time.'
    },
    {
      question: 'What should I do in case of an emergency?',
      answer: 'In case of an emergency, you can use the Emergency section to quickly book an ambulance or find the nearest emergency facility. You can also call our 24/7 emergency hotline.'
    },
    {
      question: 'How can I view my medical records?',
      answer: 'Your medical records can be accessed through your Profile section. Click on "Medical History" to view your complete health records, test results, and prescriptions.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white">Help Center</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <MessageSquare size={20} />
          <span>Start Live Chat</span>
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: Book,
            title: 'User Guide',
            description: 'Learn how to use all features of the healthcare platform'
          },
          { 
            icon: FileText,
            title: 'Documentation',
            description: 'Detailed documentation about our services and policies'
          },
          { 
            icon: MessageSquare,
            title: 'Contact Support',
            description: '24/7 support team ready to help you with any issues'
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                <item.icon className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
              <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
                <span>Learn More</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <summary className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="text-blue-500" size={20} />
                  <span className="font-medium dark:text-white">{faq.question}</span>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 pl-9">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-semibold dark:text-white">Still need help?</h3>
            <p className="text-gray-600 dark:text-gray-400">Our support team is available 24/7</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
              Email Us
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;