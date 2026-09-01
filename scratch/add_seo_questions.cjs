const fs = require('fs');

const questions = [
  {
    "testId": "seo-test-01",
    "question": "What does SEO stand for?",
    "options": ["Search Engine Optimization", "Search Engine Operation", "Social Engagement Optimization", "Site Evaluation Outreach"],
    "correctOption": 0,
    "explanation": "SEO stands for Search Engine Optimization. It is the practice of improving a website's visibility in search engine results pages (SERPs) to drive organic traffic.[reference:66]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the primary goal of SEO?",
    "options": [
      "To secure a high rank in organic search results",
      "To increase paid advertising revenue",
      "To design better websites",
      "To create social media content"
    ],
    "correctOption": 0,
    "explanation": "The main goal of SEO is to secure a high rank in organic (unpaid) search results, which are determined purely by search algorithms.[reference:67]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following is NOT one of the three main tasks search engines perform?",
    "options": ["Crawling", "Indexing", "Ranking", "Designing"],
    "correctOption": 3,
    "explanation": "Search engines perform three main tasks: crawling (discovering URLs), indexing (storing and organizing content), and ranking (serving results in order of relevance).[reference:68]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the difference between organic and paid search results?",
    "options": [
      "Organic results are unpaid listings determined by algorithms; paid results are advertisements",
      "Organic results are paid; paid results are unpaid",
      "Both are unpaid listings",
      "Both are paid advertisements"
    ],
    "correctOption": 0,
    "explanation": "Organic results are unpaid listings determined purely by search algorithms. Paid results are obtained through paid ads and are prominently displayed in SERPs.[reference:69]"
  },
  {
    "testId": "seo-test-01",
    "question": "What does E-E-A-T stand for in SEO?",
    "options": [
      "Experience, Expertise, Authoritativeness, and Trustworthiness",
      "Efficiency, Engagement, Authority, and Traffic",
      "Excellence, Execution, Accuracy, and Timing",
      "Evaluation, Exposure, Assessment, and Testing"
    ],
    "correctOption": 0,
    "explanation": "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It is a framework used by Google to evaluate content quality and credibility.[reference:70][reference:71]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following is a search engine ranking factor?",
    "options": ["Page speed", "Mobile-friendliness", "Quality backlinks", "All of the above"],
    "correctOption": 3,
    "explanation": "Page speed, mobile-friendliness, and quality backlinks are all important ranking factors that search engines consider when determining search result positions.[reference:72]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is a SERP?",
    "options": [
      "Search Engine Results Page",
      "Search Engine Ranking Protocol",
      "Site Evaluation and Review Process",
      "Social Engagement Response Platform"
    ],
    "correctOption": 0,
    "explanation": "SERP stands for Search Engine Results Page. It is the page displayed by a search engine in response to a user's query.[reference:73]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is 'white-hat' SEO?",
    "options": [
      "Ethical SEO practices that follow search engine guidelines",
      "Unethical SEO tactics that manipulate search rankings",
      "A type of SEO tool",
      "SEO that only focuses on paid advertising"
    ],
    "correctOption": 0,
    "explanation": "White-hat SEO refers to ethical, sustainable SEO practices that follow search engine guidelines and focus on providing value to users.[reference:74]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the purpose of search engine crawling?",
    "options": [
      "To discover and access web pages",
      "To rank web pages",
      "To store web page data",
      "To display search results"
    ],
    "correctOption": 0,
    "explanation": "Crawling is the process by which search engine bots (spiders) discover and access web pages to read their content.[reference:75][reference:76]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the difference between crawling and indexing?",
    "options": [
      "Crawling is discovering pages; indexing is storing and organizing them",
      "Indexing is discovering pages; crawling is storing them",
      "Both are the same",
      "Crawling is for images; indexing is for text"
    ],
    "correctOption": 0,
    "explanation": "Crawling determines whether bots can find and access a page. Indexing defines whether that page is eligible to appear in search results.[reference:77]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following is a search engine?",
    "options": ["Google", "Facebook", "Instagram", "Twitter"],
    "correctOption": 0,
    "explanation": "Google is a search engine. Facebook, Instagram, and Twitter are social media platforms, not search engines."
  },
  {
    "testId": "seo-test-01",
    "question": "Why is SEO important for businesses?",
    "options": [
      "It helps users find content and drives organic traffic and leads",
      "It only helps with paid advertising",
      "It is not important for online businesses",
      "It only affects social media presence"
    ],
    "correctOption": 0,
    "explanation": "SEO makes it easier for users to find your content among thousands of competing pages, ensuring abundant organic traffic and leads.[reference:78]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is a SERP feature?",
    "options": [
      "Special elements on search results pages like featured snippets and knowledge panels",
      "A type of backlink",
      "An SEO tool",
      "A search engine algorithm"
    ],
    "correctOption": 0,
    "explanation": "SERP features are special elements that appear on search results pages beyond the standard blue links, such as featured snippets, knowledge panels, and image packs.[reference:79]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the role of algorithms in search engines?",
    "options": [
      "To determine which pages rank for which queries",
      "To design websites",
      "To create content",
      "To manage social media"
    ],
    "correctOption": 0,
    "explanation": "Search algorithms are complex systems that determine how relevant a webpage is to a given keyword or phrase, deciding which pages earn top spots in search results.[reference:80]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following is an example of 'black-hat' SEO?",
    "options": ["Keyword stuffing", "Creating quality content", "Earning natural backlinks", "Optimizing page speed"],
    "correctOption": 0,
    "explanation": "Keyword stuffing (excessively repeating keywords in an unnatural way) is considered black-hat SEO as it manipulates rankings and provides poor user experience.[reference:81]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is organic traffic?",
    "options": [
      "Visitors who come to a website through unpaid search results",
      "Visitors who click on paid advertisements",
      "Visitors from social media platforms",
      "Visitors from direct URL entry"
    ],
    "correctOption": 0,
    "explanation": "Organic traffic refers to visitors who arrive at a website through unpaid, organic search results.[reference:82]"
  },
  {
    "testId": "seo-test-01",
    "question": "How do search engines typically rank content?",
    "options": [
      "By evaluating relevance, authority, and user experience signals",
      "By counting the number of images on a page",
      "By measuring social media followers",
      "By checking the domain age only"
    ],
    "correctOption": 0,
    "explanation": "Search engines rank content based on multiple factors including relevance to the query, authority signals (like backlinks), and user experience metrics.[reference:83]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the concept of 'search intent'?",
    "options": [
      "The reason behind a user's search query",
      "The number of times a keyword is searched",
      "The length of a search query",
      "The device used to search"
    ],
    "correctOption": 0,
    "explanation": "Search intent is the underlying reason or goal behind a user's search query. Understanding it is crucial for creating content that satisfies user intent.[reference:84][reference:85]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following is NOT a component of search engine optimization?",
    "options": ["On-page SEO", "Off-page SEO", "Technical SEO", "Design SEO"],
    "correctOption": 3,
    "explanation": "The three main components of SEO are On-page, Off-page, and Technical SEO. 'Design SEO' is not a standard SEO category.[reference:86]"
  },
  {
    "testId": "seo-test-01",
    "question": "What is the purpose of search engine indexing?",
    "options": [
      "To store and organize discovered web pages in a database",
      "To discover new web pages",
      "To rank web pages",
      "To display search results"
    ],
    "correctOption": 0,
    "explanation": "Indexing is the process where search engines store and organize discovered web pages in their database, making them eligible to appear in search results.[reference:87]"
  },
  {
    "testId": "seo-test-01",
    "question": "Which of the following best describes the relationship between SEO and user experience?",
    "options": [
      "SEO and UX are closely related; good UX often improves SEO performance",
      "SEO and UX are completely unrelated",
      "SEO focuses only on search engines, not users",
      "UX is more important than SEO"
    ],
    "correctOption": 0,
    "explanation": "SEO and UX are closely related. Search engines increasingly use user experience signals (like page speed and mobile-friendliness) as ranking factors.[reference:88]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is keyword research in SEO?",
    "options": [
      "The process of finding and analyzing search terms that people enter into search engines",
      "The process of writing content",
      "The process of building backlinks",
      "The process of designing websites"
    ],
    "correctOption": 0,
    "explanation": "Keyword research is the process of discovering and analyzing the actual search terms that people use to find information, products, or services online.[reference:89]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is search intent?",
    "options": [
      "The purpose behind a user's search query (informational, navigational, transactional, commercial)",
      "The number of searches for a keyword",
      "The difficulty of ranking for a keyword",
      "The search volume of a keyword"
    ],
    "correctOption": 0,
    "explanation": "Search intent is the reason behind a user's search query. It can be informational (seeking knowledge), navigational (finding a specific site), transactional (making a purchase), or commercial (researching products).[reference:90]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is a long-tail keyword?",
    "options": [
      "A specific, often longer keyword phrase with lower search volume but higher conversion potential",
      "A highly competitive keyword with high search volume",
      "A keyword that contains only one word",
      "A keyword that is difficult to rank for"
    ],
    "correctOption": 0,
    "explanation": "Long-tail keywords are specific, often longer phrases that have lower search volume but typically higher conversion intent and less competition.[reference:91]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is keyword mapping?",
    "options": [
      "The process of assigning specific keywords to specific pages on a website",
      "The process of finding keywords",
      "The process of analyzing competitor keywords",
      "The process of grouping keywords by search volume"
    ],
    "correctOption": 0,
    "explanation": "Keyword mapping is the process of assigning target keywords to specific pages on your website, ensuring each page has a clear focus and purpose.[reference:92]"
  },
  {
    "testId": "seo-test-02",
    "question": "Which of the following is a keyword research tool?",
    "options": ["Semrush", "Google Search Console", "Google Analytics", "All of the above"],
    "correctOption": 3,
    "explanation": "Semrush is a dedicated keyword research tool. Google Search Console and Google Analytics also provide keyword and search query data.[reference:93][reference:94]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is keyword stuffing?",
    "options": [
      "Excessively repeating keywords in an unnatural way to manipulate search rankings",
      "Strategically placing keywords in content",
      "Researching keywords for content",
      "Using synonyms for keywords"
    ],
    "correctOption": 0,
    "explanation": "Keyword stuffing is the practice of excessively and unnaturally repeating keywords in content to manipulate search rankings, which is considered black-hat SEO.[reference:95]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is a topic cluster in content strategy?",
    "options": [
      "A pillar page covering a broad topic with several cluster pages covering specific subtopics",
      "A group of unrelated keywords",
      "A collection of backlinks",
      "A type of SEO tool"
    ],
    "correctOption": 0,
    "explanation": "A topic cluster consists of a comprehensive pillar page covering a broad topic, linked to several cluster pages that cover specific subtopics in detail.[reference:96]"
  },
  {
    "testId": "seo-test-02",
    "question": "Which type of search intent indicates a user wants to make a purchase?",
    "options": ["Transactional intent", "Informational intent", "Navigational intent", "Commercial investigation"],
    "correctOption": 0,
    "explanation": "Transactional intent indicates the user is ready to make a purchase or complete an action, such as buying a product or signing up for a service.[reference:97]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is competitor keyword analysis?",
    "options": [
      "Identifying which keywords competitors rank for to find opportunities",
      "Copying competitor content",
      "Buying competitor keywords",
      "Blocking competitors from ranking"
    ],
    "correctOption": 0,
    "explanation": "Competitor keyword analysis involves identifying the keywords that competitors rank for, helping you discover opportunities and gaps in your own strategy.[reference:98][reference:99]"
  },
  {
    "testId": "seo-test-02",
    "question": "What is search volume in keyword research?",
    "options": [
      "The number of times a keyword is searched for in a given period",
      "The difficulty of ranking for a keyword",
      "The number of pages ranking for a keyword",
      "The cost of bidding on a keyword"
    ],
    "correctOption": 0,
    "explanation": "Search volume refers to the average number of times a specific keyword is searched for within a given time period (usually monthly).[reference:100]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is a title tag in SEO?",
    "options": [
      "An HTML element that specifies the title of a web page and appears in search results",
      "The main heading of a page",
      "A meta description",
      "An image alt attribute"
    ],
    "correctOption": 0,
    "explanation": "A title tag is an HTML element that specifies the title of a web page. It appears as the clickable headline in search engine results and is a critical on-page SEO element.[reference:101][reference:102]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is a meta description?",
    "options": [
      "A brief summary of a page's content that appears below the title in search results",
      "The main heading of a page",
      "The page URL",
      "The image alt text"
    ],
    "correctOption": 0,
    "explanation": "A meta description is a brief summary of a page's content that appears below the title tag in search engine results, helping users understand what the page is about.[reference:103]"
  },
  {
    "testId": "seo-test-03",
    "question": "Which heading tag is the most important for SEO and should appear only once per page?",
    "options": ["H1", "H2", "H3", "H4"],
    "correctOption": 0,
    "explanation": "The H1 heading tag is the most important heading on a page and should typically appear only once to clearly define the main topic of the page.[reference:104]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is the purpose of alt text for images?",
    "options": [
      "To describe images for accessibility and provide context to search engines",
      "To add decorative text to images",
      "To increase image file size",
      "To add social media sharing buttons"
    ],
    "correctOption": 0,
    "explanation": "Alt text describes images for visually impaired users and provides context to search engine crawlers, helping them understand the content of images.[reference:105]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is internal linking in SEO?",
    "options": [
      "Linking from one page to another page within the same website",
      "Linking to external websites",
      "Linking to social media profiles",
      "Linking to image files"
    ],
    "correctOption": 0,
    "explanation": "Internal linking is the practice of linking from one page on a website to another page on the same website, helping distribute link equity and guide users.[reference:106][reference:107]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is structured data (schema markup) in SEO?",
    "options": [
      "Code added to a webpage to help search engines understand the content and display rich results",
      "A type of backlink",
      "The page title",
      "The meta description"
    ],
    "correctOption": 0,
    "explanation": "Structured data (schema markup) is code added to a webpage that helps search engines understand the content and can enable rich results like star ratings and product information.[reference:108][reference:109]"
  },
  {
    "testId": "seo-test-03",
    "question": "Which of the following is a best practice for creating SEO-friendly URLs?",
    "options": [
      "Use descriptive, keyword-rich URLs with hyphens between words",
      "Use long URLs with random characters",
      "Use underscores instead of hyphens",
      "Use the same URL for all pages"
    ],
    "correctOption": 0,
    "explanation": "SEO-friendly URLs should be descriptive, include relevant keywords, and use hyphens to separate words for better readability and search engine understanding.[reference:110]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is Core Web Vitals in SEO?",
    "options": [
      "A set of metrics that measure page loading, interactivity, and visual stability",
      "A type of backlink",
      "A keyword research tool",
      "A social media metric"
    ],
    "correctOption": 0,
    "explanation": "Core Web Vitals are a set of user-centric metrics that measure page loading speed, interactivity, and visual stability, which are important ranking factors.[reference:111][reference:112]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is the ideal length for a title tag for SEO purposes?",
    "options": [
      "50-60 characters (around 600px width)",
      "100-120 characters",
      "20-30 characters",
      "There is no limit"
    ],
    "correctOption": 0,
    "explanation": "Title tags are typically recommended to be 50-60 characters to ensure they display fully in search results without being truncated."
  },
  {
    "testId": "seo-test-03",
    "question": "What is the purpose of using heading tags (H1-H6)?",
    "options": [
      "To structure content hierarchically and signal importance to search engines and users",
      "To add decorative styling",
      "To create links",
      "To add images"
    ],
    "correctOption": 0,
    "explanation": "Heading tags provide a hierarchical structure to content, helping both users and search engines understand the organization and importance of different sections.[reference:113]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is a canonical tag in SEO?",
    "options": [
      "An HTML element that specifies the preferred URL for a page when duplicate content exists",
      "A type of backlink",
      "A meta description",
      "A heading tag"
    ],
    "correctOption": 0,
    "explanation": "A canonical tag (rel=canonical) is an HTML element that tells search engines which URL is the preferred version of a page when duplicate or similar content exists.[reference:114]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is the role of content quality in on-page SEO?",
    "options": [
      "High-quality content is essential for ranking well and satisfying user intent",
      "Content quality is not important for SEO",
      "Only keyword count matters",
      "Content length is the only factor"
    ],
    "correctOption": 0,
    "explanation": "High-quality, relevant content is essential for SEO success. Search engines prioritize content that provides value, answers questions, and satisfies user intent.[reference:115]"
  },
  {
    "testId": "seo-test-03",
    "question": "What is user experience (UX) in the context of SEO?",
    "options": [
      "How users interact with and perceive a website, which affects search rankings",
      "A type of backlink",
      "A keyword research technique",
      "A social media strategy"
    ],
    "correctOption": 0,
    "explanation": "User experience (UX) refers to how users interact with and perceive a website. Good UX is increasingly important for SEO as search engines use user signals as ranking factors.[reference:116]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is a backlink in SEO?",
    "options": [
      "A link from one website to another website",
      "A link from one page to another page on the same site",
      "A link to a social media profile",
      "A link to an image"
    ],
    "correctOption": 0,
    "explanation": "A backlink is a link from one website to another. Backlinks are important ranking signals that indicate a website's authority and credibility.[reference:117]"
  },
  {
    "testId": "seo-test-04",
    "question": "Why are backlinks important for SEO?",
    "options": [
      "They serve as votes of confidence and authority signals for search engines",
      "They directly increase page speed",
      "They improve website design",
      "They replace the need for content"
    ],
    "correctOption": 0,
    "explanation": "Backlinks serve as votes of confidence from other websites. Search engines consider high-quality backlinks as signals of authority and credibility, which can improve rankings.[reference:118]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is the difference between link quality and link quantity?",
    "options": [
      "Quality refers to the authority and relevance of the linking site; quantity is the sheer number of links",
      "Quantity is more important than quality",
      "Both are equally important",
      "Quality only matters for e-commerce sites"
    ],
    "correctOption": 0,
    "explanation": "Link quality refers to the authority, relevance, and trustworthiness of the linking website. Link quantity is the total number of backlinks, but quality is generally more important for SEO.[reference:119]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is a 'dofollow' link?",
    "options": [
      "A link that passes link equity (PageRank) to the linked site",
      "A link that does not pass link equity",
      "A link to a social media profile",
      "A link within the same website"
    ],
    "correctOption": 0,
    "explanation": "A 'dofollow' link is a standard link that passes link equity (PageRank) from the linking site to the linked site, contributing to the linked site's authority."
  },
  {
    "testId": "seo-test-04",
    "question": "What is a 'nofollow' link?",
    "options": [
      "A link that does not pass link equity to the linked site",
      "A link that passes link equity",
      "A link to a high-authority site",
      "A link within the same domain"
    ],
    "correctOption": 0,
    "explanation": "A 'nofollow' link includes a rel='nofollow' attribute that tells search engines not to pass link equity to the linked site, often used for user-generated content or paid links."
  },
  {
    "testId": "seo-test-04",
    "question": "What is guest posting in off-page SEO?",
    "options": [
      "Writing and publishing content on another website to build authority and earn backlinks",
      "Posting on social media",
      "Writing content for your own blog",
      "Commenting on blog posts"
    ],
    "correctOption": 0,
    "explanation": "Guest posting involves writing and publishing content on another website or blog, which can help build authority, reach new audiences, and earn valuable backlinks.[reference:120]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is domain authority?",
    "options": [
      "A metric that predicts a website's ability to rank in search results",
      "The number of pages on a website",
      "The age of a domain",
      "The design quality of a website"
    ],
    "correctOption": 0,
    "explanation": "Domain authority is a metric that predicts how well a website is likely to rank in search results based on factors like backlink profile, age, and popularity.[reference:121]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is local SEO?",
    "options": [
      "Optimizing a website to rank better for location-based searches",
      "SEO for international websites",
      "SEO for e-commerce sites",
      "SEO for mobile devices"
    ],
    "correctOption": 0,
    "explanation": "Local SEO is the practice of optimizing a website to rank better in location-based searches, helping businesses attract customers in their geographic area.[reference:122][reference:123]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is Google Business Profile (formerly Google My Business)?",
    "options": [
      "A free listing that helps businesses manage their presence on Google Maps and local search",
      "A paid advertising platform",
      "An SEO tool",
      "A social media platform"
    ],
    "correctOption": 0,
    "explanation": "Google Business Profile is a free business listing tool that helps businesses manage their presence on Google Maps and local search results.[reference:124]"
  },
  {
    "testId": "seo-test-04",
    "question": "What does NAP stand for in local SEO?",
    "options": [
      "Name, Address, Phone number",
      "Name, Age, Profession",
      "Network, Access, Protocol",
      "Navigation, Architecture, Performance"
    ],
    "correctOption": 0,
    "explanation": "NAP stands for Name, Address, and Phone number. Maintaining consistent NAP information across the web is crucial for local SEO.[reference:125][reference:126]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is a brand mention in off-page SEO?",
    "options": [
      "When a website mentions your brand name without linking to you",
      "A backlink to your website",
      "A social media post",
      "A customer review"
    ],
    "correctOption": 0,
    "explanation": "A brand mention is when another website mentions your brand name or business without necessarily providing a link. These can still contribute to brand authority.[reference:127]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is the purpose of influencer outreach in off-page SEO?",
    "options": [
      "To build relationships and earn mentions or backlinks from influential figures in your industry",
      "To buy backlinks",
      "To create content",
      "To improve website design"
    ],
    "correctOption": 0,
    "explanation": "Influencer outreach involves building relationships with influential figures in your industry to earn mentions, shares, and backlinks that can boost authority.[reference:128]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is a social signal in the context of SEO?",
    "options": [
      "Engagement and shares on social media platforms",
      "A type of backlink",
      "A search engine ranking factor",
      "A keyword research metric"
    ],
    "correctOption": 0,
    "explanation": "Social signals refer to engagement on social media platforms (likes, shares, comments). While not direct ranking factors, they can contribute to visibility and authority.[reference:129]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is a toxic backlink?",
    "options": [
      "A low-quality or spammy link that can harm a website's SEO",
      "A high-quality link from an authoritative site",
      "An internal link",
      "A nofollow link"
    ],
    "correctOption": 0,
    "explanation": "A toxic backlink is a low-quality or spammy link from untrustworthy sites that can potentially harm a website's search rankings and should be disavowed.[reference:130]"
  },
  {
    "testId": "seo-test-04",
    "question": "What is the 'Map Pack' in local SEO?",
    "options": [
      "The set of local business listings that appear on Google Maps for location-based searches",
      "A type of backlink",
      "A SEO tool",
      "A social media feature"
    ],
    "correctOption": 0,
    "explanation": "The Map Pack is the set of local business listings that appear on Google Maps in search results for location-based queries, typically showing three businesses.[reference:131]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is robots.txt in technical SEO?",
    "options": [
      "A file that tells search engine crawlers which parts of a website to crawl or not crawl",
      "A file that contains the website's sitemap",
      "A file that stores website analytics",
      "A file that contains the website's CSS"
    ],
    "correctOption": 0,
    "explanation": "robots.txt is a file that instructs search engine crawlers which parts of a website they are allowed to access and crawl.[reference:132][reference:133]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the purpose of an XML sitemap?",
    "options": [
      "To help search engines discover and index all pages on a website",
      "To block search engines from crawling pages",
      "To track website visitors",
      "To improve page speed"
    ],
    "correctOption": 0,
    "explanation": "An XML sitemap is a file that lists all important pages on a website, helping search engines discover and index them more efficiently.[reference:134][reference:135]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is a 301 redirect?",
    "options": [
      "A permanent redirect from one URL to another",
      "A temporary redirect",
      "A server error",
      "A broken link"
    ],
    "correctOption": 0,
    "explanation": "A 301 redirect is a permanent redirect from one URL to another, passing link equity and indicating that the page has permanently moved.[reference:136]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the difference between a 301 and a 302 redirect?",
    "options": [
      "301 is permanent; 302 is temporary",
      "302 is permanent; 301 is temporary",
      "Both are permanent",
      "Both are temporary"
    ],
    "correctOption": 0,
    "explanation": "A 301 redirect indicates a permanent move and passes link equity. A 302 redirect indicates a temporary move and does not pass link equity.[reference:137]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is Google Search Console used for?",
    "options": [
      "To monitor website performance in search results and identify SEO issues",
      "To run paid advertising campaigns",
      "To design websites",
      "To create social media content"
    ],
    "correctOption": 0,
    "explanation": "Google Search Console is a free tool that helps monitor website performance in Google search results, identify indexing issues, and analyze search traffic.[reference:138][reference:139]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is Google Analytics used for?",
    "options": [
      "To analyze website traffic, user behavior, and conversion data",
      "To submit sitemaps",
      "To check backlinks",
      "To run SEO audits"
    ],
    "correctOption": 0,
    "explanation": "Google Analytics is a web analytics tool that tracks and reports website traffic, user behavior, and conversions, helping measure SEO performance.[reference:140][reference:141]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is mobile-first indexing?",
    "options": [
      "Google primarily uses the mobile version of a website for indexing and ranking",
      "Google only indexes mobile websites",
      "Mobile websites rank higher automatically",
      "Desktop websites are ignored"
    ],
    "correctOption": 0,
    "explanation": "Mobile-first indexing means Google predominantly uses the mobile version of a website's content for indexing and ranking, making mobile optimization crucial.[reference:142][reference:143]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is page speed optimization in technical SEO?",
    "options": [
      "Improving the loading time of web pages to enhance user experience and rankings",
      "Adding more images to pages",
      "Increasing the number of pages",
      "Reducing the amount of content"
    ],
    "correctOption": 0,
    "explanation": "Page speed optimization involves improving how quickly web pages load. Faster pages provide better user experience and can improve search rankings.[reference:144][reference:145]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is an SSL certificate and why is it important for SEO?",
    "options": [
      "A security certificate that enables HTTPS; it's a ranking signal",
      "A type of backlink",
      "A keyword research tool",
      "A content management system"
    ],
    "correctOption": 0,
    "explanation": "SSL (Secure Sockets Layer) certificates enable HTTPS encryption. Having an SSL certificate is a ranking signal and helps build user trust.[reference:146][reference:147]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is duplicate content in SEO?",
    "options": [
      "Identical or very similar content appearing on multiple URLs, which can confuse search engines",
      "Content that is copied from social media",
      "Content that is too short",
      "Content that uses too many keywords"
    ],
    "correctOption": 0,
    "explanation": "Duplicate content refers to identical or very similar content appearing on multiple URLs, which can cause search engines difficulty in determining which version to rank.[reference:148]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is crawl budget in technical SEO?",
    "options": [
      "The number of pages a search engine will crawl on a website within a given timeframe",
      "The cost of SEO tools",
      "The number of backlinks",
      "The page speed score"
    ],
    "correctOption": 0,
    "explanation": "Crawl budget is the number of pages a search engine bot will crawl on a website during a given timeframe. Optimizing it helps ensure important pages are crawled.[reference:149]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is a canonical tag used for?",
    "options": [
      "To specify the preferred URL for pages with duplicate or similar content",
      "To block search engines from indexing a page",
      "To create a sitemap",
      "To redirect a page"
    ],
    "correctOption": 0,
    "explanation": "A canonical tag (rel=canonical) is used to tell search engines which URL is the preferred version of a page when duplicate or similar content exists.[reference:150]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the purpose of a noindex tag?",
    "options": [
      "To tell search engines not to index a specific page",
      "To tell search engines to index a page faster",
      "To create a backlink",
      "To improve page speed"
    ],
    "correctOption": 0,
    "explanation": "A noindex meta tag tells search engines not to index a specific page, keeping it out of search results."
  },
  {
    "testId": "seo-test-05",
    "question": "What is the 'Largest Contentful Paint' (LCP) in Core Web Vitals?",
    "options": [
      "A metric measuring how long it takes for the largest visible element to load",
      "A metric measuring page interactivity",
      "A metric measuring visual stability",
      "A metric measuring total page size"
    ],
    "correctOption": 0,
    "explanation": "Largest Contentful Paint (LCP) is a Core Web Vitals metric that measures the time it takes for the largest visible element (image, video, or text block) to load."
  },
  {
    "testId": "seo-test-05",
    "question": "What is the 'First Input Delay' (FID) in Core Web Vitals?",
    "options": [
      "A metric measuring the time from when a user first interacts with a page to when the browser responds",
      "A metric measuring page load time",
      "A metric measuring visual stability",
      "A metric measuring page size"
    ],
    "correctOption": 0,
    "explanation": "First Input Delay (FID) is a Core Web Vitals metric that measures the time from when a user first interacts with a page (clicks a link, taps a button) to when the browser responds."
  },
  {
    "testId": "seo-test-05",
    "question": "What is 'Cumulative Layout Shift' (CLS) in Core Web Vitals?",
    "options": [
      "A metric measuring unexpected visual shifts on a page",
      "A metric measuring page load time",
      "A metric measuring interactivity",
      "A metric measuring page size"
    ],
    "correctOption": 0,
    "explanation": "Cumulative Layout Shift (CLS) is a Core Web Vitals metric that measures the amount of unexpected layout shift of visual content on a page."
  },
  {
    "testId": "seo-test-05",
    "question": "What is an SEO audit?",
    "options": [
      "A comprehensive review of a website's SEO performance, identifying issues and opportunities",
      "A type of backlink",
      "A keyword research method",
      "A content creation strategy"
    ],
    "correctOption": 0,
    "explanation": "An SEO audit is a comprehensive analysis of a website's SEO performance, identifying strengths, weaknesses, issues, and opportunities for improvement.[reference:151]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the purpose of structured data (schema markup)?",
    "options": [
      "To help search engines understand page content and enable rich results",
      "To improve page load speed",
      "To build backlinks",
      "To create content"
    ],
    "correctOption": 0,
    "explanation": "Structured data (schema markup) is code that helps search engines understand the content on a page, enabling rich results like ratings, prices, and event details.[reference:152][reference:153]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is a 404 error in the context of SEO?",
    "options": [
      "A 'Page Not Found' error that can harm user experience and SEO if not managed",
      "A successful page load",
      "A redirect error",
      "A server error"
    ],
    "correctOption": 0,
    "explanation": "A 404 error indicates that a page could not be found. Too many 404 errors can harm user experience and SEO, so they should be fixed or redirected.[reference:154]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the purpose of Google's algorithm updates?",
    "options": [
      "To improve search result quality and relevance",
      "To increase advertising revenue",
      "To reduce website traffic",
      "To penalize all websites"
    ],
    "correctOption": 0,
    "explanation": "Google's algorithm updates aim to improve the quality and relevance of search results, rewarding high-quality content and penalizing spammy practices.[reference:155]"
  },
  {
    "testId": "seo-test-05",
    "question": "What is the significance of HTTPS for SEO?",
    "options": [
      "HTTPS is a ranking signal and provides secure user experience",
      "HTTPS has no impact on SEO",
      "HTTPS only affects e-commerce websites",
      "HTTPS is only for Google Ads"
    ],
    "correctOption": 0,
    "explanation": "HTTPS is a ranking signal used by search engines. It provides a secure connection, protecting user data and building trust.[reference:156][reference:157]"
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

// append the questions array to export const questions array
// Find the end of the array which is ]; at the end of the file.
const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"seo-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for seo');
} else {
  console.log('Questions for seo already exist or file format unexpected');
}
