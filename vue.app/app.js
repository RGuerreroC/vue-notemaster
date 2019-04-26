var app = new Vue({
    el: '#app',
    data: {
        title: 'NoteMaster',
        note: {
            title: '',
            text: ''
        },
        notes: JSON.parse(localStorage.getItem('notes'))
    },
    methods: {
        addNote() {
            let { text, title } = this.note
            this.notes.push({
                text,
                title,
                date: new Date(Date.now()).toLocaleString()
            })
            localStorage.setItem('notes', JSON.stringify(this.notes))
        },
        removeNote(index) {
            this.notes.splice(index, 1)
            localStorage.setItem('notes', JSON.stringify(this.notes))
        }
    }
});