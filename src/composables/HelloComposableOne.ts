import { ref, reactive, computed, toRefs } from "vue";

export default function fileCompositionOne() {
  const refValue = ref(42);
  const recObj: any = reactive({
    clickCount: 0,
    itemList: ["cheese", "apple", "Jonny"],
    double: computed(() => recObj.clickCount * 2),
    itemAmount: computed(() => recObj.itemList.length),
  });

  function incrementComp() {
    recObj.clickCount++;
    refValue.value += refValue.value;
    recObj.itemList.push(recObj.clickCount + " + " + refValue.value);
  }

  return { recObj, incrementComp, refValue };
}
