<template>
    <main>
        <nav>
            <button class="add-btn mr-50" @click="goToHomePage">Главная страница</button>
            <button class="add-btn mr-50" @click="goToGallery">Галерея</button>
        </nav>
        
        <h2>Добавить контакт:</h2>
        <div class="block-add">
            <input type="text" v-model="text" placeholder="Имя"><br>
            <input type="number" v-model="tel" placeholder="Номер"><br>
            <button class="add-btn" @click="addCont">Добавить</button>
        </div>
       
        <h1>Мои контакты:</h1>
        <div class="block-contacts">
            <div class="block-cont" v-for="contact in contacts" :key="contact.id">
                <p>Имя: <b>{{ contact.name }}</b></p>
                <p>Номер: <b>{{ contact.number }}</b></p>
                <button class="delet-btn" @click="deleteCont(contact.id)">Удалить</button>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: "Мадина",
                    number: 87779999999
                },
                {
                    id: 2,
                    name: "Аслан",
                    number: 87017017171
                },
                {
                    id: 3,
                    name: "Данияр",
                    number: 87007007777
                },
                {
                    id: 4,
                    name: "Ильяс",
                    number: 87779996999
                },
                {
                    id: 5,
                    name: "Анара",
                    number: 87021111111
                },
                {
                    id: 6,
                    name: "Глеб",
                    number: 87771117777
                }
            ],
            text: "",
            tel: "",
        }

    },
    methods: {
        addCont() {
            if (this.text == "" || this.tel == "") {
                return
            }
            let newCont = {
                id: this.contacts.at(-1)?.id + 1 || 1,
                name: this.text,
                number: this.tel
            }
            this.contacts.push(newCont)
            this.text = ""
            this.tel = ""
            console.log(this.contacts)
        },
        deleteCont(id) {
            this.contacts = this.contacts.filter(item => item.id != id)
        },
        goToHomePage() {
            this.$router.push("/first")
        },
        goToGallery() {
            this.$router.push("/second")
        }

    }
}

</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

nav {
    padding-bottom: 30px;
    box-sizing: border-box;
    margin-top: 30px;
    border-bottom: 1px solid rgba(72, 142, 247, 0.892);
    display: flex;
    justify-content: end;
    width: 100%;
    box-shadow: 3px 3px 3px rgba(72, 142, 247, 0.892);
}

h1,h2 {
    color: rgb(255, 150, 206);
    margin: 50px;
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

.block-add {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

.block-cont {
    box-shadow: 3px 3px 7px blue;
    background-color: rgba(72, 142, 247, 0.892);
    padding: 20px 50px;
    margin: 20px;
    color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.block-contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
}

.delet-btn {

    border-radius: 10px;
    background-color: rgb(255, 150, 206);
    border: 3px solid rgb(255, 150, 206);
    color: white;
    box-shadow: 2px 2px 7px blue;
    cursor: pointer;
    margin-top: 10px;
    width: 100px;
}

.mr-50 {
    margin-right: 50px;
}


</style>