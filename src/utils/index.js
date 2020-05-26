export default function randomImageName(length, ext) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let string = '';
  const max = characters.length - 1;
  const min = 0;
  for (let i = 0; i < length; i += 1) {
    string += characters[Math.floor(Math.random() * (+max - +min) + +min)];
  }
  return string + ext;
}
