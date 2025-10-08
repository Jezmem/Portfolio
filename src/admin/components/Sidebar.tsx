import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Lightbulb,
  Briefcase,
  MessageSquare,
  Settings,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin/dashboard' },
    { icon: User, label: 'À propos / Parcours', path: '/admin/about' },
    { icon: Lightbulb, label: 'Compétences', path: '/admin/skills' },
    { icon: Briefcase, label: 'Projets', path: '/admin/projects' },
    { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
    { icon: Settings, label: 'Paramètres', path: '/admin/settings' },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-50 lg:translate-x-0 lg:static"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-800 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="text-xs text-gray-500 text-center">
            Portfolio Admin v1.0
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
