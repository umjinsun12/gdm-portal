<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">My Projects</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Order No</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Created</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>034</td>
                    <td>SNUH Targeted</td>
                    <td>2018.02.12</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>035</td>
                    <td>Leukemia Data</td>
                    <td>2018.04.23</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>036</td>
                    <td>TCGA COAD Data</td>
                    <td>2018.06.30</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>037</td>
                    <td>Depression Data</td>
                    <td>2018.09.30</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'project'
}
</script>

<style scoped lang="scss">
.project {

}
</style>
