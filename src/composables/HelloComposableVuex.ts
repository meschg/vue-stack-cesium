
import { ref, reactive, computed } from '@vue/composition-api'
import { mapState, mapMutations } from 'vuex'

export default function fileCompositionVuex() {
    computed: mapState([
        'count'
    ])

    const vuexRObj: any = reactive({
        count: 0,
    })

    function incrementVuex() {
        this.$store.commit("increment");
        console.warn("Fancy vuex store action!" + this.count)
    }

    return { vuexRObj, incrementVuex }
}