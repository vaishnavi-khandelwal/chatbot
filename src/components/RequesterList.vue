<template>
    <div class="vue-tempalte">
        <h3 class="p-3 text-center">List Of Requester's</h3>
        <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile No.</th>
                    <th>Date</th>
                    <th>Address</th>
                    <th>Request</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row.id">
                    <td>{{row.id}}</td>
                    <td>{{row.Name}}</td>
                    <td>{{row.mobileno}}</td>
                    <td>{{row.date}}</td>
                    <td>{{row.address}}</td>
                    <td>{{row.offer}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            rows: [
                {id: '1',Name: 'Naira Goenka', mobileno: '6789564321',date:'6 June', address: 'Shastri Nagar',offer:'Mask' },
                {id: '2',Name: 'Anurag Basu', mobileno: '8765493289',date:'24 Aug', address: 'Sai Colony',offer:'Money' },
                {id: '3',Name: 'Prerana Sharma', mobileno:'5678432917',date:'13 Sep', address: 'Shastri Nagar',offer:'Sanitizer'},
                {id: '4',Name: 'Hina Khan', mobileno: '8790546329',date:'20 sep', address: 'Ratnakar Building',offer:'Mask' },
                {id: '5',Name: 'Ahem Modi', mobileno: '9789567098', date:'10 July',address: 'Modi House',offer:'gloves'}
            ]
        };
    }
};
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
  width: 800px;
}
</style>