<template>
    <div class="vue-tempalte">
        <form>
            <h3>Donor</h3>

            <div class="form-group">
                 <label>Full Name</label>
                <input type="text" class="form-control form-control-sm" required>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-sm" required>
            </div>

            <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" class="form-control form-control-sm" required>
            </div>
            <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" rows="1" id="comment" required></textarea>
            </div>
             <div class="form-group">
                 <label>Offer</label>
                <input type="text" class="form-control form-control-sm" required>
            </div>
            <div class="form-group">
                <label>Upload Photo</label>
                <input type="file" id="myFile" name="filename">
            </div>


            <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>

       

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
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
  height: 104%;
}
</style>