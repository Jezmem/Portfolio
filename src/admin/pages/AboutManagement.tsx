import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit2, Eye } from 'lucide-react';
import { education, experience } from '../../data/portfolio';

const AboutManagement = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Prénom Nom',
    bio: 'Développeur Full-Stack passionné par le web moderne et les technologies récentes. Expert en React, Vue.js, Symfony et Laravel.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
  });

  const [educationList, setEducationList] = useState(education);
  const [experienceList, setExperienceList] = useState(experience);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDeleteEducation = (index: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      setEducationList(educationList.filter((_, i) => i !== index));
    }
  };

  const handleDeleteExperience = (index: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette expérience ?')) {
      setExperienceList(experienceList.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            À propos / Parcours
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez vos informations personnelles et votre parcours
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          Enregistrer
        </motion.button>
      </div>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg"
        >
          Modifications enregistrées avec succès !
        </motion.div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Informations personnelles
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={personalInfo.name}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Biographie
                </label>
                <textarea
                  rows={4}
                  value={personalInfo.bio}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, bio: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL de la photo
                </label>
                <input
                  type="url"
                  value={personalInfo.avatar}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, avatar: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Formation
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                <Plus className="w-4 h-4" />
                Ajouter
              </button>
            </div>

            <div className="space-y-3">
              {educationList.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.year}
                      </p>
                      <h3 className="font-semibold text-gray-900 dark:text-white mt-1">
                        {edu.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteEducation(index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Expérience professionnelle
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                <Plus className="w-4 h-4" />
                Ajouter
              </button>
            </div>

            <div className="space-y-3">
              {experienceList.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                        {exp.year}
                      </p>
                      <h3 className="font-semibold text-gray-900 dark:text-white mt-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteExperience(index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Aperçu
            </h2>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 dark:border-blue-900"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {personalInfo.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                📚 {educationList.length} formation(s)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                💼 {experienceList.length} expérience(s)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutManagement;
