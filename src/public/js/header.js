import '../scss/header.scss';

export default function renderPublicHeader(render) {
  render(create());
}

function create() {
  const header = document.createElement('header');
  header.className = 'public--header';
  header.innerHTML = `
    <div class="public--header--logo">
      <a href="/"></a>
    </div>
    <div class="public--header--navigation">
      <nav class="navigation">
        <li class="navigation--item has-sublist sublist-2-col">
          <strong>محصولات</strong>
          <ul class="navigation--sublist d-none">
            <li class="navigation--subitem">
              <a href="#">
                <strong>درگاه پرداخت</strong>
                <span>مهندسی شده برای فروش بیشتر</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>زرین کارت</strong>
                <span>طلایی ترین کارت بانکی</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>اعیان</strong>
                <span>احراز هویت واقعی خریدار</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>تسهیم</strong>
                <span>درگاه پرداخت اشتراکی</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>زرین لینک</strong>
                <span>لینک پرداخت در شبکه های اجتماعی</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>استرداد وجه</strong>
                <span>مبلغ تراکنش را در لحظه بازگشت بزنید.</span>
              </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>زرین پلاس</strong>
                <span>ابزار هوشمند سوددهی</span>
              </a>
            </li>
            <li class="navigation--subitem">
            <a href="#">
              <strong>تسویه پیش از موعد</strong>
              <span>دریافت موجودی قابل تسویه در سریع ترین زمان</span>
            </a>
            </li>
            <li class="navigation--subitem">
              <a href="#">
                <strong>تسهیم فردایی</strong>
                <span>تقسیم و واریز مبلغ به شرکای تجاری</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="navigation--item">
          <a href="#">
            <strong>تعرفه ها</strong>
          </a>
        </li>
        <li class="navigation--item">
          <a href="#">
            <strong>توسعه دهندگان</strong>
          </a>
        </li>
        <li class="navigation--item">
          <a href="#">
            <strong>تماس با ما</strong>
          </a>
        </li>
        <li class="navigation--item has-sublist sublist-1-col">
            <strong>بیشتر</strong>
            <ul class="navigation--sublist d-none">
              <li class="navigation--subitem">
                <a href="#">
                  <strong>وبلاگ</strong>
                </a>
              </li>
              <li class="navigation--subitem">
                <a href="#">
                  <strong>درخواست شماره شبا</strong>
                </a>
              </li>
              <li class="navigation--subitem">
                <a href="#">
                  <strong>سوالات متداول</strong>
                </a>
              </li>
              <li class="navigation--subitem">
                <a href="#">
                  <strong>اپلیکیشن</strong>
                </a>
              </li>
              <li class="navigation--subitem">
                <a href="#">
                  <strong>زرین بین</strong>
                </a>
              </li>
            </ul>
        </li>
      </nav>
    </div>
    <div class="public--header--actions">
      <a class="btn__primary" href="#">
        <strong>زرین پال من</strong>
      </a>
      <button class="hamburger--toggle"></button>
    </div>
  `;
  handler(header);
  return header;
}

function handler(header) {
  closeNavigation(header);
  headerScrollEvent(header);
  controlDisplaySublist(header, ['.sublist-2-col', '.sublist-1-col']);
  showHamburgerMenu(header);
}

// hiding navigation, when user click outside of header
function closeNavigation(header) {
  const nav = header.querySelector('.navigation');

  document.addEventListener('click', event => {
    outsideClickHandler(header, null, event, () => {
      nav.classList.remove('d-flex');
    });
  });
}

// selector of elements that have a sublist =>  controlling their display in all media
function controlDisplaySublist(header, parentsSelector) {
  for (const parentSelector of parentsSelector) {
    const sublistParent = header.querySelector(parentSelector);
    const hamburgerToggle = header.querySelector('.hamburger--toggle');
    const sublist = sublistParent.querySelector('.navigation--sublist');

    ['mouseenter', 'click'].forEach(eventType => {
      sublistParent.addEventListener(eventType, () => {
        sublist.classList.remove('d-none');
        const x = sublist.getBoundingClientRect().left;
        if (x < 0) {
          sublist.style.left = '0px';
        }
      });
    });

    ['mouseleave', 'click'].forEach(eventType => {
      header.addEventListener(eventType, event => {
        outsideClickHandler(sublistParent, hamburgerToggle, event, () => {
          sublist.classList.add('d-none');
          sublist.removeAttribute('style');
        });
      });
    });
  }
}

// changing appearance of header, when user scrolls
function headerScrollEvent(header) {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop < 100) {
      header.classList.remove('scroll-border');
    } else {
      header.classList.add('scroll-border');
    }
  });
}

// showing navigation in mobile, when user click on hamburger toggle
function showHamburgerMenu(header) {
  const hamburgerToggle = header.querySelector('.hamburger--toggle');
  const nav = header.querySelector('.navigation');

  hamburgerToggle.addEventListener('click', () => {
    nav.classList.add('d-flex');
  });
}

// running function (parameter), when user click outside of element or its children
const outsideClickHandler = (el, toggle, e, fun, ...p) => {
  let isParent;
  let target = e.target;
  var paths = e.path || (e.composedPath && e.composedPath());
  for (const path of paths) if (path === el) isParent = true;
  if (target !== el && !isParent && target !== toggle) {
    fun(...p);
  }
};
