<template lang="html">

  <section class="case-review">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Cases</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Order No</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Age</th>
                    <th class="border-bottom-0">Last Encounter</th>
                    <th class="border-bottom-0">Payment Method</th>
                    <th class="border-bottom-0">Payment Status</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>034</td>
                    <td>엄진섭</td>
                    <td>28</td>
                    <td>Dispatched</td>
                    <td>Credit card</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>035</td>
                    <td>최두현</td>
                    <td>39</td>
                    <td>Dispatched</td>
                    <td>Internet banking</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>036</td>
                    <td>신향숙</td>
                    <td>60</td>
                    <td>Dispatched</td>
                    <td>Credit card</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>037</td>
                    <td>신향숙</td>
                    <td>60</td>
                    <td>Dispatched</td>
                    <td>Cash on delivery</td>
                    <td><a href="../casereviewdetail/" class="btn btn-outline-success btn-sm">View</a></td>
                  </tr>
                  <tr>
                    <td>038</td>
                    <td>신향숙</td>
                    <td>60</td>
                    <td>Dispatched</td>
                    <td>Debit card</td>
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
  name: 'case-review'
}
</script>

<style scoped lang="scss">
.case-review {

}
</style>
