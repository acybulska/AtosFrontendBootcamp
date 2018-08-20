new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertBtn: function() {
                alert('Alert!');
            },
            getValue: function(event) {
                this.value=event.target.value;
            }
        }
    });