import '../scss/footer.scss';

export default function renderPublicFooter(render) {
  render(create());
}

function create() {
  const footer = document.createElement('footer');
  footer.className = 'public--footer';
  footer.innerHTML = `
  <div class="public--footer--address">
        <address>
          <span class="label">پشتیبانی 24 ساعته، 7 روز هفته</span>
          <div>
            <span class="label">تلفن پشتیبانی پذیرندگان:</span>
            <span class="value">
              <bdi class="label">021-00000</bdi>
            </span>
          </div>
          <div>
            <span class="label">تلفن پشتیبانی خریداران:</span>
            <span class="value">
              <bdi class="label">021-11111111</bdi>
            </span>
          </div>
        </address>
      </div>
      <div class="public--footer--links">
        <div class="group">
          <strong>محصولات</strong>
          <nav>
            <a href="#">زرین لینک</a>
            <a href="#">درگاه پرداخت اینترنتی</a>
            <a href="#">زرین کارت</a>
            <a href="#">تسهیم</a>
            <a href="#">عیان</a>
            <a href="#">استرداد وجه</a>
            <a href="#">تسویه پیش از موعود</a>
            <a href="#">تسهیم فردایی</a>
          </nav>
        </div>
        <div class="group">
          <strong>آشنایی با زرین پال</strong>
          <nav>
            <a href="#">تعرفه ها</a>
            <a href="#">درباره ما</a>
            <a href="#">سوالات متداول</a>
            <a href="#">همکاری در فروش</a>
          </nav>
        </div>
        <div class="group">
          <strong>ارتباط بیشتر</strong>
          <nav>
            <a href="#">تماس با ما</a>
            <a href="#">قوانین و مقررات</a>
            <a href="#">حریم خصوصی</a>
          </nav>
        </div>
        <div class="group">
          <strong>منابع</strong>
          <nav>
            <a href="#">دریافت شماره شبا</a>
            <a href="#">زرین بین</a>
            <a href="#">توسعه دهندگان</a>
            <a href="#">وبلاگ</a>
            <a href="#">سنجش رضایتمندی</a>
          </nav>
        </div>
      </div>
      <div class="public--footer--about">
        <div class="social-links">
          <span class="label">زرین پال در شبکه های اجتماعی:</span>
          <div>
            <a href="#" class="aparat"></a>
            <a href="#" class="linkedin"></a>
            <a href="#" class="telegram"></a>
            <a href="#" class="twitter"></a>
            <a href="#" class="instagram"></a>
          </div>
        </div>
        <div class="etemad">
          <a href="#"></a>
          <span>زرین پال 1389-1401 </span>
        </div>
      </div>
  `;
  handler(footer);
  return footer;
}

function handler() {}
