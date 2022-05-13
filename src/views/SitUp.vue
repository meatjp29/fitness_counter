<template>
  <div class="content">
    <div class="time">{{ time }}</div>
    <div class="count-view">
      <button class="minus" @click="countDown">←</button>
      <div class="count">{{ count }}<span class="unit">回</span></div>
      <button class="plus" @click="countUp">→</button>
    </div>
    <button class="start" @click="start" v-if="isStart === false">
      スタート
    </button>
    <button class="stop" @click="stop" v-if="isStart === true">ストップ</button>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-inline-size: max-content;
  margin-inline: auto;
  padding: 2rem;
}

.time {
  max-inline-size: max-content;
  margin-inline: auto;
  font-size: 2rem;
}

.count-view {
  display: flex;
  margin-top: 1rem;
  .count {
    aspect-ratio: 1 / 1;
    gap: 2rem;
    width: 200px;
    text-align: center;
    font-size: 8rem;
    line-height: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    .unit {
      font-size: 1rem;
    }
  }
}

button {
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid;
}

.plus,
.minus {
  width: 80px;
  text-align: center;
}

.start,
.stop {
  margin-top: 1rem;
  padding: 2rem;
  font-size: 2rem;
  max-inline-size: max-content;
  margin-inline: auto;
  display: block;
}
</style>

<script>
export default {
  data() {
    return {
      time: "00:00:000",
      startTime: 0,
      elapsedTime: 0,
      timerId: null,
      count: 0,
      isStart: false,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  },
  methods: {
    countUp: function () {
      this.count++;
    },
    countDown: function () {
      if (this.count !== 0) {
        this.count--;
      }
    },
    start() {
      this.isStart = true;
      this.startTime = Date.now();
      this.timeCountUp();
    },
    stop() {
      this.isStart = false;
      clearTimeout(this.timerId);
      this.elapsedTime += Date.now() - this.startTime;
    },
    reset() {
      this.isStart = false;
      this.time = "00:00:000";
      this.elapsedTime = 0;
    },
    timeCountUp() {
      const d = new Date(Date.now() - this.startTime + this.elapsedTime);
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      const ms = String(d.getMilliseconds()).padStart(3, "0");

      this.time = `${m}:${s}:${ms}`;
      this.timerId = setTimeout(() => {
        this.timeCountUp();
      }, 10);
    },
  },
};
</script>