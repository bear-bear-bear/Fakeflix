const infinityScroll = {
  cnt: 0,
  timer: null,
  fetchFunc: null,

  getScrollTop() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  },

  getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  },

  fetchScrollTimer() {
    // 스크롤 이벤트 쓰로틀링
    if (this.timer === null) {
      this.timer = setTimeout(() => {
        this.timer = null;
        // console.log('스크롤 감지 이벤트 호출 횟수: ', ++this.cnt); //test

        const scrollTop = this.getScrollTop();
        const fetchPoint = (this.getDocumentHeight() - window.innerHeight) * (1 / 2);

        // 스크롤 80퍼센트를 넘어야 데이터 가져오기
        if (scrollTop < fetchPoint) return;

        this.fetchFunc();
      }, 200);
    }
  },

  on(fetchFunc) {
    this.timer = null;
    this.fetchFunc = fetchFunc;
    window.addEventListener('scroll', this.fetchScrollTimer.bind(this), false);
  },

  off() {
    this.cnt = 0;
    this.timer = false;
    this.fetchFunc = null;
    window.removeEventListener('scroll', this.fetchScrollTimer.bind(this), false);
  },
};

export default infinityScroll;
