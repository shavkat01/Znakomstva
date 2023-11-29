<template>
    <div class="w-full md:mt-0 mt-5">
        <h1 class="md:block hidden font-semibold text-[28px]">Личный счет</h1>
        <div class="max-w-[400px] text-center">
            <div class="md:flex md:justify-between py-5">
                <h3 class="text-[16px] text-[#6E447B] md:text-[#FFF]">Статус подписки</h3>
                <p class="font-semibold md:mt-0 mt-3">На месяц, до 20.11.2021</p>
            </div>
            <hr>
            <div class="md:flex justify-between py-5">
                <h3 class="text-[16px] text-[#6E447B] md:text-[#FFF]">Текущий баланс</h3>
                <p class="font-semibold md:mt-0 mt-3">2548 руб</p>
            </div>
            <button @click="windowUiStorage.chat_open = true" class="custom-btn text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                <p>Пополнить</p>
            </button>
        </div>
    </div>
</template>

<style scoped>
hr {
  border: 1px solid #4A2956;
}
</style>