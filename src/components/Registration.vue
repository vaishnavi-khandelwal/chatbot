<template>
    <div class="vue-tempalte">
        <form>
            <h3>Registration</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-sm"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-sm" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-sm" />
            </div>
            <div class="form-group">
                <label>Mobile Number</label>
                <input type="tel" class="form-control form-control-sm" />
            </div>
             <fieldset class="form-group">
                <legend>Gender</legend>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" > Male
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions"> Female
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions"> Other
                    </label>
                </div>
            </fieldset>

            <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" rows="1" id="comment"></textarea>
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