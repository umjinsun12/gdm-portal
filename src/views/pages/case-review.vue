<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body row">
            <h5 class="card-title mb-4">Cases Review</h5>
            <b-form-group align="right" class="col-4">
                  <b-input-group append="">
                    <b-form-input placeholder="Search"></b-form-input>
                  </b-input-group>
                </b-form-group>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Gender</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Birth</th>
                    <th class="border-bottom-0">Insititution Code</th>
                    <th class="border-bottom-0">Submission Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>34</td>
                    <td>male</td>
                    <td>엄진섭</td>
                    <td>28</td>
                    <td>MRN 11341460</td>
                    <td>2018 / 10 / 28</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>female</td>
                    <td>신향숙</td>
                    <td>35</td>
                    <td>MRN 11341460</td>
                    <td>2018 / 10 / 14</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>female</td>
                    <td>신향숙</td>
                    <td>35</td>
                    <td>MRN 11341460</td>
                    <td>2018 / 10 / 14</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>female</td>
                    <td>신향숙</td>
                    <td>35</td>
                    <td>MRN 11341460</td>
                    <td>2018 / 10 / 14</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>female</td>
                    <td>신향숙</td>
                    <td>35</td>
                    <td>MRN 11341460</td>
                    <td>2018 / 10 / 14</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                </tbody>
              </table>
              <b-pagination :total-rows="50" align="center" v-model="currentPage" :per-page="10" center></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'case-review'
}
</script>

<style scoped lang="scss">
.case-review {

  .case-pagenation{
    text-align: center;
  }

}
</style>
