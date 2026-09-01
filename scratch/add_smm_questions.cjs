const fs = require('fs');

const questions = [
  {
    "testId": "smm-test-01",
    "question": "What does SMM stand for in digital marketing?",
    "options": ["Social Media Marketing", "Search Media Marketing", "Social Metrics Management", "Sales & Marketing Management"],
    "correctOption": 0,
    "explanation": "SMM stands for Social Media Marketing, which is the use of social media platforms to connect with audiences, build brand awareness, and drive sales."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is a social media platform?",
    "options": ["Google", "Instagram", "Amazon", "YouTube"],
    "correctOption": 1,
    "explanation": "Instagram is a social media platform. Google and Amazon are not primarily social media platforms, though YouTube (owned by Google) is considered a social media platform."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the primary goal of social media marketing?",
    "options": [
      "To build brand awareness and engage with the audience",
      "To directly sell products on social media only",
      "To replace traditional advertising",
      "To avoid customer interaction"
    ],
    "correctOption": 0,
    "explanation": "The primary goal of social media marketing is to build brand awareness, engage with the audience, and drive meaningful interactions."
  },
  {
    "testId": "smm-test-01",
    "question": "Which platform is known as the most popular for B2B social media marketing?",
    "options": ["Facebook", "Instagram", "LinkedIn", "TikTok"],
    "correctOption": 2,
    "explanation": "LinkedIn is the most popular platform for B2B social media marketing, as it focuses on professional networking and industry-related content."
  },
  {
    "testId": "smm-test-01",
    "question": "What is organic reach on social media?",
    "options": [
      "The number of people who see your content without paid promotion",
      "The number of paid ad impressions",
      "The total number of followers",
      "The number of shares and likes"
    ],
    "correctOption": 0,
    "explanation": "Organic reach refers to the number of people who view your social media content without paid promotion, relying on the platform's algorithm."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is NOT a type of social media content?",
    "options": ["Images", "Videos", "Blog posts", "Print magazines"],
    "correctOption": 3,
    "explanation": "Print magazines are not social media content. Images, videos, and blog posts are common types of content shared on social media."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the difference between paid and organic social media?",
    "options": [
      "Paid social media involves advertising; organic social media is unpaid content",
      "Organic social media involves advertising; paid social media is unpaid",
      "Both involve advertising",
      "Both are unpaid"
    ],
    "correctOption": 0,
    "explanation": "Paid social media involves paying to promote content or run ads. Organic social media is free content posted to a brand's own channels."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is a social media analytics metric?",
    "options": ["Engagement rate", "Page views", "Bounce rate", "Click-through rate"],
    "correctOption": 0,
    "explanation": "Engagement rate is a key social media metric. Page views, bounce rate, and click-through rate are more commonly associated with websites."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the purpose of a social media strategy?",
    "options": [
      "To outline goals, target audience, and content plans for social media",
      "To only post content randomly",
      "To avoid competition",
      "To stop using social media"
    ],
    "correctOption": 0,
    "explanation": "A social media strategy documents the goals, target audience, content plans, and metrics to guide social media marketing efforts."
  },
  {
    "testId": "smm-test-01",
    "question": "What is a 'social media handle'?",
    "options": [
      "The unique username that identifies a brand or individual on a social platform",
      "A type of social media post",
      "A social media advertising tool",
      "A social media analytics metric"
    ],
    "correctOption": 0,
    "explanation": "A social media handle is the unique username used to identify a brand or individual on a specific social media platform."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is the largest social media platform by active users?",
    "options": ["Instagram", "Facebook", "LinkedIn", "TikTok"],
    "correctOption": 1,
    "explanation": "Facebook has the largest number of active users globally, making it a primary platform for social media marketing."
  },
  {
    "testId": "smm-test-01",
    "question": "What is brand awareness in social media marketing?",
    "options": [
      "The extent to which consumers are familiar with the brand and its products",
      "The number of sales generated",
      "The number of employees in the company",
      "The amount of revenue generated"
    ],
    "correctOption": 0,
    "explanation": "Brand awareness refers to how well consumers recognize and recall a brand and its products. It is a key goal of social media marketing."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the role of algorithms on social media platforms?",
    "options": [
      "To determine which content appears in users' feeds based on relevance and engagement",
      "To decide how much to charge for ads",
      "To design the platform's interface",
      "To moderate all user comments"
    ],
    "correctOption": 0,
    "explanation": "Algorithms analyze user behavior and engagement to curate content in users' feeds, aiming to show the most relevant and engaging content."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the most important factor in building a strong social media presence?",
    "options": [
      "Consistency in posting and engaging with the audience",
      "Having the most followers",
      "Posting every hour",
      "Using every social media platform"
    ],
    "correctOption": 0,
    "explanation": "Consistency in posting high-quality content and engaging with the audience is crucial for building a strong social media presence."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is a social media management tool?",
    "options": ["Hootsuite", "Google Analytics", "Adobe Photoshop", "Slack"],
    "correctOption": 0,
    "explanation": "Hootsuite is a social media management tool that helps schedule posts and manage multiple social accounts. Google Analytics is web analytics, Photoshop is for design, Slack is for communication."
  },
  {
    "testId": "smm-test-01",
    "question": "What is audience targeting in social media?",
    "options": [
      "The process of identifying and reaching specific groups of users who are likely to be interested in your content or products",
      "The process of posting at random times",
      "The process of copying competitors",
      "The process of ignoring demographics"
    ],
    "correctOption": 0,
    "explanation": "Audience targeting involves segmenting and reaching specific groups based on demographics, interests, behavior, and other characteristics."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is a key component of social media ROI?",
    "options": ["Return on investment", "Reach and impressions", "Engagement and conversions", "All of the above"],
    "correctOption": 3,
    "explanation": "ROI in social media is measured by comparing the value generated (conversions, engagement) against the cost of the marketing efforts."
  },
  {
    "testId": "smm-test-01",
    "question": "What is a social media policy?",
    "options": [
      "A set of guidelines for employees on how to use social media professionally",
      "The terms of service of a social platform",
      "A paid advertising strategy",
      "A type of social media post"
    ],
    "correctOption": 0,
    "explanation": "A social media policy is a document that outlines how employees should represent the company on social media, including rules for behavior and communication."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the concept of 'social listening'?",
    "options": [
      "Monitoring social media channels for mentions, conversations, and trends related to your brand",
      "Listening to social media ads",
      "Playing music on social media",
      "Ignoring customer feedback"
    ],
    "correctOption": 0,
    "explanation": "Social listening involves monitoring social media conversations for brand mentions, industry trends, and customer sentiment to gain insights."
  },
  {
    "testId": "smm-test-01",
    "question": "Which platform is best known for short-form video content?",
    "options": ["TikTok", "LinkedIn", "Pinterest", "Facebook"],
    "correctOption": 0,
    "explanation": "TikTok is the most popular platform for short-form vertical video content, though Instagram Reels and YouTube Shorts also compete."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the purpose of social media KPIs?",
    "options": [
      "To measure and evaluate the performance of social media marketing efforts",
      "To determine employee salaries",
      "To design social media posts",
      "To manage social media accounts"
    ],
    "correctOption": 0,
    "explanation": "Key Performance Indicators (KPIs) are quantifiable metrics used to track and evaluate the success of social media marketing goals."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the most effective way to grow followers organically?",
    "options": [
      "Posting valuable, engaging content consistently",
      "Buying followers",
      "Posting once a month",
      "Ignoring audience feedback"
    ],
    "correctOption": 0,
    "explanation": "Organic follower growth is best achieved through consistent posting of valuable content, engaging with the audience, and building a community."
  },
  {
    "testId": "smm-test-01",
    "question": "Which of the following is a visual social media platform?",
    "options": ["Instagram", "Twitter", "LinkedIn", "Pinterest"],
    "correctOption": 0,
    "explanation": "Instagram is a visual-centric platform focused on images and videos. Pinterest is also visual but more of a discovery engine."
  },
  {
    "testId": "smm-test-01",
    "question": "What is the role of a social media community manager?",
    "options": [
      "To engage with the audience, respond to comments, and build a community around the brand",
      "To only post content",
      "To avoid customer interaction",
      "To manage social media advertising only"
    ],
    "correctOption": 0,
    "explanation": "A community manager actively engages with followers, responds to comments and messages, and fosters a sense of community around the brand."
  },
  {
    "testId": "smm-test-02",
    "question": "What is a content calendar in social media marketing?",
    "options": [
      "A schedule that outlines what content will be posted, when, and on which platforms",
      "A calendar for business meetings",
      "A tool for tracking employee performance",
      "A platform for social media ads"
    ],
    "correctOption": 0,
    "explanation": "A content calendar is a strategic schedule for social media posts, helping ensure consistency and alignment with marketing goals."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the ideal image-to-text ratio for social media posts?",
    "options": [
      "Visual-heavy with minimal text for better engagement",
      "Text-heavy with no images",
      "50% text and 50% images",
      "Images are not important"
    ],
    "correctOption": 0,
    "explanation": "Visual-heavy content with minimal text generally performs better on most social platforms, as visuals capture attention more effectively."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the purpose of hashtags on social media?",
    "options": [
      "To categorize content and increase discoverability",
      "To add decoration to posts",
      "To replace captions",
      "To hide content from certain users"
    ],
    "correctOption": 0,
    "explanation": "Hashtags help categorize content and make it discoverable to users searching for specific topics or interests."
  },
  {
    "testId": "smm-test-02",
    "question": "What is a branded hashtag?",
    "options": [
      "A unique hashtag created specifically for a brand or campaign",
      "A hashtag that is trending",
      "A hashtag with the brand's name",
      "A hashtag that is always the same"
    ],
    "correctOption": 0,
    "explanation": "A branded hashtag is a custom hashtag created by a brand to promote campaigns, encourage user-generated content, and build community."
  },
  {
    "testId": "smm-test-02",
    "question": "What is user-generated content (UGC)?",
    "options": [
      "Content created by customers or users about a brand, not by the brand itself",
      "Content created by the brand",
      "Paid content from influencers",
      "Content generated by AI"
    ],
    "correctOption": 0,
    "explanation": "User-generated content (UGC) is content created by customers, fans, or users about a brand or product, which can be shared by the brand."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the best practice for creating captions on social media?",
    "options": [
      "Make them engaging, concise, and include a call-to-action (CTA)",
      "Write long paragraphs without spacing",
      "Use only emojis",
      "Ignore spelling and grammar"
    ],
    "correctOption": 0,
    "explanation": "Effective captions are engaging, clear, include a call-to-action, and are tailored to the platform and audience."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the ideal posting frequency on Instagram for maximum engagement?",
    "options": ["1-2 times per day", "Once per week", "10 times per day", "Once a month"],
    "correctOption": 0,
    "explanation": "Posting 1-2 times per day on Instagram is generally recommended for maintaining visibility without overwhelming followers."
  },
  {
    "testId": "smm-test-02",
    "question": "What is video content in social media marketing?",
    "options": [
      "A highly engaging format that can include Reels, Stories, live streams, and pre-recorded videos",
      "Text-only content",
      "Audio-only content",
      "Images with captions"
    ],
    "correctOption": 0,
    "explanation": "Video content is one of the most engaging formats on social media, including short-form videos (Reels), Stories, live streams, and longer videos."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the purpose of Instagram Stories?",
    "options": [
      "To share ephemeral content that disappears after 24 hours, often used for behind-the-scenes content",
      "To post permanent content",
      "To share advertisements only",
      "To replace the main feed"
    ],
    "correctOption": 0,
    "explanation": "Instagram Stories allow sharing of content that disappears after 24 hours, making them ideal for casual, real-time, and behind-the-scenes content."
  },
  {
    "testId": "smm-test-02",
    "question": "What is social media engagement?",
    "options": [
      "The level of interaction (likes, comments, shares) on social media posts",
      "The total number of followers",
      "The number of posts made",
      "The amount spent on ads"
    ],
    "correctOption": 0,
    "explanation": "Engagement includes actions like likes, comments, shares, saves, and clicks, indicating audience interaction with content."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the importance of storytelling in social media content?",
    "options": [
      "It helps build emotional connections and makes content more memorable",
      "It is not important for social media",
      "It only works for product sales",
      "It is only for video content"
    ],
    "correctOption": 0,
    "explanation": "Storytelling creates emotional connections with audiences, making content more engaging, memorable, and shareable."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the difference between a Story and a Reel on Instagram?",
    "options": [
      "Stories disappear after 24 hours; Reels are permanent, short-form videos in the Explore section",
      "Reels disappear after 24 hours; Stories are permanent",
      "Both disappear after 24 hours",
      "Both are permanent"
    ],
    "correctOption": 0,
    "explanation": "Instagram Stories disappear after 24 hours, while Reels are permanent videos that can appear in the Reels tab and Explore page."
  },
  {
    "testId": "smm-test-02",
    "question": "What is a social media trend?",
    "options": [
      "A pattern or topic that is currently popular and gaining attention on social platforms",
      "A type of social media ad",
      "A social media policy",
      "A platform's algorithm"
    ],
    "correctOption": 0,
    "explanation": "Social media trends are topics, hashtags, or types of content that become popular and widely shared on social media platforms."
  },
  {
    "testId": "smm-test-02",
    "question": "What is the role of a call-to-action (CTA) in social media posts?",
    "options": [
      "To prompt the audience to take a specific action, like 'Shop Now' or 'Learn More'",
      "To provide information only",
      "To add decoration to posts",
      "To replace the caption"
    ],
    "correctOption": 0,
    "explanation": "A call-to-action (CTA) encourages the audience to take a desired action, such as visiting a website, making a purchase, or signing up."
  },
  {
    "testId": "smm-test-02",
    "question": "What is a social media audience persona?",
    "options": [
      "A detailed profile representing the ideal customer or target audience for social media",
      "A social media handle",
      "A type of social media post",
      "A social media platform"
    ],
    "correctOption": 0,
    "explanation": "An audience persona is a semi-fictional profile representing the ideal target audience, used to guide content and targeting decisions."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the purpose of social media advertising?",
    "options": [
      "To promote content or products to a targeted audience through paid campaigns",
      "To post organic content",
      "To avoid marketing",
      "To reduce brand awareness"
    ],
    "correctOption": 0,
    "explanation": "Social media advertising uses paid campaigns to target specific audiences with promotional content, increasing reach and conversions."
  },
  {
    "testId": "smm-test-03",
    "question": "Which advertising platform is owned by Facebook?",
    "options": ["Instagram", "TikTok", "Snapchat", "Twitter"],
    "correctOption": 0,
    "explanation": "Instagram is owned by Meta (formerly Facebook), and ads can be run through the Facebook Ads Manager."
  },
  {
    "testId": "smm-test-03",
    "question": "What is audience targeting in social media ads?",
    "options": [
      "The process of selecting specific user groups based on demographics, interests, and behavior",
      "The process of posting organically",
      "The process of creating content",
      "The process of analyzing competitors"
    ],
    "correctOption": 0,
    "explanation": "Audience targeting allows advertisers to reach specific groups of users based on demographics, interests, behaviors, and location."
  },
  {
    "testId": "smm-test-03",
    "question": "What is a retargeting (remarketing) campaign in social media?",
    "options": [
      "A campaign targeting users who have previously interacted with your brand but did not convert",
      "A campaign targeting new audiences",
      "A campaign targeting competitors",
      "A campaign targeting all users equally"
    ],
    "correctOption": 0,
    "explanation": "Retargeting campaigns target users who have visited your website or engaged with your brand but have not converted, aiming to bring them back."
  },
  {
    "testId": "smm-test-03",
    "question": "What is A/B testing in social media advertising?",
    "options": [
      "Comparing two versions of an ad to see which performs better",
      "Testing only one version",
      "Testing the platform's algorithm",
      "Testing audience demographics"
    ],
    "correctOption": 0,
    "explanation": "A/B testing involves showing two variations of an ad to different audience segments to determine which version drives better results."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the difference between CPM and CPC in social media advertising?",
    "options": [
      "CPM is cost per thousand impressions; CPC is cost per click",
      "CPC is cost per thousand impressions; CPM is cost per click",
      "Both are cost per thousand impressions",
      "Both are cost per click"
    ],
    "correctOption": 0,
    "explanation": "CPM (Cost Per Mille) is the cost for 1,000 impressions; CPC (Cost Per Click) is the cost for each click on an ad."
  },
  {
    "testId": "smm-test-03",
    "question": "What is a lookalike audience in social media ads?",
    "options": [
      "An audience created based on the characteristics of your existing customers",
      "An audience with no prior brand interaction",
      "An audience of competitors' followers",
      "An audience that is randomly selected"
    ],
    "correctOption": 0,
    "explanation": "Lookalike audiences are created by targeting users with similar interests and characteristics to your existing customers, often driving better conversion rates."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the role of the Facebook Pixel?",
    "options": [
      "To track conversions, retarget users, and measure ad effectiveness",
      "To create content",
      "To manage social media accounts",
      "To design ads"
    ],
    "correctOption": 0,
    "explanation": "Facebook Pixel is a code snippet that tracks user interactions on your website, enabling conversion tracking and retargeting for Facebook and Instagram ads."
  },
  {
    "testId": "smm-test-03",
    "question": "Which of the following is a social media ad format?",
    "options": ["Carousel ads", "Single image ads", "Video ads", "All of the above"],
    "correctOption": 3,
    "explanation": "All are common social media ad formats: carousel ads (multiple images/ videos), single image ads, and video ads."
  },
  {
    "testId": "smm-test-03",
    "question": "What is a social media ad campaign objective?",
    "options": [
      "The specific goal of a campaign, such as brand awareness, traffic, or conversions",
      "The budget of the campaign",
      "The duration of the campaign",
      "The creative design of the campaign"
    ],
    "correctOption": 0,
    "explanation": "Campaign objectives define the primary goal, such as awareness, engagement, traffic, or conversions, which guide targeting and optimization."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the best way to measure ROAS (Return on Ad Spend)?",
    "options": [
      "Revenue generated divided by ad spend",
      "Total sales divided by total ad impressions",
      "Total budget divided by total clicks",
      "Total revenue divided by total followers"
    ],
    "correctOption": 0,
    "explanation": "ROAS is calculated by dividing the revenue generated from ads by the total ad spend, measuring the profitability of campaigns."
  },
  {
    "testId": "smm-test-03",
    "question": "What is social media analytics?",
    "options": [
      "The process of collecting and analyzing data from social media to measure performance",
      "The process of creating content",
      "The process of managing ads",
      "The process of designing graphics"
    ],
    "correctOption": 0,
    "explanation": "Social media analytics involves tracking and analyzing data to measure performance, understand audience behavior, and inform strategy."
  },
  {
    "testId": "smm-test-03",
    "question": "Which of the following is a key metric for measuring social media ad success?",
    "options": ["Click-through rate (CTR)", "Impressions", "Cost per acquisition (CPA)", "All of the above"],
    "correctOption": 3,
    "explanation": "CTR, impressions, and CPA are all important metrics for evaluating the effectiveness of social media ads."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the significance of the engagement rate on social media?",
    "options": [
      "It measures the level of interaction relative to reach or impressions",
      "It only measures likes",
      "It only measures shares",
      "It measures the number of followers"
    ],
    "correctOption": 0,
    "explanation": "Engagement rate is calculated by dividing total engagement (likes, comments, shares) by total reach or impressions, indicating content performance."
  },
  {
    "testId": "smm-test-03",
    "question": "What is a call-to-action (CTA) in social media ads?",
    "options": [
      "A prompt that directs users to take a specific action, like 'Sign Up' or 'Shop Now'",
      "The brand's slogan",
      "The ad's headline",
      "The visual element of the ad"
    ],
    "correctOption": 0,
    "explanation": "A CTA in ads is a button or text that encourages users to take a specific action, such as making a purchase or visiting a website."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the role of a social media analytics dashboard?",
    "options": [
      "To provide a consolidated view of social media metrics and KPIs",
      "To create social media content",
      "To manage social media accounts",
      "To design social media ads"
    ],
    "correctOption": 0,
    "explanation": "An analytics dashboard aggregates data from multiple social platforms, providing a comprehensive view of performance metrics."
  },
  {
    "testId": "smm-test-03",
    "question": "What is the most important factor for successful social media advertising?",
    "options": [
      "Understanding the target audience and delivering relevant content",
      "Having the highest budget",
      "Using the most creative visuals",
      "Posting at random times"
    ],
    "correctOption": 0,
    "explanation": "Understanding your audience and delivering relevant, valuable content is the most critical factor for successful social media advertising."
  },
  {
    "testId": "smm-test-04",
    "question": "What is influencer marketing?",
    "options": [
      "A marketing strategy where brands partner with social media influencers to promote products or services",
      "Marketing through traditional media only",
      "Marketing through email campaigns",
      "Marketing through TV commercials"
    ],
    "correctOption": 0,
    "explanation": "Influencer marketing is a strategy where brands collaborate with social media influencers who have a dedicated following to promote products or services."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the difference between a micro-influencer and a macro-influencer?",
    "options": [
      "Micro-influencers have fewer followers (usually 10,000-100,000) but higher engagement; macro-influencers have larger audiences",
      "Macro-influencers have fewer followers; micro-influencers have larger audiences",
      "Both have the same number of followers",
      "Micro-influencers are paid more than macro-influencers"
    ],
    "correctOption": 0,
    "explanation": "Micro-influencers (10k-100k followers) often have higher engagement rates and niche audiences, while macro-influencers (100k+) have broader reach."
  },
  {
    "testId": "smm-test-04",
    "question": "What is a key benefit of working with micro-influencers?",
    "options": [
      "Higher engagement rates and more authentic connections with followers",
      "Lower cost and wider reach compared to macro-influencers",
      "Higher conversion rates than any other marketing channel",
      "Access to global audiences"
    ],
    "correctOption": 0,
    "explanation": "Micro-influencers often have more engaged and authentic relationships with their followers, leading to higher engagement and trust."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the purpose of influencer disclosure guidelines?",
    "options": [
      "To ensure that sponsored content is clearly labeled as advertising to maintain transparency",
      "To restrict influencer marketing",
      "To set influencer compensation rates",
      "To limit the number of brand collaborations"
    ],
    "correctOption": 0,
    "explanation": "Disclosure guidelines (like #ad or #sponsored) ensure that consumers are aware when content is paid promotion, maintaining transparency and trust."
  },
  {
    "testId": "smm-test-04",
    "question": "What is social commerce?",
    "options": [
      "The integration of e-commerce into social media platforms, allowing users to buy products directly from posts or pages",
      "Traditional offline shopping",
      "B2B sales on LinkedIn",
      "Email marketing campaigns"
    ],
    "correctOption": 0,
    "explanation": "Social commerce allows users to purchase products directly through social media platforms like Instagram Shops, Facebook Marketplace, or TikTok Shop."
  },
  {
    "testId": "smm-test-04",
    "question": "What is live streaming in social media marketing?",
    "options": [
      "Broadcasting real-time video content to engage with audiences interactively",
      "Creating pre-recorded videos",
      "Uploading images",
      "Writing blog posts"
    ],
    "correctOption": 0,
    "explanation": "Live streaming allows brands to interact with audiences in real-time, fostering engagement and authentic connection."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the role of chatbots in social media marketing?",
    "options": [
      "To automate customer service and engagement through AI-powered conversations",
      "To replace human customer service entirely",
      "To create content for social media",
      "To manage social media advertising"
    ],
    "correctOption": 0,
    "explanation": "Chatbots can handle common customer inquiries, provide instant responses, and improve user experience on social media platforms."
  },
  {
    "testId": "smm-test-04",
    "question": "What is social media crisis management?",
    "options": [
      "The process of handling and mitigating negative situations or backlash on social media",
      "The process of posting positive content",
      "The process of ignoring negative comments",
      "The process of deleting all social media accounts"
    ],
    "correctOption": 0,
    "explanation": "Crisis management involves quickly and effectively responding to negative situations on social media to protect the brand's reputation."
  },
  {
    "testId": "smm-test-04",
    "question": "What is user-generated content (UGC) strategy?",
    "options": [
      "Encouraging and leveraging content created by customers to build authenticity and community",
      "Creating all content in-house",
      "Buying content from agencies",
      "Using AI-generated content only"
    ],
    "correctOption": 0,
    "explanation": "UGC strategy involves encouraging customers to create and share content about the brand, increasing authenticity and trust."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the importance of brand authenticity on social media?",
    "options": [
      "It builds trust and loyalty among audiences, making them more likely to engage and convert",
      "It is not important for social media",
      "It only matters for large brands",
      "It only applies to product photos"
    ],
    "correctOption": 0,
    "explanation": "Authenticity builds trust with audiences, leading to stronger relationships, engagement, and long-term loyalty."
  },
  {
    "testId": "smm-test-04",
    "question": "What is a social media influencer campaign brief?",
    "options": [
      "A document that outlines the campaign goals, deliverables, timelines, and key messages for influencers",
      "A contract only",
      "A social media post",
      "A video script"
    ],
    "correctOption": 0,
    "explanation": "A campaign brief provides clear guidelines and expectations for influencers, ensuring alignment with brand goals."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the role of social listening tools in influencer marketing?",
    "options": [
      "To identify potential influencers, track brand mentions, and analyze campaign performance",
      "To only create content",
      "To only manage ads",
      "To only post on social media"
    ],
    "correctOption": 0,
    "explanation": "Social listening tools help identify relevant influencers, monitor brand sentiment, and measure campaign effectiveness."
  },
  {
    "testId": "smm-test-04",
    "question": "What is influencer fraud?",
    "options": [
      "The use of fake followers, engagement, or inflated metrics by influencers to appear more influential",
      "The use of real followers",
      "The use of high-quality content",
      "The use of organic engagement"
    ],
    "correctOption": 0,
    "explanation": "Influencer fraud involves deceptive practices like buying fake followers or engagement to inflate perceived influence and justify higher rates."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the difference between earned, owned, and paid media in social media?",
    "options": [
      "Earned media is organic mentions; owned media is content on brand channels; paid media is advertising",
      "Paid media is organic; earned media is advertising; owned media is content",
      "Owned media is organic; paid media is mentions; earned media is ads",
      "All are the same"
    ],
    "correctOption": 0,
    "explanation": "Earned media is organic exposure (e.g., mentions, shares); owned media is content on brand channels; paid media is advertising."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the significance of TikTok in social media marketing?",
    "options": [
      "It has a younger, highly engaged audience and short-form vertical video content",
      "It is only for entertainment, not marketing",
      "It is declining in popularity",
      "It only allows paid advertising"
    ],
    "correctOption": 0,
    "explanation": "TikTok's short-form video format and engaged youth audience make it a powerful platform for brand awareness and viral campaigns."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the purpose of social media giveaways and contests?",
    "options": [
      "To increase engagement, grow followers, and generate brand awareness",
      "To sell products directly",
      "To replace content marketing",
      "To avoid advertising"
    ],
    "correctOption": 0,
    "explanation": "Giveaways and contests encourage interaction, grow follower counts, and increase brand visibility at a relatively low cost."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the role of a social media influencer in a brand campaign?",
    "options": [
      "To promote the brand authentically to their followers and create relatable content",
      "To only post ads",
      "To ignore brand guidelines",
      "To avoid audience engagement"
    ],
    "correctOption": 0,
    "explanation": "Influencers should authentically promote the brand to their audience, creating content that resonates and encourages engagement."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the purpose of a social media influencer code of conduct?",
    "options": [
      "To set expectations for behavior, content, and professionalism in collaborations",
      "To restrict influencer creativity",
      "To reduce influencer pay",
      "To avoid any guidelines"
    ],
    "correctOption": 0,
    "explanation": "A code of conduct ensures that influencers represent the brand appropriately and adhere to professional standards."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the impact of influencer marketing on consumer purchasing decisions?",
    "options": [
      "It can significantly influence purchase decisions, especially among younger demographics",
      "It has no impact on purchase decisions",
      "It only affects B2B purchases",
      "It is less effective than TV ads"
    ],
    "correctOption": 0,
    "explanation": "Influencer marketing can have a strong impact on consumer purchasing decisions, particularly among Gen Z and Millennials."
  },
  {
    "testId": "smm-test-04",
    "question": "What is the future trend in social media marketing?",
    "options": [
      "Increased use of AI, AR, VR, and social commerce integration",
      "Decreased use of social media",
      "Return to traditional advertising only",
      "Reduction in video content"
    ],
    "correctOption": 0,
    "explanation": "Future trends include AI-driven personalization, augmented reality, virtual reality experiences, and deeper integration of social commerce."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"smm-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for smm');
} else {
  console.log('Questions for smm already exist or file format unexpected');
}
