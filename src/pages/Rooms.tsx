import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Coffee, Tv } from 'lucide-react';
import RoomImageSlider from '../components/RoomImageSlider';

const Rooms = ({ language }: { language: 'tr' | 'en' }) => {
  const singleRoomImages = [
    '/room1.jpg',
    '/room2.jpg',
    '/room3.jpg',
    '/bathroom.jpg'
  ];

  const doubleRoomImages = [
    '/double1.jpg',
    '/double2.jpg',
    '/double3.jpg',
    '/double-bathroom.jpg'
  ];

  const tripleRoomImages = [
    '/triple1.jpg',
    '/triple2.jpg',
    '/triple3.jpg',
    '/triple-bathroom.jpg'
  ];

  const familyRoomImages = [
    '/family1.jpg',
    '/family2.jpg',
    '/family3.jpg',
    '/family-bathroom.jpg'
  ];

  const rooms = {
    tr: [
      {
        title: 'Dört Kişilik Aile Odası',
        description: 'Geniş ve konforlu, 30 m² büyüklüğünde, dört ayrı tek kişilik yatak, şehir manzaralı',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti', 'Oturma Alanı'],
        capacity: 4,
        images: familyRoomImages,
        size: '30m²'
      },
      {
        title: 'Üç Kişilik Oda',
        description: 'Ferah ve konforlu, 25 m² büyüklüğünde, üç ayrı tek kişilik yatak, şehir manzaralı',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti'],
        capacity: 3,
        images: tripleRoomImages,
        size: '25m²'
      },
      {
        title: 'Çift Kişilik Oda',
        description: 'Modern ve rahat, 20 m² büyüklüğünde, bir adet çift kişilik yatak, şehir manzaralı',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti'],
        capacity: 2,
        images: doubleRoomImages,
        size: '20m²'
      },
      {
        title: 'Standart Tek Kişilik Oda',
        description: 'Şehir manzaralı, 18 m² büyüklüğünde, tek kişilik yatak',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar'],
        capacity: 1,
        images: singleRoomImages,
        size: '18m²'
      }
    ],
    en: [
      {
        title: 'Family Room for Four',
        description: 'Large and comfortable, 30 m² in size, four single beds, city view',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set', 'Seating Area'],
        capacity: 4,
        images: familyRoomImages,
        size: '30m²'
      },
      {
        title: 'Triple Room',
        description: 'Spacious and comfortable, 25 m² in size, three single beds, city view',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set'],
        capacity: 3,
        images: tripleRoomImages,
        size: '25m²'
      },
      {
        title: 'Double Room',
        description: 'Modern and cozy, 20 m² in size, one double bed, city view',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set'],
        capacity: 2,
        images: doubleRoomImages,
        size: '20m²'
      },
      {
        title: 'Standard Single Room',
        description: 'City view, 18 m² in size, single bed',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar'],
        capacity: 1,
        images: singleRoomImages,
        size: '18m²'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          {language === 'tr' ? 'Odalarımız' : 'Our Rooms'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms[language].map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <RoomImageSlider images={room.images} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-blue-900" />
                    <span className="text-sm font-medium text-blue-900">
                      {room.capacity} {language === 'tr' ? 'Kişilik' : 'Person'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {room.size}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      {i === 0 && <Wifi className="w-4 h-4 text-blue-900" />}
                      {i === 1 && <Tv className="w-4 h-4 text-blue-900" />}
                      {i === 2 && <Coffee className="w-4 h-4 text-blue-900" />}
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Rooms;