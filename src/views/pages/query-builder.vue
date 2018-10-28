<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
        <div class="card-body">
          <h4 class="card-title">Query builder</h4>
          <b-tabs class="vertical-tab tab-minimal tab-minimal-success">
            <b-tab title="Total">
                <div class="studies">
                    <h5 class="card-title border-bottom">PanCancer Studies</h5>
                    <b-form-checkbox class="col-12" id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                        MSK-IMPACT Clinical Sequencing Cohort (MSKCC, Nat Med 2017)
                    </b-form-checkbox>
                    <b-form-checkbox class="col-12" id="checkbox2" v-model="status" value="accepted" unchecked-value="not_accepted">
                        Pan-Lung Cancer (TCGA, Nat Genet 2016)
                    </b-form-checkbox>
                </div>
                <div class="studies">
                <h5 class="card-title border-bottom">Cell lines</h5>
                <b-form-checkbox class="col-12" id="checkbox3" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)
                </b-form-checkbox>
                <b-form-checkbox class="col-12" id="checkbox4" v-model="status" value="accepted" unchecked-value="not_accepted">
                      NCI-60 Cell Lines (NCI, Cancer Res. 2012)
                </b-form-checkbox>
                </div>
                <div class="studies">
                    <h5 class="card-title border-bottom">Adrenal Gland</h5>
                    <b-form-checkbox class="col-12" id="checkbox5" v-model="status" value="accepted" unchecked-value="not_accepted">
                        Adrenocortical Carcinoma (TCGA, PanCancer Atlas)
                    </b-form-checkbox>
                    <b-form-checkbox class="col-12" id="checkbox6" v-model="status" value="accepted" unchecked-value="not_accepted">
                        Adrenocortical Carcinoma (TCGA, Provisional)
                    </b-form-checkbox>
                </div>
                <div class="studies">
                    <h5 class="card-title border-bottom">Ampulla of Vater</h5>
                    <b-form-checkbox class="col-12" id="checkbox7" v-model="status" value="accepted" unchecked-value="not_accepted">
                        Ampullary Carcinoma (Baylor College of Medicine, Cell Reports 2016)
                    </b-form-checkbox>
                </div>
            </b-tab>
            <b-tab title="PanCancer Studies">
              <h5 class="card-title border-bottom">PanCancer Studies</h5>
                <b-form-checkbox class="col-12" id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                      MSK-IMPACT Clinical Sequencing Cohort (MSKCC, Nat Med 2017)
                </b-form-checkbox>
                <b-form-checkbox class="col-12" id="checkbox2" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Pan-Lung Cancer (TCGA, Nat Genet 2016)
                </b-form-checkbox>
            </b-tab>
            <b-tab title="Cell lines">
              <h5 class="card-title border-bottom">Cell lines</h5>
                <b-form-checkbox class="col-12" id="checkbox3" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)
                </b-form-checkbox>
                <b-form-checkbox class="col-12" id="checkbox4" v-model="status" value="accepted" unchecked-value="not_accepted">
                      NCI-60 Cell Lines (NCI, Cancer Res. 2012)
                </b-form-checkbox>
            </b-tab>
            <b-tab title="Adrenal Gland">
              <h5 class="card-title border-bottom">Adrenal Gland</h5>
                <b-form-checkbox class="col-12" id="checkbox5" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Adrenocortical Carcinoma (TCGA, PanCancer Atlas)
                </b-form-checkbox>
                <b-form-checkbox class="col-12" id="checkbox6" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Adrenocortical Carcinoma (TCGA, Provisional)
                </b-form-checkbox>
            </b-tab>

            <b-tab title="Ampulla of Vater">
              <h5 class="card-title border-bottom">Ampulla of Vater</h5>
                <b-form-checkbox class="col-12" id="checkbox7" v-model="status" value="accepted" unchecked-value="not_accepted">
                      Ampullary Carcinoma (Baylor College of Medicine, Cell Reports 2016)
                </b-form-checkbox>
            </b-tab>
          </b-tabs>
          <h5 class="card-title">Enter Genes:</h5>
          <b-form-textarea id="input10" v-model="text" placeholder="Enter HUGO Gene Symbols or Gene Aliases" :rows="3" :max-rows="6"></b-form-textarea>
          <b-button class="submit-querys col-4" variant="success">Submit Querys</b-button>
        </div>
      </div>

      </div>
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'query-builder'
}
</script>

<style scoped lang="scss">
.query-builder {
}
.submit-querys{
    margin-top : 10px;
    height: 40px;
    font-size: 15px;
}
.studies{
    margin-bottom: 15px;
}
</style>
