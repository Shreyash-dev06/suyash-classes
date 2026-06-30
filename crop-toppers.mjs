import sharp from 'sharp';
import path from 'path';

const assetsDir = './src/assets';

async function cropToppers() {
  // First, get dimensions of the group image
  const groupMeta = await sharp(path.join(assetsDir, 'toppers-group.png')).metadata();
  console.log('Group image:', groupMeta.width, 'x', groupMeta.height);

  const posterMeta = await sharp(path.join(assetsDir, 'vibhuti-poster.png')).metadata();
  console.log('Poster image:', posterMeta.width, 'x', posterMeta.height);

  // Crop Vaidehi Bhojane (left person in group photo)
  // She's on the left side of the image
  const gw = groupMeta.width;
  const gh = groupMeta.height;
  
  await sharp(path.join(assetsDir, 'toppers-group.png'))
    .extract({
      left: Math.round(gw * 0.02),
      top: Math.round(gh * 0.05),
      width: Math.round(gw * 0.45),
      height: Math.round(gh * 0.65)
    })
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .toFile(path.join(assetsDir, 'topper-vaidehi.png'));
  console.log('Cropped Vaidehi Bhojane');

  // Crop Pari Gade (right person in group photo)
  await sharp(path.join(assetsDir, 'toppers-group.png'))
    .extract({
      left: Math.round(gw * 0.53),
      top: Math.round(gh * 0.05),
      width: Math.round(gw * 0.45),
      height: Math.round(gh * 0.65)
    })
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .toFile(path.join(assetsDir, 'topper-pari.png'));
  console.log('Cropped Pari Gade');

  // Crop Vibhuti Patil from poster
  const pw = posterMeta.width;
  const ph = posterMeta.height;
  
  await sharp(path.join(assetsDir, 'vibhuti-poster.png'))
    .extract({
      left: Math.round(pw * 0.15),
      top: Math.round(ph * 0.22),
      width: Math.round(pw * 0.60),
      height: Math.round(ph * 0.30)
    })
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .toFile(path.join(assetsDir, 'topper-vibhuti.png'));
  console.log('Cropped Vibhuti Patil');

  console.log('All toppers cropped successfully!');
}

cropToppers().catch(console.error);
