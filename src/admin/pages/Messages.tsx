import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MailOpen, Trash2, Search, Filter } from 'lucide-react';
import { mockMessages } from '../data/mockData';

type Message = typeof mockMessages[0];

const Messages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = messages.filter((message) => {
    const matchesFilter =
      filter === 'all' || (filter === 'read' && message.status === 'read') || (filter === 'unread' && message.status === 'unread');
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleToggleRead = (id: number) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id
          ? { ...msg, status: msg.status === 'read' ? 'unread' : 'read' }
          : msg
      )
    );
  };

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  const unreadCount = messages.filter((msg) => msg.status === 'unread').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {unreadCount} message{unreadCount !== 1 ? 's' : ''} non lu{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'unread'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Non lus
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'read'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Lus
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher un message..."
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
        />
      </div>

      <div className="space-y-4">
        {filteredMessages.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Aucun message trouvé</p>
          </div>
        ) : (
          filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border transition-all ${
                message.status === 'unread'
                  ? 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`p-3 rounded-full ${
                      message.status === 'unread'
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    {message.status === 'unread' ? (
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <MailOpen className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {message.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {message.email}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {message.date}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleToggleRead(message.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      message.status === 'unread'
                        ? 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        : 'text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    title={message.status === 'unread' ? 'Marquer comme lu' : 'Marquer comme non lu'}
                  >
                    {message.status === 'unread' ? (
                      <MailOpen className="w-5 h-5" />
                    ) : (
                      <Mail className="w-5 h-5" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(message.id)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
