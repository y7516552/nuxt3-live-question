<script setup>
const router = useRouter();
const roomsList = ref([]);

const getRoomList = async () => {
    try{
        const res = await fetch('https://nuxr3.zeabur.app/api/v1/rooms').then(res => res.json())
        if(!res.status) return console.log('error',res.message)
        roomsList.value = res.result
        // console.log(res.result)
    }catch(error) {
        console.log('error',error)
    }
}
getRoomList()
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-3" v-for="room in roomsList" :key="room._id">
        <div class="card h-100 shadow-sm" @click="router.push('/room/_id')">
        <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">{{ room.name }}</h3>
          <p class="card-text flex-grow-1">{{ room.description }}</p>
          <ul class="list-unstyled">
            <li><strong>面積:</strong> {{ room.areaInfo }}</li>
            <li><strong>床型:</strong> {{ room.bedInfo }}</li>
            <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
            <li><strong>價格:</strong> {{ room.price }}</li>
          </ul>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  cursor: pointer;
}
.card-img-top {
  object-fit: cover;
  height: 200px;
  max-width: 100%;
}

</style>
