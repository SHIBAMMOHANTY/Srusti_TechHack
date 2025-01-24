import React from 'react';
import { Guitar as Hospital, Users, Bed, Pill, TrendingUp, Activity, UserCheck } from 'lucide-react';
import { format } from 'date-fns';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const StatCard = ({ icon: Icon, title, value, change, color }: any) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold mt-1 dark:text-white">{value}</h3>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="text-white" size={24} />
      </div>
    </div>
    <p className={`mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
    </p>
  </div>
);

const AnalyticsChart = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Analytics Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="date" className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <YAxis className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(31, 41, 55)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white'
              }}
            />
            <Area
              type="monotone"
              dataKey="visits"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorVisits)"
            />
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorAppointments)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const PatientSatisfactionChart = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Patient Satisfaction</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="date" className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <YAxis className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(31, 41, 55)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white'
              }}
            />
            <Line type="monotone" dataKey="satisfaction" stroke="#3B82F6" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ResourceUtilizationChart = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Resource Utilization</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="resource" className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <YAxis className="text-gray-600 dark:text-gray-400" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(31, 41, 55)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white'
              }}
            />
            <Bar dataKey="utilization" fill="#10B981" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const stats = [
    { icon: Hospital, title: 'Total Hospitals', value: '284', change: 12, color: 'bg-blue-500' },
    { icon: Users, title: 'Total Doctors', value: '1,432', change: 8, color: 'bg-green-500' },
    { icon: Bed, title: 'Available Beds', value: '3,642', change: -5, color: 'bg-purple-500' },
    { icon: Pill, title: 'Medicine Stock', value: '92%', change: 3, color: 'bg-yellow-500' }
  ];

  const mockAnalyticsData = [
    { date: '2024-01-01', visits: 1000, appointments: 150 },
    { date: '2024-02-01', visits: 1200, appointments: 180 },
    { date: '2024-03-01', visits: 1100, appointments: 160 },
  ];

  const mockPatientSatisfactionData = [
    { date: '2024-01-01', satisfaction: 75 },
    { date: '2024-02-01', satisfaction: 80 },
    { date: '2024-03-01', satisfaction: 85 },
  ];

  const mockResourceUtilizationData = [
    { resource: 'Beds', utilization: 80 },
    { resource: 'Staff', utilization: 90 },
    { resource: 'Equipment', utilization: 70 },
  ];

  const mockAppointments = [
    { id: '1', patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2024-02-15', time: '10:00 AM', status: 'scheduled', type: 'Check-up' },
    { id: '2', patientName: 'Jane Roe', doctorName: 'Dr. Lee', date: '2024-02-16', time: '11:00 AM', status: 'completed', type: 'Surgery' },
    { id: '3', patientName: 'Mark Lee', doctorName: 'Dr. Jones', date: '2024-02-17', time: '1:00 PM', status: 'completed', type: 'Consultation' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white">Dashboard Overview</h2>
        <div className="flex space-x-2">
          <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Book Ambulance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsChart data={mockAnalyticsData} />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Appointments</h2>
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Patient</th>
                  <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Doctor</th>
                  <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Date & Time</th>
                  <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-400">{appointment.patientName}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-400">{appointment.doctorName}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-400">{appointment.date} {appointment.time}</td>
                    <td className={`px-4 py-2 ${appointment.status === 'completed' ? 'text-green-500' : 'text-orange-500'}`}>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatientSatisfactionChart data={mockPatientSatisfactionData} />
        <ResourceUtilizationChart data={mockResourceUtilizationData} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Recent Activities</h3>
        <div className="space-y-4">
          {[
            { icon: UserCheck, text: 'New patient registration completed', time: '2 minutes ago' },
            { icon: Activity, text: 'Emergency department capacity at 85%', time: '15 minutes ago' },
            { icon: TrendingUp, text: 'Monthly health report generated', time: '1 hour ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
              <activity.icon className="text-blue-500" size={20} />
              <div className="flex-1">
                <p className="dark:text-white">{activity.text}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
