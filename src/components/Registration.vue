<template>
    <div class="vue-tempalte">
        <form>
            <h3>Registration</h3>

            <div class="form-group">
                 <label>Full Name</label>
                <input type="text" class="form-control form-control-sm" required>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-sm" required>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-sm" required>
            </div>
            <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" class="form-control form-control-sm" required>
            </div>
             <fieldset class="form-group">
                <legend>Gender</legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" checked>
                    <label class="form-check-label" >Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions">
                    <label class="form-check-label" >Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" >
                    <label class="form-check-label" >Other</label>
                </div>
            </fieldset>

            <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" rows="1" id="comment" required></textarea>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>

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