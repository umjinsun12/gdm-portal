<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <a class="navbar-brand brand-logo" href="/"><img src="../../assets/gdm_logo.png" alt="logo"/></a>
      <a class="navbar-brand brand-logo-mini" href="/"><img src="../../assets/gdm_logo.png" alt="logo"/></a>
    </div>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="header-links">
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-item-dropdown right>
          <template slot="button-content">
            <div class="count-indicator">
              <i class="icon mdi mdi-settings"></i>
            </div>
          </template>
          <b-dropdown-item href="#">My Projects</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="js">
export default {
  name: 'app-header'
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
