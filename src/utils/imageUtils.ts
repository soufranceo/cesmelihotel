export const roomImages = {
  familyRoom: [
    '/rooms/family/room1.jpg',
    '/rooms/family/room2.jpg',
    '/rooms/family/room3.jpg',
    '/rooms/family/bathroom.jpg'
  ],
  tripleRoom: [
    '/rooms/triple/room1.jpg',
    '/rooms/triple/room2.jpg',
    '/rooms/triple/room3.jpg',
    '/rooms/triple/bathroom.jpg'
  ],
  doubleRoom: [
    '/rooms/double/room1.jpg',
    '/rooms/double/room2.jpg',
    '/rooms/double/room3.jpg',
    '/rooms/double/bathroom.jpg'
  ],
  singleRoom: [
    '/rooms/single/room1.jpg',
    '/rooms/single/room2.jpg',
    '/rooms/single/room3.jpg',
    '/rooms/single/bathroom.jpg'
  ]
};

export const getImageUrl = (imageName: string) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};