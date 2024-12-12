# invoiceGenerator
 A receipt styled invoice generator | Milestone 2

 Project Title: Design Quote Generator / Invoice Generator
Project Goals
To build a web-based invoice generator that allows users to easily create and personalize receipt-style invoices.
To provide a fun, easy-to-use tool for freelancers and small business owners to generate professional invoices with a creative twist.
User Goals
Freelancers/Small Business Owners: Quickly generate invoices that are professional yet creative, and easy to customize.
Personal Users (e.g., friends splitting bills): Use the invoice generator to create fun, customized receipts for personal use.
Site Owner Goals
To offer a tool that simplifies invoice creation.
To attract users who seek a simple, intuitive design while maintaining a professional appearance.
To ensure the tool can be used by both professionals and casual users, with mobile responsiveness and easy navigation.
Developer Goals
To deliver a fully responsive website using HTML, CSS, and JavaScript.
To implement interactive features such as modals, dynamic content updates, and form handling.
To ensure the website is tested for bugs and optimized for performance.
User Stories
As a freelancer, I want to quickly generate invoices with customizable fields, so I can send professional invoices to my clients.
As a user, I want to select from a variety of background textures, so I can personalize my invoice design.
As a first-time visitor, I want to easily navigate through the site to create and download an invoice.
First Time Visitor Goals
Understand what the website offers and be able to generate an invoice immediately.
Interact with the various dynamic elements such as form fields, buttons, and background textures.
Returning Visitor Goals
Quickly access their previous invoices (if stored).
Easily customize and download new invoices.
Frequent Visitor Goals
Utilize advanced features like saving custom invoice templates or recurring invoice generation.
Integrate the invoice tool into their business workflow.
Five Planes of UX
Strategy:
The site is aimed at both professionals and personal users, with simple yet functional features to meet the needs of different user groups.
Scope:
Focuses on the creation, customization, and download of invoices.
Includes features for modifying invoice fields, setting due dates, and adding items.
Structure:
The website structure includes a homepage, invoicing page, and a contact page, all linked by a sticky navigation bar.
Skeleton:
Consists of clearly defined sections: header, body content (invoice builder), and footer. All pages are responsive and adjust based on screen size.
Surface:
Clean and modern design with playful elements (e.g., background textures, dynamic text).
Viability and Feasibility
Technical feasibility: The project uses HTML, CSS, JavaScript, and external libraries (e.g., jsPDF for PDF generation, html2canvas for screenshots).
Business feasibility: The tool is free and can attract users with easy-to-use features.
Content Requirements
Content should include default placeholders for invoices (e.g., designer name, client name, items, and prices).
Pages should be informative, offering clear instructions on how to use the tool.
Section: Navigation Bar
A sticky navigation bar that links to the homepage, invoice page, and contact page.
Includes a logo and links to key sections.
Section: Footer
Contains quick links, contact info, and a copyright statement.
Webpage: Homepage
Welcomes users with a brief description of the tool.
Prominently displays a call-to-action button to start generating an invoice.
Webpage: How to Play
Step-by-step instructions for using the invoice generator.
Provides guidance on how to customize fields and download the invoice.
Webpage: Contact Me
Simple form for users to send inquiries to the site owner.
Webpage: 404
Custom 404 page guiding users back to the homepage or offering links to key pages.
Structure
Overall Structure
The site is structured with a homepage, an invoice generator, a contact page, and error pages like 404.
Information Architecture
Logical flow from homepage to invoicing page, and options for further customization via the interface.
Interactive Experience
Users interact with dynamic fields (editable text, date pickers, dropdowns) to customize their invoice.
Features like background texture change, modal dialogs, and a reset button enhance the user experience.
Skeleton
Wireframes
Home Page
A large hero section with a call-to-action (CTA) button.
Links to important pages: How to Play, and Contact.
How to Play
A simple, instructional page with bullet points and an intuitive layout.
Contact Me
A form with fields for name, email, and message.
404
A message informing users that the page does not exist, with links to navigate back.
Changes During Development
Adjustments were made to ensure responsiveness and improve the layout of the invoice generator.
Modified the "Start Free" button to be more visible on smaller screens.
Surface
Colour Scheme
Uses a dark theme with bright accents for buttons and highlights, providing a professional and modern feel.
Typography
The project uses the "DM Sans" font for all text, ensuring readability and a modern look.
Images
Background textures for the invoice generator.
Logos for branding and testimonials.
Features
The Game Area
A dynamic area where users input data for their invoice, including client details, items, and payment information.
Browser Tab
The tab displays "Design Quote Generator" when the site is loaded, and "Invoice Generated" when the user completes the invoice.
Website Header
Includes the logo and navigation links.
How to Play
A page detailing how users can interact with the tool.
Contact Me
A simple contact form for user inquiries.
Sequence Select
Allows users to select the sequence or type of invoice they wish to create.
Results Modal
Displays a success message after generating an invoice.
Reset Button
Resets all input fields to their default values.
404 Page Message
A custom error message that guides users back to the homepage.
Future Development
Add a feature to save invoices and re-use them later.
Integrate payment tracking for invoices.
Improve mobile UI for better small-screen experiences.
Technologies Used
Languages
HTML
CSS
JavaScript
Frameworks
None (custom solution using pure HTML, CSS, and JavaScript)
Tools
jsPDF for generating PDFs from the invoice.
html2canvas for capturing the invoice as an image.
Testing
Extensive testing was conducted for all interactive elements, including forms, modals, and responsive design.
Unit testing for JavaScript functions (e.g., calculation of VAT, discount, and total).
Bugs
Known Bugs: Minor display issues in Internet Explorer; some features (like hover effects) may not render correctly.
Mistakes
Early versions lacked mobile responsiveness; this was fixed during development.
Deployment
Deployment to GitHub Pages
The project was deployed using GitHub Pages to make it publicly accessible.
Deploying Locally
Clone the repository and open the index.html file in any browser to use the site locally.
Forking The Repository
Instructions on how to fork the repository and contribute.
Addition of 404.html
The 404 page was added to handle user navigation errors.
Credits
Documentation
Extensive documentation has been provided for users to understand how to interact with the website.
Media
All images and media content used are sourced from royalty-free platforms or self-created.
Code
All code was written by the developer during the bootcamp course.
Acknowledgements
Special thanks to the bootcamp instructors and peers for guidance and feedback.
