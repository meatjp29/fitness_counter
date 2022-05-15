<template>
  <div class="menu">
    <div class="card">
      <a href="/situp" class="card-item">
        <span class="sub-title">sit-up</span>
        <span class="title">腹筋運動</span>
        <span class="description">
          仰向けに寝た状態から上半身を垂直に起こし再び仰向けに寝る動作を繰り返す運動です。
        </span>
      </a>
      <a href="/situp" class="card-item">
        <span class="sub-title">push-up</span>
        <span class="title">腕立て伏せ</span>
        <span class="description">
          仰向けに寝た状態から上半身を垂直に起こし再び仰向けに寝る動作を繰り返す運動です。
        </span>
      </a>
      <a href="/situp" class="card-item">
        <span class="sub-title">sit-up</span>
        <span class="title">クランチ</span>
        <span class="description">
          仰向けに寝た状態から上半身を垂直に起こし再び仰向けに寝る動作を繰り返す運動です。
        </span>
      </a>
      <a href="/situp" class="card-item">
        <span class="sub-title">squat</span>
        <span class="title">スクワット</span>
        <span class="description">
          テキストテキストテキストテキストテキストテキスト
        </span>
      </a>
      <a href="/situp" class="card-item">
        <span class="sub-title">back extension</span>
        <span class="title">背筋</span>
        <span class="description">
          テキストテキストテキストテキストテキストテキスト
        </span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  padding: 2rem;
}

.card {
  gap: 1rem;
  display: grid;
}

.card-item {
  display: block;
  border-radius: 20px;
  background-color: var(--color-alto-05);
  padding: 2rem 1.5rem;

  .title {
    display: block;
    color: var(--color-white);
    font-size: 1.5rem;
  }

  .sub-title {
    display: block;
    font-size: 1rem;
    color: var(--color-white);
    opacity: 0.7;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
  }

  .description {
    margin-top: 1rem;
    font-size: 0.8rem;
    display: block;
    line-height: 1.5;
    opacity: 0.5;
    color: var(--color-white);
  }
}
</style>