import {getImageUrls} from './App';

// Unit test to check our image URL generation
test('generates image URLs correctly', () => {
  const urls = getImageUrls();

  expect(urls).toStrictEqual([
    "https://picsum.photos/id/1037/600/400",
    "https://picsum.photos/id/1047/600/400",
    "https://picsum.photos/id/1056/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1057/600/400",
    "https://picsum.photos/id/1032/600/400",
    "https://picsum.photos/id/1039/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1045/600/400",
    "https://picsum.photos/id/1036/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1023/600/400"
  ])
});