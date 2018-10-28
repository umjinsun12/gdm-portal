<template lang="html">

  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img src="../../assets/images/faces/basic-profile.jpg" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">엄진섭</p>
              <p class="designation">Manager</p>
              <b-button v-b-modal.createmd class="projectbtn"  variant="success">New Project +</b-button>
              <b-modal id="createmd" title="Create New Project" size="md">
                    <h5 class="card-title border-bottom">Protein Alteration Details</h5>
                    <div class="row margin-bottom">
                    <p class="card-description text-primary col-md-6">
                      HGVS Protein Change
                    </p>
                    <p class="card-description col-md-6">
                      NP_004295.2:p.W915G
                    </p>
                    </div>

                    <h5 class="card-title border-bottom">Transcript Alteration Details</h5>
                    <div class="row">
                    <p class="card-description text-primary col-md-6">
                      HGVS Transcript Change
                    </p>
                    <p class="card-description col-md-6">
                      NM_004304.4:c.2743T>G
                    </p>
                    </div>
                    <h5 class="card-title border-bottom">Genomic Alteration Details</h5>
                    <div class="row">
                    <p class="card-description text-primary col-md-6">
                      Allelic State
                    </p>
                    <p class="card-description col-md-6">
                      Hemizygous
                    </p>
                    </div>
                    <h5 class="card-title border-bottom">Conservation Score</h5>
                    <b-table striped hover responsive :items="tableitem"></b-table>
                </b-modal>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Dashboard</span></router-link></li>
        <!--<li class="nav-item"><router-link class="nav-link" to="/widgets/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Widgets</span></router-link></li>-->
        <!--<li class="nav-item">
          <span class="nav-link" v-b-toggle="'sample-pages'">
            <img class="menu-icon" src="../../assets/images/menu_icons/08.png" alt="menu icon"><span class="menu-title">Sample Pages</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/login/">login</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/register/">register</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/404/">404</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/500/">500</router-link></li>
            </ul>
          </b-collapse>
        </li>-->
        <!--<li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-components'">
            <img class="menu-icon" src="../../assets/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">UI Components</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/alerts/">Alerts</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/buttons/">Button</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/badges/">Badges</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/breadcrumbs/">Breadcrumbs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/carousel/">Carousel</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/dropdowns/">Dropdowns</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/typography/">Typography</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/paginations/">Paginations</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/tooltips/">Tooltips</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/progress/">Progress</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/tabs/">Tabs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/modals/">Modals</router-link></li>
            </ul>
          </b-collapse>
        </li>-->
        <!--<li class="nav-item"><router-link class="nav-link" to="/tables/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Tables</span></router-link></li>-->
        <li class="nav-item"><router-link class="nav-link" to="/groups/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Project Groups</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/querybuiler/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Query Builder</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/casereview/"><img class="menu-icon" src="../../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Case Review</span></router-link></li>
        <!--<li class="nav-item"><router-link class="nav-link" to="/casereview/"><img class="menu-icon" src="../../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Case Review Detail</span></router-link></li>-->
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss">
.app-sidebar {



}
</style>
