import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import ReviewCard from '../components/ReviewCard';
import CurrencyRates from '../components/CurrencyRates';
import WorldClock from '../components/WorldClock';

const Home = ({ language }: { language: 'tr' | 'en' }) => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      alt: 'Luxury Hotel Exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      alt: 'Hotel Lobby'
    },
    {
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      alt: 'Hotel Pool'
    }
  ];

  const reviews = {
    tr: [
      { name: 'Ahmet Y.', rating: 9.5, comment: 'Muhteşem bir deneyimdi. Personel çok ilgiliydi.' },
      { name: 'Ayşe K.', rating: 9.0, comment: 'Odalar çok temiz ve konforlu. Kesinlikle tekrar geleceğim.' },
      { name: 'Mehmet S.', rating: 8.5, comment: 'Konumu mükemmel, her yere yakın.' },
      { name: 'Fatma D.', rating: 9.8, comment: 'Kahvaltısı harika, personel çok nazik.' },
      { name: 'Ali R.', rating: 8.7, comment: 'Fiyat/performans açısından çok iyi.' },
      { name: 'Zeynep B.', rating: 9.2, comment: 'Tarihi yerlere yürüme mesafesinde, harika konum.' },
      { name: 'Mustafa K.', rating: 8.9, comment: 'Temiz ve bakımlı odalar, güler yüzlü personel.' },
      { name: 'Esra M.', rating: 9.3, comment: 'Kahvaltı çeşitleri zengin, lezzetli.' },
      { name: 'Can T.', rating: 8.8, comment: 'Ulaşımı kolay, merkezi konumda.' },
      { name: 'Selin A.', rating: 9.4, comment: 'Çok memnun kaldık, tekrar geleceğiz.' }
    ],
    en: [
      { name: 'John D.', rating: 9.5, comment: 'Amazing experience. Staff was very attentive.' },
      { name: 'Sarah M.', rating: 9.0, comment: 'Rooms were very clean and comfortable. Will definitely come back.' },
      { name: 'Michael R.', rating: 8.5, comment: 'Perfect location, close to everything.' },
      { name: 'Emma L.', rating: 9.8, comment: 'Great breakfast, very polite staff.' },
      { name: 'David P.', rating: 8.7, comment: 'Excellent value for money.' },
      { name: 'Lisa K.', rating: 9.2, comment: 'Walking distance to historical sites, great location.' },
      { name: 'Robert S.', rating: 8.9, comment: 'Clean and well-maintained rooms, friendly staff.' },
      { name: 'Maria C.', rating: 9.3, comment: 'Rich breakfast variety, delicious.' },
      { name: 'James B.', rating: 8.8, comment: 'Easy access, central location.' },
      { name: 'Anna W.', rating: 9.4, comment: 'Very satisfied, will come again.' }
    ]
  };

  return (
    <div>
      <CurrencyRates />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="h-[400px] mb-8">
          <ImageSlider images={images} />
        </div>

        <div className="px-4 mb-12">
          <WorldClock />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">
          {language === 'tr' ? 'Misafir Yorumları' : 'Guest Reviews'}
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...reviews[language], ...reviews[language]].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % reviews[language].length) }}
                className="w-[300px] flex-shrink-0"
              >
                <ReviewCard {...review} language={language} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;