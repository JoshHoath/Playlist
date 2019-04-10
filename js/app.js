Vue.component('Playlist',{
    data() {
        return {
            songs: [
                { id:1, artist: 'Asap Rocky', title:'Sundress'},
                { id:2, artist: 'Lil Nas', title: 'Old Town Road - Bill Ray Cyrus Remix'}
            ],

            newSong: {
                artist: '',
                title: '',
            }
        }
    },
    methods: {
            addSong() {
                this.songs.push({ artist: this.newSong.artist , title: this.newSong.title });
                this.clearSong();
            },
            clearSong() {
                this.newSong = {artist: '', title: '',}
            }
    },
    template: `
        <div>
            <div class="list-group">
                <song v-for="(item, index) in songs">
                    <div class="artist">
                        {{ item.artist }} - {{ item.title }}
                    </div>
                </song>
            </div>
            <form @submit.prevent="addSong">
                <input type="text" v-model="newSong.artist" placeholder="Artist"/><input type="text" v-model="newSong.title" placeholder="Song" />
                <button type="submit">Add Song</button>
            </form>
        </div>
    `
})

Vue.component('song', {
    data() {
        return {}
    },
    methods: {

    },
    template: `
        <div>
            <slot></slot>
        </div>
    `
})

const app = new Vue({
    el: '#app'
})
