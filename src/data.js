import Ali from './assets/images/avatar-ali.png';
import Anisha from './assets/images/avatar-anisha.png';
import Richard from './assets/images/avatar-richard.png';
import Shanai from './assets/images/avatar-shanai.png';
import Facebook from './assets/images/icon-facebook.svg';
import Youtube from './assets/images/icon-youtube.svg';
import Twitter from './assets/images/icon-twitter.svg';
import Pinterest from './assets/images/icon-pinterest.svg';
import Instagram from './assets/images/icon-instagram.svg';



const NavLinks = [
  {
    title: 'Pricing',
    id: 'Pricing01',
  },
  {
    title: 'Products',
    id: 'Product02',
  },
  {
    title: 'About Us',
    id: 'AboutUs03',
  },
  {
    title: 'Careers',
    id: 'Careers04',
  },
  {
    title: 'Community',
    id: 'Community05',
  },
];

const TestimonialData = [
  {
    id: 'People01',
    image: Anisha,
    name: '  Anisha Li',
    feedback:
      '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
  },
  {
    id: 'People02',
    image: Ali,
    name: 'Ali Bravo',
    feedback:
      '"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
  },
  {
    id: 'People03',
    image: Richard,
    name: '  Richard Watts',
    feedback:
      '"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"',
  },
  {
    id: 'People04',
    image: Shanai,
    name: '  Shanai Gough',
    feedback:
      '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
  },
];
const FooterLinks = [
  {
    title: 'Home',
    id: 'Home01',
  },
  {
    title: 'Careers',
    id: 'Careers05',
  },
  {
    title: 'Pricing',
    id: 'Pricing02',
  },
  {
    title: 'Community',
    id: 'Community06',
  },
  {
    title: 'Products',
    id: 'Product03',
  },
  {
    title: '  Privacy Policy',
    id: '  Privacy Policy07',
  },
  {
    title: 'About Us',
    id: 'About Us04',
  },
];
const Socials = [
  {
    id: 'Facebook01',
    image:Facebook,
  },
  {
    id: 'Youtube02',
    image:Youtube,
  },
  {
    id: 'Twitter03',
    image:Twitter
  },
  {
    id: 'Pinterest04',
    image:Pinterest
  },
  {
    id: 'Instagram05',
    image:Instagram
  },
];

export default { NavLinks, TestimonialData, FooterLinks, Socials };
