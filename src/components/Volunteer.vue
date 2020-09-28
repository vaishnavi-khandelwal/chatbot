<template>
  <div class="vue-tempalte">
  <h3 class="text-left">Name of Volunteer</h3>
  <p class="text-center">Work Assigned to me...</p>
  <div class="row">
    <div class="col-md-6">
      <h4 class="text-center">Donor</h4>
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Name</th>
                <th>Product Name</th>
                <th>Mobile No.</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in donor" :key="row.id">
                <td>{{row.Name}}</td>
                <td>{{row.product}}</td>
                <td>{{row.mobileno}}</td>
                <td>{{row.address}}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <h4 class="text-center">Requester</h4>
      <table class="table table-striped table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
            <th>Name</th>
            <th>Product Name</th>
            <th>Mobile No.</th>
            <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in requester" :key="row.id">
            <td>{{row.Name}}</td>
            <td>{{row.product}}</td>
            <td>{{row.mobileno}}</td>
            <td>{{row.address}}</td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
  <div class="text-center">
    <p> After Completion of Delivery...</p>
    <input type="file" id="myFile" name="filename">
  </div>
  <div class="text-center mt-3">
      <button type="button" class="btn btn-dark btn-lg">Submit</button>
  </div>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        donor: [
          { Name: 'ABC', product: 'Money', mobileno: '7865406542', address:'ABC Colony' }
          ],
        requester: [
          { Name: 'XYZ', product: 'Money', mobileno: '6547809654', address:'XYZ Colony' }
        ]
      }
    }
  }
</script>

<style>
   body,
   html,
   .App,
   .vue-tempalte,
   .vertical-center {
  width: 100%;
  height: 100%;
}
.inner-block {
  width: 850px;
}
</style>
