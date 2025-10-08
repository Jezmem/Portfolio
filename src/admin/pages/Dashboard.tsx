import { motion } from 'framer-motion';
import {
  Briefcase,
  MessageSquare,
  Eye,
  CheckCircle,
  Mail,
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react';
import { mockStats } from '../data/mockData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  const stats = [
    {
      title: 'Projets totaux',
      value: mockStats.totalProjects,
      icon: Briefcase,
      color: 'bg-blue-500',
      trend: '+2 ce mois',
    },
    {
      title: 'Messages reçus',
      value: mockStats.totalMessages,
      icon: MessageSquare,
      color: 'bg-green-500',
      trend: `${mockStats.unreadMessages} non lus`,
    },
    {
      title: 'Vues ce mois',
      value: mockStats.viewsThisMonth,
      icon: Eye,
      color: 'bg-purple-500',
      trend: '+12.5%',
    },
    {
      title: 'Statut Portfolio',
      value: 'En ligne',
      icon: CheckCircle,
      color: 'bg-emerald-500',
      trend: 'Opérationnel',
    },
  ];

  const visitorsData = [
    { name: 'Lun', visits: 45 },
    { name: 'Mar', visits: 52 },
    { name: 'Mer', visits: 48 },
    { name: 'Jeu', visits: 61 },
    { name: 'Ven', visits: 55 },
    { name: 'Sam', visits: 38 },
    { name: 'Dim', visits: 42 },
  ];

  const contactsData = [
    { month: 'Juin', contacts: 12 },
    { month: 'Juil', contacts: 19 },
    { month: 'Août', contacts: 15 },
    { month: 'Sept', contacts: 22 },
    { month: 'Oct', contacts: 8 },
  ];

  const recentActivity = [
    {
      action: 'Nouveau message',
      from: 'Marie Dupont',
      time: 'Il y a 2 heures',
      icon: Mail,
    },
    {
      action: 'Projet visité',
      from: 'E-commerce Platform',
      time: 'Il y a 4 heures',
      icon: Eye,
    },
    {
      action: 'Nouveau contact',
      from: 'Jean Martin',
      time: 'Hier',
      icon: MessageSquare,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bienvenue dans votre espace d'administration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </p>
              </div>
              <div className={`p-3 ${stat.color} rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Visites cette semaine
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={visitorsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: '#3B82F6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Contacts par mois
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={contactsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="contacts" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Activité récente
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <activity.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.action}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.from}
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Dernier projet ajouté</h3>
            <p className="text-blue-100">{mockStats.lastProjectAdded}</p>
            <p className="text-sm text-blue-200 mt-2 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Ajouté il y a 3 jours
            </p>
          </div>
          <Briefcase className="w-16 h-16 opacity-20" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
