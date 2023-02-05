<template>
    <main>
        <nav>
            <button class="add-btn mr-50" @click="goToGallery">Галерея</button>
            <button class="add-btn mr-50" @click="goToContacts">Контакты</button>
        </nav>

        <h1>Главная страница</h1>
        <div class="block" v-if="mainModel">
            <div class="block-img">
                <img :src="imgUrl" alt="">
                <button class="add-btn" @click="addImg">Изменить</button>
            </div>
            <div>
                <p>Имя: <b>{{ acc.name }}</b></p>
                <p>Фамилия: <b>{{ acc.surname }}</b></p>
                <p>Возраст: <b>{{ acc.age }}</b></p>
                <p>Номер: <b>{{ acc.number }}</b></p>
                <button class="add-btn mt-20" @click="addData">Редактировать</button>
            </div>
        </div>

        <div v-if="dispModel">
            <h3>Добавить фото:</h3>
            <input type="text" placeholder="ссылка" v-model="imgUrl"><br>
            <button class="add-btn mt-20" @click="saveImg">Cохранить</button>
        </div>
        <div v-if="dispModel2">
            <h3>Изменить данные:</h3>
            <input type="text" placeholder="Имя" v-model="newName"><br>
            <input type="text" placeholder="Фамилия" v-model="newSurname"><br>
            <input type="number" placeholder="Возраст" v-model="newAge"><br>
            <input type="number" placeholder="Номер" v-model="newNumb"><br>
            <button class="add-btn mt-20" @click="saveData">Cохранить</button>
        </div>
        <div class="add-post">
            <input type="text" placeholder="Тема" v-model="title">
            <textarea name="" v-model="post" id="" cols="30" rows="10"></textarea>
            <button class="add-btn" @click="addPost">Добавить пост</button>
        </div>
        <div>
            <div class="post" v-for="post in posts">
                <h4>{{ post.title }}</h4>
                <p class="post-text">{{ post.post }}</p>
                <p class="date">{{ date }}</p>
            </div>
        </div>

        


    </main>
</template>

<script>
export default {
    data() {
        return {
            acc: {
                name: "Эльмира",
                surname: "Валиева",
                age: 27,
                number: 87773337777

            },
            posts:[],
            dispModel: false,
            dispModel2: false,
            imgUrl: "https://abrakadabra.fun/uploads/posts/2022-03/1646469508_15-abrakadabra-fun-p-ava-v-odnoklassnikakh-bez-fona-38.jpg",
            mainModel: true,
            newName: "",
            newSurname: "",
            newAge: "",
            newNumb: "",
            title: "",
            post: "",
            date: new Date().toLocaleDateString('en-GB')
        }
    }, methods: {
        goToContacts() {
            this.$router.push("/third")
        },
        goToGallery() {
            this.$router.push("/second")
        },
        addImg() {
            this.dispModel = true
            this.mainModel = false
            this.imgUrl = ""
        },
        saveImg() {
            if (this.imgUrl == "") {
                return
            }
            this.imgUrl == this.imgUrl,
            this.dispModel = false
            this.mainModel = true

        },
        addData() {
            this.dispModel2 = true
            this.mainModel = false
            this.newName = "",
            this.newSurname = "",
            this.newAge = "",
            this.newNumb = ""
        },
        saveData() {
            if (this.newName == "" ||this.newSurname == "" ||this.newAge == "" ||this.newNumb == "") {
                return
            }
            let newAcc = {
            name: this.newName,
            surname: this.newSurname,
            age: this.newAge,
            number: this.newNumb,
            }
            this.acc = newAcc
            this.dispModel2 = false
            this.mainModel = true
            console.log(this.imgUrl);

        },
        addPost(){
            if(this.title == "" || this.post == ""){
                return
            }
            let newPost = {
                id: this.posts[this.posts.length - 1]?.id + 1 || 1,
                title: this.title,
                post: this.post,
            }
            this.posts.push(newPost)
            this.title = ""
            this.post = ""
            console.log(this.posts);
        }
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

h1 {
    color: rgb(255, 150, 206);
    margin: 50px;
}

h3 {
    color: rgb(255, 150, 206);
    margin-bottom: 20px;

}
h4{
    color: rgba(0, 102, 255, 0.892);
    font-size: 25px;

}

img {
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 100px;
    margin-bottom: 20px;

}

.block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
}

.block-img {
    display: flex;
    flex-direction: column;
    align-items: center;

}

p {
    color: rgba(72, 142, 247, 0.892);
    font-size: 15px;

}

b {
    color: rgba(0, 100, 250, 0.892);
    font-size: 20px;
}

.mt-20 {
    margin-top: 10px;
}
.date-block{
    color: rgb(255, 150, 206);
    font-size: 20px;
    position: absolute;
    bottom: 0px;

}
input {
    width: 150px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(124, 251, 255, 0.312);
    border: 3px solid rgb(255, 150, 206);
    margin-bottom: 10px;
    color: rgb(255, 150, 206);
    
}
textarea{
    background-color: rgba(124, 251, 255, 0.312);
    border: 3px solid rgb(255, 150, 206);
    border-radius: 15px;
    width: 200px;
    margin: 20px;
    color: rgb(255, 150, 206);
}
.add-post{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
.post{
    border: 3px solid rgba(41, 123, 246, 0.892);
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 15px;
    width: 200px;
}
.post-text{
    font-size: 20px;
}
.date{
    font-style: italic;
    font-size: 10px;
    margin-top: 20px;
    position: relative;
    left: 150px;
}
</style>