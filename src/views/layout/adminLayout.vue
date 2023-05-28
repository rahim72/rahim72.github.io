<template>
    <div class="flex">
        <sideBar />
        <div class="w-full">
            <headerTop />
            <div class="w-full h-[calc(100vh-50px)]">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import headerTop from '../../components/header/headerInc.vue'
import sideBar from '../../components/sidebar/sidebarInc.vue'
export default {
    components: { headerTop, sideBar },

}
</script>
<style lang="">
    
</style>