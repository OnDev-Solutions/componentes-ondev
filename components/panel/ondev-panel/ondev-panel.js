Vue.component('ondev-panel', {
    template: `
    <div>
      <nav class="panel">
          <p class="panel-tabs">
            <a v-for="panel in panels" @click="selectPanel(panel)" :class="{ 'is-active': panel.isActive }">
                {{ panel.name }}
            </a>
          </p>
          <slot></slot>
        </nav>
    </div>
    `,
    data() {
        return {
            panels: []
        };
    },
    created() {
        this.panels = this.$children;
    },
    methods: {
        selectPanel(selectedPanel) {
            this.panels.forEach(panel => {
                panel.isActive = (panel.name == selectedPanel.name);
            })
        }
    }
});
