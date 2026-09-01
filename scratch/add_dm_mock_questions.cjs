const fs = require('fs');

const questions = [
  {
    "testId": "dm-mock-01",
    "question": "What is digital marketing?",
    "options": [
      "The use of digital channels to promote products and services",
      "Marketing through traditional media like TV and radio",
      "Selling products only through physical stores",
      "Creating print advertisements"
    ],
    "correctOption": 0,
    "explanation": "Digital marketing is the practice of using digital channels such as search engines, social media, email, and websites to promote products and services."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a digital marketing channel?",
    "options": ["Search engines", "Social media platforms", "Email", "All of the above"],
    "correctOption": 3,
    "explanation": "Search engines, social media platforms, and email are all digital marketing channels used to reach and engage audiences."
  },
  {
    "testId": "dm-mock-01",
    "question": "What does SEO stand for in digital marketing?",
    "options": ["Search Engine Optimization", "Social Engagement Outreach", "Sales Execution Operations", "Site Enhancement Online"],
    "correctOption": 0,
    "explanation": "SEO stands for Search Engine Optimization, which is the practice of improving a website's visibility in organic search results."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the primary goal of Search Engine Marketing (SEM)?",
    "options": [
      "To drive targeted traffic through paid search ads",
      "To improve organic search rankings",
      "To build social media followers",
      "To create email campaigns"
    ],
    "correctOption": 0,
    "explanation": "SEM involves paid advertising on search engines (like Google Ads) to drive targeted, intent-driven traffic to a website."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is a PPC (Pay-Per-Click) model in digital advertising?",
    "options": [
      "Advertisers pay only when a user clicks on their ad",
      "Advertisers pay per thousand impressions",
      "Advertisers pay for every conversion",
      "Advertisers pay a fixed monthly fee"
    ],
    "correctOption": 0,
    "explanation": "PPC is a model where advertisers pay only when a user actually clicks on their ad, making it a performance-based advertising model."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a social media platform used for marketing?",
    "options": ["Instagram", "Facebook", "LinkedIn", "All of the above"],
    "correctOption": 3,
    "explanation": "Instagram, Facebook, and LinkedIn are all popular social media platforms used for marketing purposes."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the difference between organic and paid social media?",
    "options": [
      "Organic social media is free content; paid social media involves advertising",
      "Paid social media is free; organic social media involves advertising",
      "Both are free",
      "Both involve advertising"
    ],
    "correctOption": 0,
    "explanation": "Organic social media involves posting free content to your page; paid social media involves spending money to promote posts or run ads."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the purpose of email marketing?",
    "options": [
      "To build relationships with customers and drive conversions",
      "To send spam messages",
      "To replace social media marketing",
      "To only send promotional offers"
    ],
    "correctOption": 0,
    "explanation": "Email marketing is used to nurture leads, build relationships with customers, and drive conversions through targeted email campaigns."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the marketing funnel?",
    "options": [
      "A model that represents the customer journey from awareness to conversion",
      "A tool for measuring ad performance",
      "A social media strategy",
      "An email marketing template"
    ],
    "correctOption": 0,
    "explanation": "The marketing funnel (awareness → consideration → conversion → loyalty) represents the stages a customer goes through before making a purchase."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a key metric for measuring social media success?",
    "options": ["Engagement rate", "Bounce rate", "Page load time", "Server response time"],
    "correctOption": 0,
    "explanation": "Engagement rate measures interactions like likes, comments, and shares relative to reach or impressions, indicating content effectiveness."
  },
  {
    "testId": "dm-mock-01",
    "question": "What does CTR stand for in digital marketing?",
    "options": ["Click-Through Rate", "Conversion Tracking Ratio", "Customer Targeting Response", "Campaign Traffic Review"],
    "correctOption": 0,
    "explanation": "CTR (Click-Through Rate) measures the percentage of people who click on an ad or link compared to the total number of impressions."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the ideal conversion rate for an e-commerce website?",
    "options": ["1-3% is average", "10-15% is average", "50-60% is average", "100% is achievable"],
    "correctOption": 0,
    "explanation": "Average e-commerce conversion rates typically range from 1-3%, though this varies by industry and traffic source."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a content marketing tactic?",
    "options": ["Blog posts", "Infographics", "Videos", "All of the above"],
    "correctOption": 3,
    "explanation": "Content marketing involves creating and distributing valuable content like blog posts, infographics, and videos to attract and engage audiences."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the role of keywords in SEO?",
    "options": [
      "They help search engines understand the content and purpose of a page",
      "They determine the design of a website",
      "They affect the color scheme of a page",
      "They are only used for paid ads"
    ],
    "correctOption": 0,
    "explanation": "Keywords signal the topic and purpose of a page to search engines, helping them match the page to relevant user queries."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a long-tail keyword?",
    "options": ["shoes", "best running shoes for marathon", "buy shoes", "sports shoes"],
    "correctOption": 1,
    "explanation": "Long-tail keywords are longer, more specific phrases that have lower search volume but higher conversion potential, like 'best running shoes for marathon'."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the difference between a landing page and a homepage?",
    "options": [
      "A landing page is designed for a specific campaign; a homepage is the general entry point",
      "A homepage is for campaigns; a landing page is the main page",
      "Both are the same",
      "Landing pages are only for mobile devices"
    ],
    "correctOption": 0,
    "explanation": "A landing page is a standalone page created specifically for a marketing campaign, while the homepage is the primary page of a website."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is remarketing in digital marketing?",
    "options": [
      "Targeting users who have previously visited your website",
      "Targeting new users for the first time",
      "Targeting users based on age only",
      "Targeting users based on location only"
    ],
    "correctOption": 0,
    "explanation": "Remarketing (or retargeting) allows advertisers to show ads to users who have already visited their website but did not convert."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a digital marketing KPI?",
    "options": ["Impressions", "Clicks", "Conversions", "All of the above"],
    "correctOption": 3,
    "explanation": "Impressions, clicks, and conversions are all key performance indicators (KPIs) used to measure digital marketing success."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the purpose of a call-to-action (CTA)?",
    "options": [
      "To prompt the audience to take a specific action",
      "To provide general information",
      "To add decorative elements",
      "To replace the headline"
    ],
    "correctOption": 0,
    "explanation": "A CTA encourages users to take a specific action like 'Buy Now,' 'Sign Up,' or 'Learn More,' driving conversions."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the role of analytics in digital marketing?",
    "options": [
      "To measure, analyze, and optimize marketing performance",
      "To create ad creatives",
      "To design websites",
      "To manage social media accounts"
    ],
    "correctOption": 0,
    "explanation": "Analytics tools help measure campaign performance, understand audience behavior, and optimize strategies for better results."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which channel is most effective for B2B marketing?",
    "options": ["LinkedIn", "Instagram", "TikTok", "Snapchat"],
    "correctOption": 0,
    "explanation": "LinkedIn is widely considered the most effective platform for B2B marketing due to its professional user base and targeting capabilities."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is A/B testing in digital marketing?",
    "options": [
      "Comparing two versions of a marketing asset to see which performs better",
      "Testing two different marketing channels",
      "Testing on two different days",
      "Testing on two different browsers"
    ],
    "correctOption": 0,
    "explanation": "A/B testing compares two variations (e.g., headlines, images, CTAs) to identify which version drives better results."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the purpose of a marketing strategy?",
    "options": [
      "To define goals, target audience, and tactical plans",
      "To only create ads",
      "To replace sales efforts",
      "To manage employee performance"
    ],
    "correctOption": 0,
    "explanation": "A marketing strategy outlines the goals, target audience, positioning, and tactical plans to achieve business objectives."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is an example of an email marketing metric?",
    "options": ["Open rate", "Click-through rate", "Unsubscribe rate", "All of the above"],
    "correctOption": 3,
    "explanation": "Open rate, click-through rate, and unsubscribe rate are all key metrics used to evaluate email marketing performance."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the role of content in digital marketing?",
    "options": [
      "To attract, engage, and convert target audiences",
      "To only entertain audiences",
      "To replace social media",
      "To only provide product specifications"
    ],
    "correctOption": 0,
    "explanation": "Content is used throughout the marketing funnel to attract attention, engage users, and drive conversions."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is a digital marketing campaign?",
    "options": [
      "A coordinated series of marketing activities across digital channels",
      "A single ad",
      "A social media post",
      "An email sent once"
    ],
    "correctOption": 0,
    "explanation": "A digital marketing campaign is a coordinated series of activities and promotions using digital channels to achieve specific goals."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a paid search ad platform?",
    "options": ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
    "correctOption": 0,
    "explanation": "Google Ads is the leading paid search (PPC) platform where businesses bid on keywords to show ads in search results."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the main advantage of organic search traffic?",
    "options": [
      "It is free and builds long-term credibility",
      "It is faster than paid traffic",
      "It generates immediate results",
      "It requires no effort"
    ],
    "correctOption": 0,
    "explanation": "Organic search traffic is free and builds long-term credibility, though it requires ongoing SEO efforts to maintain."
  },
  {
    "testId": "dm-mock-01",
    "question": "What is the role of influencers in digital marketing?",
    "options": [
      "To promote products to their engaged audience",
      "To design websites",
      "To manage ad campaigns",
      "To write email content"
    ],
    "correctOption": 0,
    "explanation": "Influencers promote brands to their dedicated followers through authentic content, helping build trust and reach."
  },
  {
    "testId": "dm-mock-01",
    "question": "Which of the following is a metric for measuring brand awareness?",
    "options": ["Impressions", "Reach", "Engagement rate", "All of the above"],
    "correctOption": 3,
    "explanation": "Impressions, reach, and engagement all help measure how well your brand is being seen and noticed."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is Google Analytics 4 (GA4) primarily used for?",
    "options": [
      "To track and analyze website and app user behavior",
      "To create and run Google Ads",
      "To design websites",
      "To manage social media accounts"
    ],
    "correctOption": 0,
    "explanation": "GA4 is the latest version of Google Analytics that tracks user interactions across websites and apps, providing insights into audience behavior."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is a 'conversion' in digital marketing analytics?",
    "options": [
      "When a user completes a desired action (e.g., purchase, sign-up)",
      "When a user clicks on an ad",
      "When a user views a page",
      "When a user shares content"
    ],
    "correctOption": 0,
    "explanation": "A conversion is a completed action that is valuable to your business, such as a purchase, form submission, or app download."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between a metric and a KPI?",
    "options": [
      "Metrics are raw data; KPIs are metrics tied to business objectives",
      "KPIs are raw data; Metrics are tied to business objectives",
      "Both are the same",
      "Metrics are for reporting; KPIs are for strategy only"
    ],
    "correctOption": 0,
    "explanation": "Metrics are quantifiable measurements; KPIs are metrics that are strategically important and directly tied to business goals."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is attribution modeling in digital marketing analytics?",
    "options": [
      "A framework for assigning credit to different marketing touchpoints in the conversion path",
      "A model for measuring brand awareness",
      "A tool for social media scheduling",
      "A method for email segmentation"
    ],
    "correctOption": 0,
    "explanation": "Attribution modeling analyzes the customer journey and assigns credit to each touchpoint (e.g., ad, email, social post) that led to conversion."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is first-party data in digital marketing?",
    "options": [
      "Data collected directly from your own customers and audience",
      "Data purchased from third-party providers",
      "Publicly available data",
      "Data from competitors"
    ],
    "correctOption": 0,
    "explanation": "First-party data is information you collect directly from your audience (e.g., website behavior, email interactions, purchase history), making it the most valuable and reliable."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the purpose of Google Search Console?",
    "options": [
      "To monitor and troubleshoot how your site performs in Google search results",
      "To run Google Ads campaigns",
      "To track social media performance",
      "To analyze email marketing performance"
    ],
    "correctOption": 0,
    "explanation": "Google Search Console provides insights into your website's organic search performance, including indexing issues, search queries, and backlinks."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between single-channel and multi-channel attribution?",
    "options": [
      "Single-channel gives all credit to one channel; multi-channel distributes credit across channels",
      "Multi-channel gives all credit to one channel; single-channel distributes credit",
      "Both give credit to one channel",
      "Both distribute credit across channels"
    ],
    "correctOption": 0,
    "explanation": "Single-channel attribution credits one touchpoint, while multi-channel attribution distributes credit across multiple touchpoints in the customer journey."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is data-driven attribution in Google Analytics?",
    "options": [
      "Using machine learning to distribute conversion credit based on actual user behavior",
      "Manual assignment of conversion credit",
      "Assigning equal credit to all touchpoints",
      "Assigning credit only to the last click"
    ],
    "correctOption": 0,
    "explanation": "Data-driven attribution uses machine learning to analyze actual user behavior and distribute conversion credit across touchpoints."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is Google Tag Manager (GTM) used for?",
    "options": [
      "To manage and deploy tracking codes without modifying website code",
      "To create Google Ads",
      "To design websites",
      "To manage social media accounts"
    ],
    "correctOption": 0,
    "explanation": "GTM allows marketers and developers to add, update, and manage tracking codes (tags) on a website without editing the source code."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between UA (Universal Analytics) and GA4?",
    "options": [
      "UA is session-based; GA4 is event-based and cross-device",
      "GA4 is session-based; UA is event-based",
      "Both are session-based",
      "Both are event-based"
    ],
    "correctOption": 0,
    "explanation": "Universal Analytics (UA) focused on sessions, while GA4 is event-based and provides better cross-device tracking."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the best metric for measuring conversion performance across channels?",
    "options": ["ROAS", "CPA", "Conversion Rate", "All of the above"],
    "correctOption": 3,
    "explanation": "ROAS, CPA, and Conversion Rate all provide valuable insights into conversion performance across channels."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is a customer journey map?",
    "options": [
      "A visual representation of all customer interactions with the brand",
      "A geographical map of customer locations",
      "A marketing plan",
      "A sales forecast"
    ],
    "correctOption": 0,
    "explanation": "A customer journey map visualizes all touchpoints and interactions a customer has with a brand from awareness to post-purchase."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the role of A/B testing in CRO?",
    "options": [
      "To test variations of a webpage to improve conversion rates",
      "To test marketing channels",
      "To test budget allocations",
      "To test email templates only"
    ],
    "correctOption": 0,
    "explanation": "A/B testing compares different versions of a webpage to identify the best-performing variation and improve conversion rates."
  },
  {
    "testId": "dm-mock-02",
    "question": "What does CRO stand for in digital marketing?",
    "options": ["Conversion Rate Optimization", "Click-Through Rate Optimization", "Customer Retention Operations", "Campaign Resource Optimization"],
    "correctOption": 0,
    "explanation": "CRO stands for Conversion Rate Optimization, which is the process of improving the percentage of visitors who complete a desired action."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the importance of UX (User Experience) in digital marketing?",
    "options": [
      "Good UX improves conversion rates and customer satisfaction",
      "UX only affects website design",
      "UX is not related to marketing",
      "UX only affects mobile users"
    ],
    "correctOption": 0,
    "explanation": "A good user experience reduces friction, builds trust, and increases the likelihood of conversions."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is omnichannel marketing?",
    "options": [
      "Creating a seamless customer experience across all channels",
      "Marketing on only one channel",
      "Using only social media",
      "Using only email marketing"
    ],
    "correctOption": 0,
    "explanation": "Omnichannel marketing integrates all marketing channels to provide a unified and consistent customer experience."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the role of personalization in digital marketing?",
    "options": [
      "To deliver tailored content and offers to individual users",
      "To send the same message to everyone",
      "To reduce marketing costs",
      "To increase ad spend"
    ],
    "correctOption": 0,
    "explanation": "Personalization uses data to deliver customized experiences, messages, and offers that are relevant to individual users."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the purpose of marketing automation?",
    "options": [
      "To automate repetitive marketing tasks and nurture leads",
      "To replace all manual marketing work",
      "To design websites",
      "To create social media content"
    ],
    "correctOption": 0,
    "explanation": "Marketing automation uses software to automate repetitive tasks like email sequences, lead scoring, and campaign management to improve efficiency."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is a drip campaign in email marketing?",
    "options": [
      "A series of automated emails sent based on user behavior or timing",
      "A single email blast",
      "A social media campaign",
      "A paid search campaign"
    ],
    "correctOption": 0,
    "explanation": "A drip campaign is a set of automated emails sent at predetermined intervals or triggered by user actions to nurture leads."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is lead scoring in marketing automation?",
    "options": [
      "A method to rank leads based on their likelihood to convert",
      "A scoring system for ads",
      "A ranking of social media posts",
      "A method for measuring campaign ROI"
    ],
    "correctOption": 0,
    "explanation": "Lead scoring assigns points to leads based on their behavior and profile, helping identify high-value prospects."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between active and passive audiences in social media?",
    "options": [
      "Active audiences engage with content; passive audiences only consume",
      "Passive audiences engage; active audiences only consume",
      "Both are the same",
      "Active audiences are on social media; passive are not"
    ],
    "correctOption": 0,
    "explanation": "Active audiences actively engage through comments and shares; passive audiences only consume content without interacting."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the importance of the 'customer lifetime value' (CLV) metric?",
    "options": [
      "It measures the total revenue a customer generates over their lifetime",
      "It measures the first purchase value",
      "It measures campaign efficiency",
      "It measures brand awareness"
    ],
    "correctOption": 0,
    "explanation": "CLV predicts the total profit a business can expect from a customer over the entire relationship, helping prioritize marketing efforts."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between first-click and last-click attribution?",
    "options": [
      "First-click credits the initial touchpoint; last-click credits the final touchpoint before conversion",
      "Last-click credits the first touchpoint; first-click credits the last touchpoint",
      "Both credit the same touchpoint",
      "Neither credits any touchpoint"
    ],
    "correctOption": 0,
    "explanation": "First-click attribution gives all credit to the first touchpoint that drove awareness; last-click gives all credit to the final touchpoint that drove conversion."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the role of data in digital marketing?",
    "options": [
      "To inform decisions, measure performance, and improve strategies",
      "To replace creative thinking",
      "To only track spending",
      "To make decisions automated"
    ],
    "correctOption": 0,
    "explanation": "Data is essential for understanding audience behavior, measuring campaign effectiveness, and making informed decisions to optimize marketing efforts."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the concept of 'zero-click searches'?",
    "options": [
      "Search queries where the answer is displayed on the SERP without clicking",
      "Searches with no results",
      "Searches with no keywords",
      "Searches with no clicks on ads"
    ],
    "correctOption": 0,
    "explanation": "Zero-click searches are search queries where the user finds the answer directly in featured snippets, knowledge panels, or other SERP features without clicking."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the purpose of a digital marketing dashboard?",
    "options": [
      "To consolidate and visualize key marketing metrics in one place",
      "To design marketing strategies",
      "To create marketing content",
      "To manage marketing teams"
    ],
    "correctOption": 0,
    "explanation": "A dashboard aggregates data from multiple sources and presents key metrics visually for monitoring and analysis."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is 'share of voice' (SOV) in digital marketing?",
    "options": [
      "The percentage of brand mentions compared to competitors",
      "The percentage of ad budget used",
      "The number of social media followers",
      "The ranking position in search results"
    ],
    "correctOption": 0,
    "explanation": "SOV measures how much your brand is being mentioned or appearing compared to competitors in a given market or channel."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between a target audience and a target market?",
    "options": [
      "Target audience is the specific group for marketing; target market is the overall market segment",
      "Target market is the specific group; target audience is the overall market",
      "Both are the same",
      "Target market is for B2B; target audience is for B2C"
    ],
    "correctOption": 0,
    "explanation": "The target market is the broader segment a company wants to serve, while the target audience is the specific group for a particular campaign."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the role of sentiment analysis in social media marketing?",
    "options": [
      "To understand whether brand mentions are positive, neutral, or negative",
      "To analyze ad performance",
      "To track follower growth",
      "To measure engagement rates"
    ],
    "correctOption": 0,
    "explanation": "Sentiment analysis uses AI to analyze the emotion behind social media mentions, helping understand brand perception."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the concept of 'dark social' in digital marketing?",
    "options": [
      "Traffic from sharing through private channels (e.g., email, WhatsApp) that is not trackable",
      "Illegal social media activity",
      "Social media marketing without ads",
      "Traffic from dark mode browsers"
    ],
    "correctOption": 0,
    "explanation": "Dark social refers to social sharing through private communication channels that is not easily trackable by standard analytics, making it challenging to measure."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the purpose of a competitive analysis in digital marketing?",
    "options": [
      "To understand competitors' strategies and identify opportunities",
      "To copy competitors' content",
      "To block competitors",
      "To avoid competitor content"
    ],
    "correctOption": 0,
    "explanation": "Competitive analysis helps identify what your competitors are doing well, where their weaknesses are, and how you can differentiate your strategy."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the concept of 'churn rate' in customer retention?",
    "options": [
      "The percentage of customers who stop using a product or service over time",
      "The percentage of new customers acquired",
      "The rate of ad clicks",
      "The rate of email opens"
    ],
    "correctOption": 0,
    "explanation": "Churn rate measures how many customers leave or cancel their subscription over a given period, indicating customer retention."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the importance of mobile optimization in digital marketing?",
    "options": [
      "Mobile devices account for a significant portion of web traffic and user engagement",
      "Mobile optimization is only for apps",
      "Mobile devices are no longer important",
      "Mobile optimization only affects email marketing"
    ],
    "correctOption": 0,
    "explanation": "Mobile optimization is essential because more than half of web traffic comes from mobile devices, and user experience impacts conversion."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the purpose of social proof in digital marketing?",
    "options": [
      "To build trust through reviews, testimonials, and user-generated content",
      "To prove social media success",
      "To validate ad spend",
      "To prove brand awareness"
    ],
    "correctOption": 0,
    "explanation": "Social proof (reviews, testimonials, UGC) builds trust and credibility by showing that other people have had positive experiences."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the difference between content syndication and content repurposing?",
    "options": [
      "Content syndication distributes content to third-party platforms; repurposing adapts content for different formats",
      "Content repurposing distributes to third-party; syndication adapts formats",
      "Both are the same",
      "Both only involve blog content"
    ],
    "correctOption": 0,
    "explanation": "Syndication involves publishing content on other platforms; repurposing involves adapting existing content into different formats (e.g., blog to video)."
  },
  {
    "testId": "dm-mock-02",
    "question": "What is the impact of AI on digital marketing?",
    "options": [
      "AI enables personalization, predictive analytics, and campaign automation at scale",
      "AI will replace all marketers",
      "AI only affects SEO",
      "AI is not relevant to digital marketing"
    ],
    "correctOption": 0,
    "explanation": "AI is transforming digital marketing through automated bidding, personalization, content generation, and predictive analytics."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"dm-mock-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for dm-full-mock');
} else {
  console.log('Questions for dm-full-mock already exist or file format unexpected');
}
