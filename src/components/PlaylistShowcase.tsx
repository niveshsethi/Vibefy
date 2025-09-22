import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { faker } from '@faker-js/faker';

interface Playlist {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  trackCount: number;
}

const PlaylistShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const generatePlaylists = (): Playlist[] => {
    const colors = [
      'from-red-500 to-pink-500',
      'from-blue-500 to-purple-500',
      'from-green-500 to-teal-500',
      'from-yellow-500 to-orange-500',
      'from-purple-500 to-indigo-500',
      'from-pink-500 to-rose-500',
    ];

    const playlistTitles = [
      'Chill Vibes', 'Workout Energy', 'Late Night Jazz', 'Indie Discoveries',
      'Electronic Dreams', 'Acoustic Sessions'
    ];

    return playlistTitles.map((title, index) => ({
      id: faker.string.uuid(),
      title,
      description: faker.lorem.sentence(),
      image: `https://picsum.photos/300/300?random=${index + 1}`,
      color: colors[index % colors.length],
      trackCount: faker.number.int({ min: 15, max: 150 }),
    }));
  };

  const playlists = generatePlaylists();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Curated for{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Every Mood
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover handpicked playlists that match your vibe, powered by our AI and music experts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${playlist.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Image */}
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-black hover:bg-green-300 transition-colors duration-200"
                  >
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </motion.button>
                </motion.div>

                {/* Floating Heart */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-colors duration-200"
                >
                  <Heart className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {playlist.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {playlist.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {playlist.trackCount} tracks
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{
                  borderImage: `linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.5), transparent) 1`,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-300 transition-colors duration-200"
          >
            Browse All Playlists
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlaylistShowcase;
