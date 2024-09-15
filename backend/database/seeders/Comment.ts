import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class extends BaseSeeder {
  public async run () {
    // Create comments
    await Comment.createMany([
      {
        userId: 1,
        blogId: 1,
        content: 'This is a really insightful post! I learned a lot from it. Thanks for sharing.',
      },
      {
        userId: 2,
        blogId: 1,
        content: 'I really appreciate your perspective on this. It gave me a new way to think about the topic.',
      },
      {
        userId: 3,
        blogId: 1,
        content: 'Great content! It’s well-organized and easy to understand.',
      },
      {
        userId: 4,
        blogId: 1,
        content: 'I found this very informative. It addresses important points that many people overlook.',
      },
      {
        userId: 5,
        blogId: 1,
        content: 'I can definitely relate to this. Thanks for bringing attention to such an important topic.',
      },
      {
        userId: 1,
        blogId: 1,
        content: 'Well-written and thoughtful. I’m looking forward to more posts like this!',
      },
      {
        userId: 6,
        blogId: 1,
        content: 'This really resonated with me. I’ll be sure to apply this in my own work.',
      },
      {
        userId: 7,
        blogId: 1,
        content: 'It’s always refreshing to read content that provides such useful insights.',
      },
      {
        userId: 9,
        blogId: 1,
        content: 'I appreciate how you’ve broken this down into clear, actionable steps.',
      },
      {
        userId: 10,
        blogId: 1,
        content: 'This is something everyone should take note of. Thanks for posting!',
      },
      {
        userId: 1,
        blogId: 2,
        content: 'Really valuable post! I gained a lot of new insights from it. Thanks for putting this together.',
      },
      {
        userId: 2,
        blogId: 2,
        content: 'Your perspective is really interesting. It opened my eyes to some new ideas I hadn’t considered before.',
      },
      {
        userId: 3,
        blogId: 2,
        content: 'I appreciate how well-structured and clear your writing is. Great job!',
      },
      {
        userId: 4,
        blogId: 2,
        content: 'This was very enlightening. You covered some really important aspects that often get overlooked.',
      },
      {
        userId: 5,
        blogId: 2,
        content: 'I can totally relate to the points you’ve made here. It’s good to see someone else addressing this.',
      },
      {
        userId: 1,
        blogId: 2,
        content: 'This was a thoughtful and engaging read. Looking forward to more of your content!',
      },
      {
        userId: 6,
        blogId: 2,
        content: 'I really connected with this post. I’ll definitely keep these ideas in mind going forward.',
      },
      {
        userId: 7,
        blogId: 2,
        content: 'I love how you’ve presented this information. It’s practical and easy to understand.',
      },
      {
        userId: 9,
        blogId: 2,
        content: 'I like how you’ve broken down the key points. Very helpful and clear!',
      },
      {
        userId: 10,
        blogId: 2,
        content: 'This is a topic more people should be aware of. Thanks for raising awareness!',
      },
      {
        userId: 1,
        blogId: 3,
        content: 'This post was a fantastic read! The points you made were really helpful and well-explained.',
      },
      {
        userId: 2,
        blogId: 3,
        content: 'I truly appreciate the unique perspective you’ve shared here. It’s given me something new to think about.',
      },
      {
        userId: 3,
        blogId: 3,
        content: 'Very informative and easy to follow. This post covers everything so clearly!',
      },
      {
        userId: 4,
        blogId: 3,
        content: 'You’ve touched on some really important ideas. I found this very useful and enlightening.',
      },
      {
        userId: 5,
        blogId: 3,
        content: 'This was a really refreshing take on the topic. Thanks for sharing your insights!',
      },
      {
        userId: 1,
        blogId: 3,
        content: 'I enjoyed reading this. You’ve done a great job of breaking down a complex topic into understandable terms.',
      },
      {
        userId: 6,
        blogId: 3,
        content: 'This content really speaks to me. I’ll be applying some of these tips in my own work.',
      },
      {
        userId: 7,
        blogId: 3,
        content: 'Great post! Your points were spot on, and I learned a lot from reading it.',
      },
      {
        userId: 9,
        blogId: 3,
        content: 'This was really well-organized and thorough. Thanks for providing such clear explanations!',
      },
      {
        userId: 10,
        blogId: 3,
        content: 'I found this extremely helpful. Looking forward to more content like this from you!',
      },
      {
        userId: 1,
        blogId: 4,
        content: 'This is a really well-thought-out post. I appreciated the detailed approach you took.',
      },
      {
        userId: 2,
        blogId: 4,
        content: 'Your ideas here are fresh and insightful. I hadn’t considered some of these points before!',
      },
      {
        userId: 3,
        blogId: 4,
        content: 'This post does a great job of explaining the subject in a clear, concise way. Very informative.',
      },
      {
        userId: 4,
        blogId: 4,
        content: 'You’ve presented some excellent points. I’ll definitely keep this in mind in the future.',
      },
      {
        userId: 5,
        blogId: 4,
        content: 'Really valuable post! I’m glad I took the time to read it. Keep up the good work!',
      },
      {
        userId: 1,
        blogId: 4,
        content: 'Very interesting read. I enjoyed how you broke down the information and provided real value.',
      },
      {
        userId: 6,
        blogId: 4,
        content: 'I found this very insightful and practical. Definitely going to apply some of these ideas!',
      },
      {
        userId: 7,
        blogId: 4,
        content: 'This post is very well-organized and filled with useful tips. I appreciate the thought you put into it.',
      },
      {
        userId: 9,
        blogId: 4,
        content: 'Great job explaining this topic. You made it very easy to understand and actionable!',
      },
      {
        userId: 10,
        blogId: 4,
        content: 'This was a fantastic post! I’ve taken away some great tips from it. Looking forward to more!',
      },
      {
        userId: 1,
        blogId: 5,
        content: 'This post really resonated with me. The points you made were spot on and well-communicated.',
      },
      {
        userId: 2,
        blogId: 5,
        content: 'I appreciate the depth of insight you’ve shared here. I hadn’t considered some of these ideas before.',
      },
      {
        userId: 3,
        blogId: 5,
        content: 'Your content is always clear and easy to follow. This post was no exception!',
      },
      {
        userId: 4,
        blogId: 5,
        content: 'I found this post incredibly helpful. You’ve touched on some critical areas that deserve more attention.',
      },
      {
        userId: 5,
        blogId: 5,
        content: 'I can relate to a lot of what you’ve written here. Thanks for providing such valuable insights!',
      },
      {
        userId: 1,
        blogId: 5,
        content: 'This was a well-written post. Your ability to explain things simply is appreciated.',
      },
      {
        userId: 6,
        blogId: 5,
        content: 'Your posts are always insightful, and this one is no different. I’ll definitely keep these points in mind.',
      },
      {
        userId: 7,
        blogId: 5,
        content: 'Great job! This post was full of practical advice and useful information.',
      },
      {
        userId: 9,
        blogId: 5,
        content: 'I found this post very informative and easy to digest. Looking forward to your future posts!',
      },
      {
        userId: 10,
        blogId: 5,
        content: 'This is something I’ll definitely be referring back to. Thanks for putting this together!',
      },
      {
        userId: 1,
        blogId: 6,
        content: 'I love how you’ve explained everything so clearly. This was an engaging read!',
      },
      {
        userId: 2,
        blogId: 6,
        content: 'Your approach to this topic is refreshing. It’s not often discussed this way, and I appreciate your insights.',
      },
      {
        userId: 3,
        blogId: 6,
        content: 'This post was incredibly easy to follow, and I learned a lot from it. Great job!',
      },
      {
        userId: 4,
        blogId: 6,
        content: 'You’ve managed to cover all the essential points. I’m definitely taking note of your suggestions.',
      },
      {
        userId: 5,
        blogId: 6,
        content: 'This is a really thoughtful post! I’m glad I came across it—it’s full of valuable takeaways.',
      },
      {
        userId: 1,
        blogId: 6,
        content: 'Great job explaining a complex topic in such an accessible way. Well done!',
      },
      {
        userId: 6,
        blogId: 6,
        content: 'Thanks for breaking this down so well. I’ll be using some of these tips myself!',
      },
      {
        userId: 7,
        blogId: 6,
        content: 'I always appreciate your clear and straightforward writing. This post was no different!',
      },
      {
        userId: 9,
        blogId: 6,
        content: 'I always appreciate your clear and straightforward writing. This post was no different!',
      },
      {
        userId: 1,
        blogId: 7,
        content: 'Your writing is always on point. This post provided exactly the clarity I needed on this topic.',
      },
      {
        userId: 2,
        blogId: 7,
        content: 'I love how you’ve presented your ideas here. Very logical and easy to follow!',
      },
      {
        userId: 3,
        blogId: 7,
        content: 'This is one of the most helpful posts I’ve read in a while. Thanks for sharing!',
      },
      {
        userId: 4,
        blogId: 7,
        content: 'This was a great read! I’ll definitely be using some of these suggestions in my own work.',
      },
      {
        userId: 5,
        blogId: 7,
        content: 'I really appreciate your thoughtful approach to this subject. Well done!',
      },
      {
        userId: 1,
        blogId: 7,
        content: 'This post hit home for me. You’ve managed to explain things so clearly. Great work!',
      },
      {
        userId: 6,
        blogId: 7,
        content: 'I’ve gained some new perspectives from reading this. Thanks for putting it together!',
      },
      {
        userId: 7,
        blogId: 7,
        content: 'This was a great post! It provided a lot of practical insights that I can apply immediately.',
      },
      {
        userId: 9,
        blogId: 7,
        content: 'Thanks for sharing such valuable advice. I found this post very helpful!',
      },
      {
        userId: 10,
        blogId: 7,
        content: 'This was a well-written and highly informative post. Keep up the great work!',
      },
      {
        userId: 1,
        blogId: 8,
        content: 'This was an amazing read! Your insights are always so well thought out.',
      },
      {
        userId: 2,
        blogId: 8,
        content: 'I appreciate the way you’ve tackled this topic. It’s not often discussed, but it’s so important.',
      },
      {
        userId: 3,
        blogId: 8,
        content: 'I learned a lot from this post. It was easy to follow and full of great information!',
      },
      {
        userId: 4,
        blogId: 8,
        content: 'You’ve really simplified a complex topic here. Thanks for making this so easy to understand!',
      },
      {
        userId: 5,
        blogId: 8,
        content: 'This is the kind of content I enjoy reading—practical and insightful!',
      },
      {
        userId: 1,
        blogId: 8,
        content: 'I always enjoy your posts, and this one didn’t disappoint. Keep up the good work!',
      },
      {
        userId: 6,
        blogId: 8,
        content: 'I found this post to be very well-written and informative. Thanks for sharing!',
      },
      {
        userId: 7,
        blogId: 8,
        content: 'Great job on this post! It was engaging and very well organized.',
      },
      {
        userId: 9,
        blogId: 8,
        content: 'This was an excellent post! I’ll be taking some of your suggestions to heart.',
      },
      {
        userId: 10,
        blogId: 8,
        content: 'This was an excellent post! I’ll be taking some of your suggestions to heart.',
      },
      {
        userId: 1,
        blogId: 9,
        content: 'This is such an insightful post! I learned a lot from reading it.',
      },
      {
        userId: 2,
        blogId: 9,
        content: 'I appreciate the detailed approach you took here. There’s so much value in this post!',
      },
      {
        userId: 3,
        blogId: 9,
        content: 'Thanks for sharing your thoughts on this topic. It’s a great read, full of useful advice!',
      },
      {
        userId: 4,
        blogId: 9,
        content: 'This post really got me thinking. I love the way you broke everything down so clearly.',
      },
      {
        userId: 5,
        blogId: 9,
        content: 'Well done! I enjoyed reading this post and learned a lot from it.',
      },
      {
        userId: 1,
        blogId: 9,
        content: 'This was a fantastic post. You’ve provided some great takeaways!',
      },
      {
        userId: 6,
        blogId: 9,
        content: 'I always find your posts helpful and informative. Thanks for sharing this!',
      },
      {
        userId: 7,
        blogId: 9,
        content: 'This was a great post. I’m looking forward to more content like this from you!',
      },
      {
        userId: 9,
        blogId: 9,
        content: 'Thanks for sharing such valuable advice. I’ll definitely be keeping this in mind.',
      },
      {
        userId: 10,
        blogId: 9,
        content: 'This was a highly informative and well-written post. Keep up the great work!',
      }                                          
    ])
  }
}
