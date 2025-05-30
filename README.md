<h1>Slipstream: A Nostalgic Take on a Modern Invoice Generator</h1>

# Table of Contents

- [Slipstream: A Nostalgic Take on a Modern Invoice Generator](#slipstream-a-nostalgic-take-on-a-modern-invoice-generator)
- [Target User](#target-user)
  - [1. Freelancers and Small Business Owners]
  - [2. Casual Users for Personal Use]
- [Challenges Solved by Slipstream](#challenges-solved-by-slipstream)
  - [For Freelancers and Small Business Owners]
  - [How Slipstream Addresses These Challenges]
  - [For Casual Users]
- [Goals and Features](#goals-and-features)
  - [1. Invoice and Receipt Creation]
  - [2. Invoice Viewing and Exporting]
  - [3. Future Goals: User Dashboard & Client Management]
  - [4. Recurring Invoicing]
- [Technology Stack](#technology-stack)
  - [1. Frontend Technologies]
  - [2. Deployment]
- [API Usage](#api-usage)
  - [1. HTML2CANVAS]
  - [2. jsPDF]
  - [Future API Integration]
- [Challenges and Solutions](#challenges-and-solutions)
  - [1. Development Challenges]
  - [2. Design & Styling]
  - [3. Performance]
  - [4. Future Improvements]
- [Design Decisions](#design-decisions)
  - [Sitemap and Wireframes](#sitemap-and-wireframes)
  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Favicon](#favicon)
  - [Error 404 page](#error-404-page)
  - [Accessibility Features](#accessibility-features)
- [Goals in Development](#goals-i-aimed-to-achieve-in-development)
  - [Project Goals](#project-goals)
  - [User Goals](#user-goals)
  - [Site Owner Goals](#site-owner-goals)
  - [Developer Goals](#developer-goals)
  - [User Stories](#user-stories)
  - [First Time Visitor Goals](#first-time-visitor-goals)
  - [Returning Visitor Goals](#returning-visitor-goals)
  - [Frequent Visitor Goals](#frequent-visitor-goals)
- [Five Planes of UX](#five-planes-of-ux)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)
- [Viability and Feasibility](#viability-and-feasibility)
  - [Technical Feasibility](#technical-feasibility)
  - [Business Feasibility](#business-feasibility)
- [Content Requirements](#content-requirements)
  - [Navigation Bar](#section-navigation-bar)
  - [Footer](#section-footer)
  - [Homepage](#webpage-homepage)
  - [How to Use](#popup-how-to-use)
  - [404 Page](#webpage-404)
- [Structure](#structure-1)
  - [Overall Structure](#overall-structure)
  - [Information Architecture](#information-architecture)
  - [Interactive Experience](#interactive-experience)
- [Changes During Development](#changes-during-development)
  - [Results Modal](#results-modal)
  - [404 Page Message](#404-page-message)
- [Testing](#testing)
  - [Responsiveness](#responsivness)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Bugs](#bugs)
  - [Mistakes](#mistakes)
- [Deployment](#deployment)
  - [Deployment to GitHub Pages](#deployment-to-github-pages)
  - [Steps for Local Deployment](#steps-for-local-deployment)
  - [Forking the Repository](#forking-the-repository)
  - [Handling Navigation Errors](#handling-navigation-errors)
- [Credits](#credits)
  - [Documentation](#documentation)
  - [Media](#media)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)

<p>
  Slipstream is a sleek and modern invoice generator designed to help users
  create and share visually appealing invoices. Styled as nostalgic physical
  receipts, the design follows current trends in SaaS (Software as a Service)
  web design, making it intuitive, professional, and fun to use.
</p>

Inspired by popular services like Receiptify, Slipstream’s distinctive
receipt-style invoices add a touch of personality, offering a unique alternative
to traditional invoice formats. This makes Slipstream perfect for freelancers,
small business owners, or casual users looking to elevate how they request
payments.

<img
  width="1440"
  alt="Screenshot 2024-12-16 at 10 04 12"
  src="https://github.com/user-attachments/assets/922ee42b-87d1-4a81-8481-4061c475070a"
/>

<h2 id="target-user">Target User</h2>
<p>
  Slipstream serves a diverse range of users with distinct needs and challenges,
  effectively bridging professional and casual invoicing.
</p>

<h3>1. Freelancers and Small Business Owners</h3>
For freelancers and small businesses, Slipstream offers an escape from the dull,
rigid templates of traditional invoice tools. These users often seek tools that
not only help them create invoices but also reinforce their branding and
creativity. Slipstream delivers this by providing a sleek, SaaS-inspired
interface and eye-catching, receipt-style invoices.
<br />
<ol>
  <li>
    Time-Saving Design: The app minimizes time spent on designing invoices by
    streamlining essential elements into a visually appealing, nostalgic format.
  </li>
  <li>
    Creative Professionalism: Clients of freelancers, especially in creative
    fields like graphic design, art, or social media management, often
    appreciate thoughtful touches. Slipstream enables users to stand out by
    presenting bills as an artful extension of their work, not just
    transactional paperwork.
  </li>
  <li>
    Customizable Feel: Even with its quirky receipt-like style, users can adjust
    the information displayed to fit a variety of professional billing
    scenarios. By bringing style and ease to invoicing, Slipstream helps these
    users maintain a professional edge while introducing a layer of creativity
    into their client communications.
  </li>
</ol>

<h3>2. Casual Users for Personal Use</h3>
During the development phase, it became clear that Slipstream resonated with a
more playful audience as well. For casual users, generating invoices isn’t about
formal billing—it’s about humor, personalization, and sharing moments in an
unconventional way.
<br />
<ol>
  <li>
    The "Cheeky Bill" Scenario: Imagine a friend who habitually forgets to pay
    their share after a night out. Slipstream allows users to craft a detailed
    "receipt" to lightly nudge that friend in a fun and humorous way. Instead of
    awkward reminders or text messages, a quirky invoice breaks the ice and gets
    the point across.
  </li>
  <li>
    Broader Personal Applications: Whether it’s itemizing contributions for a
    group event, tabulating shared groceries, or simply poking fun at a buddy's
    consistent borrowing, Slipstream makes a traditionally serious task
    lighthearted and engaging. Social Media Appeal: Its stylish, modern look
    makes these "invoices" highly shareable, adding an extra dimension of fun
    when users post them to group chats or social platforms.
  </li>
  This dual-purpose appeal has made Slipstream more versatile than initially
  planned, allowing it to support both serious workflows and playful
  interactions effortlessly.
</ol>

<h2 id="challenges-solved-by-slipstream">Challenges Solved by Slipstream</h2>

<h3>For Freelancers and Small Business Owners</h3>
Freelancers and small businesses often face these hurdles when dealing with
traditional invoicing platforms:
<br />
<ul>
  <li>
    Lack of Personalization: Many tools offer rigid templates that fail to
    reflect the user’s creativity or business personality.
  </li>
  <li>
    Time-Consuming Processes: Setting up custom invoices tailored to specific
    client needs often involves significant effort or manual customization.
  </li>
  <li>
    Missed Opportunities for Branding: Users may lose the chance to display
    additional details, like social media handles or personalized thank-you
    notes, in invoices to build client rapport.
  </li>
  By bringing style and ease to invoicing, Slipstream helps these users maintain
  a professional edge while introducing a layer of creativity into their client
  communications.
</ul>
<h3>How Slipstream Addresses These Challenges:</h3>
<ul>
  <li>
    Provides extensive customization options, allowing users to personalize
    everything from item names and bank account details to VAT and discounts,
    along with fun, thoughtful touches like custom thank-you messages and
    Instagram handles.
  </li>
  <li>
    Simplifies the invoicing workflow with an intuitive design, reducing setup
    time while still giving users the ability to make invoices unique and
    engaging.
  </li>
</ul>

<h3>2. Casual Users for Personal Use</h3>
During the development phase, it became clear that Slipstream resonated with a
more playful audience as well. For casual users, generating invoices isn’t about
formal billing—it’s about humor, personalization, and sharing moments in an
unconventional way.
<br />
<ol>
  <li>
    The "Cheeky Bill" Scenario: Imagine a friend who habitually forgets to pay
    their share after a night out. Slipstream allows users to craft a detailed
    "receipt" to lightly nudge that friend in a fun and humorous way. Instead of
    awkward reminders or text messages, a quirky invoice breaks the ice and gets
    the point across.
  </li>
  <li>
    Broader Personal Applications: Whether it’s itemizing contributions for a
    group event, tabulating shared groceries, or simply poking fun at a buddy's
    consistent borrowing, Slipstream makes a traditionally serious task
    lighthearted and engaging. Social Media Appeal: Its stylish, modern look
    makes these "invoices" highly shareable, adding an extra dimension of fun
    when users post them to group chats or social platforms.
  </li>
  This dual-purpose appeal has made Slipstream more versatile than initially
  planned, allowing it to support both serious workflows and playful
  interactions effortlessly.
</ol>

<h2 id="goals-and-features">Goals and Features</h2>

<p>
  Slipstream is a versatile tool designed to make invoicing simpler, more
  engaging, and tailored to both professional and casual needs. The core
  functionality focuses on invoice creation with a fun, unique twist while
  providing some features with a clear path toward future expansions. Below is a
  summary of the features in the current version of the app, as well as some
  goals for future enhancements:
</p>
<h3>1. Invoice and Receipt Creation</h3>
<p>
  The primary feature of Slipstream is the ability to create personalized,
  receipt-style invoices. This enables users to generate invoices that align
  with their creativity and branding while staying functional and professional.
</p>
<ol>
  <li>
    Customization: Users can input their items, pricing, and optional details
    like discounts or taxes. Further design customization allows for adding
    logos, social media handles, and custom colors.
  </li>
  <li>
    Unique Design: By offering nostalgic receipt-style invoices, users can
    elevate the experience beyond typical invoice software and inject their
    personality into every billing interaction.
  </li>
</ol>
<h3>2. Invoice Viewing and Exporting</h3>
<p>
  Once an invoice is created, users have the option to view it as a PDF, which
  can then be manually shared with clients, friends, or coworkers. While there’s
  no direct sharing capability at the moment, the exported PDF offers
  flexibility for various uses.
</p>
<ol>
  <li>
    PDF Generation: Users can download invoices in a PDF format for easy
    viewing, printing, or emailing separately.
  </li>
  <li>
    Design Flexibility: After generating the invoice, users can tweak the design
    and export the latest version to ensure that it matches their current needs
    before sharing it externally.
  </li>
</ol>
<h3>3. Future Goals: User Dashboard & Client Management</h3>
<p>
  Looking forward, Slipstream aims to expand into a more full-featured tool for
  managing invoices, clients, and payment details. This would provide a more
  streamlined experience for freelancers, small business owners, and even larger
  teams.
</p>
<ul>
  <li>
    Dashboard: Users will be able to manage their invoices more effectively with
    a centralized dashboard for tracking past invoices, client information, and
    payment statuses. Think of it as a simplified version of CRM platforms like
    Salesforce, tailored to invoicing.
  </li>
  <li>
    Client Profiles: Users will be able to store and access detailed client
    profiles, including contact information, previous invoice history, and
    payment preferences, helping them maintain professional relationships over
    time.
  </li>
  <li>
    Payment Information Integration: One of the major goals for future
    development is the integration of payment solutions such as PayPal, Stripe,
    or direct bank transfers. This would allow users to send an invoice and
    accept payment in one seamless experience.
  </li>
</ul>
<h3>4. Recurring Invoicing</h3>
<p>
  Another key feature under development is recurring invoicing. This feature
  would be particularly useful for freelancers and small business owners who
  provide ongoing services, such as monthly web development, design services, or
  subscription-based products.
</p>
<ul>
  <li>
    Automation: Users will be able to set up automated recurring invoices,
    meaning the app will generate and send them at regular intervals—monthly,
    weekly, etc.—without manual input.
  </li>
</ul>
<p>
  These features will greatly enhance the usability and profitability of
  Slipstream, transforming it from a fun, niche app to a valuable, professional
  invoicing tool for a wider audience.
</p>

<h2 id="technology-stack">Technology Stack</h2>
<p>
  Slipstream leverages a range of modern web technologies to deliver a smooth,
  responsive, and highly customizable invoicing experience. Below is a breakdown
  of the key technologies used:
</p>
<h3>1. Frontend Technologies</h3>
<p>
  Slipstream’s frontend is designed with simplicity and responsiveness in mind.
  The following technologies were used to craft an intuitive, accessible, and
  visually appealing user interface:
</p>
<ul>
  <li>
    <strong>HTML:</strong> The structure of the website is built entirely using
    HTML5, ensuring semantic tags and proper accessibility standards are
    followed.
  </li>
  <li>
    <strong>CSS:</strong> The app's layout and styling are crafted with custom
    CSS. Media queries are utilized to make the website fully responsive across
    all device types—ensuring users can create invoices seamlessly whether on
    desktop or mobile devices.
  </li>
  <li>
    <strong>JavaScript:</strong> Vanilla JavaScript is used for interactive
    elements, including on-click events that allow users to modify invoice item
    names and values dynamically. These interactions provide a fluid and
    responsive user experience without relying on additional libraries.
  </li>
  <li>
    <strong>Responsive Design:</strong> Media queries are a crucial part of
    making the web app adaptable for various screen sizes, ensuring users have
    an optimized experience on all devices.
  </li>
</ul>
<h3>2. Deployment</h3>
<p>
  Slipstream is deployed on <strong>GitHub Pages</strong>, allowing for easy
  hosting of static websites with direct integration into the GitHub repository.
  This platform provides a simple and free hosting solution for small to
  medium-scale projects.
</p>

<h2 id="api-usage">API Usage</h2>
<p>
  While Slipstream operates mainly on the frontend with JavaScript, it leverages
  two powerful APIs—<strong>HTML2CANVAS</strong> and <strong>jsPDF</strong>—to
  generate dynamic invoices and export them as PDFs. These APIs are integral to
  the process of saving the user's invoice data in a downloadable format. Below
  is an overview of each API's role, along with links to their documentation for
  further reference:
</p>
<h3>1. HTML2CANVAS</h3>
<p>
  <strong>HTML2CANVAS</strong> is a JavaScript library that allows the
  conversion of HTML elements into a canvas image, which is ideal for taking a
  snapshot of the invoice as displayed in the web browser. This enables the
  generation of invoice previews that can be later converted into a PDF file
  using jsPDF.
</p>
<ul>
  <li>
    <strong>Usage in Slipstream:</strong> HTML2CANVAS captures the visual
    representation of the invoice as a canvas image, which is then processed and
    passed to the jsPDF API for PDF generation.
  </li>
</ul>
<h3>2. jsPDF</h3>
<p>
  <strong>jsPDF</strong> is a JavaScript library that provides the capability to
  create and manipulate PDF files directly in the browser. It enables the
  functionality to take the rendered invoice, along with other user inputs, and
  export it as a fully formatted, shareable PDF document.
</p>
<ul>
  <li>
    <strong>Usage in Slipstream:</strong> Once HTML2CANVAS has generated an
    image of the invoice, jsPDF formats that image into a PDF, making it ready
    for the user to download or save for later use.
  </li>
</ul>
<h3>API Documentation</h3>
<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>API</th>
      <th>Purpose</th>
      <th>Documentation Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML2CANVAS</td>
      <td>
        Captures HTML content as a canvas image, ideal for rendering visible
        elements into formats that can be converted into PDFs.
      </td>
      <td>
        <a href="https://html2canvas.hertzen.com/" target="_blank"
          >HTML2CANVAS Documentation</a
        >
      </td>
    </tr>
    <tr>
      <td>jsPDF</td>
      <td>
        Generates PDF files directly in the browser, including features like
        image support, text formatting, and table creation.
      </td>
      <td>
        <a href="https://github.com/parallax/jsPDF" target="_blank"
          >jsPDF Documentation</a
        >
      </td>
    </tr>
  </tbody>
</table>
<p>
  Both of these libraries are key to ensuring Slipstream can offer a seamless,
  high-quality PDF generation experience right in the user’s browser. They work
  together to allow the user to design their invoice, generate a screenshot of
  it, and create a professional PDF file for sharing or printing.
</p>

<h3>1. Future API Integration</h3>
<p>
  Currently, Slipstream operates entirely on the frontend without a backend,
  meaning there’s no direct interaction with databases or external services.
  However, plans for future API integration are central to the app’s roadmap,
  particularly when adding the ability to save and retrieve invoices server-side
  or to integrate payment processing.
</p>
<ul>
  <li>
    <strong>Invoice Data Storage:</strong> One of the major updates will involve
    connecting to a server-side API that allows users to store invoices securely
    on the server. This will allow users to create an account, save their data,
    and access/edit past invoices. A common API structure for this could use
    <strong>RESTful endpoints</strong> (GET, POST, PUT, DELETE) to handle
    operations on invoice data.
  </li>
  <li>
    <strong>Payment Gateway Integration:</strong> The app will integrate payment
    APIs (e.g., <strong>Stripe</strong>, <strong>PayPal</strong>, or
    <strong>Square</strong>) in future iterations. These APIs will allow users
    to send an invoice to clients, accept payments, and even track payment
    statuses directly within the app, streamlining the workflow for freelancers
    and small business owners.
  </li>
</ul>

<h2 id="challenges-and-solutions">Challenges and Solutions</h2>
<p>
  Throughout the development of Slipstream, I encountered several challenges
  related to both the technical implementation and the overall design.
  Overcoming these obstacles required significant troubleshooting, research, and
  testing. Here’s an in-depth breakdown of the key challenges I faced and how I
  solved them.
</p>
<h3>1. Development Challenges</h3>
<p>
  <strong>Mobile-First Development:</strong> One of the most important decisions
  I made early in this project was adopting a <em>mobile-first</em> approach to
  the design. In Milestone 1, I neglected to prioritize responsiveness, which
  led to a number of challenges later on when I needed to optimize the website
  for mobile devices. With this in mind, I dedicated considerable effort to
  building the site for mobile devices before scaling up to larger screen sizes.
  This mobile-first approach not only helped streamline development, but it also
  provided a smoother user experience across all devices from the beginning.
</p>
<p>
  Using media queries in CSS, I adjusted the layout and design components for
  smaller screen sizes. This process required significant trial and error,
  especially with more complex components like the invoice preview area.
  However, by building mobile-first, it made the transition to tablet and
  desktop screen sizes much more manageable, resulting in a responsive, adaptive
  user interface.
</p>
<p>
  <strong>Dynamic Data Updates:</strong> A critical function of the site was
  dynamically updating the data displayed on the invoice, based on user input.
  This meant that, as the user adjusted quantities, pricing, discount rates, VAT
  percentages, and other information, the subtotal and total values needed to
  reflect these changes immediately. Initially, this posed a challenge as I was
  using global variables and arrow functions to manage these updates across the
  JavaScript logic. At first, I struggled with keeping track of the updated
  values for each individual line item and recalculating totals without errors.
  Thankfully, after extensive research into JavaScript’s global scope and
  variable handling, I found the necessary strategies for storing and updating
  invoice details correctly.
</p>
<p>
  Research into JavaScript’s handling of global variables also played a pivotal
  role in making sure values were recalculated in real-time without conflicts.
  Arrow functions were another key part of my solution since they provided the
  concise and correct context for my code’s execution, ensuring that all dynamic
  data updates functioned as expected. Once the architecture for this data flow
  was in place, managing dynamic updates became much easier.
</p>
<p>
  <strong>API Integration Problems (jsPDF & HTML2CANVAS):</strong> One of the
  most complex challenges was integrating jsPDF and HTML2CANVAS to allow users
  to download their invoices as PDFs. Initially, when testing the site locally,
  the result was very different from what I saw on the screen. The generated
  PDFs didn’t match the layout and styling of the invoice displayed in the
  browser; black squares appeared in place of images, and text was misaligned or
  cut off. This made it difficult to ensure a consistent, professional look for
  downloaded invoices.
</p>
<p>
  After some debugging, I discovered that the issue likely stemmed from the
  Cross-Origin Resource Sharing (CORS) policy due to hosting the site locally.
  The "tainted canvas" issue meant the canvas rendered by HTML2CANVAS couldn’t
  be fully processed by jsPDF. To address this, I took a few steps to eliminate
  potential causes of the problem. After modifying my code to ensure that the
  canvas wasn’t tainted (by checking for cross-origin content like images), I
  deployed the site to GitHub Pages for live testing.
</p>
<p>
  Once the site was deployed, I tested the PDF generation again, and this time
  the invoices were successfully rendered as PDFs. The problem was resolved, and
  I learned that issues with local development environments can often lead to
  CORS-related bugs when dealing with external assets and APIs. This experience
  taught me the importance of testing in a live environment and gave me a deeper
  understanding of how browser security measures like CORS can impact
  functionality.
</p>
<h3>2. Design & Styling</h3>
<p>
  <strong>Balancing Modern and Retro Design:</strong> As someone with a
  background in graphic design and UI, creating a visually appealing and
  effective design for Slipstream was one of the more enjoyable parts of the
  project. However, the key challenge came from blending modern, sleek web
  design principles with retro-inspired receipt styling. My goal was to create a
  tool that felt both professional and playful, reflecting a sense of nostalgia
  through its receipt format while still providing a modern, streamlined user
  experience.
</p>
<p>
  Finding the right balance required experimentation with fonts, spacing, and
  layout design. I wanted to maintain a minimal and clean user interface while
  incorporating vintage details like receipt borders, a bold sans-serif font,
  and a soft color palette. One particular area that required significant
  adjustment was the hero section’s layout. Initially, the typography and
  call-to-action buttons felt too overwhelming on larger screens, so I
  reorganized this section to create better visual harmony without detracting
  from the rest of the page.
</p>
<p>
  Despite this design challenge, I ultimately stayed true to my initial vision.
  The receipt-based layout became the focal point of the design, using modern
  web elements like smooth animations, responsive grids, and clear navigation
  menus to create a user-friendly experience. In the end, the blend of modern
  and nostalgic styles was both functional and visually appealing, fulfilling
  the app's mission of offering creative invoicing while retaining a
  professional and minimalist aesthetic.
</p>
<h3>3. Performance</h3>
<p>
  <strong>No Major Performance Issues:</strong> Throughout development, I didn’t
  encounter significant performance issues related to speed or responsiveness.
  This was especially crucial as generating and exporting invoices can sometimes
  be resource-heavy, depending on the complexity of the user's invoice and the
  amount of data processed in real-time. Given that I was working exclusively on
  the front-end, I focused on optimizing assets like images, choosing WebP file
  formats for their small size and high-quality output, which significantly
  improved loading times. Additionally, I kept the number of HTTP requests as
  minimal as possible to ensure a smooth, fast user experience.
</p>
<p>
  Compared to my first project, where loading times were slower due to larger
  image sizes and less efficient code, Slipstream performs much more efficiently
  and smoothly. During testing, I confirmed that the site remains fast even when
  generating and exporting detailed invoices, and there were no noticeable lags
  when handling multiple item entries or calculations.
</p>
<h3>4. Future Improvements</h3>
<p>
  <strong>Adding Server-Side Data Persistence:</strong> The most significant
  improvement for the future would be the ability to store invoice data on the
  server, allowing users to return to their accounts and make updates to
  previous invoices, or access past documents at any time. Currently, the app is
  limited to generating invoices that cannot be saved for future use—once a user
  leaves the page, all entered data is lost. Implementing server-side storage or
  a database like MySQL or MongoDB could enable features such as saving user
  profiles, storing invoice records, and even offering analytics regarding
  payments and invoice history.
</p>
<p>
  By integrating a backend API and using a database, users could login to their
  accounts, review and edit past invoices, or even have invoices automatically
  categorized by client or date. For example, adding a “dashboard” where users
  could organize invoices, track payments, and add or remove clients would be
  extremely beneficial in improving the site's functionality.
</p>
<p>
  Another potential future improvement would be adding
  <strong>payment integration</strong>. While the current version of Slipstream
  focuses on generating invoices, adding integration with payment systems (like
  Stripe or PayPal) would allow users to request payments directly within the
  invoices they generate. This could potentially turn the app into a more
  comprehensive freelance invoicing and payment management tool, making the
  process seamless for both the user and their clients.
</p>

<section id="design-decisions">
  <h2>Design Decisions</h2>

  <h3>Sitemap and Wireframes</h3>
  <img
    width="684"
    alt="Screenshot 2024-12-16 at 13 14 51"
    src="https://github.com/user-attachments/assets/cc744af1-45ef-40bc-b4e8-8fe471c25eca"
  />

<img
    width="250"
    alt="Screenshot 2024-12-16 at 13 15 48"
    src="https://github.com/user-attachments/assets/00137116-cb1c-40b1-a3ba-6b474721a337"
  />

  https://ibb.co/S44S74SC

  https://ibb.co/Ndm4Xcq9

  <h3>Color Scheme</h3>
  <p>
    Slipstream features a sleek and modern color palette that sets the tone for
    its professional and stylish aesthetic:
    <img
      width="783"
      alt="Screenshot 2024-12-16 at 13 29 06"
      src="https://github.com/user-attachments/assets/eb67efa8-b95b-4891-83af-7c1545bf7600"
    />
  </p>
  <ul>
    <li>
      <strong>Primary Colors:</strong> Black and white form a minimalistic base,
      creating a polished UI that aligns with modern web design trends.
    </li>
    <li>
      <strong>Accent Color:</strong> A vibrant purple is used for branding and
      accent elements, adding a pop of personality and sophistication.
    </li>
    <li>
      <strong>Design Influence:</strong> The contrast between the modern color
      scheme and the nostalgic receipt-style invoices exaggerates Slipstream’s
      unique combination of contemporary functionality and playful design. This
      deliberate clash gives the app a distinctive edge.
    </li>
  </ul>
  <p>
    <strong>Tools Used:</strong> The color palette was crafted using
    <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer"
      >Coolors</a
    >, a tool known for generating cohesive and visually appealing color
    schemes.
  </p>

  <h3>Typography</h3>
  <img
    width="605"
    alt="Screenshot 2024-12-16 at 13 30 10"
    src="https://github.com/user-attachments/assets/1917c38c-115f-4cb0-851a-2ab3058932d2"
  />
  <p>
    Typography was chosen to enhance the modern UI and also to evoke the
    nostalgic feel of physical receipts:
  </p>
  <ul>
    <li>
      <strong>Main UI Typeface:</strong> DM Sans, a clean and elegant sans-serif
      font available on
      <a
        href="https://fonts.google.com/specimen/DM+Sans"
        target="_blank"
        rel="noopener noreferrer"
        >Google Fonts</a
      >, was selected for its readability and modern appeal.
    </li>
    <ul>
      <li>
        <strong>Heading Styling:</strong> Bold or Extra Bold weights are used
        for headings to create clear visual hierarchy.
      </li>
      <li>
        <strong>Body Text Styling:</strong> Light or Regular weights are applied
        for content and smaller details, offering a balanced visual flow.
      </li>
      <li>
        DM Sans is reminiscent of contemporary fonts like
        <strong>SF Pro</strong>, often seen in Apple's design language, which
        helps give Slipstream a cutting-edge feel.
      </li>
    </ul>
    <li>
      <strong>Receipt Typeface:</strong> The font on receipts is Anonymous,
      transformed into all uppercase. This typeface was chosen to closely
      emulate the fonts typically used in real-world receipts while maintaining
      Slipstream’s originality. This blend grounds the receipt aesthetic in
      reality, while still giving it a digital twist.
    </li>
  </ul>
  <img
    width="1083"
    alt="Screenshot 2024-12-16 at 13 30 54"
    src="https://github.com/user-attachments/assets/650f5a92-8948-4db6-b64d-6093d41d58c6"
  />

  <h3>Favicon</h3>
  <p>
    The favicon was custom-made in favicon.cc, a website I discovered a few
    months ago. I liked the idea of a retro favicon reminiscent of those you'd
    see in the early 2000s and late 1990s. The low-resolution style that
    favicon.cc offers is perfect for this project.
  </p>
  <img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 20 20"
    src="https://github.com/user-attachments/assets/886b8cea-63d5-4e84-8263-37b592ba384d"
  />

  <h3>Error 404 page</h3>
  <p>
    I had a lot of fun styling various aspects of the website into more
    nostalgic-analog type designs. I am inspired heavily by Pieter Levels (a
    popular indie developer.) and his website https://pieter.com/
  </p>
  <img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 28 41"
    src="https://github.com/user-attachments/assets/1fe24bd2-4f8c-4ce0-b12a-4bf23f3a302b"
  />

  <h3>Accessibility Features</h3>
  <ul>
    <li>
      <strong>High Contrast Design:</strong> The predominant use of black and
      white provides ample contrast, allowing content to be easily readable for
      users with color blindness or visual impairments.
    </li>
    <li>
      <strong>Font Size:</strong> All typography adheres to standard sizes,
      ensuring legibility across devices and resolutions.
    </li>
    <li>
      <strong>Alt Text for Images:</strong> Relevant images across the app
      include descriptive alt text to support screen readers and aid users who
      rely on assistive technologies.
    </li>
  </ul>
</section>

<h1 id="goals-i-aimed-to-achieve-in-development">Goals I Aimed to achieve in development</h1>

<h2>Project Goals</h2>
<p>
  - To build a web-based invoice generator that allows users to easily create
  and personalize receipt-style invoices.
</p>
<p>
  - To provide a fun, easy-to-use tool for freelancers and small business owners
  to generate professional invoices with a creative twist.
</p>

<h2>User Goals</h2>
<p>
  - <strong>Freelancers/Small Business Owners</strong>: Quickly generate
  invoices that are professional yet creative, and easy to customize.
</p>
<p>
  - <strong>Personal Users</strong> (e.g., friends splitting bills): Use the
  invoice generator to create fun, customized receipts for personal use.
</p>

<h2>Site Owner Goals</h2>
<p>- To offer a tool that simplifies invoice creation.</p>
<p>
  - To attract users who seek a simple, intuitive design while maintaining a
  professional appearance.
</p>
<p>
  - To ensure the tool can be used by both professionals and casual users, with
  mobile responsiveness and easy navigation.
</p>

<h2>Developer Goals</h2>
<p>- To deliver a fully responsive website using HTML, CSS, and JavaScript.</p>
<p>
  - To implement interactive features such as modals, dynamic content updates,
  and form handling.
</p>
<p>- To ensure the website is tested for bugs and optimized for performance.</p>

<h2>User Stories</h2>
<ul>
  <li>
    <strong>As a freelancer</strong>, I want to quickly generate invoices with
    customizable fields, so I can send professional invoices to my clients.
  </li>
  <li>
    <strong>As a user</strong>, I want to select from a variety of background
    textures, so I can personalize my invoice design.
  </li>
  <li>
    <strong>As a first-time visitor</strong>, I want to easily navigate through
    the site to create and download an invoice.
  </li>
</ul>

<h2>First Time Visitor Goals</h2>
<ul>
  <li>
    Understand what the website offers and be able to generate an invoice
    immediately.
  </li>
  <li>
    Interact with the various dynamic elements such as form fields, buttons, and
    background textures.
  </li>
</ul>

<h2>Returning Visitor Goals</h2>
<ul>
  <li>Quickly access their previous invoices (if stored).</li>
  <li>Easily customize and download new invoices.</li>
</ul>

<h2>Frequent Visitor Goals</h2>
<ul>
  <li>
    Utilize advanced features like saving invoices and re-using them later.
  </li>
  <li>Integrate the invoice tool into their business workflow.</li>
</ul>

<h2 id="five-planes-of-ux">Five Planes of UX</h2>
<h3>Strategy</h3>
<p>
  The site is aimed at both professionals and personal users, with simple yet
  functional features to meet the needs of different user groups.
</p>

<h3>Scope</h3>
<p>Focuses on the creation, customization, and download of invoices.</p>
<p>
  Includes features for modifying invoice fields, setting due dates, and adding
  items.
</p>

<h3>Structure</h3>
<p>
  The website structure includes a homepage, an invoicing page, and a pricing
  page, all linked by a sticky navigation bar.
</p>

<h3>Skeleton</h3>
<p>
  Consists of clearly defined sections: header, body content (invoice builder),
  and footer. All pages are responsive and adjust based on screen size.
</p>

<h3>Surface</h3>
<p>
  Clean and modern design with playful elements (e.g., background textures,
  dynamic text).
</p>

<h2 id="viability-and-feasibility">Viability and Feasibility</h2>
<h3>Technical feasibility</h3>
<p>
  The project uses HTML, CSS, JavaScript, and external libraries (e.g., jsPDF
  for PDF generation, html2canvas for screenshots).
</p>

<h3>Business feasibility</h3>
<p>The tool is free and can attract users with easy-to-use features.</p>

<h2 id="content-requirements">Content Requirements</h2>
<h3>Section: Navigation Bar</h3>
<p>
  A sticky navigation bar that links to the homepage, invoice page, and pricing
  page. Includes a logo and links to key sections.

<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 45 51"
    src="https://github.com/user-attachments/assets/64dfc6ef-4045-4179-baeb-bb8aa778584f"
  />

</p>

<h3>Section: Footer</h3>
<p>
  Contains quick links, contact info, and a copyright statement.
  <img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 46 46"
    src="https://github.com/user-attachments/assets/87194524-1095-469f-9429-4318865c445d"
  />
</p>

<h3>Webpage: Homepage</h3>
<p>
  Welcomes users with a brief description of the tool. Prominently displays a
  call-to-action button to start generating an invoice.
  <img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 47 26"
    src="https://github.com/user-attachments/assets/e81968b4-2a17-448f-a014-e8136e84d7ad"
  />
</p>

<h3>Popup: How to Use</h3>
<p>
  Step-by-step instructions for using the invoice generator. Provides guidance
  on how to customize fields and download the invoice.

<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 47 55"
    src="https://github.com/user-attachments/assets/4e11e732-e507-481d-ba9b-24042d395e06"
  />

</p>

<h3>Webpage: 404</h3>
<p>
  Custom 404-page guiding users back to the homepage or offering links to key
  pages.

<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 28 41"
    src="https://github.com/user-attachments/assets/b6dc2972-ee21-42b9-9be7-8a72f7356a00"
  />

</p>

<h2 id="structure-1">Structure</h2>
<h3>Overall Structure</h3>
<p>
  The site is structured with a homepage, an invoice generator, a pricing page,
  and error pages like 404.
</p>

<h3>Information Architecture</h3>
<p>
  Logical flow from homepage to invoicing page, and options for further
  customization via the interface.
</p>

<h3>Interactive Experience</h3>
<p>
  Users interact with dynamic fields (editable text, date pickers) to customize
  their invoices. Features like background texture change, modal dialogs, and a
  reset button enhance the user experience.
</p>

<h2 id="changes-during-development">Changes During Development</h2>
<p>
  Adjustments were made to ensure responsiveness and improve the layout of the
  invoice generator. Modified the "Start Free" button to be more visible on
  smaller screens.
</p>

<h3>Results Modal</h3>
<p>Displays a success message after generating an invoice.</p>

<h3>404 Page Message</h3>
<p>A custom error message that guides users back to the homepage.</p>

<h1 id="testing">Testing</h1>
<p>
  Extensive testing was conducted for all interactive elements, including forms,
  modals, and responsive design.
</p>

<h3>What is manual testing</h3>
<p>

Requirement Analysis:

Understand the Requirements: Review specifications, user stories, or business requirements to identify what needs to be tested.
Identify Test Scenarios: Determine the areas of the application that are critical and need focused testing.
Test Planning:

Define Scope and Objectives: Outline what features and functionalities will be tested.
Resource Planning: Determine the team members, tools, and time required for testing.
Risk Analysis: Identify potential risks and decide on contingency plans.
Test Case Design:

Write Detailed Test Cases: Develop test cases that cover various use cases, including positive, negative, and edge cases.
Test Data Preparation: Create or gather the necessary data to execute the test cases.
Test Environment Setup:

Configure the Test Environment: Set up the hardware, software, and network configurations to mimic the production environment as closely as possible.
Test Execution:

Run Test Cases Manually: Execute each test case step-by-step as written, recording the results for each test.
Exploratory Testing: In addition to scripted tests, testers may explore the application freely to discover unexpected behaviors.
Defect Reporting:

Log Issues: Document any discrepancies or bugs found, including details on how to reproduce them, the expected versus actual behavior, and the environment details.
Severity and Priority: Assign a severity level and priority to help developers address the issues effectively.
Retesting and Regression Testing:

Retest Fixed Issues: Once defects are resolved, retest to ensure the fixes work as expected.
Regression Testing: Verify that new changes haven't adversely affected existing functionalities.
Test Closure:

Review and Document Results: Summarize the testing efforts, detailing what was tested, what defects were found, and overall software quality.
Lessons Learned: Gather feedback and insights to improve future testing cycles.

</p>

<h3>JsLint testing</h3>

<img width="1440" alt="Screenshot 2025-03-14 at 10 37 36" src="https://github.com/user-attachments/assets/74533b13-ee1a-4c42-8347-5c1eb8cbb655" />

<p>The only remaining JsLint warnings are for trailing whitespace</p>

<img width="1374" alt="Screenshot 2025-03-14 at 10 37 46" src="https://github.com/user-attachments/assets/2dd0f35d-6da1-4bb1-9a6c-46c801f6b7ee" />



<h3>Responsivness</h3>
<p>
  Utilized Chrome dev tools as well as https://responsivedesignchecker.com/ to
  check responsiveness of all my web pages and to ensure that the website was
  functional across all screen sizes.

<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 55 27"
    src="https://github.com/user-attachments/assets/79105195-84bc-4905-acbd-d600468cf053"
  />
<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 55 48"
    src="https://github.com/user-attachments/assets/8ae006f7-c6ed-4656-9527-305b4be896ca"
  />
<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 55 53"
    src="https://github.com/user-attachments/assets/8ed356cb-ef27-43f3-94c6-0111bb885b17"
  />
<img
    width="1440"
    alt="Screenshot 2024-12-16 at 15 59 26"
    src="https://github.com/user-attachments/assets/74a0f739-76db-4644-bdd0-8c2201ce3e1e"
  />

</p>

<h3>Lighthouse Testing</h3>
<p>I tested all pages with Chrome's Lighthouse performance tester.</p>

<ul>
  <li>
    <h4>Desktop Testing</h4>
    <ol>
      <li>
        Home page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 03 36"
          src="https://github.com/user-attachments/assets/b8fbd906-c3d4-4bbf-9763-31558955b848"
        />
      </li>
      <li>
        Invoice Page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 03 54"
          src="https://github.com/user-attachments/assets/88c10c78-0b96-4a9b-bd5e-23393ee67ed1"
        />
      </li>
      <li>
        Pricing Page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 04 55"
          src="https://github.com/user-attachments/assets/b95cfa1d-4135-4b73-ba3f-2b1bdeeba4e7"
        />
      </li>
    </ol>
  </li>

  <li>
    <h4>Mobile Testing</h4>
    <ol>
      <li>
        Home Page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 01 40"
          src="https://github.com/user-attachments/assets/d1499a31-22bf-455a-83c3-07a2e1ca5859"
        />
      </li>
      <li>
        Invoice Page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 03 14"
          src="https://github.com/user-attachments/assets/9c921889-ff92-437d-b1a8-6fa0264593f7"
        />
      </li>
      <li>
        Pricing page
        <img
          width="1440"
          alt="Screenshot 2024-12-16 at 16 02 46"
          src="https://github.com/user-attachments/assets/2cc269de-be2a-457c-ab1f-a5c75a62e10c"
        />
      </li>
    </ol>
  </li>
</ul>

<h3>Errors found when testing</h3>
<img width="1437" alt="Screenshot 2024-12-17 at 20 01 37" src="https://github.com/user-attachments/assets/b8ecb694-1be1-43a0-bebe-7757f1bcbfed" />
<p>The scale errors are void as the scale property was added to CSS. 
  Proof: https://www.w3schools.com/cssref/css_pr_scale.php
  Proof: https://css-tricks.com/almanac/properties/s/scale/
</p>
<img width="1440" alt="Screenshot 2024-12-17 at 20 05 41" src="https://github.com/user-attachments/assets/fb51b501-d4cf-4c46-aa1d-38df246b8430" />
<p>No HTML errors were found when testing.</p>

<h3>Bugs</h3>
<p>
  <strong>Known Bugs</strong>: Minor display issues in Internet Explorer; some
  features (like hover effects) may not render correctly.
</p>

<h3>Mistakes</h3>
<p>
  Early versions lacked mobile responsiveness; this was fixed during
  development.
</p>

<h2>Deployment</h2>
<p>
  Slipstream was deployed using GitHub Pages, ensuring the project is publicly
  accessible and easy to use. Below, you’ll find instructions for accessing the
  deployed site, running it locally, and contributing to the project.
</p>
<h3>Deployment to GitHub Pages</h3>
<p>
  The project has been deployed using GitHub Pages for a seamless, public-facing
  experience. It is hosted at the following URL:
</p>
<ul>
  <li>
    <a
      href="https://lukeromburgh.github.io/invoiceGenerator/index.html"
      target="_blank"
      >Live Project</a
    >
  </li>
</ul>
<h3>Steps for Local Deployment</h3>
<p>If you wish to run the project locally, follow these steps:</p>
<ol>
  <li>
    Clone the repository to your local machine using Git or by downloading the
    ZIP file:
  </li>
  <pre><code>git clone https://github.com/lukeromburgh/invoiceGenerator.git</code></pre>
  <li>Navigate to the cloned repository folder on your machine.</li>
  <li>
    Open the <code>index.html</code> file in any browser to launch the app
    locally.
  </li>
</ol>
<h3>Forking the Repository</h3>
<p>
  If you'd like to contribute to the project, you can fork the repository and
  make your changes. Here’s how:
</p>
<ol>
  <li>
    Visit the
    <a href="https://github.com/lukeromburgh/invoiceGenerator" target="_blank"
      >GitHub repository</a
    >.
  </li>
  <li>Click the "Fork" button in the upper right-hand corner of the page.</li>
  <li>Clone your forked repository to your local machine.</li>
  <pre><code>git clone https://github.com/your-username/invoiceGenerator.git</code></pre>
  <li>
    Make your changes, push them to your forked repository, and submit a pull
    request for review.
  </li>
</ol>
<h3>Handling Navigation Errors</h3>
<p>
  To improve the user experience, a custom <code>404.html</code> page was
  created to handle incorrect navigation or broken links gracefully. Users who
  encounter invalid routes will see an informative and styled 404 page,
  improving site professionalism.
</p>
<h2>Credits</h2>
<h3>Documentation</h3>
<p>
  The project includes extensive inline comments and documentation, guiding
  users and developers through the structure, purpose, and usage of the app. For
  detailed explanations on functionalities and tools used, please refer to this
  README file.
</p>
<h3>Media</h3>
<p>
  All media and images used in this project were sourced from royalty-free
  platforms or were self-created to ensure there are no copyright issues. This
  aligns with ethical development practices.
</p>
<h3>Code</h3>
<p>
  All the code in this project was independently written by the developer as
  part of the Code Institute’s bootcamp coursework. No external template or
  pre-written library was used for styling or logic.
</p>
<h3>Acknowledgements</h3>
<p>
  A special thanks goes out to the Code Institute’s instructors and the
  supportive developer community for their invaluable guidance and constructive
  feedback throughout this milestone project.
</p>
<p>
  For further details or questions about the project, feel free to explore the
  repository:
</p>
<ul>
  <li>
    <a
      href="https://github.com/lukeromburgh/invoiceGenerator/tree/main"
      target="_blank"
      >GitHub Repository</a
    >
  </li>
</ul>
