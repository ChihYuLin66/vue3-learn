<script>
import SlotTitle from "@/components/SlotTitle.vue";
export default {
    components: {
        SlotTitle
    }
}
</script>

<template>  

    <!-- <SlotTitle>
        HELLO ~
    </SlotTitle> -->

    <!-- 若使用 slot 於 html 建議使用 烤肉串的方式 -->
    <slot-title>
        烤肉串
    </slot-title>
</template>

<style>

</style>