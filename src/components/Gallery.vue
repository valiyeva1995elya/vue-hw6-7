<template>
    <main>
        <nav>
            <button class="add-btn mr-50" @click="goToHomePage">Главная страница</button>
            <button class="add-btn mr-50" @click="goToContacts">Контакты</button>
        </nav>
        <h1>Галерея</h1>
        <div class="wrapper">
            <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlide) + '%' }">
                <div v-for="slide in slides">
                    <img :src="slide.image" alt="">
                </div>
            </div>
            <div class="block-btn">
                <button class="btn" @click="prevSlide">Назад</button>
                <button class="btn" @click="nextSlide">Вперед</button>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {

            slides: [
                {
                    id: 1,
                    image: "/src/components/img/94c56e15f13f1de4740a76742b0b594f.jpeg"
                },
                {
                    id: 2,
                    image: "/src/components/img/1672127971_kartinkin-net-p-krasivie-kartinki-fantastika-oboi-14.jpg"
                },
                {
                    id: 3,
                    image: "/src/components/img/img2.webp"
                },
                {
                    id: 4,
                    image: "/src/components/img/img3.webp"
                },
                {
                    id: 5,
                    image: "/src/components/img/img4.webp"
                }
            ],
            currentSlide: 0,

        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--
            }
        },
        nextSlide() {
            if (this.currentSlide >= this.slides.length - 1) {
                this.currentSlide = 0
            }
            this.currentSlide++
        },
        goToContacts() {
            this.$router.push("/third")
        },
        goToHomePage() {
            this.$router.push("/first")
        },
    }
}
</script>


<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav {
    padding-bottom: 30px;
    box-sizing: border-box;
    margin-top: 30px;
    border-bottom: 1px solid rgba(72, 142, 247, 0.892);
    ;
    display: flex;
    justify-content: end;
    width: 100%;
    box-shadow: 3px 3px 3px rgba(72, 142, 247, 0.892);
    ;
}

.add-btn {
    width: 155px;
    height: 25px;
    border-radius: 10px;
    background-color: rgb(255, 150, 206);
    border: 3px solid rgb(255, 150, 206);
    color: white;
    box-shadow: 2px 2px 7px blue;
    cursor: pointer;
}

.mr-50 {
    margin-right: 50px;
}

img {
    width: 700px;
    height: 400px;
}

.wrapper {
    max-width: 700px;
    overflow: hidden;
    margin: 0 auto;

}

.carousel {
    display: flex;
    transition: all ease .5s;
}

h1 {
    color: rgb(255, 150, 206);
    margin: 50px;
}
.block-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.btn{
    width: 100px;
    height: 25px;
    border-radius: 10px;
    background-color: rgb(255, 150, 206);
    border: 3px solid rgb(255, 150, 206);
    color: white;
    box-shadow: 2px 2px 7px blue;
    cursor: pointer;
    margin: 20px;
}
</style>