
import { ref, reactive, computed } from '@vue/composition-api'

export default function fileCompositionTwo() {

    const secondRObj: any = reactive({
        clickCount: 0,
        clickified: computed(() => secondRObj.clickCount * secondRObj.clickCount)
    })

    function clickIncrement() {
        secondRObj.clickCount++
    }

    return { secondRObj, clickIncrement }
}