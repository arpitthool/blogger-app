import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Blog from 'App/Models/Blog'

export default class extends BaseSeeder {
  public async run () {
    // Blogs seeder
    await Blog.createMany([
      {
        "userId": 1,
        "title": "The Joy of Morning Routines",
        "content": "Starting your day with a positive and structured morning routine can set the tone for success. Whether it's a brisk walk, a healthy breakfast, or a few minutes of meditation, incorporating simple rituals into your morning can boost productivity and enhance your overall well-being.",
        "totalLikes": 10
      },
      {
        "userId": 2,
        "title": "Budget-Friendly Travel Tips",
        "content": "Traveling on a budget doesn't mean sacrificing fun and adventure. From finding affordable accommodation to exploring local markets, there are numerous ways to make your next trip both memorable and cost-effective. With a bit of planning and creativity, you can enjoy incredible experiences without breaking the bank.",
        "totalLikes": 10
      },
      {
        "userId": 3,
        "title": "Embracing Mindfulness in Everyday Life",
        "content": "In our fast-paced world, practicing mindfulness is a powerful tool for reducing stress and fostering a sense of calm. Whether it's mindful breathing, meditation, or simply being present in the moment, incorporating mindfulness into your daily routine can lead to improved mental and emotional well-being.",
        "totalLikes": 10
      },
      {
        "userId": 3,
        "title": "The Art of Minimalism",
        "content": "Minimalism is not just a design aesthetic; it's a lifestyle that encourages intentional living with less. Decluttering your physical and mental space can bring about a sense of clarity and simplicity. Discover the freedom and joy that come with letting go of excess and focusing on what truly matters.",
        "totalLikes": 10
      },
      {
        "userId": 4,
        "title": "Exploring Local Cuisine",
        "content": "You don't have to travel far to embark on a culinary adventure. Explore the diverse flavors of your local community by trying out different restaurants, food trucks, or farmers' markets. You might be surprised by the delicious dishes waiting to be discovered right in your own neighborhood.",
        "totalLikes": 10
      },
      {
        "userId": 4,
        "title": "The Power of Positive Affirmations",
        "content": "Positive affirmations are more than just feel-good statements; they can be transformative. By regularly repeating positive phrases, you can reshape your mindset, build confidence, and attract positive energy into your life. Embrace the power of words to create a more optimistic and fulfilling existence.",
        "totalLikes": 10
      },
      {
        "userId": 6,
        "title": "Eco-Friendly Living Made Easy",
        "content": "Making environmentally conscious choices doesn't have to be complicated. From reducing single-use plastics to adopting energy-efficient practices, small changes in our daily habits can contribute to a healthier planet. Explore simple and practical tips for embracing a more eco-friendly lifestyle.",
        "totalLikes": 10
      },
      {
        "userId": 8,
        "title": "Hobbies for Stress Relief",
        "content": "In the midst of busy schedules, finding time for hobbies is crucial for mental health. Whether it's painting, gardening, or playing a musical instrument, engaging in activities you love can provide a welcome escape and help manage stress. Discover the joy of pursuing hobbies that bring you genuine happiness.",
        "totalLikes": 10
      },
      {
        "userId": 8,
        "title": "Building Healthy Habits",
        "content": "Creating and maintaining healthy habits is key to a balanced and fulfilling life. From regular exercise to a nutritious diet, small, consistent changes can lead to significant improvements in your overall well-being. Learn how to build positive habits that contribute to a healthier and happier you.",
        "totalLikes": 10
      },
      {
        "userId": 8,
        "title": "The Beauty of Random Acts of Kindness",
        "content": "Kindness has the power to create a ripple effect, impacting both the giver and the receiver. Explore the beauty of performing random acts of kindness in your daily life. Whether it's a simple compliment, a helping hand, or a small gesture of generosity, spreading kindness can make the world a better place, one act at a time.",
        "totalLikes": 10
      },
    ])
  }
}
