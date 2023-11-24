
<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    data() {
        return {

        }
    },

    components: {
        AppHeader,
        AppFooter,
    },

}

</script>

<template>
    <AppHeader />

    <main class="py-5 min-vh-100">
        <router-view></router-view>
    </main>

    <AppFooter />
</template>

<style scoped>
main {
    background-image: url(https://as2.ftcdn.net/v2/jpg/03/23/61/59/1000_F_323615921_Ji9fSptUtq75uu8zk6BAfW1QjbS8DzvN.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

