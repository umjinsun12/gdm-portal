<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <b-breadcrumb :items="items" class="bg-primary"/>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Molecular Test Results</h5>
            <p class="card-description">
                  Reported 28 Apr 2017
            </p>
            <h6 class="border-bottom">First Cancer Panel V2.0</h6>
            <h4>Result Summary</h4>
            <small class="border-bottom margin-bottom">Final NGS Quality : Normal</small>
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
                    <b-table striped hover responsive :items="tableitem"></b-table>

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

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
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
        text: 'AGE 60',
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
      }]

    }
  }
}
</script>

<style scoped lang="scss">
.case-review-detail {

}
</style>
