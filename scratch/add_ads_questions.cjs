const fs = require('fs');

const questions = [
  {
    "testId": "ads-test-01",
    "question": "What does Google Ads primarily use to determine which ad to show in search results?",
    "options": ["Ad Rank", "Bid amount only", "Ad budget", "Number of keywords"],
    "correctOption": 0,
    "explanation": "Google Ads uses Ad Rank, which is calculated by multiplying your bid by your Quality Score, to determine ad position."
  },
  {
    "testId": "ads-test-01",
    "question": "Which of the following is NOT a component of Google Ads Quality Score?",
    "options": ["Expected Click-Through Rate", "Ad Relevance", "Landing Page Experience", "Ad Budget"],
    "correctOption": 3,
    "explanation": "Quality Score is determined by Expected CTR, Ad Relevance, and Landing Page Experience. Ad Budget does not affect Quality Score.[reference:0][reference:1]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the primary purpose of negative keywords in Google Ads?",
    "options": [
      "To reduce irrelevant traffic and lower costs",
      "To increase ad rank",
      "To improve click-through rate",
      "To increase conversion rate"
    ],
    "correctOption": 0,
    "explanation": "Negative keywords prevent your ads from showing on searches that are not relevant to your business, reducing wasted spend.[reference:2][reference:3]"
  },
  {
    "testId": "ads-test-01",
    "question": "What does CPC stand for in Google Ads?",
    "options": ["Cost Per Click", "Cost Per Conversion", "Cost Per Impression", "Click Per Cost"],
    "correctOption": 0,
    "explanation": "CPC stands for Cost Per Click, which is the amount you pay each time a user clicks on your ad.[reference:4]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which Google Ads campaign type is best for promoting a new mobile app?",
    "options": ["Search Campaign", "Display Campaign", "App Campaign", "Shopping Campaign"],
    "correctOption": 2,
    "explanation": "App campaigns are specifically designed to promote app installs and user engagement across Google's network.[reference:5]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the correct hierarchy of a Google Ads account?",
    "options": [
      "Account → Campaign → Ad Group → Ads/Keywords",
      "Account → Ad Group → Campaign → Ads/Keywords",
      "Campaign → Account → Ad Group → Ads/Keywords",
      "Account → Campaign → Ads → Ad Group"
    ],
    "correctOption": 0,
    "explanation": "The Google Ads hierarchy is: Account → Campaign → Ad Group → Ads/Keywords.[reference:6]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which keyword match type triggers the most search queries?",
    "options": ["Broad Match", "Phrase Match", "Exact Match", "Modified Broad Match"],
    "correctOption": 0,
    "explanation": "Broad match triggers the widest range of search queries, including synonyms and related terms.[reference:7]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the main benefit of using ad extensions?",
    "options": [
      "They increase ad visibility and click-through rate",
      "They reduce the cost per click",
      "They improve Quality Score directly",
      "They increase the number of keywords"
    ],
    "correctOption": 0,
    "explanation": "Ad extensions provide additional information and increase the size of your ads, making them more visible and improving CTR.[reference:8]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which of the following is a valid Google Ads bidding strategy for maximizing conversions?",
    "options": ["Maximize Conversions", "Manual CPC", "Target Impression Share", "Maximize Clicks"],
    "correctOption": 0,
    "explanation": "Maximize Conversions is a Smart Bidding strategy that automatically sets bids to get the most conversions within your budget.[reference:9]"
  },
  {
    "testId": "ads-test-01",
    "question": "What does CPM stand for in Google Ads?",
    "options": ["Cost Per Mille (thousand impressions)", "Cost Per Minute", "Cost Per Month", "Cost Per Marketing"],
    "correctOption": 0,
    "explanation": "CPM stands for Cost Per Mille, which is the cost for 1,000 ad impressions.[reference:10]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which of the following is an example of an ad extension?",
    "options": ["Sitelink Extension", "Call Extension", "Location Extension", "All of the above"],
    "correctOption": 3,
    "explanation": "Sitelink, Call, and Location extensions are all types of ad extensions that enhance your ads.[reference:11]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the Quality Score score range in Google Ads?",
    "options": ["1-10", "0-100", "1-5", "0-10"],
    "correctOption": 0,
    "explanation": "Quality Score is measured on a scale from 1 to 10, with 10 being the highest.[reference:12]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which campaign type is best for increasing brand awareness through visual ads on partner websites?",
    "options": ["Search Campaign", "Display Campaign", "Shopping Campaign", "Video Campaign"],
    "correctOption": 1,
    "explanation": "Display campaigns show image and text ads on the Google Display Network, which includes millions of partner websites.[reference:13]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the difference between Search and Display campaigns?",
    "options": [
      "Search campaigns show text ads on search results; Display campaigns show visual ads on partner websites",
      "Search campaigns are for mobile; Display campaigns are for desktop",
      "Search campaigns are cheaper than Display campaigns",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Search campaigns target users actively searching for keywords, while Display campaigns target users based on interests and demographics across partner sites.[reference:14]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which Google Ads tool is used to research keywords and their search volume?",
    "options": ["Keyword Planner", "Google Analytics", "Search Console", "Tag Manager"],
    "correctOption": 0,
    "explanation": "Keyword Planner helps advertisers research keywords, estimate search volume, and plan their campaigns.[reference:15]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is a Responsive Search Ad in Google Ads?",
    "options": [
      "An ad that automatically adjusts its headline and description to match the user's search query",
      "An ad that only works on mobile devices",
      "An ad that uses only images",
      "An ad that has a fixed headline"
    ],
    "correctOption": 0,
    "explanation": "Responsive Search Ads automatically test different combinations of headlines and descriptions to show the best-performing version."
  },
  {
    "testId": "ads-test-01",
    "question": "What is the primary purpose of Google Ads' conversion tracking?",
    "options": [
      "To measure and track user actions that are valuable to your business",
      "To track the number of ad impressions",
      "To measure the ad's click-through rate",
      "To track the ad's position"
    ],
    "correctOption": 0,
    "explanation": "Conversion tracking allows you to see what happens after a user interacts with your ad, such as purchases, sign-ups, or downloads."
  },
  {
    "testId": "ads-test-01",
    "question": "Which of the following factors directly impacts Ad Rank in Google Ads?",
    "options": ["Bid amount", "Quality Score", "Ad extensions", "All of the above"],
    "correctOption": 3,
    "explanation": "Ad Rank is determined by your bid amount, Quality Score, and the expected impact of ad extensions and other ad formats."
  },
  {
    "testId": "ads-test-01",
    "question": "What is remarketing in Google Ads?",
    "options": [
      "Targeting users who have previously visited your website",
      "Targeting new users for the first time",
      "Targeting users in a specific location",
      "Targeting users based on their age"
    ],
    "correctOption": 0,
    "explanation": "Remarketing allows you to show ads to users who have already visited your website or engaged with your brand.[reference:16][reference:17]"
  },
  {
    "testId": "ads-test-01",
    "question": "Which of the following is NOT a valid Google Ads campaign type?",
    "options": ["Search", "Display", "Social Media", "Shopping"],
    "correctOption": 2,
    "explanation": "Social Media is not a Google Ads campaign type. Google Ads offers Search, Display, Shopping, Video, App, and Performance Max campaigns.[reference:18]"
  },
  {
    "testId": "ads-test-01",
    "question": "What is the 'Learning Phase' in Google Ads?",
    "options": [
      "A period when Google Ads optimizes your campaign after significant changes",
      "A training course for advertisers",
      "The initial setup phase of a campaign",
      "A period when ads are not shown"
    ],
    "correctOption": 0,
    "explanation": "The Learning Phase occurs when Google Ads is gathering data and optimizing your campaign after a significant change."
  },
  {
    "testId": "ads-test-01",
    "question": "What does 'ROAS' stand for in Google Ads?",
    "options": ["Return On Ad Spend", "Rate Of Ad Sales", "Return On Advertising Strategy", "Reach Of Ad Spend"],
    "correctOption": 0,
    "explanation": "ROAS stands for Return On Ad Spend, which is calculated as conversion value divided by ad cost.[reference:19]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which platform is part of the Meta Ads ecosystem?",
    "options": ["YouTube", "Instagram", "Twitter", "LinkedIn"],
    "correctOption": 1,
    "explanation": "Instagram is part of the Meta ecosystem. Facebook, Instagram, Messenger, and Audience Network are all Meta platforms.[reference:20][reference:21]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is the correct hierarchy of a Meta (Facebook) Ads account?",
    "options": [
      "Account → Campaign → Ad Set → Ad",
      "Account → Ad Set → Campaign → Ad",
      "Campaign → Account → Ad Set → Ad",
      "Account → Campaign → Ad → Ad Set"
    ],
    "correctOption": 0,
    "explanation": "The Meta Ads hierarchy is: Account → Campaign → Ad Set → Ad.[reference:22][reference:23]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is a Facebook Pixel used for?",
    "options": [
      "To track user behavior and optimize ad performance",
      "To design ad creatives",
      "To manage ad budgets",
      "To create ad copy"
    ],
    "correctOption": 0,
    "explanation": "The Facebook Pixel is a code snippet that tracks user actions on your website, enabling conversion tracking and ad optimization.[reference:24][reference:25]"
  },
  {
    "testId": "ads-test-02",
    "question": "What does CPC stand for in Facebook Ads?",
    "options": ["Cost Per Click", "Cost Per Conversion", "Campaign Per Click", "Cost Per Campaign"],
    "correctOption": 0,
    "explanation": "CPC stands for Cost Per Click, which is the amount you pay each time someone clicks on your ad.[reference:26][reference:27]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which of the following is a Meta Ads objective?",
    "options": ["Brand Awareness", "Traffic", "Conversions", "All of the above"],
    "correctOption": 3,
    "explanation": "Meta Ads offers multiple objectives across three categories: Awareness (Brand Awareness, Reach), Consideration (Traffic, Engagement, App Installs), and Conversion (Conversions, Catalog Sales).[reference:28]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is a Custom Audience in Meta Ads?",
    "options": [
      "An audience created from your own customer data",
      "An audience created by Meta's algorithm",
      "An audience based on interests",
      "An audience based on location"
    ],
    "correctOption": 0,
    "explanation": "Custom Audiences are created from your own data sources, such as website visitors, customer email lists, or app users.[reference:29][reference:30]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is a Lookalike (Similar) Audience in Meta Ads?",
    "options": [
      "An audience that shares characteristics with your existing customers",
      "An audience based on interests only",
      "An audience of random users",
      "An audience of your competitors' followers"
    ],
    "correctOption": 0,
    "explanation": "Lookalike Audiences are created by finding new people who are similar to your existing best customers.[reference:31][reference:32]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which ad format allows users to swipe through multiple images or videos?",
    "options": ["Carousel Ad", "Single Image Ad", "Video Ad", "Collection Ad"],
    "correctOption": 0,
    "explanation": "Carousel ads allow multiple images or videos in a single ad that users can swipe through.[reference:33]"
  },
  {
    "testId": "ads-test-02",
    "question": "Where should the Facebook Pixel code be placed on a website?",
    "options": ["In the <head> section", "In the <footer> section", "In the <body> section", "Anywhere is fine"],
    "correctOption": 0,
    "explanation": "The Facebook Pixel should be placed in the <head> section of your website to ensure it loads before other content.[reference:34]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is the primary purpose of the 'Learning Phase' in Meta Ads?",
    "options": [
      "To allow the system to gather data and optimize ad delivery",
      "To train advertisers on the platform",
      "To pause ads temporarily",
      "To test ad creatives manually"
    ],
    "correctOption": 0,
    "explanation": "During the Learning Phase, Meta's system gathers data to optimize your ad delivery. It typically requires about 50 conversions.[reference:35]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which of the following is NOT a Meta Ads audience type?",
    "options": ["Core Audience", "Custom Audience", "Lookalike Audience", "Search Audience"],
    "correctOption": 3,
    "explanation": "Search Audience is not a Meta Ads audience type. Meta offers Core, Custom, and Lookalike audiences.[reference:36]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is the role of Meta Business Manager (BM)?",
    "options": [
      "To centrally manage ad accounts, pixels, pages, and user permissions",
      "To create ad creatives",
      "To analyze ad performance",
      "To design websites"
    ],
    "correctOption": 0,
    "explanation": "Business Manager is a tool for managing multiple Meta assets including ad accounts, pages, pixels, and user access.[reference:37]"
  },
  {
    "testId": "ads-test-02",
    "question": "What does CPM measure in Facebook Ads?",
    "options": ["Cost Per 1,000 Impressions", "Cost Per 100 Impressions", "Cost Per 10,000 Impressions", "Cost Per Click"],
    "correctOption": 0,
    "explanation": "CPM stands for Cost Per Mille (1,000 impressions), measuring the cost for 1,000 ad views.[reference:38]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which objective is best for an e-commerce business wanting to drive sales?",
    "options": ["Conversions", "Brand Awareness", "Traffic", "Engagement"],
    "correctOption": 0,
    "explanation": "The Conversions objective is optimized to drive specific actions like purchases, making it ideal for e-commerce.[reference:39]"
  },
  {
    "testId": "ads-test-02",
    "question": "What is the difference between a Campaign and an Ad Set in Meta Ads?",
    "options": [
      "Campaign sets the objective; Ad Set defines targeting, budget, and schedule",
      "Ad Set sets the objective; Campaign defines targeting",
      "Both set the same things",
      "Campaign is for ads; Ad Set is for creatives"
    ],
    "correctOption": 0,
    "explanation": "Campaigns define the overall objective. Ad Sets define the audience, placement, budget, and schedule for your ads.[reference:40]"
  },
  {
    "testId": "ads-test-02",
    "question": "Which Meta Ads format is best for showcasing a range of products?",
    "options": ["Carousel Ad", "Collection Ad", "Single Image Ad", "Video Ad"],
    "correctOption": 0,
    "explanation": "Carousel ads allow you to showcase multiple products or features in a single ad, making them ideal for product catalogs."
  },
  {
    "testId": "ads-test-02",
    "question": "What is a 'CTA' in Facebook Ads?",
    "options": ["Call To Action", "Click Through Analysis", "Campaign Target Assessment", "Cost Tracking Application"],
    "correctOption": 0,
    "explanation": "CTA stands for Call To Action, which is a button in ads that prompts users to take a specific action like 'Shop Now' or 'Sign Up'.[reference:41]"
  },
  {
    "testId": "ads-test-03",
    "question": "What are the two types of value-based Smart Bidding strategies in Google Ads?",
    "options": [
      "Maximize Conversion Value & Target ROAS",
      "Maximize Clicks & Target Impression Share",
      "Target CPA & Enhanced CPC",
      "Manual CPC & Maximize Conversions"
    ],
    "correctOption": 0,
    "explanation": "Value-based Smart Bidding strategies include Maximize Conversion Value and Target ROAS, which focus on conversion value rather than volume.[reference:42]"
  },
  {
    "testId": "ads-test-03",
    "question": "Which three factors impact a Search ad's auction-time ad quality?",
    "options": [
      "Expected CTR, Ad Relevance, Landing Page Experience",
      "Bid amount, Budget, Ad extensions",
      "Keywords, Ad copy, Image quality",
      "Location, Device, Time of day"
    ],
    "correctOption": 0,
    "explanation": "The three factors that impact ad quality at auction time are Expected Click-Through Rate, Ad Relevance, and Landing Page Experience.[reference:43][reference:44]"
  },
  {
    "testId": "ads-test-03",
    "question": "What is the purpose of Google Ads Optimization Score?",
    "options": [
      "To provide recommendations to improve campaign performance",
      "To calculate the Quality Score",
      "To determine ad rank",
      "To set the campaign budget"
    ],
    "correctOption": 0,
    "explanation": "Optimization Score provides personalized recommendations to help improve your campaign performance, with over 50 recommendations available.[reference:45]"
  },
  {
    "testId": "ads-test-03",
    "question": "When would you use Performance Max campaigns vs standard Search campaigns?",
    "options": [
      "Performance Max for multi-channel automation; Search for text ads on search results",
      "Performance Max for search only; Search for display only",
      "Both are the same",
      "Search is automated; Performance Max is manual"
    ],
    "correctOption": 0,
    "explanation": "Performance Max campaigns use automation to show ads across all Google channels, while Search campaigns focus specifically on search results.[reference:46]"
  },
  {
    "testId": "ads-test-03",
    "question": "What is the difference between Target CPA and Maximize Conversions bidding?",
    "options": [
      "Target CPA sets a specific cost per conversion target; Maximize Conversions aims for the most conversions within budget",
      "Maximize Conversions sets a CPA target; Target CPA does not",
      "Both are the same",
      "Target CPA is for search only; Maximize Conversions is for display only"
    ],
    "correctOption": 0,
    "explanation": "Target CPA sets a specific cost-per-acquisition goal, while Maximize Conversions automatically sets bids to get the most conversions within your budget."
  },
  {
    "testId": "ads-test-03",
    "question": "How does Google Ads generate Responsive Search Ads?",
    "options": [
      "It automatically tests combinations of headlines and descriptions to find the best-performing version",
      "It generates ads from a single headline",
      "It uses only one description",
      "It requires manual A/B testing"
    ],
    "correctOption": 0,
    "explanation": "Responsive Search Ads combine multiple headlines and descriptions, and Google automatically tests different combinations to optimize performance."
  },
  {
    "testId": "ads-test-03",
    "question": "What is the recommended number of ads per ad group in Google Ads?",
    "options": ["3-5 responsive ads", "1 ad", "10-15 ads", "No limit"],
    "correctOption": 0,
    "explanation": "Having 3-5 responsive search ads in an ad group allows Google to test different combinations for optimal performance.[reference:47]"
  },
  {
    "testId": "ads-test-03",
    "question": "Which of the following is NOT a factor that changes an account's optimization score?",
    "options": ["Bid strategy", "Budget", "Ad extensions", "Industry average"],
    "correctOption": 3,
    "explanation": "Optimization score changes based on bid strategy, budget, keywords, ads, and extensions, but not on industry averages.[reference:48]"
  },
  {
    "testId": "ads-test-03",
    "question": "What is the primary benefit of using Smart Bidding in Google Ads?",
    "options": [
      "Automated bid optimization based on real-time signals",
      "Lower costs guaranteed",
      "More manual control",
      "Simpler setup"
    ],
    "correctOption": 0,
    "explanation": "Smart Bidding uses machine learning to automatically optimize bids based on a wide range of signals like device, location, time of day, and browser."
  },
  {
    "testId": "ads-test-03",
    "question": "How does broad match with Smart Bidding work in Google Ads?",
    "options": [
      "Broad match shows ads on related searches; Smart Bidding optimizes bids for conversions",
      "Broad match limits searches; Smart Bidding is not compatible",
      "Broad match is only for display ads",
      "Smart Bidding replaces broad match"
    ],
    "correctOption": 0,
    "explanation": "Broad match with Smart Bidding allows you to reach a wide audience, and Smart Bidding automatically adjusts bids to maximize conversions."
  },
  {
    "testId": "ads-test-03",
    "question": "What is Google Ads' 'Ad Strength' indicator for Responsive Search Ads?",
    "options": [
      "A rating that shows how well your ad is optimized for performance",
      "A rating of your Quality Score",
      "A measure of your ad spend",
      "A ranking of your competitors"
    ],
    "correctOption": 0,
    "explanation": "Ad Strength provides feedback on the relevance, quantity, and diversity of your headlines and descriptions.[reference:49]"
  },
  {
    "testId": "ads-test-03",
    "question": "What is the purpose of Google Ads conversion value rules?",
    "options": [
      "To adjust the value of conversions based on specific conditions",
      "To set the conversion goal",
      "To track ad impressions",
      "To set the campaign budget"
    ],
    "correctOption": 0,
    "explanation": "Conversion value rules allow you to adjust the value of conversions based on attributes like device, location, or audience."
  },
  {
    "testId": "ads-test-03",
    "question": "Which Google Ads tool should be routinely used with value-based Smart Bidding?",
    "options": ["Shared budgets and portfolio bid strategies", "Keyword Planner", "Google Analytics only", "Tag Manager"],
    "correctOption": 0,
    "explanation": "Using shared budgets and portfolio bid strategies helps optimize value-based Smart Bidding across multiple campaigns.[reference:50]"
  },
  {
    "testId": "ads-test-03",
    "question": "What is the advantage of automating your bid over using manual bidding?",
    "options": [
      "Automation adjusts bids in real-time based on many signals",
      "Manual bidding is always cheaper",
      "Automation requires less data",
      "Manual bidding is faster"
    ],
    "correctOption": 0,
    "explanation": "Automated bidding uses machine learning to adjust bids in real-time based on a wide range of signals that would be impossible to manage manually.[reference:51]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is Campaign Budget Optimization (CBO) in Meta Ads?",
    "options": [
      "A feature that automatically distributes budget across ad sets to get the best results",
      "A manual budget allocation method",
      "A budget cap for campaigns",
      "A feature that only works for reach campaigns"
    ],
    "correctOption": 0,
    "explanation": "CBO automatically distributes your campaign budget across ad sets to achieve the best overall results based on performance.[reference:52]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is 'Learning Limited' status in Meta Ads?",
    "options": [
      "When the system doesn't have enough conversions to fully optimize",
      "When the campaign is paused",
      "When the budget is exhausted",
      "When the ad creative is under review"
    ],
    "correctOption": 0,
    "explanation": "Learning Limited means the ad set has not received enough conversions (typically less than 50) to exit the learning phase effectively.[reference:53]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the recommended approach for scaling a successful Facebook ad campaign?",
    "options": [
      "Increase budget gradually (10-20% every few days)",
      "Increase budget by 100% immediately",
      "Duplicate the campaign with higher budget",
      "Keep the budget the same"
    ],
    "correctOption": 0,
    "explanation": "Gradually increasing budget by 10-20% every few days helps avoid resetting the learning phase."
  },
  {
    "testId": "ads-test-04",
    "question": "What is the purpose of Dynamic Creative in Meta Ads?",
    "options": [
      "To automatically test different creative combinations to find the best performing one",
      "To create dynamic product feeds",
      "To animate static images",
      "To create video ads automatically"
    ],
    "correctOption": 0,
    "explanation": "Dynamic Creative automatically generates multiple ad variations by combining different images, videos, headlines, and descriptions.[reference:54]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the main difference between retargeting and prospecting campaigns in Meta Ads?",
    "options": [
      "Retargeting targets users who have interacted with your brand; prospecting targets new audiences",
      "Retargeting targets new audiences; prospecting targets existing customers",
      "Both target new audiences",
      "Both target existing customers"
    ],
    "correctOption": 0,
    "explanation": "Retargeting (remarketing) focuses on users who have already engaged with your brand, while prospecting aims to reach new potential customers."
  },
  {
    "testId": "ads-test-04",
    "question": "What is audience overlap in Meta Ads and why does it matter?",
    "options": [
      "When multiple ad sets target the same audience, causing internal competition",
      "When audiences are too broad",
      "When audiences are too narrow",
      "When audiences have no common characteristics"
    ],
    "correctOption": 0,
    "explanation": "Audience overlap occurs when different ad sets compete for the same users, potentially driving up costs. It should be minimized for better efficiency.[reference:55]"
  },
  {
    "testId": "ads-test-04",
    "question": "How did iOS14 affect Facebook ad targeting and tracking?",
    "options": [
      "It limited tracking capabilities and required ATT (App Tracking Transparency) consent",
      "It improved tracking accuracy",
      "It had no effect",
      "It only affected Instagram ads"
    ],
    "correctOption": 0,
    "explanation": "iOS14 introduced App Tracking Transparency, requiring user consent for tracking, which significantly impacted Facebook's ability to track and target iOS users.[reference:56]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is a good strategy for testing ad creatives in Meta Ads?",
    "options": [
      "Use A/B testing with one variable at a time",
      "Test multiple variables simultaneously",
      "Test only one creative",
      "Never test creatives"
    ],
    "correctOption": 0,
    "explanation": "For effective creative testing, change only one variable at a time (e.g., image, headline, or copy) to clearly identify what works best.[reference:57]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the recommended audience overlap percentage to avoid in Meta Ads?",
    "options": ["Keep overlap below 20%", "Keep overlap below 50%", "Overlap doesn't matter", "100% overlap is fine"],
    "correctOption": 0,
    "explanation": "Keeping audience overlap below 20% helps avoid internal competition and rising costs."
  },
  {
    "testId": "ads-test-04",
    "question": "What is the purpose of the 'Cost Cap' bidding strategy in Meta Ads?",
    "options": [
      "To control the average cost per optimization event",
      "To maximize impressions",
      "To set a minimum spend",
      "To increase CPM"
    ],
    "correctOption": 0,
    "explanation": "Cost Cap allows you to set a target average cost per optimization event, helping control costs while maintaining performance.[reference:58]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the recommended strategy for a new Facebook ad account with limited data?",
    "options": [
      "Start with broad targeting and simpler objectives like Traffic",
      "Start with conversion campaigns immediately",
      "Start with a small budget and narrow targeting",
      "Start with lookalike audiences"
    ],
    "correctOption": 0,
    "explanation": "New accounts should start with broader targeting and simpler objectives (like Traffic or Engagement) to gather data before optimizing for conversions.[reference:59]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the difference between Purchase and Add to Cart conversion events in Meta Ads?",
    "options": [
      "Purchase is the final conversion; Add to Cart is an intermediate step",
      "Add to Cart is the final conversion; Purchase is intermediate",
      "Both are the same",
      "Purchase is for B2B; Add to Cart is for B2C"
    ],
    "correctOption": 0,
    "explanation": "Add to Cart is a mid-funnel action indicating interest, while Purchase is the bottom-funnel conversion that drives revenue.[reference:60]"
  },
  {
    "testId": "ads-test-04",
    "question": "When should you run a Lookalike (Similar) Audience in Meta Ads?",
    "options": [
      "When you have a solid base of existing customers (at least 100-1000)",
      "When you have no customer data",
      "When you want to target a very small audience",
      "When you are running a brand awareness campaign"
    ],
    "correctOption": 0,
    "explanation": "Lookalike audiences work best when you have a sufficient base of existing customers (typically 100-1000) to build from.[reference:61]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the impact of audience overlap on campaign performance?",
    "options": [
      "It can increase costs due to internal competition",
      "It always improves performance",
      "It has no impact on cost",
      "It only affects CTR"
    ],
    "correctOption": 0,
    "explanation": "Audience overlap can cause your ad sets to compete against each other, driving up costs and reducing efficiency.[reference:62]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the benefit of using Meta's Automated Rules?",
    "options": [
      "To automatically adjust campaigns based on predefined conditions",
      "To create ad creatives automatically",
      "To generate audience insights",
      "To design landing pages"
    ],
    "correctOption": 0,
    "explanation": "Automated Rules allow you to set conditions that automatically adjust campaigns, such as pausing underperforming ads or adjusting budgets.[reference:63]"
  },
  {
    "testId": "ads-test-04",
    "question": "How do you calculate ROAS in Meta Ads?",
    "options": ["Revenue ÷ Ad Spend", "Ad Spend ÷ Revenue", "Conversions ÷ Clicks", "Clicks ÷ Impressions"],
    "correctOption": 0,
    "explanation": "ROAS (Return On Ad Spend) is calculated as total revenue from ads divided by total ad spend.[reference:64]"
  },
  {
    "testId": "ads-test-04",
    "question": "Which two Meta business solutions should be the main sources for signals on campaigns?",
    "options": ["Facebook Pixel and Conversions API", "Google Analytics and Tag Manager", "Facebook Page and Instagram", "Messenger and WhatsApp"],
    "correctOption": 0,
    "explanation": "The Facebook Pixel and Conversions API are the primary sources for campaign signals, providing accurate conversion data.[reference:65]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the difference between 1% and 5% Lookalike audiences?",
    "options": [
      "1% is more precise; 5% has broader reach",
      "5% is more precise; 1% has broader reach",
      "Both are the same",
      "1% is for large budgets; 5% is for small budgets"
    ],
    "correctOption": 0,
    "explanation": "1% lookalike audiences are more precise and closely match your source audience, while 5% audiences are broader but reach more people.[reference:66]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the first step in building a Meta Ads funnel strategy?",
    "options": [
      "Define your audience and map the customer journey",
      "Create the ads immediately",
      "Set the budget first",
      "Choose the ad format first"
    ],
    "correctOption": 0,
    "explanation": "A successful funnel strategy starts with understanding your audience and mapping their journey from awareness to conversion.[reference:67]"
  },
  {
    "testId": "ads-test-04",
    "question": "What is the ideal budget increase percentage when scaling a winning Meta ad?",
    "options": ["10-20% every 2-3 days", "50-100% daily", "200% immediately", "5% every week"],
    "correctOption": 0,
    "explanation": "Gradual increases of 10-20% every 2-3 days allow the system to adjust without resetting the learning phase."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"ads-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for ads');
} else {
  console.log('Questions for ads already exist or file format unexpected');
}
