<script setup>
import { ref, reactive,  onBeforeMount } from 'vue';

const users = ref([])
const searchValue = ref("");

onBeforeMount(async () => {
  const res = await fetch('https://dummyjson.com/users')
  .then(res => {
    return res.json()
  })

  users.value = res.users
});

const headers = [
{ text: "image", value: "image", sortable: true},
  { text: "Name", value: "firstName",  fixed: true, width: 100 },
  { text: "age", value: "age", sortable: true},
  { text: "gender", value: "gender" },
  { text: "email", value: "email", sortable: true},
  { text: "phone", value: "phone"},
  { text: "birthDate", value: "birthDate", sortable: true},
  { text: "bloodGroup", value: "bloodGroup", sortable: true},
  { text: "action", value: "id" },
];


</script>


<template>

    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <div>
                  <h2>All users</h2>
                    <div class="col-md-4">
                    <div class="search mb-3">
                    <span>search value: </span>
                    <input type="text" class="" v-model="searchValue">
                    </div>
                </div>

                    <EasyDataTable
                    :headers="headers"
                    :items="users"
                    :search-value="searchValue"
                    >
                    <template #item-image="{ image, firstName, id }">
                        <div class="images">
                        <router-link class="link" :to="{name: 'users', params: {id: id} }"><img class="thumbnail" :src="image" :alt="firstName" /></router-link> 
                        </div>
                    </template>

                    <template #item-id="{ id }">
                        <div class="action">
                        <router-link class="btn btn-success" :to="{name: 'users', params: {id: id} }">View <i class="bi bi-arrow-right-circle"></i></router-link>
                        </div>
                    </template>
                    </EasyDataTable>
                </div>

            </div>
        </div>
    </div>


</template>


<style>
h2 {
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.table>:not(caption)>*>* {
  vertical-align: middle;
  font-size: 16px;
  text-transform: capitalize;
}

.search span {
  font-size: 16px;
  text-transform: capitalize;
}
.search input {
  border: 1px solid #ccc;
  padding: 8px 15px;
  border-radius: 6px;
}
.vue3-easy-data-table__header th{
    font-size: 16px;
    padding: 6px 5px !important;
    font-weight: 600;
  text-transform: capitalize !important;
}

.vue3-easy-data-table__main.fixed-header th{
  box-shadow: inherit!important;
}
.shadow.direction-left {
  box-shadow: inherit!important;
}
.vue3-easy-data-table__body td{
    position: relative;
    vertical-align: middle;
    padding: 10px 4px !important;
    font-size: 14px;
}


@media (max-width: 1024px) {
  .thumbnail {
    width: 50px;
    height:50px;
  }
}

</style>