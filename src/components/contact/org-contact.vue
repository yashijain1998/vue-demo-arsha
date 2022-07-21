<template src="./org-contact.html">
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators/index'
export default {
    name:'OrgContact',
    data() {
        return {
            message: {
                yourName: '',
                email: '',
                subject: '',
                msg: ''
            }
            
        }
    },
    validations () {
    return {
        message : {
            yourName: {
                required,
                minLength : minLength(3)
            },
            email: {
                required,
                email
            },
            subject: {
                required,
                maxLength : maxLength(30)
            },
            msg: {
                required,
                maxLength : maxLength(100)
            }
        }
        
    }
  }
}
</script>

<style lang="scss" scoped src="./org-contact.scss">
</style>