import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education, experience } from '../data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours académique et professionnel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Formation
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.institution}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Expérience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-green-200 dark:border-green-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-green-400"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
