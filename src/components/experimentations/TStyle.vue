<script>
import { Fragment, h } from 'vue'

export default {
  props: {
    condition: {
      type: String,
      default: '',
    },
    ifFalse: {
      type: String,
      default: '',
    },
    ifTrue: {
      type: String,
      default: '',
    },
  },
  computed: {
    accordingClass() {
      // returns the style according to the condition
      //todo! eval needs to be replaced with a better solution, at least properly sanitized
      return eval(this.condition) ? this.ifTrue : this.ifFalse
    },
    doNeedContainer() {
      //? if all of the 3 props are truthy, we can return a div, otherwise return just the text node
      if ([this.condition, this.ifTrue, this.ifFalse].every((el) => !!el)) {
        //? we can't style text nodes, so we need an element here, https://stackoverflow.com/q/5688712/8816585
        return 'div'
      }
      return Fragment
    },
  },
  mounted() {
    //* to get all the props passed down to the component
    console.log('this', this.$props)
  },
  render() {
    return [h(this.doNeedContainer, { class: this.accordingClass }, this.$slots.default())]
  },
}
//doc vue3 style reference https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md
</script>
