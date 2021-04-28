// Attraverso una chiamata ajax all’API di boolean avremo a disposizione una decina di dischi musicali.
// https://flynn.boolean.careers/exercises/api/array/music 
//  Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.
var app = new Vue(
    {
    el: '#root',
    data: {  
        songList: [],
    }, 
    methods: {
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music ')
            .then((response) => {
                const result = response.data;

                this.songList = result.response ;
            });
    }
});
