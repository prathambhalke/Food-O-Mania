import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
  // throw new Error ("the error oc")
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  try {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

    await new Promise((resolve, reject) => {
      stream.write(bufferedImage, (error) => {
        if (error) {
          console.error('Error writing image:', error);
          return reject(new Error('Saving Image Failed'));
        }
        stream.end(resolve);
      });
    });

    meal.image = `/images/${fileName}`;

    const stmt = db.prepare(`
      INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `);

    stmt.run({
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image,
      slug: meal.slug
    });

    console.log('Meal saved successfully');

  } catch (err) {
    console.error('An error occurred:', err);
    throw err;
  }
}