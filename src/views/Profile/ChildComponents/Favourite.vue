<template>
    <div class="w-full md:mt-0 mt-5">
        <h1 class="md:block hidden font-semibold text-[28px]">Избранное</h1>
        <div class="w-full flex flex-wrap gap-3 justify-between mt-3">
            <div @click.self="router.push({path: '/message', params: {id: i}})" v-for="i in 3" :key="i" class="card md:max-w-[350px] max-w-[162px]">
                <img class="absolute top-4 right-4" src="@/assets/icons/delete-button.svg" alt="">
                <img src="@/assets/images/fav-photo.svg" class="w-full" alt="icon">
                <div class="absolute w-full -bottom-[1px]">
                    <div class="px-4 py-6">
                        <h3 class="text-bold flex card-name">Виктор 30 <p></p></h3>
                        <div class="flex gap-2 text-[12px]">
                            <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                            <p>Россия</p>
                        </div>
                    </div>
                    <button class="custom-btn w-full text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                        <p>Поприветствовать</p>
                        <img src="@/assets/icons/Hand.svg" alt="icon">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>