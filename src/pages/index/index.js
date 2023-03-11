import '../../public/scss/index.scss';
import '../../public/scss/font.scss';
import './style.scss';
import renderPublicHeader from '../../public/js/header';
import renderPublicFooter from '../../public/js/footer';

renderPublicHeader(header => document.body.prepend(header));
renderPublicFooter(footer => document.body.append(footer));
