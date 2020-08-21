<template>
  <div>
    <div
      v-show="selected"
      class="img"
      :style="{ backgroundImage: `url(/gy_715/things/${id}.png)` }"
      @click.stop="toggle"
    >
    </div>
    <div
      v-show="!selected"
      ref="text"
      @click.stop="toggle"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
    },
  },
  data() {
    let sValue = false;
    if (this.VAR.Selection.includes(this.id)) {
      sValue = true;
    }
    return {
      selected: sValue,
    };
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
      this.$emit('toggle', this.id);
    },
  },
  mounted() {
    new CircleType(this.$refs.text).radius(this.radius);
  },
};
</script>

<style scoped>
.img {
  position: absolute;
  top: calc(50% - 8vw);
  left: calc(50% - 8vw);
  width: 16vw;
  height: 16vw;
  background-size: 100%;
  border-radius: 50%;
  box-shadow: -3px 3px #a8a8a8;
}
</style>
