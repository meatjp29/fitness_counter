<template>
  <div class="content">
    <div class="first">
      <div class="time">{{ time }}</div>
      <div class="count-view">
        <div class="count">
          {{ count }}
        </div>
        <div class="unit">回</div>
      </div>
      <div class="tune">
        <button class="minus" @click="countDown">
          <span class="material-symbols-outlined"> chevron_left </span>
        </button>
        <button class="plus" @click="countUp">
          <span class="material-symbols-outlined"> chevron_right </span>
        </button>
      </div>
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
  height: 70vh;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  .first {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}

.time {
  max-inline-size: max-content;
  margin-inline: auto;
  font-size: 2rem;
  color: var(--color-dark-02);
}

.count-view {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1rem;
}

.count {
  font-size: 5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 0.77;
}

.unit {
  color: var(--color-black);
  opacity: 0.5;
  font-size: 0.8rem;
}

.tune {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.plus,
.minus {
  flex: 1;
  aspect-ratio: 1 / 1;
  text-align: center;
  font-size: 2rem;
  background-color: var(--color-white);
  color: var(--color-dark-01);
  border-radius: 100vw;
  border: 1px solid var(--color-dark-01);
}

.start,
.stop {
  padding: 2rem;
  font-size: 2rem;
  max-inline-size: max-content;
  margin-inline: auto;
  display: block;
  border: 1px solid var(--color-dark-01);
}
</style>

<script>
import * as Tone from "tone";

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