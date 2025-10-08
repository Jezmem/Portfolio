import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { skills } from '../../data/portfolio';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

const SkillsManagement = () => {
  const [skillsList, setSkillsList] = useState<SkillCategory[]>(skills);
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState<{
    categoryIndex: number;
    skillIndex: number;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    level: 50,
    category: 'Frontend',
  });

  const categories = ['Frontend', 'Backend', 'Outils'];

  const handleAddSkill = () => {
    setEditingSkill(null);
    setFormData({ name: '', level: 50, category: 'Frontend' });
    setShowModal(true);
  };

  const handleEditSkill = (categoryIndex: number, skillIndex: number) => {
    const skill = skillsList[categoryIndex].items[skillIndex];
    setEditingSkill({ categoryIndex, skillIndex });
    setFormData({
      name: skill.name,
      level: skill.level,
      category: skillsList[categoryIndex].category,
    });
    setShowModal(true);
  };

  const handleDeleteSkill = (categoryIndex: number, skillIndex: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')) {
      const newSkills = [...skillsList];
      newSkills[categoryIndex].items = newSkills[categoryIndex].items.filter(
        (_, i) => i !== skillIndex
      );
      setSkillsList(newSkills);
    }
  };

  const handleSubmit = () => {
    const newSkills = [...skillsList];
    const categoryIndex = newSkills.findIndex(
      (cat) => cat.category === formData.category
    );

    if (editingSkill) {
      newSkills[editingSkill.categoryIndex].items[editingSkill.skillIndex] = {
        name: formData.name,
        level: formData.level,
      };
    } else {
      if (categoryIndex !== -1) {
        newSkills[categoryIndex].items.push({
          name: formData.name,
          level: formData.level,
        });
      }
    }

    setSkillsList(newSkills);
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Compétences
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez vos compétences techniques et leurs niveaux
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddSkill}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Ajouter une compétence
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsList.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Niveau: {skill.level}%
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEditSkill(categoryIndex, skillIndex)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(categoryIndex, skillIndex)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl pointer-events-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {editingSkill ? 'Modifier la compétence' : 'Ajouter une compétence'}
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom de la compétence
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder="Ex: React"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Catégorie
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Niveau: {formData.level}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.level}
                      onChange={(e) =>
                        setFormData({ ...formData, level: parseInt(e.target.value) })
                      }
                      className="w-full"
                    />
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${formData.level}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors"
                    >
                      {editingSkill ? 'Modifier' : 'Ajouter'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsManagement;
