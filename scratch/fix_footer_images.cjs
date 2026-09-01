const fs = require('fs');
let footer = fs.readFileSync('src/components/layout/Footer.jsx', 'utf8');

footer = footer.replace(/<img src="\/img\/footerLogo\.webp" alt="" \/>/g, '<img src="/img/footerLogo.webp" alt="Uncodemy Logo" width="200" height="60" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/1\.webp" alt="Description of the image" \/>/g, '<img src="/img/1.webp" alt="Award 1" width="100" height="40" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/acheive\.webp" alt="Description of the image" \/>/g, '<img src="/img/acheive.webp" alt="Achievement" width="100" height="40" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/Trustpilot-Reviews-Services-1\.webp"[\s\S]*?\/>/g, '<img src="/img/Trustpilot-Reviews-Services-1.webp" alt="Trustpilot Reviews" width="100" height="40" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/CONTACT-US\.webp"[\s\S]*?\/>/g, '<img src="/img/CONTACT-US.webp" alt="Contact Us" width="100" height="40" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/payment\.webp"[\s\S]*?\/>/g, '<img src="/img/payment.webp" alt="Fee Payment" width="200" height="80" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/whatsappp-logo-png-2293-768x512\.webp"[\s\S]*?\/>/g, '<img src="/img/whatsappp-logo-png-2293-768x512.webp" alt="WhatsApp Contact" width="200" height="80" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/demo\.webp"[\s\S]*?\/>/g, '<img src="/img/demo.webp" alt="Demo Classes" width="200" height="80" loading="lazy" />');
footer = footer.replace(/<img src="\/img\/pc5\.webp"[\s\S]*?\/>/g, '<img src="/img/pc5.webp" alt="Placement Cell" width="200" height="80" loading="lazy" />');

fs.writeFileSync('src/components/layout/Footer.jsx', footer);
console.log('Fixed Footer images');
