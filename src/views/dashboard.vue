<template lang="html">
  <section class="dashboard">

    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 grid-margin stretch-card">
            <div class="card">
                <b-form-group style="margin-bottom:0px;">
                  <b-input-group append="Search">
                    <b-form-input placeholder="e.g. BRAF, Brease, TCGA-BLCA, TCGA-A5-A0G2"></b-form-input>
                  </b-input-group>
                </b-form-group>
            </div>
      </div>
    </div>


    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-cube text-danger icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Projects</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">40</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Primary Sites</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">61</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Cases</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">32,555</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-buffer text-dark icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Files</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">356,381</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-source-merge text-primary icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Genes</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">22,147</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-vector-triangle text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Mutations</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">3,142,246</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Overall projects</h4>
                <overall></overall>
              </div>
            </div>
          </div>
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Project and Races</h4>
                <race></race>
              </div>
            </div>
          </div>
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Gender</h4>
                <gender></gender>
              </div>
            </div>
          </div>
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Age</h4>
                <age></age>
              </div>
            </div>
          </div>
    </div>

  </section>
</template>

<script lang="js">
import Overall from './chart-components/OverallChart.js'
import Race from './chart-components/RaceChart.js'
import Gender from './chart-components/GenderChart.js'
import Age from './chart-components/AgeChart.js'

export default {
  name: 'dashboard',
  components: {
    Overall,
    Race,
    Gender,
    Age
  }
}
</script>

<style scoped lang="scss">
</style>
