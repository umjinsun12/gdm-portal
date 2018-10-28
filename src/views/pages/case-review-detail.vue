<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
        <div class="card-body">
          <h4 class="card-title">Case Review</h4>
          <b-tabs>
            <b-tab title="Molecular Test Results" active>
            <div class="card">
              <div class="card-title">
                <h4>Result Summary</h4>
              </div>
               <div class="card-body row">
                 <PersonMutateChart class="col-8"></PersonMutateChart>
                 <PersonMutateCircleChart class="col-3"></PersonMutateCircleChart>
               </div>
            </div>
            
            <h4 class="border-bottom">Clinical Data</h4>
            <b-breadcrumb :items="items" class="bg-inverse-primary"/>
            <b-table responsive :items="clinicdata"></b-table>
            <b-pagination align="center" :total-rows="20" v-model="currentPage" :per-page="5"></b-pagination>

            <h4 class="border-bottom">Variant</h4>
              <div class="row">
                <div class="col-md-4">
                  <a v-b-modal.modalmd href="#">ATM c.1436A>C</a>
                </div>
                <b-modal id="modalmd" title="ATM c.1436A>C" size="md">
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
                    <b-table class="clinic-table" striped hover responsive border :items="tableitem"></b-table>
                </b-modal>
                <div class="col-md-4">
                  <a href="#">CREBBPc.760G>A</a>
                </div>
                <div class="col-md-4">
                  <a href="#">CSF1R c.1085A>G</a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <a href="#">EGFR c.1118+1G>A</a>
                </div>
                <div class="col-md-4">
                  <a href="#">FGFR1 c.320C>T</a>
                </div>
                <div class="col-md-4">
                  <a href="#">GNAQ c.286A>T</a>
                </div>
              </div>

            </b-tab>
            <b-tab title="Decision Support">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet, sapiente corrupti, vitae excepturi nulla soluta esse in ex, dignissimos velit rerum maiores asperiores!
            </b-tab>
            <b-tab title="Clinical History">
              <p class="card-description">
                  Therapies
              </p>
              <line-chart :data="chartData"></line-chart>
            </b-tab>
          </b-tabs>
        </div>
      </div>


        <div class="card">
          <div class="card-body">

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import PersonMutateChart from '../chart-components/PersonMutateChart.js'
import PersonMutateCircleChart from '../chart-components/PersonMutateCircleChart.js'


export default {
  name: 'case-review-detail',
  data () {
    return {
      items: [{
        text: '신명숙',
        href: '#'
      }, {
        text: 'Famale',
        href: '#'
      }, {
        text: '60',
        active: true
      }, {
        text: '1956-02-15',
        active: true
      }, {
        text: 'Asian',
        active: true
      }, {
        text: 'MRN 11341460'
      }],
      tableitem: [{
        method : 'SIFT',
        score : 0.63
      },{
        method : 'PolyPhen',
        score : 0.45
      },{
        method : 'CADD',
        score : 17.23
      }],
      clinicdata: [
        {
          ProjectID : '13233',
          ProjectName : 'Cancer',
          ClinicDate : '2018-10-16'
        },
        {
          ProjectID : '32133',
          ProjectName : 'Cancer',
          ClinicDate : '2018-09-16'
        },
        {
          ProjectID : '32313',
          ProjectName : 'Cancer',
          ClinicDate : '2018-08-16'
        },
        {
          ProjectID : '32333',
          ProjectName : 'Cancer',
          ClinicDate : '2018-07-16'
        },
        {
          ProjectID : '13233',
          ProjectName : 'Cancer',
          ClinicDate : '2018-06-16'
        }
      ],
      chartData: [["10/23", 4], ["10/24", 2], ["10/25", 10], ["10/26", 5], ["10/27", 3]]
    }
  },
  components: {
    PersonMutateChart,
    PersonMutateCircleChart
  }
}
</script>

<style scoped lang="scss">
.case-review-detail {
}
</style>
