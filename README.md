<h1>Design Quote Generator / Invoice Generator</h1>

    <h2>Project Goals</h2>
    <p>- To build a web-based invoice generator that allows users to easily create and personalize receipt-style invoices.</p>
    <p>- To provide a fun, easy-to-use tool for freelancers and small business owners to generate professional invoices with a creative twist.</p>

    <h2>User Goals</h2>
    <p>- <strong>Freelancers/Small Business Owners</strong>: Quickly generate invoices that are professional yet creative, and easy to customize.</p>
    <p>- <strong>Personal Users</strong> (e.g., friends splitting bills): Use the invoice generator to create fun, customized receipts for personal use.</p>

    <h2>Site Owner Goals</h2>
    <p>- To offer a tool that simplifies invoice creation.</p>
    <p>- To attract users who seek a simple, intuitive design while maintaining a professional appearance.</p>
    <p>- To ensure the tool can be used by both professionals and casual users, with mobile responsiveness and easy navigation.</p>

    <h2>Developer Goals</h2>
    <p>- To deliver a fully responsive website using HTML, CSS, and JavaScript.</p>
    <p>- To implement interactive features such as modals, dynamic content updates, and form handling.</p>
    <p>- To ensure the website is tested for bugs and optimized for performance.</p>

    <h2>User Stories</h2>
    <ul>
        <li><strong>As a freelancer</strong>, I want to quickly generate invoices with customizable fields, so I can send professional invoices to my clients.</li>
        <li><strong>As a user</strong>, I want to select from a variety of background textures, so I can personalize my invoice design.</li>
        <li><strong>As a first-time visitor</strong>, I want to easily navigate through the site to create and download an invoice.</li>
    </ul>

    <h2>First Time Visitor Goals</h2>
    <ul>
        <li>Understand what the website offers and be able to generate an invoice immediately.</li>
        <li>Interact with the various dynamic elements such as form fields, buttons, and background textures.</li>
    </ul>

    <h2>Returning Visitor Goals</h2>
    <ul>
        <li>Quickly access their previous invoices (if stored).</li>
        <li>Easily customize and download new invoices.</li>
    </ul>

    <h2>Frequent Visitor Goals</h2>
    <ul>
        <li>Utilize advanced features like saving invoices and re-using them later.</li>
        <li>Integrate the invoice tool into their business workflow.</li>
    </ul>

    <h2>Five Planes of UX</h2>
    <h3>Strategy</h3>
    <p>The site is aimed at both professionals and personal users, with simple yet functional features to meet the needs of different user groups.</p>

    <h3>Scope</h3>
    <p>Focuses on the creation, customization, and download of invoices.</p>
    <p>Includes features for modifying invoice fields, setting due dates, and adding items.</p>

    <h3>Structure</h3>
    <p>The website structure includes a homepage, invoicing page, and a contact page, all linked by a sticky navigation bar.</p>

    <h3>Skeleton</h3>
    <p>Consists of clearly defined sections: header, body content (invoice builder), and footer. All pages are responsive and adjust based on screen size.</p>

    <h3>Surface</h3>
    <p>Clean and modern design with playful elements (e.g., background textures, dynamic text).</p>

    <h2>Viability and Feasibility</h2>
    <h3>Technical feasibility</h3>
    <p>The project uses HTML, CSS, JavaScript, and external libraries (e.g., jsPDF for PDF generation, html2canvas for screenshots).</p>

    <h3>Business feasibility</h3>
    <p>The tool is free and can attract users with easy-to-use features.</p>

    <h2>Content Requirements</h2>
    <h3>Section: Navigation Bar</h3>
    <p>A sticky navigation bar that links to the homepage, invoice page, and contact page. Includes a logo and links to key sections.</p>

    <h3>Section: Footer</h3>
    <p>Contains quick links, contact info, and a copyright statement.</p>

    <h3>Webpage: Homepage</h3>
    <p>Welcomes users with a brief description of the tool. Prominently displays a call-to-action button to start generating an invoice.</p>

    <h3>Webpage: How to Play</h3>
    <p>Step-by-step instructions for using the invoice generator. Provides guidance on how to customize fields and download the invoice.</p>

    <h3>Webpage: Contact Me</h3>
    <p>Simple form for users to send inquiries to the site owner.</p>

    <h3>Webpage: 404</h3>
    <p>Custom 404 page guiding users back to the homepage or offering links to key pages.</p>

    <h2>Structure</h2>
    <h3>Overall Structure</h3>
    <p>The site is structured with a homepage, an invoice generator, a contact page, and error pages like 404.</p>

    <h3>Information Architecture</h3>
    <p>Logical flow from homepage to invoicing page, and options for further customization via the interface.</p>

    <h3>Interactive Experience</h3>
    <p>Users interact with dynamic fields (editable text, date pickers, dropdowns) to customize their invoice. Features like background texture change, modal dialogs, and a reset button enhance the user experience.</p>

    <h2>Skeleton</h2>
    <h3>Wireframes</h3>
    <ul>
        <li><strong>Home Page</strong>: A large hero section with a call-to-action (CTA) button. Links to important pages: How to Play, and Contact.</li>
        <li><strong>How to Play</strong>: A simple, instructional page with bullet points and an intuitive layout.</li>
        <li><strong>Contact Me</strong>: A form with fields for name, email, and message.</li>
        <li><strong>404</strong>: A message informing users that the page does not exist, with links to navigate back.</li>
    </ul>

    <h2>Changes During Development</h2>
    <p>Adjustments were made to ensure responsiveness and improve the layout of the invoice generator. Modified the "Start Free" button to be more visible on smaller screens.</p>

    <h2>Surface</h2>
    <h3>Colour Scheme</h3>
    <p>Uses a dark theme with bright accents for buttons and highlights, providing a professional and modern feel.</p>

    <h3>Typography</h3>
    <p>The project uses the "DM Sans" font for all text, ensuring readability and a modern look.</p>

    <h3>Images</h3>
    <p>Background textures for the invoice generator. Logos for branding and testimonials.</p>

    <h2>Features</h2>
    <h3>The Game Area</h3>
    <p>A dynamic area where users input data for their invoice, including client details, items, and payment information.</p>

    <h3>Browser Tab</h3>
    <p>The tab displays "Design Quote Generator" when the site is loaded, and "Invoice Generated" when the user completes the invoice.</p>

    <h3>Website Header</h3>
    <p>Includes the logo and navigation links.</p>

    <h3>How to Play</h3>
    <p>A page detailing how users can interact with the tool.</p>

    <h3>Contact Me</h3>
    <p>A simple contact form for user inquiries.</p>

    <h3>Sequence Select</h3>
    <p>Allows users to select the sequence or type of invoice they wish to create.</p>

    <h3>Results Modal</h3>
    <p>Displays a success message after generating an invoice.</p>

    <h3>Reset Button</h3>
    <p>Resets all input fields to their default values.</p>

    <h3>404 Page Message</h3>
    <p>A custom error message that guides users back to the homepage.</p>

    <h2>Future Development</h2>
    <ul>
        <li>Add a feature to save invoices and re-use them later.</li>
        <li>Integrate payment tracking for invoices.</li>
        <li>Improve mobile UI for better small-screen experiences.</li>
    </ul>

    <h2>Technologies Used</h2>
    <h3>Languages</h3>
    <p>HTML, CSS, JavaScript</p>

    <h3>Frameworks</h3>
    <p>None (custom solution using pure HTML, CSS, and JavaScript)</p>

    <h3>Tools</h3>
    <p>jsPDF for generating PDFs from the invoice. html2canvas for capturing the invoice as an image.</p>

    <h2>Testing</h2>
    <p>Extensive testing was conducted for all interactive elements, including forms, modals, and responsive design.</p>

    <h3>Bugs</h3>
    <p><strong>Known Bugs</strong>: Minor display issues in Internet Explorer; some features (like hover effects) may not render correctly.</p>

    <h3>Mistakes</h3>
    <p>Early versions lacked mobile responsiveness; this was fixed during development.</p>

    <h2>Deployment</h2>
    <h3>Deployment to GitHub Pages</h3>
    <p>The project was deployed using GitHub Pages to make it publicly accessible.</p>

    <h3>Deploying Locally</h3>
    <p>Clone the repository and open the `index.html` file in any browser to use the site locally.</p>

    <h3>Forking The Repository</h3>
    <p>Instructions on how to fork the repository and contribute.</p>

    <h3>Addition of 404.html</h3>
    <p>The 404 page was added to handle user navigation errors.</p>

    <h2>Credits</h2>
    <h3>Documentation</h3>
    <p>Extensive documentation has been provided for users to understand how to interact with the website.</p>

    <h3>Media</h3>
    <p>All images and media content used are sourced from royalty-free platforms or self-created.</p>

    <h3>Code</h3>
    <p>All code was written by the developer during the bootcamp course.</p>

    <h3>Acknowledgements</h3>
    <p>Special thanks to the bootcamp instructors and peers for guidance and feedback.</p>
