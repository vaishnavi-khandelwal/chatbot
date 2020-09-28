<template>
    <div class="vue-tempalte">
        <form>
            <h3>Feedback</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-sm"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-sm" />
            </div>

            <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" class="form-control form-control-sm" />
            </div>
            <p class="text-center">Tell Us How You Really Feel?</p> 
            <div class="row justify-content-center">
                <div class="col-4">
                    <span class="emoji"> &#128516;</span>
                    <p class="text">Great</p>
                </div>
                <div class="col-4">
                    <span class="emoji"> &#128578;</span>
                    <p class="text">Good</p>
                </div>
             </div>
              <div class="row justify-content-center">
                <div class="col-4">
                    <span class="emoji"> &#128528;</span>
                    <p class="text">Okay</p>
                </div>
                <div class="col-4">
                    <span class="emoji"> &#128533;</span>
                    <p class="text"> Bad</p>
                </div>
             </div>
            <div class="form-group">
                <label>Thanks!! Anything else you'd like to add?</label>
                <textarea class="form-control" rows="1" id="comment"></textarea>
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
  height: 107%;
}
</style>

  