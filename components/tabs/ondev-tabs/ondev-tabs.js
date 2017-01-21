Vue.component('ondev-tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>    
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
    `,
    
    data() {
        return {
            tabs: []
        };
    },
    
    created() {        
        this.tabs = this.$children;
    },
    
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            })
        }
    }
});