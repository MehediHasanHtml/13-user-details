<script setup>
import{ref, reactive, onBeforeMount, computed, watch} from 'vue'
import {useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
const users = reactive({})

onBeforeMount(async () => {
  const res = await fetch(`https://dummyjson.com/users/${id}`)
  .then(res => {
    return res.json()
  })

  users.firstName = res.firstName
  users.lastName = res.lastName
  users.age = res.age
  users.gender = res.gender
  users.email = res.email
  users.phone = res.phone
  users.username = res.username
  users.image = res.image
  users.bloodGroup = res.bloodGroup
  users.height = res.height
  users.weight = res.weight
  users.address = res.address
  users.university = res.university
  users.birthDate = res.birthDate
});


// computed(()=>{
//   let d = new Date();
//   let thisYear = d.getFullYear();
//   let birthDat = users.birthDate
//   let bithYear = birthDat.getFullYear()
//   let age = thisYear - bithYear
//   return age

// });


const ageCalcutate = computed(()=>{
  let currentDate = new Date();
  let birthDate = new Date(users.birthDate);
  let difference = currentDate - birthDate;
  let age = Math.floor(difference/31557600000);
  return age
})


const birthYear = computed(()=> {
  let date = new Date(users.birthDate);
  let year = date.getFullYear();
  return year
})





const legalAge = computed(()=>{

  if(users.age >= 18){
    return 'She/He is 18+ year old'
  }
  else{
    return 'She/He is under 18 year old'
  }

});



const messa = ref('')

watch(id =>{

  if(users.age >= 18){
    messa.value = 'She/He is eligible for voting'
  }
  else{
    messa.value = 'She/He is not eligible for voting'
  }

},{immediate: true});


</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <form class="row g-3">


          <div class="col-12">
            <h2>Users Details</h2>
            <p><strong>Birthday age: </strong> {{ ageCalcutate }}</p>
            <p><strong>Birthday Year: </strong> {{ birthYear }}</p>
            <p><strong>Legal verification:</strong>  {{ legalAge }}</p>
          </div>


          <div class="col-md-12">
            <p>Profile picture</p>
          <img class="img-fluid mb-3" :src="users.image" alt="" style="height: 100px; width: 100px;">
          
          <p><strong>message :</strong>  {{ messa }}</p>
          </div>

          <div class="col-md-6">
            <label class="form-label">first Name</label>
            <input type="text" class="form-control" v-model="users.firstName">
          </div>
          <div class="col-md-6">
            <label class="form-label">last Name</label>
            <input type="text" class="form-control" v-model="users.lastName">
          </div>

          <div class="col-md-6">
            <label class="form-label">age</label>
            <input type="number" class="form-control" v-model="users.age">
          </div>
          <div class="col-md-6">
            <label class="form-label">birthDate</label>
            <input type="date" class="form-control" v-model="users.birthDate">
          </div>
          <div class="col-md-6">
            <label class="form-label">gender</label>
            <input type="text" class="form-control" v-model="users.gender">
          </div>

          <div class="col-md-6">
            <label  class="form-label">Email</label>
            <input type="email" class="form-control" v-model="users.email">
          </div>

          <div class="col-md-6">
            <label  class="form-label">phone</label>
            <input type="text" class="form-control" v-model="users.phone">
          </div>
          <div class="col-md-6">
            <label  class="form-label">username</label>
            <input type="text" class="form-control" v-model="users.username">
          </div>
          <div class="col-md-6">
            <label  class="form-label">bloodGroup</label>
            <input type="text" class="form-control" v-model="users.bloodGroup">
          </div>

          <div class="col-md-6">
            <label  class="form-label">height</label>
            <input type="text" class="form-control" v-model="users.height">
          </div>
          <div class="col-md-6">
            <label  class="form-label">weight</label>
            <input type="text" class="form-control" v-model="users.weight">
          </div>

          <div class="col-md-6">
            <label  class="form-label">address</label>
            <input type="text" class="form-control" v-model="users.address.address">
          </div>

          <div class="col-md-6">
            <label  class="form-label">city</label>
            <input type="text" class="form-control" v-model="users.address.city">
          </div>

          <div class="col-md-6">
            <label  class="form-label">university</label>
            <input type="text" class="form-control" v-model="users.university">
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<style scoped>
strong {
  font-weight: 700;
}

.form-label {
  font-size: 16px;
  text-transform: capitalize;
}
h2 {
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 5px;
}
p {
  font-size: 16px;
  text-transform: capitalize;
  margin-bottom: 10px;
}
</style>