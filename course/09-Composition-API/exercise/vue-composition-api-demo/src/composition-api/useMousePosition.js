import { reactive, toRefs, onMounted, onUnmounted } from "vue";

export function MousePosition() {
  // const x = ref(0);
  // const y = ref(0);

  const position = reactive({
    x: 0,
    y: 0,
  });
  const syncPosition = (e) => {
    // x.value = e.pageX;
    // y.value = e.pageY;

    position.x = e.pageX;
    position.y = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", syncPosition);
  });

  onUnmounted(() => {
    window.addEventListener("mousemove", syncPosition);
  });

  return {
    ...toRefs(position),
  };
}
