new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    newClass: '',
    checkClass: true,
    newStyle: {
      width: '200px',
      height: '200px',
      backgroundColor: 'black'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'yellow'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500)
    }
  }
});
