Vue.component('ondev-panel-block', {
    template: `
    <a v-show="isActive" class="panel-block">
      <span class="panel-icon">
        <i :class="icon"></i>
      </span><slot></slot>
    </a>
  `,
    props: {
        icone: {
            required: true,
            default: ''
        },
        selected: {
            default: false
        },
        name: {
            required: true
        }
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        icon() {
            return 'fa fa-' + this.icone;
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
});
