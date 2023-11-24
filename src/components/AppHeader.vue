<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark py-3">
            <ul class="nav navbar-nav ps-5">
                <li class="nav-item">
                    <router-link class="nav-link blue-button" :class="{ 'active': $route.name === 'home' }" to="/">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link blue-button mx-3" to="/contacts"
                        :class="{ 'active': $route.name === 'contacts' }">
                        Contacts
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link blue-button" to="/about" :class="{ 'active': $route.name === 'about' }">
                        About Us
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>