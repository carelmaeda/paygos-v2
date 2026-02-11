/**
 * Image Optimization Script
 *
 * Converts and optimizes images for web performance.
 * Run: npm run optimize-images
 *
 * Requires: npm install sharp --save-dev
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = './public';

// Image optimization configs
const configs = {
  // Avatar images (small, high quality)
  avatar: {
    width: 200, // 2x for retina displays
    height: 200,
    quality: 85,
  },
  // Hero images (large, moderate quality)
  hero: {
    width: 1600,
    quality: 80,
  },
  // Content images (medium)
  content: {
    width: 800,
    quality: 80,
  },
  // Logo images
  logo: {
    width: 400,
    quality: 90,
  },
};

// Images to optimize with their configs
const imagesToOptimize = [
  // Critical: Avatar image (7.4MB -> ~20KB)
  {
    input: 'public/paygos/hesham.jpg',
    output: 'public/paygos/hesham.webp',
    config: configs.avatar,
  },
  // Large content image (1.3MB -> ~100KB)
  {
    input: 'public/customers/retail-efficiency.webp',
    output: 'public/customers/retail-efficiency.webp',
    config: configs.content,
  },
  // Hero image optimization
  {
    input: 'public/paygos/paygos-hero.webp',
    output: 'public/paygos/paygos-hero.webp',
    config: configs.hero,
  },
  // Solutions images - convert PNG to WebP
  {
    input: 'public/solutions/payments.png',
    output: 'public/solutions/payments.webp',
    config: configs.content,
  },
  {
    input: 'public/solutions/training.png',
    output: 'public/solutions/training.webp',
    config: configs.content,
  },
  {
    input: 'public/solutions/ordering.png',
    output: 'public/solutions/ordering.webp',
    config: configs.content,
  },
  {
    input: 'public/solutions/rebates.png',
    output: 'public/solutions/rebates.webp',
    config: configs.content,
  },
  {
    input: 'public/solutions/marketing.png',
    output: 'public/solutions/marketing.webp',
    config: configs.content,
  },
  {
    input: 'public/solutions/returns.png',
    output: 'public/solutions/returns.webp',
    config: configs.content,
  },
];

async function optimizeImage({ input, output, config }) {
  try {
    const inputPath = path.resolve(input);
    const outputPath = path.resolve(output);

    // Check if input exists
    try {
      await fs.access(inputPath);
    } catch {
      console.log(`  Skipping ${input} (file not found)`);
      return;
    }

    const inputStats = await fs.stat(inputPath);
    const inputSize = (inputStats.size / 1024).toFixed(1);

    let pipeline = sharp(inputPath);

    // Resize if dimensions specified
    if (config.width || config.height) {
      pipeline = pipeline.resize(config.width, config.height, {
        fit: 'cover',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP with quality setting
    pipeline = pipeline.webp({ quality: config.quality });

    // Save optimized image
    await pipeline.toFile(outputPath);

    const outputStats = await fs.stat(outputPath);
    const outputSize = (outputStats.size / 1024).toFixed(1);
    const savings = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    console.log(`  ${input}`);
    console.log(`    ${inputSize}KB -> ${outputSize}KB (${savings}% savings)`);

  } catch (error) {
    console.error(`  Error optimizing ${input}:`, error.message);
  }
}

async function main() {
  console.log('Image Optimization Script');
  console.log('='.repeat(50));
  console.log('');

  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }

  console.log('');
  console.log('Done! Remember to update any .png references to .webp in your code.');
}

main();
